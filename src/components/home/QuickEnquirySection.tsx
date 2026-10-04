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
    <section className="py-20 sm:py-24 bg-[#1C0306] text-white relative overflow-hidden">
      {/* Background radial lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#BD672A]/12 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#3D0B12]/50 rounded-full blur-[120px] pointer-events-none" />

      {/* Hairline Divider Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BD672A]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#2C070C] text-[#F3C292] border border-[#BD672A]/30 text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#BD672A] shadow-[0_0_8px_rgba(189,103,42,0.8)]" />
              <span className="font-mono uppercase tracking-[0.18em] text-[11px] font-bold">
                Admissions Session {settings.academicYear}
              </span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] text-[#FAF6F0]">
              Begin Your Child’s Journey at <span className="italic font-normal text-[#F3C292]">Rapid</span>
            </h2>

            <p className="text-[#DBCDC5] text-sm sm:text-base leading-relaxed font-sans">
              Submit your enquiry to receive our comprehensive prospectus, fee schedule overview, and a personal invitation for a guided campus tour.
            </p>

            <div className="space-y-3.5 pt-2 text-xs sm:text-sm text-[#DBCDC5]">
              <div className="flex items-start gap-3 p-4 rounded-2xl luxury-glass-dark border border-white/[0.08]">
                <div className="p-2 rounded-xl bg-[#BD672A]/20 text-[#F3C292] shrink-0 border border-[#BD672A]/30 mt-0.5">
                  <Sparkles className="w-4 h-4 text-[#F3C292]" />
                </div>
                <div>
                  <strong className="text-white block font-semibold text-sm">Rapid Dreamz (Play Group to UKG)</strong>
                  <span className="text-xs text-[#C4B2A2] font-sans">Nurturing early childhood care with developmental milestones and gentle social immersion.</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl luxury-glass-dark border border-white/[0.08]">
                <div className="p-2 rounded-xl bg-[#064E3B]/30 text-[#A7F3D0] shrink-0 border border-[#064E3B]/50 mt-0.5">
                  <GraduationCap className="w-4 h-4 text-[#34D399]" />
                </div>
                <div>
                  <strong className="text-white block font-semibold text-sm">Rapid Shakuntlayan (Class 1 to 12)</strong>
                  <span className="text-xs text-[#C4B2A2] font-sans">Comprehensive CBSE curriculum with scientific labs, competitive preparation, and values.</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs text-[#BFAEA0] font-sans">
              <Link to="/admissions" className="text-[#F3C292] hover:text-white flex items-center gap-1 font-semibold transition-colors">
                <span>View 4-Step Admission Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/visit" className="text-[#DBCDC5] hover:text-white flex items-center gap-1 transition-colors">
                <span>Schedule Campus Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Luxury Form Card */}
          <div className="lg:col-span-7 bg-white text-[#23070B] p-7 sm:p-10 rounded-3xl shadow-[0_25px_60px_-15px_rgba(28,3,6,0.5)] border border-[#E8DFD1]">
            {submittedRef ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#064E3B]/10 text-[#064E3B] flex items-center justify-center mx-auto mb-2 border border-[#064E3B]/20">
                  <CheckCircle2 className="w-10 h-10 text-[#064E3B]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#064E3B] bg-[#ECFDF5] px-3.5 py-1 rounded-full border border-[#064E3B]/20 font-mono">
                  Enquiry Logged in Registry
                </span>
                <h3 className="font-editorial text-3xl font-medium text-[#23070B]">
                  Thank You, {parentName}!
                </h3>
                <p className="text-sm text-[#5C4E50] max-w-md mx-auto leading-relaxed font-sans">
                  Your admission enquiry for <strong className="text-[#23070B]">{studentName}</strong> ({preferredClass} at {preferredSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}) has been assigned official tracking code:
                </p>
                <div className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF6] border border-[#E8DFD1] inline-block text-left text-xs space-y-1.5 font-sans">
                  <div><strong className="text-[#6E5D5F]">Reference Code:</strong> <span className="font-mono text-[#BD672A] font-bold text-sm ml-1.5">{submittedRef}</span></div>
                  <div><strong className="text-[#6E5D5F]">Admissions Desk:</strong> <span className="font-semibold text-[#23070B] ml-1.5">{settings.phone}</span></div>
                  <div><strong className="text-[#6E5D5F]">Official Confirmation:</strong> <span className="text-[#23070B] ml-1.5">Dispatched to {email}</span></div>
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
                    className="luxury-btn-outline px-5 py-2.5 rounded-xl font-semibold text-xs tracking-wider uppercase cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                  <Link
                    to="/visit"
                    className="luxury-btn-primary px-5 py-2.5 rounded-xl font-bold text-xs tracking-wider uppercase"
                  >
                    Book Campus Tour Now
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#E8DFD1] pb-3 mb-4">
                  <h3 className="font-editorial text-2xl font-medium text-[#23070B]">
                    Admissions Enquiry Dialogue
                  </h3>
                  <p className="text-xs text-[#6E5D5F] font-sans mt-0.5">
                    Submit your application details to receive direct counselor assistance within 24 hours.
                  </p>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#DC2626]" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Step 1: Choose School */}
                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1.5 font-mono">
                    1. Select School Division <span className="text-[#BD672A]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleSchoolChange('dreamz')}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        preferredSchool === 'dreamz'
                          ? 'border-[#BD672A] bg-[#BD672A]/10 ring-2 ring-[#BD672A]/20 shadow-xs'
                          : 'border-[#E8DFD1] bg-[#FCFAF6] hover:border-[#BD672A]/50'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-[#23070B] font-outfit">Rapid Dreamz</div>
                        <div className="text-[11px] text-[#6E5D5F] font-sans">Play Group to UKG</div>
                      </div>
                      <Sparkles className={`w-4 h-4 ${preferredSchool === 'dreamz' ? 'text-[#BD672A]' : 'text-[#A8988C]'}`} />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSchoolChange('shakuntlayan')}
                      className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        preferredSchool === 'shakuntlayan'
                          ? 'border-[#064E3B] bg-[#064E3B]/10 ring-2 ring-[#064E3B]/20 shadow-xs'
                          : 'border-[#E8DFD1] bg-[#FCFAF6] hover:border-[#064E3B]/50'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-[#23070B] font-outfit">Rapid Shakuntlayan</div>
                        <div className="text-[11px] text-[#6E5D5F] font-sans">Class 1 to 12 (CBSE)</div>
                      </div>
                      <GraduationCap className={`w-4 h-4 ${preferredSchool === 'shakuntlayan' ? 'text-[#064E3B]' : 'text-[#A8988C]'}`} />
                    </button>
                  </div>
                </div>

                {/* Step 2: Choose Class */}
                <div>
                  <label htmlFor="quickPrefClass" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1.5 font-mono">
                    2. Target Class / Standard <span className="text-[#BD672A]">*</span>
                  </label>
                  <select
                    id="quickPrefClass"
                    value={preferredClass}
                    onChange={(e) => setPreferredClass(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm font-medium focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
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
                    <label htmlFor="quickParentName" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Parent / Guardian Name <span className="text-[#BD672A]">*</span>
                    </label>
                    <input
                      id="quickParentName"
                      type="text"
                      placeholder="e.g. Rameshwar Sharma"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="quickStudentName" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Student Name <span className="text-[#BD672A]">*</span>
                    </label>
                    <input
                      id="quickStudentName"
                      type="text"
                      placeholder="e.g. Aarav Sharma"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="quickPhone" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Mobile Number <span className="text-[#BD672A]">*</span>
                    </label>
                    <input
                      id="quickPhone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="quickEmail" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                      Email Address <span className="text-[#BD672A]">*</span>
                    </label>
                    <input
                      id="quickEmail"
                      type="email"
                      placeholder="parent@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                      required
                    />
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="quickMessage" className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                    Specific Academic Interests (Optional)
                  </label>
                  <textarea
                    id="quickMessage"
                    rows={2}
                    placeholder="Tell us about your child's interests or previous schooling..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-[#23070B] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="luxury-btn-primary w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering in Registry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-white" />
                      <span>Submit Official Enquiry</span>
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
