import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Features } from './components/Features';
import { Comparison } from './components/Comparison';
import { HowItWorks } from './components/HowItWorks';
import { IncomeCalculator } from './components/IncomeCalculator';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { WaitlistModal } from './components/WaitlistModal';
import { FOMOToast } from './components/FOMOToast';
import { StickyCTA } from './components/StickyCTA';
import { Role, ModalState } from './types';

const App: React.FC = () => {
  const [modal, setModal] = useState<ModalState>({ isOpen: false, role: 'advertiser' });

  const openModal = (role: Role) => {
    setModal({ isOpen: true, role });
  };

  const closeModal = () => {
    setModal(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-indigo-500 selection:text-white">
      <Navbar onOpenModal={openModal} />
      
      <main>
        <Hero onOpenModal={openModal} />
        <SocialProof />
        <Comparison />
        <Features />
        <HowItWorks />
        <IncomeCalculator onOpenModal={openModal} />
        <Testimonials />
        <FAQ />
        <CTA onOpenModal={openModal} />
      </main>

      <Footer />
      
      <WaitlistModal 
        isOpen={modal.isOpen}
        role={modal.role}
        onClose={closeModal}
      />
      
      {/* CRO Elements */}
      <FOMOToast />
      <StickyCTA onOpenModal={openModal} />
    </div>
  );
};

export default App;