import React from 'react';

export const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-display font-bold text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div className="bg-slate-50 p-6 rounded-xl">
             <h3 className="font-bold text-slate-900 mb-2">How much does it cost?</h3>
             <p className="text-slate-600 text-sm">Prices are set by the Group Admins based on their member count and engagement. It typically ranges from $100/mo to $1000/mo for premium groups.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl">
             <h3 className="font-bold text-slate-900 mb-2">How do WhatsApp placements work?</h3>
             <p className="text-slate-600 text-sm">The admin "Pins" your sponsored message to the top of the group chat. This means it is the first thing users see when they open the group, and it stays persistent for the rental period (usually 24h or 1 week).</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl">
             <h3 className="font-bold text-slate-900 mb-2">Is this allowed by platforms?</h3>
             <p className="text-slate-600 text-sm">Yes. Admins own their communities. Renting cover photos (FB) or pinning messages (WhatsApp) are standard sponsorship practices, similar to an influencer doing a brand deal.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl">
             <h3 className="font-bold text-slate-900 mb-2">Do I need to design the ad?</h3>
             <p className="text-slate-600 text-sm">For Facebook Covers, we provide templates. For WhatsApp, we help you write the perfect short copy. We also offer a full creative service for a small fee.</p>
          </div>
        </div>
      </div>
    </section>
  );
};