// ================================================================
// PRICING / PACKAGING — three license options, "Contact Sales" (no public prices)
// OQ-18 decided: list the 3 options + Contact Sales. docs/Marketing/PATHFINITY_WEBSITE_IA.md.
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { Check, ArrowRight } from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';
import { BrandMark } from '../../components/BrandMark';

const options = [
  {
    name: 'Pathfinity',
    blurb: 'K-12 career-connected learning.',
    includes: [
      'Explorer / Navigator / Pathfinder experiences',
      'Learn → Experience → Discover, AI companions',
      'Adaptive practice + spaced-repetition review',
      'Discovered Live arcade + XP, awards, streaks',
    ],
    featured: false,
  },
  {
    name: 'Both — The Suite',
    blurb: 'Pathfinity + PathCTE on one login.',
    includes: [
      'Everything in Pathfinity and PathCTE',
      'One progress record + app switcher',
      'Rewards & activity carry across products',
      'Add either product anytime on the same identity',
    ],
    featured: true,
  },
  {
    name: 'PathCTE',
    blurb: 'Career-technical education.',
    includes: [
      'Career exploration + industry certifications (Cert Quest)',
      'PathKeys career mastery progression',
      'Career CV (CareerIQ / ClusterIQ / ProgramIQ / BusinessIQ)',
      'Tournaments + rewards marketplace',
    ],
    featured: false,
  },
];

export const PricingPage: React.FC = () => {
  return (
    <MarketingLayout>
      <section className="relative overflow-hidden bg-gray-950 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-gray-950 to-indigo-900/20" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">Simple licensing</h1>
          <p className="text-lg text-gray-300">
            License Pathfinity, PathCTE, or both — one platform, one login. Tell us about your
            school, district, or family and we'll put together the right fit.
          </p>
        </div>
      </section>

      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3 items-start">
          {options.map((o) => (
            <div
              key={o.name}
              className={`rounded-2xl border bg-gray-950/60 p-7 flex flex-col ${o.featured ? 'border-violet-500 ring-1 ring-violet-500/40' : 'border-gray-800'}`}
            >
              {o.featured && (
                <span className="self-start mb-3 rounded-full bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-200">
                  Most popular
                </span>
              )}
              <div className="flex items-center gap-3 mb-1">
                <BrandMark className="w-8 h-8 rounded-lg" title={o.name} />
                <h3 className="text-lg font-bold text-white">{o.name}</h3>
              </div>
              <p className="text-sm text-gray-400 mb-5">{o.blurb}</p>
              <ul className="space-y-2.5 mb-6 flex-1">
                {o.includes.map((it) => (
                  <li key={it} className="flex gap-2 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" /> <span>{it}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 font-semibold transition-colors ${o.featured ? 'bg-violet-600 text-white hover:bg-violet-500' : 'border border-gray-600 text-gray-200 hover:bg-gray-800'}`}
              >
                Contact Sales <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-gray-500 max-w-2xl mx-auto px-4">
          All options include Microsoft Entra single sign-on, tenant-isolated data, and
          role-based admin. Pricing is tailored — contact sales for a quote.
        </p>
      </section>
    </MarketingLayout>
  );
};

export default PricingPage;
