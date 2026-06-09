// ================================================================
// HOMEPAGE — CTE-first marketing landing for pathcte.com
// Leads with PathCTE (career-technical education); positions Pathfinity
// as the K-12 foundation (better-together). Part of the Pathfinity suite.
// Claims limited to shipped features (PRODUCT_CAPABILITIES_AUDIT.md).
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sparkles, Compass, BadgeCheck, KeyRound, FileBadge,
  Trophy, Building2, School, Home, Check, LayoutGrid,
} from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';
import { BrandMark } from '../../components/BrandMark';

const LOGIN_URL = 'https://app.pathfinity.ai/app/login';
const PATHFINITY_URL = 'https://pathfinity.ai';

// Signature PathCTE capabilities, each paired with a real product screenshot.
const features = [
  {
    id: 'explore',
    icon: Compass,
    eyebrow: 'Explore',
    title: 'Start with real careers',
    body:
      'Students explore careers across clusters — with the salary ranges, growth outlook, and the certifications each one actually requires. Career interest becomes a concrete plan.',
    img: '/Pathcte_Careers.webp',
  },
  {
    id: 'certquest',
    icon: BadgeCheck,
    eyebrow: 'Cert Quest',
    title: 'Earn real industry certifications',
    body:
      'Cert Quest prepares students for tiered, recognized industry certification exams — turning classroom time into credentials employers know.',
    img: '/Pathcte_CertQuest.webp',
  },
  {
    id: 'pathkeys',
    icon: KeyRound,
    eyebrow: 'PathKeys',
    title: 'Progress you can see',
    body:
      'PathKeys give career mastery a structured, badge-style progression — every milestone unlocked is visible proof of how far a student has come.',
    img: '/Pathcte_Pathkeys.webp',
  },
  {
    id: 'careercv',
    icon: FileBadge,
    eyebrow: 'Career CV',
    title: 'A living career portfolio',
    body:
      'Everything compounds into a Career CV — a portfolio scored across CareerIQ, ClusterIQ, ProgramIQ, and BusinessIQ. Readiness becomes something students can show, not just claim.',
    img: '/Pathcte_PathIQ.webp',
  },
];

const segments = [
  { icon: Building2, title: 'School Districts', body: 'Make career readiness continuous and measurable — certifications and a portfolio for every student, on enterprise identity with tenant-isolated data.', to: '/solutions/districts' },
  { icon: School, title: 'Private Schools', body: 'Real, recognized career readiness with the admin tools to run it — at your scale.', to: '/solutions/private-schools' },
  { icon: Home, title: 'Homeschool', body: 'Add industry certifications and a growing career portfolio to your program — and stay the decision-maker.', to: '/solutions/homeschool' },
];

const FeatureRow: React.FC<{ f: typeof features[number]; flip: boolean }> = ({ f, flip }) => (
  <div id={f.id} className="scroll-mt-24 grid items-center gap-10 lg:grid-cols-2">
    <div className={flip ? 'lg:order-2' : ''}>
      <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-3 py-1 mb-4">
        <f.icon className="w-4 h-4 text-violet-300" />
        <span className="text-xs font-semibold uppercase tracking-wide text-violet-200">{f.eyebrow}</span>
      </div>
      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{f.title}</h3>
      <p className="text-gray-300 leading-relaxed">{f.body}</p>
    </div>
    <div className={flip ? 'lg:order-1' : ''}>
      <div className="rounded-xl border border-gray-700 overflow-hidden shadow-2xl shadow-black/40 bg-gray-900">
        <img src={f.img} alt={f.title} loading="lazy" className="w-full" />
      </div>
    </div>
  </div>
);

