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
  <div className="relative mx-auto w-[280px] xs:w-[320px] sm:w-[360px] h-[580px] xs:h-[650px] md:h-[720px] bg-black rounded-[45px] md:rounded-[55px] p-[13px] md:p-[14px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-[1px] ring-white/10 select-none overflow-hidden transform transition-transform border-[6px] border-slate-900 z-10 max-w-[calc(100vw-32px)] box-content">
    
    {/* Screen Container with Concentric Corners */}
    <div className="relative h-full w-full bg-white rounded-[32px] md:rounded-[41px] overflow-hidden flex flex-col font-sans isolate shadow-[inset_0_0_12px_rgba(0,0,0,0.4)]">
      
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-14 z-50 flex items-start justify-between px-6 pt-3.5 pointer-events-none mix-blend-difference text-white">
        <span className="text-[14px] font-semibold tracking-tight font-display pl-1">{time}</span>
        <div className="flex gap-1.5 items-center pt-1 pr-1">
             <div className="h-2.5 w-4 bg-current rounded-[2px]"></div>
             <div className="h-3.5 w-5 bg-current rounded-[2px]"></div>
             <div className="h-3 w-6 border-[1.5px] border-current rounded-[4px] relative flex items-center p-0.5">
                <div className="bg-current rounded-[1px] h-full w-full"></div>
             </div>
        </div>
      </div>

      {/* Dynamic Island */}
      <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[96px] md:w-[126px] h-[28px] md:h-[34px] bg-black rounded-full z-[60] pointer-events-none shadow-sm"></div>
      
      {children}
      
      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-36 h-1 bg-black/90 rounded-full z-50 pointer-events-none mix-blend-overlay"></div>
    </div>
  </div>
);

