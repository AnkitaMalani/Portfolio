import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.dropdown')) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  // Close mobile menu on window resize and prevent body scroll
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    // Prevent body scroll when mobile menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <div className="navbar shadow-lg fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 lg:px-8 h-16 bg-[#0E1320] max-w-full">
      <div className="navbar-start flex-1">
        <a className="btn btn-ghost text-lg md:text-xl font-bold text-white">
          <span className="hidden sm:inline">Portfolio</span>
          <span className="sm:hidden">AM</span>
        </a>
      </div>
      
      <div className="navbar-end flex-none">
        {/* Desktop Navigation */}
        <ul className="menu menu-horizontal px-1 hidden lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="hover:text-[#CBACF9] transition-colors duration-200 px-3 py-2 rounded-lg text-white"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Tablet Navigation */}
        <ul className="menu menu-horizontal px-1 hidden md:flex lg:hidden">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href)}
                className="hover:text-[#CBACF9] hover:underline underline-offset-5 transition-colors duration-200 px-2 py-1 text-sm rounded text-white"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Mobile menu button */}
        <div className="dropdown md:hidden relative">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle text-white border-none bg-transparent hover:bg-[#CBACF9]/20"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </div>
          
          {isMenuOpen && (
            <>
              {/* Mobile menu overlay */}
              <div 
                className="fixed inset-0 bg-black/50 z-40"
                onClick={() => setIsMenuOpen(false)}
              ></div>
              
              {/* Mobile menu */}
              <div className="fixed top-16 right-0 bottom-0 z-50 bg-[#0E1320] border-l border-gray-700 w-full max-w-xs overflow-y-auto shadow-2xl">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-bold text-white">Navigation</h3>
                    <button 
                      className="btn btn-ghost btn-circle btn-sm text-white hover:bg-gray-700/50"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      ✕
                    </button>
                  </div>
                  
                  <nav className="space-y-2">
                    {navItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="w-full text-left px-4 py-3 text-white hover:bg-[#CBACF9]/20 hover:text-[#CBACF9] rounded-lg transition-colors duration-200 border border-transparent hover:border-[#CBACF9]/30"
                      >
                        {item.name}
                      </button>
                    ))}
                    
                    <div className="border-t border-gray-600 my-4"></div>
                    
                    <button 
                      onClick={() => scrollToSection('#contact')}
                      className="w-full text-left px-4 py-3 bg-[#CBACF9] hover:bg-[#B794F6] text-black rounded-lg transition-colors duration-200 font-medium"
                    >
                      Get In Touch
                    </button>
                  </nav>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar