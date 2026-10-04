import React, { useState } from 'react';
import { Award, ShieldAlert, FileText, CheckCircle2, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AchievementsShowcase: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'academic' | 'sports' | 'stem' | 'cultural'>('all');

  return (
    <div className="space-y-8">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            filter === 'all'
              ? 'bg-[#064E3B] text-white shadow-xs'
              : 'bg-[#EDE4D5] text-[#432C2E] hover:bg-[#E5DCD0]'
          }`}
        >
          All Categories
        </button>
        <button
          onClick={() => setFilter('academic')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            filter === 'academic'
              ? 'bg-[#064E3B] text-white shadow-xs'
              : 'bg-[#EDE4D5] text-[#432C2E] hover:bg-[#E5DCD0]'
          }`}
        >
          CBSE Board & Academic
        </button>
        <button
          onClick={() => setFilter('sports')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            filter === 'sports'
              ? 'bg-[#064E3B] text-white shadow-xs'
              : 'bg-[#EDE4D5] text-[#432C2E] hover:bg-[#E5DCD0]'
          }`}
        >
          Athletics & Games
        </button>
        <button
          onClick={() => setFilter('stem')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            filter === 'stem'
              ? 'bg-[#064E3B] text-white shadow-xs'
              : 'bg-[#EDE4D5] text-[#432C2E] hover:bg-[#E5DCD0]'
          }`}
        >
          STEM & Innovation
        </button>
        <button
          onClick={() => setFilter('cultural')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
            filter === 'cultural'
              ? 'bg-[#064E3B] text-white shadow-xs'
              : 'bg-[#EDE4D5] text-[#432C2E] hover:bg-[#E5DCD0]'
          }`}
        >
          Arts & Debating
        </button>
      </div>

      {/* Institutional Fact Integrity Card */}
      <div className="rounded-3xl bg-[#FCFAF6] border border-[#E6DDCF] p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-4 shadow-xs">
        <div className="w-14 h-14 rounded-2xl bg-[#064E3B]/10 text-[#064E3B] flex items-center justify-center mx-auto border border-[#064E3B]/20">
          <Award className="w-7 h-7" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#FAF6F0] text-[#064E3B] border border-[#D1E7DF] font-mono">
          <span>Official Institutional Record Policy</span>
        </div>

        <h3 className="font-outfit text-2xl font-bold text-[#2B1B1D]">
          Verified Merit & Examination Archives
        </h3>

        <p className="text-sm text-[#5C494A] leading-relaxed max-w-xl mx-auto">
          In strict compliance with our institutional governance and truth-in-advertising guidelines, Rapid Shakuntlayan publishes verified board results, sports laurels, and competition achievements only upon official verification by the examination cell and governing bodies.
        </p>

        <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-xs text-[#432C2E]">
          <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E8DFD0]">
            <span className="font-bold text-[#064E3B] block mb-1">CBSE Examinations</span>
            Annual merit rolls and stream highlights are issued following CBSE national announcements.
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E8DFD0]">
            <span className="font-bold text-[#064E3B] block mb-1">Inter-School Laurels</span>
            Zonal sports, debate, and science fair honors are archived under official circulars.
          </div>
          <div className="p-4 rounded-2xl bg-[#FAF6F0] border border-[#E8DFD0]">
            <span className="font-bold text-[#064E3B] block mb-1">Authenticated Records</span>
            Parents may request certified achievement records and transcripts directly from the office.
          </div>
        </div>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Link
            to="/notices"
            className="px-5 py-2.5 rounded-xl bg-[#3D0B12] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#54121B] transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4 text-[#D47A3B]" />
            <span>View Official Notices</span>
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl bg-[#FAF6F0] border border-[#D4C8B8] text-[#3D2C2E] font-bold text-xs uppercase tracking-wider hover:bg-[#EFE8DD] transition-colors flex items-center gap-1.5"
          >
            <span>Inquire at School Office</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
