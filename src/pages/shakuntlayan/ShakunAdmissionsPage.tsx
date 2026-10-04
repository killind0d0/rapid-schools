import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { triggerInstitutionalDownload } from '../../utils/downloadHelper';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Send,
  AlertCircle,
  Download,
  BookOpen,
  FileCheck,
  Building,
  ArrowRight,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const shakunDivisions = [
  {
    division: 'Primary Wing',
    classes: ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'],
    age: 'Ages 6 to 10',
    criteria: 'Class 1 requires age 6+ as of March 31. Classes 2 to 5 require successful completion of previous grade and recognized school TC.'
  },
  {
    division: 'Middle Wing',
    classes: ['Class 6', 'Class 7', 'Class 8'],
    age: 'Ages 11 to 13',
    criteria: 'Scholastic diagnostic evaluation in English, Hindi, and Mathematics, plus verified previous grade transcript.'
  },
  {
    division: 'Secondary Wing',
    classes: ['Class 9', 'Class 10'],
    age: 'Ages 14 to 15',
    criteria: 'Admissions normed to CBSE registration guidelines. Diagnostic written review in Mathematics and General Sciences.'
  },
  {
    division: 'Senior Secondary Wing',
    classes: [
      'Class 11 (Science Stream)',
      'Class 11 (Commerce Stream)',
      'Class 11 (Humanities Stream)',
      'Class 12 (Board Transfer)'
    ],
    age: 'Ages 16 to 18',
    criteria: 'Class 10 CBSE / ICSE / State Board results with stream-specific counseling. Class 12 subject to strict CBSE transfer norms.'
  }
];

