
"use client";

import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Image  from "../../../../public/authumage/Forgot Password Illustration.jpg";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Password reset request for:", email);
    // Handle password reset logic here (API call etc.)
  };

  return (
    <div className="relative flex justify-center items-center bg-white min-h-screen overflow-hidden">
      {/* Background Shapes */}
      <div className="top-0 left-0 absolute bg-[#F4C7AB] opacity-70 blur-2xl rounded-full w-64 h-64 animate-blob mix-blend-multiply filter"></div>
      <div className="bottom-0 left-0 absolute bg-[#9FD9D8] opacity-70 blur-2xl rounded-full w-64 h-64 animate-blob animation-delay-2000 mix-blend-multiply filter"></div>

      {/* Main Container */}
      <div className="z-10 relative flex md:flex-row flex-col justify-between items-center bg-white shadow-2xl p-8 rounded-2xl w-11/12 md:w-9/12 lg:w-8/12">
        
        {/* Forgot Password Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-6 w-full md:w-1/2"
        >
          <h2 className="font-bold text-gray-700 text-2xl md:text-left text-center">
            Reset Your Password
          </h2>
          <p className="text-gray-500 text-sm md:text-left text-center">
            Enter your registered email address and we’ll send you a link to reset your password.
          </p>

          {/* Email Input */}
          <div className="flex items-center space-x-3 px-4 py-2 border rounded-full">
            <FaEnvelope className="text-[#9FD9D8]" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="focus:outline-none w-full"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#9FD9D8] hover:bg-[#7bb9b8] py-2 rounded-full font-semibold text-white transition"
          >
            Send Reset Link
          </button>

          {/* Links */}
          <div className="flex justify-between text-gray-500 text-sm">
            <a href="/login" className="hover:text-[#3835A1]">Back to Login</a>
          </div>
        </form>

        {/* Right Side Illustration */}
        <div className="hidden md:flex justify-center w-1/2">
          <img
            src={Image.src}
            alt="Forgot Password Illustration"
            className="max-w-sm"
          />
        </div>
      </div>
    </div>
  );
}