export const MockupFacebookGroup: React.FC = () => {
  return (
    <PhoneFrame>
      {/* App Header */}
      <div className="h-[96px] bg-white z-30 sticky top-0 flex flex-col justify-end pb-3 px-4 shadow-[0_1px_2px_rgba(0,0,0,0.05)] pt-10">
        <div className="flex items-center justify-between text-slate-900">
          <ArrowLeft size={24} strokeWidth={2} className="text-slate-900" />
          <div className="flex gap-5 text-slate-900">
             <Search size={22} strokeWidth={2} />
             <Share size={22} strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 bg-white no-scrollbar relative">
        
        {/* Cover Photo Area - Edge to Edge 1.91:1 */}
        <div className="relative w-full aspect-[1.91/1] bg-slate-100 group cursor-pointer overflow-hidden">
             <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80')"}}></div>
             {/* Gradient overlay for readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
             
             {/* Sponsored Tag - Glassmorphic */}
             <div className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-md text-[10px] font-bold px-2 py-0.5 rounded text-white tracking-wide uppercase flex items-center gap-1 border border-white/20">
                Sponsored
             </div>
        </div>

        {/* Group Info */}
        <div className="px-4 py-4 mb-2">
            <h1 className="text-[22px] font-bold text-slate-900 tracking-tight leading-tight mb-1">Liberty Village Community</h1>
            
            <div className="flex items-center gap-2 mb-4">
               <div className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-600 flex items-center gap-1">
                  <Globe size={10} /> Public Group
               </div>
               <span className="text-[12px] text-slate-500 font-medium">18.5K members</span>
            </div>

            <div className="flex gap-3 mb-5">
                <button className="bg-[#E7F3FF] text-[#1877F2] flex-1 py-2 rounded-lg text-[14px] font-bold flex items-center justify-center gap-2 active:scale-98 transition-transform">
                   <Users size={18} fill="currentColor" /> Joined
                </button>
                <button className="bg-slate-100 text-slate-700 flex-1 py-2 rounded-lg text-[14px] font-semibold active:scale-98 transition-transform">
                   Invite
                </button>
            </div>

            {/* Tabs */}
            <div className="flex border-b border-slate-100 overflow-x-auto no-scrollbar gap-6">
                <div className="pb-3 border-b-[2px] border-[#1877F2] text-[#1877F2] text-[14px] font-semibold whitespace-nowrap">Featured</div>
                <div className="pb-3 text-slate-500 text-[14px] font-medium whitespace-nowrap">Discussion</div>
                <div className="pb-3 text-slate-500 text-[14px] font-medium whitespace-nowrap">Events</div>
                <div className="pb-3 text-slate-500 text-[14px] font-medium whitespace-nowrap">Media</div>
            </div>
        </div>

        {/* Separator */}
        <div className="h-2 bg-slate-100 w-full mb-2"></div>

        {/* Pinned Post */}
        <div className="bg-white px-4 py-3 mb-2">
             <div className="flex items-start justify-between mb-3">
                <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center ring-1 ring-slate-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80')"}}></div>
                    <div>
                        <div className="flex items-center gap-1">
                          <span className="text-[15px] font-bold text-slate-900">Sarah Jenkins</span>
                          <span className="text-[#1877F2]">
                             <CheckCheck size={14} fill="currentColor" className="text-white bg-[#1877F2] rounded-full p-[1px]" />
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[12px] text-slate-500 font-medium">
                           <span className="bg-slate-100 text-slate-600 px-1 rounded-[2px] text-[10px] font-bold uppercase">Admin</span>
                           <span>•</span>
                           <span>2h</span>
                           <span>•</span>
                           <Globe size={10} />
                        </div>
                    </div>
                </div>
                <MoreHorizontal size={20} className="text-slate-500" />
            </div>
            
            <p className="text-[15px] text-slate-900 leading-snug mb-3">
                📢 Big shoutout to <span className="font-semibold text-[#1877F2]">@ModernLivingRealty</span> for sponsoring this month's meetup! 
                <br/><br/>
                Thinking of selling in West Oak Trails? Use their free eval tool pinned above 👆
            </p>

            <div className="flex items-center justify-between text-[13px] text-slate-500 py-3 border-b border-slate-100">
                 <div className="flex items-center gap-1">
                    <div className="bg-[#1877F2] rounded-full p-1"><ThumbsUp size={8} className="text-white" fill="white" /></div> 
                    <span>42</span>
                 </div>
                 <div className="flex gap-3">
                    <span>12 Comments</span>
                 </div>
            </div>

            <div className="flex pt-1 mt-1 text-slate-500 font-medium">
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
        {/* iOS Header */}
        <div className="h-[105px] bg-[#F5F5F5]/90 backdrop-blur-xl z-40 sticky top-0 border-b border-slate-300/60 flex flex-col justify-end pb-2.5 px-3 pt-10">
             <div className="flex items-center justify-between w-full">
                 <div className="flex items-center text-[#007AFF] gap-1 -ml-1">
                    <ChevronLeft size={26} strokeWidth={2.5} />
                    <span className="text-[17px] font-normal leading-none pb-0.5">Chats</span>
                 </div>
                 
                 <div className="flex flex-col items-center flex-1 cursor-pointer pr-4">
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
        <div className="sticky top-[0px] z-30 bg-[#F5F5F5]/95 backdrop-blur-md shadow-sm border-b border-slate-300/50 px-3 py-2 flex items-center justify-between cursor-pointer animate-slide-up">
            <div className="flex items-center gap-3 overflow-hidden bg-white/50 p-1.5 rounded-lg w-full border border-slate-200/50">
                <div className="w-9 h-9 rounded bg-[#E7FFDB] flex items-center justify-center shrink-0 border border-[#25D366]/20">
                    <Bell size={16} className="text-[#075E54]" fill="currentColor" />
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex justify-between items-center w-full">
                       <span className="text-[10px] font-bold text-[#075E54] uppercase tracking-wider">Sponsored Pin</span>
                       <span className="text-[9px] text-slate-400">now</span>
                    </div>
                    <span className="text-[13px] font-medium text-slate-900 truncate w-full">50% Off at GymShark Today Only!</span>
                </div>
            </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto bg-[#EFEFEF] relative font-sans px-3 pt-4 custom-scrollbar pb-24">
             {/* Wallpaper Pattern */}
             <div className="absolute inset-0 opacity-[0.4] bg-repeat pointer-events-none mix-blend-multiply" 
                  style={{
                      backgroundImage: "radial-gradient(#a3a3a3 0.5px, transparent 0.5px)", 
                      backgroundSize: "18px 18px"
                  }}>
             </div>

             <div className="flex justify-center mb-6 relative z-10">
                 <span className="bg-[#E1E5E9]/90 backdrop-blur-sm text-[#555] text-[11px] font-medium px-2 py-1 rounded-lg shadow-sm">Today</span>
             </div>

             <div className="space-y-1.5 relative z-10">
                  {/* Incoming */}
                  <div className="flex flex-col items-start max-w-[85%] group">
                      <div className="bg-white rounded-[16px] rounded-tl-[2px] py-1.5 px-2.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative text-[15px] text-black leading-snug">
                          <span className="text-[13px] font-medium text-[#E542A3] block mb-0.5 leading-none">Sarah M.</span>
                          Does anyone know a good plumber available today? 🔧
                          <div className="flex justify-end items-end gap-1 mt-0.5 select-none">
                             <span className="text-[10px] text-slate-400/80 leading-none">9:41 AM</span>
                          </div>
                      </div>
                  </div>

                  {/* Outgoing */}
                  <div className="flex flex-col items-end self-end max-w-[85%] ml-auto group">
                      <div className="bg-[#E7FFDB] rounded-[16px] rounded-tr-[2px] py-1.5 px-2.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative text-[15px] text-black leading-snug">
                          Check the pinned message!
                          <div className="flex justify-end items-end gap-1 mt-0.5 select-none pl-2">
                             <span className="text-[10px] text-[#555]/60 leading-none">9:42 AM</span>
                             <CheckCheck size={14} className="text-[#34B7F1]"/>
                          </div>
                      </div>
                  </div>

                  {/* Admin Msg */}
                  <div className="flex flex-col items-start max-w-[85%] mt-4 group">
                      <div className="bg-white rounded-[16px] rounded-tl-[2px] py-1.5 px-2.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative text-[15px] text-black leading-snug ring-1 ring-[#25D366]/30">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-[13px] font-medium text-[#075E54] leading-none">Mike (Admin)</span>
                            <span className="bg-[#E7FFDB] text-[#075E54] text-[9px] px-1 py-0.5 rounded-[3px] font-semibold border border-[#25D366]/20 uppercase leading-none">Admin</span>
                          </div>
                          I just pinned the new deal for GymShark. Link in bio above! 👆
                          <div className="flex justify-end items-end gap-1 mt-0.5 select-none">
                             <span className="text-[10px] text-slate-400/80 leading-none">9:45 AM</span>
                          </div>
                      </div>
                  </div>
             </div>
        </div>

        {/* Input Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#F6F6F6] px-3 pt-2 pb-6 border-t border-slate-300/60 flex items-center gap-3 z-50 backdrop-blur-xl">
            <Plus size={24} className="text-[#007AFF]" />
            <div className="flex-1 bg-white rounded-full border border-slate-300/60 h-[34px] px-3 flex items-center justify-between shadow-sm">
                <span className="text-slate-300 text-[15px] translate-y-[1px]">Message</span>
                <Sticker size={20} className="text-slate-400" />
            </div>
            <Camera size={22} className="text-[#007AFF]" />
            <Mic size={22} className="text-[#007AFF]" />
        </div>
    </PhoneFrame>
  );
};
