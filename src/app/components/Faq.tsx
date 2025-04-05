"use client";
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  index: number;
}

const FAQItem = ({ question, answer, isOpen, onClick, index }: FAQItemProps) => {
  return (
    <div 
      className={`border-b border-gray-100 py-5 transition-all duration-300 ${isOpen ? 'bg-blue-50/30 rounded-lg px-4 -mx-4' : ''}`}
    >
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none group"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className={`font-semibold text-lg transition-colors duration-300 group-hover:text-blue-600 ${isOpen ? 'text-blue-600' : 'text-gray-900'}`}>
          {question}
        </span>
        <div className={`ml-6 flex-shrink-0 rounded-full h-8 w-8 flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50'}`}>
          <svg className="h-5 w-5 transition-transform duration-300" 
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                  d={isOpen ? "M19 9l-7 7-7-7" : "M9 5l7 7-7 7"} />
          </svg>
        </div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2">
              <p className="text-gray-600">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const DiasporaFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(1);

  const faqData = [
    {
      id: 0,
      question: "What is the purpose of the Diaspora Commission?",
      answer: "The Cross River State Diaspora Commission aims to engage Cross Riverians abroad in state policies and development projects, leveraging their skills and resources for the socio-economic, cultural, and political advancement of our state."
    },
    {
      id: 1,
      question: "How can I get involved with the Diaspora Commission?",
      answer: "You can participate through our various programs like the Diaspora Investment Program, Skills Transfer Initiative, or Cultural Exchange Program. Visit our 'Get Involved' page or contact us directly for more information."
    },
    {
      id: 2,
      question: "What benefits are available to diaspora members?",
      answer: "Diaspora members gain opportunities to invest in home projects, participate in governance, access special incentives for local investments, and connect with a network of professionals from Cross River State."
    },
    {
      id: 3,
      question: "How does the Commission support diaspora investments?",
      answer: "We provide investment information, facilitate connections with local partners, offer guidance on regulations, and help navigate the business environment in Cross River State."
    },
    {
      id: 4,
      question: "Can I participate if I'm not currently in Cross River State?",
      answer: "Absolutely! Most of our programs are designed specifically for Cross Riverians living abroad. We offer virtual participation options for many initiatives and events."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative bg-gradient-to-br from-white to-blue-100 overflow-hidden py-24">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50 rounded-full opacity-30 transform -translate-x-1/2 translate-y-1/4"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-blue-200 rounded-full opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/3 w-4 h-4 bg-blue-300 rounded-full opacity-30"></div>
      
      {/* Main content section */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left side - Images with animation */}
          <div className="lg:w-5/12">
            <div className="relative h-full flex items-center">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/er.jpg"
                  alt="Diaspora community meeting"
                  width={400}
                  height={500}
                  className="rounded-2xl object-cover w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
              </div>
              
              {/* Floating image with shadow */}
              {/* <div className="absolute -bottom-8 -right-8 w-3/4 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/smile.jpg"
                  alt="Diaspora networking event"
                  width={350}
                  height={250}
                  className="rounded-xl object-cover w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
              </div> */}
              
              {/* Decorative accent */}
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-600 rounded-full opacity-10"></div>
              <div className="absolute -bottom-3 right-1/3 w-12 h-12 bg-blue-400 rounded-full opacity-10"></div>
            </div>
          </div>
          
          {/* Right side - FAQ content */}
          <div className="lg:w-7/12">
            <div className="mb-10">
              <div className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 font-medium rounded-full text-sm mb-4">
                Diaspora Commission FAQ's
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-4"></div>
              <p className="text-gray-600 text-lg">
                Find answers to common questions about our programs and initiatives for Cross Riverians abroad.
              </p>
            </div>
            
            <div className="mt-10 space-y-2">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === faq.id}
                  onClick={() => toggleFAQ(faq.id)}
                  index={index}
                />
              ))}
            </div>
            
            {/* Additional help section */}
            <div className="mt-12 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center">
              <div className="bg-blue-50 p-3 rounded-full mr-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-gray-900">Still have questions?</h4>
                <p className="text-gray-600 text-sm">Contact our diaspora support team for personalized assistance</p>
              </div>
              <button className="ml-auto bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiasporaFAQ;