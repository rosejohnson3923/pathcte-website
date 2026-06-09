// ================================================================
// PRODUCTS — product-first pages (Pathfinity / PathCTE / The Suite)
// docs/Marketing/PATHFINITY_WEBSITE_IA.md. Claims limited to SHIPPED features
// per docs/Marketing/PRODUCT_CAPABILITIES_AUDIT.md. No DEEP, no unshipped claims.
// ================================================================

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import MarketingLayout from '../../components/marketing/MarketingLayout';
import { BrandMark } from '../../components/BrandMark';

export type ProductKey = 'pathfinity' | 'pathcte' | 'suite';

const LOGIN_URL = 'https://app.pathfinity.ai/app/login';

const DATA: Record<ProductKey, { name: string; tag: string; lede: string; points: string[] }> = {
  pathfinity: {
    name: 'Pathfinity',
    tag: 'Career-connected learning, K-12',
    lede: 'Every lesson connected to real careers, in an experience that grows with the student from kindergarten through twelfth grade.',
    points: [
      'Three age-tuned experiences — Explorer (K-5), Navigator (6-8), Pathfinder (9-12) — on one progress record.',
      'Learn → Experience → Discover on every skill: concept, then a career scenario, then career exploration.',
      'AI companions guide the way with adaptive, standards-aligned support (conceptual → procedural → worked-example hints).',
      'Adaptive practice and spaced-repetition review keep skills sharp over time.',
      'Discovered Live arcade — Career Bingo, Career Match, CEO Takeover, The Decision Desk (multiplayer).',
      'XP, awards, streaks, and leaderboards — and read-aloud accessibility built in.',
    ],
  },
  pathcte: {
    name: 'PathCTE',
    tag: 'Career-technical education — readiness for any career',
    lede: 'Turn career interest into real, recognized readiness: exploration, industry certifications, and a growing career portfolio.',
    points: [
      'Explore careers across clusters — salary, growth, and required certifications.',
      'Cert Quest — prepare for and take tiered industry certification exams.',
      'PathKeys — structured, badge-style career mastery progression.',
      'Career CV — a living portfolio with CareerIQ, ClusterIQ, ProgramIQ & BusinessIQ.',
      'Tournaments — compete solo or multiplayer.',
      'Rewards marketplace and XP history to keep students engaged.',
    ],
  },
  suite: {
    name: 'The Suite',
    tag: 'Pathfinity + PathCTE, better together',
    lede: 'One platform, one login, one progress record. License Pathfinity, PathCTE, or both — the experience adapts to what you own.',
    points: [
      'One login via Microsoft Entra; switch products with the app switcher.',
      'One cumulative record — progress and rewards carry across both products.',
      'License what you need — Pathfinity only, PathCTE only, or both — and add the other anytime on the same identity.',
      'Career exposure lives in Pathfinity lessons even without PathCTE; full PathCTE adds the structured progression layer.',
    ],
  },
};

export const ProductsPage: React.FC<{ product: ProductKey }> = ({ product }) => {
  const d = DATA[product];
  return (
    <MarketingLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/30 via-gray-950 to-indigo-900/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <BrandMark className="w-12 h-12 rounded-xl mx-auto mb-5" title={d.name} />
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">{d.name}</h1>
          <p className="text-violet-300 mb-5">{d.tag}</p>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">{d.lede}</p>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="space-y-4">
            {d.points.map((pt) => (
              <li key={pt} className="flex gap-3 text-gray-200">
                <Check className="w-5 h-5 text-violet-400 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-violet-700 to-indigo-700 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
            {product === 'suite' ? 'License Pathfinity, PathCTE, or both' : `Bring ${d.name} to your students`}
          </h2>
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

export default ProductsPage;
