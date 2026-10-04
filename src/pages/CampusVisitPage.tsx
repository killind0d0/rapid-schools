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
    <div className="min-h-screen bg-slate-50 pb-24">
      <Breadcrumbs items={[{ label: 'Book a Campus Visit' }]} />

      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Personal Guided Tour
          </span>
          <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
            Experience Rapid Schools in Person
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Walk through our vibrant classrooms, science laboratories, creative art studios, and athletic spaces with an academic counselor.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: What to Expect / Campus Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-6">
              <h2 className="font-outfit text-xl font-bold text-slate-900">
                What to Expect on Your Visit
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-100 text-amber-800 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Curriculum Immersion</strong>
                    Observe active teaching methodologies and peer collaboration in real-time learning spaces.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-blue-100 text-blue-900 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Facilities Exploration</strong>
                    Tour science and IT laboratories, sports complexes, libraries, and child-safe play areas.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-emerald-100 text-emerald-800 shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold">Counselor Dialogue (45 Mins)</strong>
                    One-on-one session addressing curriculum progression, fee structure, and student support.
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>{settings.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Visiting Desk: {settings.phone}</span>
                </div>
              </div>
            </div>

            {/* Note on Demo Mode Backend */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-900 text-xs leading-relaxed">
              <strong>Notice:</strong> Submissions are logged into the integrated Rapid Schools CMS. You can view, manage, and update tour statuses directly inside the Admin Console.
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md">
            {bookingRef ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                  Visit Request Confirmed
                </span>
                <h3 className="font-outfit text-2xl font-bold text-slate-900">
                  We Look Forward to Welcoming You!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your tour of <strong className="text-slate-900">{preferredSchool === 'both' ? 'Both Campuses' : preferredSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}</strong> has been registered.
                </p>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 inline-block text-left text-xs space-y-1.5 min-w-[280px]">
                  <div><strong>Booking Reference:</strong> <span className="font-mono text-amber-700 font-bold">{bookingRef}</span></div>
                  <div><strong>Scheduled Date:</strong> {preferredDate} at {preferredTime}</div>
                  <div><strong>Parent Name:</strong> {parentName} ({phone})</div>
                  <div><strong>Status:</strong> <span className="text-amber-600 font-semibold">Pending Confirmation Call</span></div>
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
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase hover:bg-slate-800 transition-colors"
                  >
                    Book Another Tour
                  </button>
                  <Link
                    to="/"
                    className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-semibold text-xs tracking-wider uppercase hover:bg-slate-200 transition-colors"
                  >
                    Return Home
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-2">
                  <h3 className="font-outfit text-xl font-bold text-slate-900">
                    Schedule Your Campus Tour
                  </h3>
                  <p className="text-xs text-slate-500">
                    Tours are conducted Monday through Saturday between 9:30 AM and 2:30 PM.
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Which wing */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Which School Wing Would You Like to Tour? <span className="text-rose-500">*</span>
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
                            ? 'border-amber-500 bg-amber-50 text-slate-950 ring-2 ring-amber-500/20 font-bold'
                            : 'border-slate-200 hover:border-slate-300 text-slate-600'
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
                    <label htmlFor="visitParentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Parent / Visitor Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="visitParentName"
                      type="text"
                      placeholder="e.g. Meenakshi Sundaram"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="visitPhone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="visitPhone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                </div>

                {/* Email & Child Class */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="visitEmail" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="visitEmail"
                      type="email"
                      placeholder="visitor@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="visitClass" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Child's Intended Class / Grade
                    </label>
                    <input
                      id="visitClass"
                      type="text"
                      placeholder="e.g. Nursery or Class 6"
                      value={studentClass}
                      onChange={(e) => setStudentClass(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Preferred Date & Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="visitDate" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Date <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="visitDate"
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="visitTime" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Preferred Time Slot <span className="text-rose-500">*</span>
                    </label>
                    <select
                      id="visitTime"
                      value={preferredTime}
                      onChange={(e) => setPreferredTime(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                  <label htmlFor="visitMessage" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Special Requests or Questions (Optional)
                  </label>
                  <textarea
                    id="visitMessage"
                    rows={2}
                    placeholder="e.g. Interested in science labs, transport routes, or sports facilities..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
