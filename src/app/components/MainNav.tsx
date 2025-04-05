'use client';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-gradient-to-br from-gray-50 to-white text-blue-900 ">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-serif font-bold mt-8">
            <Image 
              src="/cdc.png"  // Path relative to the public folder
              alt="Cross River State Diaspora Commission Logo" 
              width={100} 
              height={100} 
              className="object-contain"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-red-900 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-red-900 transition-colors">
              About
            </Link>
            <Link href="/projects" className="hover:text-red-900 transition-colors">
              Projects
            </Link>
            <Link href="/diaspora" className="hover:text-red-900 transition-colors">
              Diaspora
            </Link>
            <Link href="/news" className="hover:text-red-900 transition-colors">
              News
            </Link>
            <Link href="/contact" className="hover:text-red-900 transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Get Involved Button */}
            <Link href="/get-involved" className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
              Get Involved
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-black"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="hover:bg-blue-100 py-2 px-4 rounded">Home</Link>
              <Link href="/about" className="hover:bg-blue-100 py-2 px-4 rounded">About</Link>
              <Link href="/projects" className="hover:bg-blue-100 py-2 px-4 rounded">Projects</Link>
              <Link href="/diaspora" className="hover:bg-blue-100 py-2 px-4 rounded">Diaspora</Link>
              <Link href="/news" className="hover:bg-blue-100 py-2 px-4 rounded">News</Link>
              <Link href="/contact" className="hover:bg-blue-100 py-2 px-4 rounded">Contact</Link>
              <Link href="/get-involved" className="bg-blue-600 text-white py-2 px-4 rounded text-center font-medium mt-2">
                Get Involved
              </Link>
            </div>
          </div>
        )}
      </div>

      
    </header>
  );
}