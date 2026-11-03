import test from "node:test";
import assert from "node:assert/strict";
import {
  normalizeIndianPhoneNumber,
  validateStudentEnquiryForm,
  buildStudentAdmissionWhatsAppUrl,
  StudentEnquiryFormData,
  validateEnquiryForm,
  buildWhatsAppEnquiryUrl,
  EnquiryFormData,
} from "./enquiry";

test("normalizes standard 10-digit Indian numbers", () => {
  assert.equal(normalizeIndianPhoneNumber("9876543210"), "9876543210");
  assert.equal(normalizeIndianPhoneNumber("98765 43210"), "9876543210");
  assert.equal(normalizeIndianPhoneNumber("+91 98765 43210"), "9876543210");
  assert.equal(normalizeIndianPhoneNumber("09876543210"), "9876543210");
});

test("validates complete student admission enquiry forms", () => {
  const validData: StudentEnquiryFormData = {
    studentName: "Mohd Tohid",
    phoneNumber: "9876543210",
    courseInterest: "complete-course",
    previousExperience: "Beginner from Chandausi",
    message: "Interested in upcoming practical batch timings.",
  };

  const result = validateStudentEnquiryForm(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test("catches invalid student names and bad phone numbers", () => {
  const invalidData: StudentEnquiryFormData = {
    studentName: "",
    phoneNumber: "12345",
    courseInterest: "invalid-course" as any,
  };

  const result = validateStudentEnquiryForm(invalidData);
  assert.equal(result.isValid, false);
  assert.ok(result.errors.studentName);
  assert.ok(result.errors.phoneNumber);
  assert.ok(result.errors.courseInterest);
});

test("generates WhatsApp admission URL with student name and course category", () => {
  const data: StudentEnquiryFormData = {
    studentName: "Sachin Prajapati",
    phoneNumber: "9876543210",
    courseInterest: "chip-level-smd",
    previousExperience: "Some basic soldering experience",
  };

  const url = buildStudentAdmissionWhatsAppUrl(data, "919876543210");
  assert.ok(url.startsWith("https://wa.me/919876543210?text="));
  assert.ok(url.includes(encodeURIComponent("Sachin Prajapati")));
  assert.ok(url.includes(encodeURIComponent("Advanced Chip-Level & SMD Micro-Soldering")));
});

test("validates general enquiry form correctly", () => {
  const valid: EnquiryFormData = {
    name: "Mohd Tohid",
    phone: "9876543210",
    enquiryType: "repair",
    deviceOrCourseDetail: "Redmi Note 12 Dead Phone",
  };
  const result = validateEnquiryForm(valid);
  assert.equal(result.isValid, true);

  const invalid: EnquiryFormData = {
    name: "",
    phone: "invalid",
    enquiryType: "training",
  };
  const invalidResult = validateEnquiryForm(invalid);
  assert.equal(invalidResult.isValid, false);
  assert.ok(invalidResult.errors.name);
  assert.ok(invalidResult.errors.phone);
});

test("generates general WhatsApp enquiry URL with proper parameters", () => {
  const data: EnquiryFormData = {
    name: "Rahul Sharma",
    phone: "9758652851",
    enquiryType: "lamination",
    deviceOrCourseDetail: "MacBook Air M2 - Carbon Fiber skin",
    message: "Do you have matte textured finish in stock?",
  };

  const url = buildWhatsAppEnquiryUrl(data, "919758652851");
  assert.ok(url.startsWith("https://wa.me/919758652851?text="));
  assert.ok(url.includes(encodeURIComponent("Rahul Sharma")));
  assert.ok(url.includes(encodeURIComponent("Mobile / Laptop Lamination & Skins")));
  assert.ok(url.includes(encodeURIComponent("MacBook Air M2 - Carbon Fiber skin")));
});

