import React from 'react';
import { 
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
  Phone,
  Globe,
  Bell,
  ArrowLeft
} from 'lucide-react';

// --- Shared Components ---

const PhoneFrame = ({ children, time = "9:41" }: { children: React.ReactNode, time?: string }) => (
  <div className="relative mx-auto w-[280px] xs:w-[320px] sm:w-[360px] h-[580px] xs:h-[650px] md:h-[720px] bg-black rounded-[2.5rem] md:rounded-[3.5rem] p-3 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.5)] ring-4 ring-slate-900/50 select-none overflow-hidden transform transition-transform border border-slate-800 z-10">
    {/* Screen Container */}
    <div className="relative h-full w-full bg-white rounded-[2rem] md:rounded-[2.75rem] overflow-hidden flex flex-col font-sans isolate mask-image:radial-gradient(white, black)">
      
      {/* Status Bar (Absolute) */}
      <div className="absolute top-0 left-0 right-0 h-12 md:h-14 z-50 flex items-start justify-between px-6 pt-3.5 pointer-events-none mix-blend-difference text-white">
        <span className="text-[14px] font-semibold tracking-tight">{time}</span>
        <div className="flex gap-1.5 items-center pt-1">
             <div className="h-2.5 w-4 bg-current rounded-[1px]"></div> {/* Signal */}
             <div className="h-3.5 w-5 bg-current rounded-sm"></div> {/* Wifi */}
             <div className="h-3 w-6 border border-current rounded-[3px] relative"><div className="absolute inset-0.5 bg-current rounded-[1px] w-[70%]"></div></div> {/* Battery */}
        </div>
      </div>

      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] md:w-[120px] h-[28px] md:h-[32px] bg-black rounded-full z-[60] pointer-events-none flex justify-center items-center">
        <div className="w-16 h-16 rounded-full bg-black/50 absolute -top-4 blur-md"></div>
      </div>
      
      {children}
      
      {/* Home Indicator */}
      <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/90 rounded-full z-50 pointer-events-none mix-blend-overlay"></div>
    </div>
  </div>
);

// --- Facebook Mockup ---

