import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import clientPromise from "@/lib/mongodb"
import { writeFile } from "fs/promises"
import { join } from "path"

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const formData = await request.formData()
    
    const fullName = formData.get("fullName") as string
    const address = formData.get("address") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const education = formData.get("education") as string
    const coverLetter = formData.get("coverLetter") as string
    const jobTitle = formData.get("jobTitle") as string
    const jobId = formData.get("jobId") as string
    const resumeFile = formData.get("resume") as File

    // Validate required fields
    if (!fullName || !address || !email || !phone || !education ) {
      return NextResponse.json(
        { error: "All required fields must be filled" },
        { status: 400 }
      )
    }

    // Save resume file
    const bytes = await resumeFile.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const filename = `${Date.now()}_${resumeFile.name}`
    const filepath = join(process.cwd(), "public", "uploads", "resumes", filename)
    
    await writeFile(filepath, buffer)

    // Save to database
    const client = await clientPromise
    const applications = client.db(process.env.MONGODB_NAME).collection("job_applications")

    const result = await applications.insertOne({
      userId: session.user.id,
      jobId,
      jobTitle,
      fullName,
      address,
      email,
      phone,
      education,
      coverLetter,
      resumePath: `/uploads/resumes/${filename}`,
      status: "pending",
      appliedAt: new Date(),
    })

    return NextResponse.json({
      message: "Application submitted successfully",
      applicationId: result.insertedId
    })
  } catch (error) {
    console.error("Application submission error:", error)
    return NextResponse.json(
      { error: "Failed to submit application" },
      { status: 500 }
    )
  }
}