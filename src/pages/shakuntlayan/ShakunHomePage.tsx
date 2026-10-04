import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, Microscope, BookOpen, Compass, ShieldCheck, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { AcademicStages } from '../../components/shakuntlayan/AcademicStages';
import { AchievementsShowcase } from '../../components/shakuntlayan/AchievementsShowcase';
import { LifeAtRapid } from '../../components/home/LifeAtRapid';
import { useSite } from '../../context/SiteContext';

export const ShakunHomePage: React.FC = () => {
  const { settings } = useSite();

  return (
    <div className="min-h-screen bg-[#FAF7F2] pb-24">
      <Breadcrumbs items={[{ label: 'Rapid Shakuntlayan (Class 1–12)' }]} />

      {/* Hero Section with Deep Oxford Emerald & Claret Vignette */}
      <section className="relative overflow-hidden bg-[#03231B] text-white py-16 sm:py-24">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80"
            alt="Rapid Shakuntlayan Campus"
            className="w-full h-full object-cover mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#021813] via-[#03231B]/95 to-[#1F0408]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B]/80 border border-[#34D399]/30 text-[#A7F3D0] text-xs font-semibold tracking-wide font-mono">
                <GraduationCap className="w-4 h-4 text-[#34D399]" />
                <span>Class 1 to Class 12 • Affiliated to CBSE, New Delhi</span>
              </div>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Rapid Shakuntlayan
              </h1>

              <blockquote className="text-xl sm:text-2xl font-serif italic text-[#E8955A] font-light">
                "Building minds that shape tomorrow."
              </blockquote>

              <p className="text-base sm:text-lg text-[#D1E7DF] max-w-2xl leading-relaxed font-normal">
                An institution grounded in academic discipline, scientific inquiry, ethical leadership, and character formation. Preparing students for CBSE distinction and competitive university pathways.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/shakuntlayan/admissions"
                  className="px-6 py-3.5 rounded-xl bg-[#064E3B] hover:bg-[#043D2E] text-white font-bold text-xs uppercase tracking-wider shadow-lg border border-[#34D399]/30 transition-all flex items-center gap-2"
                >
                  <span>CBSE Admissions {settings.academicYear}</span>
                  <ArrowRight className="w-4 h-4 text-[#A7F3D0]" />
                </Link>

                <Link
                  to="/visit"
                  className="px-6 py-3.5 rounded-xl bg-[#1C3A32] hover:bg-[#254F44] text-[#EFE7DC] border border-[#2B574B] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#D47A3B]" />
                  <span>Book Campus Tour</span>
                </Link>

                <Link
                  to="/shakuntlayan/academics"
                  className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 text-[#D1E7DF] hover:text-white font-medium text-xs uppercase tracking-wider transition-all"
                >
                  <span>Academic Scheme</span>
                </Link>
              </div>

              {/* Verified Trust Markers */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#B2D6C9] border-t border-[#0F3D30]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>CBSE Curriculum Standards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>Equipped Science & IT Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E8955A] shrink-0" />
                  <span>Competitive Exam Mentoring</span>
                </div>
              </div>
            </div>

            {/* Right Quick Summary Card */}
            <div className="lg:col-span-4 bg-[#052920]/90 border border-[#0F4738] p-6 rounded-3xl space-y-4 shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E8955A] font-mono">
                Institutional Divisions
              </span>
              <div className="space-y-3 text-xs text-[#D1E7DF]">
                <div className="p-3 rounded-2xl bg-[#09352A] border border-[#165040]">
                  <strong className="block text-white mb-0.5">Primary Wing (Classes 1–5)</strong>
                  Foundational literacy, numeracy, experiential science, and arts.
                </div>
                <div className="p-3 rounded-2xl bg-[#09352A] border border-[#165040]">
                  <strong className="block text-white mb-0.5">Middle Wing (Classes 6–8)</strong>
                  Analytical inquiry, integrated sciences, algebra, and sports.
                </div>
                <div className="p-3 rounded-2xl bg-[#09352A] border border-[#165040]">
                  <strong className="block text-white mb-0.5">Secondary (Classes 9–10)</strong>
                  Intensive CBSE AISSE preparation, laboratory practicals, debating.
                </div>
                <div className="p-3 rounded-2xl bg-[#09352A] border border-[#165040]">
                  <strong className="block text-white mb-0.5">Senior Secondary (Classes 11–12)</strong>
                  Science, Commerce & Humanities streams for national competitive readiness.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Academic Journey Stages (Class 1-12) */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Curriculum Architecture"
          badgeColor="forest"
          title="The Academic Journey: Class 1 to 12"
          subtitle="Explore the progression of scholarship, laboratory research, and evaluation standards across each academic division."
          align="center"
        />

        <AcademicStages />
      </section>

      {/* Campus Facilities Preview */}
      <section className="py-20 bg-[#F6F1E7]/70 border-y border-[#E6DDCF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Infrastructure"
            badgeColor="forest"
            title="A Campus Built for Serious Learning"
            subtitle="Explore our laboratories, library, and sporting facilities designed to inspire curiosity and high achievement."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-3xl overflow-hidden border border-[#E6DDCF] shadow-xs bg-[#FCFAF6] flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
                alt="Science Laboratories"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-outfit text-lg font-bold text-[#2B1B1D] mb-1">
                    Science & STEM Workbenches
                  </h3>
                  <p className="text-xs text-[#5C494A] leading-relaxed">
                    Dedicated physics, chemistry, and biology laboratories equipped for CBSE practical syllabi and empirical research.
                  </p>
                </div>
                <Link to="/shakuntlayan/campus" className="mt-4 text-xs font-bold text-[#064E3B] hover:text-[#022C22] flex items-center gap-1">
                  <span>Explore laboratories</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#E6DDCF] shadow-xs bg-[#FCFAF6] flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
                alt="Central Library"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-outfit text-lg font-bold text-[#2B1B1D] mb-1">
                    Central Learning Library
                  </h3>
                  <p className="text-xs text-[#5C494A] leading-relaxed">
                    Extensive collections of reference textbooks, national journals, classical literature, and digital research terminals.
                  </p>
                </div>
                <Link to="/shakuntlayan/campus" className="mt-4 text-xs font-bold text-[#064E3B] hover:text-[#022C22] flex items-center gap-1">
                  <span>Explore library</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#E6DDCF] shadow-xs bg-[#FCFAF6] flex flex-col">
              <img
                src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80"
                alt="Sports Arena"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-outfit text-lg font-bold text-[#2B1B1D] mb-1">
                    Sports Complex & Track
                  </h3>
                  <p className="text-xs text-[#5C494A] leading-relaxed">
                    Spacious athletics field, basketball courts, cricket training nets, and physical fitness coaching under certified mentors.
                  </p>
                </div>
                <Link to="/shakuntlayan/campus" className="mt-4 text-xs font-bold text-[#064E3B] hover:text-[#022C22] flex items-center gap-1">
                  <span>Explore sports</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Dimensions of Student Life */}
      <LifeAtRapid />

      {/* Truthful Achievements & Merit Policy Section */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Merit & Recognition"
          badgeColor="forest"
          title="Institutional Achievements & Honors"
          subtitle="Honoring student effort, academic excellence, and sportsmanship under authenticated institutional disclosures."
          align="center"
        />

        <AchievementsShowcase />
      </section>

      {/* Admissions CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#03231B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#0F3D30]">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#A7F3D0] font-mono">
              Session {settings.academicYear} Admissions
            </span>
            <h3 className="font-outfit text-2xl sm:text-3xl font-bold">
              Enroll at Rapid Shakuntlayan
            </h3>
            <p className="text-xs sm:text-sm text-[#D1E7DF] max-w-lg">
              Registration forms for Class 1 to 11 are open. Consult our admissions counselor or tour the campus.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/shakuntlayan/admissions"
              className="px-6 py-3 rounded-xl bg-[#064E3B] hover:bg-[#043D2E] text-white font-bold text-xs uppercase tracking-wider border border-[#34D399]/40 transition-all"
            >
              Apply to Shakuntlayan
            </Link>
            <Link
              to="/visit"
              className="px-6 py-3 rounded-xl bg-[#1C3A32] hover:bg-[#254F44] text-[#EFE7DC] font-bold text-xs uppercase tracking-wider border border-[#2B574B] transition-all"
            >
              Book Campus Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
