import React, { useState, useEffect } from "react";
import { Navbar, PageId } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { FloatingWhatsApp } from "./components/common/FloatingWhatsApp";
import { EnquiryModal } from "./components/common/EnquiryModal";
import { HomePage } from "./pages/HomePage";
import { TrainingPage } from "./pages/TrainingPage";
import { ServicesPage } from "./pages/ServicesPage";
import { LaminationPage } from "./pages/LaminationPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { EnquiryType } from "./utils/enquiry";
import { ScrollProgressBar } from "./components/common/ScrollProgressBar";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryType, setEnquiryType] = useState<EnquiryType>("general");
  const [enquiryDetail, setEnquiryDetail] = useState<string>("");

  // Sync hash routing so users can bookmark or use back/forward
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as PageId;
      const validPages: PageId[] = ["home", "training", "services", "lamination", "about", "contact"];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
  };

  const handleOpenEnquiry = (initialType: EnquiryType = "general", detail: string = "") => {
    setEnquiryType(initialType);
    setEnquiryDetail(detail);
    setIsEnquiryOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#07080b] flex flex-col text-neutral-100 selection:bg-cyan-500 selection:text-black">
      {/* Scroll-driven Progress Indicator */}
      <ScrollProgressBar />

      {/* 3-Zone Top Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={(type) => handleOpenEnquiry(type || "general")}
      />

      {/* Main Content Body */}
      <main className="flex-1">
        {currentPage === "home" && (
          <HomePage onNavigate={handleNavigate} onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === "training" && (
          <TrainingPage onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === "services" && (
          <ServicesPage onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === "lamination" && (
          <LaminationPage onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === "about" && (
          <AboutPage onOpenEnquiry={handleOpenEnquiry} />
        )}
        {currentPage === "contact" && <ContactPage />}
      </main>

      {/* Quiet, Comprehensive Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={(type) => handleOpenEnquiry(type || "general")}
      />

      {/* Persistent Floating WhatsApp Help Trigger */}
      <FloatingWhatsApp
        contextPrompt={
          currentPage === "training"
            ? "Hello Mobile Expert Institute, I would like to inquire about the Practical Mobile Repairing Course and upcoming batch timings at Butler Plaza Bareilly."
            : currentPage === "services"
            ? "Hello Mobile Expert Institute, I have a device repair query and would like a diagnostic estimate at Butler Plaza Bareilly."
            : currentPage === "lamination"
            ? "Hello Mobile Expert Institute, I would like to check skin / lamination availability for my device model at Butler Plaza Bareilly."
            : "Hello Mobile Expert Institute, I have an enquiry regarding your laboratory at Butler Plaza, Civil Lines, Bareilly."
        }
      />

      {/* Reusable Enquiry Modal with WhatsApp Dispatch */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialType={enquiryType}
        initialDetail={enquiryDetail}
      />
    </div>
  );
}
