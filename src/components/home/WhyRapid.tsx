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
    title: 'Academic Rigor & Mastery',
    tagline: 'Deep conceptual comprehension over superficial recitation',
    description: 'We prioritize deep conceptual understanding. From early phonetic immersion to higher secondary CBSE board scholarship, our pedagogy encourages analytical reasoning and intellectual curiosity.',
    highlights: [
      'Inquiry-based pedagogy aligned with NEP 2020',
      'Diagnostic assessments with continuous feedback loops',
      'Integrated STEM & empirical laboratory investigations',
      'Dedicated academic mentoring and remedial masterclasses'
    ]
  },
  {
    id: 'individual',
    roman: 'II',
    icon: UserCheck,
    title: 'Individual Attention & Care',
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
    title: 'Beyond the Classroom',
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
    title: 'Future-Ready Intellect',
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
    title: 'Character & Heritage',
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
    <section className="py-20 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Foundational Pillars"
          badgeColor="claret"
          title="The Rapid Educational Philosophy"
          subtitle="Education that balances intellectual excellence with character, curiosity with discipline, and traditional values with modern perspectives."
          align="center"
        />

        {/* Tab Selector Buttons with Roman Numerals */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isActive = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => setActivePillar(pillar.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#3D0B12] text-[#E8955A] shadow-md border border-[#BD672A]/40 scale-105'
                    : 'bg-[#EDE4D5]/80 text-[#432C2E] hover:bg-[#E5DCD0] border border-[#DDD3C2]'
                }`}
              >
                <span className={`font-serif italic font-bold text-xs ${isActive ? 'text-[#E8955A]' : 'text-[#8C7678]'}`}>
                  {pillar.roman}.
                </span>
                <span>{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Pillar Card */}
        <div className="rounded-3xl bg-[#FCFAF6] border border-[#E6DDCF] p-8 sm:p-12 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 p-2.5 rounded-xl bg-[#5A121E]/10 text-[#5A121E] border border-[#5A121E]/20">
                <IconComponent className="w-5 h-5 text-[#5A121E]" />
                <span className="text-[11px] font-bold uppercase tracking-widest font-mono">
                  Dimension {current.roman}
                </span>
              </div>

              <h3 className="font-outfit text-2xl sm:text-3xl font-extrabold text-[#291B1D]">
                {current.title}
              </h3>
              
              <p className="text-sm sm:text-base font-semibold text-[#BD672A]">
                {current.tagline}
              </p>

              <p className="text-sm sm:text-base text-[#5C494A] leading-relaxed">
                {current.description}
              </p>

              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {current.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#432C2E] font-medium">
                    <CheckCircle className="w-4 h-4 text-[#064E3B] shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side educational quote/card */}
            <div className="lg:col-span-5 bg-[#FAF6F0] p-6 sm:p-8 rounded-2xl border border-[#E8DFD0] shadow-xs space-y-4">
              <div className="text-[11px] font-bold uppercase tracking-widest text-[#8C7678] font-mono">
                Institutional Credo
              </div>
              <p className="text-base font-serif italic text-[#331E20] leading-relaxed">
                "An institution is defined not merely by brick and mortar, but by the intellectual vitality, character, and humanity of the students who walk its corridors."
              </p>
              <div className="pt-3 border-t border-[#E8DFD0] flex items-center justify-between text-xs text-[#7A6765]">
                <span className="font-bold text-[#432C2E]">Rapid Schools Charter</span>
                <span>NEP Aligned</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
