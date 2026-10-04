import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, GraduationCap, CheckCircle2, Shield, Calendar } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

export const Hero: React.FC = () => {
  const { settings } = useSite();

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[85vh] flex items-center">
      {/* Background Graphic & Subtle Indian Motif Accents */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80"
          alt="Modern school campus architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
      </div>

      {/* Decorative ambient glowing orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-amber-500/30 text-amber-400 text-xs font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Admissions Open for Academic Session {settings.academicYear}</span>
            </div>

            {/* Headline */}
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Nurturing <span className="text-amber-400">Curiosity.</span>
              <br />
              Inspiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">Excellence.</span>
              <br />
              Shaping Tomorrow.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed">
              Rapid Schools brings together foundational early childhood care at{' '}
              <strong className="text-amber-300 font-semibold">Rapid Dreamz</strong> and disciplined, values-driven CBSE education at{' '}
              <strong className="text-sky-300 font-semibold">Rapid Shakuntlayan</strong> — creating a continuous journey of growth from Play Group to Class 12.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#school-selector"
                className="px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm tracking-wide shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2 group"
              >
                <span>Explore Our Schools</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/admissions"
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-semibold text-sm border border-slate-700 hover:border-slate-500 transition-all flex items-center gap-2"
              >
                <span>Admissions Process</span>
              </Link>

              <Link
                to="/visit"
                className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-medium text-sm transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>Book Campus Tour</span>
              </Link>
            </div>

            {/* Trust Markers */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CBSE Affiliated Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Safe & Secure Campuses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Holistic Sports & Culture</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-4 space-y-4">
            {/* Quick Card: Rapid Dreamz */}
            <Link
              to="/dreamz"
              className="block p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-amber-950/20 border border-amber-500/20 hover:border-amber-400/50 shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 uppercase tracking-wider">
                  Junior School
                </span>
                <Sparkles className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold font-outfit text-white group-hover:text-amber-400 transition-colors">
                Rapid Dreamz
              </h3>
              <p className="text-xs text-amber-200/80 font-medium mt-0.5">
                Play Group • Nursery • LKG • UKG
              </p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Play-based inquiry, tactile discovery, and caring emotional scaffolding in the foundational early years.
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-amber-400 group-hover:text-amber-300">
                <span>Discover Early Years</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Quick Card: Rapid Shakuntlayan */}
            <Link
              to="/shakuntlayan"
              className="block p-6 rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-blue-950/20 border border-sky-500/20 hover:border-sky-400/50 shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30 uppercase tracking-wider">
                  Class 1 to 12
                </span>
                <GraduationCap className="w-5 h-5 text-sky-400 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold font-outfit text-white group-hover:text-sky-300 transition-colors">
                Rapid Shakuntlayan
              </h3>
              <p className="text-xs text-sky-200/80 font-medium mt-0.5">
                CBSE Curriculum, New Delhi
              </p>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                Academic rigor, cutting-edge science and IT laboratories, athletics, and character development.
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-sky-400 group-hover:text-sky-300">
                <span>Explore Secondary School</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
