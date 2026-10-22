import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { LearningJourney } from './components/LearningJourney';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CvModal } from './components/CvModal';
import { ConfigGuideModal } from './components/ConfigGuideModal';

export default function App() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [isConfigGuideOpen, setIsConfigGuideOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-200">
        {/* Navigation Bar */}
        <Navbar onOpenConfigGuide={() => setIsConfigGuideOpen(true)} />

        {/* Main Content Sections */}
        <main className="flex-1">
          <Hero onOpenCvModal={() => setIsCvModalOpen(true)} />
          <About />
          <Skills />
          <Projects />
          <LearningJourney />
          <Education />
          <Contact />
        </main>

        {/* Footer */}
        <Footer />

        {/* Global Modals */}
        <CvModal
          isOpen={isCvModalOpen}
          onClose={() => setIsCvModalOpen(false)}
        />
        <ConfigGuideModal
          isOpen={isConfigGuideOpen}
          onClose={() => setIsConfigGuideOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}
