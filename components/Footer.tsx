import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200 pb-28 md:pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-slate-900 font-bold text-lg tracking-tight">Group<span className="text-indigo-600">Spot</span></div>
           <div className="text-slate-500 text-sm text-center md:text-right">
              <p>&copy; {new Date().getFullYear()} GroupSpot. All rights reserved.</p>
              <p className="mt-2 text-xs text-slate-400 max-w-md">
                Disclaimer: GroupSpot is an independent marketplace and is not affiliated with, associated with, or endorsed by Meta Platforms, Inc. or Facebook.
              </p>
           </div>
        </div>
      </div>
    </footer>
  );
};