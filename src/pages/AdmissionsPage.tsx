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
  Download
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
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs items={[{ label: 'Admissions 2025–26' }]} />

      {/* Header Banner */}
      <section className="bg-[#2D060C] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5A121E]/60 via-[#2D060C] to-[#1A0407]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#BD672A]/20 text-[#EAB592] border border-[#BD672A]/30">
            Admissions Process • Academic Session {settings.academicYear}
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Join the Rapid Schools Community
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D4C3B3] leading-relaxed font-sans">
            A transparent, supportive, 4-step admission journey designed to help you find the optimal academic home for your child.
          </p>
        </div>
      </section>

      {/* Step Navigation Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E6DDCF] p-2 sm:p-3 grid grid-cols-4 gap-1 sm:gap-2 text-center">
          {[
            { num: 1, title: 'Choose School' },
            { num: 2, title: 'Select Class' },
            { num: 3, title: 'Requirements' },
            { num: 4, title: 'Submit Enquiry' }
          ].map((st) => (
            <button
              key={st.num}
              onClick={() => setActiveStep(st.num)}
              className={`p-2 sm:p-2.5 rounded-xl transition-all flex flex-col items-center justify-center cursor-pointer ${
                activeStep === st.num
                  ? 'bg-[#3D0B12] text-[#EAB592] font-semibold shadow-sm'
                  : activeStep > st.num
                  ? 'text-[#1C1917] font-medium hover:bg-[#FAF7F2]'
                  : 'text-[#78716C] hover:text-[#1C1917]'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mb-1 font-bold ${
                activeStep === st.num
                  ? 'bg-[#BD672A] text-white'
                  : activeStep > st.num
                  ? 'bg-[#ECFDF5] text-[#064E3B]'
                  : 'bg-[#FAF7F2] text-[#A8A29E]'
              }`}>
                {activeStep > st.num ? '✓' : st.num}
              </span>
              <span className="text-[11px] sm:text-xs font-medium truncate max-w-full">
                {st.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Step Workspace */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        
        {/* STEP 1: Choose School */}
        {activeStep === 1 && (
          <div className="space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="font-cormorant text-3xl sm:text-4xl font-normal text-[#1C1917]">
                Step 1: Choose Institution Wing
              </h2>
              <p className="text-xs sm:text-sm text-[#78716C]">
                Select the appropriate school division based on your child's age group and current academic level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Option A: Rapid Dreamz */}
              <div
                onClick={() => handleSchoolSelect('dreamz')}
                className={`p-6 sm:p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  selectedSchool === 'dreamz'
                    ? 'border-[#C2410C] bg-[#FFF7ED] shadow-md ring-2 ring-[#C2410C]/20'
                    : 'border-[#E6DDCF] bg-white hover:border-[#FDBA74]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FFEDD5] text-[#C2410C]">
                      Early Childhood Division
                    </span>
                    <Sparkles className="w-6 h-6 text-[#C2410C]" />
                  </div>
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-[#1C1917]">
                    Rapid Dreamz
                  </h3>
                  <p className="text-xs font-semibold text-[#C2410C] mt-1">
                    Play Group to UKG (Ages 2 to 6)
                  </p>
                  <p className="text-xs sm:text-sm text-[#57534E] mt-3 leading-relaxed">
                    Gentle sensory discovery, creative arts, early phonics, and caring emotional immersion in child-proof learning spaces.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#FDBA74]/40 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C2410C] uppercase tracking-wider">Choose Rapid Dreamz →</span>
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-[#C2410C]">
                    {selectedSchool === 'dreamz' && <div className="w-2.5 h-2.5 rounded-full bg-[#C2410C]" />}
                  </div>
                </div>
              </div>

              {/* Option B: Rapid Shakuntlayan */}
              <div
                onClick={() => handleSchoolSelect('shakuntlayan')}
                className={`p-6 sm:p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  selectedSchool === 'shakuntlayan'
                    ? 'border-[#064E3B] bg-[#F0FDF4] shadow-md ring-2 ring-[#064E3B]/20'
                    : 'border-[#E6DDCF] bg-white hover:border-[#86EFAC]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#DCFCE7] text-[#064E3B]">
                      Class 1 to 12
                    </span>
                    <GraduationCap className="w-6 h-6 text-[#064E3B]" />
                  </div>
                  <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-[#1C1917]">
                    Rapid Shakuntlayan
                  </h3>
                  <p className="text-xs font-semibold text-[#064E3B] mt-1">
                    CBSE Affiliated, New Delhi
                  </p>
                  <p className="text-xs sm:text-sm text-[#57534E] mt-3 leading-relaxed">
                    Disciplined academics, advanced science and computer labs, competitive entrance mentoring, athletics, and leadership.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#86EFAC]/40 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#064E3B] uppercase tracking-wider">Choose Rapid Shakuntlayan →</span>
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-[#064E3B]">
                    {selectedSchool === 'shakuntlayan' && <div className="w-2.5 h-2.5 rounded-full bg-[#064E3B]" />}
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
              <h2 className="font-cormorant text-3xl sm:text-4xl font-normal text-[#1C1917]">
                Step 2: Select Target Class
              </h2>
              <p className="text-xs sm:text-sm text-[#78716C]">
                Available classes for <strong className="text-[#1C1917]">{selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
              {(selectedSchool === 'dreamz' ? dreamzClasses : shakunClasses).map((cls) => (
                <div
                  key={cls.name}
                  onClick={() => handleClassSelect(cls.name)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedClass === cls.name
                      ? 'border-[#BD672A] bg-[#FAF3EC] font-semibold text-[#1C1917] ring-2 ring-[#BD672A]/20'
                      : 'border-[#E6DDCF] bg-white hover:border-[#D4C3B3] text-[#57534E]'
                  }`}
                >
                  <div>
                    <div className="text-sm font-semibold text-[#1C1917]">{cls.name}</div>
                    <div className="text-xs text-[#78716C] mt-0.5">{cls.age}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedClass === cls.name ? 'border-[#BD672A] bg-[#BD672A]' : 'border-[#D4C3B3]'}`}>
                    {selectedClass === cls.name && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setActiveStep(1)}
                className="px-5 py-2.5 rounded-xl border border-[#E6DDCF] bg-white text-xs font-semibold text-[#57534E] uppercase tracking-wider hover:bg-[#FAF7F2]"
              >
                ← Back to Schools
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="px-6 py-2.5 rounded-xl bg-[#BD672A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#A35520] transition-colors"
              >
                Proceed to Requirements →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Admission Information & Document Checklist */}
        {activeStep === 3 && (
          <div className="space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h2 className="font-cormorant text-3xl sm:text-4xl font-normal text-[#1C1917]">
                Step 3: Admission Guidelines & Documents
              </h2>
              <p className="text-xs sm:text-sm text-[#78716C]">
                Targeting <strong className="text-[#1C1917]">{selectedClass}</strong> at <strong className="text-[#1C1917]">{selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Document Checklist */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6DDCF] shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#BD672A]">
                  <FileCheck className="w-5 h-5" />
                  <h3 className="font-cormorant text-xl font-semibold text-[#1C1917]">
                    Mandatory Documentation Checklist
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#57534E]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                    <span>Original & Copy of Municipal Birth Certificate of the student</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                    <span>Four recent passport-size photographs of the student and two of parents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                    <span>Government photo ID & residential address proof of parents/guardians</span>
                  </li>
                  {selectedSchool === 'shakuntlayan' && (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                        <span>Countersigned Transfer Certificate (TC) from recognized previous school</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                        <span>Previous year academic report card / transcript</span>
                      </li>
                    </>
                  )}
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                    <span>Medical fitness certificate & immunization record</span>
                  </li>
                </ul>

                <div className="pt-2">
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#BD672A] hover:text-[#A35520]"
                  >
                    <Download className="w-3.5 h-3.5 text-[#BD672A]" />
                    <span>Download Official Checklist Form (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Admission Timeline & Fee Transparency */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E6DDCF] shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-[#064E3B]">
                  <Calendar className="w-5 h-5" />
                  <h3 className="font-cormorant text-xl font-semibold text-[#1C1917]">
                    Evaluation & Interaction Process
                  </h3>
                </div>
                
                <div className="space-y-3 text-xs sm:text-sm text-[#57534E]">
                  <div className="p-3 rounded-xl bg-[#FCFAF6] border border-[#E6DDCF]">
                    <span className="font-semibold text-[#1C1917] block mb-0.5">1. Online Enquiry & Registration</span>
                    Submit the form in Step 4. You will receive an official acknowledgment and reference ID.
                  </div>
                  <div className="p-3 rounded-xl bg-[#FCFAF6] border border-[#E6DDCF]">
                    <span className="font-semibold text-[#1C1917] block mb-0.5">2. Campus Interaction / Observation</span>
                    {selectedSchool === 'dreamz'
                      ? 'Gentle interactive play session observing social comfort and curiosity with early educators.'
                      : 'Written diagnostic aptitude review (English & Math) followed by a friendly mentor conversation.'}
                  </div>
                  <div className="p-3 rounded-xl bg-[#FCFAF6] border border-[#E6DDCF]">
                    <span className="font-semibold text-[#1C1917] block mb-0.5">3. Document Verification & Enrollment</span>
                    Verification of certificates and admission formalization with transparent quarterly fee structures.
                  </div>
                </div>

                <div className="pt-1 text-xs text-[#78716C]">
                  * Fee schedules and sibling concession guidelines are available for review at the campus bursar office.
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setActiveStep(2)}
                className="px-5 py-2.5 rounded-xl border border-[#E6DDCF] bg-white text-xs font-semibold text-[#57534E] uppercase tracking-wider hover:bg-[#FAF7F2]"
              >
                ← Back to Class Selection
              </button>
              <button
                onClick={() => setActiveStep(4)}
                className="px-6 py-2.5 rounded-xl bg-[#BD672A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#A35520] transition-colors"
              >
                Proceed to Submit Application →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Submit Enquiry Form */}
        {activeStep === 4 && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E6DDCF] shadow-sm max-w-2xl mx-auto">
            {submittedId ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ECFDF5] text-[#064E3B] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-cormorant text-3xl font-semibold text-[#1C1917]">
                  Application Logged Successfully
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{parentName}</strong>. Your enquiry for <strong>{studentName}</strong> ({selectedClass}, {selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}) has been assigned official reference code:
                </p>
                <div className="p-4 rounded-xl bg-[#FCFAF6] border border-[#E6DDCF] font-mono text-base font-bold text-[#BD672A]">
                  {submittedId}
                </div>
                <p className="text-xs text-[#78716C]">
                  Our admissions counsellor will contact you at <strong>{phone}</strong> within 1 working day to schedule the campus interaction.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <Link
                    to="/visit"
                    className="px-5 py-2.5 rounded-xl bg-[#BD672A] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#A35520] transition-colors"
                  >
                    Schedule Campus Visit
                  </Link>
                  <Link
                    to="/"
                    className="px-5 py-2.5 rounded-xl bg-[#FAF7F2] text-[#1C1917] font-semibold text-xs uppercase tracking-wider hover:bg-[#E6DDCF] transition-colors"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-[#E6DDCF] pb-3 mb-2 flex items-center justify-between">
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-[#1C1917]">
                      Step 4: Candidate & Parent Information
                    </h3>
                    <p className="text-xs text-[#78716C]">
                      Enrolling for: <strong className="text-[#1C1917]">{selectedClass}</strong> at <strong className="text-[#1C1917]">{selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}</strong>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveStep(2)}
                    className="text-xs text-[#BD672A] hover:text-[#A35520] font-semibold"
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
                    <label htmlFor="studentName" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Student Full Name <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="studentName"
                      type="text"
                      placeholder="e.g. Reyansh Gupta"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="dob" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Date of Birth
                    </label>
                    <input
                      id="dob"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="parentName" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Parent / Guardian Name <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      placeholder="e.g. Sunil Gupta"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                      Mobile Number <span className="text-[#BE123C]">*</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                    Email Address for Correspondence <span className="text-[#BE123C]">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="parent@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                    Residential Locality / City
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="e.g. Sector 14, Knowledge Park"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#57534E] uppercase tracking-wider mb-1">
                    Previous School / Special Learning Interests (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={2}
                    placeholder="Any specific academic goals, interests, or questions for our admissions team..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveStep(3)}
                    className="px-5 py-2.5 rounded-xl border border-[#E6DDCF] bg-white text-xs font-semibold text-[#57534E] uppercase tracking-wider hover:bg-[#FAF7F2]"
                  >
                    ← Back to Guidelines
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-3 px-6 rounded-xl bg-[#BD672A] hover:bg-[#A35520] text-white font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Registering...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
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
