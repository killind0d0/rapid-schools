import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
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
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs items={[{ label: 'Book a Campus Visit' }]} />

      {/* Header Banner */}
      <section className="bg-[#2D060C] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5A121E]/60 via-[#2D060C] to-[#1A0407]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#BD672A]/20 text-[#EAB592] border border-[#BD672A]/30">
            Personal Guided Tour
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Experience Rapid Schools in Person
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D4C3B3] leading-relaxed font-sans">
            Walk through our vibrant classrooms, science laboratories, creative art studios, and athletic spaces with an academic counselor.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: What to Expect / Campus Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E6DDCF] shadow-sm space-y-6">
              <h2 className="font-cormorant text-2xl font-semibold text-[#1C1917]">
                What to Expect on Your Visit
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-[#57534E]">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FFF7ED] text-[#C2410C] shrink-0 border border-[#FDBA74]/50">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#1C1917] font-semibold">Curriculum Immersion</strong>
                    Observe active teaching methodologies and peer collaboration in real-time learning spaces.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#ECFDF5] text-[#064E3B] shrink-0 border border-[#86EFAC]/50">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#1C1917] font-semibold">Facilities Exploration</strong>
                    Tour science and IT laboratories, sports complexes, libraries, and child-safe play areas.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FAF3EC] text-[#BD672A] shrink-0 border border-[#BD672A]/20">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-[#1C1917] font-semibold">Counselor Dialogue (45 Mins)</strong>
                    One-on-one session addressing curriculum progression, fee structure, and student support.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6DDCF] text-xs text-[#78716C] space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#BD672A] shrink-0" />
                  <span>{settings.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#BD672A] shrink-0" />
                  <span>Visiting Desk: {settings.phone}</span>
                </div>
              </div>
            </div>

            {/* Note on Demo Mode Backend */}
            <div className="p-4 rounded-2xl bg-[#FAF3EC] border border-[#BD672A]/30 text-[#78350F] text-xs leading-relaxed">
              <strong>Notice:</strong> Submissions are logged into the integrated Rapid Schools CMS. You can view, manage, and update tour statuses directly inside the Admin Console.
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-[#E6DDCF] shadow-sm">
            {bookingRef ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#064E3B] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#064E3B] bg-[#DCFCE7] px-3.5 py-1 rounded-full">
                  Visit Request Confirmed
                </span>
                <h3 className="font-cormorant text-3xl font-semibold text-[#1C1917]">
                  We Look Forward to Welcoming You!
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
                  Your tour of <strong className="text-[#1C1917]">{preferredSchool === 'both' ? 'Both Campuses' : preferredSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}</strong> has been registered.
                </p>

                <div className="p-4 rounded-2xl bg-[#FCFAF6] border border-[#E6DDCF] inline-block text-left text-xs space-y-1.5 min-w-[280px]">
                  <div><strong>Booking Reference:</strong> <span className="font-mono text-[#BD672A] font-bold">{bookingRef}</span></div>
                  <div><strong>Scheduled Date:</strong> {preferredDate} at {preferredTime}</div>
                  <div><strong>Parent Name:</strong> {parentName} ({phone})</div>
                  <div><strong>Status:</strong> <span className="text-[#BD672A] font-semibold">Pending Confirmation Call</span></div>
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
                    className="px-5 py-2.5 rounded-xl bg-[#BD672A] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#A35520] transition-colors"
                  >
                    Book Another Tour
                  </button>
                  <Link
                    to="/"
                    className="px-5 py-2.5 rounded-xl bg-[#FAF7F2] text-[#1C1917] font-semibold text-xs tracking-wider uppercase hover:bg-[#E6DDCF] transition-colors"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#E6DDCF] pb-3 mb-2">
                  <h3 className="font-cormorant text-2xl font-semibold text-[#1C1917]">
                    Schedule Your Campus Tour
                  </h3>
                  <p className="text-xs text-[#78716C]">
                    Tours are conducted Monday through Saturday between 9:30 AM and 2:30 PM.
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
                  <label className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1.5">
                    Which School Wing Would You Like to Tour? <span className="text-[#BE123C]">*</span>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'dreamz', label: 'Rapid Dreamz (PG–UKG)' },
                      { id: 'shakuntlayan', label: 'Rapid Shakuntlayan (1–12)' },
                      { id: 'both', label: 'Both Campuses' }
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setPreferredSchool(opt.id as any)}
                        className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all ${
                          preferredSchool === opt.id
                            ? 'border-[#BD672A] bg-[#FAF3EC] text-[#1C1917] ring-2 ring-[#BD672A]/20 font-bold'
                            : 'border-[#E6DDCF] hover:border-[#D4C3B3] text-[#57534E]'
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
                    <label htmlFor="visitParentName" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Parent / Visitor Name <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="visitParentName"
                      type="text"
                      placeholder="e.g. Meenakshi Sundaram"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="visitPhone" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Mobile Number <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="visitPhone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                      required
                    />
                  </div>
                </div>

                {/* Email & Child Class */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="visitEmail" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Email Address <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="visitEmail"
                      type="email"
                      placeholder="visitor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="visitClass" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Child's Intended Class / Grade
                    </label>
                    <input
                      id="visitClass"
                      type="text"
                      placeholder="e.g. Nursery or Class 6"
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                    />
                  </div>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="visitDate" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Preferred Date <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="visitDate"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="visitTime" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Preferred Time Slot <span className="text-[#BE123C]">*</span>
                    </label>
                    <select
                      id="visitTime"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
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
                  <label htmlFor="visitMessage" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                    Special Requests or Questions (Optional)
                  </label>
                  <textarea
                    id="visitMessage"
                    rows={2}
                    placeholder="e.g. Interested in science labs, transport routes, or sports facilities..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#BD672A] hover:bg-[#A35520] text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Confirming Booking...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
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
