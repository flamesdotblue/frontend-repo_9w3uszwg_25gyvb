import React from 'react';
import { ShieldCheck, Users, GraduationCap, LineChart } from 'lucide-react';

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Trusted & Authoritative',
    desc: 'Built by industry practitioners and educators with proven classroom impact.',
  },
  {
    icon: Users,
    title: 'Train the Trainers',
    desc: 'Comprehensive teacher enablement so adoption is smooth and sustainable.',
  },
  {
    icon: GraduationCap,
    title: 'Future-Ready Curriculum',
    desc: 'AI-integrated content that grows skills from fundamentals to advanced.',
  },
  {
    icon: LineChart,
    title: 'Measurable Outcomes',
    desc: 'Clear rubrics and progress tracking aligned to learning objectives.',
  },
];

const partnerNames = ['Greenwood High', 'City Public School', 'FuturePath Academy', 'Sunrise International', 'Oakridge'];

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50/60 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Why Schools Choose CodeNGrow</h2>
            <p className="mt-3 max-w-xl text-gray-600">We combine academic rigor with real-world relevance, delivering a program schools can trust and students love.</p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-gray-900">{title}</h3>
                  <p className="mt-1.5 text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Trusted by forward-thinking schools</h3>
              <p className="mt-1 text-sm text-gray-600">A snapshot of institutions partnering with us.</p>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {partnerNames.map((name) => (
                  <div key={name} className="flex h-16 items-center justify-center rounded-lg border border-gray-100 bg-gray-50 text-center text-sm font-medium text-gray-600">
                    {name}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-600 to-blue-600 p-6 text-white">
              <h4 className="text-base font-semibold">Ready to explore a pilot?</h4>
              <p className="mt-1 text-sm text-white/80">Speak with our academic partnerships team to design a rollout tailored to your school.</p>
              <a href="#contact" className="mt-4 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-emerald-700 shadow-sm transition hover:bg-gray-50">Book a Call</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
