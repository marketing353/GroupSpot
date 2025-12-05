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
  Phone,
  Globe
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
      <div className="h-24 bg-white/95 backdrop-blur-md z-30 sticky top-0 flex flex-col justify-end pb-2 px-4 border-b border-slate-100">
        <div className="flex items-center justify-between text-slate-900 mt-8">
          <ChevronLeft size={26} className="text-black -ml-1" />
          <div className="flex gap-4 text-slate-900">
             <Search size={22} strokeWidth={2} />
             <Share2 size={22} strokeWidth={2} />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 bg-white no-scrollbar relative">
        
        {/* COVER PHOTO AREA */}
        <div className="relative w-full aspect-[1.91/1] bg-slate-200 group cursor-pointer overflow-hidden">
             {/* Image */}
             <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80')"}}></div>
             
             {/* Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
             
             {/* Sponsored Tag */}
             <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm text-[10px] font-bold px-2 py-0.5 rounded text-white/90 border border-white/20 shadow-sm uppercase tracking-wider">
                Sponsored Cover
             </div>

             {/* Ad Content Overlay */}
             <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <div className="flex items-center gap-2 mb-1">
                    <span className="bg-[#1877F2] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-sm">AD</span>
                    <span className="text-xs font-medium text-white/90">Modern Living Realty</span>
                </div>
                <h3 className="text-lg font-bold leading-tight mb-2 text-white drop-shadow-sm">Thinking of Selling? Get a Free Evaluation.</h3>
                <div className="flex items-center gap-2">
                  <button className="bg-white text-[#1877F2] text-[11px] font-bold py-1.5 px-3 rounded shadow-sm hover:bg-slate-50 transition-colors w-auto">
                      Learn More
                  </button>
                </div>
             </div>
        </div>

        {/* Group Info */}
        <div className="px-4 py-4 mb-2">
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight leading-tight mb-2">Liberty Village Community</h1>
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium mb-4">
                <Globe size={12} />
                <span>Public group</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-900 font-bold">18.5K members</span>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2 mb-4">
                <button className="bg-[#E7F3FF] text-[#1877F2] flex-1 py-2 rounded-md text-sm font-semibold flex items-center justify-center gap-1.5 active:scale-95 transition-transform">
                   <Users size={16} fill="currentColor" /> Joined
                </button>
                <button className="bg-slate-100 text-slate-700 flex-1 py-2 rounded-md text-sm font-semibold active:scale-95 transition-transform">
                   Invite
                </button>
            </div>

            {/* Facepile */}
             <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-[2px] border-white bg-slate-200 bg-cover bg-center" style={{backgroundImage: `url('https://images.unsplash.com/photo-${1500000000000+i}?auto=format&fit=crop&w=100&q=80')`}}></div>
                    ))}
                </div>
                <span className="text-xs text-slate-500"><strong>Jason</strong> and <strong>42 others</strong> joined recently</span>
            </div>
            
            {/* Tabs */}
            <div className="flex gap-4 mt-2 overflow-x-auto no-scrollbar">
                <div className="py-2 border-b-[2px] border-[#1877F2] text-[#1877F2] text-sm font-semibold whitespace-nowrap">Featured</div>
                <div className="py-2 text-slate-500 text-sm font-medium whitespace-nowrap">Discussion</div>
                <div className="py-2 text-slate-500 text-sm font-medium whitespace-nowrap">Events</div>
                <div className="py-2 text-slate-500 text-sm font-medium whitespace-nowrap">Media</div>
            </div>
        </div>

        {/* Separator */}
        <div className="h-2 bg-[#F0F2F5]"></div>

        {/* Feed Post */}
        <div className="bg-white p-4 pb-2">
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-2.5">
                    <div className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center border border-slate-100" style={{backgroundImage: "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80')"}}></div>
                    <div>
                        <div className="text-[15px] font-bold text-slate-900 leading-tight">Sarah Jenkins</div>
                        <div className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">Admin · 2h</div>
                    </div>
                </div>
                <MoreHorizontal size={20} className="text-slate-400" />
            </div>
            <p className="text-[15px] text-slate-900 leading-snug mb-3">
                Huge thanks to our new community sponsor <span className="text-[#1877F2] font-semibold">@ModernLivingRealty</span>! 🏡 
            </p>
            {/* Post Image */}
            <div className="aspect-[4/3] w-full bg-slate-100 rounded mb-3 bg-cover bg-center border border-slate-100 overflow-hidden" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80')"}}></div>
            
            <div className="flex items-center justify-between text-xs text-slate-500 border-b border-slate-100 pb-3">
                 <div className="flex items-center gap-1"><div className="bg-[#1877F2] rounded-full p-[3px]"><ThumbsUp size={8} className="text-white" fill="white" /></div> 42</div>
                 <div>12 Comments</div>
            </div>

            <div className="flex items-center justify-between text-slate-500 text-sm py-1">
                <button className="flex items-center gap-1.5 flex-1 justify-center py-2 hover:bg-slate-50 rounded transition-colors font-medium text-slate-600"><ThumbsUp size={18} /> Like</button>
                <button className="flex items-center gap-1.5 flex-1 justify-center py-2 hover:bg-slate-50 rounded transition-colors font-medium text-slate-600"><MessageCircle size={18} /> Comment</button>
                <button className="flex items-center gap-1.5 flex-1 justify-center py-2 hover:bg-slate-50 rounded transition-colors font-medium text-slate-600"><Share2 size={18} /> Share</button>
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
        <div className="h-[105px] bg-[#F6F6F6]/80 backdrop-blur-xl z-40 sticky top-0 border-b border-slate-300/50 flex flex-col justify-end pb-2.5 px-2">
             <div className="flex items-center justify-between w-full">
                 <div className="flex items-center text-[#007AFF] cursor-pointer active:opacity-60 pl-1 gap-1">
                    <ChevronLeft size={26} strokeWidth={2} />
                    <div className="w-7 h-7 bg-blue-500 rounded-full flex items-center justify-center text-white text-[10px] font-bold">12</div>
                 </div>
                 
                 <div className="flex flex-col items-center flex-1 cursor-pointer active:opacity-60 min-w-0 px-2">
                     <span className="text-[16px] font-semibold text-black tracking-tight leading-tight truncate w-full text-center">Liberty Village Community</span>
                     <span className="text-[11px] text-[#8E8E93] leading-tight mt-0.5">tap for info</span>
                 </div>
                 
                 <div className="flex items-center gap-4 pr-3 text-[#007AFF]">
                    <Video size={24} strokeWidth={1.5} />
                    <Phone size={22} strokeWidth={1.5} />
                 </div>
             </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto bg-[#EFEFEF] relative font-sans pb-20 custom-scrollbar">
             {/* Wallpaper Pattern */}
             <div className="absolute inset-0 opacity-[0.4]" style={{backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')", backgroundSize: "400px"}}></div>
             
             {/* PINNED MESSAGE BANNER - iOS Style */}
             <div className="sticky top-[8px] z-30 px-3 animate-slide-up">
                 <div className="bg-[#F9F9F9]/95 backdrop-blur-md rounded-[10px] shadow-sm flex overflow-hidden cursor-pointer active:bg-white transition-colors border border-black/5 items-center pr-3">
                      <div className="w-[4px] self-stretch bg-[#25D366]"></div>
                      <div className="p-2 shrink-0">
                         <div className="bg-[#E7F8EA] text-[#128C7E] w-8 h-8 rounded-lg flex items-center justify-center text-base">
                             📢
                         </div>
                      </div>
                      <div className="flex-1 min-w-0 py-2">
                          <div className="flex justify-between items-center mb-0.5">
                              <span className="text-[11px] font-bold text-[#128C7E] uppercase tracking-wide">Sponsored</span>
                          </div>
                          <p className="text-[13px] font-medium text-slate-900 truncate leading-snug">Flash Sale: 50% Off at GymShark Today!</p>
                      </div>
                 </div>
             </div>

             <div className="px-3 pt-4 space-y-2 relative z-20 pb-4">
                  <div className="flex justify-center my-4">
                      <span className="bg-[#E4E6EB]/80 backdrop-blur-[4px] text-[#5e656d] text-[11px] font-medium px-3 py-1 rounded-full shadow-sm border border-white/20">Today</span>
                  </div>

                  {/* Encryption Notice */}
                  <div className="flex justify-center mb-6 px-4 text-center">
                     <span className="bg-[#FFF5C4]/60 text-[#55503C] text-[10px] px-3 py-1.5 rounded-[8px] border border-[#F0E6AA]/50 leading-snug max-w-[240px]">
                        🔒 Messages are end-to-end encrypted. No one outside of this chat can read or listen to them.
                     </span>
                  </div>

                  {/* Incoming Msg */}
                  <div className="flex flex-col items-start max-w-[85%] group">
                      <div className="bg-white rounded-[16px] rounded-tl-[2px] px-3 py-1.5 shadow-sm relative border border-black/[0.03]">
                          <span className="text-[13px] font-semibold text-[#E542A3] mb-0.5 block">Sarah M.</span>
                          <p className="text-[16px] text-black leading-[1.3] pr-10 pb-1">Does anyone know a good plumber available today? 🔧</p>
                          <span className="text-[10px] text-[#8E8E93] float-right mt-1 ml-1 opacity-70">9:41 AM</span>
                      </div>
                  </div>

                  {/* Outgoing Msg */}
                  <div className="flex flex-col items-end self-end max-w-[85%] ml-auto">
                      <div className="bg-[#DCF8C6] rounded-[16px] rounded-tr-[2px] px-3 py-1.5 shadow-sm relative border border-black/[0.03]">
                          <p className="text-[16px] text-black leading-[1.3] pr-12 pb-1">Check the pinned message!</p>
                          <div className="absolute bottom-1 right-2 flex items-center gap-0.5">
                              <span className="text-[10px] text-[rgba(0,0,0,0.45)]">9:42 AM</span>
                              <CheckCheck size={14} className="text-[#34B7F1]"/>
                          </div>
                      </div>
                  </div>

                   {/* Admin Msg */}
                   <div className="flex flex-col items-start max-w-[88%] mt-2">
                      <div className="bg-white rounded-[16px] rounded-tl-[2px] px-3 py-1.5 shadow-sm relative border border-black/[0.03]">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <span className="text-[13px] font-semibold text-[#128C7E]">Mike (Admin)</span>
                            <span className="bg-[#E7F3FF] text-[#007AFF] text-[9px] px-1 py-[1px] rounded-[3px] font-bold uppercase border border-blue-100">Admin</span>
                          </div>
                          <p className="text-[16px] text-black leading-[1.3] pr-10 pb-1">I just pinned the new deal for GymShark. Link in bio above! 👆</p>
                          <span className="text-[10px] text-[#8E8E93] float-right mt-1 ml-1 opacity-70">9:45 AM</span>
                      </div>
                  </div>
             </div>
        </div>

        {/* Input Bar - Native iOS Style */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#F6F6F6]/90 backdrop-blur-xl px-2 pb-8 pt-2 border-t border-slate-300/50 flex items-end gap-2 z-50">
            <Plus size={26} className="text-[#007AFF] shrink-0 mb-1.5 stroke-[1.5px]" />
            <div className="flex-1 bg-white rounded-[18px] border border-[#C6C6C8] min-h-[34px] px-3 py-[6px] flex items-center shadow-sm mb-1">
                <span className="text-slate-300 text-[16px]">Message</span>
                <div className="ml-auto flex gap-3 text-[#007AFF]">
                    <Sticker size={20} className="opacity-80 stroke-[1.5px]" />
                    <ImageIcon size={20} className="opacity-80 stroke-[1.5px]" />
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
