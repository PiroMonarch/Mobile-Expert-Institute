import React, { useState } from "react";
import { Maximize2, X, MapPin, CheckCircle2, ChevronRight, Camera } from "lucide-react";
import { INSTITUTE_REAL_PHOTOS, InstituteRealPhoto } from "../../config/assets";

interface InstituteGalleryProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  className?: string;
  showFilter?: boolean;
}

export const InstituteGallery: React.FC<InstituteGalleryProps> = ({
  title = "Real Workshop & Training Laboratory Glimpses",
  subtitle = "Authentic photographs from our actual repair benches and practical training batches at A-6 Butler Plaza, Civil Lines, Bareilly.",
  limit,
  className = "",
  showFilter = true,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedPhoto, setSelectedPhoto] = useState<InstituteRealPhoto | null>(null);

  const categories = ["All", "Repair Bench", "Live Demonstration", "Classroom Batch", "Custom Lamination", "Instruments Setup"];

  const filteredPhotos = INSTITUTE_REAL_PHOTOS.filter((photo) => {
    if (activeCategory === "All") return true;
    return photo.category === activeCategory;
  });

  const displayPhotos = limit ? filteredPhotos.slice(0, limit) : filteredPhotos;

  return (
    <div className={`space-y-8 ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1 font-semibold">
            <Camera className="w-3.5 h-3.5" />
            <span>Actual Institute Photography</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm text-neutral-400 mt-1 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Filter Pills */}
        {showFilter && (
          <div className="flex flex-wrap gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-cyan-400 to-teal-400 text-neutral-950 font-bold shadow-[0_0_12px_rgba(0,229,255,0.3)]"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid of Real Photographs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayPhotos.map((photo) => (
          <button
            key={photo.id}
            type="button"
            onClick={() => setSelectedPhoto(photo)}
            className="group relative text-left rounded-2xl overflow-hidden bg-[#0e111a] border border-neutral-800 hover:border-cyan-500/50 shadow-md transition-all cursor-pointer flex flex-col justify-between focus:outline-hidden focus:ring-2 focus:ring-cyan-400"
            aria-label={`View full photo: ${photo.title}`}
          >
            {/* Image frame */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-neutral-950 pointer-events-none">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity pointer-events-none" />

              {/* Top tag badge */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 bg-neutral-950/90 backdrop-blur-xs px-2.5 py-1 rounded-md border border-cyan-800/60">
                  {photo.tag}
                </span>
                <span className="p-1.5 rounded-full bg-neutral-900/80 text-white/80 group-hover:text-neutral-950 group-hover:bg-cyan-400 transition-colors">
                  <Maximize2 className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 z-10 text-white pointer-events-none">
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                  {photo.title}
                </h4>
                <p className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5 font-mono">
                  {photo.location}
                </p>
              </div>
            </div>

            {/* Information bar below photo */}
            <div className="w-full p-4 bg-[#0e111a] border-t border-neutral-800/80 space-y-2 pointer-events-none">
              <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                {photo.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {photo.features.slice(0, 2).map((feature, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 text-[10px] text-neutral-300 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800"
                  >
                    <CheckCircle2 className="w-2.5 h-2.5 text-cyan-400" />
                    <span>{feature}</span>
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Enlarged Photo Lightbox Modal */}
      {selectedPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0e111a] rounded-2xl overflow-hidden shadow-2xl border border-cyan-500/40 text-white animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-neutral-950/80 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-colors border border-neutral-700 cursor-pointer"
              aria-label="Close photo view"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo View */}
            <div className="relative max-h-[65vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedPhoto.url}
                alt={selectedPhoto.title}
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Details Footer */}
            <div className="p-6 bg-[#0e111a] border-t border-neutral-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                    <span>{selectedPhoto.category}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-neutral-400">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      {selectedPhoto.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {selectedPhoto.title}
                  </h3>
                </div>
                <span className="self-start text-xs font-mono px-3 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-800">
                  {selectedPhoto.tag}
                </span>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                {selectedPhoto.description}
              </p>

              {/* Key Features */}
              <div className="pt-2 border-t border-neutral-800 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {selectedPhoto.features.map((feature, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span className="line-clamp-1">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
