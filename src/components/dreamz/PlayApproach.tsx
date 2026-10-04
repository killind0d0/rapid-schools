import React, { useState } from 'react';
import { Palette, MessageCircle, Activity, Users, Sparkles, Sprout, ArrowUpRight } from 'lucide-react';

interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  colorScheme: {
    bg: string;
    border: string;
    iconBg: string;
    iconColor: string;
    tagBg: string;
    tagColor: string;
  };
  description: string;
  keyPractices: string[];
}

const pillars: Pillar[] = [
  {
    id: 'sensory',
    title: 'Sensory & Tactile Wonder',
    subtitle: 'Montessori Sensorial Method',
    icon: Sparkles,
    tag: 'Tactile Materials',
    colorScheme: {
      bg: 'bg-[#FCF8F3]',
      border: 'border-[#F0DEC8]',
      iconBg: 'bg-[#FFEDD5]',
      iconColor: 'text-[#B43B0E]',
      tagBg: 'bg-[#FFF7ED]',
      tagColor: 'text-[#C2410C]'
    },
    description: 'Children explore size, weight, texture, and geometry using handcrafted wooden cylinders, graded color tablets, and natural organic materials that refine sensory discernment.',
    keyPractices: ['Pink tower & knobbed cylinders', 'Fabric & tactile grain matching', 'Sound cylinder exploration']
  },
  {
    id: 'phonics',
    title: 'Phonemic & Expressive Speech',
    subtitle: 'Multi-Sensory Jolly Phonics',
    icon: MessageCircle,
    tag: 'Language Art',
    colorScheme: {
      bg: 'bg-[#FCF8F3]',
      border: 'border-[#F0DEC8]',
      iconBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#166534]',
      tagBg: 'bg-[#F0FDF4]',
      tagColor: 'text-[#15803D]'
    },
    description: 'Letter sounds introduced through tactile sandpaper tracing, kinetic body actions, melodic rhymes, and interactive reading corners that awaken a genuine love for storytelling.',
    keyPractices: ['Sandpaper letter tracing', 'Story basket dramatization', 'Daily conversational circle']
  },
  {
    id: 'motor',
    title: 'Fine & Gross Motor Grace',
    subtitle: 'Kinesthetic Mastery',
    icon: Activity,
    tag: 'Physical Grace',
    colorScheme: {
      bg: 'bg-[#FCF8F3]',
      border: 'border-[#F0DEC8]',
      iconBg: 'bg-[#FFEDD5]',
      iconColor: 'text-[#9A3412]',
      tagBg: 'bg-[#FFF7ED]',
      tagColor: 'text-[#C2410C]'
    },
    description: 'Precision pincer grasp developed through clay molding and bead threading; full-body balance built across softly padded stepping paths, timber balance beams, and climbing tunnels.',
    keyPractices: ['Clay sculpting & threading', 'Balance beam navigation', 'Gentle yoga & coordination games']
  },
  {
    id: 'social',
    title: 'Nurturing Social Empathy',
    subtitle: 'Emotional Scaffolding',
    icon: Users,
    tag: 'Community Life',
    colorScheme: {
      bg: 'bg-[#FCF8F3]',
      border: 'border-[#F0DEC8]',
      iconBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#166534]',
      tagBg: 'bg-[#F0FDF4]',
      tagColor: 'text-[#15803D]'
    },
    description: 'Children practice graceful courtesies, empathetic sharing, cooperative play, and non-verbal emotion recognition in a calm, predictably loving environment.',
    keyPractices: ['Morning greeting ritual', 'Shared fruit & water etiquette', 'Peer problem-solving guidance']
  },
  {
    id: 'nature',
    title: 'Botanical & Science Wonder',
    subtitle: 'Reggio Nature Table',
    icon: Sprout,
    tag: 'Living World',
    colorScheme: {
      bg: 'bg-[#FCF8F3]',
      border: 'border-[#F0DEC8]',
      iconBg: 'bg-[#DCFCE7]',
      iconColor: 'text-[#166534]',
      tagBg: 'bg-[#F0FDF4]',
      tagColor: 'text-[#15803D]'
    },
    description: 'Daily encounters with the living world: planting organic herb pots, studying botanical seed varieties under child-safe magnifying loupes, and observing seasonal weather shifts.',
    keyPractices: ['Sensory garden nurturing', 'Floating & water flow basins', 'Magnifier discovery stations']
  },
  {
    id: 'atelier',
    title: 'Creative Atelier & Rhythm',
    subtitle: 'Open-Ended Expression',
    icon: Palette,
    tag: 'Aesthetic Joy',
    colorScheme: {
      bg: 'bg-[#FCF8F3]',
      border: 'border-[#F0DEC8]',
      iconBg: 'bg-[#FFEDD5]',
      iconColor: 'text-[#B43B0E]',
      tagBg: 'bg-[#FFF7ED]',
      tagColor: 'text-[#C2410C]'
    },
    description: 'Unfettered creative release through natural earth pigment finger paints, beeswax modeling, acoustic rhythm chimes, and spontaneous imaginative dressing-up theatres.',
    keyPractices: ['Natural earth pigments', 'Bilingual folk rhymes', 'Imaginative costume corner']
  }
];

export const PlayApproach: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
      {pillars.map((item) => {
        const Icon = item.icon;
        const isHovered = activeCard === item.id;

        return (
          <div
            key={item.id}
            onMouseEnter={() => setActiveCard(item.id)}
            onMouseLeave={() => setActiveCard(null)}
            className={`group relative rounded-3xl p-6 sm:p-7 ${item.colorScheme.bg} border ${item.colorScheme.border} transition-all duration-300 flex flex-col justify-between ${
              isHovered
                ? 'shadow-[0_20px_35px_-10px_rgba(180,59,14,0.12)] border-[#FB923C]/70 -translate-y-1'
                : 'shadow-[0_4px_20px_-4px_rgba(180,59,14,0.04)] hover:border-[#FB923C]/40'
            }`}
          >
            {/* Top Row: Icon + Badge */}
            <div>
              <div className="flex items-center justify-between mb-5">
                <div
                  className={`w-13 h-13 rounded-2xl ${item.colorScheme.iconBg} ${item.colorScheme.iconColor} flex items-center justify-center shadow-xs border border-white/60 transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <span
                  className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${item.colorScheme.tagBg} ${item.colorScheme.tagColor} border border-current/20`}
                >
                  {item.tag}
                </span>
              </div>

              {/* Headings */}
              <span className="block text-[11px] font-semibold text-[#8C2C07] tracking-wider uppercase mb-1">
                {item.subtitle}
              </span>
              <h3 className="font-editorial text-2xl font-bold text-[#2A1208] leading-tight mb-3">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed mb-5 font-normal">
                {item.description}
              </p>
            </div>

            {/* Micro-interaction: Key practices badge list */}
            <div className="pt-4 border-t border-[#F0DEC8]/70">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#8C2C07] mb-2">
                Curated Experiences:
              </div>
              <ul className="space-y-1.5">
                {item.keyPractices.map((practice, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-xs text-[#4A2E20]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FB923C]" />
                    <span>{practice}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};
