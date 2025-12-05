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
  Sticker,
  Video,
  Phone
} from 'lucide-react';

// --- Shared Components ---

const PhoneFrame = ({ children, time = "9:41" }: { children: React.ReactNode, time?: string }) => (
  <div className="relative mx-auto w-[280px] xs:w-[320px] sm:w-[360px] h-[580px] xs:h-[650px] md:h-[720px] bg-black rounded-[2.5rem] md:rounded-[3.5rem] p-3 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] ring-4 ring-slate-900/50 select-none overflow-hidden transform transition-transform border border-slate-800">
    {/* Screen Container */}
    <div className="relative h-full w-full bg-white rounded-[2rem] md:rounded-[2.75rem] overflow-hidden flex flex-col font-sans isolate mask-image:radial-gradient(white, black)">
      
      {/* Status Bar (Absolute) */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-14 z-50 flex items-start justify-between px-6 pt-4 pointer-events-none mix-blend-difference text-white">
        <span className="text-[15px] font-semibold tracking-tight">{time}</span>
        <div className="flex gap-1.5 items-center pt-1">
             <div className="h-2.5 w-4 bg-current rounded-[1px]"></div> {/* Signal */}
             <div className="h-3.5 w-5 bg-current rounded-sm"></div> {/* Wifi */}
             <div className="h-3 w-6 border border-current rounded-[3px] relative"><div className="absolute inset-0.5 bg-current rounded-[1px] w-[70%]"></div></div> {/* Battery */}
        </div>
      </div>

      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-8 bg-black rounded-full z-[60] pointer-events-none flex justify-center items-center">
        <div className="w-16 h-16 rounded-full bg-black/50 absolute -top-4 blur-md"></div>
      </div>
      
      {children}
      
      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/90 rounded-full z-50 pointer-events-none mix-blend-overlay"></div>
    </div>
  </div>
);

// --- Facebook Mockup ---

export const MockupFacebookGroup: React.FC = () => {
  return (
    <PhoneFrame>
      {/* App Header */}
      <div className="h-24 bg-white/95 backdrop-blur-md z-30 sticky top-0 flex flex-col justify-end pb-3 px-4 border-b border-slate-100/50">
        <div className="flex items-center justify-between text-slate-900 mt-8">
          <ChevronLeft size={28} className="text-black" />
          <div className="flex gap-5 text-slate-900">
             <Search size={24} strokeWidth={2} />
             <Share2 size={24} strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 bg-[#F2F4F7] no-scrollbar relative">
        
        {/* COVER PHOTO AREA */}
        <div className="relative w-full aspect-[16/9] bg-slate-200 group cursor-pointer overflow-hidden shadow-sm">
             {/* Image */}
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80')"}}></div>
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
             
             {/* Sponsored Tag */}
             <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[10px] font-bold px-2 py-0.5 rounded-[4px] uppercase tracking-wide shadow-sm text-slate-900 border border-white/50">
                Sponsored
             </div>

             {/* Ad Content Overlay */}
             <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                <div className="flex items-center gap-2 mb-1.5">
                    <span className="bg-[#1877F2] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-[3px]">PRO</span>
                    <span className="text-xs font-semibold text-white/95 tracking-wide">Modern Living Realty</span>
                </div>
                <h3 className="text-lg font-bold leading-tight mb-2 text-white drop-shadow-sm">Thinking of Selling in 2025?</h3>
                <button className="bg-white text-slate-900 text-[11px] font-bold py-1.5 px-4 rounded-full shadow-lg hover:bg-slate-50 transition-colors w-auto">
                    Get Free Evaluation
                </button>
             </div>
        </div>

        {/* Group Info */}
        <div className="bg-white px-4 py-5 mb-2 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight leading-none mb-1.5">Liberty Village Community</h1>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-5">
                <span className="flex items-center gap-1 text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded"><ShieldCheck size={10} className="text-slate-400" /> Private</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-900 font-bold">18.5K members</span>
            </div>

            {/* Facepile + Action */}
            <div className="flex items-center justify-between mb-2">
                <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                        <div key={i} className="w-9 h-9 rounded-full border-[2px] border-white bg-slate-200 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-${1500000000000+i}?auto=format&fit=crop&w=100&q=80')`}}></div>
                    ))}
                    <div className="w-9 h-9 rounded-full border-[2px] border-white bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-500">+4k</div>
                </div>
                <div className="flex gap-2">
                    <button className="bg-[#E7F3FF] text-[#1877F2] px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-1.5 active:scale-95 transition-transform">
                       <Users size={18} fill="currentColor" /> Joined
                    </button>
                    <button className="bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-sm font-semibold active:scale-95 transition-transform">
                       Invite
                    </button>
                </div>
            </div>
            
            {/* Tabs */}
            <div className="flex gap-6 mt-4 pt-2 border-t border-slate-50 overflow-x-auto no-scrollbar">
                <div className="pb-2 border-b-[2px] border-[#1877F2] text-[#1877F2] text-sm font-semibold whitespace-nowrap px-1">Featured</div>
                <div className="pb-2 text-slate-500 text-sm font-medium whitespace-nowrap px-1">Discussion</div>
                <div className="pb-2 text-slate-500 text-sm font-medium whitespace-nowrap px-1">Media</div>
            </div>
        </div>

        {/* Feed Post */}
        <div className="bg-white p-4 pb-2 shadow-sm">
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80')"}}></div>
                    <div>
                        <div className="text-[15px] font-bold text-slate-900 leading-tight">Sarah Jenkins</div>
                        <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">Admin · 2h · <Users size={10} /></div>
                    </div>
                </div>
                <MoreHorizontal size={20} className="text-slate-400" />
            </div>
            <p className="text-[15px] text-slate-900 leading-snug mb-3">
                Huge thanks to our new community sponsor <span className="text-[#1877F2] font-semibold">@ModernLivingRealty</span>! 🏡 check out their banner above if you're looking for a free home evaluation.
            </p>
            {/* Post Image */}
            <div className="aspect-[4/3] w-full bg-slate-100 rounded-lg mb-3 bg-cover bg-center border border-slate-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80')"}}></div>
            
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
                 <div className="flex items-center gap-1"><div className="bg-[#1877F2] rounded-full p-[3px]"><ThumbsUp size={8} className="text-white" fill="white" /></div> 42</div>
                 <div>12 Comments</div>
            </div>

            <div className="flex items-center justify-between text-slate-500 text-sm py-1">
                <button className="flex items-center gap-2 flex-1 justify-center py-2 hover:bg-slate-50 rounded-lg transition-colors font-medium"><ThumbsUp size={18} /> Like</button>
                <button className="flex items-center gap-2 flex-1 justify-center py-2 hover:bg-slate-50 rounded-lg transition-colors font-medium"><MessageCircle size={18} /> Comment</button>
                <button className="flex items-center gap-2 flex-1 justify-center py-2 hover:bg-slate-50 rounded-lg transition-colors font-medium"><Share2 size={18} /> Share</button>
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
        <div className="h-[105px] bg-[#F6F6F6]/95 backdrop-blur-xl z-40 sticky top-0 border-b border-slate-300/50 flex flex-col justify-end pb-2.5 px-2">
             <div className="flex items-center justify-between w-full">
                 <div className="flex items-center text-[#007AFF] cursor-pointer active:opacity-60 pl-1">
                    <ChevronLeft size={26} strokeWidth={2.5} />
                    <span className="text-[17px] leading-none -ml-0.5 font-medium">Chats</span>
                 </div>
                 
                 <div className="flex flex-col items-center flex-1 cursor-pointer active:opacity-60 min-w-0 px-2">
                     <span className="text-[16px] font-semibold text-black tracking-tight leading-tight truncate w-full text-center">Liberty Village Community</span>
                     <span className="text-[11px] text-[#8E8E93] leading-tight mt-0.5">tap for info</span>
                 </div>
                 
                 <div className="flex items-center gap-4 pr-3 text-[#007AFF]">
                    <Video size={22} strokeWidth={2} />
                    <Phone size={22} strokeWidth={2} />
                 </div>
             </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto bg-[#EFEFEF] relative font-sans pb-20 custom-scrollbar">
             {/* Wallpaper Pattern */}
             <div className="absolute inset-0 opacity-[0.4]" style={{backgroundImage: "url('https://i.pinimg.com/originals/97/c0/07/97c00759d90d786d9b6096d274ad3e07.png')", backgroundSize: "cover"}}></div>
             
             {/* PINNED MESSAGE BANNER */}
             <div className="sticky top-[8px] z-30 px-3 animate-slide-up">
                 <div className="bg-white/90 backdrop-blur-md rounded-[12px] shadow-sm flex overflow-hidden cursor-pointer active:bg-white transition-colors border border-black/5">
                      <div className="w-[5px] bg-[#25D366]"></div>
                      <div className="flex-1 p-2.5 flex items-center gap-3">
                          <div className="shrink-0 bg-slate-100 rounded-lg w-10 h-10 flex items-center justify-center text-xl shadow-inner border border-slate-200/50">
                             🏷️
                          </div>
                          <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center mb-0.5">
                                  <span className="text-[11px] font-bold text-[#128C7E] uppercase tracking-wide">Sponsored Pin</span>
                              </div>
                              <p className="text-[14px] font-medium text-slate-900 truncate leading-snug">Flash Sale: 50% Off at GymShark Today!</p>
                          </div>
                          <ChevronLeft className="rotate-180 text-[#C7C7CC] shrink-0 mr-1" size={18} />
                      </div>
                 </div>
             </div>

             <div className="px-4 pt-4 space-y-3 relative z-20 pb-4">
                  <div className="flex justify-center my-4">
                      <span className="bg-[#E4E6EB]/80 backdrop-blur-[4px] text-[#5e656d] text-[11px] font-medium px-3 py-1 rounded-[8px] shadow-sm">Today</span>
                  </div>

                  {/* Encryption Notice */}
                  <div className="flex justify-center mb-6 px-4 text-center">
                     <span className="bg-[#FFF5C4]/90 text-[#55503C] text-[11px] px-3 py-1.5 rounded-[8px] shadow-sm border border-[#F0E6AA]/50 leading-snug max-w-[240px]">
                        🔒 Messages are end-to-end encrypted. No one outside of this chat can read or listen to them.
                     </span>
                  </div>

                  {/* Incoming Msg */}
                  <div className="flex flex-col items-start max-w-[85%] group">
                      <div className="bg-white rounded-[18px] rounded-tl-[4px] px-3.5 py-1.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative">
                          <span className="text-[13px] font-bold text-[#E542A3] mb-0.5 block">Sarah M.</span>
                          <p className="text-[16px] text-black leading-[1.3] pr-10 pb-1">Does anyone know a good plumber available today? 🔧</p>
                          <span className="text-[10px] text-[#8E8E93] float-right mt-1 ml-2">9:41 AM</span>
                      </div>
                  </div>

                  {/* Outgoing Msg */}
                  <div className="flex flex-col items-end self-end max-w-[85%] ml-auto">
                      <div className="bg-[#E1FFC7] rounded-[18px] rounded-tr-[4px] px-3.5 py-1.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative">
                          <p className="text-[16px] text-black leading-[1.3] pr-12 pb-1">Check the pinned message!</p>
                          <div className="absolute bottom-1.5 right-2 flex items-center gap-0.5">
                              <span className="text-[10px] text-[#589d62]">9:42 AM</span>
                              <CheckCheck size={14} className="text-[#34B7F1]"/>
                          </div>
                      </div>
                  </div>

                   {/* Admin Msg */}
                   <div className="flex flex-col items-start max-w-[88%] mt-2">
                      <div className="bg-white rounded-[18px] rounded-tl-[4px] px-3.5 py-1.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative border border-transparent">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-[13px] font-bold text-[#075E54]">Mike (Admin)</span>
                            <span className="bg-[#E7F3FF] text-[#007AFF] text-[9px] px-1.5 py-[1px] rounded-[4px] font-bold tracking-wide uppercase border border-blue-100">Admin</span>
                          </div>
                          <p className="text-[16px] text-black leading-[1.3] pr-10 pb-1">I just pinned the new deal for GymShark. Link in bio above! 👆</p>
                          <span className="text-[10px] text-[#8E8E93] float-right mt-1 ml-2">9:45 AM</span>
                      </div>
                  </div>
             </div>
        </div>

        {/* Input Bar - Native iOS Style */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#F6F6F6]/90 backdrop-blur-xl px-2 pb-8 pt-2 border-t border-slate-300/50 flex items-end gap-2 z-50">
            <Plus size={28} className="text-[#007AFF] shrink-0 mb-1.5 stroke-[1.5px]" />
            <div className="flex-1 bg-white rounded-[20px] border border-[#C6C6C8] min-h-[36px] px-3 py-[7px] flex items-center shadow-sm mb-1">
                <span className="text-slate-300 text-[16px]">Message</span>
                <div className="ml-auto flex gap-3 text-[#007AFF]">
                    <Sticker size={22} className="opacity-80 stroke-[1.5px]" />
                    <ImageIcon size={22} className="opacity-80 stroke-[1.5px]" />
                </div>
            </div>
            <div className="flex items-center gap-3 mb-1.5 px-1">
                <Camera size={24} className="text-[#007AFF] shrink-0 stroke-[1.5px]" />
                <Mic size={24} className="text-[#007AFF] shrink-0 stroke-[1.5px]" />
            </div>
        </div>
    </PhoneFrame>
  );
};
