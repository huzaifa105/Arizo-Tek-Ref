import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { CONTACT_PLACEHOLDERS } from '../data/arizotekData';
import { ServiceCategory } from '../types';
import { GeometricRidgeDivider } from '../components/GeometricRidgeDivider';

interface ContactPageProps {
  preselectedService?: ServiceCategory;
}

interface FormState {
  fullName: string;
  businessEmail: string;
  companyName: string;
  serviceInterest: ServiceCategory;
  message: string;
}

interface FormErrors {
  fullName?: string;
  businessEmail?: string;
  message?: string;
}

const SERVICE_OPTIONS: ServiceCategory[] = [
  'AI Agents & Chatbots',
  'AI Workflow Automation',
  'Business Process Automation',
  'System Integration',
  'Other',
];

export const ContactPage: React.FC<ContactPageProps> = ({ preselectedService }) => {
  const [formState, setFormState] = useState<FormState>({
    fullName: '',
    businessEmail: '',
    companyName: '',
    serviceInterest: preselectedService || 'AI Workflow Automation',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedData, setSubmittedData] = useState<FormState | null>(null);

  useEffect(() => {
    if (preselectedService) {
      setFormState((prev) => ({
        ...prev,
        serviceInterest: preselectedService,
      }));
    }
  }, [preselectedService]);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!formState.fullName.trim() || formState.fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formState.businessEmail.trim() || !emailPattern.test(formState.businessEmail.trim())) {
      nextErrors.businessEmail = 'Please enter a valid business email address.';
    }
    if (!formState.message.trim() || formState.message.trim().length < 10) {
      nextErrors.message = 'Please share a brief description of your goals (at least 10 characters).';
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmittedData({ ...formState });
    }
  };

  const handleReset = () => {
    setSubmittedData(null);
    setErrors({});
    setFormState({
      fullName: '',
      businessEmail: '',
      companyName: '',
      serviceInterest: preselectedService || 'AI Workflow Automation',
      message: '',
    });
  };

  return (
    <div>
      {/* A. CONTACT HERO */}
      <section className="bg-white pt-12 pb-12 md:pt-16 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold text-[#D66A25]">Contact ArizoTek</p>
            <h1
              className="font-bold text-[#402015] tracking-tight leading-[1.12] text-balance"
              style={{ fontSize: 'clamp(2.25rem, 4vw, 3.25rem)' }}
            >
              Let’s Discuss Your Automation Goals
            </h1>
            <p className="text-base sm:text-lg text-[#626262] leading-relaxed max-w-2xl">
              Whether you want to automate repetitive tasks, improve customer communication, or connect your business systems, we’re ready to explore the possibilities.
            </p>
          </div>
        </div>
      </section>

      <GeometricRidgeDivider topColor="#FFFFFF" bottomColor="#FAF8F5" />

      {/* B. CONTACT INFORMATION & C. CONTACT FORM */}
      <section className="bg-[#FAF8F5] py-14 md:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* B. Contact Information Cards */}
            <div className="lg:col-span-5 space-y-5">
              <div className="space-y-2">
                <h2 className="text-xl font-bold text-[#402015] tracking-tight">
                  Contact Information
                </h2>
                <p className="text-sm text-[#626262] leading-relaxed">
                  The details below are clearly marked placeholders to be updated with final business contact information prior to launch.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white border border-[#E8E1D9] rounded-xl p-5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#FAF8F5] border border-[#E8E1D9] text-[#D66A25] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#626262]">Email</p>
                    <p className="text-sm sm:text-base font-semibold text-[#402015] mt-0.5 break-all">
                      {CONTACT_PLACEHOLDERS.email}
                    </p>
                    <p className="text-xs text-[#626262] mt-1">
                      Editable placeholder for business inquiries.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-[#E8E1D9] rounded-xl p-5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#FAF8F5] border border-[#E8E1D9] text-[#D66A25] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#626262]">Phone</p>
                    <p className="text-sm sm:text-base font-semibold text-[#402015] mt-0.5">
                      {CONTACT_PLACEHOLDERS.phone}
                    </p>
                    <p className="text-xs text-[#626262] mt-1">
                      Editable placeholder for consultation calls.
                    </p>
                  </div>
                </div>

                <div className="bg-white border border-[#E8E1D9] rounded-xl p-5 flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#FAF8F5] border border-[#E8E1D9] text-[#D66A25] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#626262]">
                      Business Location
                    </p>
                    <p className="text-sm sm:text-base font-semibold text-[#402015] mt-0.5">
                      {CONTACT_PLACEHOLDERS.location}
                    </p>
                    <p className="text-xs text-[#626262] mt-1">
                      {CONTACT_PLACEHOLDERS.locationNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* C. Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-[#E8E1D9] rounded-xl p-6 sm:p-10 shadow-xs">
                {submittedData ? (
                  <div className="space-y-6 py-4" role="status" aria-live="polite">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-[#FAF8F5] border border-[#D66A25]/40 text-[#D66A25] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[#402015] tracking-tight">
                          Inquiry Preview Submitted
                        </h2>
                        <p className="text-sm text-[#626262] mt-1 leading-relaxed">
                          Thank you, {submittedData.fullName}. Your form input passed validation in this demo prototype. Live email submission will be connected during the WordPress build.
                        </p>
                      </div>
                    </div>

                    <div className="bg-[#FAF8F5] border border-[#E8E1D9] rounded-lg p-5 space-y-2.5 text-sm">
                      <div className="flex flex-wrap justify-between gap-2">
                        <span className="text-[#626262]">Business Email</span>
                        <span className="font-medium text-[#402015]">
                          {submittedData.businessEmail}
                        </span>
                      </div>
                      {submittedData.companyName && (
                        <div className="flex flex-wrap justify-between gap-2">
                          <span className="text-[#626262]">Company Name</span>
                          <span className="font-medium text-[#402015]">
                            {submittedData.companyName}
                          </span>
                        </div>
                      )}
                      <div className="flex flex-wrap justify-between gap-2">
                        <span className="text-[#626262]">Service of Interest</span>
                        <span className="font-semibold text-[#D66A25]">
                          {submittedData.serviceInterest}
                        </span>
                      </div>
                      <div className="pt-2 border-t border-[#E8E1D9]">
                        <span className="text-[#626262] block mb-1">Project Details</span>
                        <p className="text-[#402015] leading-relaxed">
                          {submittedData.message}
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center justify-center px-5 py-3 text-sm font-semibold text-white bg-[#402015] hover:bg-[#2F160E] rounded-lg transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="pb-2 border-b border-[#E8E1D9]">
                      <h2 className="text-xl font-bold text-[#402015] tracking-tight">
                        Request a Consultation
                      </h2>
                      <p className="text-sm text-[#626262] mt-1">
                        Tell us about the workflows or manual tasks you would like to streamline.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="fullName"
                          className="block text-sm font-semibold text-[#402015] mb-1.5"
                        >
                          Full Name <span className="text-[#D66A25]">*</span>
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={formState.fullName}
                          onChange={(e) => {
                            setFormState({ ...formState, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          placeholder="Jane Doe"
                          aria-invalid={Boolean(errors.fullName)}
                          className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-[#402015] placeholder:text-[#626262]/60 transition-colors ${
                            errors.fullName
                              ? 'border-red-600'
                              : 'border-[#E8E1D9] focus:border-[#D66A25]'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          htmlFor="businessEmail"
                          className="block text-sm font-semibold text-[#402015] mb-1.5"
                        >
                          Business Email <span className="text-[#D66A25]">*</span>
                        </label>
                        <input
                          id="businessEmail"
                          name="businessEmail"
                          type="email"
                          required
                          value={formState.businessEmail}
                          onChange={(e) => {
                            setFormState({ ...formState, businessEmail: e.target.value });
                            if (errors.businessEmail) {
                              setErrors({ ...errors, businessEmail: undefined });
                            }
                          }}
                          placeholder="jane@company.com"
                          aria-invalid={Boolean(errors.businessEmail)}
                          className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-[#402015] placeholder:text-[#626262]/60 transition-colors ${
                            errors.businessEmail
                              ? 'border-red-600'
                              : 'border-[#E8E1D9] focus:border-[#D66A25]'
                          }`}
                        />
                        {errors.businessEmail && (
                          <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1.5">
                            <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                            <span>{errors.businessEmail}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="companyName"
                          className="block text-sm font-semibold text-[#402015] mb-1.5"
                        >
                          Company Name
                        </label>
                        <input
                          id="companyName"
                          name="companyName"
                          type="text"
                          value={formState.companyName}
                          onChange={(e) =>
                            setFormState({ ...formState, companyName: e.target.value })
                          }
                          placeholder="Your Company LLC"
                          className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E8E1D9] focus:border-[#D66A25] bg-white text-[#402015] placeholder:text-[#626262]/60 transition-colors"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="serviceInterest"
                          className="block text-sm font-semibold text-[#402015] mb-1.5"
                        >
                          Service of Interest
                        </label>
                        <select
                          id="serviceInterest"
                          name="serviceInterest"
                          value={formState.serviceInterest}
                          onChange={(e) =>
                            setFormState({
                              ...formState,
                              serviceInterest: e.target.value as ServiceCategory,
                            })
                          }
                          className="w-full px-4 py-2.5 text-sm rounded-lg border border-[#E8E1D9] focus:border-[#D66A25] bg-white text-[#402015] transition-colors"
                        >
                          {SERVICE_OPTIONS.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-[#402015] mb-1.5"
                      >
                        Message / Project Details <span className="text-[#D66A25]">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) => {
                          setFormState({ ...formState, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: undefined });
                        }}
                        placeholder="Briefly describe the repetitive tasks, systems, or customer inquiries you would like to automate..."
                        aria-invalid={Boolean(errors.message)}
                        className={`w-full px-4 py-2.5 text-sm rounded-lg border bg-white text-[#402015] placeholder:text-[#626262]/60 transition-colors ${
                          errors.message
                            ? 'border-red-600'
                            : 'border-[#E8E1D9] focus:border-[#D66A25]'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-red-700 flex items-center gap-1.5">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#D66A25] hover:bg-[#BD591B] rounded-lg transition-colors whitespace-nowrap"
                      >
                        <Send className="w-4 h-4" aria-hidden="true" />
                        <span>Send Inquiry</span>
                      </button>
                    </div>

                    <p className="text-xs text-[#626262] pt-2 border-t border-[#E8E1D9]">
                      Demo Website Notice: This contact form demonstrates client-side UI and input validation. Final email delivery will be configured during the WordPress implementation.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
