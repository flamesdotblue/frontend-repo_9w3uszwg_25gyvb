import React from 'react';
import { Book, Trophy, Bot } from 'lucide-react';

const pillars = [
  {
    icon: Book,
    title: 'School Computer Textbooks',
    desc: 'A modern curriculum that integrates AI literacy with foundational computing skills, authored by industry experts.',
    href: '#contact',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Trophy,
    title: 'AI Olympiad',
    desc: 'A national-level challenge that builds problem-solving, ethics, and AI application skills for schools and students.',
    href: '#contact',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Bot,
    title: 'Robotics Programs',
    desc: 'Hands-on robotics pathways with progressive levels, kits, and trainer support for seamless classroom adoption.',
    href: '#contact',
    color: 'from-indigo-500 to-indigo-600',
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">What We Offer</h2>
        <p className="mt-3 text-gray-600">Clear pathways for schools to adopt future-ready education.</p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {pillars.map(({ icon: Icon, title, desc, href, color }) => (
          <a
            key={title}
            href={href}
            className="group relative rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
              <Icon size={24} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">{desc}</p>
            <span className="mt-4 inline-block text-sm font-medium text-emerald-700 group-hover:underline">Learn more</span>
          </a>
        ))}
      </div>
    </section>
  );
}
