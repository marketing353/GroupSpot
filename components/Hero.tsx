import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle, TrendingUp, DollarSign, Star, Home, Coffee, Briefcase, Utensils, Hammer } from 'lucide-react';
import { Button } from './Button';
import { MockupFacebookGroup, MockupWhatsappGroup } from './ProfileMockup';
import { Role } from '../types';

interface HeroProps {
  onOpenModal: (role: Role) => void;
}

const TypewriterText = ({ words }: { words: string[] }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 whitespace-nowrap">
      {words[index].substring(0, subIndex)}
      <span className={`text-indigo-600 ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
    </span>
  );
};

export const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [platform, setPlatform] = useState<'whatsapp' | 'facebook'>('whatsapp');

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden mesh-light">
      {/* Abstract Shapes in background */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-gradient-to-br from-indigo-200/20 to-purple-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient-to-tr from-blue-100/30 to-teal-100/30 rounded-full blur-3xl -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* CRO: Social Proof Badge Above Headline */}
        <div className="flex justify-center mb-6 md:mb-8 animate-fade-in">
          <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md border border-indigo-100 rounded-full px-3 py-1.5 md:px-4 md:py-1.5 shadow-sm hover:shadow-md transition-shadow cursor-default">
            <div className="flex -space-x-2">
               {[1,2,3,4].map(i => (
                 <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center" style={{backgroundImage: `url(https://images.unsplash.com/photo-${1500000000000 + i}?auto=format&fit=crop&w=100&q=80)`}}></div>
               ))}
            </div>
            <div className="flex items-center gap-1.5 pl-1">
               <div className="flex text-orange-400">
                  <Star size={12} className="md:w-3 md:h-3" fill="currentColor" />
                  <Star size={12} className="md:w-3 md:h-3" fill="currentColor" />
                  <Star size={12} className="md:w-3 md:h-3" fill="currentColor" />
                  <Star size={12} className="md:w-3 md:h-3" fill="currentColor" />
                  <Star size={12} className="md:w-3 md:h-3" fill="currentColor" />
               </div>
               <span className="text-xs font-bold text-slate-700">4.9/5 from 2,000+ Users</span>
            </div>
          </div>
        </div>

        {/* Headline with Dynamic Typewriter */}
        <h1 className="text-4xl xs:text-5xl md:text-7xl lg:text-8xl font-extrabold font-display text-slate-900 tracking-tight mb-5 md:mb-8 leading-[1.15] md:leading-[1.05] max-w-5xl mx-auto animate-slide-up px-1">
          Turn Local <br className="hidden md:block" />
          <TypewriterText words={['Real Estate', 'Mom & Pop', 'Community', 'Buy & Sell', 'Sports']} /> <br className="hidden md:block" />
          Groups into Revenue.
        </h1>

        {/* Subhead */}
        <p className="text-sm xs:text-base md:text-xl text-slate-600 mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto animate-slide-up font-medium px-4" style={{ animationDelay: '0.1s' }}>
          <strong>Advertisers:</strong> Reach customers in their DMs, not their spam folder.<br className="hidden sm:block"/>
          <span className="sm:hidden"> </span>
          <strong>Admins:</strong> Get paid passive income to pin messages & rent covers.
        </p>

        {/* Platform Toggle - Optimized for Mobile Touch */}
        <div className="inline-flex bg-slate-100 p-1.5 rounded-xl mb-8 md:mb-10 animate-slide-up shadow-inner relative z-30 max-w-full overflow-hidden" style={{ animationDelay: '0.15s' }}>
            <button 
                onClick={() => setPlatform('whatsapp')}
                className={`px-3 py-2.5 md:px-6 md:py-2.5 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 active:scale-95 touch-manipulation min-w-[110px] md:min-w-[130px] justify-center ${platform === 'whatsapp' ? 'bg-white shadow-md text-[#075E54] ring-1 ring-black/5 scale-[1.02]' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
            >
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] shrink-0"></span> WhatsApp
            </button>
            <button 
                onClick={() => setPlatform('facebook')}
                className={`px-3 py-2.5 md:px-6 md:py-2.5 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-2 active:scale-95 touch-manipulation min-w-[110px] md:min-w-[130px] justify-center ${platform === 'facebook' ? 'bg-white shadow-md text-blue-600 ring-1 ring-black/5 scale-[1.02]' : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'}`}
            >
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600 shrink-0"></span> Facebook
            </button>
        </div>

        {/* CTA Buttons - Stacked on Mobile */}
        <div className="flex flex-col items-center gap-5 animate-slide-up px-4" style={{ animationDelay: '0.2s' }}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 w-full">
            <div className="relative group w-full sm:w-auto">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-200 animate-pulse-slow"></div>
              <Button onClick={() => onOpenModal('advertiser')} className="relative w-full sm:w-auto text-base h-12 md:h-14 px-6 md:px-8 bg-slate-900 text-white hover:bg-slate-800 border-none rounded-xl flex items-center justify-center gap-2 font-bold shadow-xl active:scale-[0.98] transition-all touch-manipulation">
                Find Groups to Rent <ArrowRight size={18} />
              </Button>
            </div>
            <button 
              onClick={() => onOpenModal('admin')}
              className="w-full sm:w-auto h-12 md:h-14 px-6 md:px-8 rounded-xl font-bold text-slate-600 hover:text-slate-900 bg-white border border-slate-200 hover:border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98] touch-manipulation"
            >
              <PlayCircle size={20} className="text-indigo-600" /> I run a Local Group
            </button>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs font-semibold text-slate-500">
             <span className="flex items-center gap-1"><span className="text-green-500">✓</span> No credit card required</span>
             <span className="flex items-center gap-1"><span className="text-green-500">✓</span> Verified Admins</span>
          </div>
        </div>

        {/* Logo Trust Section - Optimized Grid for Mobile */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-slate-200/60 max-w-4xl mx-auto animate-slide-up px-4" style={{ animationDelay: '0.3s' }}>
           <p className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by 500+ Local Businesses</p>
           <div className="grid grid-cols-2 xs:grid-cols-3 md:flex md:flex-wrap justify-center items-center gap-x-4 gap-y-8 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex justify-center items-center gap-2 font-display font-bold text-sm md:text-xl text-slate-700">
                <Home className="text-indigo-600 w-4 h-4 md:w-6 md:h-6" /> <span>ReMax</span>
              </div>
              <div className="flex justify-center items-center gap-2 font-display font-bold text-sm md:text-xl text-slate-700">
                <Coffee className="text-indigo-600 w-4 h-4 md:w-6 md:h-6" /> <span>DailyGrind</span>
              </div>
              <div className="flex justify-center items-center gap-2 font-display font-bold text-sm md:text-xl text-slate-700">
                <Briefcase className="text-indigo-600 w-4 h-4 md:w-6 md:h-6" /> <span>ConsultCo</span>
              </div>
              <div className="flex justify-center items-center gap-2 font-display font-bold text-sm md:text-xl text-slate-700">
                <Utensils className="text-indigo-600 w-4 h-4 md:w-6 md:h-6" /> <span>Bistro42</span>
              </div>
              <div className="flex justify-center items-center gap-2 font-display font-bold text-sm md:text-xl text-slate-700 col-span-2 xs:col-span-1">
                <Hammer className="text-indigo-600 w-4 h-4 md:w-6 md:h-6" /> <span>ProFix</span>
              </div>
           </div>
        </div>

        {/* Visual Mockup with Floating Elements */}
        <div className="relative mx-auto max-w-4xl animate-slide-up perspective-1000 mt-12 md:mt-20 origin-top" style={{ animationDelay: '0.4s' }}>
           
           {/* Floating Card: Earnings (Hidden on small mobile) */}
           <div className="hidden md:flex absolute top-20 -left-12 lg:-left-24 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-float items-center gap-3">
              <div className="bg-green-100 p-2.5 rounded-full text-green-600">
                <DollarSign size={24} />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Payout Sent</div>
                <div className="text-slate-900 font-bold font-display text-lg">$450.00</div>
              </div>
           </div>

           {/* Floating Card: Stats (Hidden on small mobile) */}
           <div className="hidden md:flex absolute bottom-40 -right-12 lg:-right-24 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-float-delayed items-center gap-3">
              <div className="bg-indigo-100 p-2.5 rounded-full text-indigo-600">
                <TrendingUp size={24} />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Click Rate</div>
                <div className="text-slate-900 font-bold font-display text-lg text-green-600">+18.5%</div>
              </div>
           </div>

           {/* Glow Effect behind mockup */}
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] xs:w-[350px] md:w-[600px] h-[260px] xs:h-[350px] md:h-[600px] rounded-full blur-[60px] md:blur-[120px] -z-10 transition-colors duration-500 ${platform === 'whatsapp' ? 'bg-green-500/20' : 'bg-blue-500/20'}`}></div>
           
           {/* Animated Mockups Container */}
           <div className="relative z-10 flex justify-center">
               {/* Invisible Spacer to maintain height */}
               <div className="opacity-0 pointer-events-none" aria-hidden="true">
                    <MockupWhatsappGroup />
               </div>

               {/* WhatsApp Mockup */}
               <div className={`absolute top-0 transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${
                   platform === 'whatsapp' 
                   ? 'opacity-100 translate-x-0 scale-100 rotate-0 z-20 blur-none' 
                   : 'opacity-0 -translate-x-24 scale-90 -rotate-6 z-10 pointer-events-none blur-sm'
               }`}>
                    <MockupWhatsappGroup />
               </div>

               {/* Facebook Mockup */}
               <div className={`absolute top-0 transition-all duration-700 cubic-bezier(0.34, 1.56, 0.64, 1) ${
                   platform === 'facebook' 
                   ? 'opacity-100 translate-x-0 scale-100 rotate-0 z-20 blur-none' 
                   : 'opacity-0 translate-x-24 scale-90 rotate-6 z-10 pointer-events-none blur-sm'
               }`}>
                    <MockupFacebookGroup />
               </div>
           </div>
        </div>

      </div>
      
      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-20 md:h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20"></div>
    </section>
  );
};