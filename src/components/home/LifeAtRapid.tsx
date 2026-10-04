import React from 'react';
import { BookOpen, Palette, Activity, Trophy, Compass, HeartHandshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeading } from '../common/SectionHeading';

const experiences = [
  {
    tag: 'LEARN',
    title: 'Academic Discovery',
    icon: BookOpen,
    description: 'Immersive inquiry-led classrooms, scientific investigations, and literature reading circles nurturing lifelong scholars.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80'
  },
  {
    tag: 'CREATE',
    title: 'Arts & Creative Expression',
    icon: Palette,
    description: 'Visual arts studios, music ensembles, theatrical dramatics, and pottery workshops fostering individual voice.',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80'
  },
  {
    tag: 'PLAY',
    title: 'Sports & Vitality',
    icon: Activity,
    description: 'Track athletics, cricket, football, basketball, yoga, and gymnastics for physical grit, agility, and motor coordination.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80'
  },
  {
    tag: 'COMPETE',
    title: 'Challenges & Contests',
    icon: Trophy,
    description: 'Science Olympiads, inter-house quizzes, national debates, and coding hackathons testing resilience and team spirit.',
    image: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=600&q=80'
  },
  {
    tag: 'LEAD',
    title: 'Leadership & Voice',
    icon: Compass,
    description: 'Prefectorial councils, editorial boards, student clubs, and event organizing committees building real leadership acumen.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80'
  },
  {
    tag: 'SERVE',
    title: 'Community & Stewardship',
    icon: HeartHandshake,
    description: 'Social outreach, environmental tree plantation drives, literacy volunteering, and neighborhood service initiatives.',
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=600&q=80'
  }
];

export const LifeAtRapid: React.FC = () => {
  return (
    <section className="py-20 bg-[#24060B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Holistic Development"
          badgeColor="copper"
          title="Six Dimensions of Student Life"
          subtitle="Education transcends textbooks. Our six-dimensional student development model ensures every learner develops intellectual, artistic, athletic, and humanitarian strengths."
          align="center"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="group rounded-3xl bg-[#340910] border border-[#52121C] hover:border-[#BD672A]/70 overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Image Header with Tag Badge */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#340910] via-[#340910]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black tracking-widest bg-[#200408]/85 backdrop-blur-md text-[#E8955A] border border-[#BD672A]/40 uppercase font-mono">
                      <Icon className="w-3.5 h-3.5" />
                      {exp.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-outfit text-xl font-bold text-white group-hover:text-[#FDBA74] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D4C3B4] mt-2 leading-relaxed flex-1">
                    {exp.description}
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-[#4A101A] flex items-center justify-between text-xs font-semibold text-[#D47A3B] group-hover:text-[#E8955A]">
                    <span>Explore Dimension</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#3D0B12] hover:bg-[#52121C] text-[#E8955A] font-bold text-xs uppercase tracking-wider border border-[#5E1722] hover:border-[#BD672A] transition-all shadow-sm"
          >
            <span>View Campus Photo Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
