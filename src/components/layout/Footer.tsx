"use client"

import { Input } from "@/components/ui/input"
import Logo from "../../../public/Untitled design (5).png"

import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6"
import Button from "../shared/Button"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#fdfdfd] to-[#fafafa] border-gray-200 border-t">
      <div className="mx-auto px-6 lg:px-8 py-12 md:py-16 max-w-7xl">
        <div className="gap-10 grid grid-cols-1 md:grid-cols-4">
          {/* Logo + About */}
          <div>
            <div>
              <Image src={Logo} width={150} alt='Sanchi Gyan'/>
            </div>
            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Nepal&apos;s most trusted online education platform for high school students.  
              Learn smarter with interactive courses, top educators, and engaging resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Quick Links</h3>
            <ul className="space-y-2 mt-4 text-gray-600 text-sm">
              <li><Link href="/" className="hover:text-[#06a6ae] transition">Home</Link></li>
              <li><Link href="/courses" className="hover:text-[#06a6ae] transition">Courses</Link></li>
              <li><Link href="/about" className="hover:text-[#06a6ae] transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#06a6ae] transition">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Resources</h3>
            <ul className="space-y-2 mt-4 text-gray-600 text-sm">
              <li><Link href="/blog" className="hover:text-[#06a6ae] transition">Blog</Link></li>
              <li><Link href="/faq" className="hover:text-[#06a6ae] transition">FAQs</Link></li>
              <li><Link href="/privacy" className="hover:text-[#06a6ae] transition">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#06a6ae] transition">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">Stay Updated</h3>
            <p className="mt-4 text-gray-600 text-sm">
              Subscribe to get the latest courses & study tips directly to your inbox.
            </p>
            <form className="flex gap-2 mt-4">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-xl"
              />
              {/* <Button className="bg-[#06a6ae] hover:bg-[#059298] rounded-xl">
                Subscribe
              </Button> */}
              <Button className="p-2">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-gray-200 border-t"></div>

        {/* Bottom Section */}
        <div className="flex md:flex-row flex-col justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sanchi Gyan. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-5 text-gray-500">
            <Link title="facebook icon" href="https://facebook.com" className="hover:text-[#06a6ae]"><FaFacebook size={20} /></Link>
            <Link title="facebook icon" href="https://facebook.com" className="hover:text-[#06a6ae]"><FaInstagram size={20} /></Link>
            <Link title="facebook icon" href="https://facebook.com" className="hover:text-[#06a6ae]"><FaTwitter size={20} /></Link>
            <Link title="facebook icon" href="https://facebook.com" className="hover:text-[#06a6ae]"><FaLinkedin size={20} /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
