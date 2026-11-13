import React from 'react';
import {
  ArrowRight,
  Bot,
  Check,
  Compass,
  Layers,
  PlugZap,
  Workflow,
} from 'lucide-react';
import {
  SERVICES_DATA,
  SERVICES_FIVE_STAGE_FLOW,
} from '../data/arizotekData';
import { PageRoute, ServiceCategory } from '../types';
import { GeometricRidgeDivider } from '../components/GeometricRidgeDivider';

interface ServicesPageProps {
  onNavigate: (
    page: PageRoute,
    options?: { sectionId?: string; preselectedService?: ServiceCategory }
  ) => void;
}

const serviceIcons = {
  Bot,
  Workflow,
  Layers,
  PlugZap,
};

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div>
      {/* A. SERVICES HERO SECTION */}
      <section className="bg-white pt-12 pb-14 md:pt-16 md:pb-18">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-5">
            <p className="text-sm font-semibold text-[#D66A25]">
              ArizoTek Services
            </p>
            <h1
              className="font-bold text-[#402015] tracking-tight leading-[1.12] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}
            >
              Automation Solutions Designed Around Your Business
            </h1>
            <p className="text-base sm:text-lg text-[#626262] leading-relaxed max-w-2xl">
              From intelligent AI assistants to automated business workflows, we help businesses simplify operations and work more efficiently.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#D66A25] hover:bg-[#BD591B] rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Anchor Jump Bar */}
          <div className="mt-10 pt-6 border-t border-[#E8E1D9] flex flex-wrap items-center gap-x-8 gap-y-3">
            {SERVICES_DATA.map((service) => (
              <button
                key={service.id}
                type="button"
                onClick={() => {
                  const el = document.getElementById(service.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="text-sm font-medium text-[#626262] hover:text-[#D66A25] transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <span className="font-mono tabular-nums text-xs text-[#D66A25]">
                  {service.number}
                </span>
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <GeometricRidgeDivider topColor="#FFFFFF" bottomColor="#FAF8F5" />

      {/* B. DETAILED SERVICES */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = serviceIcons[service.iconName];
            const isEven = index % 2 === 1;

            return (
              <article
                id={service.id}
                key={service.id}
                className="scroll-mt-24 bg-white border border-[#E8E1D9] rounded-xl p-6 sm:p-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                  {/* Narrative & Capabilities Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#E8E1D9] text-[#D66A25] flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <span className="font-mono tabular-nums text-xs font-semibold text-[#D66A25]">
                          Service {service.number}
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-bold text-[#402015] tracking-tight">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="text-base text-[#626262] leading-relaxed">
                      {service.detailedIntro}
                    </p>

                    <div>
                      <h3 className="text-sm font-bold text-[#402015] mb-3.5">
                        Key Capabilities
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                        {service.capabilities.map((cap) => (
                          <li
                            key={cap}
                            className="flex items-start gap-2.5 text-sm text-[#402015]"
                          >
                            <Check
                              className="w-4 h-4 text-[#D66A25] shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() =>
                          onNavigate('contact', {
                            preselectedService: service.title,
                          })
                        }
                        className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#D66A25] hover:bg-[#BD591B] rounded-lg transition-colors whitespace-nowrap"
                      >
                        <span>Discuss This Solution</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  {/* Supporting Visual Illustration Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div
                      className={`rounded-xl border border-[#E8E1D9] p-6 ${
                        index % 2 === 0 ? 'bg-[#FAF8F5]' : 'bg-[#F4EFE9]/60'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 pb-3.5 mb-4 border-b border-[#E8E1D9]">
                        <span className="text-xs font-semibold text-[#402015]">
                          {service.demoLabel}
                        </span>
                        <span className="font-mono tabular-nums text-xs text-[#D66A25]">
                          {service.number}
                        </span>
                      </div>

                      <div className="space-y-3">
                        {service.demoSteps.map((step, sIdx) => (
                          <div
                            key={step.label}
                            className="bg-white border border-[#E8E1D9] rounded-lg px-4 py-3 flex items-start gap-3"
                          >
                            <span className="w-6 h-6 rounded-md bg-[#FAF8F5] border border-[#E8E1D9] text-[#D66A25] font-mono tabular-nums text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                              {sIdx + 1}
                            </span>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-[#402015]">
                                {step.label}
                              </p>
                              <p className="text-xs text-[#626262] mt-0.5">
                                {step.detail}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* C. HOW OUR AUTOMATION WORKS */}
      <section className="bg-white py-16 md:py-22 border-t border-[#E8E1D9]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <p className="text-sm font-semibold text-[#D66A25]">
              How Our Automation Works
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#402015] tracking-tight text-balance">
              From Business Input to Measurable Result
            </h2>
            <p className="text-base text-[#626262] leading-relaxed">
              Every automated workflow follows a clear, reliable sequence designed for visibility and human control.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {SERVICES_FIVE_STAGE_FLOW.map((stage, idx) => (
              <div
                key={stage.step}
                className="bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl p-5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono tabular-nums text-xs font-bold text-[#D66A25]">
                      {stage.step}
                    </span>
                    {idx < SERVICES_FIVE_STAGE_FLOW.length - 1 && (
                      <ArrowRight
                        className="w-4 h-4 text-[#E9A04A] hidden lg:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="text-base font-bold text-[#402015] mb-2">
                    {stage.title}
                  </h3>
                  <p className="text-sm text-[#626262] leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* D. OUR APPROACH */}
      <section className="bg-[#FAF8F5] border-y border-[#E8E1D9] py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[#E8E1D9] rounded-xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#D66A25]">
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>Our Approach</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#402015] tracking-tight text-balance">
                Start with the Problem. Build the Right Solution.
              </h2>
              <p className="text-base text-[#626262] leading-relaxed">
                Technology only delivers value when it fits how your team actually works. Before recommending any AI agent or workflow tool, ArizoTek maps your current process, identifies where manual friction slows down your staff, and designs a targeted solution around your real business priorities.
              </p>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#402015] hover:bg-[#2F160E] rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Talk Through Your Process</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* E. CTA */}
      <section className="bg-[#402015] text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight text-balance">
              Let’s Find the Right Solution for Your Business.
            </h2>
            <p className="text-base text-[#F4EFE9]/85">
              Share your workflow bottlenecks and we will help you explore practical automation options.
            </p>
          </div>
          <a
            href="#/contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate('contact');
            }}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-[#D66A25] hover:bg-[#BD591B] rounded-lg transition-colors whitespace-nowrap self-start md:self-auto"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </section>
    </div>
  );
};
