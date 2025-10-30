import React from 'react';
import Hero from './components/Hero';
import Pillars from './components/Pillars';
import WhyChooseUs from './components/WhyChooseUs';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <Hero />
      <Pillars />
      <WhyChooseUs />
      <ContactSection />
      <SiteFooter />
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-gray-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-600 to-blue-600 text-white font-semibold">C</span>
          <span className="text-sm font-semibold tracking-wide">CodeNGrow</span>
        </a>
        <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
          <a href="#pillars" className="hover:text-gray-900">Programs</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
        <a href="#contact" className="hidden rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 md:inline-flex">Get in touch</a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} CodeNGrow. Future-ready education in AI, Robotics, and advanced computing.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#pillars" className="text-gray-600 hover:text-gray-900">Programs</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default App;
