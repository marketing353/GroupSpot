import React, { useState, useEffect } from 'react';
import { X, ArrowRight, Check, ArrowLeft, Loader2, TrendingUp, AlertCircle } from 'lucide-react';
import { ModalState } from '../types';
import { Button } from './Button';

interface WaitlistModalProps extends ModalState {
  onClose: () => void;
}

const CANADA_PROVINCES = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador",
  "Nova Scotia", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan"
];

const US_STATES = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", 
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", 
  "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", 
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", 
  "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", 
  "Wisconsin", "Wyoming"
];

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, role, onClose }) => {
  const [step, setStep] = useState(1);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  // Form State
  const [formData, setFormData] = useState({
    platform: 'WhatsApp',
    memberCount: '100 - 1,000 members',
    groupLink: '',
    groupDescription: '',
    country: 'CA',
    region: 'Ontario',
    businessType: '',
    budget: '$100+',
    name: '',
    email: ''
  });

  // Reset region when country changes
  useEffect(() => {
    if (formData.country === 'CA') {
        setFormData(prev => ({ ...prev, region: 'Ontario' }));
    } else {
        setFormData(prev => ({ ...prev, region: 'Alabama' }));
    }
  }, [formData.country]);

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setSubmissionStatus('idle');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
      return;
    }

    setSubmissionStatus('submitting');

    try {
        const payload = {
            _subject: `New GroupSpot Lead: ${formData.name} (${role})`,
            _template: "table",
            _captcha: "false", // Disable captcha for smoother experience
            Role: role,
            ...formData
        };

        const response = await fetch("https://formsubmit.co/ajax/shaheertiger1@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const result = await response.json().catch(() => ({}));

        if (response.ok) {
            setSubmissionStatus('success');
            // Reset form data for next time
            setFormData({
                platform: 'WhatsApp',
                memberCount: '100 - 1,000 members',
                groupLink: '',
                groupDescription: '',
                country: 'CA',
                region: 'Ontario',
                businessType: '',
                budget: '$100+',
                name: '',
                email: ''
            });
        } else {
            console.error("Server responded with error", result);
            setSubmissionStatus('error');
        }
    } catch (error) {
        console.error("Submission error:", error);
        setSubmissionStatus('error');
    }
  };

  const progress = step === 1 ? '50%' : '100%';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-slide-up duration-200 flex flex-col max-h-[90vh]">
        
        {/* Header - Hidden on Success View */}
        {submissionStatus !== 'success' && (
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 relative overflow-hidden">
             {/* Progress Bar */}
             <div className="absolute bottom-0 left-0 h-1 bg-indigo-100 w-full">
                <div className="h-full bg-indigo-600 transition-all duration-300 ease-out" style={{ width: progress }}></div>
             </div>

            <div>
               <h3 className="text-xl font-bold text-slate-900">
                  {role === 'admin' ? 'Claim Your Group Earnings' : 'Find Your Target Audience'}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                  <p className="text-xs text-slate-500">Step {step} of 2</p>
                  {step === 1 && (
                      <span className="bg-red-100 text-red-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full flex items-center gap-1">
                          <TrendingUp size={10} /> High Demand
                      </span>
                  )}
              </div>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 bg-white p-3 -mr-2 rounded-full border border-slate-200 shadow-sm transition-colors focus:outline-none">
              <X size={20} />
            </button>
          </div>
        )}
        
        <div className="p-6 overflow-y-auto">
          {submissionStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center text-center py-8 animate-fade-in">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                <Check size={40} strokeWidth={3} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h3>
              <p className="text-slate-600 mb-8 max-w-xs">
                We've received your details. One of our community managers will reach out to <strong>{formData.email}</strong> shortly.
              </p>
              <Button onClick={onClose} variant="secondary" className="w-full">
                Close
              </Button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              
              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                   {role === 'admin' ? (
                       <>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Where is your group hosted?</label>
                            <div className="grid grid-cols-2 gap-3">
                                <label className={`border rounded-lg p-3 flex items-center gap-2 cursor-pointer transition-all ${formData.platform === 'WhatsApp' ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-indigo-300'}`}>
                                    <input 
                                        type="radio" 
                                        name="platform" 
                                        value="WhatsApp"
                                        checked={formData.platform === 'WhatsApp'}
                                        onChange={handleChange}
                                        className="accent-indigo-600" 
                                    />
                                    <span className="text-sm font-medium">WhatsApp</span>
                                </label>
                                <label className={`border rounded-lg p-3 flex items-center gap-2 cursor-pointer transition-all ${formData.platform === 'Facebook' ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 hover:border-indigo-300'}`}>
                                    <input 
                                        type="radio" 
                                        name="platform" 
                                        value="Facebook"
                                        checked={formData.platform === 'Facebook'}
                                        onChange={handleChange}
                                        className="accent-indigo-600" 
                                    />
                                    <span className="text-sm font-medium">Facebook</span>
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Approx. Member Count</label>
                            <select 
                                name="memberCount"
                                value={formData.memberCount}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white text-base"
                            >
                                <option>100 - 1,000 members</option>
                                <option>1,000 - 5,000 members</option>
                                <option>5,000 - 25,000 members</option>
                                <option>25,000+ members</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Group Link (Optional)</label>
                            <input 
                                type="url" 
                                name="groupLink"
                                value={formData.groupLink}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-base" 
                                placeholder="chat.whatsapp.com/..." 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Group Description (Optional)</label>
                            <textarea 
                                name="groupDescription"
                                value={formData.groupDescription}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-base resize-none h-24" 
                                placeholder="Briefly describe your group's topic or audience..." 
                            />
                        </div>
                       </>
                   ) : (
                       <>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Where are your customers?</label>
                            <div className="grid grid-cols-2 gap-3 mb-3">
                                <select 
                                    name="country"
                                    className="w-full px-3 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white text-base"
                                    value={formData.country}
                                    onChange={handleChange}
                                >
                                    <option value="CA">Canada</option>
                                    <option value="US">United States</option>
                                </select>
                                <select 
                                    name="region"
                                    className="w-full px-3 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all bg-white text-base"
                                    value={formData.region}
                                    onChange={handleChange}
                                >
                                    {formData.country === 'CA' 
                                        ? CANADA_PROVINCES.map(p => <option key={p} value={p}>{p}</option>)
                                        : US_STATES.map(s => <option key={s} value={s}>{s}</option>)
                                    }
                                </select>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Business Type</label>
                            <input 
                                type="text" 
                                name="businessType"
                                value={formData.businessType}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-base" 
                                placeholder="e.g. Realtor, Plumber, Gym..." 
                                required 
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-700 mb-1.5">Budget Range</label>
                            <div className="flex gap-2">
                                 {['$100+', '$500+', '$2k+'].map(b => (
                                     <button
                                        key={b}
                                        type="button"
                                        onClick={() => setFormData(prev => ({ ...prev, budget: b }))}
                                        className={`flex-1 rounded-lg py-3 px-3 text-sm text-center transition-all ${
                                            formData.budget === b 
                                            ? 'border border-indigo-500 bg-indigo-50 font-bold text-indigo-700 ring-1 ring-indigo-500' 
                                            : 'border border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                                        }`}
                                     >
                                         {b}
                                     </button>
                                 ))}
                            </div>
                        </div>
                       </>
                   )}
                   
                   <Button type="submit" className="w-full mt-2 h-12 text-base">
                     Next Step <ArrowRight size={18} />
                   </Button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-fade-in">
                    <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-3 text-sm text-indigo-900 flex items-start gap-2">
                        <Check size={16} className="mt-0.5 shrink-0" />
                        {role === 'admin' ? "Great! We have 12 advertisers looking for groups like yours." : "Perfect. We found 45+ groups in your target area."}
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Your Name</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-base" 
                            placeholder="John Smith" 
                            required 
                            autoFocus 
                        />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-1.5">Work Email</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all text-base" 
                            placeholder="john@company.com" 
                            required 
                        />
                    </div>

                    {submissionStatus === 'error' && (
                        <div className="bg-red-50 border border-red-100 rounded-lg p-3 text-sm text-red-600 flex items-center gap-2">
                            <AlertCircle size={16} />
                            Something went wrong. Please try again.
                        </div>
                    )}

                    <div className="pt-2 flex gap-3">
                        <button type="button" onClick={() => setStep(1)} className="px-4 py-3 rounded-lg text-slate-500 hover:bg-slate-100 transition-colors">
                            <ArrowLeft size={20} />
                        </button>
                        <Button type="submit" className="w-full h-12 text-base" disabled={submissionStatus === 'submitting'}>
                            {submissionStatus === 'submitting' ? <Loader2 className="animate-spin" /> : (role === 'admin' ? 'Activate Revenue Stream' : 'View Media Kit')}
                        </Button>
                    </div>
                    <p className="text-xs text-center text-slate-400">
                        By clicking above, you agree to our Terms. Your data is secure.
                    </p>
                </div>
              )}

            </form>
          )}
        </div>
      </div>
    </div>
  );
};