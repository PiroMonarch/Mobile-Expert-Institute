import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { INSTITUTE_CONFIG } from "../../config/institute";

interface FloatingWhatsAppProps {
  contextPrompt?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  contextPrompt = "Hello Mobile Expert Institute, I have an enquiry regarding services / training at Butler Plaza Bareilly.",
}) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const encodedMessage = encodeURIComponent(contextPrompt);
  const whatsappUrl = `https://wa.me/${INSTITUTE_CONFIG.contact.whatsappNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Speech prompt balloon */}
      {showTooltip && (
        <div className="mb-2 bg-neutral-900 text-white text-xs py-2 px-3.5 rounded-xl shadow-xl border border-neutral-800 flex items-center gap-2 max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-150">
          <span>Chat with Mobile Expert Institute on WhatsApp</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-neutral-400 hover:text-white"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        aria-label="Chat on WhatsApp with Mobile Expert Institute"
      >
        <MessageCircle className="w-5 h-5 fill-current text-white shrink-0 group-hover:scale-110 transition-transform" />
        <span className="hidden sm:inline-block text-xs font-semibold whitespace-nowrap">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};
