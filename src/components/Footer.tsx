import React from 'react';
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import { CONTACT_PLACEHOLDERS, LOGO_PATH, SERVICES_DATA } from '../data/arizotekData';
import { PageRoute, ServiceCategory } from '../types';

interface FooterProps {
  onNavigate: (page: PageRoute, options?: { sectionId?: string; preselectedService?: ServiceCategory }) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white border-t border-[#E8E1D9] text-[#402015]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="inline-block focus-visible:rounded-md"
              aria-label="ArizoTek Home"
            >
              <img
                src={LOGO_PATH}
                alt="ArizoTek — IT Automation for Small to Mid-Size Businesses"
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </a>
            <p className="text-sm leading-relaxed text-[#626262] max-w-sm">
              Practical AI and IT automation solutions helping small and mid-sized businesses eliminate repetitive work, connect everyday software, and operate more efficiently.
            </p>
            <div className="pt-2 flex items-center gap-3" aria-label="Social Media Placeholders">
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                title="LinkedIn (Placeholder)"
                aria-label="LinkedIn placeholder"
                className="w-10 h-10 rounded-lg border border-[#E8E1D9] bg-[#FAF8F5] text-[#402015] hover:border-[#D66A25] hover:text-[#D66A25] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                title="X / Twitter (Placeholder)"
                aria-label="X / Twitter placeholder"
                className="w-10 h-10 rounded-lg border border-[#E8E1D9] bg-[#FAF8F5] text-[#402015] hover:border-[#D66A25] hover:text-[#D66A25] flex items-center justify-center transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                title="Facebook (Placeholder)"
                aria-label="Facebook placeholder"
                className="w-10 h-10 rounded-lg border border-[#E8E1D9] bg-[#FAF8F5] text-[#402015] hover:border-[#D66A25] hover:text-[#D66A25] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold text-[#402015] tracking-tight">Navigation</h3>
            <ul className="space-y-2.5 text-sm text-[#626262]">
              <li>
                <a
                  href="#/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('home');
                  }}
                  className="hover:text-[#D66A25] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#/services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('services');
                  }}
                  className="hover:text-[#D66A25] transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="hover:text-[#D66A25] transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="font-medium text-[#D66A25] hover:text-[#BD591B] transition-colors"
                >
                  Book a Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-[#402015] tracking-tight">Services</h3>
            <ul className="space-y-2.5 text-sm text-[#626262]">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <a
                    href={`#/services`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('services', { sectionId: service.id });
                    }}
                    className="hover:text-[#D66A25] transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Editable Contact Placeholders */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold text-[#402015] tracking-tight">Contact Information</h3>
            <ul className="space-y-3 text-sm text-[#626262]">
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{CONTACT_PLACEHOLDERS.emailShort}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{CONTACT_PLACEHOLDERS.phoneShort}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{CONTACT_PLACEHOLDERS.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-12 pt-7 border-t border-[#E8E1D9] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#626262]">
          <p>© 2026 ArizoTek. All Rights Reserved.</p>
          <p>IT Automation for Small to Mid-Size Businesses · Prototype Demo</p>
        </div>
      </div>
    </footer>
  );
};
