import React from 'react';
import { ShieldCheck, Zap, MapPin, MessageCircle } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
           <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">Why Spend on Ads That <span className="text-indigo-600">People Ignore?</span></h2>
           <p className="text-slate-600 text-lg leading-relaxed">Social feeds scroll too fast. Email open rates are dropping. Community placements are persistent, trusted, and unblockable.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
           
           {/* Large Card 1: Targeting */}
           <div className="md:col-span-2 bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-100 relative overflow-hidden group hover:border-indigo-100 transition-colors">
              <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-full blur-3xl -mr-20 -mt-20 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                    <div className="w-12 h-12 bg-white rounded-2xl border border-slate-100 flex items-center justify-center text-indigo-600 mb-6 shadow-sm">
                      <MapPin size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 font-display">Don't guess. Target exactly who you want.</h3>
                    <p className="text-slate-600 max-w-md text-base md:text-lg leading-relaxed">Stop wasting budget on broad impressions. Rent the header of "Moms in Oakville" (FB) or pin a message in "GTA Investors" (WhatsApp).</p>
                </div>
                
                <div className="mt-8 flex flex-wrap items-center gap-3">
                    <div className="bg-white px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        Location: Toronto, ON
                    </div>
                    <div className="bg-white px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold text-slate-700 shadow-sm">
                        Niche: Real Estate
                    </div>
                    <div className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full border border-indigo-200 text-sm font-bold shadow-sm">
                        ROI: 5x Higher
                    </div>
                </div>
              </div>
           </div>

           {/* Small Card 1: WhatsApp */}
           <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 bg-green-50 group-hover:bg-[#25D366] transition-colors rounded-2xl flex items-center justify-center text-[#128C7E] group-hover:text-white mb-6">
                <MessageCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">100% Viewability</h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">Pinned messages on WhatsApp trigger a notification and stay at the top. It's impossible to miss.</p>
           </div>

           {/* Small Card 2: Facebook */}
           <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
              <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-600 transition-colors rounded-2xl flex items-center justify-center text-blue-600 group-hover:text-white mb-6">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 font-display">Instant Authority</h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">The Cover Photo is the "Billboard" of the group. Being there implies the Admin trusts you.</p>
           </div>

           {/* Large Card 2: Trust (Dark Mode) */}
           <div className="md:col-span-2 bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-800 relative overflow-hidden text-white group">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f46e51a_1px,transparent_1px),linear-gradient(to_bottom,#4f46e51a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/30 rounded-full blur-[80px]"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
                <div className="flex-1">
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-6 border border-white/10">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 font-display">Trust Transfer Technology™</h3>
                  <p className="text-slate-400 text-base md:text-lg leading-relaxed">When a Community Admin posts your content, trust transfers from the group leader to your brand. It's word-of-mouth at scale.</p>
                </div>
                
                {/* Stat Graphic */}
                <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 w-full md:w-auto min-w-[200px] text-center transform group-hover:scale-105 transition-transform duration-300">
                   <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 mb-1">98%</div>
                   <div className="text-xs text-indigo-300 font-bold uppercase tracking-widest mb-3">Open Rate</div>
                   <div className="h-1 w-full bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500 w-[98%] shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                   </div>
                   <div className="flex justify-between text-[10px] text-slate-500 mt-2">
                     <span>WhatsApp</span>
                     <span>Email (20%)</span>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};