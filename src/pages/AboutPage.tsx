import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Sparkles, GraduationCap, ShieldCheck, Heart, Award, ArrowRight, BookOpen, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';

export const AboutPage: React.FC = () => {
  const { settings } = useSite();

  return (
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs items={[{ label: 'About Rapid Schools' }]} />

      {/* Banner */}
      <section className="bg-[#2D060C] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5A121E]/60 via-[#2D060C] to-[#1A0407]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#BD672A]/20 text-[#EAB592] border border-[#BD672A]/30">
            Institutional Heritage & Vision
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Educating for Character, Mind & Purpose
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
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E6DDCF] shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#BD672A] bg-[#FAF3EC] px-3.5 py-1 rounded-full border border-[#BD672A]/20">
              Our Vision
            </span>
            <h2 className="font-cormorant text-2xl sm:text-3xl font-normal text-[#1C1917]">
              Lifelong Scholars Rooted in Human Values
            </h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              To cultivate an intellectual and moral sanctuary where every child discovers their distinct voice, builds unshakeable cognitive foundations, and evolves into an empathetic, forward-thinking leader contributing meaningfully to society and nation.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E6DDCF] shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#064E3B] bg-[#ECFDF5] px-3.5 py-1 rounded-full border border-[#064E3B]/20">
              Our Mission
            </span>
            <h2 className="font-cormorant text-2xl sm:text-3xl font-normal text-[#1C1917]">
              Integrated, Inquiry-Led Learning
            </h2>
            <p className="text-sm text-[#57534E] leading-relaxed">
              To deliver an unbroken continuum of child-centric education: nurturing play-based creativity in the foundational early years at Rapid Dreamz, and disciplined CBSE academic inquiry, athletics, and scientific temperament at Rapid Shakuntlayan.
            </p>
          </div>
        </div>

        {/* Leadership Message (Truthful Framework as requested in #20) */}
        <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-white border border-[#E6DDCF] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="w-32 h-32 rounded-2xl bg-[#3D0B12] border-2 border-[#BD672A]/40 p-2 mx-auto lg:mx-0 shadow-md flex items-center justify-center">
                <Quote className="w-14 h-14 text-[#EAB592]" />
              </div>
              <div className="mt-4">
                <h3 className="font-cormorant text-xl font-semibold text-[#1C1917]">
                  Leadership Desk
                </h3>
                <span className="text-xs text-[#78716C] block">
                  Board of Academic Governors
                </span>
                <div className="text-xs text-[#BD672A] font-semibold mt-1">
                  Rapid Schools Educational Society
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-bold uppercase tracking-widest text-[#BD672A]">
                Institutional Perspective
              </div>
              <h2 className="font-cormorant text-2xl sm:text-4xl font-normal text-[#1C1917] italic">
                "Education is not the filling of a pail, but the lighting of a fire."
              </h2>
              <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
                At Rapid Schools, we measure our success not merely through examination transcripts, but through the intellectual curiosity, emotional resilience, and moral character of our graduates. Whether guiding a four-year-old taking their initial exploratory steps in our early childhood atelier or preparing a senior secondary scholar for national competitive horizons, our commitment remains constant: every student is valued, challenged, and supported.
              </p>
              <div className="pt-2 text-xs text-[#78716C] italic">
                * Official institutional addresses and circulars are updated periodically under Notifications.
              </div>
            </div>

          </div>
        </div>

        {/* Dual Institution Architecture Overview */}
        <div className="mt-14">
          <SectionHeading
            badge="Institutional Structure"
            badgeColor="copper"
            title="The Rapid Schools Network"
            subtitle="Explore how our two specialized divisions complement each other to guide your child's complete formative years."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div className="p-8 rounded-3xl bg-[#FFF7ED] border border-[#FDBA74]/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-[#C2410C]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C2410C]">Early Childhood Division</span>
                </div>
                <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-[#1C1917]">
                  {settings.dreamzName}
                </h3>
                <p className="text-xs font-semibold text-[#C2410C] mt-1">
                  Play Group • Nursery • LKG • UKG
                </p>
                <p className="text-sm text-[#57534E] mt-3 leading-relaxed">
                  Focusing on joyful sensory learning, foundational linguistic immersion, fine and gross motor mastery, and gentle socialization in safe child-centric facilities.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#FDBA74]/40">
                <Link
                  to="/dreamz"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C2410C] hover:text-[#9A3412] uppercase tracking-wider"
                >
                  <span>Explore Rapid Dreamz</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-[#F0FDF4] border border-[#86EFAC]/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-[#064E3B]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#064E3B]">Comprehensive Secondary Wing</span>
                </div>
                <h3 className="font-cormorant text-2xl sm:text-3xl font-semibold text-[#1C1917]">
                  {settings.shakuntlayanName}
                </h3>
                <p className="text-xs font-semibold text-[#064E3B] mt-1">
                  Affiliated to CBSE, New Delhi (Class 1 to 12)
                </p>
                <p className="text-sm text-[#57534E] mt-3 leading-relaxed">
                  Rigorous academic curriculum, fully equipped physics, chemistry, biology and computer labs, team sports, debating societies, and leadership councils.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#86EFAC]/40">
                <Link
                  to="/shakuntlayan"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#064E3B] hover:text-[#043327] uppercase tracking-wider"
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
