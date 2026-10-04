import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { PlayApproach } from '../../components/dreamz/PlayApproach';
import { Sparkles, Heart, Users, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DreamzApproachPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF9] pb-24">
      <Breadcrumbs
        items={[
          { label: 'Rapid Dreamz', href: '/dreamz' },
          { label: 'Learning Approach' }
        ]}
      />

      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30">
            Early Years Pedagogy
          </span>
          <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
            How Young Children Learn at Dreamz
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-amber-100">
            Blending play-based inquiry, tactile sensorial materials, and gentle emotional scaffolding to kindle a lifelong joy for learning.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-900">
            The Philosophy of Wonder & Play
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            In the early formative years between age 2 and 6, the human brain forms more neural connections per second than at any other period in life. At Rapid Dreamz, we never subject tender children to passive desk instruction or rote recitation drills. Instead, we structure rich, engaging environments where children touch, manipulate, question, build, and celebrate their accomplishments.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Montessori manipulative blocks for intuitive number sense</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Multi-sensory Jolly Phonics for joyful early reading</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Reggio Emilia art ateliers encouraging personal voice</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>Gentle teacher-to-child ratios for individual emotional attention</span>
            </div>
          </div>
        </div>

        <SectionHeading
          badge="Six Core Pillars"
          badgeColor="amber"
          title="The Multi-Sensory Approach"
          subtitle="Every day is engineered around balanced developmental milestones."
          align="center"
        />

        <PlayApproach />

        <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-outfit text-xl font-bold">Explore Our Stage-by-Stage Curriculum</h3>
            <p className="text-xs text-slate-300 mt-1">Review milestones from Play Group through UKG.</p>
          </div>
          <Link
            to="/dreamz/academics"
            className="px-5 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 transition-colors shrink-0"
          >
            View Early Stages →
          </Link>
        </div>
      </div>
    </div>
  );
};
