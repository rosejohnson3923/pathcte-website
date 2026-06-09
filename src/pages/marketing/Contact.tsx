// ================================================================
// CONTACT SALES — suite-aware contact page for pathcte.com
// Primary CTA destination across the site. Dark marketing theme.
// ================================================================

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, Check } from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';

const SALES_EMAIL = 'sales@pathfinity.ai';

export const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', org: '', role: 'District', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`PathCTE inquiry — ${form.org || form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nOrganization: ${form.org}\nRole: ${form.role}\n\n${form.message}\n\n— Sent from the PathCTE contact form`
    );
    window.location.href = `mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <MarketingLayout>
      <section className="relative overflow-hidden bg-gray-950 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-gray-950 to-indigo-900/20" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">Talk to our team</h1>
          <p className="text-lg text-gray-300">
            Tell us about your school, district, or family and we'll put together the right fit —
            PathCTE, Pathfinity, or the full suite. Pricing is tailored to you.
          </p>
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-5">
          {/* Form */}
          <div className="md:col-span-3 rounded-2xl border border-gray-800 bg-gray-950/60 p-7">
            {sent ? (
              <div className="text-center py-10">
                <Check className="w-10 h-10 text-violet-400 mx-auto mb-4" />
                <h2 className="text-xl font-bold text-white mb-2">Your email client is opening…</h2>
                <p className="text-gray-400 text-sm">
                  If it didn't, email us directly at{' '}
                  <a href={`mailto:${SALES_EMAIL}`} className="text-violet-300 hover:text-violet-200">{SALES_EMAIL}</a>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm text-gray-300">Name</span>
                    <input name="name" required value={form.name} onChange={handleChange}
                      className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white focus:border-violet-500 focus:outline-none" />
                  </label>
                  <label className="block">
                    <span className="text-sm text-gray-300">Work email</span>
                    <input type="email" name="email" required value={form.email} onChange={handleChange}
                      className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white focus:border-violet-500 focus:outline-none" />
                  </label>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="text-sm text-gray-300">Organization</span>
                    <input name="org" value={form.org} onChange={handleChange}
                      className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white focus:border-violet-500 focus:outline-none" />
                  </label>
                  <label className="block">
                    <span className="text-sm text-gray-300">I'm with a…</span>
                    <select name="role" value={form.role} onChange={handleChange}
                      className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white focus:border-violet-500 focus:outline-none">
                      <option>District</option>
                      <option>Private school</option>
                      <option>Homeschool family</option>
                      <option>Other</option>
                    </select>
                  </label>
                </div>
                <label className="block">
                  <span className="text-sm text-gray-300">How can we help?</span>
                  <textarea name="message" rows={4} value={form.message} onChange={handleChange}
                    className="mt-1 w-full rounded-lg border border-gray-700 bg-gray-900 px-3 py-2 text-white focus:border-violet-500 focus:outline-none" />
                </label>
                <button type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white hover:bg-violet-500 transition-colors">
                  Send message <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Aside */}
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-2xl border border-gray-800 bg-gray-950/60 p-7">
              <Mail className="w-7 h-7 text-violet-400 mb-3" />
              <h3 className="font-bold text-white mb-1">Prefer email?</h3>
              <a href={`mailto:${SALES_EMAIL}`} className="text-violet-300 hover:text-violet-200 text-sm">{SALES_EMAIL}</a>
            </div>
            <div className="rounded-2xl border border-gray-800 bg-gray-950/60 p-7 text-sm text-gray-300 space-y-3">
              <p className="font-semibold text-white">Already a subscriber?</p>
              <a href="https://app.pathfinity.ai/app/login" className="inline-flex items-center gap-2 text-violet-300 hover:text-violet-200">
                Log in <ArrowRight className="w-4 h-4" />
              </a>
              <p className="pt-3 border-t border-gray-800">
                Curious about the K-12 foundation?{' '}
                <Link to="/pricing" className="text-violet-300 hover:text-violet-200">See licensing</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Contact;
