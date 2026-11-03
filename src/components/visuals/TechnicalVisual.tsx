import React, { useState } from "react";
import { VisualAsset } from "../../config/assets";

interface TechnicalVisualProps {
  asset: VisualAsset;
  aspectRatio?: "16:9" | "4:3" | "1:1";
  className?: string;
  showOverlayDetails?: boolean;
}

export const TechnicalVisual: React.FC<TechnicalVisualProps> = ({
  asset,
  aspectRatio = "4:3",
  className = "",
  showOverlayDetails = true,
}) => {
  const [imageError, setImageError] = useState(false);

  const aspectClass =
    aspectRatio === "16:9"
      ? "aspect-video"
      : aspectRatio === "1:1"
      ? "aspect-square"
      : "aspect-[4/3]";

  if (asset.customImagePath && !imageError) {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-neutral-900 border border-neutral-800 ${aspectClass} ${className}`}>
        <img
          src={asset.customImagePath}
          alt={asset.alt}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {showOverlayDetails && (
          <div className="absolute inset-x-0 bottom-0 bg-neutral-950/95 border-t border-neutral-800 py-2.5 px-3.5 backdrop-blur-md">
            <div className="flex items-center justify-between gap-2">
              <h4 className="text-xs font-semibold text-white tracking-tight truncate">{asset.title}</h4>
              <span className="text-[9px] font-mono text-neutral-400 shrink-0">
                BAREILLY LAB
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-200 select-none group ${aspectClass} ${className}`}
    >
      {/* Background subtle PCB grid */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Render specialized vector diagram based on category */}
      {asset.category === "hero" && <HeroMicroscopeGraphic />}
      {asset.category === "smd" && <SMDReworkGraphic />}
      {asset.category === "hot-air" && <HotAirStationGraphic />}
      {(asset.category === "cpu-bga" || asset.category === "cpu-motherboard") && <CPUBGAReworkGraphic />}
      {asset.category === "motherboard" && <MotherboardDiagnosticsGraphic />}
      {asset.category === "diagnostics" && <MultimeterDcSupplyGraphic />}
      {(asset.category === "classroom" || asset.category === "training") && <PracticalClassroomGraphic />}

      {/* Top right corner technical indicator */}
      <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-neutral-900/90 border border-neutral-800/80 backdrop-blur-sm">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
        <span className="font-mono text-[10px] tracking-wider text-neutral-300 uppercase">
          PRACTICAL LAB · {asset.category}
        </span>
      </div>

      {/* Bottom technical specifications bar */}
      {showOverlayDetails && (
        <div className="absolute inset-x-0 bottom-0 bg-neutral-950/95 border-t border-neutral-800/90 py-2.5 px-3.5 backdrop-blur-md">
          <div className="flex items-center justify-between gap-2">
            <h4 className="text-xs font-semibold text-white tracking-tight truncate">{asset.title}</h4>
            <span className="text-[9px] font-mono text-neutral-400 shrink-0">
              BAREILLY BENCH
            </span>
          </div>

          {asset.specs && asset.specs.length > 0 && (
            <div className="mt-1 pt-1 border-t border-neutral-800/60 flex flex-wrap items-center gap-x-3 gap-y-0.5 text-[10px] text-neutral-400 font-mono">
              {asset.specs.slice(0, 3).map((spec, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="text-neutral-500">{spec.label}:</span>
                  <span className="text-neutral-200">{spec.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ----------------------------------------------------
// Technical Laboratory Vector Diagrams
// ----------------------------------------------------

function HeroMicroscopeGraphic() {
  return (
    <svg className="w-full h-full" viewBox="0 0 640 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="hm-pad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0c1929" />
          <stop offset="100%" stopColor="#08101a" />
        </linearGradient>
        <linearGradient id="hm-pcb" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#064e3b" />
          <stop offset="100%" stopColor="#022c22" />
        </linearGradient>
        <radialGradient id="stereo-lens" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
          <stop offset="65%" stopColor="#0284c7" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#0f172a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Anti-static dark blue repair mat */}
      <rect x="25" y="25" width="590" height="310" rx="12" fill="url(#hm-pad)" stroke="#1e3a5f" strokeWidth="1.5" />
      <path d="M 50 45 L 590 45 M 50 65 L 590 65 M 50 280 L 590 280" stroke="#172e4a" strokeWidth="1" strokeDasharray="4 8" />

      {/* Smartphone logic board secured on bench */}
      <rect x="210" y="60" width="220" height="230" rx="8" fill="url(#hm-pcb)" stroke="#059669" strokeWidth="1.5" />
      {/* High-density copper traces */}
      <path d="M 230 90 H 290 V 135 H 330" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />
      <path d="M 330 135 V 190 H 400" stroke="#10b981" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />
      <path d="M 240 240 V 190 H 290 V 150" stroke="#34d399" strokeWidth="1" strokeOpacity="0.5" fill="none" />

      {/* Main Processor IC under microscope focus */}
      <rect x="270" y="105" width="85" height="85" rx="4" fill="#18181b" stroke="#38bdf8" strokeWidth="2" />
      <text x="312" y="145" fill="#f8fafc" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SM-SOC 8G</text>
      <text x="312" y="160" fill="#64748b" fontSize="8" fontFamily="monospace" textAnchor="middle">0.35mm PITCH</text>

      {/* Surrounding SMD capacitors & resistors */}
      <rect x="240" y="110" width="14" height="7" rx="1" fill="#cbd5e1" stroke="#94a3b8" />
      <rect x="240" y="125" width="14" height="7" rx="1" fill="#cbd5e1" stroke="#94a3b8" />
      <rect x="240" y="140" width="14" height="7" rx="1" fill="#f59e0b" stroke="#d97706" />
      <rect x="375" y="110" width="16" height="8" rx="1" fill="#475569" stroke="#64748b" />
      <rect x="375" y="126" width="16" height="8" rx="1" fill="#cbd5e1" stroke="#94a3b8" />
      <rect x="375" y="142" width="16" height="8" rx="1" fill="#f59e0b" stroke="#d97706" />

      {/* Digital Stereo Microscope Optical Lens View */}
      <circle cx="320" cy="148" r="115" fill="url(#stereo-lens)" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 4" />
      <circle cx="320" cy="148" r="135" stroke="#38bdf8" strokeWidth="0.75" strokeOpacity="0.4" />
      {/* High-precision crosshairs */}
      <line x1="320" y1="25" x2="320" y2="40" stroke="#38bdf8" strokeWidth="2" />
      <line x1="320" y1="255" x2="320" y2="270" stroke="#38bdf8" strokeWidth="2" />
      <line x1="195" y1="148" x2="210" y2="148" stroke="#38bdf8" strokeWidth="2" />
      <line x1="430" y1="148" x2="445" y2="148" stroke="#38bdf8" strokeWidth="2" />

      {/* Left Station: DC Regulated Power Supply */}
      <rect x="45" y="55" width="135" height="100" rx="6" fill="#111827" stroke="#374151" strokeWidth="1.5" />
      <rect x="60" y="70" width="105" height="34" rx="3" fill="#030712" stroke="#1f2937" />
      <text x="68" y="93" fill="#ef4444" fontSize="15" fontFamily="monospace" fontWeight="bold">04.20<tspan fontSize="9" fill="#9ca3af">V</tspan></text>
      <text x="123" y="93" fill="#10b981" fontSize="15" fontFamily="monospace" fontWeight="bold">0.000<tspan fontSize="9" fill="#9ca3af">A</tspan></text>
      <circle cx="78" cy="130" r="7" fill="#ef4444" />
      <circle cx="112" cy="130" r="7" fill="#1f2937" stroke="#374151" />
      <circle cx="148" cy="130" r="7" fill="#10b981" />
      <text x="60" y="64" fill="#9ca3af" fontSize="7" fontFamily="monospace">DC REGULATED SUPPLY</text>

      {/* Right Station: Digital Hot Air Rework */}
      <rect x="460" y="55" width="135" height="100" rx="6" fill="#111827" stroke="#374151" strokeWidth="1.5" />
      <rect x="475" y="70" width="105" height="34" rx="3" fill="#030712" stroke="#1f2937" />
      <text x="485" y="93" fill="#38bdf8" fontSize="15" fontFamily="monospace" fontWeight="bold">380°C</text>
      <text x="538" y="93" fill="#f59e0b" fontSize="14" fontFamily="monospace" fontWeight="bold">AIR 65</text>
      <circle cx="495" cy="130" r="6" fill="#374151" />
      <circle cx="530" cy="130" r="6" fill="#374151" />
      <circle cx="560" cy="130" r="6" fill="#374151" />
      <text x="475" y="64" fill="#9ca3af" fontSize="7" fontFamily="monospace">HOT AIR REWORK 858D</text>

      {/* Precision Tweezers probing test points */}
      <path d="M 175 270 L 260 165" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <path d="M 180 275 L 264 168" stroke="#cbd5e1" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="260" cy="165" r="2" fill="#ef4444" />
    </svg>
  );
}

function SMDReworkGraphic() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#090e1a" />
      {/* PCB circuit base */}
      <rect x="25" y="25" width="350" height="250" rx="6" fill="#064e3b" stroke="#047857" strokeWidth="1.5" />
      {/* PCB Copper lines */}
      <path d="M 45 75 H 130 V 145 H 210 V 215 H 330" stroke="#10b981" strokeWidth="2" strokeOpacity="0.7" fill="none" />
      <path d="M 65 195 H 145 V 105 H 255 V 75" stroke="#34d399" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />

      {/* SMD IC Platform */}
      <rect x="145" y="95" width="110" height="110" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      {/* Solder pins around IC */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <React.Fragment key={i}>
          <rect x={155 + i * 11} y="86" width="7" height="6" fill="#e2e8f0" rx="1" />
          <rect x={155 + i * 11} y="208" width="7" height="6" fill="#e2e8f0" rx="1" />
          <rect x="136" y={105 + i * 11} width="6" height="7" fill="#e2e8f0" rx="1" />
          <rect x="258" y={105 + i * 11} width="6" height="7" fill="#e2e8f0" rx="1" />
        </React.Fragment>
      ))}

      {/* Micro-soldering iron tip touching pad */}
      <path d="M 340 35 L 255 115" stroke="#64748b" strokeWidth="6" strokeLinecap="round" />
      <path d="M 257 113 L 250 120" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
      {/* Solder flux glow */}
      <circle cx="248" cy="120" r="9" fill="#fbbf24" fillOpacity="0.45" />
      <circle cx="248" cy="120" r="3.5" fill="#fef08a" />

      {/* Titanium tweezers */}
      <path d="M 55 35 L 165 135" stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
      <path d="M 75 25 L 168 138" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />

      <text x="200" y="150" fill="#38bdf8" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">SMD IC-64</text>
      <text x="200" y="165" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">MICRO-SOLDERING WORKBENCH</text>
    </svg>
  );
}

function HotAirStationGraphic() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0d1117" />
      <radialGradient id="hotair-glow" cx="50%" cy="45%" r="45%">
        <stop offset="0%" stopColor="#f97316" stopOpacity="0.45" />
        <stop offset="50%" stopColor="#ef4444" stopOpacity="0.15" />
        <stop offset="100%" stopColor="#0d1117" stopOpacity="0" />
      </radialGradient>
      <circle cx="200" cy="140" r="110" fill="url(#hotair-glow)" />

      {/* PCB surface */}
      <rect x="45" y="130" width="310" height="130" rx="4" fill="#064e3b" stroke="#047857" strokeWidth="1.5" />
      {/* Shield frame */}
      <rect x="130" y="150" width="140" height="80" rx="3" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />

      {/* Hot air gun nozzle hovering above */}
      <path d="M 175 10 L 225 10 L 215 90 L 185 90 Z" fill="#475569" stroke="#64748b" strokeWidth="1.5" />
      <rect x="190" y="90" width="20" height="30" rx="2" fill="#cbd5e1" stroke="#94a3b8" />
      {/* Airflow waves */}
      <path d="M 185 125 Q 200 135 215 125" stroke="#f97316" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />
      <path d="M 180 135 Q 200 145 220 135" stroke="#fbbf24" strokeWidth="1.5" strokeOpacity="0.8" fill="none" />

      {/* Temperature status box */}
      <rect x="250" y="35" width="120" height="45" rx="4" fill="#18181b" stroke="#ef4444" strokeWidth="1" />
      <text x="260" y="53" fill="#94a3b8" fontSize="8" fontFamily="monospace">HEAT PROFILE</text>
      <text x="260" y="70" fill="#ef4444" fontSize="13" fontFamily="monospace" fontWeight="bold">365°C / 60L</text>
    </svg>
  );
}

function CPUBGAReworkGraphic() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#090d16" />
      <rect x="35" y="25" width="330" height="250" rx="6" fill="#042f2e" stroke="#0d9488" strokeWidth="1.5" />

      {/* Central BGA CPU */}
      <rect x="115" y="65" width="170" height="170" rx="4" fill="#111827" stroke="#38bdf8" strokeWidth="2" />

      {/* BGA Matrix Points */}
      {Array.from({ length: 9 }).map((_, r) =>
        Array.from({ length: 9 }).map((_, c) => (
          <circle
            key={`${r}-${c}`}
            cx={135 + c * 16}
            cy={85 + r * 16}
            r="2.8"
            fill={r === 4 && c === 4 ? "#ef4444" : (r + c) % 3 === 0 ? "#38bdf8" : "#94a3b8"}
          />
        ))
      )}

      {/* Microscope circular scope line */}
      <circle cx="200" cy="150" r="115" stroke="#38bdf8" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />

      <text x="200" y="55" fill="#2dd4bf" fontSize="9" fontFamily="monospace" textAnchor="middle">
        LASER BGA STENCIL 0.35mm
      </text>
      <text x="200" y="255" fill="#94a3b8" fontSize="8" fontFamily="monospace" textAnchor="middle">
        CPU REBALLING & CHIP-LEVEL REWORK
      </text>
    </svg>
  );
}

function MotherboardDiagnosticsGraphic() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#080c14" />
      {/* Smartphone Motherboard shape */}
      <rect x="40" y="25" width="320" height="250" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />

      {/* Circuit lines connecting components */}
      <path d="M 60 70 H 140 V 130 H 260 V 90" stroke="#34d399" strokeWidth="2" fill="none" />
      <path d="M 140 130 V 210 H 200" stroke="#38bdf8" strokeWidth="2" fill="none" />
      <path d="M 260 170 V 240 H 330" stroke="#f59e0b" strokeWidth="1.5" fill="none" />

      {/* Main PMIC Power IC */}
      <rect x="180" y="110" width="80" height="80" rx="3" fill="#18181b" stroke="#ef4444" strokeWidth="1.5" />
      <text x="220" y="150" fill="#f8fafc" fontSize="10" fontFamily="monospace" textAnchor="middle" fontWeight="bold">PMIC 7150</text>
      <text x="220" y="165" fill="#ef4444" fontSize="8" fontFamily="monospace" textAnchor="middle">POWER SEQUENCING</text>

      {/* Test point pads with labels */}
      <circle cx="80" cy="70" r="5" fill="#f59e0b" />
      <text x="80" y="90" fill="#cbd5e1" fontSize="7" fontFamily="monospace" textAnchor="middle">V_BAT</text>

      <circle cx="200" cy="210" r="5" fill="#38bdf8" />
      <text x="200" y="230" fill="#cbd5e1" fontSize="7" fontFamily="monospace" textAnchor="middle">V_SYS</text>

      <circle cx="310" cy="240" r="5" fill="#10b981" />
      <text x="310" y="260" fill="#cbd5e1" fontSize="7" fontFamily="monospace" textAnchor="middle">LDO_1.8V</text>

      <text x="200" y="48" fill="#34d399" fontSize="9" fontFamily="monospace" textAnchor="middle">
        MOTHERBOARD POWER RAIL TRACING
      </text>
    </svg>
  );
}

