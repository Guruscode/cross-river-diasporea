'use client';

import Image from 'next/image';
import Link from 'next/link';

const AboutUsSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side with images */}
          <div className="relative opacity-100 transform translate-x-0 transition-all duration-800 ease-in-out">
            <div className="relative bg-white rounded-3xl shadow-xl p-4">
              <Image
                src="/govern.png" // Replace with actual image of the commission members
                alt="Cross River State Diaspora Commission Members"
                width={500}
                height={300}
                className="rounded-xl object-cover w-full h-auto"
              />

              {/* Establishment Badge */}
              <div className="absolute -top-6 right-4 bg-blue-600 text-white px-6 py-4 rounded-xl shadow-lg flex flex-col items-center">
                <span className="text-4xl font-extrabold">2024</span>
                <span className="text-sm font-light leading-tight text-center">
                  Year <br /> Established
                </span>
              </div>

              {/* Decorative Background Dots */}
              <div className="absolute bottom-0 right-0 -z-10 opacity-20 grid grid-cols-10 gap-2 p-4">
                {[...Array(100)].map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-green-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Right side with text content */}
          <div className="space-y-6 opacity-100 transform translate-x-0 transition-all duration-800 ease-in-out delay-200">
            <p className="text-blue-700 font-semibold uppercase tracking-wide">About The Commission</p>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Cross River State <span className="text-green-600">Diaspora Commission</span>
            </h2>

            <blockquote className="border-l-4 border-blue-600 pl-6 text-gray-700 italic">
              "Engaging Cross Riverians abroad in state policies and development projects."
            </blockquote>

            <p className="text-gray-600">
              Established by His Excellency, the Acting Governor of Cross River State, Rt. Hon. Peter Odey, 
              the Diaspora Commission aims to leverage the human and material resources of Cross Riverians 
              overseas for the socio-economic, cultural, and political advancement of our state.
            </p>

            {/* Highlights */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="bg-blue-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Our Mandate</h3>
                  <p className="text-gray-600">
                    To connect Cross Riverians abroad with state policies and development initiatives, 
                    fostering collaboration for state development.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="M16 3.13C16.8604 3.3503 17.623 3.8507 18.1676 4.55231C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Commission Members</h3>
                  <p className="text-gray-600">
                    Appointed members include Qu Esu Okor, Elizabeth Greene, Eyobong Ita, 
                    Douglas Agbe, Dr. Mrs Maggie Inde, and Mrs. Emily Madueke.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Link href="/about">
              <button className="bg-blue-600 hover:bg-green-600 text-white px-6 py-3 rounded-full mt-6 flex items-center gap-2 transition-all shadow-md">
                Learn More About Us
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Background Blur Effects */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-200 rounded-full opacity-30 blur-3xl animate-pulse" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-green-200 rounded-full opacity-30 blur-3xl animate-pulse" />
    </section>
  );
};

export default AboutUsSection;