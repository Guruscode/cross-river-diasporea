// components/NewsSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const newsData = [
  {
    id: 1,
    slug: 'diaspora-investment-summit',
    title: 'Cross River Diaspora Investment Summit 2025 Announced',
    excerpt: 'The annual investment summit connecting diaspora investors with opportunities in Cross River State has been scheduled for August 2025.',
    imageUrl: '/1.jpg',
    category: 'Events',
    date: 'Apr 3, 2025',
    readTime: 4,
    author: {
      name: 'Sarah Okon',
      avatar: '/1.jpg'
    }
  },
  {
    id: 2,
    slug: 'new-tech-hub',
    title: 'New Tech Innovation Hub Opens in Calabar',
    excerpt: 'Cross River State launches a new technology innovation hub to foster digital skills and entrepreneurship among returning diaspora members.',
    imageUrl: '/2.jpg',
    category: 'Development',
    date: 'Mar 28, 2025',
    readTime: 5,
    author: {
      name: 'Daniel Effiong',
      avatar: '/2.jpg'
    }
  },
  {
    id: 3,
    slug: 'healthcare-partnership',
    title: 'Diaspora Healthcare Professionals Partner with Local Hospitals',
    excerpt: 'A new initiative brings together medical professionals from the diaspora with local healthcare institutions to improve medical services.',
    imageUrl: '/2.jpg',
    category: 'Healthcare',
    date: 'Mar 22, 2025',
    readTime: 3,
    author: {
      name: 'Dr. Grace Ita',
      avatar: '/2.jpg'
    }
  },
  {
    id: 4,
    slug: 'education-scholarship',
    title: 'Diaspora Commission Launches Scholarship Program',
    excerpt: 'New scholarship opportunities for Cross River youths funded by diaspora contributions aim to develop local talent.',
    imageUrl: '/2.jpg',
    category: 'Education',
    date: 'Mar 15, 2025',
    readTime: 4,
    author: {
      name: 'Joseph Akpan',
      avatar: '/2.jpg'
    }
  }
];

const NewsCard = ({ article } : any) => {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl bg-white">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={article.imageUrl || "/api/placeholder/800/600"}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-0 right-0 bg-blue-600 bg-opacity-90 px-3 py-1 m-2 rounded text-xs font-medium text-white">
          {article.category}
        </div>
      </div>
      
      <div className="flex flex-col flex-grow p-4">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span>{article.date}</span>
          <span className="mx-2">•</span>
          <span>{article.readTime} min read</span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {article.title}
        </h3>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
          {article.excerpt}
        </p>
        
        <div className="flex items-center mt-auto">
          <div className="h-8 w-8 rounded-full overflow-hidden relative mr-3">
            <Image 
              src={article.author.avatar || "/api/placeholder/100/100"} 
              alt={article.author.name}
              fill
              className="object-cover"
            />
          </div>
          <span className="text-xs font-medium">{article.author.name}</span>
        </div>
      </div>
    </div>
  );
};

const FeaturedArticle = ({ article } : any) => {
  return (
    <div className="relative h-96 w-full overflow-hidden rounded-lg shadow-xl">
      <Image
        src={article.imageUrl || "/api/placeholder/1200/800"}
        alt={article.title}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
        <div className="absolute bottom-0 p-6 w-full">
          <div className="bg-blue-600 text-white inline-block px-3 py-1 rounded text-xs font-medium mb-3">
            {article.category}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            {article.title}
          </h2>
          <p className="text-gray-200 mb-4 line-clamp-2">{article.excerpt}</p>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full overflow-hidden relative mr-3">
              <Image 
                src={article.author.avatar || "/api/placeholder/100/100"} 
                alt={article.author.name}
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-white text-sm font-medium block">{article.author.name}</span>
              <span className="text-gray-300 text-xs">{article.date} • {article.readTime} min read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function NewsSection() {
  const featuredArticle = newsData[0];
  const regularArticles = newsData.slice(1);
  
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News & Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about programs, events, and opportunities for Cross River State diaspora members
          </p>
        </div>
        
        <div className="mb-10">
          <Link href={`/news/${featuredArticle.slug}`}>
            <FeaturedArticle article={featuredArticle} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <Link key={article.id} href={`/news/${article.slug}`}>
              <NewsCard article={article} />
            </Link>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link href="/news" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            View All News
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}