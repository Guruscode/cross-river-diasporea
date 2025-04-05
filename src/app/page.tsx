import HeroSection from './components/Home/HeroSection';
import AboutUsSection from './components/AboutSection';
import QuranLearningSection from './components/SectionFirst';
import CourseSection from './components/CoreValue';
import FAQItem from './components/Faq';
import InstructorSection from './components/Team';
import NewsSection from './components/NewsSection';
// import ServicesOverview from '@/components/ServicesOverview';
// import UpcomingEvents from '@/components/UpcomingEvents';
// import Testimonials from '@/components/Testimonials';
// import NewsSection from '@/components/NewsSection';

export const metadata = {
  title: 'Home | Cross River State Diaspora Commission',
  description: 'Connecting Cross Riverians in the diaspora with opportunities back home',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <QuranLearningSection />
      <CourseSection />
      <InstructorSection />
      <NewsSection />
      <FAQItem />
    </>
  );
}