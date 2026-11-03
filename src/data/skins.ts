export type SkinCategory =
  | "all"
  | "matte"
  | "simple"
  | "3d"
  | "anime"
  | "mobile-back"
  | "screen-lamination"
  | "laptop-skins";

export interface SkinItem {
  id: string;
  name: string;
  category: "matte" | "simple" | "3d" | "anime" | "mobile-back" | "screen-lamination" | "laptop-skins";
  deviceType: "Mobile" | "Laptop" | "Universal";
  finishType: string;
  description: string;
  features: string[];
  textureBadge: string;
  accentColor: string;
  availabilityNote: string;
  imagePath?: string;
}

export const SKIN_CATEGORIES = [
  { id: "all", label: "All Designs" },
  { id: "3d", label: "3D Textured" },
  { id: "laptop-skins", label: "Laptop Skins" },
  { id: "matte", label: "Matte Finishes" },
  { id: "simple", label: "Simple & Minimal" },
  { id: "anime", label: "Anime Themed" },
  { id: "mobile-back", label: "Mobile Back Skins" },
  { id: "screen-lamination", label: "Screen Lamination" },
] as const;

export const SKIN_CATALOG: SkinItem[] = [
  {
    id: "spiderman-3d-laptop-custom",
    name: "Spider-Man 3D Tactile Laptop Wrap",
    category: "3d",
    deviceType: "Laptop",
    finishType: "Custom 3D Tactile Relief Wrap",
    description: "Actual workshop showcase: Custom 3D embossed Spider-Man textured wrap with raised web ridges and iconic emblem, hand-applied at our Butler Plaza workshop.",
    features: [
      "Real in-store applied custom laptop skin",
      "Deep tactile 3D relief webbing pattern",
      "Heavy duty lid scratch & scuff protection",
      "Laser-aligned camera and logo trim",
    ],
    textureBadge: "Real Workshop Wrap",
    accentColor: "#dc2626",
    availabilityNote: "Showcasing custom work applied in our shop. Enquire with your laptop make & model for sizing.",
    imagePath: "/assets/aistudio/IMG20260807211634_c042a1cb.jpg",
  },
  {
    id: "aston-martin-f1-laptop-custom",
    name: "Aston Martin F1 Cognizant Racing Laptop Wrap",
    category: "laptop-skins",
    deviceType: "Laptop",
    finishType: "Motorsport Livery Vinyl Wrap",
    description: "Actual in-house custom wrap: Aston Martin Formula 1 livery in British Racing Green with Cognizant, Peroni, and sponsor decals, precision aligned and wrapped edge-to-edge.",
    features: [
      "Real custom laptop wrap crafted in Bareilly",
      "Aston Martin Formula 1 Cognizant livery",
      "Bubble-free heat-sealed edge finishing",
      "Available for all laptop sizes and models",
    ],
    textureBadge: "Real Workshop Wrap",
    accentColor: "#00594f",
    availabilityNote: "Custom crafted in our Butler Plaza shop. Bring your laptop for custom fitting.",
    imagePath: "/assets/aistudio/IMG20261006190637_72a45085.jpg",
  },
  {
    id: "anime-characters-gola-stock",
    name: "Naruto, Gojo & Anime Mobile Skins",
    category: "anime",
    deviceType: "Mobile",
    finishType: "HD Graphic & 3D Textured Skin",
    description: "In-shop authentic collection: Popular anime series including Naruto, Jujutsu Kaisen Gojo & Sukuna, Dragon Ball, and superhero graphics precision-cut for smartphones.",
    features: [
      "Authentic stock ready at Butler Plaza counter",
      "High saturation UV ink on scratchproof film",
      "Camera island and lens border alignment",
      "Residue-free removal guarantee",
    ],
    textureBadge: "Real In-Shop Stock",
    accentColor: "#ea580c",
    availabilityNote: "Stocked at our Butler Plaza shop counter. Walk-in and select from dozens of anime designs.",
    imagePath: "/assets/aistudio/IMG20260710215819_131b418d.jpg",
  },
  {
    id: "shop-counter-display-skins",
    name: "Porsche 911 GT3 RS & Custom Showcase Wraps",
    category: "3d",
    deviceType: "Mobile",
    finishType: "Premium Automotive & Texture Vinyl",
    description: "Display skins showcase from our workshop counter: Porsche GT3 RS motorsport art, 3D textures, and lamination rolls with live plotter cutting.",
    features: [
      "Showcased live at our Butler Plaza counter",
      "Automotive GT3 RS and high-detail graphics",
      "Cut live on computerized plotter",
      "Bubble-free installation service",
    ],
    textureBadge: "Workshop Counter",
    accentColor: "#2563eb",
    availabilityNote: "Samples on display in our shop. Bring your phone for on-the-spot application.",
    imagePath: "/assets/aistudio/IMG20260710215950_6688489d.jpg",
  },
  {
    id: "ewell-gola-retail-stock",
    name: "EWELL Gola Premium Mobile Skins Stock",
    category: "mobile-back",
    deviceType: "Mobile",
    finishType: "Branded Protective Mobile Skin",
    description: "Genuine EWELL Gola packaged skins in stock at Mobile Expert Institute. High-tensile vinyl engineered for grip, scratch defense, and clean removal.",
    features: [
      "Genuine branded packaging at Butler Plaza",
      "Tough anti-abrasion protective surface",
      "Wide compatibility across phone brands",
      "Zero sticky residue upon peel",
    ],
    textureBadge: "In-Shop Stock",
    accentColor: "#4f46e5",
    availabilityNote: "Available in stock at our A-6 Butler Plaza shop counter.",
    imagePath: "/assets/aistudio/IMG20260710215827_150ff852.jpg",
  },
  {
    id: "stealth-matte-black",
    name: "Stealth Obsidian Matte",
    category: "matte",
    deviceType: "Mobile",
    finishType: "Ultra-Matte Anti-Glare",
    description: "Deep non-reflective matte black wrap that eliminates fingerprint smudges and enhances hand grip.",
    features: ["Zero fingerprint oil retention", "Laser-cut camera bezel ring", "Full frame curvature wrapping", "Scratch-resistant vinyl"],
    textureBadge: "Micro-Frosted Matte",
    accentColor: "#1e293b",
    availabilityNote: "Available for cutting on most smartphone models. Enquire for your exact model.",
  },
  {
    id: "carbon-fiber-3d",
    name: "Cyber Carbon 3D Weave",
    category: "3d",
    deviceType: "Mobile",
    finishType: "Embossed Tactile 3D",
    description: "Multi-dimensional woven carbon texture that catches light diagonally with genuine tactile ridges.",
    features: ["Physical 3D woven texture", "Heat-conforming edges", "High impact resistance against keys", "Residue-free removal"],
    textureBadge: "Tactile Carbon 3D",
    accentColor: "#0f172a",
    availabilityNote: "Stocked in standard roll formats. Precision cut in-store.",
  },
  {
    id: "minimal-geometric-lines",
    name: "Architectural Circuit Minimal",
    category: "simple",
    deviceType: "Mobile",
    finishType: "Subtle Satin Lines",
    description: "Clean geometric technical linework over a graphite neutral base. Sophisticated and understated.",
    features: ["Precision vector lines", "Subtle satin reflection", "Slim profile fits inside clear cases", "Anti-peel edge adhesive"],
    textureBadge: "Satin Vector",
    accentColor: "#334155",
    availabilityNote: "Available in multiple shades upon confirmation at Butler Plaza.",
  },
  {
    id: "anime-shinobi-shadow",
    name: "Shadow Shinobi Anime Series",
    category: "anime",
    deviceType: "Mobile",
    finishType: "High-Definition Matte Print",
    description: "High-contrast Japanese anime artwork with vivid ink saturation, protected by an anti-scratch clear top coat.",
    features: ["UV-cured pigment inks", "No color fade under sunlight", "Matte top laminate prevents glare", "High-clarity illustration"],
    textureBadge: "HD Graphic Wrap",
    accentColor: "#475569",
    availabilityNote: "Sample design shown. Various popular anime themes available subject to workshop stock.",
  },
  {
    id: "honeycomb-matrix-3d",
    name: "Titanium Honeycomb 3D Matrix",
    category: "3d",
    deviceType: "Mobile",
    finishType: "Deep Hexagonal Emboss",
    description: "Hexagonal tactile cells giving devices a rugged, industrial protective shell with superior grip.",
    features: ["Deep hexagonal embossed grip", "Drop-shock cushioning vinyl", "Air-release channels for zero bubbles", "Precision port cutouts"],
    textureBadge: "Hex 3D Grip",
    accentColor: "#1e1e24",
    availabilityNote: "Popular custom cut. Bring your device to the shop to check fitting.",
  },
  {
    id: "screen-guard-matte-hydrogel",
    name: "Matte Anti-Glare Screen Lamination",
    category: "screen-lamination",
    deviceType: "Mobile",
    finishType: "Hydrogel Self-Healing",
    description: "Flexible multi-layer hydrogel film that softens harsh sunlight reflections while providing self-healing surface protection.",
    features: ["Anti-glare paper-feel finish", "Self-heals minor scratches within 24h", "Full edge-to-edge curved screen adhesion", "Smooth touch sensitivity"],
    textureBadge: "Hydrogel Protective",
    accentColor: "#2563eb",
    availabilityNote: "Cut on-demand via computerized plotter for curved and flat displays.",
  },
  {
    id: "laptop-brushed-metallic",
    name: "Brushed Gunmetal Laptop Wrap",
    category: "laptop-skins",
    deviceType: "Laptop",
    finishType: "Brushed Aluminum Texture",
    description: "Premium architectural wrap for laptop top lids and palm rests, shielding anodized aluminum from dings.",
    features: ["Horizontally brushed metallic feel", "Shields against backpack scuffs", "Custom trimmed to laptop chassis", "Thermal heat dissipation safe"],
    textureBadge: "Brushed Metal",
    accentColor: "#4b5563",
    availabilityNote: "Available for 13-inch, 14-inch, 15.6-inch, and 16-inch laptops.",
  },
  {
    id: "laptop-minimal-leather-grain",
    name: "Nordic Leather Grain Laptop Skin",
    category: "laptop-skins",
    deviceType: "Laptop",
    finishType: "Tactile Vegan Grain",
    description: "Sophisticated textured grain wrap designed for workplace and professional laptop presentation.",
    features: ["Warm organic leather feel", "Repels coffee drips and dust", "Covers existing lid scratches neatly", "Clean peel removal guarantee"],
    textureBadge: "Textured Grain",
    accentColor: "#27272a",
    availabilityNote: "Enquire with your laptop make and model for sizing.",
  },
  {
    id: "anime-mecha-titan",
    name: "Mecha Titan Cyber Series",
    category: "anime",
    deviceType: "Mobile",
    finishType: "Cyber Graphic Overlay",
    description: "Futuristic mecha robot mechanical detailing combined with manga aesthetic linework.",
    features: ["Vibrant contrast printing", "Silky smooth satin finish", "Precision camera island cutout", "Protects back glass from cracking"],
    textureBadge: "Manga Cyber",
    accentColor: "#3b82f6",
    availabilityNote: "Subject to current sheet stock. Contact on WhatsApp to preview available variants.",
  },
];
