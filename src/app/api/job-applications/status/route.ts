import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"

export async function PATCH(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)

    if (!session || session.user.role !== 'admin') {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { applicationId, status } = await request.json()

    if (!['approved', 'rejected', 'pending'].includes(status)) {
      return NextResponse.json({ error: "Invalid status" }, { status: 400 })
    }

    const client = await clientPromise
    const applications = client.db(process.env.MONGODB_NAME).collection("job_applications")

    await applications.updateOne(
      { _id: new ObjectId(applicationId) },
      { 
        $set: { 
          status,
          updatedAt: new Date()
        } 
      }
    )

    return NextResponse.json({ message: "Status updated successfully" })
  } catch (error) {
    console.error("Status update error:", error)
    return NextResponse.json(
      { error: "Failed to update status" },
      { status: 500 }
    )
  }
}