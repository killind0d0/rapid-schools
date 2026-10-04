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
    <section className="py-20 sm:py-24 bg-[#1C0306] text-white relative overflow-hidden">
      {/* Layered Ambient Mesh */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-[#BD672A]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-[#3D0B12]/40 rounded-full blur-[100px] pointer-events-none" />

      {/* Hairline Divider Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BD672A]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Holistic Development"
          badgeColor="copper"
          title="Six Dimensions of Student Life"
          subtitle="Education transcends textbooks. Our six-dimensional development model balances intellectual inquiry with artistic vitality, athletic endurance, and noble character."
          align="center"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div
                key={index}
                className="group rounded-3xl luxury-glass-dark hover:border-[#BD672A]/60 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col"
              >
                {/* Image Header with Tag Badge */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2C070C] via-[#2C070C]/40 to-transparent" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] bg-[#1C0306]/90 backdrop-blur-md text-[#F3C292] border border-[#BD672A]/40 uppercase font-mono shadow-md">
                      <Icon className="w-3 h-3 text-[#BD672A]" />
                      {exp.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col">
                  <h3 className="font-editorial text-2xl font-medium text-white group-hover:text-[#F3C292] transition-colors tracking-tight">
                    {exp.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#D8C7B8] mt-2 leading-relaxed font-sans flex-1">
                    {exp.description}
                  </p>
                  
                  <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-[#F3C292] group-hover:text-white transition-colors">
                    <span className="uppercase tracking-wider text-[11px]">Explore Dimension</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/gallery"
            className="luxury-btn-outline inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all"
          >
            <span>View Campus Photo Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
