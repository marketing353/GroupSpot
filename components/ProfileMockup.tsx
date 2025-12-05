import React from 'react';
import { 
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
  Sticker,
  Video,
  Phone,
  Globe,
  Bell,
  ArrowLeft,
  ChevronLeft
} from 'lucide-react';

// --- Shared Components ---

const PhoneFrame = ({ children, time = "9:41" }: { children: React.ReactNode, time?: string }) => (
  <div className="relative mx-auto w-[280px] xs:w-[320px] sm:w-[360px] h-[580px] xs:h-[650px] md:h-[720px] bg-black rounded-[45px] md:rounded-[55px] p-[12px] md:p-[14px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] ring-1 ring-white/20 select-none overflow-hidden transform transition-transform border-[6px] border-slate-900 z-10 max-w-[calc(100vw-32px)] box-content">
    
    {/* Screen Container with Concentric Corners */}
    <div className="relative h-full w-full bg-white rounded-[32px] md:rounded-[40px] overflow-hidden flex flex-col font-sans isolate shadow-[inset_0_0_12px_rgba(0,0,0,0.4)]">
      
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-14 z-50 flex items-start justify-between px-7 pt-4 pointer-events-none mix-blend-difference text-white">
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
      <div className="absolute top-[11px] left-1/2 -translate-x-1/2 w-[90px] md:w-[120px] h-[28px] md:h-[34px] bg-black rounded-full z-[60] pointer-events-none shadow-sm"></div>
      
      {children}
      
      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/90 rounded-full z-50 pointer-events-none mix-blend-overlay"></div>
    </div>
  </div>
);

export const MockupFacebookGroup: React.FC = () => {
  return (
    <PhoneFrame>
      {/* App Header */}
      <div className="h-[100px] bg-white z-30 sticky top-0 flex flex-col justify-end pb-2 px-4 shadow-[0_1px_0_rgba(0,0,0,0.05)] pt-10">
        <div className="flex items-center justify-between text-slate-900">
          <ArrowLeft size={24} strokeWidth={2} className="text-black" />
          <div className="flex gap-4 text-black">
             <Search size={24} strokeWidth={2} />
             <Share2 size={24} strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 bg-white no-scrollbar relative">
        
        {/* Cover Photo Area - Edge to Edge */}
        <div className="relative w-full aspect-[1.91/1] bg-slate-100 group cursor-pointer overflow-hidden">
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80')"}}></div>
             {/* Gradient overlay for readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
             
             {/* Sponsored Tag - Modern Pill */}
             <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-[10px] font-bold px-2.5 py-1 rounded-full text-white tracking-wide uppercase flex items-center gap-1 border border-white/10 shadow-sm">
                Sponsored
             </div>
        </div>

        {/* Group Info */}
        <div className="px-4 py-4 mb-1">
            <h1 className="text-[24px] font-bold text-slate-900 tracking-tight leading-tight mb-1.5">Liberty Village Community</h1>
            
            <div className="flex items-center gap-2 mb-5">
               <div className="bg-slate-100 px-2 py-0.5 rounded text-[11px] font-semibold text-slate-600 flex items-center gap-1">
                  <Globe size={11} /> Public Group
               </div>
               <span className="text-[13px] text-slate-500 font-medium">18.5K members</span>
            </div>

            <div className="flex gap-3 mb-6">
                <button className="bg-[#E7F3FF] text-[#0064D1] flex-1 py-2.5 rounded-lg text-[15px] font-semibold flex items-center justify-center gap-2 active:scale-98 transition-transform">
                   <Users size={18} fill="currentColor" /> Joined
                </button>
                <button className="bg-slate-100 text-slate-900 flex-1 py-2.5 rounded-lg text-[15px] font-semibold active:scale-98 transition-transform">
                   Invite
                </button>
            </div>

            {/* Modern Tabs */}
            <div className="flex border-b border-slate-100 overflow-x-auto no-scrollbar gap-1">
                <div className="px-1 pb-3 border-b-[2.5px] border-[#0064D1] text-[#0064D1] text-[15px] font-semibold whitespace-nowrap">Featured</div>
                <div className="px-3 pb-3 text-slate-500 text-[15px] font-medium whitespace-nowrap">Discussion</div>
                <div className="px-3 pb-3 text-slate-500 text-[15px] font-medium whitespace-nowrap">Events</div>
                <div className="px-3 pb-3 text-slate-500 text-[15px] font-medium whitespace-nowrap">Media</div>
            </div>
        </div>

        {/* Separator */}
        <div className="h-2 bg-[#F0F2F5] w-full mb-2"></div>

        {/* Pinned Post */}
        <div className="bg-white px-4 py-4">
             <div className="flex items-start justify-between mb-3">
                <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center ring-1 ring-slate-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80')"}}></div>
                    <div>
                        <div className="flex items-center gap-1">
                          <span className="text-[15px] font-bold text-slate-900">Sarah Jenkins</span>
                          <span className="text-[#0064D1]">
                             <CheckCheck size={14} fill="currentColor" className="text-white bg-[#0064D1] rounded-full p-[1px]" />
                          </span>
                        </div>
                        <div className="flex items-center gap-1 text-[12px] text-slate-500 font-medium">
                           <span className="text-[#0064D1] bg-[#E7F3FF] px-1 rounded-[2px] text-[10px] font-bold uppercase tracking-wider">Admin</span>
                           <span>•</span>
                           <span>2h</span>
                           <span>•</span>
                           <Globe size={11} />
                        </div>
                    </div>
                </div>
                <MoreHorizontal size={20} className="text-slate-500" />
            </div>
            
            <p className="text-[15px] text-slate-900 leading-normal mb-3">
                📢 Big shoutout to <span className="font-semibold text-[#0064D1]">@ModernLivingRealty</span> for sponsoring this month's meetup! 
                <br/><br/>
                Thinking of selling in West Oak Trails? Use their free eval tool pinned above 👆
            </p>

            <div className="flex items-center justify-between text-[13px] text-slate-500 py-3 border-b border-slate-100">
                 <div className="flex items-center gap-1">
                    <div className="bg-[#0064D1] rounded-full p-1"><ThumbsUp size={9} className="text-white" fill="white" /></div> 
                    <span className="text-slate-600">42</span>
                 </div>
                 <div className="flex gap-3">
                    <span>12 Comments</span>
                 </div>
            </div>

            <div className="flex pt-1 mt-1 text-slate-600 font-medium">
                <div className="flex-1 flex items-center justify-center gap-2 py-2 active:bg-slate-50 rounded text-[14px]"><ThumbsUp size={18} /> Like</div>
                <div className="flex-1 flex items-center justify-center gap-2 py-2 active:bg-slate-50 rounded text-[14px]"><MessageCircle size={18} /> Comment</div>
                <div className="flex-1 flex items-center justify-center gap-2 py-2 active:bg-slate-50 rounded text-[14px]"><Share2 size={18} /> Share</div>
            </div>
        </div>
      </div>
    </PhoneFrame>
  );
};

