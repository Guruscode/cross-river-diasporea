import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Program data interface
interface Program {
  id: number;
  title: string;
  description: string;
  investment: string;
  rating: number;
  initiatives: number;
  participants: number;
  image: string;
}

const ProgramCard = ({ program }: { program: Program }) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <Image 
          src={program.image} 
          alt={program.title} 
          width={400} 
          height={250} 
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-blue-600 bg-opacity-90 text-white text-sm rounded-lg px-3 py-1 font-medium backdrop-blur-sm">
          {program.investment}
        </div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-black to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6 relative">
        {/* Rating stars with smoother design */}
        <div className="flex items-center mb-3">
          {Array(5).fill(0).map((_, i) => (
            <span key={i} className={`text-sm ${i < Math.floor(program.rating) ? "text-yellow-400" : "text-gray-300"}`}>
              ★
            </span>
          ))}
          <span className="text-gray-500 text-xs ml-2">({program.rating})</span>
        </div>
        
        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{program.title}</h3>
        <p className="text-gray-600 text-sm mb-5 line-clamp-2">{program.description}</p>
        
        <div className="flex justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-gray-500 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span>{program.initiatives} Initiatives</span>
          </div>
          <div className="flex items-center text-gray-500 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{program.participants} Participants</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProgramSection = () => {
  // Sample data for diaspora programs
  const programs: Program[] = [
    {
      id: 1,
      title: "Diaspora Investment Program",
      description: "Connect with investment opportunities in Cross River State and contribute to local economic growth.",
      investment: "Funding",
      rating: 4.5,
      initiatives: 8,
      participants: 120,
      image: "/1.jpg"
    },
    {
      id: 2,
      title: "Skills Transfer Initiative",
      description: "Share your expertise with local communities through training and mentorship programs.",
      investment: "Volunteer",
      rating: 4,
      initiatives: 5,
      participants: 75,
      image: "/1.jpg"
    },
    {
      id: 3,
      title: "Cultural Exchange Program",
      description: "Promote Cross River culture abroad while bringing global perspectives back home.",
      investment: "Participate",
      rating: 4.2,
      initiatives: 6,
      participants: 90,
      image: "/1.jpg"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-blue-100 opacity-20"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full border-2 border-blue-100 opacity-30"></div>
      <div className="absolute top-1/3 right-16 w-4 h-4 rounded-full bg-blue-400 opacity-20"></div>
      <div className="absolute top-2/3 left-16 w-6 h-6 rounded-full bg-blue-300 opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="inline-block py-1.5 px-4 bg-blue-50 text-blue-600 font-medium rounded-full text-sm">
              Our Initiatives
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Diaspora Engagement Programs
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Connecting Cross Riverians abroad with opportunities to contribute to our state's development
          </p>
        </div>

        {/* Program cards with subtle animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {programs.map(program => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>

       
        {/* Help section with improved design */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center border border-gray-100">
          <div className="flex items-center mb-6 sm:mb-0">
            <div className="bg-blue-50 p-4 rounded-full mr-5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div>
              <p className="text-blue-600 text-sm font-medium">Need Guidance?</p>
              <h4 className="text-xl font-bold text-gray-900">Finding the Right Program for You</h4>
            </div>
          </div>
          <Link href="/contact" className="group bg-blue-600 text-white px-8 py-3 rounded-xl font-medium inline-flex items-center hover:bg-blue-700 transition-colors shadow-sm hover:shadow">
            Get Involved
            <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;