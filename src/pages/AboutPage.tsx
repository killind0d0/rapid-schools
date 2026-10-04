import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Sparkles, GraduationCap, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';

export const AboutPage: React.FC = () => {
  const { settings } = useSite();

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-24">
      <Breadcrumbs items={[{ label: 'About Rapid Schools' }]} />

      {/* Header Banner */}
      <section className="bg-[#1C0306] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Layered radial mesh */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#BD672A]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#3D0B12]/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BD672A]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#2C070C] text-[#F3C292] border border-[#BD672A]/30 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD672A] shadow-[0_0_8px_rgba(189,103,42,0.8)]" />
            Institutional Heritage & Vision
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Educating for <span className="italic font-normal text-[#F3C292]">Character,</span> Mind & Purpose
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D4C3B3] leading-relaxed font-sans">
            Rapid Schools is an integrated educational foundation uniting early-years sensory discovery with comprehensive CBSE secondary scholarship.
          </p>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BD672A] bg-[#BD672A]/10 px-3.5 py-1 rounded-full border border-[#BD672A]/25 font-mono">
              Our Vision
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-[#23070B] tracking-tight">
              Lifelong Scholars Rooted in Human Values
            </h2>
            <p className="text-sm text-[#5C4E50] leading-relaxed font-sans">
              To cultivate an intellectual and moral sanctuary where every child discovers their distinct voice, builds unshakeable cognitive foundations, and evolves into an empathetic, forward-thinking leader contributing meaningfully to society and nation.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] space-y-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#064E3B] bg-[#064E3B]/10 px-3.5 py-1 rounded-full border border-[#064E3B]/25 font-mono">
              Our Mission
            </span>
            <h2 className="font-editorial text-2xl sm:text-3xl font-medium text-[#23070B] tracking-tight">
              Integrated, Inquiry-Led Learning Continuum
            </h2>
            <p className="text-sm text-[#5C4E50] leading-relaxed font-sans">
              To deliver an unbroken continuum of child-centric education: nurturing play-based creativity in the foundational early years at Rapid Dreamz, and disciplined CBSE academic inquiry, athletics, and scientific temperament at Rapid Shakuntlayan.
            </p>
          </div>
        </div>

        {/* Leadership Message Card */}
        <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-white border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#2C070C] to-[#1C0306] p-[2px] ring-1 ring-[#BD672A]/50 mx-auto lg:mx-0 shadow-md flex items-center justify-center">
                <div className="w-full h-full rounded-[14px] bg-[#2C070C] flex items-center justify-center">
                  <Quote className="w-12 h-12 text-[#F3C292]" />
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-editorial text-2xl font-medium text-[#23070B]">
                  Leadership Desk
                </h3>
                <span className="text-xs text-[#6E5D5F] block font-sans">
                  Board of Academic Governors
                </span>
                <div className="text-xs text-[#BD672A] font-semibold mt-1 font-mono uppercase tracking-wider">
                  Rapid Schools Educational Society
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#BD672A] font-mono flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BD672A]" />
                Institutional Perspective
              </div>
              <h2 className="font-editorial text-2xl sm:text-4xl font-medium text-[#23070B] italic leading-snug">
                "Education is not the filling of a pail, but the lighting of a fire."
              </h2>
              <p className="text-sm sm:text-base text-[#5C4E50] leading-relaxed font-sans">
                At Rapid Schools, we measure our success not merely through examination transcripts, but through the intellectual curiosity, emotional resilience, and moral character of our graduates. Whether guiding a four-year-old taking their initial exploratory steps in our early childhood atelier or preparing a senior secondary scholar for national competitive horizons, our commitment remains constant: every student is valued, challenged, and supported.
              </p>
              <div className="pt-2 text-xs text-[#6E5D5F] font-sans italic">
                * Official institutional addresses and circulars are updated periodically under Notifications.
              </div>
            </div>

          </div>
        </div>

        {/* Dual Institution Architecture Overview */}
        <div className="mt-16">
          <SectionHeading
            badge="Institutional Structure"
            badgeColor="copper"
            title="The Rapid Schools Network"
            subtitle="Explore how our two specialized divisions complement each other to guide your child's complete formative years."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-8 sm:p-9 rounded-3xl bg-white border border-[#E8DFD1] hover:border-[#BD672A]/50 shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#BD672A]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BD672A] font-mono">
                    Early Childhood Division
                  </span>
                </div>
                <h3 className="font-editorial text-3xl font-medium text-[#23070B] group-hover:text-[#BD672A] transition-colors">
                  {settings.dreamzName}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#BD672A] mt-1 font-mono">
                  Play Group • Nursery • LKG • UKG
                </p>
                <p className="text-sm text-[#5C4E50] mt-3 leading-relaxed font-sans">
                  Focusing on joyful sensory learning, foundational linguistic immersion, fine and gross motor mastery, and gentle socialization in safe child-centric facilities.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8DFD1]">
                <Link
                  to="/dreamz"
                  className="luxury-btn-primary py-2.5 px-5 rounded-xl font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <span>Explore Rapid Dreamz</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="p-8 sm:p-9 rounded-3xl bg-white border border-[#E8DFD1] hover:border-[#064E3B]/50 shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] flex flex-col justify-between group">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-4 h-4 text-[#064E3B]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#064E3B] font-mono">
                    Comprehensive Secondary Wing
                  </span>
                </div>
                <h3 className="font-editorial text-3xl font-medium text-[#23070B] group-hover:text-[#064E3B] transition-colors">
                  {settings.shakuntlayanName}
                </h3>
                <p className="text-xs font-bold uppercase tracking-wider text-[#064E3B] mt-1 font-mono">
                  Affiliated to CBSE, New Delhi (Class 1 to 12)
                </p>
                <p className="text-sm text-[#5C4E50] mt-3 leading-relaxed font-sans">
                  Rigorous academic curriculum, fully equipped physics, chemistry, biology and computer labs, team sports, debating societies, and leadership councils.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#E8DFD1]">
                <Link
                  to="/shakuntlayan"
                  className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#064E3B] to-[#0D654E] text-white font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 shadow-[0_4px_18px_-2px_rgba(6,78,59,0.38)]"
                >
                  <span>Explore Rapid Shakuntlayan</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
