import React from 'react';

const MissionVisionSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-gray-50 to-white py-24 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-30 -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-green-50 rounded-tr-full opacity-30 -z-10" />
      <div className="absolute -bottom-12 right-24 w-64 h-64 rounded-full border border-purple-100 opacity-40 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-4">
            Our Guiding Principles
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
            Mission, Vision & Core Values
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6" />
        </div>
        
        {/* Cards Grid with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Mission Statement */}
          <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-600" />
            <div className="p-8">
              <div className="bg-blue-50 text-blue-600 p-3 rounded-lg inline-block mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Mission Statement</h3>
              <p className="text-gray-600 italic">
                "To connect, engage, and empower Cross River State indigenes in the diaspora, fostering global partnerships, investment, and development that promote the socio-economic growth and prosperity of Cross River State."
              </p>
            </div>
          </div>
          
          {/* Vision Statement */}
          <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <div className="absolute top-0 left-0 w-full h-1 bg-green-600" />
            <div className="p-8">
              <div className="bg-green-50 text-green-600 p-3 rounded-lg inline-block mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Vision Statement</h3>
              <p className="text-gray-600 italic">
                "To become a leading diaspora commission, bridging the gap between Cross River State and its global community, and catalyzing sustainable development, innovation, and prosperity for the benefit of all Cross River State indigenes."
              </p>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="group relative bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-700 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
            <div className="absolute top-0 left-0 w-full h-1 bg-purple-600" />
            <div className="p-8">
              <div className="bg-purple-50 text-purple-600 p-3 rounded-lg inline-block mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Core Values</h3>
              <ul className="text-gray-600 space-y-3">
                {[
                  { name: "Inclusivity", desc: "Embracing diversity and promoting equal opportunities" },
                  { name: "Integrity", desc: "Upholding transparency and ethical standards" },
                  { name: "Excellence", desc: "Striving for innovation and quality service" },
                  { name: "Respect", desc: "Valuing dignity and unique contributions" },
                  { name: "Collaboration", desc: "Fostering partnerships and teamwork" }
                ].map((value, index) => (
                  <li key={index} className="flex items-center">
                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 flex-shrink-0" />
                    <span><span className="font-medium text-gray-800">{value.name}:</span> {value.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;