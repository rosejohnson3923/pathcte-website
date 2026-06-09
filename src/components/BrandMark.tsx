/**
 * BrandMark — the unified suite logo (ported from the monorepo apps, commit fbfd4f1).
 *
 * A ~0.5 KB inline-SVG purple-gradient "P" (#a78bfa → #7c3aed). Self-contained and
 * theme-agnostic — renders identically on light AND dark, so no variant swapping.
 * Shared by Pathfinity + PathCTE (the suite is unified on purple).
 *
 * Size via className width/height utilities, e.g. <BrandMark className="w-16 h-16" />.
 */
interface BrandMarkProps {
  className?: string;
  title?: string;
}

export function BrandMark({ className = 'h-10 w-10', title = 'Pathfinity' }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="brandmark-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a78bfa" />
          <stop offset="100%" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="22" fill="url(#brandmark-grad)" />
      <text
        x="50" y="53" textAnchor="middle" dominantBaseline="central"
        fontFamily="ui-sans-serif, system-ui, sans-serif" fontWeight="800" fontSize="62"
        fill="#ffffff"
      >
        P
      </text>
    </svg>
  );
}

export default BrandMark;
