
import clientPromise from "@/lib/mongodb"
import CareersClient from "./CareersClient"


export const revalidate = 60

async function getJobPosts() {
  const client = await clientPromise
  const jobs = await client
    .db(process.env.MONGODB_NAME)
    .collection('jobs')
    .find() 
    .limit(20)
    .toArray()
  
  return JSON.parse(JSON.stringify(jobs))
}


export default async function Careers() {

  const jobs = await getJobPosts()

  return <CareersClient initialJobs={jobs} />
}