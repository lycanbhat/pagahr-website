import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoStrip from './components/LogoStrip';
import Stats from './components/Stats';
import Features from './components/Features';
import AISection from './components/AISection';
import MobileSection from './components/MobileSection';
import IndiaSection from './components/IndiaSection';
import Pricing from './components/Pricing';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoStrip />
      <Stats />
      <Features />
      <AISection />
      <MobileSection />
      <IndiaSection />
      <Pricing />
      <CTASection />
      <Footer />
    </>
  );
}
