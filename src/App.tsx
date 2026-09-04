import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { FloatingCallButton } from './components/FloatingCallButton';
import { WhatsAppButton } from './components/WhatsAppButton';
import { BackToTop } from './components/BackToTop';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { ServiceDetails } from './pages/ServiceDetails';
import { BookAppointment } from './pages/BookAppointment';

// Helper to scroll to top whenever the route changes
const ScrollToTopOnNavigate: React.FC = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname, search]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTopOnNavigate />
      <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white font-sans antialiased">
        
        {/* Fixed/Sticky Header with announcements & navigation */}
        <Header />

        {/* Main Routed Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/book" element={<BookAppointment />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Fixed Floating Contact Buttons (remain visible during scrolling) */}
        <FloatingCallButton />
        <WhatsAppButton />
        
        {/* Back To Top Floating Action */}
        <BackToTop />
        
      </div>
    </Router>
  );
}
