import React, { useRef, useState } from "react";
import { Maximize2, MapPin, Sparkles, ChevronLeft, ChevronRight } from "lucide-react";
import { INSTITUTE_REAL_PHOTOS, InstituteRealPhoto } from "../../config/assets";

interface PhotoMarqueeProps {
  onPhotoClick?: (photo: InstituteRealPhoto) => void;
  className?: string;
}

export const PhotoMarquee: React.FC<PhotoMarqueeProps> = ({ onPhotoClick, className = "" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate photos for continuous seamless marquee look
  const marqueePhotos = [...INSTITUTE_REAL_PHOTOS, ...INSTITUTE_REAL_PHOTOS];

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className={`relative overflow-hidden py-6 ${className}`}>
      {/* Section Header with scrub controls */}
      <div className="flex items-center justify-between mb-4 px-4 sm:px-0">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Live Workshop Stream</span>
          </div>
          <h3 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
            Real Glimpses from A-6 Butler Plaza
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
            className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 text-neutral-300 hover:text-white transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scrolling Strip Container */}
      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="flex gap-4 overflow-x-auto pb-4 pt-1 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {marqueePhotos.map((photo, index) => (
          <div
            key={`${photo.id}-${index}`}
            onClick={() => onPhotoClick && onPhotoClick(photo)}
            className="group relative flex-none w-[280px] sm:w-[320px] rounded-2xl overflow-hidden bg-[#0e111a] border border-neutral-800 hover:border-cyan-500/50 shadow-md transition-all cursor-pointer snap-start"
          >
            {/* Image Box */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

              {/* Tag Chip */}
              <div className="absolute top-2.5 left-2.5 z-10">
                <span className="text-[10px] font-mono text-cyan-300 bg-neutral-950/90 backdrop-blur-xs px-2 py-0.5 rounded border border-cyan-800/60 font-semibold">
                  {photo.tag}
                </span>
              </div>

              {/* Inspect Icon */}
              <div className="absolute top-2.5 right-2.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="p-1.5 rounded-full bg-cyan-400 text-neutral-950 flex items-center justify-center font-bold">
                  <Maximize2 className="w-3 h-3" />
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 text-white">
                <div className="text-xs font-bold line-clamp-1 group-hover:text-cyan-300 transition-colors">
                  {photo.title}
                </div>
                <div className="text-[10px] font-mono text-neutral-400 line-clamp-1 mt-0.5">
                  {photo.location}
                </div>
              </div>
            </div>

            {/* Bottom Quick Feature Tag */}
            <div className="px-3 py-2.5 bg-[#0e111a] flex items-center justify-between text-[11px] text-neutral-400 border-t border-neutral-800/80">
              <span className="truncate">{photo.features[0] || photo.category}</span>
              <span className="text-cyan-400 font-semibold shrink-0 ml-1">Inspect &rarr;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
