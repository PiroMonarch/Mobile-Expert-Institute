import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Wrench,
  GraduationCap,
  Sparkles,
  MapPin,
  ArrowRight,
  ShieldAlert,
  Cpu,
  Flame,
  CheckCircle,
  ExternalLink,
  Layers,
  Activity,
  Zap,
  PhoneCall,
  Navigation,
  Maximize2,
  Sliders,
  ShieldCheck,
  CheckCircle2,
  Microscope,
  Award,
} from "lucide-react";
import { INSTITUTE_CONFIG } from "../config/institute";
import {
  VISUAL_ASSETS,
  INSTITUTE_REAL_PHOTOS,
  OFFICIAL_HARDWARE_MODULES,
  BRAND_ASSETS,
  InstituteRealPhoto,
} from "../config/assets";
import { TechnicalVisual } from "../components/visuals/TechnicalVisual";
import { InstituteGallery } from "../components/visuals/InstituteGallery";
import { HeroPhotoShowcase } from "../components/visuals/HeroPhotoShowcase";
import { PhotoMarquee } from "../components/visuals/PhotoMarquee";
import { PhotoLightboxModal } from "../components/visuals/PhotoLightboxModal";
import { BrandLogo } from "../components/common/BrandLogo";
import { STUDENT_REVIEWS } from "../data/reviews";
import { PageId } from "../components/layout/Navbar";

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenEnquiry: (initialType?: "training" | "repair" | "lamination", detail?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<InstituteRealPhoto | null>(null);

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.5, ease: "easeOut" as const },
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-20 overflow-x-hidden text-neutral-100">
      {/* ==============================================================
          1. HERO SECTION WITH OFFICIAL LOGO & REAL PHOTO SHOWCASE
          ============================================================== */}
      <section className="relative overflow-hidden pt-8 pb-14 lg:pt-14 lg:pb-20 border-b border-neutral-800/80 bg-[#07080b]">
        {/* Subtle ambient lighting gradients inspired by logo's cyan & crimson glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute -bottom-10 right-10 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7 space-y-6"
            >
              {/* Official Brand Badge & Location */}
              <div className="flex flex-wrap items-center gap-3">
                <BrandLogo variant="badge" />
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900/90 border border-neutral-800 text-xs font-mono text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>A-6 Butler Plaza, Bareilly</span>
                </div>
              </div>

              {/* Punchy Headline matching logo gradient */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
                Understand the Technology. <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-cyan-400">
                  Master the Repair.
                </span>
              </h1>

              {/* Concise Supporting Copy */}
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-xl">
                Specialized mobile phone repairing laboratory, hands-on micro-soldering training, and precision device lamination studio at Mobile Expert Institute, Bareilly.
              </p>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate("training")}
                  className="px-5 py-3 text-sm font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:brightness-110 active:brightness-95 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explore Practical Courses</span>
                  <ArrowRight className="w-4 h-4 text-neutral-950" />
                </button>

                <button
                  onClick={() => onOpenEnquiry("repair")}
                  className="px-5 py-3 text-sm font-semibold text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-amber-400/60 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Wrench className="w-4 h-4 text-amber-400" />
                  <span>Enquire About Repair</span>
                </button>
              </div>

              {/* Key Quick Metrics Chips */}
              <div className="pt-4 border-t border-neutral-800/80 grid grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-[#0c0e16] border border-neutral-800/80 hover:border-cyan-500/40 transition-colors">
                  <div className="text-base sm:text-lg font-bold text-cyan-400">100%</div>
                  <div className="text-[11px] text-neutral-400 font-medium">Practical Hardware</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0c0e16] border border-neutral-800/80 hover:border-amber-500/40 transition-colors">
                  <div className="text-base sm:text-lg font-bold text-amber-400">7X–45X</div>
                  <div className="text-[11px] text-neutral-400 font-medium">Stereo Optics Lab</div>
                </div>
                <div className="p-3 rounded-xl bg-[#0c0e16] border border-neutral-800/80 hover:border-rose-500/40 transition-colors">
                  <div className="text-base sm:text-lg font-bold text-rose-400">A-6 Ground</div>
                  <div className="text-[11px] text-neutral-400 font-medium">Butler Plaza Studio</div>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Visual (5 cols): Interactive Real Photo Showcase */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5"
            >
              <HeroPhotoShowcase onPhotoClick={(photo) => setSelectedPhoto(photo)} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          OFFICIAL HARDWARE TRAINING MODULES (FROM THE BRAND BANNER)
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/60 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Official Training Syllabus Modules</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Practical Chip-Level Hardware Bench
          </h2>
          <p className="text-sm text-neutral-400">
            Real hardware components and instrumentation taught at Mobile Expert Institute:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OFFICIAL_HARDWARE_MODULES.map((mod) => (
            <motion.div
              key={mod.id}
              {...fadeInUp}
              whileHover={{ y: -5 }}
              className="group rounded-2xl bg-[#0d1017] border border-neutral-800 hover:border-cyan-500/50 transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.15)] overflow-hidden flex flex-col justify-between"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-black flex items-center justify-center p-2">
                <img
                  src={mod.imageUrl}
                  alt={mod.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] font-mono text-cyan-300 bg-neutral-950/90 border border-cyan-800 px-2 py-0.5 rounded font-semibold">
                    {mod.highlight}
                  </span>
                </div>
              </div>

              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0d1017] to-[#090b10]">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {mod.subtitle}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-800/80 space-y-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 font-semibold block">
                    Key Practical Skills:
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
                    onClick={() => onOpenEnquiry("training", `Inquiry regarding ${mod.title} syllabus`)}
                    className="w-full py-2 px-3 text-xs font-semibold text-neutral-200 bg-neutral-900 hover:bg-cyan-950/80 hover:text-cyan-300 border border-neutral-800 hover:border-cyan-500/50 rounded-lg transition-all text-center cursor-pointer"
                  >
                    Inquire for Syllabus
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==============================================================
          LIVE PHOTO MARQUEE STRIP (ALL 12 REAL PHOTOS)
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PhotoMarquee onPhotoClick={(photo) => setSelectedPhoto(photo)} />
      </section>

      {/* ==============================================================
          2. CORE BUSINESS ACTIVITIES (WITH EMBEDDED REAL PHOTOS)
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            What We Do
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
            Hardware Repair & Professional Training
          </h2>
          <p className="text-sm text-neutral-400">
            Commercial repairs for device owners and hands-on skill development for future technicians.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Activity A: Mobile Hardware Repair */}
          <motion.div
            {...fadeInUp}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-[#0e111a] border border-neutral-800 hover:border-cyan-500/40 transition-all shadow-md overflow-hidden flex flex-col justify-between"
          >
            {/* Real photo banner */}
            <div
              className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950 cursor-pointer group"
              onClick={() => {
                const photo = INSTITUTE_REAL_PHOTOS.find((p) => p.id === "microscope-soldering-bench");
                if (photo) setSelectedPhoto(photo);
              }}
            >
              <img
                src="/assets/aistudio/IMG20260805124148_93d30d9a.jpg"
                alt="Micro-soldering workbench at Mobile Expert Institute"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-mono text-neutral-950 bg-gradient-to-r from-amber-400 to-amber-500 px-2.5 py-1 rounded font-bold uppercase tracking-wider shadow">
                  Activity A · Repair Services
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-xs font-mono text-cyan-400">A-6 Butler Plaza Bareilly</span>
                <h4 className="text-base font-bold">Stereo Microscope Hardware Bench</h4>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-white">
                Mobile Hardware & Chip-Level Repair
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Display replacement, charging port repair, power IC rework, and dead device recovery conducted under stereo optical magnification.
              </p>

              {/* Quick tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["Display & Touch Glass", "Charging CC Board", "Motherboard Power Rails", "Dead Phone Recovery"].map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md"
                  >
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-neutral-800/80 flex items-center justify-between mt-4">
              <button
                onClick={() => onNavigate("services")}
                className="text-xs font-semibold text-neutral-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>View Full Repair Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenEnquiry("repair")}
                className="px-4 py-2 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors cursor-pointer shadow-[0_0_12px_rgba(255,183,3,0.3)]"
              >
                Enquire for Repair
              </button>
            </div>
          </motion.div>

          {/* Activity B: Mobile Repairing Training */}
          <motion.div
            {...fadeInUp}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-[#0e111a] border border-neutral-800 hover:border-cyan-500/40 transition-all shadow-md overflow-hidden flex flex-col justify-between"
          >
            {/* Real photo banner */}
            <div
              className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-950 cursor-pointer group"
              onClick={() => {
                const photo = INSTITUTE_REAL_PHOTOS.find((p) => p.id === "live-practical-demonstration");
                if (photo) setSelectedPhoto(photo);
              }}
            >
              <img
                src="/assets/aistudio/IMG20260805123017_7791e4ee.jpg"
                alt="Live student demonstration session at Mobile Expert Institute"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent" />
              <div className="absolute top-3 left-3">
                <span className="text-[10px] font-mono text-neutral-950 bg-gradient-to-r from-cyan-400 to-teal-400 px-2.5 py-1 rounded font-bold uppercase tracking-wider shadow">
                  Activity B · Practical Training
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-xs font-mono text-amber-400">Live Demonstration Session</span>
                <h4 className="text-base font-bold">Students at Workbench Observation</h4>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-neutral-950 shadow">
                  Special Offer: ₹14,990/-
                </span>
                <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
                  2 Months Course
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                  ISO 9001:2015
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                Complete 2-Month Mobile Repairing Training
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Step-by-step guidance on real smartphone motherboards. Learn mobile phone repairing in 2 months and unlock ₹50,000 to ₹60,000 monthly income potential with 100% practical workbench training.
              </p>

              {/* Quick tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {["2 Months Duration", "Fee: ₹14,990 / ₹15,000", "Live Phone Boards", "MC75T Microscope Bench", "ISO 9001:2015 Certified"].map((item, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 text-[11px] font-medium text-neutral-300 bg-neutral-900 border border-neutral-800 px-2.5 py-1 rounded-md"
                  >
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 pt-0 border-t border-neutral-800/80 flex items-center justify-between mt-4">
              <button
                onClick={() => onNavigate("training")}
                className="text-xs font-semibold text-neutral-300 hover:text-cyan-400 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <span>Explore Syllabus & Batches</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onOpenEnquiry("training")}
                className="px-4 py-2 text-xs font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:brightness-110 rounded-lg transition-all cursor-pointer shadow-[0_0_15px_rgba(0,229,255,0.35)]"
              >
                Join Next Batch
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==============================================================
          3. REAL LABORATORY EQUIPMENT SHOWCASE WITH ACTUAL PHOTOS
          ============================================================== */}
      <section className="bg-[#050608] py-16 sm:py-20 text-white border-y border-neutral-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1 font-semibold">
                Laboratory Instrumentation
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Professional Repair Instruments
              </h2>
              <p className="text-sm text-neutral-400 mt-2 max-w-xl">
                Students and technicians work with dedicated laboratory instruments, optical magnification, and calibrated heating rigs at our Bareilly center.
              </p>
            </div>
            <button
              onClick={() => onNavigate("training")}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 self-start cursor-pointer"
            >
              <span>EXPLORE STUDENT TRAINING CURRICULUM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* 4 Cards With Real Photos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Item 1: Real Microscope Soldering */}
            <motion.div
              {...fadeInUp}
              whileHover={{ y: -4 }}
              onClick={() => {
                const photo = INSTITUTE_REAL_PHOTOS.find((p) => p.id === "workbench-instruments-detail");
                if (photo) setSelectedPhoto(photo);
              }}
              className="group rounded-xl overflow-hidden bg-[#0d1017] border border-neutral-800 hover:border-cyan-500/50 transition-all cursor-pointer shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src="/assets/aistudio/IMG20260805124144_be42b497.jpg"
                  alt="Microscope and laboratory soldering rig"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] font-mono text-neutral-950 bg-cyan-400 px-2 py-0.5 rounded font-bold">
                    BABA TOOLS
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Stereo Optical Microscope
                </h4>
                <p className="text-xs text-neutral-400 line-clamp-2">
                  7X–45X continuous zoom for 0201 micro-soldering and copper track restoration.
                </p>
              </div>
            </motion.div>

            {/* Item 2: Real Jumper Precision Wire */}
            <motion.div
              {...fadeInUp}
              whileHover={{ y: -4 }}
              onClick={() => {
                const photo = INSTITUTE_REAL_PHOTOS.find((p) => p.id === "microsoldering-closeup");
                if (photo) setSelectedPhoto(photo);
              }}
              className="group rounded-xl overflow-hidden bg-[#0d1017] border border-neutral-800 hover:border-cyan-500/50 transition-all cursor-pointer shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src="/assets/aistudio/IMG20260713125747_1f51ffb2.jpg"
                  alt="Micro soldering close up"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] font-mono text-neutral-950 bg-amber-400 px-2 py-0.5 rounded font-bold">
                    0.01mm WIRE
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  SMD Micro-Tweezers & Iron
                </h4>
                <p className="text-xs text-neutral-400 line-clamp-2">
                  Ultra-fine curved titanium tweezers and PID controlled micro tips for torn PCB lines.
                </p>
              </div>
            </motion.div>

            {/* Item 3: Classroom Schematics & CPU Decker */}
            <motion.div
              {...fadeInUp}
              whileHover={{ y: -4 }}
              onClick={() => {
                const photo = INSTITUTE_REAL_PHOTOS.find((p) => p.id === "chip-level-theory-practical");
                if (photo) setSelectedPhoto(photo);
              }}
              className="group rounded-xl overflow-hidden bg-[#0d1017] border border-neutral-800 hover:border-cyan-500/50 transition-all cursor-pointer shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src="/assets/aistudio/IMG20260722121940_1c32d4d8.jpg"
                  alt="Classroom batch and schematics"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] font-mono text-white bg-rose-600 px-2 py-0.5 rounded font-bold">
                    DECKER CPU
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors">
                  Schematic & BGA Training
                </h4>
                <p className="text-xs text-neutral-400 line-clamp-2">
                  Reading bitmap schematics, impedance mapping, and CPU reballing techniques.
                </p>
              </div>
            </motion.div>

            {/* Item 4: Master Institute Bench & Wall Branding */}
            <motion.div
              {...fadeInUp}
              whileHover={{ y: -4 }}
              onClick={() => {
                const photo = INSTITUTE_REAL_PHOTOS.find((p) => p.id === "master-institute-bench");
                if (photo) setSelectedPhoto(photo);
              }}
              className="group rounded-xl overflow-hidden bg-[#0d1017] border border-neutral-800 hover:border-cyan-500/50 transition-all cursor-pointer shadow-md"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-950">
                <img
                  src="/assets/aistudio/IMG20260713132423_d2950045.jpg"
                  alt="Master Institute illuminated counter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2">
                  <span className="text-[10px] font-mono text-neutral-950 bg-cyan-400 px-2 py-0.5 rounded font-bold">
                    BUTLER PLAZA
                  </span>
                </div>
              </div>
              <div className="p-4 space-y-1">
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Master Technician Counter
                </h4>
                <p className="text-xs text-neutral-400 line-clamp-2">
                  Dual station setup with illuminated brand signage, quick testing, and admission counter.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          4. FULL INSTITUTE PHOTO GALLERY (INTERACTIVE FILTER & LIGHTBOX)
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InstituteGallery
          title="Complete Institute & Workshop Gallery"
          subtitle="All 12 authentic photographs from our actual micro-soldering stations, live training batches, and custom laptop wrapping studio at A-6 Butler Plaza, Bareilly."
          showFilter={true}
        />
      </section>

      {/* ==============================================================
          5. CUSTOM LAMINATION & SKINS (WITH REAL F1 & SPIDER-MAN WRAPS)
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="rounded-3xl bg-[#0d1017] text-white p-6 sm:p-10 lg:p-12 border border-neutral-800 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Copy */}
            <div className="lg:col-span-5 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Activity C · In-Shop Customisation
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Mobile & Laptop Lamination & Custom Skins
              </h2>
              <p className="text-sm text-neutral-300 leading-relaxed">
                Precision cut vinyl and protective lamination applied right at our Butler Plaza counter. Browse tactile 3D finishes, motorsport liveries, and anime series wraps.
              </p>

              {/* Visual Chips */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="text-xs font-bold text-white">Spider-Man 3D Wrap</div>
                  <div className="text-[11px] text-neutral-400">Embossed web ridges</div>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="text-xs font-bold text-white">Aston Martin F1 Wrap</div>
                  <div className="text-[11px] text-neutral-400">Racing green livery</div>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="text-xs font-bold text-white">Anime Skins Stock</div>
                  <div className="text-[11px] text-neutral-400">Naruto, Gojo & Sukuna</div>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-900 border border-neutral-800">
                  <div className="text-xs font-bold text-white">Laptop Full Lids</div>
                  <div className="text-[11px] text-neutral-400">Scratch & scuff shield</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate("lamination")}
                  className="px-5 py-2.5 text-xs font-bold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer shadow-[0_0_12px_rgba(255,183,3,0.3)]"
                >
                  <span>Browse Skin Catalog</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenEnquiry("lamination")}
                  className="px-4 py-2.5 text-xs font-semibold text-neutral-300 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 rounded-lg transition-colors cursor-pointer"
                >
                  Ask About Device Availability
                </button>
              </div>
            </div>

            {/* Right: Dual Real Workshop Wraps Showcase */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Photo 1: Aston Martin F1 Laptop */}
              <div
                onClick={() => {
                  const photo = INSTITUTE_REAL_PHOTOS.find((p) => p.id === "aston-martin-f1-laptop");
                  if (photo) setSelectedPhoto(photo);
                }}
                className="group relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-emerald-500 transition-all cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/assets/aistudio/IMG20261006190637_72a45085.jpg"
                  alt="Aston Martin F1 laptop wrap"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/20" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/90 border border-emerald-800 px-2 py-0.5 rounded">
                    Real Shop Wrap
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <h4 className="text-xs font-bold text-white group-hover:text-emerald-300 transition-colors">
                    Aston Martin F1 Cognizant Wrap
                  </h4>
                  <p className="text-[10px] text-neutral-300 font-mono mt-0.5">Applied at Butler Plaza</p>
                </div>
              </div>

              {/* Photo 2: Spider-Man 3D Tactile Laptop */}
              <div
                onClick={() => {
                  const photo = INSTITUTE_REAL_PHOTOS.find((p) => p.id === "spiderman-3d-laptop-wrap");
                  if (photo) setSelectedPhoto(photo);
                }}
                className="group relative rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 hover:border-red-500 transition-all cursor-pointer aspect-[4/3]"
              >
                <img
                  src="/assets/aistudio/IMG20260807211634_c042a1cb.jpg"
                  alt="Spider-Man 3D tactile laptop wrap"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/20" />
                <div className="absolute top-2.5 left-2.5">
                  <span className="text-[10px] font-mono text-red-300 bg-red-950/90 border border-red-800 px-2 py-0.5 rounded">
                    3D Tactile Lid
                  </span>
                </div>
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <h4 className="text-xs font-bold text-white group-hover:text-red-300 transition-colors">
                    Spider-Man 3D Embossed Skin
                  </h4>
                  <p className="text-[10px] text-neutral-300 font-mono mt-0.5">Applied at Butler Plaza</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ==============================================================
          6. GENUINE STUDENT REVIEW HIGHLIGHTS (COMMUTING & PRAISE)
          ============================================================== */}
      <section className="bg-[#050608] py-16 sm:py-20 border-y border-neutral-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1 font-semibold">
                Student Testimonials
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                Feedback from Practical Learners
              </h2>
              <p className="text-sm text-neutral-400 mt-2 max-w-xl">
                Students travel from Chandausi, Jayatipur, Faridpur, and Tilhar to train on real smartphone hardware.
              </p>
            </div>

            <a
              href={INSTITUTE_CONFIG.googleMaps.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-neutral-200 bg-neutral-900 border border-neutral-700 rounded-lg hover:border-cyan-400 hover:text-white shadow-xs transition-colors self-start whitespace-nowrap"
            >
              <span>Read Google Reviews</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
            </a>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STUDENT_REVIEWS.map((review) => (
              <motion.div
                key={review.id}
                {...fadeInUp}
                className="p-6 bg-[#0e111a] rounded-2xl border border-neutral-800/80 shadow-md flex flex-col justify-between space-y-4 hover:border-cyan-500/30 transition-colors"
              >
                <div className="space-y-2.5">
                  <div className="text-xs font-mono text-cyan-400 font-semibold">{review.focusArea}</div>
                  <p className="text-sm text-neutral-300 leading-relaxed italic">
                    "{review.content}"
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-semibold text-white block">{review.name}</span>
                    <span className="text-neutral-500 text-[11px]">{review.role}</span>
                  </div>
                  {review.origin && (
                    <span className="text-[11px] font-mono text-amber-300 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/60">
                      {review.origin}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==============================================================
          7. LOCATION & DIRECTIONS (BUTLER PLAZA BAREILLY)
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address Details (5 cols) */}
          <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0e111a] border border-neutral-800 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                Central Bareilly Location
              </div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                A-6 Butler Plaza, Civil Lines
              </h2>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Directly accessible from Bareilly Junction and Old Bus Stand. Walk-ins welcome for repair diagnostics, training counseling, and device lamination.
              </p>

              <div className="space-y-3 pt-2 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Address:</span>
                    <span className="text-neutral-400 leading-relaxed block mt-0.5">
                      {INSTITUTE_CONFIG.address.fullFormatted}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Activity className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-white block">Timings:</span>
                    <span className="text-neutral-400 block mt-0.5">
                      {INSTITUTE_CONFIG.timings.days}: {INSTITUTE_CONFIG.timings.hours}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center gap-3">
              <a
                href={INSTITUTE_CONFIG.googleMaps.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 to-teal-400 hover:brightness-110 rounded-lg transition-all flex items-center gap-1.5 shadow-[0_0_12px_rgba(0,229,255,0.3)] cursor-pointer"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps</span>
              </a>
              <button
                onClick={() => onNavigate("contact")}
                className="px-4 py-2.5 text-xs font-medium text-neutral-300 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 rounded-lg transition-colors cursor-pointer"
              >
                Full Directions
              </button>
            </div>
          </div>

          {/* Interactive Map Embed Card (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 min-h-[340px] relative">
            <iframe
              title="Google Maps Location - Mobile Expert Institute, Butler Plaza, Bareilly"
              src={INSTITUTE_CONFIG.googleMaps.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "340px" }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ==============================================================
          8. CALL TO ACTION BANNER (MATCHING LOGO GRADIENT)
          ============================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="p-8 sm:p-12 rounded-3xl bg-[#090b12] text-white border border-cyan-500/30 text-center space-y-6 relative overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.1)]">
          <div className="max-w-2xl mx-auto space-y-3">
            <BrandLogo variant="badge" className="mx-auto" />
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Get In Touch Today
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white text-balance">
              Start Your Training or Bring Your Device for Repair
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
              Visit our laboratory at Butler Plaza, Civil Lines, Bareilly or connect directly on WhatsApp.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <button
              onClick={() => onOpenEnquiry("training")}
              className="px-6 py-3 text-sm font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-400 hover:brightness-110 rounded-xl shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Enquire About Course</span>
              <ArrowRight className="w-4 h-4 text-neutral-950" />
            </button>

            <button
              onClick={() => onOpenEnquiry("repair")}
              className="px-6 py-3 text-sm font-semibold text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-amber-400/60 rounded-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <Wrench className="w-4 h-4 text-amber-400" />
              <span>Enquire About Repair</span>
            </button>

            <a
              href={`tel:${INSTITUTE_CONFIG.contact.phonePlaceholder}`}
              className="px-5 py-3 text-sm font-mono text-neutral-300 hover:text-amber-400 transition-colors flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call: {INSTITUTE_CONFIG.contact.phoneDisplay}</span>
            </a>
          </div>

          <p className="text-[11px] text-neutral-400 font-mono">
            A-6 Butler Plaza, Civil Lines, Bareilly · Mon–Sat 10:00 AM – 7:30 PM
          </p>
        </motion.div>
      </section>

      {/* Global Photo Lightbox Modal */}
      <PhotoLightboxModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onEnquire={(type, detail) => onOpenEnquiry(type, detail)}
      />
    </div>
  );
};
