// ================================================================
// ABOUT — PathCTE within the Pathfinity suite, an Esposure product line.
// Suite/company-focused; claims limited to shipped features.
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Compass, ShieldCheck } from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';

const values = [
  {
    icon: Compass,
    title: 'Readiness, not just minutes',
    body: 'Career-technical education should produce something real — recognized certifications and a portfolio students can show, not seat time.',
  },
  {
    icon: Target,
    title: 'Continuous, not senior-year',
    body: 'Career readiness builds over years. PathCTE turns interest into credentials, and pairs with Pathfinity to start career exposure in the earliest grades.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise from day one',
    body: 'Microsoft Entra single sign-on, tenant-isolated data, and role-based admin — built for districts and schools, not retrofitted.',
  },
];

export const AboutUs: React.FC = () => {
  return (
    <MarketingLayout>
      <section className="relative overflow-hidden bg-gray-950 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-gray-950 to-indigo-900/20" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">About PathCTE</h1>
          <p className="text-lg text-gray-300">
            PathCTE is the career-technical education product in the <span className="text-white font-semibold">Pathfinity</span> suite —
            a product line from <span className="text-white font-semibold">Esposure</span>. We turn career interest into
            real, recognized readiness: exploration, industry certifications, and a living Career CV.
          </p>
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-gray-800 bg-gray-950/60 p-7">
              <v.icon className="w-8 h-8 text-violet-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-950 py-16 border-y border-gray-800/60">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">One platform, one login</h2>
          <p className="text-gray-300">
            PathCTE and Pathfinity share a single identity and progress record. License either product
            on its own, or both together — and add the other anytime on the same login.
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-violet-700 to-indigo-700 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">See it for your students</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-violet-700 hover:bg-violet-50 transition-colors">
              Contact Sales <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://pathfinity.ai" className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
              Explore Pathfinity ↗
            </a>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default AboutUs;
