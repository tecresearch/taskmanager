import React from 'react'
import { FaGithub, FaLinkedin, FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {

  return (
    <>
    {/* Footer */}
    <footer id="contact" className="bg-gray-900 py-8 text-center text-white">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400">Home</a></li>
              <li><a href="#Developer" className="hover:text-blue-400">About Us</a></li>
              <li><a href="#features" className="hover:text-blue-400">Services</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </div>
    
          {/* Subscribe */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-sm mb-4">Stay updated with our latest news and updates. Enter your email below:</p>
            <form action="" method="POST" className="flex flex-col sm:flex-row justify-center gap-4">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-black focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
    
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-sm">Developed by <strong>Mr. Brijesh Nishad</strong></p>
            <p className="text-sm">Email: <a href="mailto:bnlv1212@gmail.com" className="hover:text-blue-400">bnlv1212@gmail.com</a></p>
            <p className="text-sm">Phone: <a href="tel:+919506563150" className="hover:text-blue-400">9506563150</a></p>
          </div>
        </div>
    
        {/* Social Media Links */}
        <div className="mt-6 flex justify-center gap-8">
          <a href="https://github.com/tecresearch" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaGithub size={24} />
          </a>
          <a href="https://www.instagram.com/mr.brijesh.mee/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaInstagram size={24} />
          </a>
          <a href="https://www.linkedin.com/in/brijesh-nishad/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.facebook.com/brijesh150/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
            <FaFacebookF size={24} />
          </a>
        </div>
    
        {/* Copyright Section */}
        <div className="mt-8">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} <span className="font-semibold">TechResearch founded by Mr.Brijesh</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Footer