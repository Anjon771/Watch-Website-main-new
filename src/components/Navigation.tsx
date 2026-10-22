import React from 'react';

export type PageId = 'home' | 'about' | 'collection' | 'contact';

interface NavigationProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onNavigate }) => {
  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'collection', label: 'Collection' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <nav className="w-full lg:w-48 xl:w-56 shrink-0 p-3 lg:p-4">
      <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2.5 sm:gap-3 list-none p-0 m-0">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <li key={item.id} className="w-full">
              <button
                type="button"
                onClick={() => {
                  onNavigate(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`w-full block text-center font-bold px-3 py-3 transition-all cursor-pointer font-serif-luxury text-base tracking-wide ${
                  isActive
                    ? 'text-[rgb(136,14,14)] bg-[#dedede] border-[3px] border-[rgb(129,7,7)] shadow-inner'
                    : 'text-[#0b0a0c] bg-[rgb(175,170,170)] hover:text-[rgb(136,14,14)] border-[3px] border-[#CCCCCC] hover:border-[rgb(129,7,7)] shadow-sm'
                }`}
                style={{
                  borderStyle: isActive ? 'inset' : 'outset'
                }}
              >
                {item.label}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
