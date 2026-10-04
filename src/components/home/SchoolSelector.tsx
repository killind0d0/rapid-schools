import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, GraduationCap, ArrowRight, Heart, Brain, Users, Award, ShieldCheck, Compass } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const SchoolSelector: React.FC = () => {
  return (
    <section id="school-selector" className="py-20 sm:py-24 bg-[#F8FAFC] border-y border-[#E2E8F0] relative">
      {/* Subtle Ambient Radial Lighting */}
      <div className="absolute top-12 left-10 w-80 h-80 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-80 h-80 bg-[#115E59]/5 rounded-full blur-3xl pointer-events-none" />

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
          <div className="relative rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#F59E0B]/60 shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(189,103,42,0.15)] transition-all duration-300 overflow-hidden flex flex-col group">
            {/* Top Burnished Copper Accent Bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#FDE68A]" />
            
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30 font-mono">
                  <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
                  Junior Wing
                </span>
                <span className="text-xs font-semibold text-[#475569] bg-[#F8FAFC] border border-[#E2E8F0] px-3 py-1 rounded-full">
                  Ages 2.5 to 6 Years
                </span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-medium text-[#020617] group-hover:text-[#F59E0B] transition-colors">
                Rapid <span className="italic font-normal">Dreamz</span>
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] mt-1 font-mono">
                Play Group • Nursery • LKG • UKG • A.P. Colony Campus
              </p>

              <blockquote className="my-5 p-4 rounded-2xl bg-[#F8FAFC] border-l-4 border-[#F59E0B] text-sm italic font-editorial text-[#1E293B] text-base">
                "Little minds. Big beginnings."
              </blockquote>

              <p className="text-sm text-[#334155] leading-relaxed mb-6 font-sans">
                A warm, nurturing sanctuary at Prawanand Path, A.P. Colony, where foundational curiosity flourishes through sensory play, motor skill development, emotional safety, and interactive discovery.
              </p>

              {/* Distinctive Features */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-[#1E293B] font-medium font-sans">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80">
                  <Heart className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>Nurturing Educators</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80">
                  <Brain className="w-4 h-4 text-[#FBBF24] shrink-0" />
                  <span>Sensory Learning</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80">
                  <Users className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>Social Readiness</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80">
                  <ShieldCheck className="w-4 h-4 text-[#0D9488] shrink-0" />
                  <span>Child-Safe Spaces</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center gap-3">
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

          {/* Architectural Card 2: Rapid Shakuntalayan (Class 1 to 12) */}
          <div className="relative rounded-3xl bg-white border border-[#E2E8F0] hover:border-[#115E59]/60 shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(6,78,59,0.15)] transition-all duration-300 overflow-hidden flex flex-col group">
            {/* Top Forest Green Accent Bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#115E59] via-[#0F766E] to-[#2DD4BF]" />
            
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#115E59]/10 text-[#115E59] border border-[#115E59]/30 font-mono">
                  <GraduationCap className="w-3.5 h-3.5 text-[#115E59]" />
                  Pre-Nursery to Class 12
                </span>
                <span className="text-xs font-semibold text-[#0F766E] bg-[#CCFBF1] border border-[#99F6E4] px-3 py-1 rounded-full font-mono">
                  CBSE Affil. 331099
                </span>
              </div>

              <h3 className="font-editorial text-3xl sm:text-4xl font-medium text-[#020617] group-hover:text-[#115E59] transition-colors">
                Rapid <span className="italic font-normal">Shakuntalayan</span> School
              </h3>
              <p className="text-xs font-bold uppercase tracking-wider text-[#115E59] mt-1 font-mono">
                Tekuna Farm Campus, Bodh Gaya Road • Estd. 2014
              </p>

              <blockquote className="my-5 p-4 rounded-2xl bg-[#F0FDFA] border-l-4 border-[#115E59] text-sm italic font-editorial text-[#042F2E] text-base">
                "Love One Another" — Building Minds That Shape Tomorrow
              </blockquote>

              <p className="text-sm text-[#334155] leading-relaxed mb-6 font-sans">
                A premier CBSE-affiliated co-ed institution at Tekuna Farm, BMP-3, Bodh Gaya. Equipping scholars with empirical science laboratories, athletic training, moral fortitude, and leadership.
              </p>

              {/* Distinctive Features */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-[#1E293B] font-medium font-sans">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80">
                  <Award className="w-4 h-4 text-[#115E59] shrink-0" />
                  <span>CBSE Board Affiliated</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80">
                  <Compass className="w-4 h-4 text-[#F59E0B] shrink-0" />
                  <span>Equipped Science & STEM Labs</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80">
                  <Users className="w-4 h-4 text-[#162032] shrink-0" />
                  <span>Dedicated Mentorship</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]/80">
                  <ShieldCheck className="w-4 h-4 text-[#115E59] shrink-0" />
                  <span>Values & Character</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-5 border-t border-[#E2E8F0] flex flex-wrap items-center gap-3">
                <Link
                  to="/shakuntlayan"
                  className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#115E59] to-[#0F766E] hover:from-[#0F766E] hover:to-[#115E59] text-white font-bold text-xs uppercase tracking-wider text-center shadow-[0_4px_18px_-2px_rgba(6,78,59,0.38)] transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Rapid Shakuntlayan</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/shakuntlayan/admissions"
                  className="py-3 px-5 rounded-xl border border-[#115E59]/40 bg-[#115E59]/5 text-[#115E59] hover:bg-[#115E59]/10 font-bold text-xs uppercase tracking-wider text-center transition-colors"
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