function MultimeterDcSupplyGraphic() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0b0f19" />
      {/* Digital Multimeter chassis */}
      <rect x="35" y="35" width="145" height="230" rx="8" fill="#d97706" stroke="#b45309" strokeWidth="2" />
      <rect x="43" y="43" width="129" height="214" rx="6" fill="#18181b" />
      {/* LCD screen */}
      <rect x="53" y="60" width="109" height="45" rx="3" fill="#ecfccb" stroke="#84cc16" strokeWidth="1" />
      <text x="108" y="92" fill="#14532d" fontSize="22" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
        0.418<tspan fontSize="10">V</tspan>
      </text>
      <text x="60" y="74" fill="#3f6212" fontSize="7" fontFamily="monospace">DIODE MODE</text>
      {/* Rotary selector */}
      <circle cx="108" cy="155" r="30" fill="#27272a" stroke="#52525b" strokeWidth="2" />
      <line x1="108" y1="155" x2="108" y2="130" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />

      {/* Smartphone test board */}
      <rect x="220" y="45" width="145" height="210" rx="6" fill="#064e3b" stroke="#059669" strokeWidth="1.5" />
      {/* Test points */}
      <circle cx="260" cy="95" r="5" fill="#f59e0b" />
      <text x="275" y="98" fill="#cbd5e1" fontSize="8" fontFamily="monospace">V_BAT</text>
      <circle cx="260" cy="125" r="5" fill="#ef4444" />
      <text x="275" y="128" fill="#cbd5e1" fontSize="8" fontFamily="monospace">V_SYS</text>
      <circle cx="260" cy="155" r="5" fill="#38bdf8" />
      <text x="275" y="158" fill="#cbd5e1" fontSize="8" fontFamily="monospace">PMIC_OUT</text>

      {/* Probes */}
      <path d="M 110 240 C 130 270 200 220 260 95" stroke="#ef4444" strokeWidth="2" fill="none" strokeDasharray="3 3" />
      <path d="M 90 240 C 100 280 200 250 260 155" stroke="#18181b" strokeWidth="2" fill="none" />
    </svg>
  );
}

function PracticalClassroomGraphic() {
  return (
    <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="300" fill="#0a0f1d" />
      <rect x="25" y="35" width="350" height="230" rx="8" fill="#111827" stroke="#1f2937" strokeWidth="1.5" />

      {/* Three student workstations */}
      {[0, 1, 2].map((i) => (
        <g key={i} transform={`translate(${45 + i * 110}, 55)`}>
          <rect width="95" height="175" rx="4" fill="#0c1929" stroke="#1e3a5f" strokeWidth="1" />
          <circle cx="47" cy="40" r="18" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
          <circle cx="47" cy="40" r="10" fill="#0f172a" />
          <rect x="22" y="75" width="52" height="42" rx="2" fill="#064e3b" />
          <line x1="26" y1="135" x2="47" y2="98" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" />
          <text x="47" y="155" fill="#94a3b8" fontSize="7" fontFamily="monospace" textAnchor="middle">BENCH {i + 1}</text>
        </g>
      ))}

      <text x="200" y="250" fill="#38bdf8" fontSize="9" fontFamily="monospace" textAnchor="middle">
        PRACTICAL STUDENT WORKBENCHES · BUTLER PLAZA BAREILLY
      </text>
    </svg>
  );
}
