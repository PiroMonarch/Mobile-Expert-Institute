export interface CourseModule {
  id: string;
  title: string;
  category: "Foundations" | "Hardware & SMD" | "Advanced Diagnostics" | "Specialized Tools";
  summary: string;
  keyTopics: string[];
  equipmentUsed: string[];
  practicalFocus: string;
}

export interface CourseOverview {
  title: string;
  tagline: string;
  description: string;
  duration: string;
  fee: string;
  originalFee?: string;
  earningPotential: string;
  certification: string;
  posterImage: string;
  highlights: string[];
  placeholders: {
    feeStatus: string;
    feeNote: string;
    durationStatus: string;
    durationNote: string;
    batchSizeStatus: string;
    batchSizeNote: string;
    timingsStatus: string;
    timingsNote: string;
    admissionStatus: string;
  };
}

export const COURSE_OVERVIEW: CourseOverview = {
  title: "Complete 2-Month Mobile Phone Repairing Course",
  tagline: "Master practical mobile phone repairing in 2 months and unlock ₹50,000 to ₹60,000 monthly earning potential — special admission offer at ₹14,990/-!",
  description:
    "Comprehensive 2-month hands-on practical training program at Mobile Expert Institute, A-6 Butler Plaza, Bareilly. Master complete smartphone hardware diagnostics, SMD micro-soldering, CPU & eMMC reballing, and live PCB troubleshooting on actual customer boards.",
  duration: "2 Months (60 Days Practical Lab)",
  fee: "₹14,990 / ₹15,000",
  originalFee: "₹15,000",
  earningPotential: "₹50,000 – ₹60,000 / Month",
  certification: "ISO 9001:2015 Certified Institute",
  posterImage: "/assets/aistudio/image_7869c187.png",
  highlights: [
    "Professional Trainer Guidance with live step-by-step demonstrations",
    "100% Practical Training on real phone motherboards & live devices",
    "ISO 9001:2015 Certified Institute Course Certificate",
    "High Income Opportunity: ₹50,000 to ₹60,000 monthly earning potential",
    "Dedicated MC75T Stereo Microscopes & BABA TOOLS stations for every student",
    "Comprehensive schematic circuit tracing and short-circuit troubleshooting",
  ],
  placeholders: {
    feeStatus: "₹14,990 / ₹15,000 (Complete Course)",
    feeNote: "All-inclusive course fee covering hardware lab access, BGA stencils, consumables, practice PCBs, and ISO certification.",
    durationStatus: "2 Months (Daily Hands-On Shifts)",
    durationNote: "Intensive 60-day practical program taking you from electronic fundamentals to chip-level CPU reballing.",
    batchSizeStatus: "Limited Seats Per Batch",
    batchSizeNote: "Small batch size guarantees direct access to optical microscopes, hot air rework stations, and personal instructor doubt-clearing.",
    timingsStatus: "Morning & Evening Practical Shifts",
    timingsNote: "Designed to facilitate learners travelling from Chandausi, Jayatipur, Faridpur, Tilhar, and across Bareilly.",
    admissionStatus: "Admissions Open — Limited Seats Hurry Up!",
  },
};

