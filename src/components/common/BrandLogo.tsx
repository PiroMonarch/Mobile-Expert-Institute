import React from "react";

interface BrandLogoProps {
  variant?: "full" | "icon" | "mark" | "badge" | "crest";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  glow?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = "full",
  size = "md",
  className = "",
  glow = false,
}) => {
  // Proportional emblem container sizes (roughly 1.8 : 1 ratio matching the emblem mark)
  const emblemSizes = {
    xs: "w-8 h-5",
    sm: "w-11 h-7",
    md: "w-14 h-9",
    lg: "w-18 h-11",
    xl: "w-24 h-14",
  };

  const crestSizes = {
    xs: "w-16 h-12",
    sm: "w-24 h-18",
    md: "w-32 h-24",
    lg: "w-44 h-32",
    xl: "w-56 h-40",
  };

  if (variant === "crest") {
    return (
      <div
        className={`relative inline-flex flex-col items-center justify-center p-2 rounded-2xl bg-black border border-cyan-500/40 shadow-[0_0_30px_rgba(0,229,255,0.25)] ${className}`}
      >
        <img
          src="/assets/brand/logo.png"
          alt="Mobile Expert Institute Official Crest"
          className={`${crestSizes[size]} object-contain`}
          loading="eager"
        />
      </div>
    );
  }

  if (variant === "icon" || variant === "mark") {
    return (
      <div
        className={`relative inline-flex items-center justify-center shrink-0 rounded-xl overflow-hidden bg-black px-1.5 py-1 border border-cyan-500/40 ${
          glow ? "shadow-[0_0_20px_rgba(0,229,255,0.4)]" : "shadow-[0_0_10px_rgba(0,0,0,0.8)]"
        } ${className}`}
      >
        <img
          src="/assets/brand/logo-emblem-cyan.png"
          alt="Mobile Expert Institute Logo Mark"
          className={`${emblemSizes[size]} object-contain`}
          loading="eager"
        />
      </div>
    );
  }

  if (variant === "badge") {
    return (
      <div
        className={`inline-flex items-center gap-3 px-3.5 py-2 rounded-xl bg-[#090b10] border border-cyan-500/30 shadow-[0_0_20px_rgba(0,229,255,0.15)] ${className}`}
      >
        <div className="w-13 h-8 rounded-lg bg-black p-0.5 border border-amber-500/50 shrink-0 overflow-hidden flex items-center justify-center shadow-[0_0_12px_rgba(255,183,3,0.2)]">
          <img
            src="/assets/brand/logo-emblem-clean.png"
            alt="Mobile Expert Institute Logo"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1">
            <span className="text-[13px] font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-400 uppercase font-sans">
              MOBILE EXPERT
            </span>
          </div>
          <span className="text-[10px] font-mono tracking-[0.22em] text-cyan-400 font-semibold uppercase">
            INSTITUTE • BAREILLY
          </span>
        </div>
      </div>
    );
  }

  // Default "full" variant (Used in Header, Hero, Footer)
  return (
    <div className={`inline-flex items-center gap-3 text-left shrink-0 ${className}`}>
      {/* Official High-Resolution Emblem */}
      <div
        className={`relative ${emblemSizes[size]} rounded-xl bg-black px-1 py-0.5 border border-cyan-500/40 shrink-0 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_18px_rgba(0,229,255,0.5)] transition-all overflow-hidden ${
          glow ? "shadow-[0_0_20px_rgba(0,229,255,0.35)]" : "shadow-[0_0_12px_rgba(0,229,255,0.15)]"
        }`}
      >
        <img
          src="/assets/brand/logo-emblem-cyan.png"
          alt="Mobile Expert Institute Logo"
          className="w-full h-full object-contain filter drop-shadow-[0_0_4px_rgba(0,229,255,0.5)]"
          loading="eager"
        />
      </div>

      {/* Styled Brand Typography matching the logo's red & cyan dual-color title */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black tracking-tight font-sans text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-rose-500 to-amber-400 ${
              size === "xl"
                ? "text-2xl"
                : size === "lg"
                ? "text-xl"
                : size === "sm" || size === "xs"
                ? "text-sm"
                : "text-base sm:text-lg"
            }`}
          >
            MOBILE EXPERT
          </span>
        </div>
        <span
          className={`font-mono font-bold tracking-[0.26em] text-cyan-400 leading-none mt-1 uppercase ${
            size === "xl"
              ? "text-sm"
              : size === "lg"
              ? "text-xs"
              : size === "sm" || size === "xs"
              ? "text-[9px]"
              : "text-[10px] sm:text-[11px]"
          }`}
        >
          INSTITUTE
        </span>
      </div>
    </div>
  );
};
