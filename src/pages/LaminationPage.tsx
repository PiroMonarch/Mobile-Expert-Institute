import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Sparkles,
  Smartphone,
  Laptop,
  CheckCircle2,
  AlertCircle,
  Eye,
  ArrowRight,
  Filter,
  MessageCircle,
  Maximize2,
  MapPin,
  Camera,
} from "lucide-react";
import { SKIN_CATALOG, SKIN_CATEGORIES, SkinCategory, SkinItem } from "../data/skins";
import { VISUAL_ASSETS, INSTITUTE_REAL_PHOTOS, InstituteRealPhoto } from "../config/assets";
import { PhotoLightboxModal } from "../components/visuals/PhotoLightboxModal";
import { BrandLogo } from "../components/common/BrandLogo";
import { INSTITUTE_CONFIG } from "../config/institute";

interface LaminationPageProps {
  onOpenEnquiry: (initialType?: "training" | "repair" | "lamination", detail?: string) => void;
}

export const LaminationPage: React.FC<LaminationPageProps> = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<SkinCategory>("all");
  const [selectedSkin, setSelectedSkin] = useState<SkinItem | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<InstituteRealPhoto | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? SKIN_CATALOG
      : SKIN_CATALOG.filter((item) => item.category === activeCategory);

  const skinRealPhotos = INSTITUTE_REAL_PHOTOS.filter((p) => p.category === "Custom Lamination");

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 overflow-x-hidden text-neutral-100">
      {/* ==============================================================
          1. HEADER BANNER
          ============================================================== */}
      <section className="bg-[#07080b] text-white pt-12 pb-16 border-b border-neutral-800/80 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-4"
            >
              <div className="flex flex-wrap items-center gap-3">
                <BrandLogo variant="badge" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-400">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Device Customisation Studio · Butler Plaza Bareilly</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Mobile & Laptop Lamination & Skins
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
                Custom vinyl device skins and precision screen lamination for smartphones and laptops. Featuring ultra-matte textures, 3D embossed carbon, and motorsport liveries.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry("lamination", "General Device Skin & Model Availability Query")}
                  className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:brightness-110 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_15px_rgba(255,183,3,0.3)]"
                >
                  <span>Check Device Availability</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-950" />
                </button>
                <a
                  href={`tel:${INSTITUTE_CONFIG.contact.phonePlaceholder}`}
                  className="px-4 py-2.5 text-xs font-mono text-neutral-300 hover:text-cyan-400 bg-neutral-900 border border-neutral-800 rounded-xl transition-colors"
                >
                  Call Shop: {INSTITUTE_CONFIG.contact.phoneDisplay}
                </a>
              </div>
            </motion.div>

            {/* Quick Dual Photo Preview */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5 grid grid-cols-2 gap-3"
            >
              <div
                onClick={() => {
                  const p = INSTITUTE_REAL_PHOTOS.find((item) => item.id === "aston-martin-f1-laptop");
                  if (p) setSelectedPhoto(p);
                }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-emerald-500 cursor-pointer shadow-lg transition-all"
              >
                <img
                  src="/assets/aistudio/IMG20261006190637_72a45085.jpg"
                  alt="Aston Martin F1 laptop wrap"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white line-clamp-1">
                  Aston Martin F1 Wrap
                </span>
              </div>

              <div
                onClick={() => {
                  const p = INSTITUTE_REAL_PHOTOS.find((item) => item.id === "spiderman-3d-laptop-wrap");
                  if (p) setSelectedPhoto(p);
                }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-red-500 cursor-pointer shadow-lg transition-all"
              >
                <img
                  src="/assets/aistudio/IMG20260807211634_c042a1cb.jpg"
                  alt="Spider-Man 3D tactile wrap"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 text-[10px] font-bold text-white line-clamp-1">
                  Spider-Man 3D Embossed
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          2. REAL WORKSHOP WRAP SHOWCASE (5 REAL WORKSHOP PHOTOS)
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div {...fadeInUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold mb-1">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Applied Results</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              In-Shop Skins & Wrap Photography
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-mono">
            Directly from our Butler Plaza lamination counter
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skinRealPhotos.map((photo) => (
            <motion.div
              key={photo.id}
              {...fadeInUp}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedPhoto(photo)}
              className="group rounded-2xl overflow-hidden bg-[#0e111a] border border-neutral-800 hover:border-cyan-500/50 shadow-md transition-all cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono text-neutral-200 bg-black/80 px-2 py-0.5 rounded border border-neutral-700">
                    {photo.tag}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="p-1 rounded-full bg-cyan-400 text-neutral-950 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3 h-3" />
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-1">
                    {photo.title}
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    {photo.location}
                  </p>
                </div>
              </div>
              <div className="p-4 bg-[#0e111a] border-t border-neutral-800/80 flex items-center justify-between text-xs">
                <span className="text-neutral-400 line-clamp-1">{photo.features[0]}</span>
                <span className="text-cyan-400 font-semibold shrink-0 ml-2">Inspect &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==============================================================
          3. FILTER TABS & DESIGN CATALOG
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div {...fadeInUp} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Texture & Style Catalog
            </h2>
            <p className="text-xs text-neutral-400 mt-0.5">
              Select a category to filter through matte, 3D, and custom laptop styles
            </p>
          </div>

          <div className="flex flex-wrap gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl self-start">
            {SKIN_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as SkinCategory)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-amber-400 to-amber-500 text-neutral-950 font-bold shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              {...fadeInUp}
              whileHover={{ y: -3 }}
              className="bg-[#0e111a] rounded-2xl border border-neutral-800 hover:border-cyan-500/40 shadow-md transition-all flex flex-col justify-between overflow-hidden"
            >
              {item.imagePath ? (
                <div
                  onClick={() => {
                    const matchedPhoto = INSTITUTE_REAL_PHOTOS.find((p) => p.url === item.imagePath);
                    if (matchedPhoto) setSelectedPhoto(matchedPhoto);
                  }}
                  className="relative aspect-[16/10] bg-neutral-950 overflow-hidden cursor-pointer group"
                >
                  <img
                    src={item.imagePath}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono text-neutral-950 bg-cyan-400 px-2 py-0.5 rounded font-bold">
                      {item.textureBadge}
                    </span>
                  </div>
                </div>
              ) : (
                <div
                  className="relative aspect-[16/10] flex items-center justify-center p-6 text-white border-b border-neutral-800"
                  style={{ backgroundColor: item.accentColor }}
                >
                  <div className="text-center space-y-1">
                    <span className="text-xs font-mono uppercase tracking-wider text-white/90">
                      {item.finishType}
                    </span>
                    <h4 className="text-lg font-bold">{item.name}</h4>
                  </div>
                </div>
              )}

              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-white">{item.name}</span>
                  <span className="text-cyan-400 font-mono text-[11px]">{item.deviceType}</span>
                </div>

                <p className="text-xs text-neutral-400 line-clamp-2 leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-neutral-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-neutral-500">In-Shop Custom Cut</span>
                  <button
                    onClick={() => onOpenEnquiry("lamination", `Availability for ${item.name}`)}
                    className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Check Fit</span>
                    <ArrowRight className="w-3 h-3 text-amber-400" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <PhotoLightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onEnquire={(type, detail) => onOpenEnquiry(type, detail)}
      />
    </div>
  );
};
