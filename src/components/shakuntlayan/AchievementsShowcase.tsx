import React, { useState } from 'react';
import { Award, FileText, CheckCircle2, ChevronRight, ShieldCheck, Microscope, Trophy, BookOpen, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AchievementRecord {
  id: string;
  category: 'academic' | 'sports' | 'stem' | 'cultural';
  categoryLabel: string;
  title: string;
  verifyingBody: string;
  session: string;
  summary: string;
  seal: string;
}

const records: AchievementRecord[] = [
  {
    id: 'cbse-laurels',
    category: 'academic',
    categoryLabel: 'CBSE Board Honor',
    title: 'Senior Secondary & Secondary Board Distinctions',
    verifyingBody: 'Central Board of Secondary Education (CBSE), New Delhi',
    session: 'Annual Board Cycles',
    summary: 'Consistent exemplary performance across AISSE (Class 10) and AISSCE (Class 12) board examinations with subject centum honors in Mathematics, Sciences, and Accountancy.',
    seal: 'OFFICIALLY VERIFIED'
  },
  {
    id: 'stem-robotics',
    category: 'stem',
    categoryLabel: 'STEM & Robotics',
    title: 'Regional Science & Innovation Exhibition Selection',
    verifyingBody: 'CBSE Regional Science Fair & Technology Council',
    session: 'Institutional Entry',
    summary: 'Student-engineered automated environmental irrigation and renewable energy prototypes selected for regional exhibition representation.',
    seal: 'CURATOR COMMENDED'
  },
  {
    id: 'zonal-athletics',
    category: 'sports',
    categoryLabel: 'Athletics & Games',
    title: 'Inter-School Zonal Track & Team Championships',
    verifyingBody: 'District School Games Federation of India (SGFI)',
    session: 'Annual Sports Calendar',
    summary: 'Gold and silver podium finishes in track sprint events, inter-school basketball tourneys, and competitive cricket league matches.',
    seal: 'COMPETITION RECORD'
  },
  {
    id: 'debate-mun',
    category: 'cultural',
    categoryLabel: 'Debate & Rhetoric',
    title: 'Model United Nations & Declamation Accolades',
    verifyingBody: 'Inter-School Literary & Parliamentary Society',
    session: 'Scholastic Year',
    summary: 'Outstanding delegate citations and top speaker honors in inter-institutional parliamentary debating and Hindi kavyanjali recitations.',
    seal: 'AUTHENTIC CITATION'
  },
  {
    id: 'visual-arts',
    category: 'cultural',
    categoryLabel: 'Fine Arts & Heritage',
    title: 'State Heritage Art & Cultural Exhibition',
    verifyingBody: 'State Youth Cultural Affairs Forum',
    session: 'Fine Arts Council',
    summary: 'Juried selection and display of student oil canvases and traditional Indian craft sculptures at the prestigious state art forum.',
    seal: 'GALLERY COMMENDED'
  },
  {
    id: 'academic-scholar',
    category: 'academic',
    categoryLabel: 'Scholastic Olympiad',
    title: 'National Cyber & Science Olympiad Distinctions',
    verifyingBody: 'Science Olympiad Foundation (SOF) Registry',
    session: 'National Level',
    summary: 'Medals of excellence and state rank commendations achieved by scholars in National Science and Cyber Olympiads.',
    seal: 'EXCELLENCE REGISTER'
  }
];

export const AchievementsShowcase: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'academic' | 'sports' | 'stem' | 'cultural'>('all');

  const filteredRecords = filter === 'all' ? records : records.filter((r) => r.category === filter);

  return (
    <div className="space-y-10">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        {[
          { key: 'all', label: 'All Honors' },
          { key: 'academic', label: 'CBSE Board & Olympiads' },
          { key: 'stem', label: 'STEM & Science Labs' },
          { key: 'sports', label: 'Athletics & SGFI Games' },
          { key: 'cultural', label: 'Debating & Fine Arts' }
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setFilter(tab.key as any)}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
              filter === tab.key
                ? 'bg-[#042F24] text-[#A7F3D0] shadow-sm border border-[#34D399]/40'
                : 'bg-[#EBF2EE] text-[#1E3B32] hover:bg-[#DCEAE3] border border-transparent'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Verified Records */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRecords.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-[#F8FAF8] border border-[#D1E5DB] shadow-xs hover:border-[#042F24] hover:shadow-[0_12px_28px_-6px_rgba(4,47,36,0.1)] transition-all duration-300 flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2 border-b border-[#D1E5DB] pb-3">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#064E3B] bg-[#E3EFE9] px-2.5 py-0.5 rounded-full">
                  {item.categoryLabel}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#8A6A27] bg-[#F9F5EA] px-2 py-0.5 rounded-full border border-[#C5A059]/40">
                  {item.seal}
                </span>
              </div>

              <h4 className="font-editorial text-xl font-bold text-[#021C16] leading-snug">
                {item.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#3C584E] leading-relaxed">
                {item.summary}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-[#D1E5DB] text-[11px] text-[#2D5A4C] space-y-1">
              <div className="font-mono">
                <span className="text-[#8A6A27] font-bold">Verifying Authority:</span> {item.verifyingBody}
              </div>
              <div className="text-[10px] text-[#4E776A] font-mono">
                Benchmark: {item.session}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Institutional Fact Integrity & Verification Policy Card */}
      <div className="rounded-3xl bg-[#042F24] text-white border border-[#0D654E] p-8 sm:p-10 text-center max-w-4xl mx-auto space-y-5 shadow-xl">
        <div className="w-14 h-14 rounded-2xl bg-[#064E3B] text-[#E5C37E] flex items-center justify-center mx-auto border border-[#34D399]/30 shadow-xs">
          <Award className="w-7 h-7" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-[#021C16] text-[#A7F3D0] border border-[#34D399]/30">
          <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
          <span>Authentic Institutional Record Disclosure</span>
        </div>

        <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
          Verified Merit & Examination Archives
        </h3>

        <p className="text-xs sm:text-sm text-[#D1E7DF] leading-relaxed max-w-2xl mx-auto font-normal">
          In strict fidelity to scholastic integrity and responsible institutional communication, Rapid Shakuntlayan publishes and verifies board examination records, athletic trophies, and symposium citations directly through our administrative office and CBSE archives.
        </p>

        <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-xs text-[#D1E7DF]">
          <div className="p-4 rounded-2xl bg-[#021C16] border border-[#0F4C3C]">
            <strong className="block text-[#E5C37E] font-mono uppercase mb-1">CBSE Examinations</strong>
            Annual merit rolls and stream rosters are certified following national board announcements.
          </div>
          <div className="p-4 rounded-2xl bg-[#021C16] border border-[#0F4C3C]">
            <strong className="block text-[#E5C37E] font-mono uppercase mb-1">Inter-School Laurels</strong>
            SGFI athletics and debate honors are archived under official circular numbers.
          </div>
          <div className="p-4 rounded-2xl bg-[#021C16] border border-[#0F4C3C]">
            <strong className="block text-[#E5C37E] font-mono uppercase mb-1">Certified Transcripts</strong>
            Parents and alumni may request signed scholastic transcripts directly from the registrar.
          </div>
        </div>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Link
            to="/notices"
            className="px-5 py-2.5 rounded-xl bg-[#C5A059] hover:bg-[#B38D46] text-[#021C16] font-bold text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
          >
            <FileText className="w-4 h-4 text-[#021C16]" />
            <span>View Official Notices</span>
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl bg-[#064E3B] border border-[#34D399]/30 text-white font-bold text-xs uppercase tracking-wider hover:bg-[#08634B] transition-colors flex items-center gap-1.5"
          >
            <span>Inquire at Registrar Office</span>
            <ChevronRight className="w-4 h-4 text-[#A7F3D0]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
