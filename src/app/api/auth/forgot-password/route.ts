import clientPromise from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto"

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json()

        if (!email) {
            return NextResponse.json(
                { error: "Email is required" },
                { status: 400 }
            )
        }

        const client = await clientPromise
        const users = client.db(process.env.MONGODB_NAME).collection("users")

        const user = await users.findOne({ email })
        if (!user) {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            )
        }

        // Genarate a password reset token
        const resetToken = crypto.randomBytes(32).toString("hex")
        const resetTokenExpiry = new Date(Date.now() + 3600000) // 1 hour

        // save reset token to database 
        await users.updateOne(
            { email },
            {
                $set: {
                    resetToken,
                    resetTokenExpiry,
                }
            }
        )

        // Here send an email to the user tith the reset link
        const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`

        return NextResponse.json({
            message: "Reset token generated",
            resetUrl, // Remove this in production, send via email instead
        })
    } catch {
        // console.error("Forgot password error:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }

}