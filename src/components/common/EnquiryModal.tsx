import React, { useState, useEffect } from "react";
import { X, CheckCircle2, MessageSquare, Send, Copy, Check, ArrowRight, ShieldAlert } from "lucide-react";
import { INSTITUTE_CONFIG } from "../../config/institute";
import {
  EnquiryFormData,
  EnquiryType,
  validateEnquiryForm,
  buildWhatsAppEnquiryUrl,
} from "../../utils/enquiry";
import { BrandLogo } from "./BrandLogo";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: EnquiryType;
  initialDetail?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  initialType = "general",
  initialDetail = "",
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    name: "",
    phone: "",
    enquiryType: initialType,
    deviceOrCourseDetail: initialDetail,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<EnquiryFormData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        enquiryType: initialType,
        deviceOrCourseDetail: initialDetail || prev.deviceOrCourseDetail,
      }));
      setSubmittedData(null);
      setErrors({});
    }
  }, [isOpen, initialType, initialDetail]);

  if (!isOpen) return null;

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
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-lg bg-[#0e111a] rounded-2xl shadow-2xl border border-cyan-500/30 overflow-hidden text-neutral-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#08090f] border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <BrandLogo variant="icon" size="sm" glow={true} />
            <div>
              <h3 id="enquiry-modal-title" className="text-base font-bold tracking-tight text-white">
                {submittedData ? "Enquiry Ready for Dispatch" : "Send Institute Enquiry"}
              </h3>
              <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                A-6 Butler Plaza, Civil Lines, Bareilly
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {!submittedData ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Category tabs */}
              <div>
                <label className="block text-xs font-semibold text-neutral-300 uppercase tracking-wider mb-2">
                  Enquiry Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "training", label: "Training Course" },
                    { id: "repair", label: "Repair Service" },
                    { id: "lamination", label: "Lamination / Skins" },
                  ].map((tab) => (
                    <button
                      type="button"
                      key={tab.id}
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          enquiryType: tab.id as EnquiryType,
                        }))
                      }
                      className={`py-2 px-2 text-xs font-medium rounded-xl border text-center transition-all cursor-pointer ${
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

              {/* Full Name */}
              <div>
                <label htmlFor="user-name" className="block text-xs font-medium text-neutral-300 mb-1">
                  Full Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="user-name"
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

              {/* Phone number */}
              <div>
                <label htmlFor="user-phone" className="block text-xs font-medium text-neutral-300 mb-1">
                  Mobile Number (WhatsApp) <span className="text-red-400">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-neutral-500 font-mono">
                    +91
                  </span>
                  <input
                    id="user-phone"
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

              {/* Contextual detail (model, batch, design) */}
              <div>
                <label htmlFor="user-detail" className="block text-xs font-medium text-neutral-300 mb-1">
                  {formData.enquiryType === "training"
                    ? "Preferred Batch / City (e.g. Bareilly / Chandausi / Tilhar)"
                    : formData.enquiryType === "repair"
                    ? "Device Model & Issue (e.g. Redmi Note 12 - Dead Phone)"
                    : "Device & Skin Texture (e.g. iPhone 15 Matte Black / Laptop Skin)"}
                </label>
                <input
                  id="user-detail"
                  type="text"
                  placeholder="Optional specific detail"
                  value={formData.deviceOrCourseDetail || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, deviceOrCourseDetail: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-neutral-900 text-white border border-neutral-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="user-message" className="block text-xs font-medium text-neutral-300 mb-1">
                  Message / Question (Optional)
                </label>
                <textarea
                  id="user-message"
                  rows={3}
                  placeholder="Write any questions regarding fees, repair timing, or cutouts..."
                  value={formData.message || ""}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-neutral-900 text-white border border-neutral-700 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-cyan-400 to-teal-400 hover:brightness-110 text-neutral-950 font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-neutral-950" />
                  <span>Generate Enquiry & Open WhatsApp</span>
                </button>
              </div>
            </form>
          ) : (
            /* Submission & Direct Dispatch Screen */
            <div className="space-y-5">
              <div className="flex items-center gap-3 p-3.5 bg-emerald-950/40 border border-emerald-800/60 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-emerald-300">
                    Enquiry Details Formatted
                  </h4>
                  <p className="text-xs text-neutral-300 mt-0.5">
                    Your details are verified and packaged for direct WhatsApp dispatch to the institute.
                  </p>
                </div>
              </div>

              {/* Summary review box */}
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
                  <span className="text-neutral-500">Enquiry Category:</span>
                  <span className="text-cyan-400 font-semibold uppercase">{submittedData.enquiryType}</span>
                </div>
                {submittedData.deviceOrCourseDetail && (
                  <div className="flex justify-between py-1 border-b border-neutral-800">
                    <span className="text-neutral-500">Details:</span>
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

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5">
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all flex items-center justify-center gap-2 text-center cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send to Institute WhatsApp Now</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="w-full py-2.5 px-3 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? "Enquiry Copied to Clipboard!" : "Copy Details to Clipboard"}</span>
                </button>
              </div>

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={() => setSubmittedData(null)}
                  className="text-xs text-cyan-400 hover:underline font-medium cursor-pointer"
                >
                  ← Edit details or submit another enquiry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
