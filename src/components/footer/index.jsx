import React from 'react'
import Button from '../Button'

const Footer = () => {
  return (
    <footer className="bg-[#2E1C04] text-white py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo and Mission */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img className="w-12 h-12 mb-4" src="/logo.png" alt="Logo" />
          <p className="mb-4 text-sm leading-relaxed">
            Bringing clean water to communities in need.<br />
            It is our joy to see smiles on people's faces.<br />
            Support us today.
          </p>
          <Button text="Donate Now" classStyle="p-3 bg-green-500 text-white rounded-xl hover:bg-green-600 transition-colors" />
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p className="text-sm">+2348064741310</p>
          <p className="text-sm">lawrencebenson18@hotmail.com</p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <p className="text-sm hover:underline cursor-pointer">About Us</p>
          <p className="text-sm hover:underline cursor-pointer">Our Work</p>
          <p className="text-sm hover:underline cursor-pointer">Our Impact</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-lg font-semibold mb-2">Social Media</h2>
          <p className="text-sm hover:underline cursor-pointer">Facebook</p>
          <p className="text-sm hover:underline cursor-pointer">LinkedIn</p>
          <p className="text-sm hover:underline cursor-pointer">X | Twitter</p>
        </div>

      </div>
      <div className="mt-10 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Clean Water Foundation. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
