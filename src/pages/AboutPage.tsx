import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Sparkles, GraduationCap, ShieldCheck, Heart, Award, ArrowRight, BookOpen, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSite } from '../context/SiteContext';

export const AboutPage: React.FC = () => {
  const { settings } = useSite();

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Breadcrumbs items={[{ label: 'About Rapid Schools' }]} />

      {/* Banner */}
      <section className="bg-slate-950 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Institutional Legacy & Philosophy
          </span>
          <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
            Educating for Character, Mind & Purpose
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed">
            Rapid Schools is an integrated educational foundation uniting early-years sensory discovery with comprehensive CBSE secondary scholarship.
          </p>
        </div>
      </section>

      {/* Vision & Mission Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
              Our Vision
            </span>
            <h2 className="font-outfit text-2xl font-bold text-slate-900">
              Lifelong Scholars Rooted in Human Values
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To cultivate an intellectual and moral sanctuary where every child discovers their distinct voice, builds unshakeable cognitive foundations, and evolves into an empathetic, forward-thinking leader contributing meaningfully to society and nation.
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
              Our Mission
            </span>
            <h2 className="font-outfit text-2xl font-bold text-slate-900">
              Integrated, Inquiry-Led Learning
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To deliver an unbroken continuum of child-centric education: nurturing play-based creativity in the foundational early years at Rapid Dreamz, and disciplined CBSE academic inquiry, athletics, and scientific temperament at Rapid Shakuntlayan.
            </p>
          </div>
        </div>

        {/* Leadership Message (Truthful Framework as requested in #20) */}
        <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 text-center lg:text-left">
              <div className="w-36 h-36 rounded-2xl bg-slate-900 border-2 border-amber-500/40 p-2 mx-auto lg:mx-0 shadow-lg flex items-center justify-center">
                <Quote className="w-16 h-16 text-amber-400" />
              </div>
              <div className="mt-4">
                <h3 className="font-outfit text-lg font-bold text-slate-900">
                  Leadership Desk
                </h3>
                <span className="text-xs text-slate-500">
                  Board of Academic Governors
                </span>
                <div className="text-[11px] text-amber-700 font-semibold mt-1">
                  Rapid Schools Educational Society
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-amber-600">
                Institutional Perspective
              </div>
              <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-slate-900">
                "Education is not the filling of a pail, but the lighting of a fire."
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                At Rapid Schools, we measure our success not merely through examination transcripts, but through the intellectual curiosity, emotional resilience, and moral character of our graduates. Whether guiding a four-year-old taking their initial exploratory steps in our early childhood atelier or preparing a senior secondary scholar for national competitive horizons, our commitment remains constant: every student is valued, challenged, and supported.
              </p>
              <div className="pt-2 text-xs text-slate-500 italic">
                * Official institutional addresses and principal notifications are published periodically under Circulars.
              </div>
            </div>

          </div>
        </div>

        {/* Dual Institution Architecture Overview */}
        <div className="mt-12">
          <SectionHeading
            badge="Institutional Structure"
            badgeColor="gold"
            title="The Rapid Schools Network"
            subtitle="Explore how our two specialized divisions complement each other to guide your child's complete formative years."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-amber-50/50 border border-amber-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Junior School</span>
                </div>
                <h3 className="font-outfit text-2xl font-bold text-slate-900">
                  {settings.dreamzName}
                </h3>
                <p className="text-xs font-semibold text-amber-700 mt-1">
                  Play Group • Nursery • LKG • UKG
                </p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Focusing on joyful sensory learning, foundational linguistic immersion, fine and gross motor mastery, and gentle socialization in safe child-centric facilities.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-amber-200">
                <Link
                  to="/dreamz"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 uppercase tracking-wider"
                >
                  <span>Explore Rapid Dreamz</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-blue-50/50 border border-blue-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <GraduationCap className="w-5 h-5 text-blue-900" />
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900">Class 1 to 12</span>
                </div>
                <h3 className="font-outfit text-2xl font-bold text-slate-900">
                  {settings.shakuntlayanName}
                </h3>
                <p className="text-xs font-semibold text-blue-900 mt-1">
                  Affiliated to CBSE, New Delhi
                </p>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">
                  Rigorous academic curriculum, fully equipped physics, chemistry, biology and computer labs, team sports, debating societies, and leadership councils.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-blue-200">
                <Link
                  to="/shakuntlayan"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-950 hover:text-blue-900 uppercase tracking-wider"
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
