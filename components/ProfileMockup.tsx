import React from 'react';
import { 
  ShieldCheck, 
  ChevronLeft, 
  Search, 
  MoreHorizontal, 
  ThumbsUp, 
  MessageCircle, 
  Share2, 
  Users, 
  Plus, 
  Mic, 
  Camera, 
  CheckCheck, 
  Image as ImageIcon,
  Sticker
} from 'lucide-react';

// --- Shared Components ---

const PhoneFrame = ({ children, time = "9:41" }: { children: React.ReactNode, time?: string }) => (
  <div className="relative mx-auto w-[280px] xs:w-[320px] sm:w-[360px] h-[580px] xs:h-[650px] md:h-[720px] bg-black rounded-[2.5rem] md:rounded-[3rem] p-2.5 md:p-3 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] ring-4 ring-slate-900/50 select-none overflow-hidden transform transition-transform">
    {/* Screen Container */}
    <div className="relative h-full w-full bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden flex flex-col font-sans isolate">
      
      {/* Status Bar (Absolute) */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-14 z-50 flex items-start justify-between px-5 md:px-6 pt-3 md:pt-4 pointer-events-none mix-blend-difference text-white">
        <span className="text-[14px] md:text-[15px] font-semibold tracking-tight">{time}</span>
        <div className="flex gap-1.5 items-center pt-1">
             <div className="h-2.5 w-4 bg-current rounded-[1px]"></div> {/* Signal */}
             <div className="h-3.5 w-5 bg-current rounded-sm"></div> {/* Wifi */}
             <div className="h-3 w-6 border border-current rounded-[3px] relative"><div className="absolute inset-0.5 bg-current rounded-[1px] w-[70%]"></div></div> {/* Battery */}
        </div>
      </div>

      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 md:w-28 h-7 md:h-8 bg-black rounded-full z-[60] pointer-events-none flex justify-center items-center">
        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/20 ml-16 md:ml-20"></div>
      </div>
      
      {children}
      
      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 md:w-32 h-1 bg-black/90 rounded-full z-50 pointer-events-none mix-blend-overlay"></div>
    </div>
  </div>
);

// --- Facebook Mockup ---

export const MockupFacebookGroup: React.FC = () => {
  return (
    <PhoneFrame>
      {/* App Header */}
      <div className="h-24 bg-white/95 backdrop-blur-md z-30 sticky top-0 flex flex-col justify-end pb-3 px-4 border-b border-slate-100 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <div className="flex items-center justify-between text-slate-900 mt-8">
          <ChevronLeft size={28} className="text-blue-600" />
          <div className="flex gap-4 text-slate-900">
             <Search size={24} />
             <Share2 size={24} />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 bg-[#F0F2F5] no-scrollbar relative">
        
        {/* COVER PHOTO AREA */}
        <div className="relative w-full aspect-[16/10] bg-slate-200 group cursor-pointer overflow-hidden border-b border-slate-200">
             {/* Image - Reliable Unsplash Real Estate */}
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-105" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-27b88e35e238?auto=format&fit=crop&w=800&q=80')"}}></div>
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10"></div>
             
             {/* Sponsored Tag */}
             <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-2 py-1 rounded-[4px] uppercase tracking-wider shadow-sm">
                Sponsored Cover
             </div>

             {/* Ad Content Overlay */}
             <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center gap-2 mb-2">
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[3px]">FEATURED</span>
                    <span className="text-xs font-medium text-white/90">Modern Living Realty</span>
                </div>
                <h3 className="text-xl font-bold leading-tight mb-1 shadow-sm">Thinking of Selling in 2025?</h3>
                <p className="text-xs text-white/80 mb-3 line-clamp-1">Get a free home evaluation from Toronto's #1 team.</p>
                <button className="bg-white text-slate-900 text-xs font-bold py-2 px-6 rounded-full shadow-lg hover:bg-slate-50 transition-colors w-full sm:w-auto">
                    Get Free Evaluation
                </button>
             </div>
        </div>

        {/* Group Info */}
        <div className="bg-white px-4 py-5 mb-2">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight leading-none mb-1">Liberty Village Community</h1>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-4">
                <span className="flex items-center gap-1 text-slate-600"><ShieldCheck size={12} fill="currentColor" className="text-slate-300" /> Private Group</span>
                <span>•</span>
                <span className="text-slate-900 font-bold">18.5K members</span>
            </div>

            {/* Facepile + Action - Reliable Unsplash Portraits */}
            <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80')"}}></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80')"}}></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80')"}}></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">+4k</div>
                </div>
                <button className="bg-[#E7F3FF] text-[#1877F2] px-4 py-1.5 rounded-md text-sm font-bold flex items-center gap-1.5 active:scale-95 transition-transform">
                   <Users size={16} fill="currentColor" /> Joined
                </button>
            </div>
            
            {/* Tabs */}
            <div className="flex gap-6 mt-6 border-b border-slate-100 pb-0 overflow-x-auto no-scrollbar">
                <div className="pb-3 border-b-2 border-[#1877F2] text-[#1877F2] text-sm font-semibold whitespace-nowrap">Discussion</div>
                <div className="pb-3 text-slate-500 text-sm font-medium whitespace-nowrap">Featured</div>
                <div className="pb-3 text-slate-500 text-sm font-medium whitespace-nowrap">People</div>
                <div className="pb-3 text-slate-500 text-sm font-medium whitespace-nowrap">Media</div>
            </div>
        </div>

        {/* Create Post */}
        <div className="bg-white p-4 mb-2 flex gap-3 items-center">
             <div className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80')"}}></div>
             <div className="flex-1 bg-slate-100 rounded-full h-9 flex items-center px-4 text-slate-500 text-sm">Write something...</div>
             <ImageIcon className="text-green-500" size={24} />
        </div>

        {/* Feed Post */}
        <div className="bg-white p-4 pb-2">
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80')"}}></div>
                    <div>
                        <div className="text-sm font-bold text-slate-900">Sarah Jenkins</div>
                        <div className="text-xs text-slate-500 flex items-center gap-1">Top Contributor · 4h · <Users size={10} /></div>
                    </div>
                </div>
                <MoreHorizontal size={20} className="text-slate-400" />
            </div>
            <p className="text-[15px] text-slate-900 leading-snug mb-3">
                Just wanted to shout out the group sponsor <strong>Modern Living Realty</strong>! They helped us sell our condo in 3 days. Highly recommend checking their banner above if you're looking. 🏡✨
            </p>
            {/* Post Image - Reliable Unsplash Interior */}
            <div className="h-48 w-full bg-slate-100 rounded-lg mb-3 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80')"}}></div>
            
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
                 <div className="flex items-center gap-1"><div className="bg-blue-500 rounded-full p-0.5"><ThumbsUp size={8} className="text-white" fill="white" /></div> 42</div>
                 <div>12 Comments</div>
            </div>

            <div className="flex items-center justify-between text-slate-500 text-sm py-2">
                <button className="flex items-center gap-1.5 flex-1 justify-center py-1 hover:bg-slate-50 rounded"><ThumbsUp size={18} /> Like</button>
                <button className="flex items-center gap-1.5 flex-1 justify-center py-1 hover:bg-slate-50 rounded"><MessageCircle size={18} /> Comment</button>
                <button className="flex items-center gap-1.5 flex-1 justify-center py-1 hover:bg-slate-50 rounded"><Share2 size={18} /> Share</button>
            </div>
        </div>
      </div>
    </PhoneFrame>
  );
};


