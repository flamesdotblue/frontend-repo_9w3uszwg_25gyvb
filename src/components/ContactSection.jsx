import React, { useState } from 'react';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', institution: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // In a full build, this would POST to the backend. For now, we provide a mailto fallback.
    const body = encodeURIComponent(`Institution: ${form.institution}\n\n${form.message}`);
    window.location.href = `mailto:hello@codengrow.com?subject=Enquiry from ${encodeURIComponent(form.name)}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 md:text-4xl">Contact & Enquiry</h2>
          <p className="mt-3 max-w-xl text-gray-600">Tell us about your school and goals. Our team will reach out with next steps and a tailored proposal.</p>

          <div className="mt-8 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
            <dl className="grid gap-4 sm:grid-cols-2">
              <div>
                <dt className="text-sm text-gray-500">Email</dt>
                <dd className="font-medium text-gray-900">hello@codengrow.com</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-500">Phone</dt>
                <dd className="font-medium text-gray-900">+91 00000 00000</dd>
              </div>
            </dl>
          </div>
        </div>

        <form onSubmit={onSubmit} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
              <input id="name" name="name" required value={form.name} onChange={onChange} className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Jane Doe" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="jane@school.edu" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="institution">Institution</label>
              <input id="institution" name="institution" required value={form.institution} onChange={onChange} className="mt-1 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="Your School / Organization" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required value={form.message} onChange={onChange} className="mt-1 w-full resize-y rounded-md border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500" placeholder="What would you like to achieve?" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">Send Enquiry</button>
            {submitted && <span className="text-sm text-emerald-700">Opening your email client…</span>}
          </div>
        </form>
      </div>
    </section>
  );
}
