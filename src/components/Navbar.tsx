import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LOGO_PATH } from '../data/arizotekData';
import { PageRoute } from '../types';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Services', page: 'services' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-[#E8E1D9]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[74px] flex items-center justify-between gap-8">
        {/* Zone 1: Official ArizoTek Logo (unmodified colors and proportions) */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home');
          }}
          className="shrink-0 flex items-center focus-visible:rounded-md"
          aria-label="ArizoTek Home"
        >
          <img
            src={LOGO_PATH}
            alt="ArizoTek — IT Automation for Small to Mid-Size Businesses"
            className="h-10 sm:h-11 md:h-12 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Primary Navigation"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <a
                key={item.page}
                href={item.page === 'home' ? '#/' : `#/${item.page}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.page);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-[15px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive
                    ? 'text-[#D66A25] font-semibold'
                    : 'text-[#402015] hover:text-[#D66A25]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#D66A25] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#/contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('contact');
            }}
            className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-[#D66A25] hover:bg-[#BD591B] rounded-lg shadow-xs transition-colors duration-150 whitespace-nowrap shrink-0"
          >
            Book a Consultation
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#E8E1D9] text-[#402015] hover:bg-[#FAF8F5] transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-white border-t border-[#E8E1D9] px-4 py-4 shadow-sm"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <a
                  key={item.page}
                  href={item.page === 'home' ? '#/' : `#/${item.page}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.page);
                  }}
                  aria-current={isActive ? 'page' : undefined}
                  className={`min-h-[44px] px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between transition-colors ${
                    isActive
                      ? 'bg-[#FAF8F5] text-[#D66A25] font-semibold'
                      : 'text-[#402015] hover:bg-[#FAF8F5]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="text-xs font-medium text-[#D66A25]">Current</span>
                  )}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-[#E8E1D9]">
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className="w-full min-h-[44px] inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-[#D66A25] hover:bg-[#BD591B] rounded-lg transition-colors"
              >
                Book a Consultation
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
