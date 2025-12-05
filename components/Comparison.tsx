import React from 'react';
import { Check, X } from 'lucide-react';

export const Comparison: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Why Local Businesses Switch</h2>
           <p className="text-slate-600 text-lg">See how GroupSpot stacks up against traditional ads.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden relative">
           
           {/* Scroll Hint Gradient - Mobile Only */}
           <div className="absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden z-10"></div>
           
           <div className="overflow-x-auto pb-2 md:pb-0">
             <div className="min-w-[600px]">
               <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-200">
                  <div className="p-4 md:p-6 font-bold text-slate-500 text-xs md:text-sm uppercase tracking-wider">Feature</div>
                  <div className="p-4 md:p-6 font-bold text-indigo-600 text-base md:text-lg bg-indigo-50/50 text-center border-x border-indigo-100 relative">
                    GroupSpot
                    <div className="absolute top-0 left-0 w-full h-1 bg-indigo-500"></div>
                  </div>
                  <div className="p-4 md:p-6 font-bold text-slate-500 text-base md:text-lg text-center">Facebook Ads</div>
               </div>

               <div className="grid grid-cols-3 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="px-3 py-4 md:p-6 font-semibold text-slate-700 flex items-center text-sm md:text-base">Viewability</div>
                  <div className="px-3 py-4 md:p-6 text-center border-x border-slate-100 bg-indigo-50/10 font-bold text-slate-900 text-sm md:text-base">100% (Pinned)</div>
                  <div className="px-3 py-4 md:p-6 text-center text-slate-500 text-sm md:text-base">~10% (Scroll past)</div>
               </div>

               <div className="grid grid-cols-3 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="px-3 py-4 md:p-6 font-semibold text-slate-700 flex items-center text-sm md:text-base">Ad Blockers</div>
                  <div className="px-3 py-4 md:p-6 text-center border-x border-slate-100 bg-indigo-50/10 text-green-600 flex justify-center gap-2 font-bold text-sm md:text-base">
                     <Check size={20} /> Immune
                  </div>
                  <div className="px-3 py-4 md:p-6 text-center text-red-500 flex justify-center gap-2 text-sm md:text-base">
                     <X size={20} /> Blocked
                  </div>
               </div>

               <div className="grid grid-cols-3 border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <div className="px-3 py-4 md:p-6 font-semibold text-slate-700 flex items-center text-sm md:text-base">Trust Factor</div>
                  <div className="px-3 py-4 md:p-6 text-center border-x border-slate-100 bg-indigo-50/10 font-bold text-slate-900 text-sm md:text-base">High (Admin Endorsed)</div>
                  <div className="px-3 py-4 md:p-6 text-center text-slate-500 text-sm md:text-base">Low (Sponsored Label)</div>
               </div>

               <div className="grid grid-cols-3 hover:bg-slate-50 transition-colors">
                  <div className="px-3 py-4 md:p-6 font-semibold text-slate-700 flex items-center text-sm md:text-base">Targeting</div>
                  <div className="px-3 py-4 md:p-6 text-center border-x border-slate-100 bg-indigo-50/10 font-bold text-slate-900 text-sm md:text-base">Exact Community</div>
                  <div className="px-3 py-4 md:p-6 text-center text-slate-500 text-sm md:text-base">Vague Interests</div>
               </div>
             </div>
           </div>
           {/* Mobile Scroll Hint Text */}
           <div className="md:hidden text-center text-xs text-slate-400 py-3 bg-slate-50/50 italic border-t border-slate-100">
             Scroll right to see more →
           </div>
        </div>
      </div>
    </section>
  );
};