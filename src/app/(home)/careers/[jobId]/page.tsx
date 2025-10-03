
import clientPromise from '@/lib/mongodb'
import { ObjectId } from 'mongodb'
import JobDetailsClient from './JobDetailsClient'
import { notFound } from 'next/navigation'

async function getJobById(jobId: string) {
  try {
    const client = await clientPromise
    const job = await client
      .db(process.env.MONGODB_NAME)
      .collection('jobs')
      .findOne({ _id: new ObjectId(jobId) })
    
    return JSON.parse(JSON.stringify(job))
  } catch (error) {
    return null
  }
}

export default async function JobDetailsPage({ 
  params 
}: { 
  params: Promise<{ jobId: string }> 
}) {
  const { jobId } = await params 
  const job = await getJobById(jobId)
  
  if (!job) {
    notFound()
  }

  return <JobDetailsClient job={job} />
}