import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { triggerInstitutionalDownload } from '../../utils/downloadHelper';
import {
  Sparkles,
  Heart,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Send,
  AlertCircle,
  Download,
  Phone,
  Baby,
  Smile,
  Clock,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const dreamzClasses = [
  { name: 'Play Group', age: '2 to 3 Years', desc: 'Gentle separation security and sensory curiosity' },
  { name: 'Nursery', age: '3 to 4 Years', desc: 'Jolly Phonics, tactile numeracy and empathetic play' },
  { name: 'LKG (Lower Kindergarten)', age: '4 to 5 Years', desc: 'Phonemic blending, scientific observation and motor dexterity' },
  { name: 'UKG (Upper Kindergarten)', age: '5 to 6 Years', desc: 'Creative journaling, arithmetic logic and Class 1 readiness' }
];

export const DreamzAdmissionsPage: React.FC = () => {
  const { submitEnquiry, settings } = useSite();

  const [selectedClass, setSelectedClass] = useState<string>('Nursery');
  const [parentName, setParentName] = useState('');
  const [childName, setChildName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!parentName.trim() || !childName.trim() || !phone.trim() || !email.trim()) {
      setError('Please provide all mandatory details marked with an asterisk (*).');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address for correspondence.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const id = submitEnquiry({
          parentName,
          studentName: childName,
          phone,
          email,
          preferredSchool: 'dreamz',
          preferredClass: selectedClass,
          message: `[Dreamz Early-Years Admission] ${notes ? `Notes: ${notes}. ` : ''}${dob ? `[DOB: ${dob}] ` : ''}${address ? `[Locality: ${address}]` : ''}`
        });
        setSubmittedId(id);
        setIsSubmitting(false);
      } catch (err) {
        setError('Submission failed. Please check your connection or contact our admissions desk.');
        setIsSubmitting(false);
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 text-[#451A03]">
      <Breadcrumbs
        items={[
          { label: 'Rapid Dreamz', href: '/dreamz' },
          { label: 'Early Years Admissions' }
        ]}
      />

      {/* Hero Header in Velour Terracotta */}
      <section className="bg-gradient-to-br from-[#B45309] via-[#B45309] to-[#92400E] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FCD34D]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#FEF3C7]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-[#FEF3C7] backdrop-blur-md border border-white/25 font-mono shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#FCD34D]" />
            <span>Gentle Admissions • Academic Session {settings.academicYear}</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            A Warm, Reassuring Beginning
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#FEF3C7] font-normal leading-relaxed">
            We understand that starting school is a monumental family milestone. Our early-years admission process is free from stress, formal testing, or pressure — designed purely to welcome your little one with love.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* The 4-Step Reassuring Journey */}
        <div className="bg-[#F8FAFC] p-8 sm:p-12 rounded-3xl border border-[#FEF3C7] shadow-[0_4px_24px_-4px_rgba(180,83,9,0.06)] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-[#92400E] uppercase tracking-wider block">
              Step-by-Step Experience
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#451A03]">
              The Gentle Admissions Pathway
            </h2>
            <p className="text-xs sm:text-sm text-[#78350F]">
              Every step is structured around warmth, child comfort, and transparent family partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#FEF3C7] space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-[#FEF3C7] text-[#92400E] font-mono font-bold text-sm flex items-center justify-center border border-[#FDE68A]">
                01
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#451A03]">
                Sensory Play Tour
              </h3>
              <p className="text-xs text-[#78350F] leading-relaxed">
                You and your child visit our playrooms. No formal tests — just a friendly 20-minute play session observing natural curiosity and social comfort.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#FEF3C7] space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-[#FEF3C7] text-[#92400E] font-mono font-bold text-sm flex items-center justify-center border border-[#FDE68A]">
                02
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#451A03]">
                Parent Consultation
              </h3>
              <p className="text-xs text-[#78350F] leading-relaxed">
                A relaxed chat with our lead educator regarding your child's dietary habits, soothing preferences, language exposure, and sleeping rhythms.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#FEF3C7] space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-[#FEF3C7] text-[#92400E] font-mono font-bold text-sm flex items-center justify-center border border-[#FDE68A]">
                03
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#451A03]">
                Simple Documents
              </h3>
              <p className="text-xs text-[#78350F] leading-relaxed">
                Verification of municipal birth certificate, immunization card, recent toddler photographs, and authorized caregiver identification.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#FEF3C7] space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-[#CCFBF1] text-[#0F766E] font-mono font-bold text-sm flex items-center justify-center border border-[#5EEAD4]">
                04
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#451A03]">
                Gentle Settling Week
              </h3>
              <p className="text-xs text-[#78350F] leading-relaxed">
                A graduated 3-day settling timetable where a parent is welcome in our reception lounge while the child gradually acclimates with ease.
              </p>
            </div>
          </div>
        </div>

        {/* Two Column Grid: Documents Checklist + Toddler Reassurance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Document Checklist & Guide Download */}
          <div className="lg:col-span-5 bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-[#FEF3C7] shadow-xs space-y-6">
            <div className="flex items-center gap-2 text-[#92400E]">
              <ShieldCheck className="w-5 h-5 text-[#B45309]" />
              <h3 className="font-editorial text-2xl font-bold text-[#451A03]">
                Required Verification Records
              </h3>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#451A03]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                <span>Original & photocopy of Municipal Corporation Birth Certificate</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                <span>Pediatrician-certified Immunization & Vaccination record</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                <span>Four passport-sized color photographs of the child</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                <span>Government photo ID & residential address proof of both parents</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
                <span>Authorized escort pickup verification form with guardian photographs</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  triggerInstitutionalDownload(
                    'Rapid Dreamz Early Years Admission Checklist & Guide',
                    'Admission',
                    'Dreamz_Early_Years_Admission_Checklist.pdf',
                    'Rapid Dreamz',
                    'Official early-childhood admission requirements, age criteria, and settling protocol.'
                  )
                }
                className="w-full py-3 px-4 rounded-xl bg-[#F8FAFC] border border-[#FEF3C7] text-[#92400E] hover:bg-[#FEF3C7]/60 font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4 text-[#B45309]" />
                <span>Download Early Years Checklist (PDF)</span>
              </button>
            </div>

            {/* Toddler Care Reassurance */}
            <div className="p-4 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] space-y-2 text-xs text-[#78350F]">
              <div className="flex items-center gap-2 font-bold text-[#92400E]">
                <Baby className="w-4 h-4" />
                <span>Nurturing Toilet-Training Support</span>
              </div>
              <p className="leading-relaxed text-[#78350F]">
                We gently partner with parents on toilet training. Our loving female attendants (ayahs) provide hygienic, patient assistance so no child ever feels embarrassed.
              </p>
            </div>
          </div>

          {/* Interactive Early Childhood Application Form */}
          <div className="lg:col-span-7 bg-[#F8FAFC] p-6 sm:p-9 rounded-3xl border border-[#FEF3C7] shadow-md space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#B45309] uppercase tracking-wider block mb-1">
                Direct Enrollment Request
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#451A03]">
                Register for Rapid Dreamz
              </h3>
              <p className="text-xs text-[#78350F]">
                Complete this brief inquiry to reserve a sensory playroom interaction session.
              </p>
            </div>

            {submittedId ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#CCFBF1] text-[#0F766E] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-editorial text-2xl font-bold text-[#451A03]">
                  Early-Years Enquiry Received!
                </h4>
                <p className="text-xs sm:text-sm text-[#78350F] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{parentName}</strong>. Your enquiry for <strong>{childName}</strong> for <strong>{selectedClass}</strong> has been logged with official code:
                </p>
                <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#FEF3C7] font-mono text-base font-bold text-[#B45309] inline-block px-6">
                  {submittedId}
                </div>
                <p className="text-xs text-[#92400E]">
                  Our early years coordinator will contact you at <strong>{phone}</strong> within 24 hours to schedule your sensory playroom tour.
                </p>
                <div className="pt-3 flex flex-wrap justify-center gap-3">
                  <Link
                    to="/visit"
                    className="px-5 py-2.5 rounded-xl bg-[#B45309] hover:bg-[#92400E] text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Book Campus Tour
                  </Link>
                  <Link
                    to="/dreamz"
                    className="px-5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#FEF3C7] text-[#451A03] font-bold text-xs uppercase tracking-wider hover:bg-[#FEF3C7]/50 transition-all"
                  >
                    Return to Dreamz
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3.5 rounded-2xl bg-[#FFF1F2] border border-[#FECDD3] text-[#BE123C] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#BE123C]" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Class Selection Pills */}
                <div>
                  <label className="block text-xs font-bold text-[#92400E] uppercase tracking-wider mb-2">
                    Select Target Early Years Class <span className="text-[#BE123C]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {dreamzClasses.map((cls) => (
                      <button
                        type="button"
                        key={cls.name}
                        onClick={() => setSelectedClass(cls.name)}
                        className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                          selectedClass === cls.name
                            ? 'bg-[#FEF3C7] border-[#B45309] text-[#92400E] ring-1 ring-[#B45309]'
                            : 'bg-[#F8FAFC] border-[#FEF3C7] text-[#78350F] hover:border-[#FCD34D]'
                        }`}
                      >
                        <div className="text-xs font-bold text-[#451A03]">{cls.name}</div>
                        <div className="text-[11px] text-[#92400E]">{cls.age}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label htmlFor="childName" className="block text-xs font-bold text-[#92400E] uppercase tracking-wider mb-1">
                      Child Full Name <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="childName"
                      type="text"
                      placeholder="e.g. Ananya Sharma"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#FEF3C7] bg-[#F8FAFC] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B45309]/30 focus:border-[#B45309]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="dob" className="block text-xs font-bold text-[#92400E] uppercase tracking-wider mb-1">
                      Child Date of Birth
                    </label>
                    <input
                      id="dob"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#FEF3C7] bg-[#F8FAFC] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B45309]/30 focus:border-[#B45309]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="parentName" className="block text-xs font-bold text-[#92400E] uppercase tracking-wider mb-1">
                      Parent / Guardian Name <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      placeholder="e.g. Neha Sharma"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#FEF3C7] bg-[#F8FAFC] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B45309]/30 focus:border-[#B45309]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold text-[#92400E] uppercase tracking-wider mb-1">
                      Mobile Number <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#FEF3C7] bg-[#F8FAFC] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B45309]/30 focus:border-[#B45309]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#92400E] uppercase tracking-wider mb-1">
                      Email Address <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="parent@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#FEF3C7] bg-[#F8FAFC] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B45309]/30 focus:border-[#B45309]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-xs font-bold text-[#92400E] uppercase tracking-wider mb-1">
                      Residential Locality
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder="e.g. Civil Lines, Sector 5"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#FEF3C7] bg-[#F8FAFC] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B45309]/30 focus:border-[#B45309]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-xs font-bold text-[#92400E] uppercase tracking-wider mb-1">
                    Special Routines or Dietary Preferences (Optional)
                  </label>
                  <textarea
                    id="notes"
                    rows={2}
                    placeholder="Tell us about your child's favorite songs, comfort toys, or any allergies..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#FEF3C7] bg-[#F8FAFC] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#B45309]/30 focus:border-[#B45309]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#B45309] hover:bg-[#92400E] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Reserving Playroom Visit...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Early Years Enquiry</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
