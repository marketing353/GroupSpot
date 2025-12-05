import React, { useState, useEffect } from 'react';
import { User, X } from 'lucide-react';

const MESSAGES = [
  { name: "Sarah M.", text: "rented a Mom Group in Toronto", time: "2m ago" },
  { name: "Mike R.", text: "pinned a message in HVAC Pros", time: "5m ago" },
  { name: "Lakeshore Realty", text: "booked 3 WhatsApp groups", time: "Just now" },
  { name: "David K.", text: "earned $450 from his group", time: "1m ago" },
  { name: "Jenny L.", text: "joined the waitlist", time: "12s ago" },
];

export const FOMOToast: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    // Initial delay
    const initialTimer = setTimeout(() => setVisible(true), 3000);

    // Loop
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % MESSAGES.length);
        setVisible(true);
      }, 500); // Wait for fade out before changing text and fading in
    }, 8000); // Change every 8s

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  if (!visible) return null;

  const msg = MESSAGES[messageIndex];

  return (
    <div className={`fixed bottom-4 left-4 md:bottom-8 md:left-8 z-40 bg-white rounded-xl shadow-2xl shadow-indigo-500/20 border border-slate-100 p-4 pr-10 flex items-center gap-3 max-w-[300px] animate-slide-up transition-all duration-500 transform hover:scale-105 cursor-pointer`}>
       <button onClick={(e) => { e.stopPropagation(); setVisible(false); }} className="absolute top-2 right-2 text-slate-300 hover:text-slate-500">
         <X size={14} />
       </button>
       
       <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 shrink-0">
         <User size={18} />
       </div>
       
       <div>
         <p className="text-sm font-bold text-slate-900">{msg.name}</p>
         <p className="text-xs text-slate-500 leading-tight">
           {msg.text} <span className="text-slate-300">• {msg.time}</span>
         </p>
       </div>
    </div>
  );
};