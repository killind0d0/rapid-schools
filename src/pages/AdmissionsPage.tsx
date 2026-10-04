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
    <div className="min-h-screen bg-slate-50 pb-24">
      <Breadcrumbs items={[{ label: 'Admissions 2025–26' }]} />

      {/* Header Banner */}
      <section className="bg-slate-950 text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Admissions Process • Academic Session {settings.academicYear}
          </span>
          <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
            Join the Rapid Schools Community
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            A transparent, supportive, 4-step admission journey designed to help you find the optimal academic home for your child.
          </p>
        </div>
      </section>

      {/* Step Navigation Bar */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-md border border-slate-200/80 p-2 sm:p-4 grid grid-cols-4 gap-1 sm:gap-2 text-center">
          {[
            { num: 1, title: 'Choose School' },
            { num: 2, title: 'Select Class' },
            { num: 3, title: 'Requirements' },
            { num: 4, title: 'Submit Enquiry' }
          ].map((st) => (
            <button
              key={st.num}
              onClick={() => setActiveStep(st.num)}
              className={`p-2 sm:p-3 rounded-xl transition-all flex flex-col items-center justify-center cursor-pointer ${
                activeStep === st.num
                  ? 'bg-slate-900 text-amber-400 font-bold shadow-sm'
                  : activeStep > st.num
                  ? 'text-slate-900 font-medium hover:bg-slate-50'
                  : 'text-slate-600 hover:text-slate-800'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs mb-1 font-bold ${
                activeStep === st.num
                  ? 'bg-amber-500 text-slate-950'
                  : activeStep > st.num
                  ? 'bg-emerald-100 text-emerald-700'
                  : 'bg-slate-100 text-slate-500'
              }`}>
                {activeStep > st.num ? '✓' : st.num}
              </span>
              <span className="text-[11px] sm:text-xs font-semibold truncate max-w-full">
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
              <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-900">
                Step 1: Choose Institution Wing
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Select the appropriate school division based on your child's age group and current academic level.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {/* Option A: Rapid Dreamz */}
              <div
                onClick={() => handleSchoolSelect('dreamz')}
                className={`p-6 sm:p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  selectedSchool === 'dreamz'
                    ? 'border-amber-500 bg-amber-50/40 shadow-lg ring-2 ring-amber-500/20'
                    : 'border-slate-200 bg-white hover:border-amber-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800">
                      Junior Wing
                    </span>
                    <Sparkles className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-slate-900">
                    Rapid Dreamz
                  </h3>
                  <p className="text-xs font-semibold text-amber-700 mt-1">
                    Play Group to UKG (Ages 2 to 6)
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    Gentle sensory discovery, creative arts, early phonics, and caring emotional immersion in child-proof learning spaces.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-700">Choose Rapid Dreamz →</span>
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-amber-500">
                    {selectedSchool === 'dreamz' && <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />}
                  </div>
                </div>
              </div>

              {/* Option B: Rapid Shakuntlayan */}
              <div
                onClick={() => handleSchoolSelect('shakuntlayan')}
                className={`p-6 sm:p-8 rounded-3xl border-2 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                  selectedSchool === 'shakuntlayan'
                    ? 'border-blue-900 bg-blue-50/40 shadow-lg ring-2 ring-blue-900/20'
                    : 'border-slate-200 bg-white hover:border-blue-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-100 text-blue-900">
                      Class 1 to 12
                    </span>
                    <GraduationCap className="w-6 h-6 text-blue-900" />
                  </div>
                  <h3 className="font-outfit text-2xl font-bold text-slate-900">
                    Rapid Shakuntlayan
                  </h3>
                  <p className="text-xs font-semibold text-blue-900 mt-1">
                    CBSE Affiliated, New Delhi
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
                    Disciplined academics, advanced science and computer labs, competitive entrance mentoring, athletics, and leadership.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-900">Choose Rapid Shakuntlayan →</span>
                  <div className="w-5 h-5 rounded-full border-2 flex items-center justify-center border-blue-900">
                    {selectedSchool === 'shakuntlayan' && <div className="w-2.5 h-2.5 rounded-full bg-blue-900" />}
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
              <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-900">
                Step 2: Select Target Class
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Available classes for <strong className="text-slate-900">{selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4">
              {(selectedSchool === 'dreamz' ? dreamzClasses : shakunClasses).map((cls) => (
                <div
                  key={cls.name}
                  onClick={() => handleClassSelect(cls.name)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    selectedClass === cls.name
                      ? 'border-amber-500 bg-amber-50/70 font-bold text-slate-900 ring-2 ring-amber-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300 text-slate-700'
                  }`}
                >
                  <div>
                    <div className="text-sm font-bold text-slate-900">{cls.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{cls.age}</div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${selectedClass === cls.name ? 'border-amber-500 bg-amber-500' : 'border-slate-300'}`}>
                    {selectedClass === cls.name && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setActiveStep(1)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-bold text-slate-700 uppercase tracking-wider hover:bg-slate-50"
              >
                ← Back to Schools
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-amber-400"
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
              <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-900">
                Step 3: Admission Guidelines & Documents
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Targeting <strong>{selectedClass}</strong> at <strong>{selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}</strong>
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Document Checklist */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-amber-600">
                  <FileCheck className="w-5 h-5" />
                  <h3 className="font-outfit text-lg font-bold text-slate-900">
                    Mandatory Documentation Checklist
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Original & Copy of Municipal Birth Certificate of the student</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Four recent passport-size photographs of the student and two of parents</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>Government photo ID & residential address proof of parents/guardians</span>
                  </li>
                  {selectedSchool === 'shakuntlayan' && (
                    <>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Countersigned Transfer Certificate (TC) from recognized previous school</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>Previous year academic report card / transcript</span>
                      </li>
                    </>
                  )}
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
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
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-600" />
                    <span>Download Official Checklist Form (PDF)</span>
                  </button>
                </div>
              </div>

              {/* Admission Timeline & Fee Transparency */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-blue-900">
                  <Calendar className="w-5 h-5" />
                  <h3 className="font-outfit text-lg font-bold text-slate-900">
                    Evaluation & Interaction Process
                  </h3>
                </div>
                
                <div className="space-y-3 text-xs sm:text-sm text-slate-700">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-slate-900 block mb-0.5">1. Online Enquiry & Registration</span>
                    Submit the form in Step 4. You will receive an official acknowledgment and reference ID.
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-slate-900 block mb-0.5">2. Campus Interaction / Observation</span>
                    {selectedSchool === 'dreamz'
                      ? 'Gentle interactive play session observing social comfort and curiosity with early educators.'
                      : 'Written diagnostic aptitude review (English & Math) followed by a friendly mentor conversation.'}
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="font-bold text-slate-900 block mb-0.5">3. Document Verification & Enrollment</span>
                    Verification of certificates and admission formalization with transparent quarterly fee structures.
                  </div>
                </div>

                <div className="pt-1 text-xs text-slate-500">
                  * Fee schedules and sibling concession guidelines are available for review at the campus bursar office.
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-between">
              <button
                onClick={() => setActiveStep(2)}
                className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-bold text-slate-700 uppercase tracking-wider hover:bg-slate-50"
              >
                ← Back to Class Selection
              </button>
              <button
                onClick={() => setActiveStep(4)}
                className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold uppercase tracking-wider hover:bg-amber-400"
              >
                Proceed to Submit Application →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Submit Enquiry Form */}
        {activeStep === 4 && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md max-w-2xl mx-auto">
            {submittedId ? (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-outfit text-2xl font-bold text-slate-900">
                  Application Logged Successfully
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{parentName}</strong>. Your enquiry for <strong>{studentName}</strong> ({selectedClass}, {selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}) has been assigned official reference code:
                </p>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 font-mono text-base font-bold text-amber-700">
                  {submittedId}
                </div>
                <p className="text-xs text-slate-500">
                  Our admissions counsellor will contact you at <strong>{phone}</strong> within 1 working day to schedule the campus interaction.
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <Link
                    to="/visit"
                    className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors"
                  >
                    Schedule Campus Visit
                  </Link>
                  <Link
                    to="/"
                    className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-slate-100 pb-3 mb-2 flex items-center justify-between">
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-slate-900">
                      Step 4: Candidate & Parent Information
                    </h3>
                    <p className="text-xs text-slate-500">
                      Enrolling for: <strong className="text-slate-800">{selectedClass}</strong> at <strong className="text-slate-800">{selectedSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}</strong>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setActiveStep(2)}
                    className="text-xs text-amber-600 hover:text-amber-700 font-semibold"
                  >
                    Change Class
                  </button>
                </div>

                {error && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0 text-rose-600" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="studentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Student Full Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="studentName"
                      type="text"
                      placeholder="e.g. Reyansh Gupta"
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="dob" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Date of Birth
                    </label>
                    <input
                      id="dob"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="parentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Parent / Guardian Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      id="parentName"
                      type="text"
                      placeholder="e.g. Sunil Gupta"
                      value={parentName}
                      onChange={(e) => setParentName(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>

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
                      className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address for Correspondence <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="parent@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="address" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Residential Locality / City
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="e.g. Sector 14, Knowledge Park"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Previous School / Special Learning Interests (Optional)
                  </label>
                  <textarea
                    id="message"
                    rows={2}
                    placeholder="Any specific academic goals, interests, or questions for our admissions team..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveStep(3)}
                    className="px-5 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-bold text-slate-700 uppercase tracking-wider hover:bg-slate-50"
                  >
                    ← Back to Guidelines
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="py-3 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
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
