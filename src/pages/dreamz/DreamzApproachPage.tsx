import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { PlayApproach } from '../../components/dreamz/PlayApproach';
import { Sparkles, Heart, Users, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DreamzApproachPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs
        items={[
          { label: 'Rapid Dreamz', href: '/dreamz' },
          { label: 'Learning Approach' }
        ]}
      />

      <section className="bg-gradient-to-r from-[#C2410C] to-[#EA580C] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-white/20 text-white border border-white/30">
            Early Years Pedagogy
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            How Young Children Learn at Dreamz
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#FFEDD5] font-sans">
            Blending play-based inquiry, tactile sensorial materials, and gentle emotional scaffolding to kindle a lifelong joy for learning.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E6DDCF] shadow-sm space-y-6">
          <h2 className="font-cormorant text-2xl sm:text-4xl font-normal text-[#1C1917]">
            The Philosophy of Wonder & Play
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            In the early formative years between age 2 and 6, the human brain forms more neural connections per second than at any other period in life. At Rapid Dreamz, we never subject tender children to passive desk instruction or rote recitation drills. Instead, we structure rich, engaging environments where children touch, manipulate, question, build, and celebrate their accomplishments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-[#57534E]">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
              <span>Montessori manipulative blocks for intuitive number sense</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
              <span>Multi-sensory Jolly Phonics for joyful early reading</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
              <span>Reggio Emilia art ateliers encouraging personal voice</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" />
              <span>Gentle teacher-to-child ratios for individual emotional attention</span>
            </div>
          </div>
        </div>

        <SectionHeading
          badge="Six Core Pillars"
          badgeColor="copper"
          title="The Multi-Sensory Approach"
          subtitle="Every day is engineered around balanced developmental milestones."
          align="center"
        />

        <PlayApproach />

        <div className="p-8 sm:p-10 rounded-3xl bg-[#2D060C] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-[#BD672A]/30">
          <div>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-normal text-[#FCFAF6]">Explore Our Stage-by-Stage Curriculum</h3>
            <p className="text-xs text-[#D4C3B3] mt-1 font-sans">Review milestones from Play Group through UKG.</p>
          </div>
          <Link
            to="/dreamz/academics"
            className="px-6 py-3 rounded-xl bg-[#BD672A] hover:bg-[#A35520] text-white font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            View Early Stages →
          </Link>
        </div>
      </div>
    </div>
  );
};
