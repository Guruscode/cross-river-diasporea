"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Logo and contact info */}
          <div className="space-y-6">
            <div className="mb-4">
              <Image 
                src="/cdc.png"
                alt="Cross River State Diaspora Commission"
                width={180}
                height={80}
                className="filter brightness-0 invert"
              />
            </div>
            <p className="text-gray-400">
              Connecting Cross Riverians in the diaspora to opportunities back home
            </p>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Contact us</p>
                <p className="text-lg font-medium">07030421010</p>
                <p className="text-lg font-medium">08159500454</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>crsdiasporacommission@gmail.com</span>
              </div>

              <div className="flex items-start space-x-3">
                <svg className="h-5 w-5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Governor's Office, Hope Waddell Avenue, Calabar</span>
              </div>
            </div>
          </div>
          
          {/* About section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 uppercase tracking-wider">About</h3>
            <ul className="space-y-3">
              {[
                ['About Us', '/about-us'],
                ['Programs', '/programs'],
                ['News & Updates', '/news'],
                ['Partnerships', '/partnerships'],
                ['Contact', '/contact']
              ].map(([name, path]) => (
                <li key={name}>
                  <Link href={path} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {[
                ['Investment Opportunities', '/investments'],
                ['Events', '/events'],
                ['Resources', '/resources'],
                ['FAQ', '/faq']
              ].map(([name, path]) => (
                <li key={name}>
                  <Link href={path} className="text-gray-400 hover:text-yellow-400 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter and social media */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-5 uppercase tracking-wider">Stay Connected</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for updates
              </p>
              <form onSubmit={handleSubscribe} className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-4 py-3 w-full rounded-l-lg text-white focus:outline-none focus:ring-2 focus:ring-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button 
                  type="submit"
                  className="bg-red-400 text-white font-medium px-6 py-3 rounded-r-lg hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">Join Our Communities</h4>
              <div className="space-y-3">
                {[
                  ['WhatsApp Channel', 'https://whatsapp.com/channel/0029Vb9QzxO4Y9lsES5QRv0X', 'M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0022 12.06C22 6.53 17.5 2.04 12 2.04Z'],
                  ['WhatsApp Community', 'https://chat.whatsapp.com/DeGwd00pwrv5Qe8YHE4A0x', 'M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0022 12.06C22 6.53 17.5 2.04 12 2.04Z'],
                  ['Facebook Page', 'https://www.facebook.com/share/16AVAdVSdm/', 'M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0022 12.06C22 6.53 17.5 2.04 12 2.04Z']
                ].map(([name, url, iconPath]) => (
                  <Link 
                    key={name} 
                    href={url} 
                    className="flex items-center text-gray-400 hover:text-red-400 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg className="h-5 w-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d={iconPath}/>
                    </svg>
                    {name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Cross River State Diaspora Commission. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}