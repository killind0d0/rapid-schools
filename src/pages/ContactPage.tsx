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
    <div className="min-h-screen bg-[#FAF6F0] pb-24">
      <Breadcrumbs items={[{ label: 'Contact & Directions' }]} />

      {/* Header Banner */}
      <section className="bg-[#1C0306] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Layered radial glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#BD672A]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#3D0B12]/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BD672A]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#2C070C] text-[#F3C292] border border-[#BD672A]/30 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD672A] shadow-[0_0_8px_rgba(189,103,42,0.8)]" />
            Admissions & Administration
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Connect With <span className="italic font-normal text-[#F3C292]">Rapid Schools</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D4C3B3] leading-relaxed font-sans">
            Reach out to our admissions counselors, campus administrative office, or schedule an in-person meeting.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Admissions Desk Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] space-y-4">
              <span className="text-[10px] font-bold text-[#BD672A] bg-[#BD672A]/10 px-3 py-1 rounded-full uppercase tracking-[0.2em] border border-[#BD672A]/25 font-mono">
                Admissions Desk
              </span>
              <h3 className="font-editorial text-2xl font-medium text-[#23070B]">
                Admissions & Enrollment Cell
              </h3>
              <p className="text-xs sm:text-sm text-[#5C4E50] font-sans">
                For prospectus requests, entrance eligibility queries, and registration assistance.
              </p>
              <div className="pt-2 space-y-3 text-xs sm:text-sm text-[#5C4E50] font-sans">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#BD672A] shrink-0" />
                  <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="font-semibold text-[#23070B] hover:text-[#BD672A] transition-colors">
                    {settings.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#BD672A] shrink-0" />
                  <a href={`mailto:${settings.email}`} className="hover:text-[#BD672A] transition-colors">
                    {settings.email}
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MessageSquare className="w-4 h-4 text-[#064E3B] shrink-0" />
                  <a
                    href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Rapid%20Schools,%20I%20have%20an%20admissions%20query.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#064E3B] hover:text-[#043327] transition-colors"
                  >
                    Direct WhatsApp: {settings.whatsapp}
                  </a>
                </div>
              </div>
            </div>

            {/* Campus Location */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] space-y-4">
              <span className="text-[10px] font-bold text-[#064E3B] bg-[#064E3B]/10 px-3 py-1 rounded-full uppercase tracking-[0.2em] border border-[#064E3B]/25 font-mono">
                Campus Location
              </span>
              <h3 className="font-editorial text-2xl font-medium text-[#23070B]">
                Institutional Campus
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-[#5C4E50] font-sans">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#BD672A] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{settings.address}</span>
                </div>
                <div className="flex items-start gap-2.5">
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
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#BD672A] hover:text-[#A2521C] transition-colors font-mono uppercase tracking-wider"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Emergency Helpline */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8DFD1] text-xs text-[#5C4E50] font-sans shadow-xs">
              <strong className="block font-bold text-[#23070B] mb-1 font-outfit uppercase tracking-wider">Emergency & Transport Desk:</strong>
              {settings.emergencyHelpline}
            </div>

          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)]">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#064E3B]/10 text-[#064E3B] flex items-center justify-center mx-auto border border-[#064E3B]/20">
                  <CheckCircle2 className="w-10 h-10 text-[#064E3B]" />
                </div>
                <h3 className="font-editorial text-3xl font-medium text-[#23070B]">
                  Message Successfully Dispatched
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4E50] max-w-md mx-auto leading-relaxed font-sans">
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
                    className="luxury-btn-outline px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider cursor-pointer"
                  >
                    Send Another Note
                  </button>
                  <Link
                    to="/"
                    className="luxury-btn-primary px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider"
                  >
                    Return to Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#E8DFD1] pb-3 mb-2">
                  <h3 className="font-editorial text-2xl font-medium text-[#23070B]">
                    Send an Official Message
                  </h3>
                  <p className="text-xs text-[#6E5D5F] font-sans mt-0.5">
                    Submit your query and our admissions or campus administration team will respond promptly.
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
                    <label htmlFor="contactName" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Full Name <span className="text-[#BD672A]">*</span>
                    </label>
                    <input
                      id="contactName"
                      type="text"
                      placeholder="e.g. Anjali Nair"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactPhone" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Telephone / Mobile <span className="text-[#BD672A]">*</span>
                    </label>
                    <input
                      id="contactPhone"
                      type="tel"
                      placeholder="10-digit number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="contactEmail" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Email Address <span className="text-[#BD672A]">*</span>
                    </label>
                    <input
                      id="contactEmail"
                      type="email"
                      placeholder="name@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="contactSubject" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Inquiry Department <span className="text-[#BD672A]">*</span>
                    </label>
                    <select
                      id="contactSubject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                    >
                      <option value="Admissions Inquiry">Admissions Inquiry</option>
                      <option value="Campus Tour Booking">Campus Tour Booking</option>
                      <option value="Academic Curriculum">Academic Curriculum</option>
                      <option value="Fee Structure & Transport">Fee Structure & Transport</option>
                      <option value="General Administration">General Administration</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contactMessage" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                    Your Message <span className="text-[#BD672A]">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={4}
                    placeholder="Provide details about your query..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="luxury-btn-primary w-full py-3.5 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Dispatching Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Dispatch Official Correspondence</span>
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