export const Homepage: React.FC = () => {
  return (
    <MarketingLayout>
      {/* ---- Hero ---- */}
      <section className="relative overflow-hidden bg-gray-950 py-20 sm:py-28">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-gray-950 to-indigo-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-1.5 mb-8">
            <BrandMark className="w-5 h-5 rounded" title="PathCTE" />
            <span className="text-sm font-medium text-violet-200">Career-Technical Education · part of the Pathfinity suite</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
            Turn career interest into real readiness.
          </h1>
          <p className="text-lg sm:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            PathCTE takes students from career exploration to industry certifications and a
            living Career CV — recognized readiness they can show, not just claim.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-3 font-semibold text-white shadow-lg hover:bg-violet-500 transition-colors">
              Contact Sales <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={LOGIN_URL} className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-200 hover:bg-gray-800 transition-colors">
              Log in
            </a>
          </div>

          {/* ---- Hero centerpiece: PathCTE dashboard ---- */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl border border-gray-700 overflow-hidden shadow-2xl shadow-black/40">
              <img
                src="/Pathcte_Dashboard.webp"
                alt="PathCTE student dashboard"
                className="w-full"
              />
            </div>
            <p className="mt-3 text-sm text-gray-400">
              The PathCTE student dashboard — careers, certifications, and progress in one place.
            </p>
          </div>
        </div>
      </section>

      {/* ---- The journey (anchored feature rows) ---- */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-white mb-3">Explore → Certify → Build a portfolio</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A continuous path from "what career?" to recognized, demonstrable readiness.
            </p>
          </div>
          <div className="space-y-20">
            {features.map((f, i) => (
              <FeatureRow key={f.id} f={f} flip={i % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Tournaments + rewards (no dedicated screenshot) ---- */}
      <section className="bg-gray-950 py-16 border-y border-gray-800/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-7">
            <Trophy className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Tournaments</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Compete solo or multiplayer — career mastery becomes something students want to come back to.
            </p>
          </div>
          <div className="rounded-xl border border-gray-800 bg-gray-900 p-7">
            <Sparkles className="w-8 h-8 text-violet-400 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Rewards & XP</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A rewards marketplace and XP history keep momentum going across the whole journey.
            </p>
          </div>
        </div>
      </section>

      {/* ---- Better together: Pathfinity foundation ---- */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <LayoutGrid className="w-8 h-8 text-violet-400 mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Better with Pathfinity</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            PathCTE works on its own. It gets even better paired with <span className="text-white font-semibold">Pathfinity</span> —
            K-12 career-connected learning that weaves career exposure into every lesson, years before
            certifications begin. One login, one progress record across both products; license PathCTE,
            Pathfinity, or both.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PATHFINITY_URL} className="inline-flex items-center gap-2 rounded-lg border border-violet-500/50 px-6 py-3 font-semibold text-violet-200 hover:bg-violet-500/10 transition-colors">
              Explore Pathfinity <ArrowRight className="w-4 h-4" />
            </a>
            <Link to="/pricing" className="inline-flex items-center gap-2 rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-200 hover:bg-gray-800 transition-colors">
              See licensing
            </Link>
          </div>
        </div>
      </section>

      {/* ---- Buyer segments ---- */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Built for how you buy</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {segments.map((s) => (
              <Link key={s.title} to={s.to} className="group rounded-xl border border-gray-800 bg-gray-900 p-7 hover:border-violet-600 transition-colors">
                <s.icon className="w-8 h-8 text-violet-400 mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  {s.title}
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Final CTA ---- */}
      <section className="bg-gradient-to-br from-violet-700 to-indigo-700 py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Sparkles className="w-8 h-8 text-white/90 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-white mb-4">Make career readiness real</h2>
          <p className="text-violet-100 mb-8">
            Tell us about your school, district, or family and we'll show you the right fit —
            PathCTE, Pathfinity, or the full suite.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-violet-700 hover:bg-violet-50 transition-colors">
              Contact Sales <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={LOGIN_URL} className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors">
              Log in
            </a>
          </div>
        </div>
      </section>
    </MarketingLayout>
  );
};

export default Homepage;
