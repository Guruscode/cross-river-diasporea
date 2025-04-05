import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white text-gray-900 relative overflow-hidden">
      <div className="absolute w-full h-full opacity-5">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-400 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side Content */}
          <div className="relative z-10 space-y-6">
            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-blue-600 bg-blue-50 rounded-full">
              Cross River State
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Diaspora
              <span className="block text-blue-600">Commission</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Connecting Cross Riverians abroad with state policies and development projects. 
              Harnessing skills and resources for socio-economic growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
                Get Involved
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
              
              <Link href="/about" className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-blue-600 hover:text-blue-800 border border-blue-200 hover:border-blue-300 transition-all bg-white">
                Learn More
              </Link>
            </div>
          </div>
          
          {/* Right Side Image */}
          <div className="relative z-10">
            <div className="relative rounded-2xl overflow-hidden shadow-xl group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden p-1">
              <Image
              src="/hero1.jpg" 
              alt="Cross Riverians abroad"
              width={640}
              height={480}
              priority
              className="rounded-xl object-cover w-full h-[38rem] transition-transform duration-700 ease-in-out hover:scale-105"
            />

                <div className="absolute bottom-6 left-6 bg-white/90 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium shadow-lg backdrop-blur-sm">
                  Building Bridges Across Borders
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold z-20 shadow-lg transform rotate-12">
              <span className="transform -rotate-12">Join Us</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}