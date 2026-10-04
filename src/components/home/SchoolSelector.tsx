import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, GraduationCap, ArrowRight, Heart, Brain, Users, Award, ShieldCheck, Compass } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const SchoolSelector: React.FC = () => {
  return (
    <section id="school-selector" className="py-20 bg-[#F6F1E7]/70 border-y border-[#E6DDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Two Wings • One Vision"
          badgeColor="copper"
          title="Find the Right Rapid School"
          subtitle="Specialized educational environments designed for specific developmental stages. Choose the wing tailored to your child."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Rapid Dreamz */}
          <div className="relative rounded-3xl bg-[#FCFAF6] border border-[#E8955A]/40 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
            {/* Top Color Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-[#EA580C] via-[#F97316] to-[#FED7AA]" />
            
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#FFEDD5] text-[#C2410C] border border-[#FDBA74]">
                  <Sparkles className="w-3.5 h-3.5 text-[#EA580C]" />
                  Junior Wing
                </span>
                <span className="text-xs font-semibold text-[#7A6765] bg-[#EFE8DD] px-3 py-1 rounded-full">
                  Ages 2.5 to 6 Years
                </span>
              </div>

              <h3 className="font-outfit text-3xl font-extrabold text-[#291B1D] group-hover:text-[#C2410C] transition-colors">
                Rapid Dreamz
              </h3>
              <p className="text-sm font-semibold text-[#EA580C] mt-1">
                Play Group • Nursery • LKG • UKG
              </p>

              <blockquote className="my-5 p-3.5 rounded-xl bg-[#FFF7ED] border-l-4 border-[#EA580C] text-sm italic font-editorial text-[#432C2E] text-base">
                "Little minds. Big beginnings."
              </blockquote>

              <p className="text-sm text-[#5C494A] leading-relaxed mb-6">
                A warm, playful, and nurturing sanctuary where foundational curiosity flourishes through sensory play, motor skill development, emotional safety, and interactive discovery.
              </p>

              {/* Distinctive Features */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-[#432C2E] font-medium">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F6F1E7]/80 border border-[#E8DFD0]">
                  <Heart className="w-4 h-4 text-[#E11D48] shrink-0" />
                  <span>Nurturing Educators</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F6F1E7]/80 border border-[#E8DFD0]">
                  <Brain className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>Sensory Learning</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F6F1E7]/80 border border-[#E8DFD0]">
                  <Users className="w-4 h-4 text-[#15803D] shrink-0" />
                  <span>Gentle Socialization</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F6F1E7]/80 border border-[#E8DFD0]">
                  <ShieldCheck className="w-4 h-4 text-[#047857] shrink-0" />
                  <span>Child-Proof Play Spaces</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-4 border-t border-[#E8DFD0] flex flex-wrap items-center gap-3">
                <Link
                  to="/dreamz"
                  className="flex-1 py-3 px-5 rounded-xl bg-[#C2410C] hover:bg-[#9A3412] text-white font-bold text-xs uppercase tracking-wider text-center shadow-xs transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Rapid Dreamz</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/dreamz/admissions"
                  className="py-3 px-5 rounded-xl bg-[#EFE8DD] hover:bg-[#E5DCD0] text-[#3D2C2E] font-bold text-xs uppercase tracking-wider text-center transition-colors"
                >
                  Admissions
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Rapid Shakuntlayan */}
          <div className="relative rounded-3xl bg-[#FCFAF6] border border-[#064E3B]/40 shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
            {/* Top Color Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-[#064E3B] via-[#047857] to-[#34D399]" />
            
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#ECFDF5] text-[#064E3B] border border-[#A7F3D0]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#064E3B]" />
                  Class 1 to 12
                </span>
                <span className="text-xs font-semibold text-[#7A6765] bg-[#EFE8DD] px-3 py-1 rounded-full">
                  Primary to Senior Secondary
                </span>
              </div>

              <h3 className="font-outfit text-3xl font-extrabold text-[#291B1D] group-hover:text-[#064E3B] transition-colors">
                Rapid Shakuntlayan
              </h3>
              <p className="text-sm font-semibold text-[#064E3B] mt-1">
                Affiliated to CBSE, New Delhi
              </p>

              <blockquote className="my-5 p-3.5 rounded-xl bg-[#ECFDF5]/60 border-l-4 border-[#064E3B] text-sm italic font-editorial text-[#432C2E] text-base">
                "Building minds that shape tomorrow."
              </blockquote>

              <p className="text-sm text-[#5C494A] leading-relaxed mb-6">
                An academically disciplined, progressive environment equipping students with critical thinking, scientific inquiry, moral fortitude, and leadership capabilities for competitive horizons.
              </p>

              {/* Distinctive Features */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-[#432C2E] font-medium">
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F6F1E7]/80 border border-[#E8DFD0]">
                  <Award className="w-4 h-4 text-[#064E3B] shrink-0" />
                  <span>Rigorous CBSE Curriculum</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F6F1E7]/80 border border-[#E8DFD0]">
                  <Compass className="w-4 h-4 text-[#D97706] shrink-0" />
                  <span>STEM & Science Labs</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F6F1E7]/80 border border-[#E8DFD0]">
                  <Users className="w-4 h-4 text-[#5A121E] shrink-0" />
                  <span>Leadership & Debating</span>
                </div>
                <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F6F1E7]/80 border border-[#E8DFD0]">
                  <ShieldCheck className="w-4 h-4 text-[#047857] shrink-0" />
                  <span>Values & Discipline</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-4 border-t border-[#E8DFD0] flex flex-wrap items-center gap-3">
                <Link
                  to="/shakuntlayan"
                  className="flex-1 py-3 px-5 rounded-xl bg-[#064E3B] hover:bg-[#022C22] text-white font-bold text-xs uppercase tracking-wider text-center shadow-xs transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Rapid Shakuntlayan</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/shakuntlayan/admissions"
                  className="py-3 px-5 rounded-xl bg-[#EFE8DD] hover:bg-[#E5DCD0] text-[#3D2C2E] font-bold text-xs uppercase tracking-wider text-center transition-colors"
                >
                  Admissions
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
