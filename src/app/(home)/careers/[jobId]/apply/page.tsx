import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import JobApplicationForm from "./JobApplicationForm"

async function getJobById(jobId: string) {
  const client = await clientPromise
  const job = await client
    .db(process.env.MONGODB_NAME)
    .collection('jobs')
    .findOne({ _id: new ObjectId(jobId) })
  
  return JSON.parse(JSON.stringify(job))
}

export default async function JobApplicationPage({
  params
}: {
  params: Promise<{ jobId: string }> // Changed to Promise
}) {
  const { jobId } = await params // Await params first
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect(`/login?callbackUrl=/careers/${jobId}/apply`)
  }

  const job = await getJobById(jobId)

  if (!job) {
    redirect('/careers')
  }

  return (
    <JobApplicationForm
      job={job}
      userEmail={session.user.email}
      userName={session.user.name}
    />
  )
}