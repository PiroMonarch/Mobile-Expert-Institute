import React, { useState } from "react";
import { motion } from "motion/react";
import {
  GraduationCap,
  Cpu,
  Flame,
  Search,
  Wrench,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Clock,
  Users,
  Calendar,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Maximize2,
  MapPin,
  Camera,
  Layers,
} from "lucide-react";
import { COURSE_MODULES, COURSE_OVERVIEW, COURSE_FAQS } from "../data/courses";
import {
  VISUAL_ASSETS,
  INSTITUTE_REAL_PHOTOS,
  OFFICIAL_HARDWARE_MODULES,
  InstituteRealPhoto,
} from "../config/assets";
import { TechnicalVisual } from "../components/visuals/TechnicalVisual";
import { PhotoLightboxModal } from "../components/visuals/PhotoLightboxModal";
import { BrandLogo } from "../components/common/BrandLogo";
import { INSTITUTE_CONFIG } from "../config/institute";

interface TrainingPageProps {
  onOpenEnquiry: (initialType?: "training" | "repair" | "lamination", detail?: string) => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedPhoto, setSelectedPhoto] = useState<InstituteRealPhoto | null>(null);

  const categories = ["All", "Hardware & SMD", "Advanced Diagnostics", "Specialized Tools", "Foundations"];

  const filteredModules =
    selectedCategory === "All"
      ? COURSE_MODULES
      : COURSE_MODULES.filter((m) => m.category === selectedCategory);

  // Training & lab specific photos
  const trainingPhotos = INSTITUTE_REAL_PHOTOS.filter(
    (p) =>
      p.category === "Classroom Batch" ||
      p.category === "Live Demonstration" ||
      p.category === "Repair Bench" ||
      p.category === "Instruments Setup"
  );

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  return (
    <div className="space-y-16 sm:space-y-20 pb-20 overflow-x-hidden text-neutral-100">
      {/* ==============================================================
          1. HEADER BANNER WITH REAL STUDENT DEMONSTRATION PHOTO & LOGO
          ============================================================== */}
      <section className="bg-[#07080b] text-white pt-12 pb-16 border-b border-neutral-800/80 relative overflow-hidden">
        {/* Ambient neon backlights */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
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
                  <span>A-6 Butler Plaza, Bareilly</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Practical Mobile Repairing Training
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
                Hands-on practical training on real smartphone hardware. Master SMD soldering, schematic circuit tracing, and chip-level CPU reballing under stereo microscopes.
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenEnquiry("training", "Course Admission & Batch Timings Query")}
                  className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:brightness-110 rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_16px_rgba(0,229,255,0.3)]"
                >
                  <span>Inquire About Next Batch</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-950" />
                </button>
                <a
                  href={`tel:${INSTITUTE_CONFIG.contact.phonePlaceholder}`}
                  className="px-4 py-2.5 text-xs font-mono text-neutral-300 hover:text-amber-400 bg-neutral-900 border border-neutral-800 rounded-xl transition-colors"
                >
                  Call: {INSTITUTE_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              {/* Student travel pill strip */}
              <div className="pt-3 border-t border-neutral-800/80 flex flex-wrap items-center gap-2 text-xs text-neutral-400">
                <span className="text-neutral-500 font-mono text-[11px]">Students Travelling From:</span>
                {["Chandausi (~68 km)", "Jayatipur (~45 km)", "Faridpur (~22 km)", "Tilhar (~55 km)"].map((town, i) => (
                  <span key={i} className="bg-neutral-900 text-amber-300 text-[11px] px-2 py-0.5 rounded border border-amber-900/50 font-mono">
                    {town}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Clickable Real Classroom Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div
                onClick={() => {
                  const photo = INSTITUTE_REAL_PHOTOS.find((p) => p.id === "live-practical-demonstration");
                  if (photo) setSelectedPhoto(photo);
                }}
                className="group relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-cyan-500/50 shadow-2xl cursor-pointer"
              >
                <img
                  src="/assets/aistudio/IMG20260805123017_7791e4ee.jpg"
                  alt="Students at live demonstration workbench in Bareilly"
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono text-neutral-950 bg-gradient-to-r from-cyan-400 to-teal-400 px-2.5 py-1 rounded font-bold shadow">
                    LIVE PRACTICAL LAB
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className="p-1.5 rounded-full bg-black/60 text-white/90 group-hover:bg-cyan-500 group-hover:text-black transition-colors flex items-center justify-center">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    Live Workbench Demonstration Session
                  </h4>
                  <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    A-6 Butler Plaza, Bareilly · Click to Inspect
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          OFFICIAL HARDWARE CURRICULUM CARDS (FROM USER ASSET BANNER)
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div {...fadeInUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
              Core Technical Hardware Curriculum
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Bench Diagnostic & Chipset Workstations
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-mono">
            Direct practical training on commercial multi-pin ICs & PCB boards
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFICIAL_HARDWARE_MODULES.map((mod) => (
            <motion.div
              key={mod.id}
              {...fadeInUp}
              whileHover={{ y: -5 }}
              className="rounded-2xl bg-[#0e111a] border border-neutral-800 hover:border-cyan-500/50 transition-all shadow-md overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] w-full bg-black p-2 flex items-center justify-center">
                <img
                  src={mod.imageUrl}
                  alt={mod.title}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] font-mono text-amber-300 bg-neutral-950/90 border border-amber-900/60 px-2 py-0.5 rounded font-semibold">
                    {mod.highlight}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono mt-0.5">
                    {mod.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-800/80 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                    Key Topics:
                  </span>
                  <ul className="space-y-1 text-xs text-neutral-300">
                    {mod.topics.map((t, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="line-clamp-1">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => onOpenEnquiry("training", `Inquiry regarding ${mod.title} module syllabus`)}
                    className="w-full py-2 px-3 text-xs font-semibold text-neutral-200 bg-neutral-900 hover:bg-neutral-800 hover:text-cyan-300 border border-neutral-800 rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Inquire for Module
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==============================================================
          2. COURSE LOGISTICS OVERVIEW (CONCISE CARDS)
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="bg-[#0e111a] rounded-2xl border border-neutral-800 p-6 sm:p-8 shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800/80 pb-5">
            <div>
              <h2 className="text-lg font-bold text-white">
                Course Logistics & Admission Structure
              </h2>
              <p className="text-xs text-neutral-400 mt-0.5">
                Transparent information regarding enrollment, duration, and laboratory access
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-300 bg-cyan-950/60 px-3 py-1.5 rounded-lg border border-cyan-800/60">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Small Batch Practical Learning</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1.5">
              <div className="text-[11px] font-mono uppercase text-cyan-400 font-semibold">Course Fee</div>
              <div className="text-sm font-bold text-white">{COURSE_OVERVIEW.placeholders.feeStatus}</div>
              <p className="text-xs text-neutral-400">{COURSE_OVERVIEW.placeholders.feeNote}</p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1.5">
              <div className="text-[11px] font-mono uppercase text-amber-400 font-semibold">Course Duration</div>
              <div className="text-sm font-bold text-white">{COURSE_OVERVIEW.placeholders.durationStatus}</div>
              <p className="text-xs text-neutral-400">{COURSE_OVERVIEW.placeholders.durationNote}</p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1.5">
              <div className="text-[11px] font-mono uppercase text-rose-400 font-semibold">Batch Size</div>
              <div className="text-sm font-bold text-white">{COURSE_OVERVIEW.placeholders.batchSizeStatus}</div>
              <p className="text-xs text-neutral-400">{COURSE_OVERVIEW.placeholders.batchSizeNote}</p>
            </div>

            <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800 space-y-1.5">
              <div className="text-[11px] font-mono uppercase text-emerald-400 font-semibold">Class Timings</div>
              <div className="text-sm font-bold text-white">{COURSE_OVERVIEW.placeholders.timingsStatus}</div>
              <p className="text-xs text-neutral-400">{COURSE_OVERVIEW.placeholders.timingsNote}</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==============================================================
          3. REAL WORKSHOP & CLASSROOM PHOTOS STRIP (6 REAL PHOTOS)
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div {...fadeInUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
              <Camera className="w-3.5 h-3.5" />
              <span>Real Laboratory Photos</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Training Facilities at Butler Plaza
            </h2>
          </div>
          <p className="text-xs text-neutral-400 font-mono">
            Click any photograph to view high-resolution inspection
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingPhotos.map((photo) => (
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
          4. PRACTICAL SYLLABUS MODULES
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div {...fadeInUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1">
              Practical Syllabus
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              What Students Learn on the Bench
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-neutral-900 border border-neutral-800 rounded-xl self-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-gradient-to-r from-cyan-400 to-teal-400 text-neutral-950 font-bold shadow"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((module) => (
            <motion.div
              key={module.id}
              {...fadeInUp}
              whileHover={{ y: -3 }}
              className="p-6 rounded-2xl bg-[#0e111a] border border-neutral-800 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="text-xs font-mono text-cyan-400 font-semibold">
                  {module.category}
                </div>
                <h3 className="text-base font-bold text-white leading-snug">
                  {module.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {module.summary}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-neutral-800/80">
                  <span className="text-[11px] font-semibold text-neutral-300 block">Topics Covered:</span>
                  <ul className="space-y-1 text-xs text-neutral-400">
                    {module.keyTopics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800/80">
                <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-800/40 text-cyan-300 text-xs font-medium">
                  <span className="font-bold text-cyan-400">Practical Focus: </span>
                  {module.practicalFocus}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==============================================================
          5. FAQS ACCORDION
          ============================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <motion.div {...fadeInUp} className="text-center space-y-1">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            Admissions & Student Queries
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-3">
          {COURSE_FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <motion.div
                key={index}
                {...fadeInUp}
                className="rounded-xl border border-neutral-800 bg-[#0e111a] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-white">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-400 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-3">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ==============================================================
          6. BOTTOM ADMISSION CTA
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="p-8 sm:p-10 rounded-2xl bg-[#090b12] border border-cyan-500/30 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_25px_rgba(0,229,255,0.1)]">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">Ready to Observe Our Lab in Bareilly?</h3>
            <p className="text-xs sm:text-sm text-neutral-300 max-w-xl">
              Visit A-6 Butler Plaza, Civil Lines, Bareilly to observe our training workbenches and speak directly with instructors about upcoming batch schedules.
            </p>
          </div>
          <button
            onClick={() => onOpenEnquiry("training", "Direct Practical Course Admission")}
            className="px-6 py-3 text-xs font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:brightness-110 rounded-xl shadow-[0_0_15px_rgba(0,229,255,0.3)] whitespace-nowrap transition-all cursor-pointer"
          >
            Enquire for Admission
          </button>
        </motion.div>
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
