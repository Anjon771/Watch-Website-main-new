import React from 'react';
import { ShoppingBag, Phone } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  activeSection: string;
  onNavigateSection: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  activeSection,
  onNavigateSection,
}) => {
  const navLinks = [
    { id: 'heritage', label: 'Heritage' },
    { id: 'innovations', label: 'Innovations' },
    { id: 'collection', label: 'Collection' },
    { id: 'craftsmanship', label: 'Craftsmanship' },
    { id: 'concierge', label: 'Concierge' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#dfdbdb]/95 backdrop-blur-md border-b border-neutral-300 shadow-xs transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand wordmark in display face, single text element, no clutter */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="text-lg sm:text-xl lg:text-2xl font-heading font-extrabold tracking-wider text-black hover:text-[#880e0e] transition-colors whitespace-nowrap shrink-0"
        >
          TISSOT WATCHES AND CO.
        </a>

        {/* Zone 2: 4–5 concise single-line text nav links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-sans-ui font-medium text-neutral-800">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigateSection(link.id)}
                className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer py-1 border-b-2 ${
                  isActive
                    ? 'text-[#880e0e] font-semibold border-[#880e0e]'
                    : 'text-neutral-700 hover:text-black border-transparent'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:824-526-8843"
            className="hidden xl:flex items-center gap-2 text-xs font-sans-ui text-neutral-700 hover:text-[#880e0e] transition-colors whitespace-nowrap shrink-0 px-2 py-1"
          >
            <Phone className="w-3.5 h-3.5 text-[#880e0e]" />
            <span>824-526-8843</span>
          </a>

          <button
            onClick={onOpenCart}
            aria-label="View shopping bag"
            className="flex items-center gap-2 bg-[#0b0a0c] hover:bg-[#880e0e] text-white px-4 py-2.5 rounded font-sans-ui text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer whitespace-nowrap shrink-0"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Bag</span>
            {cartCount > 0 && (
              <span className="bg-[#880e0e] text-white text-[11px] font-bold px-1.5 py-0.5 rounded-full border border-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile sub-navigation bar */}
      <div className="md:hidden flex items-center justify-around overflow-x-auto py-2.5 px-4 bg-[#d5d0d0] border-t border-neutral-300 text-xs font-sans-ui">
        {navLinks.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigateSection(link.id)}
            className={`whitespace-nowrap px-2 py-1 font-medium ${
              activeSection === link.id
                ? 'text-[#880e0e] font-bold underline underline-offset-4'
                : 'text-neutral-700'
            }`}
          >
            {link.label}
          </button>
        ))}
      </div>
    </header>
  );
};
