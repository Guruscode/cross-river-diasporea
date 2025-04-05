import React from 'react';
import Image from 'next/image';

const commissionMembers = [
  {
    id: 1,
    name: 'Qu Esu Okor',
    title: 'Commission Member',
    image: '/avatar.jpg', // Replace with actual images
  },
  {
    id: 2,
    name: 'Elizabeth Greene',
    title: 'Commission Member',
    image: '/avatar.jpg',
  },
  {
    id: 3,
    name: 'Eyobong Ita',
    title: 'Commission Member',
    image: '/team-1.jpeg',
  },
  {
    id: 4,
    name: 'Douglas Agbe',
    title: 'Commission Member',
    image: '/avatar.jpg',
  },
  {
    id: 5,
    name: 'Dr. Mrs Maggie Inde',
    title: 'Commission Member',
    image: '/avatar.jpg',
  },
  {
    id: 6,
    name: 'Mrs. Emily Madueke',
    title: 'Commission Member',
    image: '/avatar.jpg',
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-4">
            Cross River State Government
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Diaspora Commission Members</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Appointed by His Excellency, the Acting Governor of Cross River State, Rt. Hon. Peter Odey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {commissionMembers.map((member) => (
            <div key={member.id} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 group-hover:shadow-xl">
                <div className="relative h-150 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex justify-center space-x-3 mb-4">
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-blue-700 hover:bg-blue-700 hover:text-white transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 shadow-md rounded-lg mt-4 text-center transform -translate-y-8">
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 text-center bg-white shadow-md rounded-lg p-8 max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4">
            The Commission reports to the office of the Secretary to the Government of Cross River State
          </p>
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <p className="text-blue-600">
              mastgw@crossriverstate.gov.my / gillturaabas1000@yahoo.com
            </p>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TeamSection;