import React, { useState } from "react";
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Navigation,
  ExternalLink,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Building,
  Bus,
} from "lucide-react";
import { INSTITUTE_CONFIG } from "../config/institute";
import {
  EnquiryFormData,
  EnquiryType,
  validateEnquiryForm,
  buildWhatsAppEnquiryUrl,
} from "../utils/enquiry";
import { BrandLogo } from "../components/common/BrandLogo";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    phone: "",
    enquiryType: "training",
    deviceOrCourseDetail: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<EnquiryFormData | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateEnquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    setErrors({});
    setSubmittedData({ ...formData });
  };

  const handleCopy = () => {
    if (!submittedData) return;
    const text = `Mobile Expert Institute Enquiry\nName: ${submittedData.name}\nPhone: ${submittedData.phone}\nType: ${submittedData.enquiryType}\nDetails: ${submittedData.deviceOrCourseDetail || "None"}\nMessage: ${submittedData.message || "None"}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsAppUrl = submittedData
    ? buildWhatsAppEnquiryUrl(submittedData, INSTITUTE_CONFIG.contact.whatsappNumber)
    : "";

  return (
    <div className="space-y-16 pb-20 text-neutral-100">
      {/* Header Banner */}
      <section className="bg-[#07080b] text-white pt-12 pb-16 border-b border-neutral-800/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <BrandLogo variant="badge" />
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Butler Plaza Bareilly</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Connect With Mobile Expert Institute
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Located at Butler Plaza in the heart of Civil Lines, Bareilly. Reach out for training batch schedules, device repair assessments, or custom lamination queries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Address Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Enquiry Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#0e111a] rounded-2xl border border-neutral-800 p-6 sm:p-8 shadow-md">
            <div className="border-b border-neutral-800/80 pb-5 mb-6">
              <h2 className="text-xl font-bold text-white">
                {submittedData ? "Enquiry Summary & Dispatch" : "Send an Enquiry to Our Team"}
              </h2>
              <p className="text-xs text-neutral-400 mt-1">
                Fill in your details below. Once verified, you can immediately send the enquiry via WhatsApp or copy it.
              </p>
            </div>

            {!submittedData ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Enquiry Type Selector */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                    Enquiry Category <span className="text-red-400">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "training", label: "Training Course" },
                      { id: "repair", label: "Device Repair" },
                      { id: "lamination", label: "Lamination / Skins" },
                    ].map((tab) => (
                      <button
                        type="button"
                        key={tab.id}
                        onClick={() =>
                          setFormData({ ...formData, enquiryType: tab.id as EnquiryType })
                        }
                        className={`py-2 px-2.5 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
                          formData.enquiryType === tab.id
                            ? "bg-gradient-to-r from-cyan-400 to-teal-400 border-cyan-400 text-neutral-950 font-bold shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                            : "bg-neutral-900 border-neutral-800 text-neutral-300 hover:border-neutral-700"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-medium text-neutral-300 mb-1">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Mohd Tohid / Anuj Yadav"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-3.5 py-2.5 text-sm rounded-xl bg-neutral-900 text-white border transition-colors focus:outline-none focus:ring-2 ${
                      errors.name
                        ? "border-red-500 focus:ring-red-400"
                        : "border-neutral-700 focus:border-cyan-400 focus:ring-cyan-500/20"
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>

                {/* Mobile Phone */}
                <div>
                  <label htmlFor="contact-phone" className="block text-xs font-medium text-neutral-300 mb-1">
                    Mobile Number (WhatsApp) <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-2.5 text-xs text-neutral-500 font-mono">
                      +91
                    </span>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-12 pr-3.5 py-2.5 text-sm rounded-xl bg-neutral-900 text-white border font-mono transition-colors focus:outline-none focus:ring-2 ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-400"
                          : "border-neutral-700 focus:border-cyan-400 focus:ring-cyan-500/20"
                      }`}
                    />
                  </div>
                  {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                </div>

                {/* Context Detail */}
                <div>
                  <label htmlFor="contact-detail" className="block text-xs font-medium text-neutral-300 mb-1">
                    {formData.enquiryType === "training"
                      ? "Your City / Town (e.g. Bareilly, Chandausi, Faridpur, Tilhar)"
                      : formData.enquiryType === "repair"
                      ? "Phone Model & Reported Fault"
                      : "Device Model for Skin / Lamination"}
                  </label>
                  <input
                    id="contact-detail"
                    type="text"
                    placeholder="Provide specific model or city"
                    value={formData.deviceOrCourseDetail || ""}
                    onChange={(e) =>
                      setFormData({ ...formData, deviceOrCourseDetail: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-neutral-900 text-white border border-neutral-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-msg" className="block text-xs font-medium text-neutral-300 mb-1">
                    Additional Message or Queries
                  </label>
                  <textarea
                    id="contact-msg"
                    rows={3}
                    placeholder="Ask about batch timings, screen repair cost estimate, or visiting hours..."
                    value={formData.message || ""}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-neutral-900 text-white border border-neutral-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-gradient-to-r from-cyan-400 to-teal-400 hover:brightness-110 text-neutral-950 font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-neutral-950" />
                    <span>Submit Enquiry & Generate WhatsApp Link</span>
                  </button>
                </div>
              </form>
            ) : (
              /* Verified Submission Screen */
              <div className="space-y-5">
                <div className="p-4 bg-emerald-950/40 border border-emerald-800/60 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-emerald-300">
                      Enquiry Verified
                    </h4>
                    <p className="text-xs text-neutral-300 mt-0.5">
                      Your details are ready. Click below to launch WhatsApp with your prefilled enquiry, or copy details to clipboard.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-neutral-900/90 rounded-xl border border-neutral-800 space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-neutral-800">
                    <span className="text-neutral-500">Name:</span>
                    <span className="text-white font-semibold">{submittedData.name}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-800">
                    <span className="text-neutral-500">Phone:</span>
                    <span className="text-white font-semibold">{submittedData.phone}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-neutral-800">
                    <span className="text-neutral-500">Category:</span>
                    <span className="text-cyan-400 font-semibold uppercase">{submittedData.enquiryType}</span>
                  </div>
                  {submittedData.deviceOrCourseDetail && (
                    <div className="flex justify-between py-1 border-b border-neutral-800">
                      <span className="text-neutral-500">Detail:</span>
                      <span className="text-white">{submittedData.deviceOrCourseDetail}</span>
                    </div>
                  )}
                  {submittedData.message && (
                    <div className="py-1">
                      <span className="text-neutral-500 block mb-0.5">Message:</span>
                      <span className="text-neutral-300 italic">"{submittedData.message}"</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2.5">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Message via WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopy}
                    className="w-full py-2.5 px-3 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copied ? "Copied to Clipboard!" : "Copy Details"}</span>
                  </button>
                </div>

                <div className="pt-2 text-right">
                  <button
                    onClick={() => setSubmittedData(null)}
                    className="text-xs text-cyan-400 hover:underline font-medium cursor-pointer"
                  >
                    ← Submit another enquiry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Contact Coordinates & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Address & Quick Contacts */}
            <div className="p-6 sm:p-8 bg-[#0e111a] text-white rounded-2xl border border-neutral-800 space-y-6 shadow-md">
              <div className="space-y-1">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                  Headquarters & Lab
                </div>
                <h3 className="text-lg font-bold text-white">
                  Mobile Expert Institute
                </h3>
              </div>

              <div className="space-y-4 text-xs text-neutral-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Physical Address:</span>
                    <p className="mt-0.5 leading-relaxed text-neutral-400">
                      {INSTITUTE_CONFIG.address.fullFormatted}
                    </p>
                    <p className="mt-1 text-neutral-500 font-mono">
                      Landmark: {INSTITUTE_CONFIG.address.landmark}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Direct Telephone:</span>
                    <a
                      href={`tel:${INSTITUTE_CONFIG.contact.phonePlaceholder}`}
                      className="mt-0.5 text-neutral-200 hover:text-amber-400 font-mono block transition-colors"
                    >
                      {INSTITUTE_CONFIG.contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">WhatsApp Channel:</span>
                    <a
                      href={`https://wa.me/${INSTITUTE_CONFIG.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-0.5 text-emerald-400 hover:underline font-mono block"
                    >
                      {INSTITUTE_CONFIG.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Laboratory Hours:</span>
                    <p className="mt-0.5 text-neutral-400">
                      {INSTITUTE_CONFIG.timings.days}
                    </p>
                    <p className="text-white font-mono">
                      {INSTITUTE_CONFIG.timings.hours}
                    </p>
                    <p className="mt-1 text-[11px] text-neutral-500">
                      {INSTITUTE_CONFIG.timings.note}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-neutral-800">
                <a
                  href={INSTITUTE_CONFIG.googleMaps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Regional Transport Guide */}
            <div className="p-6 bg-[#0e111a] rounded-2xl border border-neutral-800 space-y-4 shadow-md">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <Bus className="w-4 h-4 text-cyan-400" />
                <span>Regional Student Commute Guide</span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Butler Plaza in Civil Lines is centrally situated with regular auto and city bus connections:
              </p>
              <div className="space-y-2 text-xs">
                {INSTITUTE_CONFIG.travelHubs.map((hub) => (
                  <div key={hub.city} className="p-2.5 rounded-xl bg-neutral-900/90 border border-neutral-800 flex items-center justify-between">
                    <div>
                      <span className="font-semibold text-white">{hub.city}</span>
                      <span className="text-[11px] text-neutral-400 block">{hub.routeNote}</span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/50">
                      {hub.distanceApprox}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Google Maps Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <h3 className="text-base font-bold text-white">
              Interactive Map Location
            </h3>
            <p className="text-xs text-neutral-400">
              Butler Plaza, Civil Lines, Bareilly, Uttar Pradesh – 243001
            </p>
          </div>
          <a
            href={INSTITUTE_CONFIG.googleMaps.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-cyan-400 hover:underline flex items-center gap-1"
          >
            <span>Open Full Screen Map</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 h-[380px]">
          <iframe
            title="Google Maps Location - Mobile Expert Institute, Butler Plaza, Bareilly"
            src={INSTITUTE_CONFIG.googleMaps.embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </div>
  );
};
