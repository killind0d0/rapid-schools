import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { AcademicStages } from '../../components/shakuntlayan/AcademicStages';
import { BookOpen, GraduationCap, Award, Microscope, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShakunAcademicsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F0FDFA] pb-24 text-[#042F2E]">
      <Breadcrumbs
        items={[
          { label: 'Rapid Shakuntlayan', href: '/shakuntlayan' },
          { label: 'Academic Framework' }
        ]}
      />

      {/* Hero Canvas in Sovereign British Racing Forest Emerald */}
      <section className="bg-gradient-to-br from-[#134E4A] via-[#042F2E] to-[#042F2E] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Mint Conifer Aurora Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(52,211,153,0.14)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 left-10 w-96 h-96 bg-[radial-gradient(circle,_rgba(197,160,89,0.1)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/35 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#115E59] text-[#99F6E4] border border-[#2DD4BF]/40 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>National Board Affiliation • CBSE, New Delhi</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            CBSE Academic Framework (Class 1–12)
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#CCFBF1] font-normal leading-relaxed">
            A disciplined continuum of conceptual inquiry, empirical laboratory investigations, and national board alignment from Primary to Senior Secondary graduation.
          </p>
        </div>
      </section>

      {/* Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Pedagogical Manifesto Panel */}
        <div className="bg-[#F0FDFA] p-8 sm:p-12 rounded-3xl border border-[#CCFBF1] shadow-[0_4px_24px_-4px_rgba(4,47,36,0.06)] space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F0FDFA] text-[#115E59] text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5 text-[#115E59]" />
            <span>National Curriculum Alignment</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#042F2E]">
            Pedagogical Principles & Scholastic Rigor
          </h2>

          <p className="text-sm sm:text-base text-[#1A3C38] leading-relaxed">
            Rapid Shakuntlayan adheres strictly to the CBSE curriculum guidelines while infusing contemporary experiential methodologies championed by the National Education Policy (NEP 2020). Our scholastic ethos balances rigorous board examination preparedness with genuine conceptual understanding — ensuring students do not merely memorize formulas, but master the underlying physical logic and analytical deductions.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#1A3C38]">
            <div className="p-5 rounded-2xl bg-white border border-[#CCFBF1] shadow-2xs space-y-1.5">
              <strong className="block text-[#115E59] font-mono text-xs uppercase tracking-wider">
                Empirical Science Practicals
              </strong>
              <p className="text-[#3D6B63] leading-relaxed">
                Bi-weekly laboratory investigations commencing in Middle School, reinforcing theoretical principles through verifiable student-executed experiments.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#CCFBF1] shadow-2xs space-y-1.5">
              <strong className="block text-[#115E59] font-mono text-xs uppercase tracking-wider">
                Mathematical Reasoning
              </strong>
              <p className="text-[#3D6B63] leading-relaxed">
                Diagnostic problem-solving workshops cultivating algebraic fluency, geometric proofs, data interpretation, and mental calculation speed.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#CCFBF1] shadow-2xs space-y-1.5">
              <strong className="block text-[#115E59] font-mono text-xs uppercase tracking-wider">
                Rhetorical Command
              </strong>
              <p className="text-[#3D6B63] leading-relaxed">
                Mastery of English and Hindi through structured parliamentary debate, literary criticism, formal expository essays, and model assembly addresses.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Academic Division Dossiers */}
        <div>
          <SectionHeading
            badge="Division Dossiers"
            badgeColor="forest"
            title="Curriculum Stages: Primary to Senior Secondary"
            subtitle="Click on any stage below to inspect subjects, teaching approaches, stream specializations, and assessment methodologies."
            align="center"
          />

          <AcademicStages />
        </div>

        {/* Admissions Link Banner in Sovereign Forest */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#134E4A] via-[#042F2E] to-[#042F2E] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#115E59]">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono font-bold text-[#99F6E4] uppercase tracking-wider block">
              Enrollment Pathways
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
              Interested in CBSE Class 1–12 Admissions?
            </h3>
            <p className="text-xs sm:text-sm text-[#CCFBF1] font-normal">
              Review age criteria, entrance diagnostic syllabi, and required transfer documents in the Admissions portal.
            </p>
          </div>
          <Link
            to="/shakuntlayan/admissions"
            className="px-6 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#B38D46] text-[#042F2E] font-bold text-xs uppercase tracking-wider transition-all shrink-0 shadow-md flex items-center gap-2"
          >
            <span>Apply to Shakuntlayan</span>
            <ArrowRight className="w-4 h-4 text-[#042F2E]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