export const MockupWhatsappGroup: React.FC = () => {
  return (
    <PhoneFrame>
        {/* iOS Modern Header */}
        <div className="h-[105px] bg-[#F4F4F4]/90 backdrop-blur-xl z-40 sticky top-0 border-b border-slate-300/60 flex flex-col justify-end pb-2.5 px-3 pt-10 transition-all">
             <div className="flex items-center justify-between w-full">
                 <div className="flex items-center text-[#007AFF] gap-1 -ml-1.5 active:opacity-50 transition-opacity">
                    <ChevronLeft size={26} strokeWidth={2.5} />
                    <span className="text-[17px] font-normal leading-none pb-0.5">Chats</span>
                 </div>
                 
                 <div className="flex flex-col items-center flex-1 cursor-pointer pr-4 active:opacity-50 transition-opacity">
                     <span className="text-[16px] font-semibold text-black tracking-tight">Liberty Village...</span>
                     <span className="text-[11px] text-[#8E8E93]">tap for group info</span>
                 </div>
                 
                 <div className="flex items-center gap-5 pr-1 text-[#007AFF]">
                    <Video size={24} strokeWidth={1.5} className="active:opacity-50" />
                    <Phone size={22} strokeWidth={1.5} className="active:opacity-50" />
                 </div>
             </div>
        </div>

        {/* Sticky Pinned Bar - Premium Look */}
        <div className="sticky top-[0px] z-30 bg-[#F4F4F4]/95 backdrop-blur-md shadow-[0_2px_10px_rgba(0,0,0,0.03)] border-b border-slate-200/50 px-3 py-2.5 animate-slide-up">
            <div className="flex items-center gap-3 bg-white p-2 rounded-xl w-full border border-slate-100 shadow-sm active:scale-[0.99] transition-transform cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-[#E7FFDB] flex items-center justify-center shrink-0 border border-[#25D366]/20 relative">
                    <Bell size={18} className="text-[#075E54]" fill="currentColor" />
                    <div className="absolute top-1 right-1 w-2 h-2 bg-[#25D366] rounded-full border border-white"></div>
                </div>
                <div className="flex flex-col min-w-0 flex-1">
                    <div className="flex justify-between items-center w-full">
                       <span className="text-[10px] font-bold text-[#075E54] uppercase tracking-wider bg-[#E7FFDB] px-1.5 rounded-sm">Sponsored Pin</span>
                       <span className="text-[10px] text-slate-400">now</span>
                    </div>
                    <span className="text-[14px] font-medium text-slate-900 truncate w-full pt-0.5">50% Off at GymShark Today Only! 🦈</span>
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
                 <span className="bg-[#E1E5E9]/90 backdrop-blur-sm text-[#555] text-[11px] font-medium px-2.5 py-1 rounded-lg shadow-sm border border-white/20">Today</span>
             </div>

             <div className="space-y-2 relative z-10">
                  {/* Incoming */}
                  <div className="flex flex-col items-start max-w-[85%] group">
                      <div className="bg-white rounded-[18px] rounded-tl-[4px] py-1.5 px-3 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative text-[16px] text-black leading-snug">
                          <span className="text-[13px] font-medium text-[#E542A3] block mb-0.5 leading-none">Sarah M.</span>
                          Does anyone know a good plumber available today? 🔧
                          <div className="flex justify-end items-end gap-1 mt-0.5 select-none">
                             <span className="text-[11px] text-slate-400/80 leading-none">9:41 AM</span>
                          </div>
                      </div>
                  </div>

                  {/* Outgoing */}
                  <div className="flex flex-col items-end self-end max-w-[85%] ml-auto group">
                      <div className="bg-[#E7FFDB] rounded-[18px] rounded-tr-[4px] py-1.5 px-3 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative text-[16px] text-black leading-snug">
                          Check the pinned message!
                          <div className="flex justify-end items-end gap-1 mt-0.5 select-none pl-2">
                             <span className="text-[11px] text-[#555]/60 leading-none">9:42 AM</span>
                             <CheckCheck size={15} className="text-[#34B7F1]"/>
                          </div>
                      </div>
                  </div>

                  {/* Admin Msg */}
                  <div className="flex flex-col items-start max-w-[85%] mt-4 group">
                      <div className="bg-white rounded-[18px] rounded-tl-[4px] py-1.5 px-3 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative text-[16px] text-black leading-snug ring-2 ring-[#25D366]/20">
                          <div className="flex items-center gap-1.5 mb-1">
                            <span className="text-[13px] font-medium text-[#075E54] leading-none">Mike (Admin)</span>
                            <span className="bg-[#E7FFDB] text-[#075E54] text-[9px] px-1.5 py-0.5 rounded-[4px] font-bold border border-[#25D366]/20 uppercase leading-none tracking-wide">Admin</span>
                          </div>
                          I just pinned the new deal for GymShark. Link in bio above! 👆
                          <div className="flex justify-end items-end gap-1 mt-0.5 select-none">
                             <span className="text-[11px] text-slate-400/80 leading-none">9:45 AM</span>
                          </div>
                      </div>
                  </div>
             </div>
        </div>

        {/* Input Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#F6F6F6] px-3 pt-2 pb-6 border-t border-slate-300/60 flex items-end gap-3 z-50 backdrop-blur-xl">
            <div className="pb-1.5"><Plus size={26} className="text-[#007AFF]" /></div>
            <div className="flex-1 bg-white rounded-[20px] border border-slate-300/60 min-h-[36px] px-3 flex items-center justify-between shadow-sm py-1">
                <span className="text-slate-300 text-[16px] translate-y-[1px]">Message</span>
                <Sticker size={22} className="text-slate-400" />
            </div>
            <div className="pb-1.5 flex gap-4">
                <Camera size={24} className="text-[#007AFF]" />
                <Mic size={24} className="text-[#007AFF]" />
            </div>
        </div>
    </PhoneFrame>
  );
};