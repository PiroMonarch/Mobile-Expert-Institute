import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Maximize2, MapPin, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { INSTITUTE_REAL_PHOTOS, InstituteRealPhoto } from "../../config/assets";

interface HeroPhotoShowcaseProps {
  onPhotoClick?: (photo: InstituteRealPhoto) => void;
}

export const HeroPhotoShowcase: React.FC<HeroPhotoShowcaseProps> = ({ onPhotoClick }) => {
  // Highlight top 5 diverse real photos for the hero
  const featuredIds = [
    "master-institute-bench",
    "microscope-soldering-bench",
    "live-practical-demonstration",
    "aston-martin-f1-laptop",
    "spiderman-3d-laptop-wrap",
  ];

  const showcasePhotos = INSTITUTE_REAL_PHOTOS.filter((p) =>
    featuredIds.includes(p.id)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % showcasePhotos.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, showcasePhotos.length]);

  const current = showcasePhotos[currentIndex] || showcasePhotos[0];

  return (
    <div
      className="relative rounded-2xl overflow-hidden bg-[#0a0c12] border border-cyan-500/30 shadow-[0_0_30px_rgba(0,229,255,0.15)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Top Status & Location Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#07080b] border-b border-neutral-800 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
          </span>
          <span className="text-cyan-400 font-semibold tracking-wide text-[11px]">
            REAL WORKBENCH
          </span>
          <span className="text-neutral-600 hidden sm:inline">|</span>
          <span className="text-neutral-400 text-[11px] hidden sm:inline">
            A-6 Butler Plaza, Bareilly
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-neutral-400 text-[11px]">
          <span className="text-cyan-400 font-semibold">{currentIndex + 1}</span>
          <span className="text-neutral-600">/</span>
          <span>{showcasePhotos.length}</span>
        </div>
      </div>

      {/* Main Image Frame with Motion Transition */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.45, ease: "easeOut" as const }}
            className="absolute inset-0 cursor-pointer"
            onClick={() => onPhotoClick && onPhotoClick(current)}
          >
            <img
              src={current.url}
              alt={current.title}
              className="w-full h-full object-cover object-center"
            />
            {/* Gradient Overlays for readable text */}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/25 to-transparent" />
          </motion.div>
        </AnimatePresence>

        {/* View Fullscreen Action */}
        <button
          type="button"
          onClick={() => onPhotoClick && onPhotoClick(current)}
          className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-neutral-900/80 hover:bg-cyan-500 hover:text-neutral-950 text-white text-xs font-semibold backdrop-blur-md transition-all cursor-pointer shadow"
          title="Click to view full photo"
        >
          <Maximize2 className="w-3.5 h-3.5" />
          <span className="text-[11px] hidden sm:inline">Inspect Photo</span>
        </button>

        {/* Arrow Navigation */}
        <button
          type="button"
          aria-label="Previous photo"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((prev) => (prev === 0 ? showcasePhotos.length - 1 : prev - 1));
          }}
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white/90 hover:text-white backdrop-blur-xs transition-all border border-neutral-700/60 cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          type="button"
          aria-label="Next photo"
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((prev) => (prev + 1) % showcasePhotos.length);
          }}
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white/90 hover:text-white backdrop-blur-xs transition-all border border-neutral-700/60 cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Bottom Metadata Overlay */}
        <div className="absolute bottom-3 left-4 right-4 z-20 pointer-events-none">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 bg-cyan-950/80 border border-cyan-800/80 px-2 py-0.5 rounded">
              {current.tag}
            </span>
            <span className="text-[11px] text-neutral-300 font-mono">
              {current.category}
            </span>
          </div>
          <h3 className="text-sm sm:text-base font-bold text-white leading-snug line-clamp-1">
            {current.title}
          </h3>
          <p className="text-xs text-neutral-300 line-clamp-1 mt-0.5">
            {current.caption}
          </p>
        </div>
      </div>

      {/* Interactive Thumbnail Carousel Strip */}
      <div className="grid grid-cols-5 gap-1.5 p-2 bg-[#08090e] border-t border-neutral-800">
        {showcasePhotos.map((photo, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={photo.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`relative aspect-[4/3] rounded-lg overflow-hidden border transition-all text-left cursor-pointer ${
                isActive
                  ? "border-cyan-400 ring-2 ring-cyan-400/40 scale-[1.02] shadow-[0_0_10px_rgba(0,229,255,0.4)]"
                  : "border-neutral-800 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover"
              />
              {isActive && (
                <div className="absolute inset-0 bg-cyan-500/10" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
