import React, { useState } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { INSTITUTE_CONFIG } from "../../config/institute";
import { BrandLogo } from "../common/BrandLogo";

export type PageId = "home" | "training" | "services" | "lamination" | "about" | "contact";

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (initialType?: "training" | "repair" | "lamination") => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string }[] = [
    { id: "home", label: "Home" },
    { id: "training", label: "Training" },
    { id: "services", label: "Repair Services" },
    { id: "lamination", label: "Lamination & Skins" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleLinkClick = (id: PageId) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-40 bg-[#07080b]/92 backdrop-blur-md border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strictly 3 Zones separated by gap-8 */}
        <div className="flex items-center justify-between gap-6 h-18">
          {/* Zone 1: Official Brand Logo with neon glow */}
          <button
            onClick={() => handleLinkClick("home")}
            className="flex items-center text-left focus:outline-none group shrink-0 cursor-pointer"
            aria-label="Mobile Expert Institute Home"
          >
            <BrandLogo variant="full" size="md" glow={true} />
          </button>

          {/* Zone 2: 4-5 concise navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative py-2 transition-colors whitespace-nowrap shrink-0 focus:outline-none cursor-pointer ${
                    isActive
                      ? "text-cyan-400 font-semibold"
                      : "text-neutral-400 hover:text-neutral-100"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action + Call Affordance */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${INSTITUTE_CONFIG.contact.phonePlaceholder}`}
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono text-neutral-300 hover:text-amber-400 transition-colors whitespace-nowrap"
              title="Call Institute"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{INSTITUTE_CONFIG.contact.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:brightness-110 active:brightness-95 rounded-lg transition-all shadow-[0_0_16px_rgba(0,229,255,0.25)] whitespace-nowrap shrink-0 cursor-pointer focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:outline-none"
            >
              <span>Enquire Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-neutral-950" />
            </button>
          </div>

          {/* Mobile hamburger toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex sm:hidden items-center justify-center px-3 py-1.5 text-xs font-bold text-neutral-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 whitespace-nowrap cursor-pointer"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800/80 focus:outline-none cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-800 bg-[#0a0c12]/98 px-4 pt-3 pb-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium text-left transition-colors cursor-pointer ${
                    isActive
                      ? "bg-cyan-950/40 text-cyan-400 border border-cyan-800/60 font-semibold"
                      : "text-neutral-300 hover:bg-neutral-900 hover:text-white"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_6px_rgba(0,229,255,0.9)]" />}
                </button>
              );
            })}
          </div>

          <div className="mt-5 pt-4 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href={`tel:${INSTITUTE_CONFIG.contact.phonePlaceholder}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-mono text-neutral-200 bg-neutral-900 border border-neutral-800 rounded-lg hover:border-amber-500/50"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call: {INSTITUTE_CONFIG.contact.phoneDisplay}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full py-2.5 text-xs font-bold text-neutral-950 bg-cyan-400 rounded-lg hover:bg-cyan-300 text-center shadow-[0_0_15px_rgba(0,229,255,0.3)] cursor-pointer"
            >
              Send Direct Enquiry
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
