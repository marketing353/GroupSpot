import React, { useState } from 'react';
import { CheckCircle2, Calculator, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { Role } from '../types';

interface CalculatorProps {
  onOpenModal: (role: Role) => void;
}

export const IncomeCalculator: React.FC<CalculatorProps> = ({ onOpenModal }) => {
  const [members, setMembers] = useState(15000);
  const cpm = 5; // Slightly higher estimate for WA
  const earnings = Math.floor((members / 1000) * cpm * 10); 

  return (
    <section className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden relative border-t border-slate-800">
      {/* Mesh Background */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(at_0%_0%,_rgba(79,70,229,0.4)_0px,_transparent_50%),_radial-gradient(at_100%_100%,_rgba(147,51,234,0.4)_0px,_transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6 md:mb-8">
                For Admins (FB & WhatsApp)
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">Your Community has <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Real Value.</span></h2>
              <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                You spend hours moderating, approving members, and keeping the chat clean. It's time that work paid off. 
                We connect you with high-quality local sponsors who respect your rules.
              </p>
              <ul className="space-y-4 md:space-y-5 mb-8 md:mb-10">
                 <li className="flex items-center gap-3 text-slate-300 font-medium text-sm md:text-base">
                    <div className="bg-indigo-500/20 p-1 rounded-full text-indigo-400"><CheckCircle2 size={16} /></div> 
                    <span>Passive monthly income</span>
                 </li>
                 <li className="flex items-center gap-3 text-slate-300 font-medium text-sm md:text-base">
                    <div className="bg-indigo-500/20 p-1 rounded-full text-indigo-400"><CheckCircle2 size={16} /></div> 
                    <span>We provide the creative/copy</span>
                 </li>
                 <li className="flex items-center gap-3 text-slate-300 font-medium text-sm md:text-base">
                    <div className="bg-indigo-500/20 p-1 rounded-full text-indigo-400"><CheckCircle2 size={16} /></div> 
                    <span>You hold final veto power</span>
                 </li>
              </ul>
              <Button onClick={() => onOpenModal('admin')} variant="primary" className="bg-white text-slate-950 hover:bg-slate-200 border-none px-8 h-12 rounded-xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] w-full md:w-auto">
                 Claim Your Group
              </Button>
           </div>

           <div className="relative">
              {/* Decorative Background for Widget */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl blur-2xl opacity-20 transform rotate-3"></div>
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl">
                <div className="flex items-center justify-between mb-8 md:mb-10 pb-6 border-b border-white/5">
                    <div className="flex items-center gap-4">
                        <div className="bg-indigo-500/20 p-3 rounded-xl text-indigo-400">
                            <Calculator size={24} />
                        </div>
                        <div>
                            <h3 className="text-lg font-bold font-display text-white">Income Estimator</h3>
                            <p className="text-xs text-slate-400">Based on active users (WhatsApp/FB)</p>
                        </div>
                    </div>
                    <div className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">BETA</div>
                </div>

                <div className="mb-8 md:mb-10">
                    <div className="flex justify-between text-sm font-medium mb-4 text-slate-300">
                        <span>Group Size</span>
                        <span className="text-indigo-400 font-mono">{members.toLocaleString()} Members</span>
                    </div>
                    <div className="h-8 relative flex items-center">
                        <input 
                        type="range" 
                        min="1000" 
                        max="100000" 
                        step="1000" 
                        value={members}
                        onChange={(e) => setMembers(parseInt(e.target.value))}
                        className="custom-range z-10 relative touch-manipulation"
                        />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-600 mt-2 font-mono">
                        <span>1k</span>
                        <span>50k</span>
                        <span>100k+</span>
                    </div>
                </div>

                <div className="bg-slate-950 rounded-2xl p-6 text-center border border-white/5 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-green-500/20 transition-colors"></div>
                    
                    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Potential Yearly Revenue</p>
                    <div className="text-5xl md:text-6xl font-display font-bold text-white mb-2 tracking-tight relative z-10">
                        ${(earnings * 12).toLocaleString()}
                    </div>
                    <div className="inline-flex items-center gap-1 text-xs text-green-400 bg-green-500/10 px-2 py-1 rounded-full relative z-10">
                        <ArrowRight size={10} /> Paid Monthly
                    </div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};