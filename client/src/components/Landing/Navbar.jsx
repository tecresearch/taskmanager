import React, { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for hamburger menu visibility

  // Function to close the mobile menu
  const closeMenu = () => setIsMenuOpen(false);

  // Function to open the mobile menu
  const openMenu = () => setIsMenuOpen(true);
  
  return (
    <>
      {/* Navbar */}
      <nav className="  flex justify-between items-center p-6 bg-gray-800 shadow-lg relative">
        <div className="text-2xl font-bold">TaskManager</div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex space-x-6">
          <a href="#features" className="hover:text-gray-400">Features</a>
          <a
            href="#Developer"
            className="hover:text-gray-400"
          >
            Developer
          </a>
          <a href="#testimonials" className="hover:text-gray-400">Testimonials</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Hamburger Button for Mobile */}
        <div className="sm:hidden relative">
          <button
            className={`text-white text-3xl ${isMenuOpen ? 'rotate-90' : ''} transform transition-transform duration-300`}  // Rotate when menu is open
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>

          {/* Mobile Menu (Full Width with Flex layout) */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col justify-center items-center space-y-8 z-20 transition-all duration-500 ease-in-out">
              <a
                href="#features"
                className="text-2xl text-white hover:text-gray-400 transition-all duration-300"
                onClick={() => { closeMenu(); goTO("#features"); }}
              >
                Features
              </a>
              <a
                href="#Developer"
                className="text-2xl text-white hover:text-gray-400 transition-all duration-300"
                onClick={() => { closeMenu(); scrollToDeveloper(); }}  // Scroll to Developer on click
              >
                Developer
              </a>
              <a
                href="#testimonials"
                className="text-2xl text-white hover:text-gray-400 transition-all duration-300"
                onClick={() => { closeMenu(); goTO("#testimonials"); }}
              >
                Testimonials
              </a>
              <a
                href="#contact"
                className="text-2xl text-white hover:text-gray-400 transition-all duration-300"
                onClick={() => { closeMenu(); goTO("#contact"); }}
              >
                Contact
              </a>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}

export default Navbar