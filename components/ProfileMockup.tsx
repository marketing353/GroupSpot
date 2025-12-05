import React from 'react';
import { 
  ChevronLeft, 
  Search, 
  MoreHorizontal, 
  ThumbsUp, 
  MessageCircle, 
  Share, 
  Users, 
  Plus, 
  Mic, 
  Camera, 
  CheckCheck, 
  Sticker,
  Video,
  Phone,
  Globe,
  Bell,
  ArrowLeft
} from 'lucide-react';

// --- Shared Components ---

const PhoneFrame = ({ children, time = "9:41" }: { children: React.ReactNode, time?: string }) => (
  <div className="relative mx-auto w-[280px] xs:w-[320px] sm:w-[360px] h-[580px] xs:h-[650px] md:h-[720px] bg-black rounded-[2.5rem] md:rounded-[3.5rem] p-3 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] ring-4 ring-slate-900/50 select-none overflow-hidden transform transition-transform border border-slate-800 z-10 max-w-[calc(100vw-32px)]">
    <div className="relative h-full w-full bg-white rounded-[2rem] md:rounded-[2.75rem] overflow-hidden flex flex-col font-sans isolate mask-image:radial-gradient(white, black)">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-14 z-50 flex items-start justify-between px-6 pt-3.5 pointer-events-none mix-blend-difference text-white">
        <span className="text-[14px] font-semibold tracking-tight">{time}</span>
        <div className="flex gap-1.5 items-center pt-1">
             <div className="h-2.5 w-4 bg-current rounded-[1px]"></div>
             <div className="h-3.5 w-5 bg-current rounded-sm"></div>
             <div className="h-3 w-6 border border-current rounded-[3px] relative"><div className="absolute inset-0.5 bg-current rounded-[1px] w-[70%]"></div></div>
        </div>
      </div>
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] md:w-[120px] h-[28px] md:h-[32px] bg-black rounded-full z-[60] pointer-events-none"></div>
      
      {children}
      
      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/90 rounded-full z-50 pointer-events-none mix-blend-overlay"></div>
    </div>
  </div>
);

