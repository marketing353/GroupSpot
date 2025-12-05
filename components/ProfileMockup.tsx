import React from 'react';
import { ShieldCheck, ChevronLeft, Search, MoreHorizontal, ThumbsUp, MessageCircle, Share2, Globe, Users, Battery, Wifi, Signal, Phone, Video, Plus, Mic, Camera, Paperclip, CheckCheck, Bell } from 'lucide-react';

// Shared Phone Frame Component to ensure consistency
const PhoneFrame = ({ children, time = "9:41" }: { children: React.ReactNode, time?: string }) => (
  // Optimized width for small screens (320px) up to larger screens
  <div className="relative mx-auto w-[290px] xs:w-[320px] sm:w-[350px] h-[600px] xs:h-[650px] md:h-[700px] bg-slate-950 rounded-[2.5rem] md:rounded-[3rem] p-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] border-[5px] md:border-[6px] border-slate-900 ring-1 ring-white/10 select-none">
    <div className="relative h-full w-full bg-white rounded-[2rem] md:rounded-[2.2rem] overflow-hidden flex flex-col font-sans">
      {/* Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 z-40 flex items-center justify-between px-6 pt-3 pointer-events-none text-black/90">
        <span className="text-[15px] font-semibold tracking-tight">{time}</span>
        <div className="flex gap-1.5 items-center">
          <Signal size={16} className="fill-current" strokeWidth={2.5} />
          <Wifi size={16} strokeWidth={2.5} />
          <Battery size={22} className="fill-current" strokeWidth={1.5} />
        </div>
      </div>
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 md:w-28 h-7 md:h-8 bg-black rounded-full z-40 pointer-events-none"></div>
      
      {children}
      
      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 md:w-36 h-1 bg-black/90 rounded-full z-40"></div>
    </div>
  </div>
);

export const MockupFacebookGroup: React.FC = () => {
  return (
    <PhoneFrame>
      {/* Facebook Header */}
      <div className="h-28 bg-white z-20 sticky top-0 border-b border-slate-100 flex flex-col justify-end pb-3 px-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-between">
          <ChevronLeft className="text-slate-900" size={28} strokeWidth={1.5} />
          <div className="flex gap-4 text-slate-900">
             <Search size={24} strokeWidth={1.5} />
             <Share2 size={24} strokeWidth={1.5} />
             <MoreHorizontal size={24} strokeWidth={1.5} />
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-8 bg-[#F0F2F5] scrollbar-none relative">
        {/* COVER PHOTO AD */}
        <div className="relative w-full aspect-[1.91/1] bg-slate-200 group cursor-pointer overflow-hidden">
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')"}}></div>
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
             
             {/* Sponsored Tag */}
             <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] font-bold text-slate-500 uppercase tracking-wider shadow-sm border border-white/50">
                Sponsored Cover
             </div>

             <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-bold leading-tight mb-0.5 drop-shadow-sm">Modern Living Realty</h3>
                <div className="flex justify-between items-end">
                    <p className="text-xs text-slate-200 font-medium drop-shadow-sm">#1 Rated Agency in GTA</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold py-1.5 px-3 rounded-full shadow-lg transition-colors">
                        Book Viewing
                    </button>
                </div>
             </div>
        </div>

        {/* Group Info */}
        <div className="bg-white px-4 pt-4 pb-2 mb-2">
            <h1 className="text-2xl font-bold text-slate-900 leading-tight">Toronto Home Owners</h1>
            <div className="flex items-center gap-2 text-xs text-slate-500 mt-2 font-medium">
                <span className="flex items-center gap-1"><ShieldCheck size={12} className="fill-slate-400 text-white"/> Private Group</span>
                <span>•</span>
                <span className="text-slate-900 font-bold">42.8K members</span>
            </div>

            {/* Facepile */}
            <div className="flex items-center justify-between mt-5 mb-4">
                <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center" style={{backgroundImage: `url(https://i.pravatar.cc/150?img=${i + 20})`}}></div>
                    ))}
                    <div className="w-9 h-9 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">+99</div>
                </div>
                <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-1 active:scale-95 transition-transform">
                   <Users size={16} /> Invite
                </button>
            </div>
            
            {/* Tabs */}
            <div className="flex gap-6 border-b border-slate-100 text-sm font-semibold text-slate-500 overflow-x-auto no-scrollbar pb-1">
                <div className="text-blue-600 border-b-2 border-blue-600 pb-2 px-1 whitespace-nowrap">Featured</div>
                <div className="pb-2 px-1 whitespace-nowrap">Discussion</div>
                <div className="pb-2 px-1 whitespace-nowrap">Guides</div>
            </div>
        </div>

        {/* Post Composer */}
        <div className="bg-white p-3 mb-2 flex items-center gap-3">
             <div className="w-9 h-9 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: `url(https://i.pravatar.cc/150?img=12)`}}></div>
             <div className="flex-1 bg-slate-100 rounded-full h-9 flex items-center px-4 text-sm text-slate-500 border border-slate-100">Write something...</div>
             <div className="text-slate-400"><MessageCircle size={22} /></div>
        </div>

        {/* Feed Post */}
        <div className="bg-white p-4">
            <div className="flex justify-between items-start mb-3">
                <div className="flex gap-3">
                    <div className="w-10 h-10 rounded-full bg-slate-200 bg-cover bg-center" style={{backgroundImage: `url(https://i.pravatar.cc/150?img=60)`}}></div>
                    <div>
                        <div className="text-sm font-bold text-slate-900">Jessica Wong</div>
                        <div className="text-xs text-slate-500 font-medium">Top Contributor • 2h</div>
                    </div>
                </div>
                <MoreHorizontal size={20} className="text-slate-400" />
            </div>
            <p className="text-sm text-slate-800 leading-relaxed mb-3">
                Has anyone worked with <strong>Modern Living Realty</strong> (the group sponsor)? 
                I see their banner above. Thinking of listing my condo in Liberty Village.
            </p>
            <div className="h-48 w-full bg-slate-100 rounded-lg bg-cover bg-center mb-3 border border-slate-100" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)'}}></div>
            <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-slate-500">
                <div className="flex items-center gap-2 text-xs font-semibold"><ThumbsUp size={16}/> 142</div>
                <div className="flex items-center gap-2 text-xs font-semibold"><MessageCircle size={16}/> 56 Comments</div>
            </div>
        </div>
      </div>
    </PhoneFrame>
  );
};


