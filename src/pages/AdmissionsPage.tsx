import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { SectionHeading } from '../components/common/SectionHeading';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import {
  Sparkles,
  GraduationCap,
  CheckCircle2,
  FileCheck,
  Calendar,
  AlertCircle,
  Send,
  HelpCircle,
  FileText,
  Phone,
  Download,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { triggerInstitutionalDownload } from '../utils/downloadHelper';

export const AdmissionsPage: React.FC = () => {
  const { submitEnquiry, settings } = useSite();

  const [activeStep, setActiveStep] = useState<number>(1);
  const [selectedSchool, setSelectedSchool] = useState<'dreamz' | 'shakuntlayan'>('dreamz');
  const [selectedClass, setSelectedClass] = useState<string>('Nursery');

  // Form State
  const [parentName, setParentName] = useState('');
  const [studentName, setStudentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dob, setDob] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  const [submittedId, setSubmittedId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dreamzClasses = [
    { name: 'Play Group', age: '2 to 2.5 Years' },
    { name: 'Pre-Nursery', age: '2.5 to 3 Years' },
    { name: 'Nursery', age: '3 to 4 Years' },
    { name: 'LKG (Lower Kindergarten)', age: '4 to 5 Years' },
    { name: 'UKG (Upper Kindergarten)', age: '5 to 6 Years' }
  ];

  const shakunClasses = [
    { name: 'Class 1', age: '6+ Years' },
    { name: 'Class 2', age: '7+ Years' },
    { name: 'Class 3', age: '8+ Years' },
    { name: 'Class 4', age: '9+ Years' },
    { name: 'Class 5', age: '10+ Years' },
    { name: 'Class 6', age: '11+ Years' },
    { name: 'Class 7', age: '12+ Years' },
    { name: 'Class 8', age: '13+ Years' },
    { name: 'Class 9', age: '14+ Years' },
    { name: 'Class 10', age: 'CBSE Secondary' },
    { name: 'Class 11 (Science)', age: 'Post Class 10 Board' },
    { name: 'Class 11 (Commerce)', age: 'Post Class 10 Board' },
    { name: 'Class 11 (Humanities)', age: 'Post Class 10 Board' },
    { name: 'Class 12', age: 'CBSE Senior Secondary' }
  ];

  const handleSchoolSelect = (school: 'dreamz' | 'shakuntlayan') => {
    setSelectedSchool(school);
    setSelectedClass(school === 'dreamz' ? 'Nursery' : 'Class 1');
    setActiveStep(2);
  };

  const handleClassSelect = (className: string) => {
    setSelectedClass(className);
    setActiveStep(3);
  };

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
          preferredSchool: selectedSchool,
          preferredClass: selectedClass,
          message: `${message}${dob ? ` [DOB: ${dob}]` : ''}${address ? ` [Address: ${address}]` : ''}`
        });
        setSubmittedId(id);
        setIsSubmitting(false);
      } catch (err) {
        setError('Submission failed. Please check your inputs or contact our admissions office.');
        setIsSubmitting(false);
      }
    }, 450);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      <Breadcrumbs items={[{ label: 'Admissions 2025–26' }]} />

      {/* Header Banner */}
      <section className="bg-[#020617] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Layered radial glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#162032]/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#0F172A] text-[#FDE68A] border border-[#F59E0B]/30 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(189,103,42,0.8)]" />
            Admissions Process • Academic Session {settings.academicYear}
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Join the <span className="italic font-normal text-[#FDE68A]">Rapid Schools</span> Community
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-sans">
            A transparent, supportive, 4-step admission journey designed to help you find the optimal academic home for your child.
          </p>
        </div>
      </section>

      {/* 4-Step Wizard with Luxury Medal Step Indicators */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white rounded-2xl shadow-[0_15px_40px_-15px_rgba(44,7,12,0.08)] border border-[#E2E8F0] p-3 sm:p-4 grid grid-cols-4 gap-2 sm:gap-3 text-center">
          {[
            { num: 1, title: 'Choose School' },
            { num: 2, title: 'Select Class' },
            { num: 3, title: 'Requirements' },
            { num: 4, title: 'Submit Enquiry' }
          ].map((st) => {
            const isActive = activeStep === st.num;
            const isCompleted = activeStep > st.num;

            return (
              <button
                key={st.num}
                onClick={() => setActiveStep(st.num)}
                className={`p-2.5 sm:p-3 rounded-xl transition-all flex flex-col items-center justify-center cursor-pointer ${
                  isActive
                    ? 'bg-[#0F172A] text-[#FDE68A] font-semibold border border-[#F59E0B]/40 shadow-sm'
                    : isCompleted
                    ? 'bg-[#F8FAFC] text-[#020617] border border-[#E2E8F0] hover:bg-[#F1F5F9]'
                    : 'text-[#475569] hover:text-[#020617] hover:bg-[#F8FAFC]'
                }`}
              >
                {/* Luxury Medal Indicator */}
                <div
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center text-xs mb-1.5 font-bold transition-all ${
                    isActive
                      ? 'bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] text-white shadow-[0_0_15px_rgba(189,103,42,0.5)] ring-2 ring-[#FDE68A]/70'
                      : isCompleted
                      ? 'bg-[#115E59] text-[#99F6E4] ring-1 ring-[#14B8A6]/40'
                      : 'bg-[#F8FAFC] text-[#64748B] border border-[#E2E8F0]'
                  }`}
                >
                  {isCompleted ? '✓' : st.num}
                </div>
                <span className="text-[11px] sm:text-xs font-semibold tracking-wide truncate max-w-full font-sans">
                  {st.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Step Workspace */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* STEP 1: Choose School */}
        {activeStep === 1 && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-[#020617]">
                Step 1: Choose Institutional Division
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] font-sans">
                Select the appropriate school division based on your child's age group and developmental stage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Option A: Rapid Dreamz */}
              <div
                onClick={() => handleSchoolSelect('dreamz')}
                className={`p-7 sm:p-9 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  selectedSchool === 'dreamz'
                    ? 'border-[#F59E0B] bg-white shadow-[0_20px_45px_-12px_rgba(189,103,42,0.18)] ring-2 ring-[#F59E0B]/20'
                    : 'border-[#E2E8F0] bg-white hover:border-[#F59E0B]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 font-mono">
                      Early Childhood Division
                    </span>
                    <Sparkles className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <h3 className="font-editorial text-3xl font-medium text-[#020617]">
                    Rapid <span className="italic font-normal text-[#F59E0B]">Dreamz</span>
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] mt-1 font-mono">
                    Play Group to UKG (Ages 2 to 6)
                  </p>
                  <p className="text-xs sm:text-sm text-[#334155] mt-3 leading-relaxed font-sans">
                    Gentle sensory discovery, creative arts, early phonics, and caring emotional immersion in child-proof learning spaces.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#F59E0B] uppercase tracking-wider font-mono">
                    Choose Rapid Dreamz →
                  </span>
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-[#F59E0B]">
                    {selectedSchool === 'dreamz' && <div className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />}
                  </div>
                </div>
              </div>

              {/* Option B: Rapid Shakuntlayan */}
              <div
                onClick={() => handleSchoolSelect('shakuntlayan')}
                className={`p-7 sm:p-9 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  selectedSchool === 'shakuntlayan'
                    ? 'border-[#115E59] bg-white shadow-[0_20px_45px_-12px_rgba(6,78,59,0.18)] ring-2 ring-[#115E59]/20'
                    : 'border-[#E2E8F0] bg-white hover:border-[#115E59]/60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#115E59]/10 text-[#115E59] border border-[#115E59]/30 font-mono">
                      Class 1 to 12
                    </span>
                    <GraduationCap className="w-5 h-5 text-[#115E59]" />
                  </div>
                  <h3 className="font-editorial text-3xl font-medium text-[#020617]">
                    Rapid <span className="italic font-normal text-[#115E59]">Shakuntlayan</span>
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#115E59] mt-1 font-mono">
                    CBSE Affiliated, New Delhi
                  </p>
                  <p className="text-xs sm:text-sm text-[#334155] mt-3 leading-relaxed font-sans">
                    Disciplined academics, advanced science and computer labs, competitive entrance mentoring, athletics, and leadership.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#115E59] uppercase tracking-wider font-mono">
                    Choose Rapid Shakuntlayan →
                  </span>
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-[#115E59]">
                    {selectedSchool === 'shakuntlayan' && <div className="w-2.5 h-2.5 rounded-full bg-[#115E59]" />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Choose Class */}
        {activeStep === 2 && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-[#020617]">
                Step 2: Select Target Class
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] font-sans">
                Available classes for <strong className="text-[#020617]">{selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-4">
              {(selectedSchool === 'dreamz' ? dreamzClasses : shakunClasses).map((cls) => (
                <div
                  key={cls.name}
                  onClick={() => handleClassSelect(cls.name)}
                  className={`p-4 sm:p-5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedClass === cls.name
                      ? 'border-[#F59E0B] bg-white font-semibold text-[#020617] ring-2 ring-[#F59E0B]/25 shadow-sm'
                      : 'border-[#E2E8F0] bg-white hover:border-[#F59E0B]/50 text-[#334155]'
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold text-[#020617] font-outfit">{cls.name}</div>
                    <div className="text-xs text-[#475569] mt-0.5 font-sans">{cls.age}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedClass === cls.name ? 'border-[#F59E0B] bg-[#F59E0B]' : 'border-[#E2E8F0]'}`}>
                    {selectedClass === cls.name && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6 flex justify-between">
              <button
                onClick={() => setActiveStep(1)}
                className="luxury-btn-outline px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                ← Back to Schools
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="luxury-btn-primary px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Proceed to Requirements →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Admission Guidelines & Documents */}
        {activeStep === 3 && (
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="font-editorial text-3xl sm:text-4xl font-medium text-[#020617]">
                Step 3: Admission Guidelines & Documents
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] font-sans">
                Targeting <strong className="text-[#020617]">{selectedClass}</strong> at <strong className="text-[#020617]">{selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Document Checklist */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] space-y-4">
                <div className="flex items-center gap-2.5 text-[#F59E0B]">
                  <FileCheck className="w-5 h-5" />
                  <h3 className="font-editorial text-2xl font-medium text-[#020617]">
                    Mandatory Documentation Checklist
                  </h3>
                </div>
                <ul className="space-y-3 text-xs sm:text-sm text-[#334155] font-sans">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>Original & Copy of Municipal Birth Certificate of the student</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>Four recent passport-size photographs of the student and two of parents</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>Government photo ID & residential address proof of parents/guardians</span>
                  </li>
                  {selectedSchool === 'shakuntlayan' && (
                    <>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                        <span>Countersigned Transfer Certificate (TC) from recognized previous school</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                        <span>Previous year academic report card / transcript</span>
                      </li>
                    </>
                  )}
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>Medical fitness certificate & immunization record</span>
                  </li>
                </ul>

                <div className="pt-3 border-t border-[#E2E8F0]">
                  <button
                    onClick={() =>
                      triggerInstitutionalDownload(
                        'Admission Guidelines & Document Prerequisites',
                        'Admission',
                        'Admission_Checklist_RapidSchools.pdf',
                        selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan',
                        `Official document checklist for ${selectedClass} admission.`
                      )
                    }
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] hover:text-[#D97706] cursor-pointer font-sans"
                  >
                    <Download className="w-4 h-4 text-[#F59E0B]" />
                    <span>Download Official Checklist Form (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Evaluation Process */}
              <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E2E8F0] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] space-y-4">
                <div className="flex items-center gap-2.5 text-[#115E59]">
                  <Calendar className="w-5 h-5 text-[#115E59]" />
                  <h3 className="font-editorial text-2xl font-medium text-[#020617]">
                    Evaluation & Interaction Process
                  </h3>
                </div>
                
                <div className="space-y-3.5 text-xs sm:text-sm text-[#334155] font-sans">
                  <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="font-semibold text-[#020617] block mb-0.5">1. Online Enquiry & Registration</span>
                    Submit the form in Step 4. You will receive an official acknowledgment and reference ID.
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="font-semibold text-[#020617] block mb-0.5">2. Campus Interaction / Observation</span>
                    {selectedSchool === 'dreamz'
                      ? 'Gentle interactive play session observing social comfort and curiosity with early educators.'
                      : 'Written diagnostic aptitude review (English & Math) followed by a friendly mentor conversation.'}
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0]">
                    <span className="font-semibold text-[#020617] block mb-0.5">3. Document Verification & Enrollment</span>
                    Verification of certificates and admission formalization with transparent fee policies.
                  </div>
                </div>

                <div className="pt-2 text-xs text-[#475569] font-sans italic">
                  * Fee schedules and sibling concession guidelines are available for review at the campus bursar office.
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setActiveStep(2)}
                className="luxury-btn-outline px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                ← Back to Class Selection
              </button>
              <button
                onClick={() => setActiveStep(4)}
                className="luxury-btn-primary px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                Proceed to Submit Application →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Submit Enquiry Form */}
        {activeStep === 4 && (
          <div className="bg-white p-7 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] max-w-2xl mx-auto">
            {submittedId ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#115E59]/10 text-[#115E59] flex items-center justify-center mx-auto border border-[#115E59]/20">
                  <CheckCircle2 className="w-10 h-10 text-[#115E59]" />
                </div>
                <h3 className="font-editorial text-3xl font-medium text-[#020617]">
                  Application Logged Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#334155] max-w-md mx-auto leading-relaxed font-sans">
                  Thank you, <strong>{parentName}</strong>. Your enquiry for <strong>{studentName}</strong> ({selectedClass}, {selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}) has been assigned official reference code:
                </p>
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] font-mono text-base font-bold text-[#F59E0B]">
                  {submittedId}
                </div>
                <p className="text-xs text-[#475569] font-sans">
                  Our admissions counsellor will contact you at <strong>{phone}</strong> within 1 working day to schedule the campus interaction.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <Link
                    to="/visit"
                    className="luxury-btn-primary px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider"
                  >
                    Schedule Campus Visit
                  </Link>
                  <Link
                    to="/"
                    className="luxury-btn-outline px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#E2E8F0] pb-3 mb-2 flex items-center justify-between">
                  <div>
                    <h3 className="font-editorial text-2xl font-medium text-[#020617]">
                      Candidate & Parent Information
                    </h3>
                    <p className="text-xs text-[#475569] font-sans mt-0.5">
                      Enrolling for: <strong className="text-[#020617]">{selectedClass}</strong> at <strong className="text-[#020617]">{selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}</strong>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveStep(2)}
                    className="text-xs text-[#F59E0B] hover:text-[#D97706] font-semibold cursor-pointer font-mono uppercase tracking-wider"
                  >
                    Change Class
                  </button>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-[#FFF1F2] border border-[#FECDD3] text-[#BE123C] text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#BE123C]" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="studentName" className="block text-[11px] font-bold text-[#475569] uppercase tracking-[0.15em] mb-1 font-mono">
                      Student Full Name <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      id="studentName"
                      type="text"
                      placeholder="e.g. Reyansh Gupta"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#020617] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#F59E0B]/15 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="dob" className="block text-[11px] font-bold text-[#475569] uppercase tracking-[0.15em] mb-1 font-mono">
                      Date of Birth
                    </label>
                    <input
                      id="dob"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#020617] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#F59E0B]/15 transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="parentName" className="block text-[11px] font-bold text-[#475569] uppercase tracking-[0.15em] mb-1 font-mono">
                      Parent / Guardian Name <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      placeholder="e.g. Sunil Gupta"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#020617] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#F59E0B]/15 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[11px] font-bold text-[#475569] uppercase tracking-[0.15em] mb-1 font-mono">
                      Mobile Number <span className="text-[#F59E0B]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#020617] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#F59E0B]/15 transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[11px] font-bold text-[#475569] uppercase tracking-[0.15em] mb-1 font-mono">
                    Email Address for Correspondence <span className="text-[#F59E0B]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="parent@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#020617] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#F59E0B]/15 transition-all"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-[11px] font-bold text-[#475569] uppercase tracking-[0.15em] mb-1 font-mono">
                    Residential Locality / City
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="e.g. Sector 14, Knowledge Park"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#020617] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#F59E0B]/15 transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] font-bold text-[#475569] uppercase tracking-[0.15em] mb-1 font-mono">
                    Previous School / Special Learning Interests (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={2}
                    placeholder="Any specific academic goals, interests, or questions for our admissions team..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-[#020617] text-xs sm:text-sm focus:bg-white focus:outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#F59E0B]/15 transition-all"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveStep(3)}
                    className="luxury-btn-outline px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider cursor-pointer"
                  >
                    ← Back to Guidelines
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="luxury-btn-primary py-3 px-6 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Registering...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-white" />
                        <span>Submit Final Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
