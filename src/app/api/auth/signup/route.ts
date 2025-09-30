
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const { name, email, password } = await request.json()

        if (!name || !email || !password) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            )
        }

        if (password.length < 6) {
            return NextResponse.json(
                { error: "Password must be at least 6 characters" },
                { status: 400 }
            )
        }

        const client = await clientPromise
        const users = client.db(process.env.MONGODB_NAME).collection("users")

        // chack if user alrady exists
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            return NextResponse.json(
                { error: "User alrady exists" },
                { status: 400 }
            )
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 12)

        // Create user
        const result = await users.insertOne({
            name,
            email,
            password: hashedPassword,
            createdAt: new Date(),
            emailVerified: null,
        })

        return NextResponse.json(
            { message: "User created successfully", userId: result.insertedId },
            { status: 201 }
        )

    } catch (error) {
        // console.error("Signup error:", error)
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        )
    }
}