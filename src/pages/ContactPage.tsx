import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, MessageSquare, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactPage: React.FC = () => {
  const { settings } = useSite();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Admissions Inquiry');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim() || !phone.trim() || !email.trim() || !message.trim()) {
      setError('Please complete all form fields.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs items={[{ label: 'Contact & Directions' }]} />

      {/* Banner */}
      <section className="bg-[#2D060C] text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5A121E]/60 via-[#2D060C] to-[#1A0407]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#BD672A]/20 text-[#EAB592] border border-[#BD672A]/30">
            Admissions & Administration
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Connect With Rapid Schools
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#D4C3B3] font-sans">
            Reach out to our admissions counselors, campus office, or schedule an in-person meeting.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Admissions Desk Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#E6DDCF] shadow-sm space-y-3">
              <span className="text-[11px] font-bold text-[#BD672A] bg-[#FAF3EC] px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#BD672A]/20">
                Admissions Desk
              </span>
              <h3 className="font-cormorant text-xl font-semibold text-[#1C1917]">
                Admissions & Enrollment Cell
              </h3>
              <p className="text-xs text-[#57534E]">
                For prospectus requests, entrance eligibility queries, and registration assistance.
              </p>
              <div className="pt-2 space-y-2 text-xs text-[#57534E]">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#BD672A] shrink-0" />
                  <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="font-semibold text-[#1C1917] hover:text-[#BD672A]">
                    {settings.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#BD672A] shrink-0" />
                  <a href={`mailto:${settings.email}`} className="hover:text-[#BD672A]">
                    {settings.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#064E3B] shrink-0" />
                  <a
                    href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Rapid%20Schools,%20I%20have%20an%20admissions%20query.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#064E3B] hover:text-[#043327]"
                  >
                    Direct WhatsApp: {settings.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            {/* General Administrative Information */}
            <div className="p-6 rounded-3xl bg-white border border-[#E6DDCF] shadow-sm space-y-3">
              <span className="text-[11px] font-bold text-[#064E3B] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full uppercase tracking-wider border border-[#064E3B]/20">
                Campus Location
              </span>
              <h3 className="font-cormorant text-xl font-semibold text-[#1C1917]">
                Institutional Campus
              </h3>
              <div className="space-y-2 text-xs text-[#57534E]">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#BD672A] shrink-0 mt-0.5" />
                  <span>{settings.address}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#BD672A] shrink-0 mt-0.5" />
                  <span>
                    Office Hours: Monday – Saturday<br />
                    08:30 AM – 03:30 PM (Except Gazetted Holidays)
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={settings.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BD672A] hover:text-[#A35520]"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Emergency Helpline */}
            <div className="p-4 rounded-2xl bg-[#FAF3EC] border border-[#BD672A]/30 text-xs text-[#78350F]">
              <strong className="block font-bold mb-0.5">Emergency & Transport Desk:</strong>
              {settings.emergencyHelpline}
            </div>

          </div>

          {/* Right Column: Interactive Contact / Message Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#E6DDCF] shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#064E3B] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-cormorant text-3xl font-semibold text-[#1C1917]">
                  Message Successfully Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{name}</strong>. Your correspondence regarding <em>"{subject}"</em> has been logged. Our administration desk will respond to <strong>{email}</strong> or call you at <strong>{phone}</strong> shortly.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#BD672A] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#A35520] transition-colors"
                  >
                    Send Another Note
                  </button>
                  <Link
                    to="/"
                    className="px-5 py-2.5 rounded-xl bg-[#FAF7F2] text-[#1C1917] font-semibold text-xs uppercase tracking-wider hover:bg-[#E6DDCF] transition-colors"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#E6DDCF] pb-3 mb-2">
                  <h3 className="font-cormorant text-2xl font-semibold text-[#1C1917]">
                    Send an Official Message
                  </h3>
                  <p className="text-xs text-[#78716C]">
                    Submit your query and our team will get back to you promptly.
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] text-[#BE123C] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#BE123C]" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactName" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Full Name <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      placeholder="e.g. Anjali Nair"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactPhone" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Telephone / Mobile <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactEmail" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Email Address <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      placeholder="name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Inquiry Department <span className="text-[#BE123C]">*</span>
                    </label>
                    <select
                      id="contactSubject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                    >
                      <option value="Admissions Inquiry">Admissions & Prospectus</option>
                      <option value="Rapid Dreamz Inquiry">Rapid Dreamz (Junior Wing)</option>
                      <option value="Rapid Shakuntlayan Inquiry">Rapid Shakuntlayan (Class 1-12)</option>
                      <option value="Transport & Bus Route">Transport & Logistics</option>
                      <option value="General Administration">General Administration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                    Your Message / Detailed Query <span className="text-[#BE123C]">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={4}
                    placeholder="Please specify your query or requirements..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#BD672A] hover:bg-[#A35520] text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Transmit Message to Office</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
