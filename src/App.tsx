import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { CinematicShowcase } from './components/CinematicShowcase';
import { About } from './components/About';
import { SignatureDishes } from './components/SignatureDishes';
import { Experience } from './components/Experience';
import { Menu } from './components/Menu';
import { Reservations } from './components/Reservations';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'menu' | 'reservations' | 'gallery' | 'contact'>('home');

  return (
    <div className="min-h-screen bg-black text-cream">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {currentPage === 'home' && (
        <>
          <Hero onNavigate={setCurrentPage} />
          <CinematicShowcase />
          <About />
          <SignatureDishes />
          <Experience onNavigate={setCurrentPage} />
          <Testimonials />
        </>
      )}
      
      {currentPage === 'menu' && <Menu />}
      {currentPage === 'reservations' && <Reservations />}
      {currentPage === 'gallery' && <Gallery />}
      {currentPage === 'contact' && <Contact />}
      
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
