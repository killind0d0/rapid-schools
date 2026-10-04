import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { AcademicStages } from '../../components/shakuntlayan/AcademicStages';
import { BookOpen, GraduationCap, Award, Microscope, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShakunAcademicsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Breadcrumbs
        items={[
          { label: 'Rapid Shakuntlayan', href: '/shakuntlayan' },
          { label: 'Academic Journey' }
        ]}
      />

      <section className="bg-slate-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-sky-300 border border-blue-500/30">
            Curriculum & Pedagogy
          </span>
          <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
            CBSE Academic Framework (Class 1–12)
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300">
            A structured progression of conceptual inquiry, laboratory investigation, and national board alignment under CBSE, New Delhi.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-900">
            Pedagogical Principles & National Curriculum
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Rapid Shakuntlayan adheres strictly to the CBSE curriculum guidelines while infusing modern experiential techniques recommended by NEP 2020. Our academic culture balances rigorous board preparation with conceptual depth, ensuring students do not merely memorize formulas but grasp the underlying empirical logic.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-blue-900 mb-1">Empirical Science Practicals</strong>
              Regular laboratory sessions beginning in Middle School reinforcing theoretical concepts through experiment.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-blue-900 mb-1">Mathematical Reasoning</strong>
              Diagnostic problem-solving workshops cultivating algebraic fluency, geometric proof, and mental calculations.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-blue-900 mb-1">Language & Eloquence</strong>
              Command of English and Hindi through structured debates, literature discussions, and formal writing.
            </div>
          </div>
        </div>

        <SectionHeading
          badge="Detailed Stages"
          badgeColor="blue"
          title="Curriculum Stages: Primary to Senior Secondary"
          subtitle="Click on any stage below to inspect subjects, teaching approaches, and assessment methodologies."
          align="center"
        />

        <AcademicStages />

        <div className="p-8 rounded-3xl bg-blue-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="font-outfit text-xl font-bold">Interested in CBSE Admissions?</h3>
            <p className="text-xs text-slate-300 mt-1">Review age benchmarks and document checklists in the Admissions portal.</p>
          </div>
          <Link
            to="/shakuntlayan/admissions"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shrink-0"
          >
            Apply to Shakuntlayan →
          </Link>
        </div>
      </div>
    </div>
  );
};
