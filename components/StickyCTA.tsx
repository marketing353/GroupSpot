import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Role } from '../types';

interface StickyCTAProps {
  onOpenModal: (role: Role) => void;
}

export const StickyCTA: React.FC<StickyCTAProps> = ({ onOpenModal }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 600);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/90 backdrop-blur-lg border-t border-slate-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] z-50 md:hidden animate-slide-up">
       <div className="flex gap-3">
          <Button onClick={() => onOpenModal('admin')} variant="secondary" className="flex-1 text-sm py-3 bg-slate-100 border-none">
            I'm an Admin
          </Button>
          <Button onClick={() => onOpenModal('advertiser')} className="flex-1 text-sm py-3 bg-indigo-600 text-white shadow-lg shadow-indigo-500/30">
            Get Leads
          </Button>
       </div>
    </div>
  );
};