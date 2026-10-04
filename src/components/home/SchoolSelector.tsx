import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, GraduationCap, ArrowRight, Heart, Brain, Users, Award, ShieldCheck, Compass } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

export const SchoolSelector: React.FC = () => {
  return (
    <section id="school-selector" className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Educational Pathway"
          badgeColor="gold"
          title="Find the Right Rapid School"
          subtitle="Two specialized institutions, one shared philosophy of excellence. Choose the wing tailored to your child's age and developmental stage."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Rapid Dreamz */}
          <div className="relative rounded-3xl bg-white border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
            {/* Top Color Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500" />
            
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200">
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  Junior Wing
                </span>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  Ages 2.5 to 6 Years
                </span>
              </div>

              <h3 className="font-outfit text-3xl font-extrabold text-slate-900 group-hover:text-amber-700 transition-colors">
                Rapid Dreamz
              </h3>
              <p className="text-sm font-semibold text-amber-600 mt-1">
                Play Group • Nursery • LKG • UKG
              </p>

              <blockquote className="my-5 p-3.5 rounded-xl bg-amber-50/60 border-l-4 border-amber-500 text-sm italic text-slate-700">
                "Little minds. Big beginnings."
              </blockquote>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                A warm, playful, and nurturing sanctuary where foundational curiosity flourishes through sensory play, motor skill development, emotional safety, and interactive discovery.
              </p>

              {/* Distinctive Features */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                  <Heart className="w-4 h-4 text-rose-500 shrink-0" />
                  <span>Nurturing Child Care</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                  <Brain className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Sensory Learning</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                  <Users className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Gentle Socialization</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Child-Proof Play Spaces</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <Link
                  to="/dreamz"
                  className="flex-1 py-3 px-5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider text-center shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Rapid Dreamz</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/dreamz/admissions"
                  className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider text-center transition-colors"
                >
                  Admissions
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: Rapid Shakuntlayan */}
          <div className="relative rounded-3xl bg-white border border-blue-200/80 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
            {/* Top Color Accent Bar */}
            <div className="h-2 bg-gradient-to-r from-blue-700 via-blue-900 to-indigo-800" />
            
            <div className="p-8 sm:p-10 flex-1 flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-900 border border-blue-200">
                  <GraduationCap className="w-3.5 h-3.5 text-blue-900" />
                  Primary & Secondary Wing
                </span>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  Class 1 to Class 12
                </span>
              </div>

              <h3 className="font-outfit text-3xl font-extrabold text-slate-900 group-hover:text-blue-950 transition-colors">
                Rapid Shakuntlayan
              </h3>
              <p className="text-sm font-semibold text-blue-900 mt-1">
                Affiliated to CBSE, New Delhi
              </p>

              <blockquote className="my-5 p-3.5 rounded-xl bg-blue-50/60 border-l-4 border-blue-900 text-sm italic text-slate-700">
                "Building minds that shape tomorrow."
              </blockquote>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                An academically disciplined, progressive environment equipping students with critical thinking, scientific inquiry, moral fortitude, and leadership capabilities for competitive horizons.
              </p>

              {/* Distinctive Features */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-xs text-slate-700 font-medium">
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                  <Award className="w-4 h-4 text-blue-900 shrink-0" />
                  <span>Rigorous CBSE Curriculum</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                  <Compass className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>STEM & Science Labs</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                  <Users className="w-4 h-4 text-indigo-700 shrink-0" />
                  <span>Leadership & Debating</span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50">
                  <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0" />
                  <span>Values & Discipline</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                <Link
                  to="/shakuntlayan"
                  className="flex-1 py-3 px-5 rounded-xl bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider text-center shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 group/btn"
                >
                  <span>Explore Rapid Shakuntlayan</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/shakuntlayan/admissions"
                  className="py-3 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs uppercase tracking-wider text-center transition-colors"
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
