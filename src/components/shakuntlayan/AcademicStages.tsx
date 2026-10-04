import React, { useState } from 'react';
import { BookOpen, Compass, Award, Microscope, ChevronDown, CheckCircle2, ShieldCheck, GraduationCap } from 'lucide-react';

interface StreamDetail {
  name: string;
  badge: string;
  subjects: string[];
  gateway: string;
}

interface AcademicStage {
  id: string;
  divisionCode: string;
  seal: string;
  title: string;
  grades: string;
  ageGroup: string;
  overview: string;
  subjects: string[];
  streams?: StreamDetail[];
  pedagogy: string;
  practicalLabs: string[];
  assessment: string;
}

const stages: AcademicStage[] = [
  {
    id: 'primary',
    divisionCode: 'DIV-01',
    seal: 'PRIMARY SCHOLASTIC FOUNDATION',
    title: 'Primary Academic Division',
    grades: 'Classes 1 to 5',
    ageGroup: 'Ages 6 to 10',
    overview: 'Instilling disciplined study habits, mathematical reasoning, bilingual command, and empirical curiosity. Learning connects classroom inquiry directly with real-world observation.',
    subjects: [
      'English Language & Reading Comprehension',
      'Hindi / Regional Language & Grammar',
      'Mathematics & Mental Arithmetic',
      'Environmental Studies (EVS)',
      'Digital Literacy & Applied Coding Foundations',
      'Classical Fine Arts & Vocal Music',
      'Physical Health & Movement Education'
    ],
    pedagogy: 'Experiential learning aligned with NEP 2020. Concrete physical apparatus, mental calculation workshops, and interactive bilingual reading circles precede abstract formulas.',
    practicalLabs: [
      'Discovery Mathematics Workbench',
      'Junior Environmental Botany Plot',
      'Multimedia Computer Laboratory'
    ],
    assessment: 'Continuous and Comprehensive Evaluation (CCE) tracking diagnostic mastery, conceptual clarity, and social character without high-stakes examination stress.'
  },
  {
    id: 'middle',
    divisionCode: 'DIV-02',
    seal: 'MIDDLE EXPERIMENTAL INQUIRY',
    title: 'Middle Academic Division',
    grades: 'Classes 6 to 8',
    ageGroup: 'Ages 11 to 13',
    overview: 'Transitioning from concrete observations to rigorous analytical inquiry, algebraic formulation, empirical scientific methods, and structured formal debate.',
    subjects: [
      'English Literature & Rhetorical Writing',
      'Hindi & Sanskrit / Third Language Options',
      'Mathematics (Algebra, Geometry, Data Analysis)',
      'Integrated Science (Physics, Chemistry, Biology)',
      'Social Sciences (History, Civics, Geography)',
      'Computer Science & Algorithmic Problem Solving',
      'Art Education & Applied Design Thinking'
    ],
    pedagogy: 'Inquiry-led pedagogy in dedicated laboratory classrooms. Students formulate hypotheses, conduct recorded experiments, and defend conclusions in academic symposiums.',
    practicalLabs: [
      'Integrated General Science Laboratory',
      'Algorithmic Coding & STEM Station',
      'Geography & Cartographic Workshop'
    ],
    assessment: 'Periodic unit diagnostics, authenticated lab record portfolios, multidisciplinary project investigations, and term evaluations strictly normed to CBSE syllabus patterns.'
  },
  {
    id: 'secondary',
    divisionCode: 'DIV-03',
    seal: 'CBSE AISSE BOARD DIVISION',
    title: 'Secondary Academic Division',
    grades: 'Classes 9 & 10',
    ageGroup: 'Ages 14 to 15',
    overview: 'Rigorous preparation for the CBSE All India Secondary School Examination (AISSE). Focus is on academic discipline, comprehensive laboratory practicals, and conceptual mastery.',
    subjects: [
      'Language 1: English Language & Literature (184)',
      'Language 2: Hindi Course A/B (002/085) or Sanskrit (122)',
      'Mathematics: Standard (041) or Basic (241)',
      'Science: Theory & Laboratory Practicals (086)',
      'Social Science: History, Civics, Geography, Economics (087)',
      'Skill Subject: Information Technology (402) / AI'
    ],
    pedagogy: 'Concept-deepening lectures, systematic past-decade CBSE paper analytics, timed practical vivas, and faculty mentoring sessions tailored to individual student performance.',
    practicalLabs: [
      'CBSE-Compliant Physics Lab',
      'CBSE-Compliant Chemistry Lab',
      'CBSE-Compliant Biology Lab',
      'High-Speed Networked IT Terminal'
    ],
    assessment: 'Continuous internal assessments (periodic tests, notebook evaluation, subject enrichment practicals) plus comprehensive pre-board diagnostic examinations.'
  },
  {
    id: 'senior',
    divisionCode: 'DIV-04',
    seal: 'CBSE AISSCE SENIOR DIPLOMA',
    title: 'Senior Secondary Academic Division',
    grades: 'Classes 11 & 12',
    ageGroup: 'Ages 16 to 18',
    overview: 'Specialized academic streams leading to the CBSE All India Senior School Certificate Examination (AISSCE) and prestigious national university and competitive examination pathways.',
    subjects: [
      'Core Requirement: English Core (301)',
      'Stream Disciplines: Detailed below by chosen concentration',
      'Co-Scholastic: General Studies, Health & Physical Education, Work Experience'
    ],
    streams: [
      {
        name: 'Science Stream (PCM / PCB / PCMB)',
        badge: 'Medical & Technical Pathway',
        subjects: ['Physics (042)', 'Chemistry (043)', 'Mathematics (041) or Biology (044)', 'Computer Science (083) or Physical Education (048)'],
        gateway: 'Engineering (JEE), Medicine (NEET), Pure Sciences, Research & Technology'
      },
      {
        name: 'Commerce Stream',
        badge: 'Finance & Enterprise Pathway',
        subjects: ['Accountancy (055)', 'Business Studies (054)', 'Economics (030)', 'Applied Mathematics (241) or Informatics Practices (065)'],
        gateway: 'Chartered Accountancy, Corporate Law, Business Management, Economic Research'
      },
      {
        name: 'Humanities Stream',
        badge: 'Civil Services & Jurisprudence',
        subjects: ['History (027)', 'Political Science (028)', 'Economics (030)', 'Psychology (037) or Sociology (039)'],
        gateway: 'Civil Services, Judicial Law, International Relations, Journalism & Public Policy'
      }
    ],
    pedagogy: 'Collegiate seminar-style lectures, advanced empirical investigations, quantitative case studies, and faculty mentoring for national university entrance readiness.',
    practicalLabs: [
      'Advanced Senior Physics Laboratory',
      'Senior Chemical Analytical Laboratory',
      'Molecular & Cellular Biology Workstation',
      'Computer Science & Programming Terminal'
    ],
    assessment: 'CBSE External Board Examination framework, external practical vivas with board-appointed examiners, project dossiers, and rigorous pre-board mock cycles.'
  }
];

