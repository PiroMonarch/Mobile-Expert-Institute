/**
 * Central Image & Visual Asset Configuration
 *
 * Real institute photographs from Mobile Expert Institute,
 * A-6 Butler Plaza, Civil Lines, Bareilly, Uttar Pradesh – 243001.
 */

export type VisualCategory =
  | "smd"
  | "hot-air"
  | "cpu-motherboard"
  | "cpu-bga"
  | "motherboard"
  | "diagnostics"
  | "training"
  | "classroom"
  | "skins"
  | "hero";

export interface VisualAsset {
  id: string;
  title: string;
  alt: string;
  category: VisualCategory;
  caption: string;
  specs: { label: string; value: string }[];
  customImagePath?: string;
}

export interface InstituteRealPhoto {
  id: string;
  url: string;
  title: string;
  category: "Repair Bench" | "Live Demonstration" | "Classroom Batch" | "Custom Lamination" | "Instruments Setup";
  caption: string;
  description: string;
  location: string;
  tag: string;
  features: string[];
}

export const INSTITUTE_REAL_PHOTOS: InstituteRealPhoto[] = [
  {
    id: "master-institute-bench",
    url: "/assets/aistudio/IMG20260713132423_d2950045.jpg",
    title: "Master Laboratory & Illuminated Wall Signage",
    category: "Repair Bench",
    caption: "Illuminated Mobile Expert Institute branding, multi-scope repair stations, and Double Decker CPU syllabus at Butler Plaza",
    description: "The primary electronics repair and instruction counter at A-6 Butler Plaza, equipped with stereo optical microscopes, digital power testing, and direct contact numbers.",
    location: "A-6 Butler Plaza, Bareilly",
    tag: "Master Laboratory Counter",
    features: ["Illuminated Wall Signage", "Dual Stereo Microscope Setup", "Double Decker CPU Syllabus", "Bareilly Workshop"],
  },
  {
    id: "microscope-soldering-bench",
    url: "/assets/aistudio/IMG20260805124148_93d30d9a.jpg",
    title: "Optical Microscope Micro-Soldering Station",
    category: "Repair Bench",
    caption: "Micro-soldering under BABA TOOLS AM-102 stereo optics with glowing Mobile Expert Institute signage",
    description: "Our dedicated technician bench configured with stereo optical magnification, temperature-governed micro-soldering iron, and anti-static ESD grounding at Butler Plaza.",
    location: "A-6 Butler Plaza, Bareilly",
    tag: "Live Hardware Repair",
    features: ["BABA TOOLS AM-102 Stereo Optics", "Fine-tip Micro Soldering Iron", "Live Motherboard Rework", "Bareilly Workshop"],
  },
  {
    id: "microsoldering-closeup",
    url: "/assets/aistudio/IMG20260713125747_1f51ffb2.jpg",
    title: "SMD Micro-Soldering & Jumper Precision",
    category: "Repair Bench",
    caption: "Ultra-fine curved tweezers and temperature-controlled soldering iron restoring logic board traces on red heat mat",
    description: "Close-up perspective of microscopic trace repair, jumper wiring, and fine-pitch SMD component replacement conducted under stereo microscope.",
    location: "A-6 Butler Plaza, Bareilly",
    tag: "Micro-Soldering Rework",
    features: ["Ultra-Fine Curved Tweezers", "Micro-Jumper Trace Repair", "Anti-Static Heat Mat", "Logic Board Rework"],
  },
  {
    id: "live-practical-demonstration",
    url: "/assets/aistudio/IMG20260805123017_7791e4ee.jpg",
    title: "Live Workbench Demonstration Session",
    category: "Live Demonstration",
    caption: "Instructor walking students step-by-step through logic board diagnostics on live smartphone hardware",
    description: "Students gather around the main technician bench during daily live demonstration sessions, observing real fault detection and multimeter testing.",
    location: "A-6 Butler Plaza, Bareilly",
    tag: "Practical Demonstration",
    features: ["Real Smartphone Hardware", "Small Batch Close-up Observation", "Interactive Step-by-Step Guidance", "Immediate Doubt Clearing"],
  },
  {
    id: "aston-martin-f1-laptop",
    url: "/assets/aistudio/IMG20261006190637_72a45085.jpg",
    title: "Aston Martin F1 Racing Custom Laptop Wrap",
    category: "Custom Lamination",
    caption: "Custom British Racing Green laptop top wrap with Cognizant, Peroni, and sponsor decals cut to exact millimeter tolerances",
    description: "Showcasing our in-house custom vinyl wrapping for laptops, featuring motorsport livery, bubble-free application, and edge-to-edge finish.",
    location: "A-6 Butler Plaza, Bareilly",
    tag: "Motorsport Laptop Wrap",
    features: ["Aston Martin Cognizant Livery", "Bubble-Free Hand Application", "Precise Hinge & Edge Alignment", "Applied in Bareilly Workshop"],
  },
  {
    id: "spiderman-3d-laptop-wrap",
    url: "/assets/aistudio/IMG20260807211634_c042a1cb.jpg",
    title: "Custom 3D Tactile Spider-Man Laptop Wrap",
    category: "Custom Lamination",
    caption: "Custom 3D embossed web texture and metallic emblem wrap applied in our Butler Plaza studio",
    description: "Showcasing high-precision plotter cutting and flawless hand application for laptop top lids, providing scratch protection and bold tactile design.",
    location: "A-6 Butler Plaza, Bareilly",
    tag: "Custom Device Wrap",
    features: ["Deep 3D Tactile Web Ridges", "Edge-to-Edge Bezel Alignment", "Zero-Residue Removal Vinyl", "Applied in Bareilly Workshop"],
  },
  {
    id: "skin-counter-display",
    url: "/assets/aistudio/IMG20260710215950_6688489d.jpg",
    title: "Lamination Counter & Material Stock Rolls",
    category: "Custom Lamination",
    caption: "Physical shop counter with film rolls, heat gun, tools, Porsche GT3 RS, and Spider-Man sample skins",
    description: "The dedicated device customization counter at Butler Plaza with hundreds of textured vinyl sheets, heat contouring station, and live showcase boards.",
    location: "A-6 Butler Plaza, Bareilly",
    tag: "Shop Customization Counter",
    features: ["Premium Film Roll Stock", "Heat Gun Contouring Setup", "Porsche & Superhero Samples", "Direct Walk-In Service"],
  },
  {
    id: "anime-skins-stock",
    url: "/assets/aistudio/IMG20260710215819_131b418d.jpg",
    title: "Anime & 3D Embossed Mobile Skins Selection",
    category: "Custom Lamination",
    caption: "Authentic stock of Naruto, Jujutsu Kaisen Gojo & Sukuna, Dragon Ball, and textured automotive mobile skins",
    description: "In-shop flat lay of popular anime and high-definition mobile back skins precision-cut for all major iPhone, Samsung, and OnePlus models.",
    location: "A-6 Butler Plaza, Bareilly",
    tag: "Anime Mobile Skins",
    features: ["Naruto, Gojo & Sukuna Art", "3D Textured Finishes", "Precision Camera Cutouts", "Available at Shop Counter"],
  },
  {
    id: "ewell-gola-packaging",
    url: "/assets/aistudio/IMG20260710215827_150ff852.jpg",
    title: "EWELL Gola Genuine Mobile Skins Packaging",
    category: "Custom Lamination",
    caption: "Genuine retail packaging cards of high-grade device skins available at Mobile Expert Institute",
    description: "Verified branded mobile skin wraps providing long-lasting adhesive grip without leaving gummy residue on customer smartphones upon removal.",
    location: "A-6 Butler Plaza, Bareilly",
    tag: "Retail Skins Packaging",
    features: ["EWELL Gola Branded Stock", "Anti-Scratch Tough Vinyl", "Universal Model Availability", "In-Stock at Butler Plaza"],
  },
  {
    id: "chip-level-theory-practical",
    url: "/assets/aistudio/IMG20260722121940_1c32d4d8.jpg",
    title: "Chip-Level & CPU Architecture Batch",
    category: "Classroom Batch",
    caption: "Dedicated classroom batch analyzing motherboard schematics, Decker CPU, and power lines",
    description: "Students seated at study desks reviewing real circuitry diagrams before moving to individual hands-on soldering benches for live application.",
    location: "A-6 Butler Plaza, Bareilly",
    tag: "Hands-On Training",
    features: ["Decker CPU & Chip-Level Syllabus", "Schematic Diagram Reading", "Students from Chandausi, Faridpur & Tilhar", "Structured Learning Pace"],
  },
  {
    id: "workbench-instruments-detail",
    url: "/assets/aistudio/IMG20260805124144_be42b497.jpg",
    title: "Laboratory Equipment & Magnification Rig",
    category: "Instruments Setup",
    caption: "High-magnification stereo microscope, tweezers, solder flux, PCB stencils, and testing apparatus",
    description: "Close-up perspective of the precision instrumentation provided at our Butler Plaza repair laboratory, used for both customer servicing and student instruction.",
    location: "A-6 Butler Plaza, Bareilly",
    tag: "Laboratory Instruments",
    features: ["BABA TOOLS Microscope Rig", "Precision Titanium Tweezers", "BGA Stencils & Solder Flux", "Calibrated Heating Instruments"],
  },
  {
    id: "microsoldering-track-repair",
    url: "/assets/aistudio/IMG20260713125747__1__1f51ffb2.jpg",
    title: "Precision Track & Jumper Wire Rework",
    category: "Repair Bench",
    caption: "Micro-soldering jumper wires to restore torn logic board copper traces on thermal silicone work mat",
    description: "Direct macro observation of damaged copper trace restoration and micro-jumper installation on a customer smartphone motherboard at our Bareilly bench.",
    location: "A-6 Butler Plaza, Bareilly",
    tag: "PCB Jumper Restoration",
    features: ["0.01mm Insulated Jumper Wire", "UV Curing Mask", "Fine-Pitch Soldering Tip", "Real Smartphone Logic Board"],
  },
];

