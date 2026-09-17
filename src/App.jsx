import React, { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { LoadingScreen } from './components/LoadingScreen';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Academy } from './pages/Academy';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { Admin } from './pages/Admin';

export function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingType, setBookingType] = useState('Appointment');
  const [preselectedItem, setPreselectedItem] = useState('');

  const handleFinishLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleOpenBooking = (type = 'Appointment', item = '') => {
    setBookingType(type);
    setPreselectedItem(item);
    setIsBookingOpen(true);
  };

  const renderActivePage = () => {
    switch (activeTab) {
      case 'home':
        return <Home setActiveTab={setActiveTab} onOpenBooking={handleOpenBooking} />;
      case 'about':
        return <About onOpenBooking={handleOpenBooking} />;
      case 'services':
        return <Services onOpenBooking={handleOpenBooking} />;
      case 'academy':
        return <Academy onOpenBooking={handleOpenBooking} />;
      case 'gallery':
        return <Gallery onOpenBooking={handleOpenBooking} />;
      case 'contact':
        return <Contact onOpenBooking={handleOpenBooking} />;
      case 'admin':
        return <Admin onOpenBooking={handleOpenBooking} />;
      default:
        return <Home setActiveTab={setActiveTab} onOpenBooking={handleOpenBooking} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#070A11] text-slate-100 flex flex-col font-sans selection:bg-glam-pink selection:text-white">
      {/* Animated Luxury Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onFinished={handleFinishLoading} />
        )}
      </AnimatePresence>

      {/* Sticky Translucent Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* Modern Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenBooking={handleOpenBooking}
      />

      {/* VIP Booking & Academy Inquiry Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialType={bookingType}
        preselectedItem={preselectedItem}
      />

      {/* Floating WhatsApp Quick Contact Button */}
      <WhatsAppButton />
    </div>
  );
}

export default App;