export const ShakunAdmissionsPage: React.FC = () => {
  const { submitEnquiry, settings } = useSite();

  const [selectedClass, setSelectedClass] = useState<string>('Class 1');
  const [studentName, setStudentName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [previousSchool, setPreviousSchool] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!parentName.trim() || !studentName.trim() || !phone.trim() || !email.trim()) {
      setError('Please provide all mandatory details marked with an asterisk (*).');
      return;
    }

    const cleanPhone = phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setError('Please enter a valid 10-digit telephone number.');
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
          studentName,
          phone,
          email,
          preferredSchool: 'shakuntlayan',
          preferredClass: selectedClass,
          message: `[Shakuntlayan CBSE Admission] ${previousSchool ? `Previous School: ${previousSchool}. ` : ''}${address ? `Locality: ${address}. ` : ''}${message ? `Aspirations: ${message}` : ''}`
        });
        setSubmittedId(id);
        setIsSubmitting(false);
      } catch (err) {
        setError('Submission failed. Please check your inputs or contact our registrar office.');
        setIsSubmitting(false);
      }
    }, 450);
  };

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24 text-[#021C16]">
      <Breadcrumbs
        items={[
          { label: 'Rapid Shakuntlayan', href: '/shakuntlayan' },
          { label: 'CBSE Admissions' }
        ]}
      />

      {/* Hero Canvas in Sovereign British Racing Forest Emerald */}
      <section className="bg-gradient-to-br from-[#042F24] via-[#021C16] to-[#01120D] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Mint Conifer Aurora Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(52,211,153,0.14)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 left-10 w-96 h-96 bg-[radial-gradient(circle,_rgba(197,160,89,0.1)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/35 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#064E3B] text-[#A7F3D0] border border-[#34D399]/40 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-[#34D399]" />
            <span>CBSE Admissions Guide • Academic Session {settings.academicYear}</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            CBSE Scholastic Admissions (Class 1–12)
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D1E7DF] font-normal leading-relaxed">
            A merit-oriented, transparent admission procedure welcoming driven scholars into an institution founded on discipline, empirical inquiry, and university readiness.
          </p>
        </div>
      </section>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* 4-Stage CBSE Admission Procedure */}
        <div className="bg-[#F8FAF8] p-8 sm:p-12 rounded-3xl border border-[#D1E5DB] shadow-[0_4px_24px_-4px_rgba(4,47,36,0.06)] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#064E3B] block">
              Admission Framework
            </span>
            <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#021C16]">
              Four-Stage Enrollment Procedure
            </h2>
            <p className="text-xs sm:text-sm text-[#3C584E]">
              Guided by Central Board of Secondary Education (CBSE) institutional guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#D1E5DB] shadow-2xs space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-[#064E3B] text-[#A7F3D0] font-mono font-bold text-sm flex items-center justify-center border border-[#34D399]/30">
                01
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#021C16]">
                Registration & Dossier
              </h3>
              <p className="text-xs text-[#3C584E] leading-relaxed">
                Submit candidate credentials, current grade transcripts, and preferred stream choices either online or at the school admissions bursar.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D1E5DB] shadow-2xs space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-[#064E3B] text-[#A7F3D0] font-mono font-bold text-sm flex items-center justify-center border border-[#34D399]/30">
                02
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#021C16]">
                Diagnostic Evaluation
              </h3>
              <p className="text-xs text-[#3C584E] leading-relaxed">
                Diagnostic written aptitude check assessing core English, Mathematics, and Science comprehension to benchmark learning readiness.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D1E5DB] shadow-2xs space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-[#064E3B] text-[#A7F3D0] font-mono font-bold text-sm flex items-center justify-center border border-[#34D399]/30">
                03
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#021C16]">
                Academic Conference
              </h3>
              <p className="text-xs text-[#3C584E] leading-relaxed">
                A constructive conversation between student, parents, and the Academic Coordinator discussing curriculum expectations and stream goals.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D1E5DB] shadow-2xs space-y-2.5">
              <div className="w-9 h-9 rounded-full bg-[#C5A059] text-[#021C16] font-mono font-bold text-sm flex items-center justify-center border border-[#C5A059]">
                04
              </div>
              <h3 className="font-editorial text-lg font-bold text-[#021C16]">
                Verification & Admission
              </h3>
              <p className="text-xs text-[#3C584E] leading-relaxed">
                Verification of countersigned Transfer Certificate (TC), previous report cards, and final enrollment formalization with transparent fees.
              </p>
            </div>
          </div>
        </div>

        {/* Division Eligibility Matrices */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-editorial text-2xl font-bold text-[#021C16]">
              Academic Division Entry Criteria
            </h3>
            <span className="text-xs font-mono text-[#064E3B]">CBSE Standard Norms</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {shakunDivisions.map((div, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-[#D1E5DB] shadow-2xs space-y-3 hover:border-[#042F24] transition-colors"
              >
                <div className="flex items-center justify-between border-b border-[#D1E5DB] pb-2.5">
                  <h4 className="font-editorial text-xl font-bold text-[#021C16]">
                    {div.division}
                  </h4>
                  <span className="text-xs font-mono font-bold text-[#8A6A27] bg-[#F9F5EA] px-2.5 py-0.5 rounded-full border border-[#C5A059]/40">
                    {div.age}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {div.classes.map((cls, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-semibold bg-[#EBF2EE] text-[#064E3B]"
                    >
                      {cls}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-[#3C584E] leading-relaxed pt-1">
                  {div.criteria}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Columns: Document Verification & Interactive Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Document Verification Dossier */}
          <div className="lg:col-span-5 bg-[#F8FAF8] p-6 sm:p-8 rounded-3xl border border-[#D1E5DB] shadow-xs space-y-6">
            <div className="flex items-center gap-2 text-[#064E3B]">
              <FileCheck className="w-5 h-5 text-[#064E3B]" />
              <h3 className="font-editorial text-2xl font-bold text-[#021C16]">
                Mandatory Documentation Checklist
              </h3>
            </div>

            <ul className="space-y-3 text-xs sm:text-sm text-[#1E3B32]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>Original Transfer Certificate (TC) countersigned by Education Officer</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>Previous academic session final progress report card / transcript</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>Municipal Corporation Birth Certificate copy (verified against original)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>Four recent passport-size color photographs of the student</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>Government photo ID & residential address proof of parents</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                <span>Class 10 Board Marksheet & Migration Certificate (for Class 11/12 entrants)</span>
              </li>
            </ul>

            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  triggerInstitutionalDownload(
                    'Rapid Shakuntlayan CBSE Admission Checklist & Dossier',
                    'Admission',
                    'Shakuntlayan_CBSE_Admission_Checklist.pdf',
                    'Rapid Shakuntlayan',
                    'Official CBSE document checklist, stream prerequisites, and diagnostic syllabus outline.'
                  )
                }
                className="w-full py-3 px-4 rounded-xl bg-white border border-[#D1E5DB] text-[#064E3B] hover:bg-[#EBF2EE] font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
              >
                <Download className="w-4 h-4 text-[#064E3B]" />
                <span>Download Official CBSE Checklist (PDF)</span>
              </button>
            </div>

            {/* Bursar Note */}
            <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] space-y-1.5 text-xs text-[#166534]">
              <strong className="block font-mono uppercase tracking-wider text-[#064E3B]">
                Fee Schedule & Sibling Policy
              </strong>
              <p className="leading-relaxed text-[#1E3B32]">
                Detailed fee breakdowns, quarterly installment calendars, and sibling concession guidelines are available upon request from the campus bursar office.
              </p>
            </div>
          </div>

          {/* Direct CBSE Admission Application Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-9 rounded-3xl border border-[#D1E5DB] shadow-md space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#064E3B] uppercase tracking-wider block mb-1">
                Official Admission Portal
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#021C16]">
                Register for Rapid Shakuntlayan
              </h3>
              <p className="text-xs text-[#3C584E]">
                Initiate your candidate dossier for CBSE Class 1 to Class 12 enrollment.
              </p>
            </div>

            {submittedId ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#E3EFE9] text-[#064E3B] flex items-center justify-center mx-auto border border-[#34D399]/40">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-editorial text-2xl font-bold text-[#021C16]">
                  Candidate Application Logged!
                </h4>
                <p className="text-xs sm:text-sm text-[#3C584E] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{parentName}</strong>. The application for <strong>{studentName}</strong> for <strong>{selectedClass}</strong> has been logged under official reference:
                </p>
                <div className="p-3.5 rounded-2xl bg-[#F8FAF8] border border-[#D1E5DB] font-mono text-base font-bold text-[#064E3B] inline-block px-6">
                  {submittedId}
                </div>
                <p className="text-xs text-[#4E776A]">
                  Our admissions registrar will contact you at <strong>{phone}</strong> within 1 working day to coordinate the diagnostic aptitude check.
                </p>
                <div className="pt-3 flex flex-wrap justify-center gap-3">
                  <Link
                    to="/visit"
                    className="px-5 py-2.5 rounded-xl bg-[#064E3B] hover:bg-[#043D2E] text-white font-bold text-xs uppercase tracking-wider transition-all"
                  >
                    Schedule Campus Visit
                  </Link>
                  <Link
                    to="/shakuntlayan"
                    className="px-5 py-2.5 rounded-xl bg-[#F8FAF8] border border-[#D1E5DB] text-[#021C16] font-bold text-xs uppercase tracking-wider hover:bg-[#D1E5DB]/50 transition-all"
                  >
                    Return to Shakuntlayan
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

                {/* Class Selection Dropdown */}
                <div>
                  <label htmlFor="targetClass" className="block text-xs font-mono font-bold text-[#064E3B] uppercase tracking-wider mb-1.5">
                    Target Class / Academic Stream <span className="text-[#BE123C]">*</span>
                  </label>
                  <select
                    id="targetClass"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1E5DB] bg-[#F8FAF8] text-xs sm:text-sm text-[#021C16] focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B]"
                    required
                  >
                    <optgroup label="Primary Wing">
                      <option value="Class 1">Class 1 (Age 6+)</option>
                      <option value="Class 2">Class 2</option>
                      <option value="Class 3">Class 3</option>
                      <option value="Class 4">Class 4</option>
                      <option value="Class 5">Class 5</option>
                    </optgroup>
                    <optgroup label="Middle Wing">
                      <option value="Class 6">Class 6</option>
                      <option value="Class 7">Class 7</option>
                      <option value="Class 8">Class 8</option>
                    </optgroup>
                    <optgroup label="Secondary Wing (AISSE)">
                      <option value="Class 9">Class 9 (CBSE Secondary)</option>
                      <option value="Class 10">Class 10 (Subject to CBSE Transfer Norms)</option>
                    </optgroup>
                    <optgroup label="Senior Secondary (AISSCE)">
                      <option value="Class 11 (Science)">Class 11 — Science Stream (PCM / PCB)</option>
                      <option value="Class 11 (Commerce)">Class 11 — Commerce Stream</option>
                      <option value="Class 11 (Humanities)">Class 11 — Humanities Stream</option>
                      <option value="Class 12">Class 12 (Board Transfer Clearance)</option>
                    </optgroup>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="studentName" className="block text-xs font-mono font-bold text-[#064E3B] uppercase tracking-wider mb-1">
                      Student Full Name <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="studentName"
                      type="text"
                      placeholder="e.g. Aarav Singhania"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1E5DB] bg-[#F8FAF8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="parentName" className="block text-xs font-mono font-bold text-[#064E3B] uppercase tracking-wider mb-1">
                      Parent / Guardian Name <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      placeholder="e.g. Dr. Rajesh Singhania"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1E5DB] bg-[#F8FAF8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-mono font-bold text-[#064E3B] uppercase tracking-wider mb-1">
                      Telephone / Mobile <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1E5DB] bg-[#F8FAF8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-mono font-bold text-[#064E3B] uppercase tracking-wider mb-1">
                      Email Address <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="parent@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1E5DB] bg-[#F8FAF8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B]"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="previousSchool" className="block text-xs font-mono font-bold text-[#064E3B] uppercase tracking-wider mb-1">
                      Current / Previous School & Board
                    </label>
                    <input
                      id="previousSchool"
                      type="text"
                      placeholder="e.g. DPS (CBSE) / St. Xavier's (ICSE)"
                      value={previousSchool}
                      onChange={(e) => setPreviousSchool(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1E5DB] bg-[#F8FAF8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B]"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-xs font-mono font-bold text-[#064E3B] uppercase tracking-wider mb-1">
                      Residential Locality
                    </label>
                    <input
                      id="address"
                      type="text"
                      placeholder="e.g. Model Town, Sector 18"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1E5DB] bg-[#F8FAF8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono font-bold text-[#064E3B] uppercase tracking-wider mb-1">
                    Scholastic Goals / Stream Preferences (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={2}
                    placeholder="Specific academic ambitions, Olympiad aspirations, or inquiries for the academic dean..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#D1E5DB] bg-[#F8FAF8] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#064E3B]/30 focus:border-[#064E3B]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#042F24] hover:bg-[#021C16] text-[#A7F3D0] border border-[#34D399]/40 font-mono font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Candidate Dossier...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-[#34D399]" />
                        <span>Submit CBSE Admission Application</span>
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
