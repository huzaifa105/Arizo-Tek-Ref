import React, { useState } from 'react';
import {
  ArrowRight,
  Bell,
  Cpu,
  Database,
  Inbox,
  Play,
  RotateCcw,
  Zap,
} from 'lucide-react';
import { HERO_WORKFLOW_STEPS } from '../data/arizotekData';
import { WorkflowStep } from '../types';

const iconMap: Record<WorkflowStep['iconName'], React.FC<{ className?: string }>> = {
  Inbox,
  Cpu,
  Zap,
  Database,
  Bell,
};

export const HeroWorkflowVisual: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleAdvance = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_WORKFLOW_STEPS.length);
  };

  const activeStep = HERO_WORKFLOW_STEPS[activeIndex];

  return (
    <div className="bg-[#FAF8F5] border border-[#E8E1D9] rounded-xl p-5 sm:p-6 shadow-sm">
      {/* Header Row */}
      <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-[#E8E1D9]">
        <div>
          <p className="text-xs font-medium text-[#D66A25]">Illustrative Workflow Demo</p>
          <h2 className="text-base font-bold text-[#402015] tracking-tight">
            Inquiry-to-Follow-Up Automation
          </h2>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={handleAdvance}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#D66A25] hover:bg-[#BD591B] rounded-lg transition-colors whitespace-nowrap"
          >
            <Play className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Step {activeIndex + 1}/5</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveIndex(0)}
            aria-label="Reset workflow preview to step 1"
            title="Reset to Step 1"
            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-[#E8E1D9] bg-white text-[#626262] hover:text-[#402015] hover:border-[#D66A25]/50 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Connected Step Nodes */}
      <div className="space-y-2.5" role="list" aria-label="Automation workflow stages">
        {HERO_WORKFLOW_STEPS.map((step, index) => {
          const IconComponent = iconMap[step.iconName];
          const isActive = index === activeIndex;
          const isCompleted = index < activeIndex;

          return (
            <div key={step.id} role="listitem" className="relative">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`w-full text-left rounded-lg px-4 py-3 border transition-all duration-150 flex items-center justify-between gap-3 ${
                  isActive
                    ? 'bg-white border-[#D66A25] shadow-sm'
                    : isCompleted
                      ? 'bg-white/80 border-[#E9A04A]/60 hover:border-[#D66A25]/60'
                      : 'bg-white/60 border-[#E8E1D9] hover:bg-white hover:border-[#D66A25]/40'
                }`}
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-[#D66A25] text-white'
                        : isCompleted
                          ? 'bg-[#E9A04A]/20 text-[#402015]'
                          : 'bg-[#F4EFE9] text-[#402015]'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 text-xs text-[#626262]">
                      <span className="font-mono tabular-nums font-medium text-[#D66A25]">
                        {step.stepNumber}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="truncate">{step.subtitle}</span>
                    </div>
                    <div className="text-sm font-semibold text-[#402015] truncate">
                      {step.title}
                    </div>
                  </div>
                </div>

                <ArrowRight
                  className={`w-4 h-4 shrink-0 transition-transform duration-150 ${
                    isActive
                      ? 'text-[#D66A25] translate-x-0.5'
                      : 'text-[#626262]/50'
                  }`}
                  aria-hidden="true"
                />
              </button>

              {index < HERO_WORKFLOW_STEPS.length - 1 && (
                <div
                  className="ml-8 h-2.5 w-px bg-[#E9A04A]/60"
                  aria-hidden="true"
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Active Stage Detail Readout */}
      <div className="mt-4 pt-4 border-t border-[#E8E1D9]">
        <div className="flex items-baseline justify-between gap-2 mb-1">
          <span className="text-xs font-semibold text-[#402015]">
            Stage {activeStep.stepNumber}: {activeStep.title}
          </span>
          <span className="text-xs text-[#626262]">Click any stage to inspect</span>
        </div>
        <p className="text-sm text-[#626262] leading-relaxed">
          {activeStep.description}
        </p>
      </div>
    </div>
  );
};
