import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { PlayApproach } from '../../components/dreamz/PlayApproach';
import { Sparkles, Heart, Users, ShieldCheck, CheckCircle2, ArrowRight, Sun, BookOpen, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DreamzApproachPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 text-[#451A03]">
      <Breadcrumbs
        items={[
          { label: 'Rapid Dreamz', href: '/dreamz' },
          { label: 'Learning Approach' }
        ]}
      />

      {/* Hero Canvas in Velour Terracotta & Morning Sun Amber Highlights */}
      <section className="bg-gradient-to-br from-[#B45309] via-[#B45309] to-[#92400E] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Morning Sun Amber Glow */}
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FCD34D]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#FEF3C7]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-[#FEF3C7] backdrop-blur-md border border-white/25 font-mono shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FCD34D]" />
            <span>Early Childhood Pedagogy</span>
          </div>
          
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            How Young Children Learn at Dreamz
          </h1>
          
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#FEF3C7] font-normal leading-relaxed">
            Harmonizing Montessori tactile discovery, Reggio Emilia expressive inquiry, and gentle emotional scaffolding to nurture lifelong wonder.
          </p>
        </div>
      </section>

      {/* Content Body */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* Philosophy Card in Creamy Ivory with Porcelain Border */}
        <div className="bg-[#F8FAFC] p-8 sm:p-12 rounded-3xl border border-[#FEF3C7] shadow-[0_4px_24px_-4px_rgba(180,83,9,0.06)] space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-xs font-bold font-mono uppercase tracking-wider">
            <Sun className="w-3.5 h-3.5 text-[#B45309]" />
            <span>Foundational Philosophy</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#451A03] leading-tight">
            The Philosophy of Wonder & Play
          </h2>

          <p className="text-sm sm:text-base text-[#78350F] leading-relaxed">
            Between the ages of 2 and 6, the human brain forms more neural connections per second than at any other period in human development. At Rapid Dreamz, we reject passive rote memorization and rigid desk-bound drill. Instead, children thrive inside an inviting sensory landscape where hands physically manipulate, eyes closely observe, minds joyfully question, and hearts feel safe to experiment.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 text-xs sm:text-sm text-[#451A03]">
            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#FEF3C7]">
              <div className="w-6 h-6 rounded-full bg-[#CCFBF1] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
              </div>
              <div>
                <strong className="block text-[#451A03] font-bold">Montessori Sensorial Method</strong>
                Self-correcting wooden apparatus building intuitive numeracy and spatial discernment.
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#FEF3C7]">
              <div className="w-6 h-6 rounded-full bg-[#CCFBF1] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
              </div>
              <div>
                <strong className="block text-[#451A03] font-bold">Multi-Sensory Jolly Phonics</strong>
                Tactile sandpaper tracing, kinetic body gestures, and acoustic rhymes for natural literacy.
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#FEF3C7]">
              <div className="w-6 h-6 rounded-full bg-[#CCFBF1] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
              </div>
              <div>
                <strong className="block text-[#451A03] font-bold">Reggio Emilia Creative Atelier</strong>
                Expressive open-ended art celebrating individual child voice through earth pigments and clay.
              </div>
            </div>

            <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FAFC] border border-[#FEF3C7]">
              <div className="w-6 h-6 rounded-full bg-[#CCFBF1] flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4 text-[#0F766E]" />
              </div>
              <div>
                <strong className="block text-[#451A03] font-bold">Attentive Educator Ratios</strong>
                Warm emotional scaffolding with dedicated support ayahs ensuring continuous care.
              </div>
            </div>
          </div>
        </div>

        {/* Six Core Pillars */}
        <div>
          <SectionHeading
            badge="Six Foundational Pillars"
            badgeColor="terracotta"
            title="The Multi-Sensory Approach"
            subtitle="Every day is engineered around balanced developmental milestones, curiosity, and emotional confidence."
            align="center"
          />

          <PlayApproach />
        </div>

        {/* Stage Roadmap Link Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#451A03] via-[#451A03] to-[#451A03] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#B45309]/30">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono font-bold text-[#FCD34D] uppercase tracking-wider block">
              Pedagogical Progression
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              Explore Our Stage-by-Stage Curriculum
            </h3>
            <p className="text-xs sm:text-sm text-[#FEF3C7]/80">
              Review developmental milestones from Play Group through UKG.
            </p>
          </div>
          <Link
            to="/dreamz/academics"
            className="px-6 py-3.5 rounded-xl bg-[#B45309] hover:bg-[#92400E] text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md flex items-center gap-2"
          >
            <span>View Early Stages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
