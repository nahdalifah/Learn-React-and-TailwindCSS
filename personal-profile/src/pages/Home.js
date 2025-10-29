import React from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import PortfolioSection from "../components/PortfolioSection";
import TestimonialSection from "../components/TestimonialSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <ProfileCard />
      <AboutSection />
      <SkillsSection />
      <TestimonialSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;