export const MockupFacebookGroup: React.FC = () => {
  return (
    <PhoneFrame>
      {/* Modern White App Header */}
      <div className="h-[90px] bg-white z-30 sticky top-0 flex flex-col justify-end pb-2 px-3 border-b border-slate-100/50 pt-10">
        <div className="flex items-center justify-between text-slate-900">
          <ArrowLeft size={24} className="text-black" />
          <div className="flex gap-4 text-black">
             <Search size={22} strokeWidth={2} />
             <Share2 size={22} strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 bg-[#F0F2F5] no-scrollbar relative">
        
        {/* COVER PHOTO - Edge to Edge */}
        <div className="relative w-full aspect-[1.91/1] bg-slate-200 group cursor-pointer overflow-hidden">
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80')"}}></div>
             
             {/* Gradient for text readability */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
             
             {/* Sponsored Badge - Clean Glassmorphism */}
             <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 text-[10px] font-bold px-2 py-0.5 rounded text-white shadow-sm uppercase tracking-wide">
                Sponsored
             </div>

             {/* Ad Text Overlay */}
             <div className="absolute bottom-3 left-3 right-3 text-white">
                <div className="flex items-center gap-1.5 mb-1 opacity-90">
                    <span className="bg-[#0866FF] text-white text-[9px] font-bold px-1 rounded-[3px]">AD</span>
                    <span className="text-[11px] font-semibold">Modern Living Realty</span>
                </div>
                <p className="text-[15px] font-bold leading-tight drop-shadow-md">Get a Free Home Evaluation Today 🏡</p>
             </div>
        </div>

        {/* Group Header Info */}
        <div className="bg-white px-4 py-4 mb-2">
            <h1 className="text-[22px] font-bold text-slate-900 tracking-tight leading-tight mb-1.5">Liberty Village Community</h1>
            
            <div className="flex items-center gap-1.5 text-[13px] text-slate-500 font-medium mb-4">
                <Globe size={14} />
                <span>Public group</span>
                <span>·</span>
                <span className="text-slate-900 font-semibold">18.5K members</span>
            </div>

            {/* Main Actions */}
            <div className="flex gap-2 mb-4">
                <button className="bg-[#E7F3FF] text-[#0866FF] flex-1 py-1.5 rounded-[6px] text-[15px] font-semibold flex items-center justify-center gap-1.5 active:scale-98 transition-transform">
                   <Users size={18} fill="currentColor" /> Joined
                </button>
                <button className="bg-[#E4E6EB] text-[#050505] flex-1 py-1.5 rounded-[6px] text-[15px] font-semibold active:scale-98 transition-transform">
                   Invite
                </button>
            </div>

            {/* Member Preview */}
             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                        <div key={i} className="w-7 h-7 rounded-full border-[2px] border-white bg-slate-200 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-${1500000000000+i}?auto=format&fit=crop&w=100&q=80')`}}></div>
                    ))}
                </div>
                <span className="text-[13px] text-slate-500 leading-snug"><strong>Jason</strong> and <strong>42 others</strong> joined recently</span>
            </div>
            
            {/* Scrollable Tabs */}
            <div className="flex gap-5 mt-1 overflow-x-auto no-scrollbar pt-2">
                <div className="pb-2 border-b-[3px] border-[#0866FF] text-[#0866FF] text-[15px] font-semibold whitespace-nowrap">Featured</div>
                <div className="pb-2 text-slate-500 text-[15px] font-medium whitespace-nowrap">Discussion</div>
                <div className="pb-2 text-slate-500 text-[15px] font-medium whitespace-nowrap">Events</div>
            </div>
        </div>

        {/* Pinned/Featured Post */}
        <div className="bg-white p-3 mb-2">
             <div className="flex justify-between items-start mb-2">
                <div className="flex gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-slate-200 bg-cover bg-center border border-slate-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80')"}}></div>
                    <div className="flex flex-col">
                        <span className="text-[14px] font-bold text-[#050505] leading-tight">Sarah Jenkins</span>
                        <div className="flex items-center gap-1 text-[12px] text-slate-500">
                           <span className="bg-[#E7F3FF] text-[#0866FF] px-1 rounded-[2px] font-bold text-[9px] uppercase">Admin</span>
                           <span>· 2h ·</span>
                           <Globe size={10} />
                        </div>
                    </div>
                </div>
                <MoreHorizontal size={20} className="text-slate-500" />
            </div>
            
            <p className="text-[15px] text-[#050505] leading-snug mb-3">
                Please welcome our new sponsor <span className="font-semibold text-[#0866FF]">@ModernLivingRealty</span>! Check their exclusive offer above 👆
            </p>

            {/* Interaction Stats */}
            <div className="flex items-center justify-between text-[13px] text-slate-500 border-b border-slate-100 pb-2 mb-1">
                 <div className="flex items-center gap-1">
                    <div className="bg-[#0866FF] rounded-full p-[3px]"><ThumbsUp size={8} className="text-white" fill="white" /></div> 
                    <span className="text-slate-600">42</span>
                 </div>
                 <span>12 Comments</span>
            </div>

            {/* Action Buttons */}
            <div className="flex text-slate-600 text-[14px] font-medium">
                <div className="flex-1 flex items-center justify-center gap-1.5 py-2 active:bg-slate-50 rounded"><ThumbsUp size={18} /> Like</div>
                <div className="flex-1 flex items-center justify-center gap-1.5 py-2 active:bg-slate-50 rounded"><MessageCircle size={18} /> Comment</div>
                <div className="flex-1 flex items-center justify-center gap-1.5 py-2 active:bg-slate-50 rounded"><Share2 size={18} /> Share</div>
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
        {/* Header - Native iOS Style */}
        <div className="h-[95px] bg-[#F6F6F6]/90 backdrop-blur-xl z-40 sticky top-0 border-b border-slate-300/30 flex flex-col justify-end pb-2 px-2 pt-10">
             <div className="flex items-center justify-between w-full">
                 <div className="flex items-center text-[#007AFF] gap-1 -ml-1">
                    <ChevronLeft size={28} strokeWidth={2} />
                    <span className="text-[17px] -ml-1">Chats</span>
                 </div>
                 
                 <div className="flex flex-col items-center flex-1 min-w-0 px-2 cursor-pointer">
                     <span className="text-[16px] font-bold text-black tracking-tight leading-tight truncate w-full text-center">Liberty Village...</span>
                     <span className="text-[11px] text-[#8E8E93] mt-0.5">tap for group info</span>
                 </div>
                 
                 <div className="flex items-center gap-4 pr-2 text-[#007AFF]">
                    <Video size={24} strokeWidth={1.5} />
                    <Phone size={22} strokeWidth={1.5} />
                 </div>
             </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto bg-[#EFEFEF] relative font-sans pb-20 custom-scrollbar">
             {/* Wallpaper Pattern */}
             <div className="absolute inset-0 opacity-[0.06] bg-repeat" style={{backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Whatsapp_chat_background_dark.png/600px-Whatsapp_chat_background_dark.png')", backgroundSize: "300px"}}></div>
             
             {/* Sticky Pinned Message Banner */}
             <div className="sticky top-[6px] z-30 px-3 animate-slide-up">
                 <div className="bg-[#F9F9F9]/95 backdrop-blur-md rounded-[12px] shadow-sm flex overflow-hidden cursor-pointer active:scale-[0.98] transition-transform border border-black/5 items-center pr-3 py-2">
                      <div className="w-[3px] self-stretch bg-[#25D366] rounded-r-full mr-3 ml-0.5"></div>
                      <div className="shrink-0 mr-3">
                         <div className="bg-[#E7F8EA] text-[#128C7E] w-9 h-9 rounded-lg flex items-center justify-center">
                             <Bell size={18} fill="currentColor" />
                         </div>
                      </div>
                      <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center mb-0.5">
                              <span className="text-[11px] font-bold text-[#128C7E] uppercase tracking-wide">Sponsored • Pinned</span>
                          </div>
                          <p className="text-[14px] font-medium text-slate-900 truncate leading-snug">Flash Sale: 50% Off at GymShark Today!</p>
                      </div>
                 </div>
             </div>

             <div className="px-3 pt-4 space-y-3 relative z-20 pb-4">
                  <div className="flex justify-center my-4">
                      <span className="bg-[#E4E6EB]/80 backdrop-blur-sm text-[#5e656d] text-[11px] font-medium px-2.5 py-1 rounded-[6px] shadow-sm">Today</span>
                  </div>

                  {/* Encryption Notice */}
                  <div className="flex justify-center mb-6 px-4 text-center">
                     <span className="bg-[#FFF5C4]/60 text-[#55503C] text-[10px] px-3 py-1.5 rounded-[8px] border border-[#F0E6AA]/50 leading-snug max-w-[240px]">
                        Messages and calls are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can read or listen to them.
                     </span>
                  </div>

                  {/* Incoming Msg (White) */}
                  <div className="flex flex-col items-start max-w-[85%]">
                      <div className="bg-white rounded-[18px] rounded-tl-[4px] px-3 py-1.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative">
                          <span className="text-[13px] font-bold text-[#E542A3] mb-0.5 block">Sarah M.</span>
                          <p className="text-[16px] text-black leading-[1.3] pr-12 pb-1">Does anyone know a good plumber available today? 🔧</p>
                          <span className="text-[11px] text-[#8E8E93] absolute bottom-1 right-2">9:41 AM</span>
                      </div>
                  </div>

                  {/* Outgoing Msg (Green) */}
                  <div className="flex flex-col items-end self-end max-w-[85%] ml-auto">
                      <div className="bg-[#DCF8C6] rounded-[18px] rounded-tr-[4px] px-3 py-1.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative">
                          <p className="text-[16px] text-black leading-[1.3] pr-16 pb-1">Check the pinned message!</p>
                          <div className="absolute bottom-1 right-2 flex items-center gap-0.5">
                              <span className="text-[11px] text-[rgba(0,0,0,0.45)]">9:42 AM</span>
                              <CheckCheck size={14} className="text-[#34B7F1]"/>
                          </div>
                      </div>
                  </div>

                   {/* Admin Msg (White) */}
                   <div className="flex flex-col items-start max-w-[88%] mt-2">
                      <div className="bg-white rounded-[18px] rounded-tl-[4px] px-3 py-1.5 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-[13px] font-bold text-[#128C7E]">Mike (Admin)</span>
                            <span className="bg-[#E7F3FF] text-[#007AFF] text-[9px] px-1 py-[1px] rounded-[3px] font-bold uppercase border border-blue-100">Admin</span>
                          </div>
                          <p className="text-[16px] text-black leading-[1.3] pr-12 pb-1">I just pinned the new deal for GymShark. Link in bio above! 👆</p>
                          <span className="text-[11px] text-[#8E8E93] absolute bottom-1 right-2">9:45 AM</span>
                      </div>
                  </div>
             </div>
        </div>

        {/* Input Bar - Native iOS Style */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#F6F6F6]/90 backdrop-blur-xl px-2 pb-6 pt-2 border-t border-slate-300/50 flex items-end gap-2 z-50">
            <Plus size={28} className="text-[#007AFF] shrink-0 mb-1.5 stroke-[1.5px]" />
            <div className="flex-1 bg-white rounded-[20px] border border-[#C6C6C8] min-h-[36px] px-3 py-[7px] flex items-center shadow-sm mb-1">
                <span className="text-slate-300 text-[16px]">Message</span>
                <div className="ml-auto flex gap-3 text-[#007AFF]">
                    <Sticker size={22} className="opacity-80 stroke-[1.5px]" />
                    <ImageIcon size={22} className="opacity-80 stroke-[1.5px]" />
                </div>
            </div>
            <div className="flex items-center gap-3 mb-1.5 px-1">
                <Camera size={26} className="text-[#007AFF] shrink-0 stroke-[1.5px]" />
                <Mic size={26} className="text-[#007AFF] shrink-0 stroke-[1.5px]" />
            </div>
        </div>
    </PhoneFrame>
  );
};
