import React, { useState } from 'react';
import { BookOpen, Compass, Award, Microscope, ChevronDown, CheckCircle2 } from 'lucide-react';

interface Stage {
  id: string;
  badge: string;
  title: string;
  grades: string;
  ageGroup: string;
  overview: string;
  subjects: string[];
  pedagogy: string;
  coCurricular: string[];
  assessment: string;
}

const stages: Stage[] = [
  {
    id: 'primary',
    badge: 'Stage 1',
    title: 'Primary School Wing',
    grades: 'Class 1 to Class 5',
    ageGroup: '6 to 10 Years',
    overview: 'Nurturing foundational literacy, numeracy, creative curiosity, and joyful study habits through activity-based learning and experiential exploration.',
    subjects: [
      'English Language & Phonics',
      'Hindi / Regional Language',
      'Mathematics & Mental Math',
      'Environmental Studies (EVS)',
      'Computer & Digital Awareness',
      'Visual Arts & Music',
      'Physical & Health Education'
    ],
    pedagogy: 'Theme-based learning connecting classroom ideas with real-life observations. Concrete manipulative objects are used extensively before introducing abstract formulas.',
    coCurricular: [
      'Recitation & Elocution',
      'Junior Choir & Instrumentals',
      'Clay Modeling & Origami',
      'Mini Track Athletics',
      'Yoga & Mindfulness'
    ],
    assessment: 'Continuous and Comprehensive Evaluation (CCE) assessing conceptual clarity, observational skills, and social collaboration without high-stakes test pressure.'
  },
  {
    id: 'middle',
    badge: 'Stage 2',
    title: 'Middle School Wing',
    grades: 'Class 6 to Class 8',
    ageGroup: '11 to 13 Years',
    overview: 'Transitioning from concrete concepts to disciplined abstract inquiry, critical analysis, scientific experiment, and structured linguistic expression.',
    subjects: [
      'English Literature & Grammar',
      'Hindi & Third Language (Sanskrit / Regional)',
      'Mathematics (Algebra, Geometry, Arithmetic)',
      'Integrated Science (Physics, Chemistry, Biology)',
      'Social Sciences (History, Civics, Geography)',
      'Computer Science & Basic Coding',
      'Art, Craft & Design Thinking'
    ],
    pedagogy: 'Inquiry-driven science lab sessions, historical debates, mathematical problem-solving workshops, and collaborative group investigations.',
    coCurricular: [
      'Inter-House Debating & Quizzing',
      'Science Club & Robotics Workbenches',
      'Football, Basketball & Cricket Coaching',
      'School Band & Western/Classical Music',
      'Community Green Eco-Club'
    ],
    assessment: 'Periodic term evaluations, practical lab notebooks, multidisciplinary project work, and formative portfolio reviews aligned with CBSE benchmarks.'
  },
  {
    id: 'secondary',
    badge: 'Stage 3',
    title: 'Secondary School Wing',
    grades: 'Class 9 & Class 10',
    ageGroup: '14 to 15 Years',
    overview: 'Rigorous preparation for CBSE All India Secondary School Examination (AISSE) while balancing academic mastery, sports, and ethical leadership.',
    subjects: [
      'Language 1: English Communicative / Language & Literature',
      'Language 2: Hindi Course A/B or Sanskrit',
      'Mathematics (Standard / Basic)',
      'Science (Theory + Comprehensive Lab Practicals)',
      'Social Science (Contemporary India, Democratic Politics, Economics)',
      'Skill Subject: Information Technology / AI Fundamentals'
    ],
    pedagogy: 'Concept-deepening lectures, intensive laboratory practicals, sample paper analytics, and personalized mentoring to strengthen problem-solving speed and accuracy.',
    coCurricular: [
      'Model United Nations (MUN)',
      'CBSE Science Exhibition participation',
      'Athletics & Competitive Team Sports',
      'Drama Society & Youth Parliament',
      'Social Responsibility Volunteering'
    ],
    assessment: 'Strict alignment with CBSE Board evaluation frameworks, unit assessments, mid-term examinations, and pre-board diagnostic papers.'
  },
  {
    id: 'senior',
    badge: 'Stage 4',
    title: 'Senior Secondary School Wing',
    grades: 'Class 11 & Class 12',
    ageGroup: '16 to 17 Years',
    overview: 'Specialized academic streams preparing students for CBSE All India Senior School Certificate Examination (AISSCE) and prestigious university entrance gateways.',
    subjects: [
      'Science Stream: Physics, Chemistry, Mathematics / Biology, Computer Science / Physical Education',
      'Commerce Stream: Accountancy, Business Studies, Economics, Mathematics / Informatics Practices',
      'Humanities Stream: History, Political Science, Economics, Psychology / Sociology',
      'Core Compulsory: English Core & General Studies'
    ],
    pedagogy: 'Seminar-style masterclasses, advanced experimental laboratory investigations, case-study analytics, and competitive entrance exam mentoring.',
    coCurricular: [
      'Senior Prefectorial & Student Council Leadership',
      'Inter-School National Symposiums & Olympiads',
      'Career Guidance & University Application Workshops',
      'Peer Tutoring & Research Paper Mentorship'
    ],
    assessment: 'CBSE External Board Examination structure, comprehensive internal practical vivas, project portfolios, and continuous test cycles.'
  }
];

