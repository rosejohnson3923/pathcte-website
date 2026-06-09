// ================================================================
// SOLUTIONS — buyer-segment pages (Districts / Private Schools / Homeschool)
// Product-first + buyer-segment lens (docs/Marketing/PATHFINITY_WEBSITE_IA.md).
// Carries MARKETING_SPEC §4 audience narratives. Districts splits into anchored
// "For administrators" (#administrators) + "For educators" (#educators) sections.
// Claims = shipped features only; district_admin dashboards are roadmap (NOT promised).
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Building2, School, Home } from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';

export type Segment = 'districts' | 'private-schools' | 'homeschool';

const LOGIN_URL = 'https://app.pathfinity.ai/app/login';

type Section = { id: string; heading: string; points: string[] };
type SegData = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  lede: string;
  fit: string;
  points?: string[];
  sections?: Section[];
};

const DATA: Record<Segment, SegData> = {
  districts: {
    icon: Building2,
    title: 'For School Districts',
    lede: 'Consolidate a stack of single-purpose tools into one platform that grows with every student — and make career readiness continuous, not a senior-year scramble.',
    sections: [
      {
        id: 'administrators',
        heading: 'For administrators',
        points: [
          'Consolidate your stack — one platform spans elementary, middle, and high school instead of three separate tools.',
          'Measurable mastery, not just minutes — standards-aligned skill progression with a clear mastery view.',
          'Continuous career readiness, K-12 — Career Spotlight → PathKeys → Cert Quest → Career CV.',
          'Enterprise identity & isolation — Microsoft Entra single sign-on, tenant-isolated data, role-based admin.',
        ],
      },
      {
        id: 'educators',
        heading: 'For educators',
        points: [
          'Differentiation, automated — every student gets a personalized plan, so teacher time goes to instruction.',
          'Hints that teach — conceptual → procedural → worked example, escalating only when needed.',
          'Career exposure happens in the lesson, not in a separate advisory block.',
          'Per-skill mastery and spaced-repetition review you can actually see.',
        ],
      },
    ],
    fit: 'Most districts license both Pathfinity and PathCTE — start with either and add the other on the same identity.',
  },
  'private-schools': {
    icon: School,
    title: 'For Private Schools',
    lede: 'Differentiated academics and real career readiness, with the admin tools to run it — at your scale.',
    points: [
      'An experience designed for each stage — Explorer, Navigator, Pathfinder — under one roof.',
      'Career awareness woven into every lesson, not bolted on as a senior-year add-on.',
      'School-level admin tools — roster and enrollment management, progress analytics.',
      'Adaptive, standards-aligned practice that meets each student where they are.',
      'Enterprise single sign-on and tenant-isolated data — your data stays yours.',
    ],
    fit: 'License Pathfinity, PathCTE, or both — whatever fits your program.',
  },
  homeschool: {
    icon: Home,
    title: 'For Homeschool Families',
    lede: 'A platform that grows with your child — and keeps you the decision-maker.',
    points: [
      'The experience matures with your child — playful in elementary, structured in middle, independent in high school.',
      "A personalized “today's plan” drawn from your child's own mastery — meaningful work without you assigning it.",
      'Career exposure woven in from the start, so the "what comes next?" conversation has years of context.',
      'You manage the learning plan — add or withdraw subjects, and always see what they worked on.',
      'Add PathCTE for industry certifications and a growing career portfolio.',
    ],
    fit: 'Start with Pathfinity; add PathCTE for certifications and career portfolio building.',
  },
};

const PointList: React.FC<{ points: string[] }> = ({ points }) => (
  <ul className="space-y-4">
    {points.map((pt) => (
      <li key={pt} className="flex gap-3 text-gray-200">
        <Check className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
        <span>{pt}</span>
      </li>
    ))}
  </ul>
);

export const SolutionsPage: React.FC<{ segment: Segment }> = ({ segment }) => {
  const d = DATA[segment];
  const Icon = d.icon;
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-gray-950 to-indigo-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Icon className="w-10 h-10 text-violet-400 mx-auto mb-5" />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-5">{d.title}</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">{d.lede}</p>
        </div>
      </section>

      {/* Body — anchored sections (Districts) or a single point list */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {d.sections ? (
            d.sections.map((s, i) => (
              <div key={s.id} id={s.id} className={`scroll-mt-24 ${i > 0 ? 'mt-12 border-t border-gray-800 pt-12' : ''}`}>
                <h2 className="text-2xl font-bold text-white mb-5">{s.heading}</h2>
                <PointList points={s.points} />
              </div>
            ))
          ) : (
            <PointList points={d.points!} />
          )}
          <p className="mt-10 text-sm text-violet-300 border-t border-gray-800 pt-6">{d.fit}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-violet-700 to-indigo-700 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Let's find the right fit</h2>
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

export default SolutionsPage;
