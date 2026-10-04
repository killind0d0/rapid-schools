import React, { useState } from 'react';
import { BookOpen, UserCheck, Trophy, Cpu, HeartHandshake, CheckCircle } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface Pillar {
  id: string;
  roman: string;
  icon: React.ElementType;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
}

const pillars: Pillar[] = [
  {
    id: 'academic',
    roman: 'I',
    icon: BookOpen,
    title: 'Academic Rigor & Conceptual Mastery',
    tagline: 'Deep conceptual comprehension over superficial recitation',
    description: 'We prioritize deep conceptual understanding. From early phonetic immersion to higher secondary CBSE board scholarship, our pedagogy encourages analytical reasoning and intellectual curiosity.',
    highlights: [
      'Inquiry-based pedagogy aligned with NEP 2020 framework',
      'Diagnostic assessments with continuous feedback loops',
      'Integrated STEM & empirical laboratory investigations',
      'Dedicated academic mentoring and remedial masterclasses'
    ]
  },
  {
    id: 'individual',
    roman: 'II',
    icon: UserCheck,
    title: 'Individual Attention & Mentorship',
    tagline: 'Recognizing every child’s cognitive style and potential',
    description: 'Every child develops at their own distinct pace. We maintain balanced student-educator ratios so teachers intimately comprehend each student’s temperament, cognitive pace, and strengths.',
    highlights: [
      'Carefully balanced student-to-teacher ratio',
      'Personalized developmental tracking portfolios',
      'Regular parent-educator collaborative reviews',
      'Accessible emotional well-being and student counseling'
    ]
  },
  {
    id: 'beyond',
    roman: 'III',
    icon: Trophy,
    title: 'Beyond the Classroom Walls',
    tagline: 'Athletics, aesthetics, and character forged through action',
    description: 'A complete education happens equally on the sports pitch, the music stage, and the art studio. Students develop physical endurance, creative voice, and sportsmanship through diverse co-curriculars.',
    highlights: [
      'Structured physical education and team athletics',
      'Visual arts studios, pottery, and musical ensembles',
      'Inter-school competitions and intellectual symposiums',
      'Nature trails and observational field expeditions'
    ]
  },
  {
    id: 'future',
    roman: 'IV',
    icon: Cpu,
    title: 'Future-Ready Intellect & Tech',
    tagline: 'Technological literacy and modern communication',
    description: 'Preparing students for tomorrow means teaching computational thinking, adaptive communication, digital safety, and ethical reasoning alongside traditional scholarship.',
    highlights: [
      'Age-appropriate computer literacy and digital labs',
      'Debating, public speaking, and collaborative presentations',
      'Design thinking and practical maker activities',
      'Critical evaluation of digital sources and information'
    ]
  },
  {
    id: 'character',
    roman: 'V',
    icon: HeartHandshake,
    title: 'Noble Character & Heritage',
    tagline: 'Rooted in Indian ethos, cosmopolitan in outlook',
    description: 'Academic knowledge is incomplete without moral character. We nurture empathy, mutual respect, civic responsibility, and environmental stewardship as daily habits.',
    highlights: [
      'Value-driven daily assemblies and moral reflections',
      'Community service and social responsibility projects',
      'Respect for cultural diversity and Indian heritage',
      'Eco-club and campus sustainability initiatives'
    ]
  }
];

export const WhyRapid: React.FC = () => {
  const [activePillar, setActivePillar] = useState<string>('academic');

  const current = pillars.find((p) => p.id === activePillar) || pillars[0];
  const IconComponent = current.icon;

  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Foundational Pillars"
          badgeColor="copper"
          title="The Rapid Educational Philosophy"
          subtitle="Education that balances intellectual excellence with character, curiosity with discipline, and traditional values with progressive perspectives."
          align="center"
        />

        {/* Tab Selector Buttons with Roman Numerals */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12 sm:mb-14">
          {pillars.map((pillar) => {
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`flex items-center gap-2.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0F172A] text-[#FDE68A] shadow-[0_4px_18px_-2px_rgba(44,7,12,0.4)] border border-[#F59E0B]/50 scale-105'
                    : 'bg-white text-[#1E293B] hover:bg-[#F8FAFC] border border-[#E2E8F0]'
                }`}
              >
                <span className={`font-editorial italic font-bold text-sm ${isActive ? 'text-[#FDE68A]' : 'text-[#F59E0B]'}`}>
                  {pillar.roman}.
                </span>
                <span>{pillar.title.split('&')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card on Alabaster Sandstone Paper */}
        <div className="rounded-3xl bg-white border border-[#E2E8F0] p-8 sm:p-12 shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/25">
                <IconComponent className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] font-mono">
                  Dimension {current.roman}
                </span>
              </div>

              <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-medium text-[#020617] tracking-tight">
                {current.title}
              </h3>
              
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#F59E0B] font-mono">
                {current.tagline}
              </p>

              <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-sans">
                {current.description}
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {current.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1E293B] font-medium font-sans">
                    <CheckCircle className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side educational quote/card */}
            <div className="lg:col-span-5 bg-[#F8FAFC] p-7 sm:p-9 rounded-2xl border border-[#E2E8F0] shadow-xs space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#F59E0B]/5 rounded-full blur-xl pointer-events-none" />
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#F59E0B] font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                Institutional Credo
              </div>
              <blockquote className="text-lg sm:text-xl font-editorial italic text-[#020617] leading-relaxed">
                "An institution is defined not merely by brick and mortar, but by the intellectual vitality, character, and humanity of the students who walk its corridors."
              </blockquote>
              <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs text-[#475569]">
                <span className="font-bold text-[#020617] font-outfit uppercase tracking-wider">Rapid Schools Charter</span>
                <span className="font-mono text-[#F59E0B] text-[11px]">NEP 2020 Aligned</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