export const COURSE_MODULES: CourseModule[] = [
  {
    id: "smd-rework",
    title: "SMD Soldering & Desoldering Mastery",
    category: "Hardware & SMD",
    summary:
      "Precision handling of Surface Mount Devices (SMD), micro-capacitors, resistors, diodes, and miniature circuit protection components on high-density smartphone PCBs.",
    keyTopics: [
      "SMD component identification & testing with multimeter",
      "Lead-free vs. leaded solder profiles and flux selection",
      "Micro-soldering tip techniques and zero-pad-damage desoldering",
      "Jumper wire routing on torn or severed PCB traces",
    ],
    equipmentUsed: ["Precision Micro-Soldering Iron", "Temperature-Controlled Stations", "Fine Tweezers", "Flux & Solder Wicks"],
    practicalFocus: "Live practice replacing 0201/0402 micro-components without overheating neighboring circuits.",
  },
  {
    id: "hot-air-rework",
    title: "Hot Air Rework & Thermal Profiling",
    category: "Hardware & SMD",
    summary:
      "Mastering temperature-controlled hot air heat guns to safely extract and solder multi-pin ICs, charging connectors, SIM trays, and shielded modules.",
    keyTopics: [
      "Nozzle selection, airflow speed, and temperature calibration",
      "Shield can removal without damaging underlying silicon",
      "Heat deflection shields and polyimide/kapton tape masking",
      "Safely extracting plastic-bodied connectors without warping",
    ],
    equipmentUsed: ["Digital Hot Air Rework Station", "Curved Nozzle Sets", "High-Temp Polyimide Tape", "Anti-Static PCB Vise"],
    practicalFocus: "Reflowing and swapping peripheral ICs on working test motherboards.",
  },
  {
    id: "motherboard-diagnostics",
    title: "Motherboard Circuitry & Line Tracing",
    category: "Advanced Diagnostics",
    summary:
      "Systematic troubleshooting of short circuits, power leaks, dead phones, and intermittent faults using schematic logic and test point probing.",
    keyTopics: [
      "Primary battery line (V_BAT) and system voltage (V_SYS) paths",
      "Finding short circuits with DC power supply amp consumption curves",
      "Resistance-to-ground (diode mode) impedance mapping",
      "Secondary power rails, LDO regulators, and buck converters",
    ],
    equipmentUsed: ["Regulated DC Power Supply (30V/5A)", "High-Precision Digital Multimeter", "Logic Line Schematics", "Short Killer Tools"],
    practicalFocus: "Tracing a 'dead' phone from battery connector to PMIC to isolate the faulty component.",
  },
  {
    id: "cpu-bga-repair",
    title: "CPU & BGA Chip Reballing Techniques",
    category: "Advanced Diagnostics",
    summary:
      "Advanced semiconductor rework: Ball Grid Array (BGA) chip desoldering, pad cleaning, laser stencil reballing, and precise reflow alignment.",
    keyTopics: [
      "BGA solder paste handling, viscosity, and ball sizes",
      "Universal and model-specific precision magnetic/steel stencils",
      "Underfilled (black/white resin) chip extraction without tearing pads",
      "RAM-on-CPU sandwich layer desoldering techniques (theory & demo)",
    ],
    equipmentUsed: ["BGA Reballing Stencils", "Solder Paste (183°C / 138°C)", "Microscope Platform", "Thermocouple Monitors"],
    practicalFocus: "Manual reballing of power ICs and baseband chips using stencils and low-temperature paste.",
  },
  {
    id: "microscope-inspection",
    title: "Stereo Microscope Laboratory Inspection",
    category: "Specialized Tools",
    summary:
      "Developing optical inspection habits under continuous optical zoom: identifying hairline board fractures, cold solder joints, water corrosion, and cracked balls.",
    keyTopics: [
      "Stereo trinocular microscope setup, focal length, and ring light control",
      "Liquid damage diagnosis, ultrasonic cleaning, and corrosion neutralization",
      "Inspecting PCB vias and multi-layer board trace ruptures",
      "Micro-soldering under magnification with ergonomic hand stabilization",
    ],
    equipmentUsed: ["Trinocular Stereo Zoom Microscope (7x–45x)", "Adjustable LED Ring Light", "Ultrasonic PCB Cleaner", "PCB Preheater"],
    practicalFocus: "Repairing sub-millimeter copper trace breaks under 20x magnification.",
  },
  {
    id: "peripheral-repairs",
    title: "Display, Charging, Audio & Sub-Board Repair",
    category: "Foundations",
    summary:
      "Comprehensive replacement and troubleshooting of user-facing components across Android and iOS smartphone architectures.",
    keyTopics: [
      "Screen separation, frame clean-up, OCA adhesive removal, and lamination",
      "Type-C & Lightning pin inspection, fast-charge protocol negotiation issues",
      "Microphone, earpiece, loudspeaker, and vibration motor circuits",
      "Network RF antenna coaxial cables and signal drop diagnosis",
    ],
    equipmentUsed: ["LCD Separator Machine", "Bubble Remover Chamber", "Type-C Power Testers", "Opening Toolkits & Spudgers"],
    practicalFocus: "Complete device teardown, assembly, and modular sub-board diagnostics.",
  },
];

export interface FAQItem {
  question: string;
  answer: string;
  category: "Admissions" | "Practical Work" | "Equipment";
}

export const COURSE_FAQS: FAQItem[] = [
  {
    category: "Practical Work",
    question: "Do students get to practice on real mobile phones and live circuit boards?",
    answer:
      "Yes. The core philosophy of Mobile Expert Institute is practical learning. Students work on actual smartphone PCBs, scrap motherboards, and test units with real multimeters, microscopes, and hot air stations—not just theoretical chalkboard lectures.",
  },
  {
    category: "Admissions",
    question: "I am a complete beginner with no prior electronics background. Can I join?",
    answer:
      "Yes. The training begins from fundamental mobile electronics (voltage, current, resistance, basic SMD components) before advancing to complex schematic tracing and IC rework. Step-by-step guidance is provided for beginners.",
  },
  {
    category: "Admissions",
    question: "Are students accepted from outside Bareilly (e.g., Chandausi, Faridpur, Tilhar)?",
    answer:
      "Yes. We regularly welcome students travelling from Chandausi, Jayatipur, Faridpur, Tilhar, and across the Rohilkhand region. Butler Plaza in Civil Lines is conveniently connected to major transport links.",
  },
  {
    category: "Equipment",
    question: "What repair equipment will I learn to operate?",
    answer:
      "You will receive hands-on instruction on digital multimeters, DC regulated power supplies, hot air SMD rework stations, micro-soldering irons, stereo zoom microscopes, LCD separators, and BGA reballing stencils.",
  },
  {
    category: "Practical Work",
    question: "How are doubts and difficult repair scenarios handled during training?",
    answer:
      "Every practical session includes dedicated doubt-clearing time. Instructors demonstrate faulty scenarios step-by-step on live units so students understand the diagnostic reasoning rather than memorizing blind fixes.",
  },
  {
    category: "Admissions",
    question: "How can I confirm batch timings, fees, and seat availability?",
    answer:
      "Visit our institute at A-6 Butler Plaza, Civil Lines, Bareilly, or submit an enquiry through the website / WhatsApp to receive exact batch schedules and current seat availability.",
  },
];
