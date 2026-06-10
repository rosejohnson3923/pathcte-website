// ================================================================
// MARKETING LAYOUT
// Shared layout for all marketing pages with navigation and footer
// ================================================================

import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { BrandMark } from '../BrandMark';

interface MarketingLayoutProps {
  children: React.ReactNode;
  showDemoButton?: boolean;
}

export const MarketingLayout: React.FC<MarketingLayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAudienceDropdownOpen, setIsAudienceDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAudienceDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle anchor navigation when URL hash changes
  useEffect(() => {
    // Scroll to the hashed section on ANY page (cross-page footer anchors, etc.)
    if (location.hash) {
      // Wait for page to render
      setTimeout(() => {
        const element = document.getElementById(location.hash.slice(1));
        if (element) {
          // Calculate position accounting for header
          const header = document.querySelector('header');
          const headerHeight = header ? header.offsetHeight : 80;
          const elementTop = element.offsetTop - headerHeight;
          
          window.scrollTo({
            top: elementTop,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen pathcte-ambient text-gray-100">
      {/* Sticky Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <BrandMark className="w-16 h-16 rounded-lg" title="PathCTE" />
                <span className="text-xl font-bold text-gray-900 dark:text-white">PathCTE</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {/* Explore Dropdown (PathCTE capabilities + Solutions) */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsAudienceDropdownOpen(!isAudienceDropdownOpen)}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
                >
                  <span>Explore</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isAudienceDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {isAudienceDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 glass-menu rounded-lg py-2 z-50">
                    <div className="px-4 pt-1 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">PathCTE</div>
                    <Link to="/#explore" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400" onClick={() => setIsAudienceDropdownOpen(false)}>Career Exploration</Link>
                    <Link to="/#certquest" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400" onClick={() => setIsAudienceDropdownOpen(false)}>Cert Quest</Link>
                    <Link to="/#pathkeys" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400" onClick={() => setIsAudienceDropdownOpen(false)}>PathKeys</Link>
                    <Link to="/#careercv" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400" onClick={() => setIsAudienceDropdownOpen(false)}>Career CV</Link>
                    <div className="my-1 border-t border-gray-200 dark:border-gray-700" />
                    <div className="px-4 pt-1 pb-1 text-xs font-semibold uppercase tracking-wide text-gray-400">Solutions</div>
                    <Link to="/solutions/districts" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400" onClick={() => setIsAudienceDropdownOpen(false)}>School Districts</Link>
                    <Link to="/solutions/private-schools" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400" onClick={() => setIsAudienceDropdownOpen(false)}>Private Schools</Link>
                    <Link to="/solutions/homeschool" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:text-purple-600 dark:hover:text-purple-400" onClick={() => setIsAudienceDropdownOpen(false)}>Homeschool</Link>
                  </div>
                )}
              </div>

              <Link to="/pricing" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors">
                Pricing
              </Link>
              <a href="https://pathfinity.ai" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors">
                Pathfinity ↗
              </a>
              <Link to="/about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors">
                About
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Subscriber Login Button */}
              <a
                href="https://app.pathfinity.ai/app/login"
                className="px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
              >
                Login
              </a>

              <Link
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-medium"
              >
                Contact Sales
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-menu border-t border-white/10">
            <div className="px-4 py-3 space-y-3">
              <div className="pt-1 text-xs font-semibold uppercase tracking-wide text-gray-400">PathCTE</div>
              <Link to="/#explore" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Career Exploration</Link>
              <Link to="/#certquest" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Cert Quest</Link>
              <Link to="/#pathkeys" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>PathKeys</Link>
              <Link to="/#careercv" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Career CV</Link>
              <div className="pt-2 text-xs font-semibold uppercase tracking-wide text-gray-400">Solutions</div>
              <Link to="/solutions/districts" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>School Districts</Link>
              <Link to="/solutions/private-schools" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Private Schools</Link>
              <Link to="/solutions/homeschool" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Homeschool</Link>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700" />
              <Link to="/pricing" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
              <a href="https://pathfinity.ai" className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium" onClick={() => setIsMobileMenuOpen(false)}>Pathfinity ↗</a>
              <Link
                to="/about"
                className="block text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-2">
                {/* Subscriber Login Button - Mobile */}
                <a
                  href="https://app.pathfinity.ai/app/login"
                  className="block text-center px-4 py-2 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </a>

                <Link
                  to="/contact"
                  className="block text-center px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Domain Welcome Banner */}

      {/* Main Content - Add padding-top to account for fixed header */}
      <main className="pt-16">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-950/60 backdrop-blur-xl border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <BrandMark className="w-16 h-16 rounded-lg" title="PathCTE" />
                <span className="text-xl font-bold">PathCTE</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Career-technical education that turns interest into recognized readiness.
              </p>
              <div className="mt-4">
                <img
                  src="/images/powered-by-esposure-white.png"
                  alt="Powered by Esposure™, Inc"
                  className="h-8 w-auto"
                />
              </div>
            </div>

            {/* PathCTE */}
            <div>
              <h3 className="font-semibold mb-4">PathCTE</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/#explore" className="hover:text-white transition-colors">Career Exploration</Link></li>
                <li><Link to="/#certquest" className="hover:text-white transition-colors">Cert Quest</Link></li>
                <li><Link to="/#pathkeys" className="hover:text-white transition-colors">PathKeys</Link></li>
                <li><Link to="/#careercv" className="hover:text-white transition-colors">Career CV</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="font-semibold mb-4">Solutions</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link to="/solutions/districts" className="hover:text-white transition-colors">School Districts</Link></li>
                <li><Link to="/solutions/private-schools" className="hover:text-white transition-colors">Private Schools</Link></li>
                <li><Link to="/solutions/homeschool" className="hover:text-white transition-colors">Homeschool</Link></li>
                <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="https://pathfinity.ai" className="hover:text-white transition-colors">Pathfinity ↗</a></li>
                <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
            <p>&copy; 2026 PathCTE. All rights reserved.</p>
            <div className="mt-4 flex items-center justify-center">
              <span className="text-xs text-gray-500 mr-2">A product of</span>
              <img 
                src="/images/esposure-logo-white.png" 
                alt="Esposure™, Inc" 
                className="h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarketingLayout;