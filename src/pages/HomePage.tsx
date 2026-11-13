import React, { useState } from 'react';
import {
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  GraduationCap,
  Layers,
  PlugZap,
  ShoppingBag,
  Sparkles,
  Stethoscope,
  Store,
  Workflow,
  Zap,
} from 'lucide-react';
import {
  BEFORE_AFTER_STEPS,
  FAQ_ITEMS,
  HOW_WE_WORK_PHASES,
  INDUSTRIES_DATA,
  SERVICES_DATA,
  WHY_CHOOSE_FEATURES,
} from '../data/arizotekData';
import { PageRoute, ServiceCategory } from '../types';
import { HeroWorkflowVisual } from '../components/HeroWorkflowVisual';
import { GeometricRidgeDivider } from '../components/GeometricRidgeDivider';

interface HomePageProps {
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

const industryIcons = {
  Building2,
  Stethoscope,
  ShoppingBag,
  Briefcase,
  GraduationCap,
  Store,
};

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [demoMode, setDemoMode] = useState<'compare' | 'manual' | 'automated'>('compare');
  const [selectedStep, setSelectedStep] = useState<number>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <div>
      {/* A. HERO SECTION */}
      <section className="relative bg-white pt-10 pb-14 md:pt-16 md:pb-20 overflow-hidden">
        {/* Subtle geometric sun-arc motif referencing logo silhouette */}
        <div
          className="absolute top-0 right-0 w-[460px] h-[460px] rounded-full border border-[#E9A04A]/20 -translate-y-1/2 translate-x-1/3 pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Copy & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-sm font-semibold text-[#D66A25] tracking-tight">
                IT Automation for Small to Mid-Size Businesses
              </p>

              <h1
                className="font-bold text-[#402015] tracking-tight leading-[1.12] text-balance"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.375rem)' }}
              >
                Make Your Business Work Smarter with AI Automation.
              </h1>

              <p className="text-base sm:text-lg text-[#626262] leading-relaxed max-w-xl">
                ArizoTek helps small and mid-sized businesses eliminate repetitive tasks, streamline operations, and improve productivity through intelligent automation solutions.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="#/services"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('services');
                  }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#D66A25] hover:bg-[#BD591B] rounded-lg shadow-xs transition-colors duration-150 whitespace-nowrap"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>

                <a
                  href="#/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-[#402015] bg-white hover:bg-[#FAF8F5] border border-[#E8E1D9] hover:border-[#D66A25]/60 rounded-lg transition-colors duration-150 whitespace-nowrap"
                >
                  Let’s Talk Automation
                </a>
              </div>
            </div>

            {/* Right Interactive Workflow Visual */}
            <div className="lg:col-span-6">
              <HeroWorkflowVisual />
            </div>
          </div>
        </div>
      </section>

      <GeometricRidgeDivider topColor="#FFFFFF" bottomColor="#FAF8F5" />

      {/* B. AUTOMATION DEMONSTRATION SECTION */}
      <section className="bg-[#FAF8F5] py-16 md:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-[#D66A25]">
                Before &amp; After Workflow Demonstration
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#402015] tracking-tight text-balance">
                See How Automation Transforms Everyday Business Tasks
              </h2>
              <p className="text-base text-[#626262] leading-relaxed">
                This visual demonstration illustrates how a standard customer inquiry shifts from manual handoffs to a connected automated workflow.
              </p>
            </div>

            {/* Interactive View Filter Tabs */}
            <div
              className="inline-flex items-center gap-1 p-1 bg-white border border-[#E8E1D9] rounded-lg self-start lg:self-auto shrink-0"
              role="group"
              aria-label="Workflow comparison view"
            >
              <button
                type="button"
                onClick={() => setDemoMode('compare')}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  demoMode === 'compare'
                    ? 'bg-[#402015] text-white'
                    : 'text-[#626262] hover:text-[#402015]'
                }`}
              >
                Side-by-Side
              </button>
              <button
                type="button"
                onClick={() => setDemoMode('manual')}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  demoMode === 'manual'
                    ? 'bg-[#402015] text-white'
                    : 'text-[#626262] hover:text-[#402015]'
                }`}
              >
                Manual Process
              </button>
              <button
                type="button"
                onClick={() => setDemoMode('automated')}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                  demoMode === 'automated'
                    ? 'bg-[#D66A25] text-white'
                    : 'text-[#626262] hover:text-[#402015]'
                }`}
              >
                Automated Process
              </button>
            </div>
          </div>

          {/* Before & After Comparison Cards */}
          <div
            className={`grid gap-6 ${
              demoMode === 'compare' ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 max-w-3xl'
            }`}
          >
            {/* Manual Process Card */}
            {(demoMode === 'compare' || demoMode === 'manual') && (
              <div className="bg-white border border-[#E8E1D9] rounded-xl p-6 sm:p-8 flex flex-col">
                <div className="flex items-center justify-between gap-4 pb-5 mb-5 border-b border-[#E8E1D9]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F4EFE9] text-[#626262] flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#626262]">Before Automation</p>
                      <h3 className="text-lg font-bold text-[#402015]">Manual Process</h3>
                    </div>
                  </div>
                  <span className="text-xs font-medium text-[#626262]">5 manual handoffs</span>
                </div>

                <ol className="space-y-3 flex-1">
                  {BEFORE_AFTER_STEPS.map((item) => {
                    const isFocused = selectedStep === item.step;
                    return (
                      <li key={`manual-${item.step}`}>
                        <button
                          type="button"
                          onClick={() => setSelectedStep(item.step)}
                          className={`w-full text-left px-4 py-3.5 rounded-lg border transition-colors flex items-start gap-3.5 ${
                            isFocused
                              ? 'bg-[#FAF8F5] border-[#402015]/35'
                              : 'bg-white border-[#E8E1D9] hover:bg-[#FAF8F5]'
                          }`}
                        >
                          <span className="font-mono tabular-nums text-xs font-semibold text-[#626262] mt-0.5 shrink-0">
                            0{item.step}
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs text-[#626262] mb-0.5">{item.stage}</p>
                            <p className="text-sm sm:text-[15px] font-medium text-[#402015]">
                              {item.manual}
                            </p>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}

            {/* Automated Process Card */}
            {(demoMode === 'compare' || demoMode === 'automated') && (
              <div className="bg-white border border-[#D66A25]/45 rounded-xl p-6 sm:p-8 shadow-sm flex flex-col">
                <div className="flex items-center justify-between gap-4 pb-5 mb-5 border-b border-[#E8E1D9]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#D66A25] text-white flex items-center justify-center shrink-0">
                      <Zap className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#D66A25]">With ArizoTek</p>
                      <h3 className="text-lg font-bold text-[#402015]">Automated Process</h3>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-[#D66A25]">
                    Connected workflow
                  </span>
                </div>

                <ol className="space-y-3 flex-1">
                  {BEFORE_AFTER_STEPS.map((item) => {
                    const isFocused = selectedStep === item.step;
                    return (
                      <li key={`auto-${item.step}`}>
                        <button
                          type="button"
                          onClick={() => setSelectedStep(item.step)}
                          className={`w-full text-left px-4 py-3.5 rounded-lg border transition-colors flex items-start justify-between gap-3.5 ${
                            isFocused
                              ? 'bg-[#FAF8F5] border-[#D66A25]'
                              : 'bg-white border-[#E8E1D9] hover:bg-[#FAF8F5]'
                          }`}
                        >
                          <div className="flex items-start gap-3.5 min-w-0">
                            <span className="font-mono tabular-nums text-xs font-semibold text-[#D66A25] mt-0.5 shrink-0">
                              0{item.step}
                            </span>
                            <div className="min-w-0">
                              <p className="text-xs text-[#626262] mb-0.5">{item.stage}</p>
                              <p className="text-sm sm:text-[15px] font-semibold text-[#402015]">
                                {item.automated}
                              </p>
                            </div>
                          </div>
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-1 ${
                              isFocused ? 'text-[#D66A25]' : 'text-[#E9A04A]'
                            }`}
                            aria-hidden="true"
                          />
                        </button>
                      </li>
                    );
                  })}
                </ol>
              </div>
            )}
          </div>

          <p className="mt-5 text-xs text-[#626262]">
            Click any step row to compare the manual task with its automated counterpart. Illustrative workflow demonstration only.
          </p>
        </div>
      </section>

      {/* C. SERVICES OVERVIEW */}
      <section className="bg-white py-16 md:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl space-y-3">
              <p className="text-sm font-semibold text-[#D66A25]">Our Core Capabilities</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#402015] tracking-tight text-balance">
                Smart Automation Solutions for Growing Businesses
              </h2>
            </div>
            <a
              href="#/services"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('services');
              }}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#D66A25] hover:text-[#BD591B] transition-colors whitespace-nowrap shrink-0"
            >
              <span>View All Service Details</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES_DATA.map((service) => {
              const IconComponent = serviceIcons[service.iconName];
              return (
                <article
                  key={service.id}
                  className="bg-white border border-[#E8E1D9] hover:border-[#D66A25]/60 rounded-xl p-7 sm:p-8 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-5">
                      <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#E8E1D9] text-[#D66A25] flex items-center justify-center">
                        <IconComponent className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <span className="font-mono tabular-nums text-xs font-medium text-[#626262]">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#402015] mb-3 tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[15px] text-[#626262] leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#E8E1D9]">
                    <a
                      href="#/services"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('services', { sectionId: service.id });
                      }}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#D66A25] hover:text-[#BD591B] transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* D. ABOUT ARIZOTEK */}
      <section className="bg-[#FAF8F5] border-y border-[#E8E1D9] py-16 md:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <p className="text-sm font-semibold text-[#D66A25]">About ArizoTek</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#402015] tracking-tight text-balance">
                Technology That Makes Business Simpler
              </h2>
              <p className="text-base text-[#626262] leading-relaxed">
                At ArizoTek, we help businesses identify operational challenges and transform repetitive processes into efficient automated workflows. Our focus is on practical technology solutions that save time, reduce manual effort, and allow businesses to focus on what matters most.
              </p>
              <div className="pt-2">
                <a
                  href="#/contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('contact');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#402015] hover:bg-[#2F160E] rounded-lg transition-colors"
                >
                  <span>Schedule an Introductory Call</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Clean Architectural Supporting Visual */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-[#E8E1D9] rounded-xl p-6 sm:p-8">
                <p className="text-xs font-semibold text-[#626262] mb-5">
                  Practical Business Architecture
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center">
                  {/* Left: Business Inputs */}
                  <div className="space-y-2.5">
                    <div className="px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8E1D9] text-xs font-medium text-[#402015]">
                      Customer Emails
                    </div>
                    <div className="px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8E1D9] text-xs font-medium text-[#402015]">
                      Website Forms
                    </div>
                    <div className="px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#E8E1D9] text-xs font-medium text-[#402015]">
                      Invoices &amp; Docs
                    </div>
                  </div>

                  {/* Center: ArizoTek Hub */}
                  <div className="py-5 px-4 rounded-xl bg-[#402015] text-white text-center space-y-1.5">
                    <div className="w-9 h-9 rounded-lg bg-[#D66A25] text-white flex items-center justify-center mx-auto mb-2">
                      <Sparkles className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <p className="text-sm font-bold tracking-tight">ArizoTek</p>
                    <p className="text-xs text-[#E9A04A]">Automation Layer</p>
                  </div>

                  {/* Right: Streamlined Outputs */}
                  <div className="space-y-2.5">
                    <div className="px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#D66A25]/35 text-xs font-medium text-[#402015]">
                      Organized CRM
                    </div>
                    <div className="px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#D66A25]/35 text-xs font-medium text-[#402015]">
                      Timely Responses
                    </div>
                    <div className="px-3.5 py-2.5 rounded-lg bg-[#FAF8F5] border border-[#D66A25]/35 text-xs font-medium text-[#402015]">
                      Clean Reports
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. WHY CHOOSE ARIZOTEK? */}
      <section className="bg-white py-16 md:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <p className="text-sm font-semibold text-[#D66A25]">Why Choose ArizoTek?</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#402015] tracking-tight text-balance">
              Built for Practical Business Operations
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_FEATURES.map((feature) => (
              <div
                key={feature.number}
                className="bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl p-6 space-y-3"
              >
                <span className="inline-block font-mono tabular-nums text-xs font-semibold text-[#D66A25]">
                  {feature.number}
                </span>
                <h3 className="text-lg font-bold text-[#402015] tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#626262] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. HOW WE WORK */}
      <section className="bg-[#FAF8F5] border-y border-[#E8E1D9] py-16 md:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <p className="text-sm font-semibold text-[#D66A25]">How We Work</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#402015] tracking-tight text-balance">
              A Clear Four-Step Implementation Process
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {HOW_WE_WORK_PHASES.map((phase, idx) => (
              <div key={phase.number} className="relative flex flex-col">
                <div className="bg-white border border-[#E8E1D9] rounded-xl p-6 flex-1 relative">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="w-9 h-9 rounded-lg bg-[#D66A25] text-white font-mono tabular-nums text-sm font-bold flex items-center justify-center">
                      {phase.number}
                    </span>
                    {idx < HOW_WE_WORK_PHASES.length - 1 && (
                      <ArrowRight
                        className="hidden lg:block w-4 h-4 text-[#E9A04A]"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-[#402015] mb-2">{phase.title}</h3>
                  <p className="text-sm text-[#626262] leading-relaxed">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* G. INDUSTRIES WE SUPPORT */}
      <section className="bg-white py-16 md:py-22">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl space-y-3 mb-12">
            <p className="text-sm font-semibold text-[#D66A25]">Industries We Support</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#402015] tracking-tight text-balance">
              Automation for Different Business Needs
            </h2>
            <p className="text-base text-[#626262] leading-relaxed">
              Practical workflow automation adapts to the day-to-day realities of service teams, clinics, retailers, and growing organizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((industry) => {
              const IconComponent = industryIcons[industry.iconName];
              return (
                <div
                  key={industry.title}
                  className="bg-white border border-[#E8E1D9] rounded-xl p-6 sm:p-7 space-y-3.5 hover:border-[#D66A25]/50 transition-colors"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#FAF8F5] border border-[#E8E1D9] text-[#D66A25] flex items-center justify-center">
                    <IconComponent className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-bold text-[#402015] tracking-tight">
                    {industry.title}
                  </h3>
                  <p className="text-sm text-[#626262] leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* H. FAQ SECTION */}
      <section className="bg-[#FAF8F5] border-t border-[#E8E1D9] py-16 md:py-22">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <p className="text-sm font-semibold text-[#D66A25]">Common Questions</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#402015] tracking-tight text-balance">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="bg-white border border-[#E8E1D9] rounded-xl overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 hover:bg-[#FAF8F5]/60 transition-colors"
                  >
                    <span className="text-base font-semibold text-[#402015]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#D66A25] shrink-0 transition-transform duration-150 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-sm sm:text-[15px] text-[#626262] leading-relaxed border-t border-[#E8E1D9]/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* I. FINAL CTA */}
      <section className="bg-[#402015] text-white py-16 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight text-balance">
                Ready to Automate Your Business?
              </h2>
              <p className="text-base sm:text-lg text-[#F4EFE9]/85 leading-relaxed">
                Let’s identify the tasks taking up your valuable time and explore how automation can make your operations more efficient.
              </p>
            </div>
            <div className="shrink-0">
              <a
                href="#/contact"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('contact');
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-white bg-[#D66A25] hover:bg-[#BD591B] rounded-lg transition-colors whitespace-nowrap"
              >
                <span>Contact ArizoTek</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
