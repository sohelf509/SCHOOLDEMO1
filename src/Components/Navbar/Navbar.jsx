import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full">
      {/* Top Bar */}
      <div className="bg-green-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:00000000000" className="flex items-center gap-2 hover:opacity-80">
              <Phone size={16} />
              <span>000 0000 0000</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:INFO@DEMO.CO.IN" className="flex items-center gap-2 hover:opacity-80">
              <Mail size={16} />
              <span className="hidden sm:inline">INFO@DEMO.CO.IN</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:opacity-80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="hover:opacity-80">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-green-700">
                  <div className="font-bold text-lg leading-tight">DEMO</div>
                  <div className="text-sm font-semibold">INTERNATIONAL SCHOOL</div>
                </div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 text-gray-700 font-medium">
              <div className="relative group">
                <button className="hover:text-green-600 transition flex items-center gap-1">
                  About US
                  <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/about#vision-mission" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition">Vision & Mission</Link>
                </div>
              </div>
              <Link to="/why-us" className="hover:text-green-600 transition">Why Us?</Link>
              <div className="relative group">
                <button className="hover:text-green-600 transition flex items-center gap-1">
                  Admissions
                  <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/admissionsapplynow" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition">Apply Now</Link>
                  <Link to="/admission-process" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition">Admission Process</Link>
                  <Link to="/admissions#fee-structure" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition">Fee Structure</Link>
                  <Link to="/admissions#school-timing" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition">School Timing</Link>
                  <Link to="/admissions#uniform" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition">Uniform</Link>
                  <Link to="/admissions#upcoming-events" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition">Upcoming Events</Link>
                </div>
              </div>
              <div className="relative group">
                <button className="hover:text-green-600 transition flex items-center gap-1">
                  News & Events
                  <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/news#toppers" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition">Toppers</Link>
                  <Link to="/news#school-events" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition">School Events</Link>
                </div>
              </div>
              <Link to="/alumni" className="hover:text-green-600 transition">Incredible Alumni</Link>
              <div className="relative group">
                <button className="hover:text-green-600 transition flex items-center gap-1">
                  Contact Us
                  <ChevronDown size={16} />
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/contact#contact-info" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition">Contact Information</Link>
                  <Link to="/contact#how-to-reach" className="block px-4 py-3 hover:bg-green-50 hover:text-green-600 transition">How to Reach?</Link>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black bg-opacity-50"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
        
        {/* Sidebar */}
        <div className={`absolute right-0 top-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 overflow-y-auto ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Sidebar Header */}
          <div className="bg-green-600 p-4">
            <div className="flex justify-between items-start">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div className="text-white">
                  <div className="font-bold text-base leading-tight">SOUTH CITY</div>
                  <div className="text-xs font-semibold">INTERNATIONAL SCHOOL</div>
                </div>
              </div>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          {/* Sidebar Menu Items */}
          <div className="p-4 space-y-1 text-gray-700">
            <div className="border-b border-gray-200">
               <Link to="/" onClick={closeMobileMenu} className="block py-3 border-b border-gray-200 font-medium active:bg-green-50 active:text-green-600 transition-colors rounded">Home</Link>
              <button 
                onClick={() => toggleDropdown('about')}
                className="w-full flex justify-between items-center py-3 text-left font-medium active:bg-green-50 active:text-green-600 transition-colors rounded"
              >
                About US
                <ChevronDown 
                  size={18} 
                  className={`transform transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'about' ? 'max-h-60 mb-2' : 'max-h-0'}`}>
                <Link to="/about#vision-mission" onClick={closeMobileMenu} className="block py-2 pl-6 text-gray-600 active:bg-green-50 active:text-green-600 transition-colors rounded">Vision & Mission</Link>
              </div>
            </div>
            
            <Link to="/why-us" onClick={closeMobileMenu} className="block py-3 border-b border-gray-200 font-medium active:bg-green-50 active:text-green-600 transition-colors rounded">Why Us?</Link>  
            
            <div className="border-b border-gray-200">
              <button 
                onClick={() => toggleDropdown('admissions')}
                className="w-full flex justify-between items-center py-3 text-left font-medium active:bg-green-50 active:text-green-600 transition-colors rounded"
              >
                Admissions
                <ChevronDown 
                  size={18} 
                  className={`transform transition-transform ${openDropdown === 'admissions' ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'admissions' ? 'max-h-96 mb-2' : 'max-h-0'}`}>
                <Link to="/admissionsapplynow" onClick={closeMobileMenu} className="block py-2 pl-6 text-gray-600 active:bg-green-50 active:text-green-600 transition-colors rounded">Apply Now</Link>
                <Link to="/admission-process" onClick={closeMobileMenu} className="block py-2 pl-6 text-gray-600 active:bg-green-50 active:text-green-600 transition-colors rounded">Admission Process</Link>
                <Link to="/admissions#fee-structure" onClick={closeMobileMenu} className="block py-2 pl-6 text-gray-600 active:bg-green-50 active:text-green-600 transition-colors rounded">Fee Structure</Link>
                <Link to="/admissions#school-timing" onClick={closeMobileMenu} className="block py-2 pl-6 text-gray-600 active:bg-green-50 active:text-green-600 transition-colors rounded">School Timing</Link>
                <Link to="/admissions#uniform" onClick={closeMobileMenu} className="block py-2 pl-6 text-gray-600 active:bg-green-50 active:text-green-600 transition-colors rounded">Uniform</Link>
                <Link to="/admissions#upcoming-events" onClick={closeMobileMenu} className="block py-2 pl-6 text-gray-600 active:bg-green-50 active:text-green-600 transition-colors rounded">Upcoming Events</Link>
              </div>
            </div>
            
            <div className="border-b border-gray-200">
              <button 
                onClick={() => toggleDropdown('news')}
                className="w-full flex justify-between items-center py-3 text-left font-medium active:bg-green-50 active:text-green-600 transition-colors rounded"
              >
                News & Events
                <ChevronDown 
                  size={18} 
                  className={`transform transition-transform ${openDropdown === 'news' ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'news' ? 'max-h-40 mb-2' : 'max-h-0'}`}>
                <Link to="/news#toppers" onClick={closeMobileMenu} className="block py-2 pl-6 text-gray-600 active:bg-green-50 active:text-green-600 transition-colors rounded">Toppers</Link>
                <Link to="/news#school-events" onClick={closeMobileMenu} className="block py-2 pl-6 text-gray-600 active:bg-green-50 active:text-green-600 transition-colors rounded">School Events</Link>
              </div>
            </div>
            
            <Link to="/alumni" onClick={closeMobileMenu} className="block py-3 border-b border-gray-200 font-medium active:bg-green-50 active:text-green-600 transition-colors rounded">Incredible Alumni</Link>
            
            <div className="border-b border-gray-200">
              <button 
                onClick={() => toggleDropdown('contact')}
                className="w-full flex justify-between items-center py-3 text-left font-medium active:bg-green-50 active:text-green-600 transition-colors rounded"
              >
                Contact Us
                <ChevronDown 
                  size={18} 
                  className={`transform transition-transform ${openDropdown === 'contact' ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openDropdown === 'contact' ? 'max-h-40 mb-2' : 'max-h-0'}`}>
                <Link to="/contact#contact-info" onClick={closeMobileMenu} className="block py-2 pl-6 text-gray-600 active:bg-green-50 active:text-green-600 transition-colors rounded">Contact Information</Link>
                <Link to="/contact#how-to-reach" onClick={closeMobileMenu} className="block py-2 pl-6 text-gray-600 active:bg-green-50 active:text-green-600 transition-colors rounded">How to Reach?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;