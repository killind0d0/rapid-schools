import React from 'react';
import { Palette, MessageCircle, Activity, Users, Compass, Eye } from 'lucide-react';

const pillars = [
  {
    title: 'Creativity',
    icon: Palette,
    color: 'bg-rose-50 text-rose-700 border-rose-200',
    description: 'Imaginative open-ended art, music, dramatic pretend play, and sensory crafts enabling children to express their inner thoughts without rigid right-or-wrong boundaries.'
  },
  {
    title: 'Communication',
    icon: MessageCircle,
    color: 'bg-blue-50 text-blue-700 border-blue-200',
    description: 'Active vocabulary expansion through phonics songs, interactive storytelling, questioning circles, and receptive listening games.'
  },
  {
    title: 'Motor Skills',
    icon: Activity,
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    description: 'Fine motor dexterity through playdough sculpting and threading, paired with gross motor confidence via soft obstacle courses, balance beams, and climbing.'
  },
  {
    title: 'Social Development',
    icon: Users,
    color: 'bg-amber-50 text-amber-700 border-amber-200',
    description: 'Learning empathy, collaborative sharing, turn-taking, conflict resolution, and self-regulation in emotionally safe group settings.'
  },
  {
    title: 'Curiosity',
    icon: Eye,
    color: 'bg-purple-50 text-purple-700 border-purple-200',
    description: 'Encouraging "why?" and "what if?" questions. Daily investigation tables exploring magnets, water floatation, natural textures, and living plants.'
  },
  {
    title: 'Exploration',
    icon: Compass,
    color: 'bg-teal-50 text-teal-700 border-teal-200',
    description: 'Guided discovery walks in safe garden courtyards, tactile sandpits, and sensory stations nurturing environmental awareness and keen observation.'
  }
];

export const PlayApproach: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {pillars.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col"
          >
            <div className={`w-12 h-12 rounded-xl ${item.color} border flex items-center justify-center mb-4`}>
              <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">
              {item.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
};
