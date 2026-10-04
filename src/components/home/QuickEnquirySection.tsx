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
    <section className="py-20 bg-[#2D060C] text-white relative overflow-hidden">
      {/* Background vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#24050A] via-[#2D060C] to-[#1F0408] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Context & Guidelines */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#5A121E] text-[#E8955A] border border-[#BD672A]/40 font-mono">
              Admissions Session {settings.academicYear}
            </span>

            <h2 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Begin Your Child’s Journey at <span className="text-[#E8955A]">Rapid</span>
            </h2>

            <p className="text-[#DBCDC5] text-sm sm:text-base leading-relaxed">
              Submit your enquiry to receive our comprehensive prospectus, fee schedule overview, and an invitation for an interactive campus visit.
            </p>

            <div className="space-y-4 pt-2 text-xs sm:text-sm text-[#DBCDC5]">
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#3D0B12]/80 border border-[#52121C]">
                <Sparkles className="w-5 h-5 text-[#F97316] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Rapid Dreamz (Play Group to UKG)</strong>
                  Nurturing early childhood care with developmental milestones and gentle social immersion.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#3D0B12]/80 border border-[#52121C]">
                <GraduationCap className="w-5 h-5 text-[#34D399] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Rapid Shakuntlayan (Class 1 to 12)</strong>
                  Comprehensive CBSE curriculum with scientific labs, competitive preparation, and values.
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-6 text-xs text-[#BFAEA0]">
              <Link to="/admissions" className="text-[#E8955A] hover:text-[#FED7AA] flex items-center gap-1 font-semibold">
                <span>View 4-Step Admission Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link to="/visit" className="text-[#DBCDC5] hover:text-white flex items-center gap-1">
                <span>Schedule Campus Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Form or Success State */}
          <div className="lg:col-span-7 bg-[#FCFAF6] text-[#291B1D] p-6 sm:p-10 rounded-3xl shadow-2xl border border-[#E6DDCF]">
            {submittedRef ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#064E3B] flex items-center justify-center mx-auto mb-2 border border-[#A7F3D0]">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#064E3B] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#A7F3D0]">
                  Enquiry Logged in Registry
                </span>
                <h3 className="font-outfit text-2xl font-bold text-[#2B1B1D]">
                  Thank You, {parentName}!
                </h3>
                <p className="text-sm text-[#5C494A] max-w-md mx-auto leading-relaxed">
                  Your admission enquiry for <strong className="text-[#2B1B1D]">{studentName}</strong> ({preferredClass} at {preferredSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}) has been assigned official tracking code:
                </p>
                <div className="p-4 rounded-xl bg-[#FAF6F0] border border-[#E8DFD0] inline-block text-left text-xs space-y-1">
                  <div><strong>Reference Number:</strong> <span className="font-mono text-[#5A121E] font-bold text-sm">{submittedRef}</span></div>
                  <div><strong>Admissions Desk:</strong> {settings.phone}</div>
                  <div><strong>Confirmation:</strong> Dispatched to {email}</div>
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
                    className="px-5 py-2.5 rounded-xl bg-[#3D0B12] text-white font-semibold text-xs tracking-wider uppercase hover:bg-[#54121B] transition-colors cursor-pointer"
                  >
                    Submit Another Enquiry
                  </button>
                  <Link
                    to="/visit"
                    className="px-5 py-2.5 rounded-xl bg-[#BD672A] text-white font-bold text-xs tracking-wider uppercase hover:bg-[#A35520] transition-colors"
                  >
                    Book Campus Tour Now
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#E8DFD0] pb-3 mb-4">
                  <h3 className="font-outfit text-xl font-bold text-[#2B1B1D]">
                    Admissions Enquiry Dialogue
                  </h3>
                  <p className="text-xs text-[#7A6765]">
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
                  <label className="block text-xs font-bold text-[#432C2E] uppercase tracking-wider mb-1.5 font-mono">
                    1. Select School Wing <span className="text-[#DC2626]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => handleSchoolChange('dreamz')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        preferredSchool === 'dreamz'
                          ? 'border-[#EA580C] bg-[#FFEDD5]/50 ring-2 ring-[#EA580C]/20'
                          : 'border-[#E6DDCF] bg-[#FAF6F0] hover:border-[#D47A3B]'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-[#2B1B1D]">Rapid Dreamz</div>
                        <div className="text-[11px] text-[#7A6765]">Play Group to UKG</div>
                      </div>
                      <Sparkles className={`w-4 h-4 ${preferredSchool === 'dreamz' ? 'text-[#EA580C]' : 'text-[#A39282]'}`} />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleSchoolChange('shakuntlayan')}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                        preferredSchool === 'shakuntlayan'
                          ? 'border-[#064E3B] bg-[#ECFDF5]/50 ring-2 ring-[#064E3B]/20'
                          : 'border-[#E6DDCF] bg-[#FAF6F0] hover:border-[#064E3B]'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-bold text-[#2B1B1D]">Rapid Shakuntlayan</div>
                        <div className="text-[11px] text-[#7A6765]">Class 1 to 12 (CBSE)</div>
                      </div>
                      <GraduationCap className={`w-4 h-4 ${preferredSchool === 'shakuntlayan' ? 'text-[#064E3B]' : 'text-[#A39282]'}`} />
                    </button>
                  </div>
                </div>

                {/* Step 2: Choose Class */}
                <div>
                  <label htmlFor="quickPrefClass" className="block text-xs font-bold text-[#432C2E] uppercase tracking-wider mb-1.5 font-mono">
                    2. Target Class / Standard <span className="text-[#DC2626]">*</span>
                  </label>
                  <select
                    id="quickPrefClass"
                    value={preferredClass}
                    onChange={(e) => setPreferredClass(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D4C8B8] bg-white text-[#2B1B1D] text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#BD672A]"
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
                    <label htmlFor="quickParentName" className="block text-xs font-bold text-[#432C2E] uppercase tracking-wider mb-1 font-mono">
                      Parent / Guardian Name <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      id="quickParentName"
                      type="text"
                      placeholder="e.g. Rameshwar Sharma"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#D4C8B8] text-[#2B1B1D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="quickStudentName" className="block text-xs font-bold text-[#432C2E] uppercase tracking-wider mb-1 font-mono">
                      Student Name <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      id="quickStudentName"
                      type="text"
                      placeholder="e.g. Aarav Sharma"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#D4C8B8] text-[#2B1B1D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]"
                      required
                    />
                  </div>
                </div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="quickPhone" className="block text-xs font-bold text-[#432C2E] uppercase tracking-wider mb-1 font-mono">
                      Mobile Number <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      id="quickPhone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#D4C8B8] text-[#2B1B1D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="quickEmail" className="block text-xs font-bold text-[#432C2E] uppercase tracking-wider mb-1 font-mono">
                      Email Address <span className="text-[#DC2626]">*</span>
                    </label>
                    <input
                      id="quickEmail"
                      type="email"
                      placeholder="parent@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#D4C8B8] text-[#2B1B1D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]"
                      required
                    />
                  </div>
                </div>

                {/* Optional Message */}
                <div>
                  <label htmlFor="quickMessage" className="block text-xs font-bold text-[#432C2E] uppercase tracking-wider mb-1 font-mono">
                    Specific Academic Interests (Optional)
                  </label>
                  <textarea
                    id="quickMessage"
                    rows={2}
                    placeholder="Tell us about your child's interests or previous schooling..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#D4C8B8] text-[#2B1B1D] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-[#5A121E] hover:bg-[#3D0B12] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering in Registry...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#E8955A]" />
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
