/**
 * Central Configuration for Mobile Expert Institute
 * A-6, Butler Plaza, Civil Lines, Bareilly, Uttar Pradesh – 243001, India.
 *
 * Dedicated to Professional Mobile Phone Repairing Training & Technical Education.
 */

export interface InstituteConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheading: string;
  supportingDescription: string;
  address: {
    shopNo: string;
    complex: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    fullFormatted: string;
    landmark: string;
  };
  contact: {
    primaryPhone: string;
    primaryPhoneRaw: string;
    secondaryPhone: string;
    secondaryPhoneRaw: string;
    phonePlaceholder: string;
    phoneDisplay: string;
    whatsappNumber: string; // international digits format e.g. 919876543210
    whatsappDisplay: string;
    emailPlaceholder: string;
  };
  timings: {
    days: string;
    hours: string;
    labSessions: string;
    note: string;
  };
  googleMaps: {
    embedUrl: string;
    directionsUrl: string;
    reviewsUrl: string;
  };
  travelHubs: Array<{
    city: string;
    routeNote: string;
    distanceApprox: string;
  }>;
}

export const INSTITUTE_CONFIG: InstituteConfig = {
  name: "Mobile Expert Institute",
  tagline: "Learn Mobile Repairing Through Real Practical Training.",
  heroHeadline: "Learn the Technology Behind Every Repair.",
  heroSubheading:
    "Explore practical mobile repairing training, motherboard diagnosis and advanced electronics repair techniques at Mobile Expert Institute, Bareilly.",
  supportingDescription:
    "Build practical mobile repairing skills through live demonstrations, technical equipment and guided hands-on learning at Mobile Expert Institute, Bareilly.",
  address: {
    shopNo: "A-6",
    complex: "Butler Plaza",
    area: "Civil Lines",
    city: "Bareilly",
    state: "Uttar Pradesh",
    pincode: "243001",
    country: "India",
    fullFormatted: "A-6, Butler Plaza, Civil Lines, Bareilly, Uttar Pradesh – 243001, India",
    landmark: "Centrally located at Butler Plaza commercial complex in Civil Lines, Bareilly",
  },
  contact: {
    primaryPhone: "+91 97586 52851",
    primaryPhoneRaw: "9758652851",
    secondaryPhone: "+91 63954 68506",
    secondaryPhoneRaw: "6395468506",
    phonePlaceholder: "+91 97586 52851",
    phoneDisplay: "+91 97586 52851 / 6395468506",
    whatsappNumber: "919758652851",
    whatsappDisplay: "+91 97586 52851",
    emailPlaceholder: "admissions@mobileexpertbareilly.in",
  },
  timings: {
    days: "Monday to Saturday",
    hours: "10:00 AM – 7:30 PM",
    labSessions: "Practical batches scheduled daily in morning and evening shifts",
    note: "Prospective students and parents are welcome to visit our practical lab during working hours.",
  },
  googleMaps: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3511.458739674844!2d79.4149817!3d28.3638421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0013b5bf5a34f%3A0x6b4923e20ec68e94!2sButler%20Plaza%2C%20Civil%20Lines%2C%20Bareilly%2C%20Uttar%20Pradesh%20243001!5e0!3m2!1sen!2sin!4v1710000000000",
    directionsUrl: "https://maps.google.com/?q=Butler+Plaza+Civil+Lines+Bareilly+Uttar+Pradesh+243001",
    reviewsUrl: "https://maps.google.com/?q=Butler+Plaza+Civil+Lines+Bareilly+Uttar+Pradesh+243001",
  },
  travelHubs: [
    { city: "Chandausi", routeNote: "Regular direct bus and passenger train links to Bareilly Junction", distanceApprox: "~68 km" },
    { city: "Jayatipur", routeNote: "Direct regional connectivity to Civil Lines Bareilly", distanceApprox: "~45 km" },
    { city: "Faridpur", routeNote: "Expressway link via NH-30 corridor directly into Bareilly city", distanceApprox: "~22 km" },
    { city: "Tilhar", routeNote: "Highway & rail transport directly connecting to Bareilly", distanceApprox: "~55 km" },
  ],
};
