import React, { useState, useEffect } from 'react';
import { Menu, X, Users, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Role } from '../types';

interface NavbarProps {
  onOpenModal: (role: Role) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none ${isScrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-6'}`}>
        <div className="mx-auto max-w-5xl px-4 pointer-events-auto">
          <div className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-300 ${isScrolled || mobileMenuOpen ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-slate-200/20 border border-white/50 ring-1 ring-slate-200/50' : 'bg-transparent border border-transparent'}`}>
            
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo(0,0)}>
              <div className="bg-indigo-600 rounded-lg p-1.5 shadow-indigo-500/20 shadow-lg group-hover:scale-110 transition-transform duration-200">
                <Users className="text-white" size={16} />
              </div>
              <span className="text-base font-bold tracking-tight text-slate-900 font-display group-hover:text-indigo-600 transition-colors">
                Group<span className="text-indigo-600">Spot</span>
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => onOpenModal('admin')} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Group Admins</button>
              <button onClick={() => onOpenModal('advertiser')} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors">Businesses</button>
              <div className="h-4 w-px bg-slate-200 mx-2"></div>
              <button onClick={() => onOpenModal('advertiser')} className="text-sm font-semibold text-slate-900 hover:text-indigo-600 transition-colors">Login</button>
              <Button onClick={() => onOpenModal('advertiser')} className="py-2 px-5 text-xs h-9 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-none">
                Get Started
              </Button>
            </div>

            {/* Mobile Toggle - Larger Touch Target */}
            <button 
              className="md:hidden text-slate-900 p-3 -mr-3 active:bg-slate-100 rounded-full transition-colors focus:outline-none" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/98 backdrop-blur-xl pt-28 px-6 animate-fade-in md:hidden flex flex-col h-screen overflow-y-auto">
          <div className="flex flex-col gap-2 text-lg">
            <button 
              onClick={() => { onOpenModal('admin'); setMobileMenuOpen(false); }} 
              className="text-left font-bold text-slate-900 py-6 border-b border-slate-100 flex justify-between items-center group active:bg-slate-50 -mx-6 px-6"
            >
              For Group Admins 
              <span className="bg-indigo-50 text-indigo-600 p-2.5 rounded-full group-hover:bg-indigo-100 transition-colors">
                <ArrowRight size={20} />
              </span>
            </button>
            <button 
              onClick={() => { onOpenModal('advertiser'); setMobileMenuOpen(false); }} 
              className="text-left font-bold text-slate-900 py-6 border-b border-slate-100 flex justify-between items-center group active:bg-slate-50 -mx-6 px-6"
            >
              For Businesses 
              <span className="bg-indigo-50 text-indigo-600 p-2.5 rounded-full group-hover:bg-indigo-100 transition-colors">
                <ArrowRight size={20} />
              </span>
            </button>
            <button 
              onClick={() => { onOpenModal('advertiser'); setMobileMenuOpen(false); }} 
              className="text-left font-semibold text-slate-500 py-6 border-b border-slate-100 flex justify-between items-center group active:bg-slate-50 -mx-6 px-6"
            >
              Log In
            </button>
            
            <div className="mt-8 pb-10">
               <Button onClick={() => { onOpenModal('advertiser'); setMobileMenuOpen(false); }} className="w-full justify-center h-14 text-lg rounded-xl shadow-xl shadow-indigo-200">
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};