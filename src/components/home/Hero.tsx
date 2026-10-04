import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, GraduationCap, CheckCircle2, Shield, Calendar } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

export const Hero: React.FC = () => {
  const { settings } = useSite();

  return (
    <section className="relative overflow-hidden bg-[#2D060C] text-white min-h-[85vh] flex items-center">
      {/* Background Graphic with warm atmospheric vignette */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80"
          alt="Modern school campus architecture"
          className="w-full h-full object-cover mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#24050A] via-[#2D060C]/95 to-[#1F0408]/80" />
      </div>

      {/* Decorative ambient glowing orbs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#BD672A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#064E3B]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Top pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#420C14] border border-[#BD672A]/40 text-[#E8955A] text-xs font-semibold tracking-wide shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#D47A3B] animate-ping" />
              <span>Admissions Open for Session {settings.academicYear}</span>
            </div>

            {/* Headline */}
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Nurturing <span className="font-editorial italic font-normal text-[#E8955A]">Curiosity.</span>
              <br />
              Cultivating <span className="text-[#FAF5EE]">Character.</span>
              <br />
              Shaping Tomorrow.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-xl text-[#DBCDC5] max-w-2xl font-normal leading-relaxed">
              Rapid Schools brings together foundational early childhood discovery at{' '}
              <strong className="text-[#FB923C] font-semibold">Rapid Dreamz</strong> and disciplined, values-driven CBSE scholarship at{' '}
              <strong className="text-[#34D399] font-semibold">Rapid Shakuntlayan</strong> — creating an unbroken continuum of growth from Play Group to Class 12.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#school-selector"
                className="px-6 py-3.5 rounded-xl bg-[#BD672A] hover:bg-[#A35520] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-[#BD672A]/20 transition-all flex items-center gap-2 group"
              >
                <span>Explore Our Schools</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/admissions"
                className="px-6 py-3.5 rounded-xl bg-[#3D0B12] hover:bg-[#54121B] text-white font-semibold text-xs uppercase tracking-wider border border-[#5E1722] hover:border-[#BD672A]/60 transition-all flex items-center gap-2"
              >
                <span>Admissions Guide</span>
              </Link>

              <Link
                to="/visit"
                className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-[#DBCDC5] hover:text-white font-medium text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#D47A3B]" />
                <span>Book Campus Tour</span>
              </Link>
            </div>

            {/* Trust Markers */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#461019] text-xs text-[#C7B5A8]">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#34D399] shrink-0" />
                <span>CBSE Affiliated Curriculum</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D47A3B] shrink-0" />
                <span>Safe & Secure Campuses</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F97316] shrink-0" />
                <span>Holistic Sports & Culture</span>
              </div>
            </div>
          </div>

          {/* Right Highlights Cards */}
          <div className="lg:col-span-4 space-y-4">
            {/* Quick Card: Rapid Dreamz */}
            <Link
              to="/dreamz"
              className="block p-6 rounded-2xl bg-gradient-to-br from-[#3D0B12]/95 via-[#3D0B12]/80 to-[#C2410C]/20 border border-[#C2410C]/40 hover:border-[#FB923C] shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#C2410C]/30 text-[#FED7AA] border border-[#C2410C]/40 uppercase tracking-widest">
                  Junior Wing
                </span>
                <Sparkles className="w-5 h-5 text-[#F97316] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold font-outfit text-white group-hover:text-[#FDBA74] transition-colors">
                Rapid Dreamz
              </h3>
              <p className="text-xs text-[#FED7AA]/90 font-medium mt-0.5">
                Play Group • Nursery • LKG • UKG
              </p>
              <p className="text-xs text-[#D8C7B8] mt-2 leading-relaxed">
                Play-based inquiry, tactile discovery, and caring emotional scaffolding in the foundational early years.
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-[#FB923C] group-hover:text-[#FED7AA]">
                <span>Discover Early Years</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Quick Card: Rapid Shakuntlayan */}
            <Link
              to="/shakuntlayan"
              className="block p-6 rounded-2xl bg-gradient-to-br from-[#3D0B12]/95 via-[#3D0B12]/80 to-[#064E3B]/40 border border-[#064E3B]/60 hover:border-[#34D399] shadow-xl transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#064E3B]/40 text-[#A7F3D0] border border-[#064E3B]/60 uppercase tracking-widest">
                  Class 1 to 12
                </span>
                <GraduationCap className="w-5 h-5 text-[#34D399] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold font-outfit text-white group-hover:text-[#6EE7B7] transition-colors">
                Rapid Shakuntlayan
              </h3>
              <p className="text-xs text-[#A7F3D0]/90 font-medium mt-0.5">
                CBSE Affiliated, New Delhi
              </p>
              <p className="text-xs text-[#D8C7B8] mt-2 leading-relaxed">
                Academic rigor, cutting-edge science and IT laboratories, athletics, and character development.
              </p>
              <div className="mt-4 flex items-center text-xs font-bold text-[#34D399] group-hover:text-[#A7F3D0]">
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