// --- WhatsApp Mockup ---

export const MockupWhatsappGroup: React.FC = () => {
  return (
    <PhoneFrame>
        {/* Header - Native iOS WhatsApp Style */}
        <div className="h-[105px] bg-[#F6F6F6]/90 backdrop-blur-xl z-40 sticky top-0 border-b border-[#b2b2b2]/30 flex flex-col justify-end pb-2.5 px-3">
             <div className="flex items-center justify-between">
                 <div className="flex items-center text-[#007AFF] -ml-2 cursor-pointer active:opacity-60">
                    <ChevronLeft size={26} strokeWidth={2.5} />
                    <span className="text-[17px] leading-none -ml-1">Chats</span>
                 </div>
                 
                 <div className="flex flex-col items-center flex-1 mx-2 cursor-pointer active:opacity-60">
                     <span className="text-[16px] font-semibold text-black tracking-tight leading-tight">Liberty Village Community</span>
                     <span className="text-[11px] text-[#8E8E93] leading-tight mt-0.5">tap for group info</span>
                 </div>
                 
                 <div className="w-9 h-9 rounded-full bg-slate-200 overflow-hidden relative cursor-pointer active:opacity-80">
                     {/* Group Icon - Reliable Unsplash */}
                     <img 
                      src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=100&q=80" 
                      className="w-full h-full object-cover" 
                      alt="Group Icon"
                      loading="eager"
                     />
                 </div>
             </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto bg-[#EFEFEF] relative font-sans pb-20 custom-scrollbar">
             {/* Wallpaper Pattern - CSS Generated for Reliability */}
             <div className="absolute inset-0 opacity-[0.5]" style={{backgroundImage: "radial-gradient(circle, #cbd5e1 1.5px, transparent 1.5px)", backgroundSize: "20px 20px"}}></div>
             
             {/* PINNED MESSAGE - Realistic iOS Style */}
             <div className="sticky top-[8px] z-30 px-3 animate-slide-up">
                 <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm border border-black/5 flex overflow-hidden cursor-pointer active:bg-gray-50 transition-colors">
                      <div className="w-1.5 bg-[#25D366]"></div> {/* Green accent line */}
                      <div className="flex-1 p-2 flex items-center gap-3">
                          <div className="shrink-0 bg-gray-100 rounded-md w-9 h-9 flex items-center justify-center text-lg overflow-hidden border border-gray-100">
                             🛍️
                          </div>
                          <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center mb-0.5">
                                  <span className="text-[10px] font-bold text-[#128C7E] uppercase tracking-wide">Pinned Message</span>
                              </div>
                              <p className="text-[13px] font-medium text-black truncate leading-tight">Flash Sale: 50% Off at GymShark Today Only!</p>
                          </div>
                          <ChevronLeft className="rotate-180 text-[#C7C7CC] shrink-0" size={16} />
                      </div>
                 </div>
             </div>

             <div className="px-3 pt-4 space-y-2 relative z-20 pb-4">
                  <div className="flex justify-center my-4">
                      <span className="bg-[#E1E4E8]/90 backdrop-blur-[2px] text-[#495057] text-[10px] font-medium px-2.5 py-1 rounded-[6px] shadow-[0_1px_1px_rgba(0,0,0,0.05)] uppercase tracking-wide">Today</span>
                  </div>

                  {/* System Message (Encryption) */}
                  <div className="flex justify-center mb-6 px-6 text-center">
                     <span className="bg-[#FFF5C4] text-[#55503C] text-[10px] px-3 py-2 rounded-[8px] shadow-sm border border-[#F0E6AA] leading-snug">
                        🔒 Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.
                     </span>
                  </div>

                  {/* Incoming Msg 1 (Left, White) */}
                  <div className="flex flex-col items-start max-w-[85%] group mb-1">
                      <div className="bg-white rounded-[18px] rounded-tl-[4px] px-3 py-1.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative group cursor-pointer active:brightness-95 transition-all">
                          <span className="text-[13px] font-bold text-[#E542A3] mb-0.5 block hover:underline cursor-pointer">Sarah M.</span>
                          <p className="text-[16px] text-black leading-[1.35] pr-12 pb-1">Does anyone know a good plumber available today? 🔧</p>
                          <span className="text-[10px] text-[#8E8E93] absolute bottom-1.5 right-2">9:41 AM</span>
                      </div>
                  </div>

                  {/* Reply / Outgoing (Right, Green) */}
                  <div className="flex flex-col items-end self-end max-w-[85%] ml-auto mb-1">
                      <div className="bg-[#DCF8C6] rounded-[18px] rounded-tr-[4px] px-3 py-1.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative group cursor-pointer active:brightness-95 transition-all">
                          <p className="text-[16px] text-black leading-[1.35] pr-16 pb-1">Check the pinned message, I think there was a promo for ProFix earlier.</p>
                          <div className="absolute bottom-1.5 right-2 flex items-center gap-0.5">
                              <span className="text-[10px] text-[#6FB26C]">9:42 AM</span>
                              <CheckCheck size={15} className="text-[#34B7F1]"/>
                          </div>
                      </div>
                  </div>

                   {/* Admin Msg (Left, White) */}
                   <div className="flex flex-col items-start max-w-[88%] mt-4">
                      <div className="bg-white rounded-[18px] rounded-tl-[4px] px-3 py-1.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative border border-transparent cursor-pointer active:brightness-95 transition-all">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-[13px] font-bold text-[#075E54]">Mike (Admin)</span>
                            <span className="bg-[#E3F2FD] text-[#0D47A1] text-[9px] px-1.5 py-[2px] rounded-[4px] border border-[#BBDEFB] font-semibold tracking-wide">Group Admin</span>
                          </div>
                          <p className="text-[16px] text-black leading-[1.35] pr-12 pb-1">I just pinned the new deal for GymShark. Link in bio above! 👆</p>
                          <span className="text-[10px] text-[#8E8E93] absolute bottom-1.5 right-2">9:45 AM</span>
                      </div>
                  </div>
             </div>
        </div>

        {/* Input Bar - Native iOS Style */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#F6F6F6]/95 backdrop-blur-xl px-2 pb-8 pt-2 border-t border-[#b2b2b2]/30 flex items-end gap-2 z-50">
            <Plus size={28} className="text-[#007AFF] shrink-0 mb-1.5 cursor-pointer active:opacity-60" strokeWidth={1.5} />
            <div className="flex-1 bg-white rounded-[20px] border border-[#C6C6C8] min-h-[36px] px-3 py-2 flex items-center shadow-sm mb-1">
                <span className="text-[#C7C7CC] text-[16px]">Message</span>
                <div className="ml-auto flex gap-2 text-[#007AFF]">
                    <Sticker size={22} strokeWidth={1.5} className="text-[#007AFF] opacity-80" />
                </div>
            </div>
            <div className="flex items-center gap-3 mb-1.5 px-1">
                <Camera size={26} className="text-[#007AFF] shrink-0 cursor-pointer active:opacity-60" strokeWidth={1.5} />
                <Mic size={26} className="text-[#007AFF] shrink-0 cursor-pointer active:opacity-60" strokeWidth={1.5} />
            </div>
        </div>
    </PhoneFrame>
  );
};