export const AcademicStages: React.FC = () => {
  const [openStage, setOpenStage] = useState<string>('primary');

  return (
    <div className="space-y-4">
      {stages.map((stage) => {
        const isOpen = openStage === stage.id;
        return (
          <div
            key={stage.id}
            className={`rounded-3xl border transition-all duration-300 overflow-hidden bg-[#FCFAF6] ${
              isOpen
                ? 'border-[#064E3B] shadow-md ring-1 ring-[#064E3B]/20'
                : 'border-[#E6DDCF] hover:border-[#B2D6C9]'
            }`}
          >
            {/* Header / Accordion Trigger */}
            <button
              onClick={() => setOpenStage(isOpen ? '' : stage.id)}
              className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#064E3B]/10 text-[#064E3B] border border-[#064E3B]/20 font-mono">
                  {stage.badge}
                </span>
                <h3 className="font-outfit text-xl sm:text-2xl font-bold text-[#2B1B1D]">
                  {stage.title}
                </h3>
                <span className="text-xs sm:text-sm font-semibold text-[#7A6765] bg-[#EFE8DD] px-3 py-0.5 rounded-full">
                  {stage.grades} ({stage.ageGroup})
                </span>
              </div>
              <div className={`p-2 rounded-full transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#064E3B]/10 text-[#064E3B]' : 'bg-[#EFE8DD] text-[#7A6765]'}`}>
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            {/* Expandable Content Area */}
            {isOpen && (
              <div className="px-6 pb-6 pt-2 border-t border-[#E8DFD0] space-y-6">
                <p className="text-sm sm:text-base text-[#432C2E] leading-relaxed font-medium">
                  {stage.overview}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Subjects list */}
                  <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#E8DFD0]">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B] mb-3 flex items-center gap-1.5 font-mono">
                      <BookOpen className="w-4 h-4" />
                      Core Curriculum & Subjects
                    </h4>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-[#432C2E]">
                      {stage.subjects.map((sub, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pedagogy & Activities */}
                  <div className="p-5 rounded-2xl bg-[#FAF6F0] border border-[#E8DFD0] space-y-4">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B] mb-1.5 flex items-center gap-1.5 font-mono">
                        <Compass className="w-4 h-4" />
                        Teaching & Practical Methodology
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5C494A] leading-relaxed">
                        {stage.pedagogy}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B] mb-1.5 flex items-center gap-1.5 font-mono">
                        <Microscope className="w-4 h-4" />
                        Assessment & Board Alignment
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5C494A] leading-relaxed">
                        {stage.assessment}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