export const VISUAL_ASSETS: Record<string, VisualAsset> = {
  heroWorkbench: {
    id: "heroWorkbench",
    title: "Electronics Diagnostic Workbench",
    alt: "Mobile Expert Institute technician micro-soldering smartphone logic board under BABA TOOLS AM-102 stereo microscope at Butler Plaza Bareilly",
    category: "hero",
    caption: "Micro-soldering and SMD repair bench configured for mobile logic board restoration",
    customImagePath: "/assets/aistudio/IMG20260805124148_93d30d9a.jpg",
    specs: [
      { label: "Station Type", value: "Anti-Static Clean Workbench" },
      { label: "Optics", value: "BABA TOOLS AM-102 Stereo 7X–45X" },
      { label: "Thermal Rework", value: "Digital PID Controlled" },
      { label: "Location", value: "A-6 Butler Plaza, Bareilly" },
    ],
  },
  smdRework: {
    id: "smdRework",
    title: "SMD Component Soldering & Desoldering",
    alt: "Laboratory micro-soldering instruments, BABA TOOLS microscope, soldering iron, and PCB repair station at Butler Plaza",
    category: "smd",
    caption: "Precision instrumentation and component replacement under high optical magnification",
    customImagePath: "/assets/aistudio/IMG20260805124144_be42b497.jpg",
    specs: [
      { label: "Package Sizes", value: "0201, 0402, 0603, QFN" },
      { label: "Temperature Range", value: "200°C – 480°C PID" },
      { label: "Instruments", value: "Stereo Scope, Flux, Micro-Tweezers" },
    ],
  },
  trainingDemonstration: {
    id: "trainingDemonstration",
    title: "Live Practical Training Demonstration",
    alt: "Instructor demonstrating live mobile repair and circuit tracing to students around the workbench at Mobile Expert Institute",
    category: "training",
    caption: "Hands-on demonstration on actual smartphone motherboards at Butler Plaza Bareilly",
    customImagePath: "/assets/aistudio/IMG20260805123017_7791e4ee.jpg",
    specs: [
      { label: "Format", value: "Live Bench Demonstration" },
      { label: "Hardware", value: "Actual Smartphone Motherboards" },
      { label: "Batch Style", value: "Close-up Interactive Observation" },
      { label: "Location", value: "A-6 Butler Plaza, Bareilly" },
    ],
  },
  trainingBatch: {
    id: "trainingBatch",
    title: "Practical Batch Session & Schematic Learning",
    alt: "Students in practical batch session studying chip-level CPU schematics and logic board repair at Mobile Expert Institute",
    category: "training",
    caption: "Small-batch interactive training on circuitry diagrams and component diagnostics",
    customImagePath: "/assets/aistudio/IMG20260722121940_1c32d4d8.jpg",
    specs: [
      { label: "Course Level", value: "Chip-Level & Decker CPU" },
      { label: "Curriculum", value: "Schematics, Fault Tracing, Soldering" },
      { label: "Student Origin", value: "Bareilly, Chandausi, Faridpur, Tilhar" },
    ],
  },
  hotAirStation: {
    id: "hotAirStation",
    title: "Hot Air Rework & Thermal Profiling",
    alt: "Digital hot air rework station with nozzle extracting shielded IC on smartphone PCB",
    category: "hot-air",
    caption: "Controlled airflow and calibrated heat profiling for safely lifting multi-pin chips",
    specs: [
      { label: "Airflow Control", value: "120 L/min Brushless Turbine" },
      { label: "Heat Shielding", value: "Polyimide / Kapton Masking" },
      { label: "Target ICs", value: "Power IC, Audio Codec, Connectors" },
    ],
  },
  cpuMotherboard: {
    id: "cpuMotherboard",
    title: "CPU & BGA Semiconductor Reballing",
    alt: "Macro view of smartphone CPU chip and laser-cut steel reballing stencil with micro solder spheres",
    category: "cpu-motherboard",
    caption: "High-density Ball Grid Array (BGA) reballing and precision logic board pad restoration",
    specs: [
      { label: "Ball Pitch", value: "0.35mm – 0.5mm BGA" },
      { label: "Paste Alloy", value: "Sn63/Pb37 & Low-Temp 138°C" },
      { label: "Alignment", value: "Direct Optical Stencil Match" },
    ],
  },
  diagnosticsWorkbench: {
    id: "diagnosticsWorkbench",
    title: "DC Regulated Power Supply & Multimeter Tracing",
    alt: "Digital DC power supply 4.2V current consumption readouts and high-precision multimeter probing test points",
    category: "diagnostics",
    caption: "Tracing current leakages, short circuits, and secondary rail drops on non-booting devices",
    specs: [
      { label: "DC Range", value: "0–30V / 0–5A High-Res (1mA)" },
      { label: "Multimeter Mode", value: "Diode Drop Impedance Mapping" },
      { label: "Diagnostic Target", value: "Dead Phone & Boot Leakage" },
    ],
  },
  laptopSkinCustom: {
    id: "laptopSkinCustom",
    title: "Spider-Man 3D Custom Laptop Skin",
    alt: "Custom 3D embossed Spider-Man textured laptop skin wrap applied at Mobile Expert Institute Butler Plaza",
    category: "skins",
    caption: "Real in-house workshop result: 3D embossed tactile laptop wrap",
    customImagePath: "/assets/aistudio/IMG20260807211634_c042a1cb.jpg",
    specs: [
      { label: "Design", value: "Spider-Man 3D Tactile Relief" },
      { label: "Application", value: "Full Top Lid & Edge Trim" },
      { label: "Protection", value: "Scratch & Scuff Resistant" },
      { label: "Applied At", value: "Butler Plaza Studio, Bareilly" },
    ],
  },
  deviceSkins: {
    id: "deviceSkins",
    title: "Precision Device Skins & Lamination Studio",
    alt: "Textured matte, 3D carbon fiber, and anime-themed skin wraps cut for smartphones and laptops",
    category: "skins",
    caption: "Computerized precision plotter cutting and hand-applied device lamination finishes",
    specs: [
      { label: "Materials", value: "Cast Vinyl & Self-Healing Film" },
      { label: "Finishes", value: "Matte, 3D Carbon, Anime, Minimal" },
      { label: "Coverage", value: "Smartphones, Tablets & Laptops" },
    ],
  },
};

