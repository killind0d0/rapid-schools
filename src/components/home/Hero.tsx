import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, GraduationCap, CheckCircle2, Shield, Calendar } from 'lucide-react';
import { useSite } from '../../context/SiteContext';

export const Hero: React.FC = () => {
  const { settings } = useSite();

  return (
    <section className="relative overflow-hidden bg-[#020617] text-white min-h-[88vh] flex items-center">
      {/* Background Graphic with warm atmospheric vignette */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80"
          alt="Modern school campus architecture"
          className="w-full h-full object-cover mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#0F172A]/90 to-[#020617]/85" />
      </div>

      {/* Layered Ambient Glowing Light Meshes */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-[#F59E0B]/18 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-[#162032]/50 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#0F172A]/40 rounded-full blur-[120px] pointer-events-none" />

      {/* Hairline Top Highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Main Left Content */}
          <div className="lg:col-span-7 space-y-7">
            {/* Luxury Eyebrow with glowing metallic dot */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0F172A] border border-[#F59E0B]/30 text-[#FDE68A] text-xs font-semibold tracking-wide shadow-[0_0_15px_rgba(189,103,42,0.18)]">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(189,103,42,0.8)] animate-pulse" />
              <span className="font-outfit uppercase tracking-[0.18em] text-[11px] font-bold">
                Admissions Open for Session {settings.academicYear}
              </span>
            </div>

            {/* 3-Tier Headline with Italic Serif Accents */}
            <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.12]">
              Nurturing <span className="font-editorial italic font-normal text-[#FDE68A]">Curiosity.</span>
              <br />
              Cultivating <span className="font-editorial italic font-normal text-white">Character.</span>
              <br />
              Shaping <span className="font-editorial italic font-normal text-[#F59E0B]">Tomorrow.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#CBD5E1] max-w-2xl font-normal leading-relaxed font-sans">
              Rapid Schools unites foundational early childhood inquiry at{' '}
              <strong className="text-[#FDE68A] font-semibold">Rapid Dreamz</strong> and disciplined, values-driven CBSE scholarship at{' '}
              <strong className="text-[#99F6E4] font-semibold">Rapid Shakuntlayan</strong> — curating an unbroken educational continuum from Play Group to Class 12.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#school-selector"
                className="luxury-btn-primary px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 group cursor-pointer"
              >
                <span>Explore Our Schools</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/admissions"
                className="luxury-btn-outline px-6 py-3.5 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center gap-2"
              >
                <span>Admissions Guide</span>
              </Link>

              <Link
                to="/visit"
                className="px-5 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-[#CBD5E1] hover:text-white font-medium text-xs uppercase tracking-wider transition-all flex items-center gap-2 group"
              >
                <Calendar className="w-4 h-4 text-[#FBBF24] group-hover:scale-110 transition-transform" />
                <span>Book Campus Tour</span>
              </Link>
            </div>

            {/* Trust Markers */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-[#162032] text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#115E59]/40 flex items-center justify-center border border-[#115E59]/60 shrink-0">
                  <Shield className="w-3.5 h-3.5 text-[#2DD4BF]" />
                </div>
                <span>CBSE Affiliated Curriculum</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#F59E0B]/20 flex items-center justify-center border border-[#F59E0B]/40 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FDE68A]" />
                </div>
                <span>Child-Safe Campuses</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-6 h-6 rounded-full bg-[#162032] flex items-center justify-center border border-[#F59E0B]/30 shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FBBF24]" />
                </div>
                <span>Holistic Sports & Culture</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dual Luxury Dossier Preview Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Dossier Card 1: Rapid Dreamz */}
            <Link
              to="/dreamz"
              className="block luxury-glass-dark p-6 sm:p-7 rounded-3xl relative overflow-hidden transition-all duration-300 hover:border-[#F59E0B]/60 hover:-translate-y-1 group"
            >
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#F59E0B]/10 rounded-full blur-2xl pointer-events-none group-hover:bg-[#F59E0B]/20 transition-all" />

              <div className="flex items-center justify-between mb-3 relative z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#F59E0B]/20 text-[#FDE68A] border border-[#F59E0B]/40 uppercase tracking-[0.18em] font-mono">
                  Junior Wing • PG–UKG
                </span>
                <div className="w-8 h-8 rounded-full bg-[#F59E0B]/15 flex items-center justify-center border border-[#F59E0B]/30 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-4 h-4 text-[#FDE68A]" />
                </div>
              </div>

              <h3 className="text-2xl font-medium font-editorial text-white group-hover:text-[#FDE68A] transition-colors relative z-10">
                Rapid <span className="italic font-normal">Dreamz</span>
              </h3>
              <p className="text-xs text-[#CBD5E1] font-medium mt-1 relative z-10">
                Play Group • Nursery • LKG • UKG
              </p>
              <p className="text-xs text-[#94A3B8] mt-2.5 leading-relaxed font-sans relative z-10">
                Tactile discovery, caring emotional scaffolding, sensory ateliers, and joyful foundational language in early childhood.
              </p>

              <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-bold text-[#FDE68A] group-hover:text-white relative z-10">
                <span className="uppercase tracking-wider text-[11px]">Explore Early Years</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            {/* Dossier Card 2: Rapid Shakuntlayan */}
            <Link
              to="/shakuntlayan"
              className="block luxury-glass-dark p-6 sm:p-7 rounded-3xl relative overflow-hidden transition-all duration-300 hover:border-[#115E59]/80 hover:-translate-y-1 group"
            >
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute top-0 right-0 w-44 h-44 bg-[#115E59]/20 rounded-full blur-2xl pointer-events-none group-hover:bg-[#115E59]/30 transition-all" />

              <div className="flex items-center justify-between mb-3 relative z-10">
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#115E59]/40 text-[#99F6E4] border border-[#115E59]/60 uppercase tracking-[0.18em] font-mono">
                  CBSE Affiliated • Class 1–12
                </span>
                <div className="w-8 h-8 rounded-full bg-[#115E59]/30 flex items-center justify-center border border-[#115E59]/50 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-4 h-4 text-[#2DD4BF]" />
                </div>
              </div>

              <h3 className="text-2xl font-medium font-editorial text-white group-hover:text-[#99F6E4] transition-colors relative z-10">
                Rapid <span className="italic font-normal">Shakuntlayan</span>
              </h3>
              <p className="text-xs text-[#99F6E4]/90 font-medium mt-1 relative z-10">
                Class 1 to 12 • Affiliated to CBSE, New Delhi
              </p>
              <p className="text-xs text-[#94A3B8] mt-2.5 leading-relaxed font-sans relative z-10">
                Disciplined academic rigor, scientific laboratories, sports grounds, digital literacy, and holistic character formation.
              </p>

              <div className="mt-5 pt-3.5 border-t border-white/[0.08] flex items-center justify-between text-xs font-bold text-[#99F6E4] group-hover:text-white relative z-10">
                <span className="uppercase tracking-wider text-[11px]">Explore Secondary Wing</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};
