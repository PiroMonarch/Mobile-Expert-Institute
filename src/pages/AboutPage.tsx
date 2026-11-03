import React from "react";
import {
  MapPin,
  CheckCircle,
  Microscope,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building,
} from "lucide-react";
import { INSTITUTE_CONFIG } from "../config/institute";
import { VISUAL_ASSETS } from "../config/assets";
import { TechnicalVisual } from "../components/visuals/TechnicalVisual";
import { InstituteGallery } from "../components/visuals/InstituteGallery";
import { BrandLogo } from "../components/common/BrandLogo";

interface AboutPageProps {
  onOpenEnquiry: (initialType?: "training" | "repair" | "lamination" | "general") => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  return (
    <div className="space-y-20 pb-20 text-neutral-100">
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
                <span>Civil Lines Bareilly</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Mobile Repairing Laboratory & Practical Institute
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Located at A-6, Butler Plaza, Civil Lines, Bareilly, Mobile Expert Institute combines hands-on technical training with commercial smartphone hardware diagnostics and device customisation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Our Guiding Approach
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Practical Bench Learning Over Rote Theory
            </h2>
            <div className="space-y-4 text-sm text-neutral-300 leading-relaxed">
              <p>
                Mobile Expert Institute was established to bridge a common gap in electronics education: the lack of physical, hands-on diagnostic experience. Modern smartphone motherboards cannot be understood simply by memorizing schematic diagrams—a technician must feel how solder reflows, observe thermal curves, and learn to handle titanium tweezers steadily under high magnification.
              </p>
              <p>
                Operating directly out of <strong className="text-cyan-400">Butler Plaza in Civil Lines, Bareilly</strong>, our facility serves both real local customers requiring honest device repairs and students seeking practical careers in mobile phone technology.
              </p>
              <p>
                We welcome students from Bareilly and neighboring towns across the region (Chandausi, Jayatipur, Faridpur, Tilhar), providing individualized workbench space and step-by-step guidance tailored to both novices and practicing technicians.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 bg-[#0e111a] rounded-xl border border-neutral-800 space-y-1">
                <span className="font-semibold text-white block">Live Circuit Practice</span>
                <span className="text-neutral-400">Work directly on real multi-layer PCBs, not mock simulators.</span>
              </div>
              <div className="p-3.5 bg-[#0e111a] rounded-xl border border-neutral-800 space-y-1">
                <span className="font-semibold text-white block">Accessible Location</span>
                <span className="text-neutral-400">Convenient transport links at Butler Plaza, Civil Lines.</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <TechnicalVisual asset={VISUAL_ASSETS.heroWorkbench} aspectRatio="4:3" />
          </div>
        </div>
      </section>

      {/* The Laboratory Setup */}
      <section className="bg-[#050608] py-16 text-white border-y border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1 font-semibold">
              Facilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              The Workbench Setup at Butler Plaza
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Our workstations are configured with the real instruments essential to professional micro-soldering and troubleshooting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-[#0e111a] rounded-2xl border border-neutral-800 hover:border-cyan-500/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/60 text-cyan-400 border border-cyan-800/60 flex items-center justify-center">
                <Microscope className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">Stereo Zoom Microscopes</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Optical zoom platforms enabling clear visibility of 0.35mm BGA solder spheres, fractured copper vias, and water corrosion deposits.
              </p>
            </div>

            <div className="p-6 bg-[#0e111a] rounded-2xl border border-neutral-800 hover:border-amber-500/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-950/60 text-amber-400 border border-amber-800/60 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">Digital Thermal Rework</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                PID temperature-regulated hot air and micro-soldering irons to work safely around heat-sensitive power ICs and baseband chips.
              </p>
            </div>

            <div className="p-6 bg-[#0e111a] rounded-2xl border border-neutral-800 hover:border-rose-500/40 transition-colors space-y-3">
              <div className="w-10 h-10 rounded-xl bg-rose-950/60 text-rose-400 border border-rose-800/60 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-white">Computerized Skin Cutting</h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Precision blade plotters loaded with model-specific cut profiles for seamless mobile back wraps and laptop top lids.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real Laboratory & Workshop Photography */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstituteGallery
          title="Inside Mobile Expert Institute, Bareilly"
          subtitle="Genuine glimpses of our live micro-soldering benches, classroom training demonstrations, and custom device lamination workspace at A-6 Butler Plaza."
          showFilter={true}
        />
      </section>

      {/* Honest Commitment */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0e111a] border border-neutral-800 shadow-lg space-y-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white">
            Our Business Principles
          </h3>
          <p className="text-sm text-neutral-300 leading-relaxed max-w-xl mx-auto">
            We do not make unsubstantiated claims or invent inflated statistics. Whether you visit us for a broken charging port or enroll in our training program, you receive straightforward advice, fair pricing, and direct access to instructors and repair technicians.
          </p>
          <div className="pt-2 flex justify-center">
            <button
              onClick={() => onOpenEnquiry("general")}
              className="px-6 py-2.5 text-xs font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:brightness-110 rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.3)] transition-all cursor-pointer"
            >
              Contact Our Institute Directly
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
