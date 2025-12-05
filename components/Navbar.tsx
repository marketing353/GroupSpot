import React, { useState, useEffect } from 'react';
import { Menu, X, Users, ArrowRight, ChevronRight, LogIn, Briefcase, UserCircle } from 'lucide-react';
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
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 pointer-events-none ${isScrolled ? 'pt-2 md:pt-4' : 'pt-4 md:pt-6'}`}>
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
              className="md:hidden text-slate-900 p-2.5 -mr-2 active:bg-slate-100 rounded-full transition-colors focus:outline-none" 
              onClick={() => setMobileMenuOpen(true)} 
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[65] bg-slate-900/40 backdrop-blur-[2px] animate-fade-in md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer - Slides from Left */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[320px] z-[70] bg-white shadow-2xl animate-slide-in-left md:hidden flex flex-col h-full border-r border-slate-100">
          
          {/* Drawer Header */}
          <div className="p-6 flex items-center justify-between border-b border-slate-100 bg-slate-50/50">
            <div className="flex items-center gap-2">
              <div className="bg-indigo-600 rounded-lg p-1.5 shadow-md">
                <Users className="text-white" size={18} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900 font-display">
                Group<span className="text-indigo-600">Spot</span>
              </span>
            </div>
            {/* Increased padding for easier closing */}
            <button 
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 -mr-3 text-slate-400 hover:text-slate-600 active:bg-slate-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Links Container */}
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
            
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-4 mb-2">Platform</div>
            
            <button 
              onClick={() => { onOpenModal('admin'); setMobileMenuOpen(false); }} 
              className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 active:bg-indigo-100 text-slate-900 font-semibold group transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600 group-hover:border-indigo-200">
                   <Users size={20} />
                </div>
                <span>For Group Admins</span>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-400" />
            </button>

            <button 
              onClick={() => { onOpenModal('advertiser'); setMobileMenuOpen(false); }} 
              className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-indigo-50 active:bg-indigo-100 text-slate-900 font-semibold group transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-indigo-600 group-hover:border-indigo-200">
                   <Briefcase size={20} />
                </div>
                <span>For Businesses</span>
              </div>
              <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-400" />
            </button>

            <div className="h-px bg-slate-100 my-4 mx-4"></div>
            
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-4 mb-2">Account</div>

            <button 
              onClick={() => { onOpenModal('advertiser'); setMobileMenuOpen(false); }} 
              className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-slate-50 active:bg-slate-100 text-slate-600 font-medium transition-colors"
            >
              <LogIn size={20} />
              Log In
            </button>

            <button 
              onClick={() => { onOpenModal('admin'); setMobileMenuOpen(false); }} 
              className="w-full flex items-center gap-3 p-4 rounded-xl hover:bg-slate-50 active:bg-slate-100 text-slate-600 font-medium transition-colors"
            >
              <UserCircle size={20} />
              Create Account
            </button>
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-slate-100 bg-slate-50/30">
             <Button onClick={() => { onOpenModal('advertiser'); setMobileMenuOpen(false); }} className="w-full h-12 text-base shadow-lg shadow-indigo-500/20 rounded-xl justify-between px-6">
                Get Started
                <ArrowRight size={18} />
             </Button>
             <p className="text-center text-[10px] text-slate-400 mt-4">
               © {new Date().getFullYear()} GroupSpot Inc.
             </p>
          </div>
        </div>
      )}
    </>
  );
};