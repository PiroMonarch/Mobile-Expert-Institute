import { INSTITUTE_CONFIG } from "../config/institute";

export type CourseInterest =
  | "complete-course"
  | "chip-level-smd"
  | "motherboard-cpu"
  | "basic-hardware"
  | "general-admission";

export interface StudentEnquiryFormData {
  studentName: string;
  phoneNumber: string;
  courseInterest: CourseInterest;
  previousExperience?: string;
  message?: string;
}

export type EnquiryType = "training" | "repair" | "lamination" | "general";

export interface EnquiryFormData {
  name: string;
  phone: string;
  enquiryType: EnquiryType;
  deviceOrCourseDetail?: string;
  message?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Normalizes an Indian phone number to 10 digits
 */
export function normalizeIndianPhoneNumber(input: string): string {
  const digitsOnly = input.replace(/[\s\-\(\)\+]/g, "");

  if (digitsOnly.length === 12 && digitsOnly.startsWith("91")) {
    return digitsOnly.slice(2);
  }

  if (digitsOnly.length === 11 && digitsOnly.startsWith("0")) {
    return digitsOnly.slice(1);
  }

  return digitsOnly;
}

/**
 * Validates course admission inquiry fields
 */
export function validateStudentEnquiryForm(data: StudentEnquiryFormData): ValidationResult {
  const errors: Record<string, string> = {};

  const cleanName = data.studentName.trim();
  if (!cleanName) {
    errors.studentName = "Please enter student name.";
  } else if (cleanName.length < 2) {
    errors.studentName = "Name must be at least 2 characters.";
  }

  const cleanPhone = normalizeIndianPhoneNumber(data.phoneNumber || "");
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!data.phoneNumber || !data.phoneNumber.trim()) {
    errors.phoneNumber = "Please enter mobile number for admission details.";
  } else if (!phoneRegex.test(cleanPhone)) {
    errors.phoneNumber = "Please enter a valid 10-digit mobile number (e.g. 9876543210).";
  }

  const validCourses: CourseInterest[] = [
    "complete-course",
    "chip-level-smd",
    "motherboard-cpu",
    "basic-hardware",
    "general-admission",
  ];
  if (!validCourses.includes(data.courseInterest)) {
    errors.courseInterest = "Please select a course category.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Validates general institute inquiry fields (training, repair, lamination)
 */
export function validateEnquiryForm(data: EnquiryFormData): ValidationResult {
  const errors: Record<string, string> = {};

  const cleanName = data.name.trim();
  if (!cleanName) {
    errors.name = "Please enter your name.";
  } else if (cleanName.length < 2) {
    errors.name = "Name must be at least 2 characters.";
  }

  const cleanPhone = normalizeIndianPhoneNumber(data.phone || "");
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!data.phone || !data.phone.trim()) {
    errors.phone = "Please enter your 10-digit mobile number.";
  } else if (!phoneRegex.test(cleanPhone)) {
    errors.phone = "Please enter a valid 10-digit mobile number (e.g. 9876543210).";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

/**
 * Constructs a pre-filled WhatsApp click-to-chat URL for Mobile Expert Institute admissions
 */
export function buildStudentAdmissionWhatsAppUrl(
  data: StudentEnquiryFormData,
  targetNumber: string = INSTITUTE_CONFIG.contact.whatsappNumber
): string {
  const courseLabels: Record<CourseInterest, string> = {
    "complete-course": "Complete 2-Month Practical Mobile Repairing Course (₹14,990 / ₹15,000)",
    "chip-level-smd": "Advanced Chip-Level & SMD Micro-Soldering (2-Month Batch)",
    "motherboard-cpu": "Motherboard Diagnostics & CPU/BGA Reballing (2-Month Batch)",
    "basic-hardware": "Mobile Hardware Fundamentals & Disassembly",
    "general-admission": "2-Month Course Admission Enquiry (₹14,990)",
  };

  const lines = [
    `*Mobile Expert Institute — Admission Enquiry*`,
    `A-6, Butler Plaza, Civil Lines, Bareilly (UP)`,
    `---------------------------------`,
    `*Student Name:* ${data.studentName.trim()}`,
    `*Mobile Number:* ${data.phoneNumber.trim()}`,
    `*Interested Course:* ${courseLabels[data.courseInterest] || data.courseInterest}`,
  ];

  if (data.previousExperience && data.previousExperience.trim()) {
    lines.push(`*Background / Experience:* ${data.previousExperience.trim()}`);
  }

  if (data.message && data.message.trim()) {
    lines.push(`*Student Query:* ${data.message.trim()}`);
  }

  lines.push(`---------------------------------`);
  lines.push(`Sent via mobileexpertbareilly.in`);

  const messageText = lines.join("\n");
  const encodedText = encodeURIComponent(messageText);

  return `https://wa.me/${targetNumber}?text=${encodedText}`;
}

/**
 * Constructs a pre-filled WhatsApp click-to-chat URL for general inquiries (Training, Repair, Lamination)
 */
export function buildWhatsAppEnquiryUrl(
  data: EnquiryFormData,
  targetNumber: string = INSTITUTE_CONFIG.contact.whatsappNumber
): string {
  const typeLabels: Record<EnquiryType, string> = {
    training: "Mobile Repair Training Course",
    repair: "Mobile Phone Repair Service",
    lamination: "Mobile / Laptop Lamination & Skins",
    general: "General Institute Enquiry",
  };

  const lines = [
    `*Mobile Expert Institute — Enquiry*`,
    `A-6, Butler Plaza, Civil Lines, Bareilly (UP)`,
    `---------------------------------`,
    `*Name:* ${data.name.trim()}`,
    `*Mobile:* ${data.phone.trim()}`,
    `*Enquiry Type:* ${typeLabels[data.enquiryType] || data.enquiryType}`,
  ];

  if (data.deviceOrCourseDetail && data.deviceOrCourseDetail.trim()) {
    lines.push(`*Details / Device:* ${data.deviceOrCourseDetail.trim()}`);
  }

  if (data.message && data.message.trim()) {
    lines.push(`*Message:* ${data.message.trim()}`);
  }

  lines.push(`---------------------------------`);
  lines.push(`Sent via mobileexpertbareilly.in`);

  const messageText = lines.join("\n");
  const encodedText = encodeURIComponent(messageText);

  return `https://wa.me/${targetNumber}?text=${encodedText}`;
}
