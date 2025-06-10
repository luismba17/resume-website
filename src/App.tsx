import { motion } from "framer-motion";
import "./index.css";
import LanguageToggle from "./assets/components/LanguageToggle";
import { useTranslation } from 'react-i18next';
import Navbar from "./assets/components/Navbar";
import Header from "./assets/components/Header";
import ExperienceSection from "./assets/components/ExperienceSection";
import TechnicalSkillsSection from "./assets/components/TechnicalSkillsSection";
import Certifications from "./assets/components/Certifications";
import Education from "./assets/components/Education";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import Projects from "./assets/components/Projects";


const ResumePage = () => {

  const { i18n } = useTranslation();

  return (
    <motion.div
      id="page-wrapper"
      key={i18n.language}
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-gray-900 text-gray-100 font-sans !scroll-smooth relative"
    >
      {/* Translator */}
      <LanguageToggle />

      <div className=" bg-gray-900 text-gray-100 font-sans !scroll-smooth">

        {/* Navbar */}
        <Navbar />

        {/* Header */}
        <Header />

        {/* Technical Skills Section */}
        <TechnicalSkillsSection />


        {/* Experience Section */}
        <ExperienceSection />

        {/* Education & Certification */}
        <Education />

        {/* Projects */}
        <Projects />

        {/* Certification & Extras*/}
        <Certifications />

        {/* Contact Section */}
        <Contact />

        {/* Footer */}
        <Footer />

      </div>
    </motion.div>


  );
};

export default ResumePage;
