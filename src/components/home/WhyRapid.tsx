import React, { useState } from 'react';
import { BookOpen, UserCheck, Trophy, Cpu, HeartHandshake, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface Pillar {
  id: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
}

const pillars: Pillar[] = [
  {
    id: 'academic',
    icon: BookOpen,
    title: 'Academic Excellence',
    tagline: 'Deep conceptual mastery through structured enquiry',
    description: 'We prioritize deep understanding over rote memorization. From foundational literacy in early years to comprehensive CBSE board preparation, our pedagogy encourages analytical problem-solving and intellectual rigor.',
    highlights: [
      'Inquiry-based pedagogy aligned with NEP 2020',
      'Diagnostic assessments with continuous feedback',
      'Integrated STEM & practical laboratory discovery',
      'Dedicated academic mentoring and remedial support'
    ]
  },
  {
    id: 'individual',
    icon: UserCheck,
    title: 'Individual Attention',
    tagline: 'Every child acknowledged, guided, and empowered',
    description: 'Every child develops at their own distinct pace. We maintain manageable student-teacher ratios to ensure that educators intimately understand each student’s temperament, cognitive style, and personal aspirations.',
    highlights: [
      'Carefully balanced student-to-teacher ratio',
      'Personalized developmental tracking portfolios',
      'Regular parent-educator collaborative reviews',
      'Accessible emotional and psychological counseling'
    ]
  },
  {
    id: 'beyond',
    icon: Trophy,
    title: 'Beyond the Classroom',
    tagline: 'Physical vitality, creative expression, and sportsmanship',
    description: 'A complete education happens equally on the sports pitch, the music stage, and the art easel. Students develop endurance, creative voice, and collaborative spirit through rich co-curricular programs.',
    highlights: [
      'Structured physical education and team sports',
      'Performing and visual arts studio curriculum',
      'Inter-school competitions and symposiums',
      'Outdoor nature walks and educational excursions'
    ]
  },
  {
    id: 'future',
    icon: Cpu,
    title: 'Future Ready',
    tagline: 'Technological literacy and modern communication',
    description: 'Preparing learners for tomorrow means teaching computational thinking, adaptive communication, digital safety, and ethical reasoning alongside traditional scholarship.',
    highlights: [
      'Age-appropriate computer literacy and digital labs',
      'Public speaking, debating, and collaborative presentations',
      'Design thinking and practical maker activities',
      'Critical evaluation of digital information'
    ]
  },
  {
    id: 'character',
    icon: HeartHandshake,
    title: 'Character & Values',
    tagline: 'Rooted in Indian ethos, global in outlook',
    description: 'Academic knowledge is incomplete without moral character. We nurture empathy, mutual respect, civic responsibility, and environmental stewardship as everyday habits.',
    highlights: [
      'Value-driven daily assemblies and reflections',
      'Community service and social responsibility projects',
      'Respect for cultural diversity and Indian heritage',
      'Eco-club and sustainability campus practices'
    ]
  }
];

export const WhyRapid: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('academic');

  const current = pillars.find((p) => p.id === activePillar) || pillars[0];
  const IconComponent = current.icon;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Our Philosophy"
          badgeColor="gold"
          title="Why Rapid Schools?"
          subtitle="Education that balances intellectual excellence with character, curiosity with discipline, and traditional values with modern perspectives."
          align="center"
        />

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all ${
                  isActive
                    ? 'bg-slate-900 text-amber-400 shadow-md scale-105'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-500'}`} />
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        <div className="rounded-3xl bg-slate-50 border border-slate-200/80 p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-amber-500/10 text-amber-700 border border-amber-500/20">
                <IconComponent className="w-5 h-5 text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider">Educational Pillar</span>
              </div>

              <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-slate-900">
                {current.title}
              </h3>
              
              <p className="text-sm sm:text-base font-semibold text-amber-600">
                {current.tagline}
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side educational quote/card */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Institutional Objective
              </div>
              <p className="text-sm font-serif italic text-slate-800 leading-relaxed">
                "An institution is defined not by its walls, but by the intellectual vitality and moral integrity of the students who walk its corridors."
              </p>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-slate-700">Rapid Schools Framework</span>
                <span>NEP Aligned</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
