import React from "react";
import { X, MapPin, CheckCircle2, PhoneCall, ArrowRight } from "lucide-react";
import { InstituteRealPhoto } from "../../config/assets";
import { INSTITUTE_CONFIG } from "../../config/institute";

interface PhotoLightboxModalProps {
  photo: InstituteRealPhoto | null;
  onClose: () => void;
  onEnquire?: (type: "training" | "repair" | "lamination", detail: string) => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({
  photo,
  onClose,
  onEnquire,
}) => {
  if (!photo) return null;

  const handleEnquiry = () => {
    onClose();
    if (onEnquire) {
      const type =
        photo.category === "Custom Lamination"
          ? "lamination"
          : photo.category === "Repair Bench" || photo.category === "Instruments Setup"
          ? "repair"
          : "training";
      onEnquire(type, `Photo reference: ${photo.title} (${photo.tag})`);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#0e111a] border border-cyan-500/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] text-neutral-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#07080b] border-b border-neutral-800 text-white">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
              {photo.tag}
            </span>
            <span className="text-xs text-neutral-400 hidden sm:inline font-mono">
              {photo.location}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Main Photo Display */}
          <div className="relative bg-black flex items-center justify-center max-h-[58vh] overflow-hidden">
            <img
              src={photo.url}
              alt={photo.title}
              className="max-h-[58vh] w-auto max-w-full object-contain mx-auto"
            />
          </div>

          {/* Details Section */}
          <div className="p-5 sm:p-6 bg-[#0e111a] text-white space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {photo.title}
                </h3>
                <div className="flex items-center gap-2 text-xs text-neutral-400 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{photo.location}</span>
                  <span>·</span>
                  <span className="text-neutral-500">{photo.category}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleEnquiry}
                  className="px-4 py-2 text-xs font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:brightness-110 rounded-xl transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,229,255,0.3)] cursor-pointer"
                >
                  <span>Enquire About This</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-950" />
                </button>
                <a
                  href={`tel:${INSTITUTE_CONFIG.contact.phonePlaceholder}`}
                  className="px-3 py-2 text-xs font-mono text-neutral-300 hover:text-amber-400 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-colors flex items-center gap-1"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Call Shop</span>
                </a>
              </div>
            </div>

            <p className="text-sm text-neutral-300 leading-relaxed">
              {photo.description}
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-800/80">
              {photo.features.map((feature, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-xs text-neutral-300 bg-neutral-900 px-2.5 py-1 rounded-lg border border-neutral-800"
                >
                  <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  <span>{feature}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