export const MockupFacebookGroup: React.FC = () => {
  return (
    <PhoneFrame>
      {/* App Header */}
      <div className="h-[96px] bg-white z-30 sticky top-0 flex flex-col justify-end pb-2 px-4 border-b border-slate-100 pt-10 shadow-sm">
        <div className="flex items-center justify-between text-slate-900">
          <ArrowLeft size={24} strokeWidth={2} />
          <div className="flex gap-5 text-slate-900">
             <Search size={22} strokeWidth={2} />
             <Share size={22} strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 bg-slate-50 no-scrollbar relative">
        
        {/* Cover Photo Area */}
        <div className="relative w-full aspect-[16/9] bg-slate-200 group cursor-pointer overflow-hidden">
             <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80')"}}></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
             
             {/* Sponsored Tag */}
             <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2 py-0.5 rounded shadow-sm text-slate-900 tracking-wide uppercase">
                Sponsored
             </div>
        </div>

        {/* Group Info */}
        <div className="bg-white px-4 py-4 mb-2 shadow-sm">
            <h1 className="text-[24px] font-bold text-slate-900 tracking-tight leading-tight mb-1">Liberty Village Community</h1>
            <div className="flex items-center gap-1.5 text-[13px] text-slate-500 font-medium mb-4">
                <Globe size={13} />
                <span>Public group</span>
                <span>•</span>
                <span className="text-slate-900 font-semibold">18.5K members</span>
            </div>

            <div className="flex gap-3 mb-5">
                <button className="bg-[#E7F3FF] text-[#1877F2] flex-1 py-2 rounded-lg text-[15px] font-bold flex items-center justify-center gap-2 active:scale-98 transition-transform">
                   <Users size={18} fill="currentColor" /> Joined
                </button>
                <button className="bg-slate-100 text-slate-700 flex-1 py-2 rounded-lg text-[15px] font-bold active:scale-98 transition-transform">
                   Invite
                </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-100">
                <div className="pb-3 border-b-[2px] border-[#1877F2] text-[#1877F2] text-[15px] font-semibold px-2">Featured</div>
                <div className="pb-3 text-slate-500 text-[15px] font-medium px-4">Discussion</div>
                <div className="pb-3 text-slate-500 text-[15px] font-medium px-4">Events</div>
            </div>
        </div>

        {/* Pinned Post */}
        <div className="bg-white p-4 mb-2 shadow-sm">
             <div className="flex items-start justify-between mb-3">
                <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center ring-1 ring-slate-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80')"}}></div>
                    <div>
                        <div className="flex items-center gap-1">
                          <span className="text-[15px] font-bold text-slate-900">Sarah Jenkins</span>
                          <span className="bg-[#E7F3FF] text-[#1877F2] text-[10px] px-1 py-0.5 rounded-[3px] font-bold flex items-center gap-0.5">
                             <CheckCheck size={10} /> ADMIN
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[12px] text-slate-400">
                           <span>2h</span>
                           <span>•</span>
                           <Globe size={10} />
                        </div>
                    </div>
                </div>
                <MoreHorizontal size={20} className="text-slate-400" />
            </div>
            
            <p className="text-[15px] text-slate-900 leading-normal mb-3">
                📢 Big shoutout to <span className="font-semibold text-[#1877F2]">@ModernLivingRealty</span> for sponsoring this month's community meetup! Check out their free home eval tool above. 👆
            </p>

            <div className="flex items-center justify-between text-[13px] text-slate-500 py-3 border-y border-slate-100">
                 <div className="flex items-center gap-1">
                    <div className="bg-[#1877F2] rounded-full p-1"><ThumbsUp size={8} className="text-white" fill="white" /></div> 
                    <span>42</span>
                 </div>
                 <div className="flex gap-3">
                    <span>12 Comments</span>
                    <span>2 Shares</span>
                 </div>
            </div>

            <div className="flex pt-1 mt-1 text-slate-600 font-medium">
                <div className="flex-1 flex items-center justify-center gap-2 py-2 active:bg-slate-50 rounded"><ThumbsUp size={18} /> Like</div>
                <div className="flex-1 flex items-center justify-center gap-2 py-2 active:bg-slate-50 rounded"><MessageCircle size={18} /> Comment</div>
                <div className="flex-1 flex items-center justify-center gap-2 py-2 active:bg-slate-50 rounded"><Share size={18} /> Share</div>
            </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export const MockupWhatsappGroup: React.FC = () => {
  return (
    <PhoneFrame>
        {/* Header */}
        <div className="h-[96px] bg-[#F5F5F5]/90 backdrop-blur-md z-40 sticky top-0 border-b border-slate-300/30 flex flex-col justify-end pb-2 px-3 pt-10">
             <div className="flex items-center justify-between w-full">
                 <div className="flex items-center text-[#007AFF] gap-1">
                    <ChevronLeft size={26} strokeWidth={2.5} />
                    <span className="text-[17px] font-normal leading-none pb-0.5">Chats</span>
                 </div>
                 
                 <div className="flex flex-col items-center flex-1 cursor-pointer">
                     <span className="text-[16px] font-semibold text-black tracking-tight">Liberty Village...</span>
                     <span className="text-[11px] text-[#8E8E93]">tap for group info</span>
                 </div>
                 
                 <div className="flex items-center gap-5 pr-1 text-[#007AFF]">
                    <Video size={24} strokeWidth={1.5} />
                    <Phone size={22} strokeWidth={1.5} />
                 </div>
             </div>
        </div>

        {/* Sticky Pinned Bar - Distinct and Clean */}
        <div className="sticky top-[0px] z-30 bg-[#F5F5F5]/95 backdrop-blur shadow-sm border-b border-slate-200/60 px-4 py-2 flex items-center justify-between cursor-pointer animate-slide-up">
            <div className="flex items-center gap-3 overflow-hidden">
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <Bell size={16} className="text-[#075E54]" fill="currentColor" />
                </div>
                <div className="flex flex-col min-w-0">
                    <span className="text-[10px] font-bold text-[#075E54] uppercase tracking-wider">Sponsored Pin</span>
                    <span className="text-[13px] font-medium text-slate-900 truncate w-full">50% Off at GymShark Today Only!</span>
                </div>
            </div>
            <ChevronLeft size={16} className="rotate-180 text-slate-400 shrink-0" />
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto bg-[#EFEFEF] relative font-sans p-4 custom-scrollbar">
             {/* Wallpaper - CSS Pattern instead of external image for stability */}
             <div className="absolute inset-0 opacity-[0.6] bg-repeat pointer-events-none mix-blend-multiply" 
                  style={{
                      backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)", 
                      backgroundSize: "20px 20px"
                  }}>
             </div>

             <div className="flex justify-center mb-6 relative z-10">
                 <span className="bg-[#E1E5E9] text-[#555] text-[11px] font-medium px-2 py-1 rounded shadow-sm border border-white/20">Today</span>
             </div>

             <div className="space-y-2 relative z-10 pb-20">
                  {/* Incoming */}
                  <div className="flex flex-col items-start max-w-[85%]">
                      <div className="bg-white rounded-lg p-2 pl-2.5 pr-10 shadow-sm relative text-[15px] text-black leading-snug first:rounded-tl-none">
                          <span className="text-[13px] font-bold text-orange-500 block mb-0.5">Sarah M.</span>
                          Does anyone know a good plumber available today? 🔧
                          <span className="text-[10px] text-slate-400 absolute bottom-1 right-1.5">9:41 AM</span>
                      </div>
                  </div>

                  {/* Outgoing */}
                  <div className="flex flex-col items-end self-end max-w-[85%] ml-auto">
                      <div className="bg-[#E7FFDB] rounded-lg p-2 pl-2.5 pr-12 shadow-sm relative text-[15px] text-black leading-snug first:rounded-tr-none">
                          Check the pinned message!
                          <div className="absolute bottom-1 right-1.5 flex items-center gap-0.5">
                              <span className="text-[10px] text-[#555]">9:42 AM</span>
                              <CheckCheck size={14} className="text-[#34B7F1]"/>
                          </div>
                      </div>
                  </div>

                  {/* Admin Msg */}
                  <div className="flex flex-col items-start max-w-[85%] mt-4">
                      <div className="bg-white rounded-lg p-2 pl-2.5 pr-10 shadow-sm relative text-[15px] text-black leading-snug first:rounded-tl-none ring-2 ring-[#25D366]/20">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[13px] font-bold text-[#075E54]">Mike (Admin)</span>
                            <span className="bg-[#25D366]/10 text-[#075E54] text-[9px] px-1 py-px rounded border border-[#25D366]/20 font-bold uppercase">Admin</span>
                          </div>
                          I just pinned the new deal for GymShark. Link in bio above! 👆
                          <span className="text-[10px] text-slate-400 absolute bottom-1 right-1.5">9:45 AM</span>
                      </div>
                  </div>
             </div>
        </div>

        {/* Input Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#F6F6F6] px-2 pt-2 pb-6 border-t border-slate-300/60 flex items-center gap-2 z-50">
            <Plus size={26} className="text-[#007AFF] stroke-[1.5]" />
            <div className="flex-1 bg-white rounded-full border border-slate-300/80 h-[36px] px-3 flex items-center justify-between shadow-sm">
                <span className="text-slate-300 text-[16px]">Message</span>
                <Sticker size={20} className="text-slate-400" />
            </div>
            <Camera size={24} className="text-[#007AFF] stroke-[1.5]" />
            <Mic size={24} className="text-[#007AFF] stroke-[1.5]" />
        </div>
    </PhoneFrame>
  );
};