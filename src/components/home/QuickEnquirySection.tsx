import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { CheckCircle2, Send, AlertCircle, ArrowRight, Sparkles, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const QuickEnquirySection: React.FC = () => {
  const { submitEnquiry, settings } = useSite();

  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [preferredSchool, setPreferredSchool] = useState<'dreamz' | 'shakuntlayan'>('dreamz');
  const [preferredClass, setPreferredClass] = useState('Nursery');
  const [message, setMessage] = useState('');

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dreamzClasses = ['Play Group', 'Nursery', 'LKG', 'UKG'];
  const shakunClasses = [
    'Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5',
    'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10',
    'Class 11 (Science)', 'Class 11 (Commerce)', 'Class 11 (Humanities)',
    'Class 12'
  ];

  const handleSchoolChange = (school: 'dreamz' | 'shakuntlayan') => {
    setPreferredSchool(school);
    setPreferredClass(school === 'dreamz' ? 'Nursery' : 'Class 1');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!parentName.trim() || !studentName.trim() || !phone.trim() || !email.trim()) {
      setError('Please fill in all required fields (Parent name, Student name, Phone, and Email).');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please provide a valid 10-digit mobile number.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const refId = submitEnquiry({
          parentName,
          studentName,
          phone,
          email,
          preferredSchool,
          preferredClass,
          message: message || undefined
        });
        setSubmittedRef(refId);
        setIsSubmitting(false);
      } catch (err) {
        setError('An error occurred while saving your enquiry. Please try again or call our admissions cell.');
        setIsSubmitting(false);
      }
    }, 400);
  };

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900 to-slate-950 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-400 border border-amber-500/20">
              Admissions Open {settings.academicYear}
            </span>

            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Begin Your Child’s Journey at <span className="text-amber-400">Rapid</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Submit your enquiry to receive our comprehensive prospectus, fee schedule overview, and an invitation for an interactive campus visit.
            </p>

            <div className="space-y-4 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Rapid Dreamz (Play Group to UKG)</strong>
                  Nurturing early childhood care with developmental milestones and gentle social immersion.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-800/60 border border-slate-700/60">
                <GraduationCap className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Rapid Shakuntlayan (Class 1 to 12)</strong>
                  Comprehensive CBSE curriculum with scientific labs, competitive preparation, and values.
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs text-slate-400">
              <Link to="/admissions" className="text-amber-400 hover:text-amber-300 flex items-center gap-1 font-semibold">
                <span>View 4-Step Admission Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/visit" className="text-slate-300 hover:text-white flex items-center gap-1">
                <span>Schedule Campus Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success State */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-6 sm:p-10 rounded-3xl shadow-2xl border border-slate-100">
            {submittedRef ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                  Enquiry Successfully Recorded
                </span>
                <h3 className="font-outfit text-2xl font-bold text-slate-900">
                  Thank You, {parentName}!
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Your admission enquiry for <strong className="text-slate-900">{studentName}</strong> ({preferredClass} at {preferredSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}) has been logged into our admissions database.
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 inline-block text-left text-xs space-y-1">
                  <div><strong>Reference Number:</strong> <span className="font-mono text-amber-700 font-bold">{submittedRef}</span></div>
                  <div><strong>Admissions Contact:</strong> {settings.phone}</div>
                  <div><strong>Email Confirmation:</strong> Dispatched to {email}</div>
                </div>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmittedRef(null);
                      setParentName('');
                      setStudentName('');
                      setPhone('');
                      setEmail('');
                      setMessage('');
                    }}
                    className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs tracking-wider uppercase hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                  <Link
                    to="/visit"
                    className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs tracking-wider uppercase hover:bg-amber-400 transition-colors"
                  >
                    Book Campus Tour Now
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-4">
                  <h3 className="font-outfit text-xl font-bold text-slate-900">
                    Quick Admission Enquiry
                  </h3>
                  <p className="text-xs text-slate-500">
                    Fill this form to begin the admission dialogue. Our counselors will respond within 24 hours.
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Step 1: Choose School */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    1. Select School Wing <span className="text-rose-500">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleSchoolChange('dreamz')}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        preferredSchool === 'dreamz'
                          ? 'border-amber-500 bg-amber-50/60 ring-2 ring-amber-500/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900">Rapid Dreamz</div>
                        <div className="text-[11px] text-slate-500">Play Group to UKG</div>
                      </div>
                      <Sparkles className={`w-4 h-4 ${preferredSchool === 'dreamz' ? 'text-amber-600' : 'text-slate-400'}`} />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSchoolChange('shakuntlayan')}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                        preferredSchool === 'shakuntlayan'
                          ? 'border-blue-700 bg-blue-50/60 ring-2 ring-blue-700/20'
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-slate-900">Rapid Shakuntlayan</div>
                        <div className="text-[11px] text-slate-500">Class 1 to 12 (CBSE)</div>
                      </div>
                      <GraduationCap className={`w-4 h-4 ${preferredSchool === 'shakuntlayan' ? 'text-blue-900' : 'text-slate-400'}`} />
                    </button>
                  </div>
                </div>

                {/* Step 2: Choose Class */}
                <div>
                  <label htmlFor="preferredClass" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    2. Target Class / Standard <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="preferredClass"
                    value={preferredClass}
                    onChange={(e) => setPreferredClass(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white text-slate-900 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    {(preferredSchool === 'dreamz' ? dreamzClasses : shakunClasses).map((cls) => (
                      <option key={cls} value={cls}>
                        {cls}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Parent & Student Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="parentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Parent / Guardian Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      placeholder="e.g. Ramesh Kumar"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="studentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Student Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="studentName"
                      type="text"
                      placeholder="e.g. Aarav Kumar"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Mobile Number <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="parent@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Specific Queries / Academic Background (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={2}
                    placeholder="Tell us about your child's interests or previous schooling..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-slate-900 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Enquiry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Admission Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
