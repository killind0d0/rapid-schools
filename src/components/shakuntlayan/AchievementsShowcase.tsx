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
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'all'
              ? 'bg-blue-900 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          All Categories
        </button>
        <button
          onClick={() => setFilter('academic')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'academic'
              ? 'bg-blue-900 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          CBSE Board & Academic
        </button>
        <button
          onClick={() => setFilter('sports')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'sports'
              ? 'bg-blue-900 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Athletics & Games
        </button>
        <button
          onClick={() => setFilter('stem')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'stem'
              ? 'bg-blue-900 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          STEM & Innovation
        </button>
        <button
          onClick={() => setFilter('cultural')}
          className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            filter === 'cultural'
              ? 'bg-blue-900 text-white shadow-sm'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Arts & Debating
        </button>
      </div>

      {/* Institutional Fact Integrity Card */}
      <div className="rounded-3xl bg-slate-50 border border-slate-200/90 p-8 sm:p-10 text-center max-w-3xl mx-auto space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mx-auto border border-amber-500/20">
          <Award className="w-7 h-7" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200">
          <span>Official Institutional Record Policy</span>
        </div>

        <h3 className="font-outfit text-2xl font-bold text-slate-900">
          Verified Merit & Examination Archives
        </h3>

        <p className="text-sm text-slate-600 leading-relaxed max-w-xl mx-auto">
          In strict compliance with our institutional governance and truth-in-advertising guidelines, Rapid Shakuntlayan publishes verified board results, sports laurels, and competition achievements only upon official verification by the examination cell and governing bodies.
        </p>

        <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left text-xs text-slate-700">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200">
            <span className="font-bold text-blue-900 block mb-1">CBSE Examinations</span>
            Annual merit rolls and stream highlights are issued following CBSE national announcements.
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200">
            <span className="font-bold text-blue-900 block mb-1">Inter-School Laurels</span>
            Zonal sports, debate, and science fair honors are archived under official circulars.
          </div>
          <div className="p-3.5 rounded-xl bg-white border border-slate-200">
            <span className="font-bold text-blue-900 block mb-1">Authenticated Records</span>
            Parents may request certified achievement records and transcripts directly from the office.
          </div>
        </div>

        <div className="pt-4 flex flex-wrap justify-center gap-3">
          <Link
            to="/notices"
            className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors flex items-center gap-1.5"
          >
            <FileText className="w-4 h-4 text-amber-400" />
            <span>View Official Notices</span>
          </Link>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-slate-100 transition-colors flex items-center gap-1.5"
          >
            <span>Inquire at School Office</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