export const AcademicStages: React.FC = () => {
  const [openStage, setOpenStage] = useState<string>('primary');
  const [selectedStream, setSelectedStream] = useState<number>(0);

  return (
    <div className="space-y-5">
      {stages.map((stage) => {
        const isOpen = openStage === stage.id;
        return (
          <div
            key={stage.id}
            className={`rounded-3xl border transition-all duration-300 overflow-hidden bg-[#F0FDFA] ${
              isOpen
                ? 'border-[#134E4A] shadow-[0_12px_32px_-8px_rgba(4,47,36,0.12)] ring-1 ring-[#134E4A]/30'
                : 'border-[#CCFBF1] hover:border-[#2DD4BF]/60 hover:shadow-sm'
            }`}
          >
            {/* Dossier Header / Accordion Trigger */}
            <button
              onClick={() => setOpenStage(isOpen ? '' : stage.id)}
              className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-[#115E59] text-[#99F6E4] border border-[#2DD4BF]/30">
                    {stage.divisionCode}
                  </span>
                  <span className="text-[11px] font-mono font-semibold text-[#8A6A27] uppercase tracking-wider bg-[#F9F5EA] px-2.5 py-0.5 rounded-full border border-[#C5A059]/40">
                    {stage.seal}
                  </span>
                </div>

                <div className="flex flex-wrap items-baseline gap-2 sm:gap-3">
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#042F2E]">
                    {stage.title}
                  </h3>
                  <span className="text-xs sm:text-sm font-semibold text-[#2D6A5E] bg-[#F0FDFA] px-3 py-0.5 rounded-full">
                    {stage.grades} • {stage.ageGroup}
                  </span>
                </div>
              </div>

              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                  isOpen
                    ? 'rotate-180 bg-[#115E59] text-[#99F6E4]'
                    : 'bg-[#F0FDFA] text-[#115E59] hover:bg-[#CCFBF1]'
                }`}
              >
                <ChevronDown className="w-5 h-5" />
              </div>
            </button>

            {/* Dossier Body */}
            {isOpen && (
              <div className="px-6 sm:px-8 pb-8 pt-2 border-t border-[#CCFBF1] space-y-6">
                <p className="text-sm sm:text-base text-[#1A3C38] leading-relaxed font-normal">
                  {stage.overview}
                </p>

                {/* If Senior Secondary, render Stream Markers Dossier */}
                {stage.streams && (
                  <div className="p-6 rounded-2xl bg-[#134E4A] text-white border border-[#115E59] shadow-sm space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#0F766E] pb-3">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-[#E5C37E]" />
                        <h4 className="font-editorial text-xl font-bold text-[#E5C37E]">
                          Specialized Academic Concentrations (Classes 11 & 12)
                        </h4>
                      </div>
                      <span className="text-xs font-mono text-[#99F6E4]">
                        CBSE Affiliated Curricula
                      </span>
                    </div>

                    {/* Stream Selection Tabs */}
                    <div className="flex flex-wrap gap-2">
                      {stage.streams.map((stream, idx) => (
                        <button
                          key={idx}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedStream(idx);
                          }}
                          className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all cursor-pointer ${
                            selectedStream === idx
                              ? 'bg-[#C5A059] text-[#042F2E] shadow-sm'
                              : 'bg-[#134E4A] text-[#CCFBF1] hover:bg-[#115E59]'
                          }`}
                        >
                          {stream.name}
                        </button>
                      ))}
                    </div>

                    {/* Active Stream Content */}
                    <div className="p-4 rounded-xl bg-[#042F2E] border border-[#115E59] space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#99F6E4] font-mono">
                          {stage.streams[selectedStream].badge}
                        </span>
                        <span className="text-xs text-[#CCFBF1]">
                          Target Gateways: <strong className="text-white">{stage.streams[selectedStream].gateway}</strong>
                        </span>
                      </div>

                      <div className="text-xs text-[#99F6E4]">
                        <strong className="block text-white mb-1.5 uppercase font-mono tracking-wider">
                          Elective Subject Matrix:
                        </strong>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {stage.streams[selectedStream].subjects.map((sub, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#E5C37E]" />
                              <span>{sub}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Grid: Subjects, Pedagogy, Laboratories, and Assessment */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                  {/* Subjects Panel */}
                  <div className="p-6 rounded-2xl bg-white border border-[#CCFBF1] shadow-2xs space-y-3">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#115E59] flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#115E59]" />
                      Core Curriculum Framework
                    </h4>
                    <ul className="space-y-2 text-xs sm:text-sm text-[#1A3C38]">
                      {stage.subjects.map((sub, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#115E59] shrink-0 mt-0.5" />
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pedagogy & Assessment Panel */}
                  <div className="p-6 rounded-2xl bg-white border border-[#CCFBF1] shadow-2xs space-y-5">
                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#115E59] mb-2 flex items-center gap-2">
                        <Compass className="w-4 h-4 text-[#115E59]" />
                        Teaching & Laboratory Methodology
                      </h4>
                      <p className="text-xs sm:text-sm text-[#3D6B63] leading-relaxed">
                        {stage.pedagogy}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#115E59] mb-2 flex items-center gap-2">
                        <Microscope className="w-4 h-4 text-[#115E59]" />
                        Dedicated Laboratory Facilities
                      </h4>
                      <ul className="space-y-1 text-xs text-[#1A3C38]">
                        {stage.practicalLabs.map((lab, lIdx) => (
                          <li key={lIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#115E59]" />
                            <span>{lab}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-3 border-t border-[#CCFBF1]">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#115E59] mb-1.5 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#115E59]" />
                        Assessment & Board Alignment
                      </h4>
                      <p className="text-xs text-[#3D6B63] leading-relaxed">
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
