import React from 'react';
import { Sun, Users, BookOpen, Smile, Apple, Palette, Sparkles } from 'lucide-react';

const schedule = [
  {
    time: '08:45 – 09:15 AM',
    title: 'Warm Arrival & Morning Circle',
    description: 'Gentle greeting by educators, soft acoustic music, greeting rhymes, and emotional temperature check to ease the child into the school day.',
    icon: Sun,
    color: 'bg-amber-100 text-amber-700'
  },
  {
    time: '09:15 – 10:15 AM',
    title: 'Foundational Learning & Literacy Games',
    description: 'Phonics discovery, interactive storytelling, number sense games with tactile counting blocks, and vocabulary building.',
    icon: BookOpen,
    color: 'bg-blue-100 text-blue-700'
  },
  {
    time: '10:15 – 10:45 AM',
    title: 'Sensory & Motor Skill Exploration',
    description: 'Sand play, clay modeling, water pouring activities, bead threading, and soft obstacle courses that develop fine and gross motor dexterity.',
    icon: Smile,
    color: 'bg-emerald-100 text-emerald-700'
  },
  {
    time: '10:45 – 11:15 AM',
    title: 'Nutritious Snack & Table Etiquette',
    description: 'Supervised mealtime encouraging healthy eating habits, hand hygiene, table manners, and warm conversational sharing with peers.',
    icon: Apple,
    color: 'bg-rose-100 text-rose-700'
  },
  {
    time: '11:15 – 12:15 PM',
    title: 'Creative Arts, Music & Movement',
    description: 'Finger painting, rhythm sticks, puppet theater, dance rhymes, and unstructured imaginative play in themed roleplay zones.',
    icon: Palette,
    color: 'bg-purple-100 text-purple-700'
  },
  {
    time: '12:15 – 12:45 PM',
    title: 'Reflection Story & Warm Farewell',
    description: 'Winding-down circle, story reading with moral reflection, packing personal belongings, and structured safe handoff to authorized guardians.',
    icon: Sparkles,
    color: 'bg-amber-100 text-amber-700'
  }
];

export const DayTimeline: React.FC = () => {
  return (
    <div className="relative border-l-2 border-amber-300 ml-4 sm:ml-8 space-y-8 py-4">
      {schedule.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="relative pl-6 sm:pl-8 group">
            {/* Timeline dot */}
            <div className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full ${item.color} border-2 border-white shadow flex items-center justify-center`}>
              <Icon className="w-4 h-4" />
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm group-hover:border-amber-300 group-hover:shadow-md transition-all">
              <span className="text-xs font-bold text-amber-600 uppercase tracking-wider block mb-1">
                {item.time}
              </span>
              <h4 className="font-outfit text-base sm:text-lg font-bold text-slate-900">
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