export const MockupWhatsappGroup: React.FC = () => {
  return (
    <PhoneFrame>
        {/* Header - Modern iOS Style */}
        <div className="h-28 bg-[#F5F6F8] z-20 sticky top-0 border-b border-slate-200 flex flex-col justify-end pb-2 px-3 backdrop-blur-xl bg-opacity-95">
             <div className="flex items-center justify-between mb-1">
                 <div className="flex items-center gap-1 text-blue-500">
                    <ChevronLeft size={26} />
                    <span className="text-[17px] font-normal -ml-1">Chats</span>
                 </div>
                 <div className="flex flex-col items-center flex-1 mr-8">
                     <span className="text-[15px] font-semibold text-slate-900">Liberty Village Residents</span>
                     <span className="text-[11px] text-slate-500">group info</span>
                 </div>
                 <div className="w-8"></div> {/* Spacer to center title */}
             </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto bg-[#EFE7DE] relative font-sans pb-16">
             {/* Chat Pattern */}
             <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage: "url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png')", backgroundSize: "400px"}}></div>
             
             {/* PINNED AD - Sticky Top */}
             <div className="sticky top-0 z-10 px-2 py-2">
                 <div className="bg-white/95 backdrop-blur-md rounded-lg shadow-sm border border-slate-200 p-2.5 flex items-center gap-3 animate-slide-up">
                      <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                          <ShieldCheck size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-center">
                              <span className="text-[10px] font-bold text-green-700 bg-green-50 px-1.5 py-0.5 rounded uppercase">Pinned Ad</span>
                          </div>
                          <p className="text-[13px] font-semibold text-slate-800 truncate">Liberty Village Gym: 50% Off</p>
                          <p className="text-[11px] text-slate-500 truncate">Exclusive for group members only.</p>
                      </div>
                      <ChevronLeft className="rotate-180 text-slate-300" size={16} />
                 </div>
             </div>

             <div className="px-3 py-4 space-y-3 relative z-0">
                  <div className="flex justify-center mb-4">
                      <span className="bg-[#E1F0FF] text-slate-600 text-[10px] font-bold px-2 py-1 rounded shadow-sm">Today</span>
                  </div>

                  {/* Incoming Msg */}
                  <div className="flex flex-col items-start max-w-[85%]">
                      <div className="bg-white rounded-xl rounded-tl-none p-2 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative">
                          <span className="text-[11px] font-bold text-orange-500 block mb-0.5">Alex (Unit 402)</span>
                          <p className="text-[14px] text-slate-900 leading-snug">Anyone hear that noise last night?</p>
                          <span className="text-[10px] text-slate-400 float-right mt-1 ml-2">9:41 AM</span>
                      </div>
                  </div>

                  {/* Outgoing Msg */}
                  <div className="flex flex-col items-end self-end max-w-[85%] ml-auto">
                      <div className="bg-[#DCF8C6] rounded-xl rounded-tr-none p-2 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative">
                          <p className="text-[14px] text-slate-900 leading-snug">Yeah, think it was construction.</p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                              <span className="text-[10px] text-green-800/60">9:42 AM</span>
                              <CheckCheck size={14} className="text-blue-500"/>
                          </div>
                      </div>
                  </div>

                  {/* Admin Msg referencing Ad */}
                  <div className="flex flex-col items-start max-w-[85%]">
                      <div className="bg-white rounded-xl rounded-tl-none p-2 shadow-[0_1px_0.5px_rgba(0,0,0,0.13)] relative border-l-4 border-green-500">
                          <span className="text-[11px] font-bold text-green-600 block mb-0.5">Admin</span>
                          <p className="text-[14px] text-slate-900 leading-snug">Hey guys, check the pinned message for the new gym discount!</p>
                          <span className="text-[10px] text-slate-400 float-right mt-1 ml-2">9:45 AM</span>
                      </div>
                  </div>
             </div>
        </div>

        {/* Input Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#F5F6F8] px-3 pb-6 pt-2 border-t border-slate-200 flex items-center gap-2">
            <Plus size={24} className="text-blue-500" />
            <div className="flex-1 bg-white rounded-full border border-slate-200 h-9 px-3 flex items-center justify-between">
                <span className="text-slate-300 text-[14px]">Message...</span>
                <Paperclip size={18} className="text-slate-400" />
            </div>
            <Camera size={24} className="text-blue-500" />
            <Mic size={24} className="text-blue-500" />
        </div>
    </PhoneFrame>
  );
};