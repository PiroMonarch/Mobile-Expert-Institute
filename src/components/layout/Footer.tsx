import React from "react";
import { MapPin, Phone, Mail, Navigation, ExternalLink, ShieldCheck } from "lucide-react";
import { INSTITUTE_CONFIG } from "../../config/institute";
import { PageId } from "./Navbar";
import { BrandLogo } from "../common/BrandLogo";

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (initialType?: "training" | "repair" | "lamination" | "general") => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050608] text-neutral-400 border-t border-neutral-800/80 relative overflow-hidden">
      {/* Ambient background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Upper Footer: Address & Hubs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Col 1: Institute Brand & Core Mission (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <BrandLogo variant="full" size="lg" glow={true} />
            
            <p className="text-sm text-neutral-400 leading-relaxed max-w-md pt-2">
              Specialized mobile phone repairing laboratory and practical electronics training institute.
              Providing hands-on bench experience with SMD rework, logic board diagnostics, CPU reballing,
              and precision device lamination at Butler Plaza, Bareilly.
            </p>

            <div className="pt-2 flex items-start gap-2.5 text-xs text-neutral-300">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-neutral-100 font-medium">{INSTITUTE_CONFIG.address.shopNo}, {INSTITUTE_CONFIG.address.complex}</p>
                <p className="text-neutral-400">{INSTITUTE_CONFIG.address.area}, {INSTITUTE_CONFIG.address.city}, {INSTITUTE_CONFIG.address.state} – {INSTITUTE_CONFIG.address.pincode}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={INSTITUTE_CONFIG.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-200 bg-neutral-900/90 border border-neutral-700/80 rounded-md hover:border-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5 text-cyan-400" />
                <span>Get Directions (Butler Plaza)</span>
              </a>
              <a
                href={INSTITUTE_CONFIG.googleMaps.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-300 hover:text-white transition-colors"
              >
                <span>Read Google Reviews</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">Sections</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => { onNavigate("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("training"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Practical Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("services"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Repair Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("lamination"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Lamination & Skins
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("about"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  About Our Lab
                </button>
              </li>
              <li>
                <button
                  onClick={() => { onNavigate("contact"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  className="hover:text-cyan-300 transition-colors text-left cursor-pointer"
                >
                  Contact & Visiting
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Practical Specializations (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">Technical Focus</h4>
            <ul className="space-y-1.5 text-xs text-neutral-400">
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>CPU MEDIATECH (MTK)</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>eMMC IC Programming</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>MC75T Microscope Bench</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>MI 5A Mother Board Rework</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>SMD Micro-Soldering</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>DC Power Diagnostics</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-cyan-400" />
                <span>3D & Anime Device Skins</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Regional Student Connectivity (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-rose-400 font-semibold">Regional Students</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              We regularly train students travelling from across Rohilkhand with direct bus and rail connectivity to Butler Plaza:
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {INSTITUTE_CONFIG.travelHubs.map((hub) => (
                <div key={hub.city} className="p-2 rounded bg-neutral-900/90 border border-neutral-800 hover:border-cyan-500/40 transition-colors">
                  <div className="font-semibold text-neutral-200">{hub.city}</div>
                  <div className="text-[11px] text-neutral-500">{hub.distanceApprox}</div>
                </div>
              ))}
            </div>
            <div className="pt-2">
              <button
                onClick={() => onOpenEnquiry("training")}
                className="w-full py-2 px-3 text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 rounded-md transition-all cursor-pointer shadow-[0_0_12px_rgba(255,183,3,0.3)]"
              >
                Inquire for Next Batch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & Verified Notice */}
      <div className="border-t border-neutral-900 bg-[#030406] py-6 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-neutral-400">Mobile Expert Institute · Civil Lines, Bareilly, UP</span>
          </div>
          <div>
            <span>© {currentYear} Mobile Expert Institute. All verified laboratory rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
