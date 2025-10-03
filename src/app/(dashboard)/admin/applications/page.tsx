import clientPromise from '@/lib/mongodb'
// import ApplicationsClient from './ApplicationsClient'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import ApplicationsClient from './ApplicationsClient'

export const revalidate = 0 // No caching for real-time data

async function getApplications() {
  const client = await clientPromise
  const applications = await client
    .db(process.env.MONGODB_NAME)
    .collection('job_applications')
    .aggregate([
      {
        $sort: { appliedAt: -1 }
      },
      {
        $project: {
          fullName: 1,
          jobTitle: 1,
          email: 1,
          phone: 1,
          education: 1,
          address: 1,
          resumePath: 1,
          status: 1,
          appliedAt: 1,
          coverLetter: 1
        }
      }
    ])
    .toArray()
  
  return JSON.parse(JSON.stringify(applications))
}

export default async function ApplicationsPage() {
  const session = await getServerSession(authOptions)
  
  if (!session || session.user.role !== 'admin') {
    redirect('/unauthorized')
  }

  const applications = await getApplications()

  return <ApplicationsClient initialApplications={applications} />
}