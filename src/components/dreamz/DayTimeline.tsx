import React from 'react';
import { Sun, Sparkles, Apple, BookOpen, Compass, HeartHandshake } from 'lucide-react';

interface TimelineEvent {
  time: string;
  phase: string;
  title: string;
  description: string;
  focus: string;
  icon: React.ComponentType<{ className?: string }>;
}

const schedule: TimelineEvent[] = [
  {
    time: '08:30 – 09:00 AM',
    phase: 'Morning Reception',
    title: 'Welcoming Hearth & Emotional Check-in',
    description: 'Each child is greeted by name at eye level with gentle warmth. Calming acoustic harmony plays as children independently place belongings into personal wooden cubbies.',
    focus: 'Separation security, autonomy & predictable routine',
    icon: Sun
  },
  {
    time: '09:00 – 10:00 AM',
    phase: 'Cognitive Focus',
    title: 'Montessori Sensorial Work Cycle',
    description: 'Uninterrupted exploration where children self-select developmental materials: knobbed cylinder blocks, color tablets, sandpaper numeral tracing, and tactile counting trays.',
    focus: 'Concentration, self-correction & intrinsic focus',
    icon: Sparkles
  },
  {
    time: '10:00 – 10:30 AM',
    phase: 'Nourishment & Grace',
    title: 'Mindful Snack & Table Etiquette',
    description: 'Children learn to pour their own water from low pitchers, peel fruit slices, share conversation gracefully, and tidy napkins into porcelain receptacles.',
    focus: 'Practical life motor skills, hygiene & social courtesies',
    icon: Apple
  },
  {
    time: '10:30 – 11:15 AM',
    phase: 'Language & Sound',
    title: 'Jolly Phonics & Linguistic Rhythms',
    description: 'Multi-sensory phonetic adventures featuring acoustic story cards, song gestures, interactive big books, puppet roleplays, and expressive vocabulary circles.',
    focus: 'Phonemic awareness, articulation & narrative imagination',
    icon: BookOpen
  },
  {
    time: '11:15 – 12:00 PM',
    phase: 'Kinesthetic Nature',
    title: 'Sensory Garden & Motor Agility',
    description: 'Outdoor discovery in shaded herb garden courtyards, soft-landing balance logs, tactile pebble walking lanes, and cooperative tricycle coordination tracks.',
    focus: 'Gross motor balance, vestibular health & environmental wonder',
    icon: Compass
  },
  {
    time: '12:00 – 12:30 PM',
    phase: 'Gratitude & Departure',
    title: 'Creative Atelier & Safe Handoff',
    description: 'Winding down with beeswax sculpting, soft watercolour washes, a reflection song of gratitude, followed by strict authorized-guardian biometric handoff.',
    focus: 'Creative closure, peaceful transition & verified safety',
    icon: HeartHandshake
  }
];

export const DayTimeline: React.FC = () => {
  return (
    <div className="relative pl-6 sm:pl-10 ml-2 sm:ml-4 border-l-2 border-dashed border-[#FCD34D]/80 space-y-7 py-3">
      {schedule.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="relative group">
            {/* Glowing Chronological Amber Node */}
            <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-[#FDE68A] to-[#FBBF24] ring-4 ring-[#FFFBEB] shadow-[0_0_16px_rgba(245,158,11,0.35)] flex items-center justify-center text-[#78350F] transition-transform duration-300 group-hover:scale-110">
              <Icon className="w-4 h-4" />
            </div>

            {/* Chronicle Card */}
            <div className="bg-[#F8FAFC] border border-[#FEF3C7] rounded-3xl p-5 sm:p-6 shadow-[0_4px_20px_-4px_rgba(180,83,9,0.05)] hover:border-[#FBBF24]/50 hover:shadow-[0_12px_28px_-6px_rgba(180,83,9,0.1)] transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                  {item.time}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#0F766E] bg-[#CCFBF1] px-2.5 py-0.5 rounded-full border border-[#5EEAD4]/60 font-sans">
                  {item.phase}
                </span>
              </div>

              <h4 className="font-editorial text-xl sm:text-2xl font-bold text-[#451A03] leading-tight mb-2">
                {item.title}
              </h4>

              <p className="text-xs sm:text-sm text-[#78350F] leading-relaxed mb-3 font-normal">
                {item.description}
              </p>

              <div className="pt-2.5 border-t border-[#FEF3C7]/70 flex items-center gap-2 text-[11px] sm:text-xs text-[#92400E] font-medium">
                <span className="font-bold uppercase tracking-wider text-[#B45309]">Developmental Goal:</span>
                <span className="text-[#451A03]">{item.focus}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
