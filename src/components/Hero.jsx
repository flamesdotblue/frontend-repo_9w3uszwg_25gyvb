import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/OG17yM2eUIs8MUmA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* subtle top-to-bottom gradient to enhance text readability without blocking interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/90 via-white/60 to-white/10" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-100">EdTech • AI • Robotics</span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-gray-900 md:text-6xl">
            Enabling and Empowering the Next Generation in
            <span className="block bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent"> AI & Robotics</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
            CodeNGrow partners with schools to deliver future-ready computer education—integrating AI, Robotics, and advanced computing into modern classrooms.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pillars" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">Explore Programs</a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-medium text-emerald-700 ring-1 ring-gray-200 transition hover:bg-gray-50">Talk to Our Team</a>
          </div>
        </div>
      </div>
    </section>
  );
}
