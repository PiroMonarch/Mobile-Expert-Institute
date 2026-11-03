import React, { useState } from "react";
import {
  Wrench,
  Smartphone,
  BatteryCharging,
  Zap,
  Activity,
  AlertTriangle,
  Clock,
  ArrowRight,
  ShieldCheck,
  CheckCircle,
  HelpCircle,
  MapPin,
} from "lucide-react";
import { REPAIR_SERVICES, RepairService } from "../data/services";
import { VISUAL_ASSETS } from "../config/assets";
import { TechnicalVisual } from "../components/visuals/TechnicalVisual";
import { BrandLogo } from "../components/common/BrandLogo";
import { INSTITUTE_CONFIG } from "../config/institute";

interface ServicesPageProps {
  onOpenEnquiry: (initialType?: "training" | "repair" | "lamination", detail?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenEnquiry }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(REPAIR_SERVICES[0].id);

  const selectedService =
    REPAIR_SERVICES.find((s) => s.id === selectedServiceId) || REPAIR_SERVICES[0];

  return (
    <div className="space-y-20 pb-20 text-neutral-100">
      {/* Header Banner */}
      <section className="bg-[#07080b] text-white pt-12 pb-16 border-b border-neutral-800/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

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
              Mobile Repairing Services
            </h1>
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Precision diagnostics and hardware repairs for all major smartphone brands. From screen replacement and charging port fixes to microscopic motherboard short-circuit troubleshooting.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenEnquiry("repair", "General Mobile Repair Assessment")}
                className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 rounded-xl transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(255,183,3,0.3)] cursor-pointer"
              >
                <Wrench className="w-3.5 h-3.5 text-neutral-950" />
                <span>Enquire About Your Device</span>
              </button>
              <a
                href={`tel:${INSTITUTE_CONFIG.contact.phonePlaceholder}`}
                className="px-4 py-2.5 text-xs font-mono text-neutral-300 hover:text-cyan-400 bg-neutral-900 border border-neutral-800 rounded-xl transition-colors"
              >
                Call Lab: {INSTITUTE_CONFIG.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Transparency Policy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 bg-[#0e111a] rounded-2xl border border-neutral-800 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-white">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Transparent Repair Diagnostics</span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-2xl">
              We test device current consumption, diode drops, and component voltages before proposing repairs. If a dead motherboard cannot be restored safely and cost-effectively, we explain the diagnosis clearly without surprise fees.
            </p>
          </div>
          <div className="shrink-0 text-xs font-mono text-cyan-400 bg-cyan-950/40 px-3 py-1.5 rounded-lg border border-cyan-800/40">
            A-6 BUTLER PLAZA BAREILLY
          </div>
        </div>
      </section>

      {/* Interactive Service Catalog Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1 font-semibold">
            Repair Categories
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Select an Issue to View Diagnostic Scope
          </h2>
          <p className="text-sm text-neutral-400 mt-1">
            Explore our specialized workflows for hardware repairs.
          </p>
        </div>

        {/* Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Category Selector Buttons (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {REPAIR_SERVICES.map((service) => {
              const isSelected = selectedServiceId === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setSelectedServiceId(service.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start justify-between gap-3 cursor-pointer ${
                    isSelected
                      ? "bg-gradient-to-r from-neutral-900 to-[#121622] border-cyan-400/80 text-white shadow-[0_0_15px_rgba(0,229,255,0.2)]"
                      : "bg-[#0e111a] border-neutral-800 text-neutral-300 hover:border-neutral-700 hover:bg-neutral-900"
                  }`}
                >
                  <div className="space-y-1">
                    <div className="text-sm font-semibold flex items-center gap-2">
                      <span>{service.title}</span>
                      {service.isConfirmedByLab && (
                        <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${isSelected ? "bg-cyan-950 text-cyan-400 border border-cyan-800" : "bg-neutral-800 text-neutral-400"}`}>
                          ACTIVE
                        </span>
                      )}
                    </div>
                    <p className={`text-xs line-clamp-1 ${isSelected ? "text-neutral-300" : "text-neutral-500"}`}>
                      {service.shortDescription}
                    </p>
                  </div>
                  <ArrowRight className={`w-4 h-4 shrink-0 mt-1 transition-transform ${isSelected ? "text-cyan-400 translate-x-1" : "text-neutral-500"}`} />
                </button>
              );
            })}
          </div>

          {/* Right Column: In-Depth Service Detail Card (7 cols) */}
          <div className="lg:col-span-7 bg-[#0e111a] rounded-2xl border border-neutral-800 p-6 sm:p-8 shadow-md space-y-6">
            <div className="space-y-2 border-b border-neutral-800/80 pb-5">
              <div className="flex items-center justify-between text-xs font-mono text-cyan-400">
                <span>DIAGNOSTIC WORKFLOW</span>
                <span>BAREILLY BENCH</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {selectedService.title}
              </h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {selectedService.shortDescription}
              </p>
            </div>

            {/* Scope of Repair */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
                Technical Scope & Methods:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedService.detailedScope.map((scope, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{scope}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Common Symptoms Checked */}
            <div className="space-y-2.5 pt-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
                Common Symptoms Associated With This Fault:
              </h4>
              <ul className="space-y-1.5 text-xs text-neutral-400">
                {selectedService.commonSymptoms.map((sym, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400">•</span>
                    <span>{sym}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Turnaround & Pricing Transparency Note */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-neutral-800/80 text-xs">
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Turnaround Time:</span>
                </div>
                <div className="text-neutral-400 mt-1">{selectedService.turnaroundEstimate}</div>
              </div>

              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="font-semibold text-white flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-amber-400" />
                  <span>Pricing Structure:</span>
                </div>
                <div className="text-neutral-400 mt-1">{selectedService.pricingStatus}</div>
              </div>
            </div>

            {selectedService.cautionNotice && (
              <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-800/60 text-xs text-amber-300 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p>{selectedService.cautionNotice}</p>
              </div>
            )}

            {/* Action CTA for this service */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onOpenEnquiry("repair", `Specific Service Enquiry: ${selectedService.title}`)}
                className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-[0_0_12px_rgba(255,183,3,0.3)]"
              >
                <span>Enquire For This Repair</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-950" />
              </button>
              <a
                href={INSTITUTE_CONFIG.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-xl transition-colors"
              >
                Bring Device to Butler Plaza
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Diagnostics Lab Showcase */}
      <section className="bg-[#050608] py-16 text-white border-t border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1 font-semibold">
              Inspection Gear
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Diagnostics Bench In Action
            </h2>
            <p className="text-sm text-neutral-400 mt-2">
              Every phone checked at our Butler Plaza workshop undergoes precise electrical verification before any chip or screen is swapped.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <TechnicalVisual asset={VISUAL_ASSETS.diagnosticsWorkbench} aspectRatio="16:9" />
              <h4 className="text-sm font-semibold text-white">DC Power Sequence & Diode Probing</h4>
              <p className="text-xs text-neutral-400">
                Checking power rails for short circuits against ground using high-impedance digital multimeters.
              </p>
            </div>
            <div className="space-y-3">
              <TechnicalVisual asset={VISUAL_ASSETS.heroWorkbench} aspectRatio="16:9" />
              <h4 className="text-sm font-semibold text-white">Optical Microscope Logic Inspection</h4>
              <p className="text-xs text-neutral-400">
                Inspecting hairline cracks, water corrosion traces, and damaged solder joints at up to 45X optical magnification.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
