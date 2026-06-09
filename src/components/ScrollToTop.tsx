import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Resets scroll to the top on route (pathname) change — fixes SPA navigations
 * that otherwise keep the previous scroll position (e.g. footer links landing
 * the user at the bottom of the next page).
 *
 * Skips when the URL has a #hash, so anchor links still scroll to their section
 * (handled by MarketingLayout's hash effect).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
