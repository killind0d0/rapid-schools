import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, GraduationCap, ArrowRight, Heart, Brain, Users, Award, ShieldCheck, Compass } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const SchoolSelector: React.FC = () => {
  return (
    <section id="school-selector" className="py-20 sm:py-24 bg-[#FAF6F0] border-y border-[#E8DFD1] relative">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-12 left-10 w-80 h-80 bg-[#BD672A]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-80 h-80 bg-[#064E3B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge="Two Wings • One Unified Vision"
          badgeColor="copper"
          title="Find the Right Rapid School"
          subtitle="Specialized educational environments designed for distinct developmental stages. Choose the division tailored to your child's journey."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Architectural Card 1: Rapid Dreamz (Junior Wing) */}
          <div className="relative rounded-3xl bg-white border border-[#E8DFD1] hover:border-[#BD672A]/60 shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(189,103,42,0.15)] transition-all duration-300 overflow-hidden flex flex-col group">
            {/* Top Burnished Copper Accent Bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#BD672A] via-[#D47A3B] to-[#F3C292]" />
            
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#BD672A]/10 text-[#BD672A] border border-[#BD672A]/30 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-[#BD672A]" />
                  Junior Wing
                </span>
                <span className="text-xs font-semibold text-[#6E5D5F] bg-[#FCFAF6] border border-[#E8DFD1] px-3 py-1 rounded-full">
                  Ages 2.5 to 6 Years
                </span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-medium text-[#23070B] group-hover:text-[#BD672A] transition-colors">
                Rapid <span className="italic font-normal">Dreamz</span>
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#BD672A] mt-1 font-mono">
                Play Group • Nursery • LKG • UKG
              </p>

              <blockquote className="my-5 p-4 rounded-2xl bg-[#FCFAF6] border-l-4 border-[#BD672A] text-sm italic font-editorial text-[#423738] text-base">
                "Little minds. Big beginnings."
              </blockquote>

              <p className="text-sm text-[#5C4E50] leading-relaxed mb-6 font-sans">
                A warm, nurturing sanctuary where foundational curiosity flourishes through sensory play, motor skill development, emotional safety, and interactive discovery.
              </p>

              {/* Distinctive Features */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-[#423738] font-medium font-sans">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FCFAF6] border border-[#E8DFD1]/80">
                  <Heart className="w-4 h-4 text-[#BD672A] shrink-0" />
                  <span>Nurturing Educators</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FCFAF6] border border-[#E8DFD1]/80">
                  <Brain className="w-4 h-4 text-[#D47A3B] shrink-0" />
                  <span>Sensory Learning</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FCFAF6] border border-[#E8DFD1]/80">
                  <Users className="w-4 h-4 text-[#BD672A] shrink-0" />
                  <span>Social Readiness</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FCFAF6] border border-[#E8DFD1]/80">
                  <ShieldCheck className="w-4 h-4 text-[#047857] shrink-0" />
                  <span>Child-Safe Spaces</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-5 border-t border-[#E8DFD1] flex flex-wrap items-center gap-3">
                <Link
                  to="/dreamz"
                  className="flex-1 luxury-btn-primary py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Rapid Dreamz</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/dreamz/admissions"
                  className="luxury-btn-outline py-3 px-5 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-colors"
                >
                  Admissions
                </Link>
              </div>
            </div>
          </div>

          {/* Architectural Card 2: Rapid Shakuntlayan (Class 1 to 12) */}
          <div className="relative rounded-3xl bg-white border border-[#E8DFD1] hover:border-[#064E3B]/60 shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(6,78,59,0.15)] transition-all duration-300 overflow-hidden flex flex-col group">
            {/* Top Forest Green Accent Bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#064E3B] via-[#0D654E] to-[#34D399]" />
            
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#064E3B]/10 text-[#064E3B] border border-[#064E3B]/30 font-mono">
                  <GraduationCap className="w-3.5 h-3.5 text-[#064E3B]" />
                  Class 1 to 12
                </span>
                <span className="text-xs font-semibold text-[#6E5D5F] bg-[#FCFAF6] border border-[#E8DFD1] px-3 py-1 rounded-full">
                  Primary to Senior Secondary
                </span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-medium text-[#23070B] group-hover:text-[#064E3B] transition-colors">
                Rapid <span className="italic font-normal">Shakuntlayan</span>
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#064E3B] mt-1 font-mono">
                Affiliated to CBSE, New Delhi
              </p>

              <blockquote className="my-5 p-4 rounded-2xl bg-[#FCFAF6] border-l-4 border-[#064E3B] text-sm italic font-editorial text-[#423738] text-base">
                "Building minds that shape tomorrow."
              </blockquote>

              <p className="text-sm text-[#5C4E50] leading-relaxed mb-6 font-sans">
                An academically disciplined, progressive environment equipping students with critical inquiry, scientific rigor, moral fortitude, and leadership for competitive horizons.
              </p>

              {/* Distinctive Features */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-[#423738] font-medium font-sans">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FCFAF6] border border-[#E8DFD1]/80">
                  <Award className="w-4 h-4 text-[#064E3B] shrink-0" />
                  <span>CBSE Curriculum</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FCFAF6] border border-[#E8DFD1]/80">
                  <Compass className="w-4 h-4 text-[#BD672A] shrink-0" />
                  <span>STEM & Science Labs</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FCFAF6] border border-[#E8DFD1]/80">
                  <Users className="w-4 h-4 text-[#3D0B12] shrink-0" />
                  <span>Leadership & Debating</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FCFAF6] border border-[#E8DFD1]/80">
                  <ShieldCheck className="w-4 h-4 text-[#064E3B] shrink-0" />
                  <span>Values & Discipline</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-5 border-t border-[#E8DFD1] flex flex-wrap items-center gap-3">
                <Link
                  to="/shakuntlayan"
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#064E3B] to-[#0D654E] hover:from-[#085a44] hover:to-[#064E3B] text-white font-bold text-xs uppercase tracking-wider text-center shadow-[0_4px_18px_-2px_rgba(6,78,59,0.38)] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Rapid Shakuntlayan</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/shakuntlayan/admissions"
                  className="py-3 px-5 rounded-xl border border-[#064E3B]/40 bg-[#064E3B]/5 text-[#064E3B] hover:bg-[#064E3B]/10 font-bold text-xs uppercase tracking-wider text-center transition-colors"
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
