import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Calendar, Clock, MapPin, CheckCircle2, AlertCircle, Send, Sparkles, GraduationCap, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CampusVisitPage: React.FC = () => {
  const { bookVisit, settings } = useSite();

  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredSchool, setPreferredSchool] = useState<'dreamz' | 'shakuntlayan' | 'both'>('both');
  const [studentClass, setStudentClass] = useState('Primary (Class 1-5)');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:00 AM');
  const [message, setMessage] = useState('');

  const [bookingRef, setBookingRef] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!parentName.trim() || !phone.trim() || !email.trim() || !preferredDate) {
      setError('Please fill in all mandatory fields (Name, Phone, Email, and Preferred Visit Date).');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const id = bookVisit({
          parentName,
          phone,
          email,
          preferredSchool,
          studentClass,
          preferredDate,
          preferredTime,
          message: message || undefined
        });
        setBookingRef(id);
        setIsSubmitting(false);
      } catch (err) {
        setError('Failed to book tour. Please try again or contact admissions.');
        setIsSubmitting(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-24">
      <Breadcrumbs items={[{ label: 'Book a Campus Visit' }]} />

      {/* Header Banner */}
      <section className="bg-[#1C0306] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Layered radial glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#BD672A]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#3D0B12]/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BD672A]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#2C070C] text-[#F3C292] border border-[#BD672A]/30 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD672A] shadow-[0_0_8px_rgba(189,103,42,0.8)]" />
            Personal Guided Tour
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Experience <span className="italic font-normal text-[#F3C292]">Rapid Schools</span> in Person
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D4C3B3] leading-relaxed font-sans">
            Walk through our vibrant classrooms, science laboratories, creative art studios, and athletic spaces accompanied by an academic counselor.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: What to Expect / Campus Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] space-y-6">
              <h2 className="font-editorial text-2xl font-medium text-[#23070B]">
                What to Expect on Your Tour
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#5C4E50] font-sans">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#BD672A]/10 text-[#BD672A] shrink-0 border border-[#BD672A]/25">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#23070B] font-semibold text-sm">Curriculum Immersion</strong>
                    Observe active teaching methodologies and peer collaboration in real-time learning spaces.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#064E3B]/10 text-[#064E3B] shrink-0 border border-[#064E3B]/20">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#23070B] font-semibold text-sm">Facilities Exploration</strong>
                    Tour science and IT laboratories, sports complexes, libraries, and child-safe play areas.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#BD672A]/10 text-[#BD672A] shrink-0 border border-[#BD672A]/25">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#23070B] font-semibold text-sm">Counselor Dialogue (45 Mins)</strong>
                    One-on-one session addressing curriculum progression, fee structure, and student support.
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-[#E8DFD1] text-xs text-[#6E5D5F] space-y-2.5 font-sans">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#BD672A] shrink-0 mt-0.5" />
                  <span>{settings.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#BD672A] shrink-0" />
                  <span>Visiting Desk: {settings.phone}</span>
                </div>
              </div>
            </div>

            {/* Note on Admissions Registry */}
            <div className="p-5 rounded-2xl bg-white border border-[#E8DFD1] text-[#5C4E50] text-xs leading-relaxed font-sans shadow-xs">
              <strong className="text-[#23070B] block mb-1">Administrative Note:</strong>
              Campus visit appointments are directly confirmed and assigned to senior educational coordinators upon booking.
            </div>
          </div>

          {/* Right: Booking Form Card */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)]">
            {bookingRef ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#064E3B]/10 text-[#064E3B] flex items-center justify-center mx-auto border border-[#064E3B]/20">
                  <CheckCircle2 className="w-10 h-10 text-[#064E3B]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#064E3B] bg-[#ECFDF5] px-3.5 py-1 rounded-full border border-[#064E3B]/20 font-mono">
                  Visit Request Confirmed
                </span>
                <h3 className="font-editorial text-3xl font-medium text-[#23070B]">
                  We Look Forward to Welcoming You!
                </h3>
                <p className="text-xs sm:text-sm text-[#5C4E50] max-w-md mx-auto leading-relaxed font-sans">
                  Your tour of <strong className="text-[#23070B]">{preferredSchool === 'both' ? 'Both Campuses' : preferredSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}</strong> has been registered.
                </p>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF6] border border-[#E8DFD1] inline-block text-left text-xs space-y-1.5 min-w-[280px] font-sans">
                  <div><strong className="text-[#6E5D5F]">Booking Reference:</strong> <span className="font-mono text-[#BD672A] font-bold ml-1.5">{bookingRef}</span></div>
                  <div><strong className="text-[#6E5D5F]">Scheduled Date:</strong> <span className="text-[#23070B] ml-1.5">{preferredDate} at {preferredTime}</span></div>
                  <div><strong className="text-[#6E5D5F]">Parent Name:</strong> <span className="text-[#23070B] ml-1.5">{parentName} ({phone})</span></div>
                  <div><strong className="text-[#6E5D5F]">Status:</strong> <span className="text-[#BD672A] font-semibold ml-1.5">Pending Confirmation Call</span></div>
                </div>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setBookingRef(null);
                      setParentName('');
                      setPhone('');
                      setEmail('');
                      setPreferredDate('');
                      setMessage('');
                    }}
                    className="luxury-btn-outline px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase cursor-pointer"
                  >
                    Book Another Tour
                  </button>
                  <Link
                    to="/"
                    className="luxury-btn-primary px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#E8DFD1] pb-3 mb-2">
                  <h3 className="font-editorial text-2xl font-medium text-[#23070B]">
                    Schedule Your Campus Tour
                  </h3>
                  <p className="text-xs text-[#6E5D5F] font-sans mt-0.5">
                    Tours are conducted Monday through Saturday between 9:30 AM and 3:30 PM.
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] text-[#BE123C] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#BE123C]" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Which wing */}
                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1.5 font-mono">
                    Which School Wing Would You Like to Tour? <span className="text-[#BD672A]">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: 'dreamz', label: 'Rapid Dreamz (PG–UKG)' },
                      { id: 'shakuntlayan', label: 'Rapid Shakuntlayan (1–12)' },
                      { id: 'both', label: 'Both Campuses' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPreferredSchool(opt.id as any)}
                        className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all cursor-pointer font-sans ${
                          preferredSchool === opt.id
                            ? 'border-[#BD672A] bg-[#BD672A]/10 text-[#23070B] ring-2 ring-[#BD672A]/20 font-bold'
                            : 'border-[#E8DFD1] bg-[#FCFAF6] hover:border-[#BD672A]/50 text-[#5C4E50]'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Parent Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="visitParentName" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Parent / Visitor Name <span className="text-[#BD672A]">*</span>
                    </label>
                    <input
                      id="visitParentName"
                      type="text"
                      placeholder="e.g. Meenakshi Sundaram"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="visitPhone" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Mobile Number <span className="text-[#BD672A]">*</span>
                    </label>
                    <input
                      id="visitPhone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Email & Child Class */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="visitEmail" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Email Address <span className="text-[#BD672A]">*</span>
                    </label>
                    <input
                      id="visitEmail"
                      type="email"
                      placeholder="visitor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="visitClass" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Child's Intended Class / Grade
                    </label>
                    <input
                      id="visitClass"
                      type="text"
                      placeholder="e.g. Nursery or Class 6"
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                    />
                  </div>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="visitDate" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Preferred Date <span className="text-[#BD672A]">*</span>
                    </label>
                    <input
                      id="visitDate"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="visitTime" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Preferred Time Slot <span className="text-[#BD672A]">*</span>
                    </label>
                    <select
                      id="visitTime"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                    >
                      <option value="09:30 AM">09:30 AM – 10:30 AM</option>
                      <option value="11:00 AM">11:00 AM – 12:00 PM</option>
                      <option value="01:30 PM">01:30 PM – 02:30 PM</option>
                      <option value="03:00 PM">03:00 PM – 04:00 PM</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="visitMessage" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                    Special Requests or Questions (Optional)
                  </label>
                  <textarea
                    id="visitMessage"
                    rows={2}
                    placeholder="e.g. Interested in science labs, transport routes, or sports facilities..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="luxury-btn-primary w-full py-3.5 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming Booking...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Confirm Campus Visit Request</span>
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
