import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { WatchModal } from './components/WatchModal';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { VideoModal } from './components/VideoModal';
import { Watch } from './data/watches';
import { ArrowUp } from 'lucide-react';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('heritage');
  const [selectedWatch, setSelectedWatch] = useState<Watch | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Monitor scroll for active section highlight and scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sections = ['concierge', 'craftsmanship', 'collection', 'innovations', 'heritage'];
      for (const s of sections) {
        const el = document.getElementById(s);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(s);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart operations
  const handleAddToCart = (watch: Watch, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.watch.id === watch.id);
      if (existing) {
        return prev.map((item) =>
          item.watch.id === watch.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { watch, quantity }];
    });
  };

  const handleUpdateQuantity = (watchId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.watch.id === watchId) {
            const newQ = item.quantity + delta;
            return newQ > 0 ? { ...item, quantity: newQ } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (watchId: string) => {
    setCartItems((prev) => prev.filter((item) => item.watch.id !== watchId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleBuyDirect = (watch: Watch) => {
    handleAddToCart(watch, 1);
    setIsCartOpen(true);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#CCCCCC] flex flex-col items-center">
      {/* Outer Wrapper matching original #wrapper styling */}
      <div
        id="wrapper"
        className="w-full max-w-[1500px] min-h-screen bg-[#e0dddd] shadow-2xl border-x-0 lg:border-x-2 border-neutral-400 flex flex-col relative overflow-hidden"
        style={{
          backgroundImage: "url('/bg.jpg')",
          backgroundRepeat: 'repeat',
        }}
      >
        {/* Top Navigation conforming to Top Bar Contract */}
        <Header
          cartCount={totalCartCount}
          onOpenCart={() => setIsCartOpen(true)}
          activeSection={activeSection}
          onNavigateSection={handleNavigateSection}
        />

        {/* Main Content: Full Landing Page Journey */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 min-w-0">
          <LandingPage
            onSelectWatch={(watch) => setSelectedWatch(watch)}
            onBuyDirect={handleBuyDirect}
            onOpenVideo={() => setIsVideoOpen(true)}
          />
        </main>

        {/* Footer with Heritage Pillars and Swiss Warranty */}
        <Footer showHeritageColumns={true} />

        {/* Watch Detail Modal */}
        <WatchModal
          watch={selectedWatch}
          onClose={() => setSelectedWatch(null)}
          onAddToCart={(watch, qty) => handleAddToCart(watch, qty)}
        />

        {/* Cart / Reservation Drawer */}
        <CartDrawer
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
          onClearCart={handleClearCart}
          onNavigateToContact={() => {
            setIsCartOpen(false);
            handleNavigateSection('concierge');
          }}
        />

        {/* Heritage Video Modal */}
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
        />

        {/* Back to Top Floating Button */}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-30 p-3 bg-[#880e0e] hover:bg-[#680b0b] text-white rounded-full shadow-lg transition-all hover:scale-110 cursor-pointer"
            aria-label="Back to top"
            title="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};
