import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { AcademicStages } from '../../components/shakuntlayan/AcademicStages';
import { BookOpen, GraduationCap, Award, Microscope, FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShakunAcademicsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs
        items={[
          { label: 'Rapid Shakuntlayan', href: '/shakuntlayan' },
          { label: 'Academic Journey' }
        ]}
      />

      <section className="bg-[#03231B] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#064E3B]/60 via-[#03231B] to-[#01140F]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#059669]/20 text-[#A7F3D0] border border-[#059669]/30">
            Curriculum & Pedagogy
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            CBSE Academic Framework (Class 1–12)
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#D1FAE5]/80 font-sans">
            A structured progression of conceptual inquiry, laboratory investigation, and national board alignment under CBSE, New Delhi.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E6DDCF] shadow-sm space-y-6">
          <h2 className="font-cormorant text-2xl sm:text-4xl font-normal text-[#1C1917]">
            Pedagogical Principles & National Curriculum
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Rapid Shakuntlayan adheres strictly to the CBSE curriculum guidelines while infusing modern experiential techniques recommended by NEP 2020. Our academic culture balances rigorous board preparation with conceptual depth, ensuring students do not merely memorize formulas but grasp the underlying empirical logic.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#57534E]">
            <div className="p-4 rounded-xl bg-[#FCFAF6] border border-[#E6DDCF]">
              <strong className="block text-[#064E3B] mb-1 font-semibold text-sm">Empirical Science Practicals</strong>
              Regular laboratory sessions beginning in Middle School reinforcing theoretical concepts through experiment.
            </div>
            <div className="p-4 rounded-xl bg-[#FCFAF6] border border-[#E6DDCF]">
              <strong className="block text-[#064E3B] mb-1 font-semibold text-sm">Mathematical Reasoning</strong>
              Diagnostic problem-solving workshops cultivating algebraic fluency, geometric proof, and mental calculations.
            </div>
            <div className="p-4 rounded-xl bg-[#FCFAF6] border border-[#E6DDCF]">
              <strong className="block text-[#064E3B] mb-1 font-semibold text-sm">Language & Eloquence</strong>
              Command of English and Hindi through structured debates, literature discussions, and formal writing.
            </div>
          </div>
        </div>

        <SectionHeading
          badge="Detailed Stages"
          badgeColor="forest"
          title="Curriculum Stages: Primary to Senior Secondary"
          subtitle="Click on any stage below to inspect subjects, teaching approaches, and assessment methodologies."
          align="center"
        />

        <AcademicStages />

        <div className="p-8 sm:p-10 rounded-3xl bg-[#03231B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-[#064E3B]/40">
          <div>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-normal text-[#FCFAF6]">Interested in CBSE Admissions?</h3>
            <p className="text-xs text-[#D1FAE5]/80 mt-1 font-sans">Review age benchmarks and document checklists in the Admissions portal.</p>
          </div>
          <Link
            to="/shakuntlayan/admissions"
            className="px-6 py-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-semibold text-xs uppercase tracking-wider transition-all shrink-0 shadow-sm"
          >
            Apply to Shakuntlayan →
          </Link>
        </div>
      </div>
    </div>
  );
};
