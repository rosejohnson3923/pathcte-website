import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

// Marketing Website Pages (CTE-first)
import { Homepage } from './pages/marketing/Homepage';
import { AboutUs } from './pages/marketing/AboutUs';
import { Contact } from './pages/marketing/Contact';
import { PrivacyPolicy } from './pages/marketing/PrivacyPolicy';
import { SolutionsPage } from './pages/marketing/SolutionsPage';
import { ProductsPage } from './pages/marketing/ProductsPage';
import { PricingPage } from './pages/marketing/PricingPage';

// Import global styles
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        {/* Marketing Website Routes */}
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />

        {/* Solutions (buyer-segment) */}
        <Route path="/solutions/districts" element={<SolutionsPage segment="districts" />} />
        <Route path="/solutions/private-schools" element={<SolutionsPage segment="private-schools" />} />
        <Route path="/solutions/homeschool" element={<SolutionsPage segment="homeschool" />} />

        {/* Products (product-first) */}
        <Route path="/products/pathfinity" element={<ProductsPage product="pathfinity" />} />
        <Route path="/products/pathcte" element={<ProductsPage product="pathcte" />} />
        <Route path="/products/suite" element={<ProductsPage product="suite" />} />
        <Route path="/pricing" element={<PricingPage />} />

        {/* Legacy / Pathfinity-only routes → fold into the CTE IA */}
        <Route path="/how-it-works" element={<Navigate to="/" replace />} />
        <Route path="/research" element={<Navigate to="/" replace />} />
        <Route path="/get-started" element={<Navigate to="/contact" replace />} />
        <Route path="/demo" element={<Navigate to="/contact" replace />} />
        <Route path="/join-waitlist" element={<Navigate to="/contact" replace />} />
        <Route path="/waitlist" element={<Navigate to="/contact" replace />} />
        <Route path="/for-students" element={<Navigate to="/products/pathcte" replace />} />
        <Route path="/for-parents" element={<Navigate to="/solutions/homeschool" replace />} />
        <Route path="/for-teachers" element={<Navigate to="/solutions/districts" replace />} />
        <Route path="/for-administrators" element={<Navigate to="/solutions/districts" replace />} />

        {/* Catch-all → home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