export const BRAND_ASSETS = {
  logo: "/assets/brand/logo.png",
  logoMark: "/assets/brand/logo-mark.png",
  logoCyanRing: "/assets/brand/logo-cyan-ring.png",
  sourceBanner: "/assets/aistudio/MOBILE_EXPERT_INSTITUTE__1__195f65a2.jpg",
};

export interface HardwareModuleCard {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  highlight: string;
  topics: string[];
}

export const OFFICIAL_HARDWARE_MODULES: HardwareModuleCard[] = [
  {
    id: "cpu-mediatek",
    title: "CPU MEDIATECH (MTK)",
    subtitle: "Micro-Architecture & BGA Reballing",
    imageUrl: "/assets/hardware/card-cpu-mediatek.png",
    highlight: "MT6176V & MT6737V Hands-On",
    topics: ["BGA pad micro-soldering", "Stencil alignment", "0.35mm solder balls", "Thermal profiling"],
  },
  {
    id: "emmc-alliance",
    title: "eMMC ALLIANCE IC",
    subtitle: "Memory Chip Programming & ISP",
    imageUrl: "/assets/hardware/card-emmc-alliance.png",
    highlight: "ISP Pinout & Dead Boot Recovery",
    topics: ["eMMC reballing & replacement", "ISP jumper connections", "Boot partition flash", "Health diagnostics"],
  },
  {
    id: "microscope-mechanic",
    title: "MICROSCOPE MECHANIC MC75T",
    subtitle: "Trinocular Optical Workstation",
    imageUrl: "/assets/hardware/card-microscope.png",
    highlight: "Continuous Zoom 7X–45X Magnification",
    topics: ["Stereo depth perception", "Micro-trace reconstruction", "0.01mm jumper wiring", "Underfill resin removal"],
  },
  {
    id: "motherboard-mi5a",
    title: "MI 5A Mother Board",
    subtitle: "Schematic Tracing & PCB Diagnostics",
    imageUrl: "/assets/hardware/card-motherboard.png",
    highlight: "Live Production Board Diagnostics",
    topics: ["Primary/Secondary VPH rail mapping", "Short circuit isolation", "Thermal camera diagnostics", "Connector micro-repair"],
  },
];
