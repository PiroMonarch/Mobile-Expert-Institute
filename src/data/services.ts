export interface RepairService {
  id: string;
  title: string;
  shortDescription: string;
  isConfirmedByLab?: boolean;
  detailedScope: string[];
  commonSymptoms: string[];
  turnaroundEstimate: string;
  pricingStatus: string;
  cautionNotice?: string;
}

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: "chip-level-motherboard",
    title: "Chip-Level Motherboard & Dead Boot Repair",
    shortDescription: "Specialized micro-soldering, short-circuit removal, and power rail diagnostics for dead, restarted, or submerged phones.",
    isConfirmedByLab: true,
    detailedScope: [
      "DC regulated power supply multi-stage current consumption analysis",
      "Diode value mapping on secondary & primary VPH/VBAT lines",
      "Short killer and thermal imaging localized component isolation",
      "Power IC (PMIC / Sub-PMIC), Charging IC, and Audio Codec replacement",
      "Cold-joint reflow and damaged solder pad restoration under 45X microscope",
    ],
    commonSymptoms: [
      "Phone completely dead and unresponsive to charger or power key",
      "Constant boot-looping on vendor logo or vibrating continuously",
      "Phone gets unusually hot near the camera or upper motherboard area",
      "Battery drains rapidly even when powered off or in airplane mode",
      "Sudden shutdown during call or high CPU load operations",
    ],
    turnaroundEstimate: "Same day to 24-48 hours depending on PCB complexity",
    pricingStatus: "Free initial multimeter diagnostic; quotation provided before soldering",
    cautionNotice: "Always bring the original device without prior unprofessional heating attempts to preserve multilayer PCB traces.",
  },
  {
    id: "display-oca-lamination",
    title: "Display, Touch Screen & OCA Glass Lamination",
    shortDescription: "Original grade folder replacement and precision optical clear adhesive (OCA) glass separation keeping your original AMOLED/LCD panel intact.",
    isConfirmedByLab: true,
    detailedScope: [
      "Heated vacuum separator glass detachment without damaging display digitizer",
      "Polarizer inspection and residue cleanup with industrial solvent",
      "Bubble-free automated OCA dry lamination and autoclave de-bubbling",
      "100% genuine OLED / AMOLED / IPS LCD original assembly replacements",
      "Frame alignment, waterproof adhesive bead sealing, and touch-sampling calibration",
    ],
    commonSymptoms: [
      "Cracked top glass but display visuals and touch response still work fine",
      "Green/purple lines, black bleeding ink patches, or flickering screen",
      "Ghost touch behavior, unresponsive touch zones, or inverted colors",
      "Display separated from phone frame due to swollen battery or fall impact",
    ],
    turnaroundEstimate: "2 to 4 hours for OCA glass change; 45-60 mins for folder swap",
    pricingStatus: "Transparent component + labor estimate according to model",
    cautionNotice: "If touch digitizer or AMOLED substrate itself is shattered internally, full display assembly replacement is required.",
  },
  {
    id: "charging-subboard-repair",
    title: "Charging Port, Sub-Board & Fast Charge Fix",
    shortDescription: "Precision micro-pin USB-C / Lightning / Micro-USB connector repairs, charging flex cables, and fast-charging protocol IC checks.",
    isConfirmedByLab: true,
    detailedScope: [
      "Hot air micro-soldering replacement of broken Type-C / Lightning receptacles",
      "VBUS 5V/9V/12V rail testing and CC pin handshake verification for QuickCharge / VOOC",
      "OVP (Over-Voltage Protection) IC and diode bypass/replacement",
      "Original microphone & bottom antenna grounding flex restoration",
    ],
    commonSymptoms: [
      "Cable needs to be angled or held tightly to start charging",
      "Slow charging warning or 'Moisture detected in charging port' prompt",
      "Phone indicates charging symbol but battery percentage does not rise (fake charging)",
      "Bottom microphone doesn't pick up voice during cellular calls",
    ],
    turnaroundEstimate: "30 to 90 minutes",
    pricingStatus: "Fixed nominal rates based on port type and sub-board integration",
  },
  {
    id: "emmc-ufs-cpu-reballing",
    title: "CPU & eMMC / UFS Memory Reballing",
    shortDescription: "Advanced BGA rework for Qualcomm Snapdragon, MediaTek Dimensity, and Exynos processors experiencing solder fatigue.",
    isConfirmedByLab: true,
    detailedScope: [
      "Mechanic/Relife low-temp bismuth lead-free solder paste balling",
      "High-precision laser stencils for BGA254, BGA221, BGA153, and CPU sandwiched arrays",
      "Underfill black/white glue removal without tearing delicate copper pads",
      "UFS 2.2 / 3.1 health check and bad block sector verification via EasyJTAG / Medusa Pro",
    ],
    commonSymptoms: [
      "Device stuck on Qualcomm EDL (9008) mode or MediaTek preloader port",
      "Camera freeze, sudden freezing, or system UI crash every few minutes",
      "Poco X3 / Note 10 series known CPU solder detachment symptoms",
      "Storage corrupt or phone boots only into fastboot / recovery without wiping",
    ],
    turnaroundEstimate: "24 to 48 hours for dual-decker CPU sandwich rework",
    pricingStatus: "Comprehensive diagnosis with pre-approval quotation",
    cautionNotice: "Requires extreme thermal precision with our Mechanic 861DW hot air station to prevent PCB warping.",
  },
  {
    id: "water-damage-cleaning",
    title: "Water Damage & Liquid Ultrasonic Recovery",
    shortDescription: "Rapid ultrasonic bath corrosion removal, PCB shielding desoldering, and component corrosion restoration.",
    isConfirmedByLab: true,
    detailedScope: [
      "Immediate battery disconnection and residual capacitance drainage",
      "Industrial ultrasonic bath cleaning using anhydrous isopropyl alcohol",
      "RF shield can desoldering to inspect hidden corrosion under capacitors and coils",
      "Corroded trace jumpering using 0.02mm insulated copper fly-wires",
    ],
    commonSymptoms: [
      "Device dropped in water, tea, or rain with immediate shutdown",
      "White, green, or chalky corrosion powder visible inside SIM tray or speaker grill",
      "Display turns on with dim backlight or no graphics",
      "Microphone, speaker, or cameras malfunction post-liquid exposure",
    ],
    turnaroundEstimate: "4 to 12 hours depending on corrosion degree",
    pricingStatus: "Cleaning fee + parts replacement if specific ICs failed",
    cautionNotice: "Do NOT place a wet phone in rice or plug it into a wall charger! Bring it immediately for professional liquid neutralization.",
  },
  {
    id: "network-audio-ic-repair",
    title: "Network, Baseband & Audio IC Troubleshooting",
    shortDescription: "Fixing 'No Service', searching signal, baseband unknown, grayed out loudspeaker, or earpiece low volume issues.",
    isConfirmedByLab: true,
    detailedScope: [
      "Baseband power management IC (BB-PMIC) clock and voltage test",
      "WTR / SDR transceiver IC diagnostic and re-soldering",
      "Audio PA (Power Amplifier) and Codec replacement",
      "Antenna switchplexer and coaxial cable RF continuity check",
    ],
    commonSymptoms: [
      "Phone shows 'No Service' or keeps 'Searching...' even with active SIM card",
      "Settings > About Phone shows 'Baseband version unknown' or IMEI null",
      "Speaker icon grayed out during voice call or other party cannot hear you",
      "Wi-Fi / Bluetooth toggle button grayed out and cannot be switched on",
    ],
    turnaroundEstimate: "Same day to 24 hours",
    pricingStatus: "Diagnostics provided prior to micro-soldering replacement",
  },
  {
    id: "battery-replacement",
    title: "Original Grade Battery & Thermal Calibration",
    shortDescription: "Certified high-density Lithium-Polymer battery replacements with cycle health check, safety insulation, and zero swelling guarantee.",
    isConfirmedByLab: true,
    detailedScope: [
      "Battery health and charge capacity analysis using digital battery tester",
      "Safe stretch-release adhesive strip removal without puncturing pouch",
      "High-grade OEM lithium battery installation with thermal pads",
      "BMS (Battery Management System) board transfer where required for battery health % display",
    ],
    commonSymptoms: [
      "Battery drains quickly from 100% down to 20% within 2-3 hours",
      "Phone suddenly powers off at 20% - 30% battery percentage",
      "Back glass or screen lifting up due to swollen battery gas pouch",
      "Phone runs sluggishly due to OS battery thermal throttling",
    ],
    turnaroundEstimate: "30 to 45 minutes",
    pricingStatus: "Flat component + installation warranty rates",
  },
];
