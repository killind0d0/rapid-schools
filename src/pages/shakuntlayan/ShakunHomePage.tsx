import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Award, Microscope, BookOpen, Compass, ShieldCheck, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { AcademicStages } from '../../components/shakuntlayan/AcademicStages';
import { AchievementsShowcase } from '../../components/shakuntlayan/AchievementsShowcase';
import { LifeAtRapid } from '../../components/home/LifeAtRapid';
import { useSite } from '../../context/SiteContext';

export const ShakunHomePage: React.FC = () => {
  const { settings } = useSite();

  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24 text-[#021C16]">
      <Breadcrumbs items={[{ label: 'Rapid Shakuntlayan (Class 1–12)' }]} />

      {/* Hero Section with Sovereign British Racing Forest Emerald & Mint Conifer Aurora Glow */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#042F24] via-[#021C16] to-[#01120D] text-white py-16 sm:py-24">
        {/* Mint Conifer Aurora Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(52,211,153,0.14)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 left-10 w-96 h-96 bg-[radial-gradient(circle,_rgba(197,160,89,0.12)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 z-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=2000&q=80"
            alt="Rapid Shakuntlayan Academic Campus"
            className="w-full h-full object-cover mix-blend-luminosity"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6">
              {/* Jade Badge with Conifer Accent */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#064E3B] border border-[#34D399]/40 text-[#A7F3D0] text-xs font-mono font-bold tracking-wide shadow-sm">
                <GraduationCap className="w-4 h-4 text-[#34D399]" />
                <span>Class 1 to Class 12 • Affiliated to CBSE, New Delhi</span>
              </div>

              {/* Master Cormorant Garamond Heading */}
              <div className="space-y-2">
                <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
                  Rapid Shakuntlayan
                </h1>

                <blockquote className="font-editorial italic font-normal text-2xl sm:text-3xl text-[#E5C37E] leading-relaxed">
                  "Building minds that shape tomorrow."
                </blockquote>
              </div>

              <p className="text-base sm:text-lg text-[#D1E7DF] max-w-2xl leading-relaxed font-normal">
                An institution grounded in scholastic discipline, empirical laboratory research, ethical character, and intellectual rigor. Preparing scholars for CBSE national board honors and distinguished university gateways.
              </p>

              {/* Primary Call to Actions */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/shakuntlayan/admissions"
                  className="px-6 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#B38D46] text-[#021C16] font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2"
                >
                  <span>CBSE Admissions {settings.academicYear}</span>
                  <ArrowRight className="w-4 h-4 text-[#021C16]" />
                </Link>

                <Link
                  to="/visit"
                  className="px-6 py-3.5 rounded-xl bg-[#064E3B] hover:bg-[#08634B] text-[#A7F3D0] border border-[#34D399]/40 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#E5C37E]" />
                  <span>Book Campus Tour</span>
                </Link>

                <Link
                  to="/shakuntlayan/academics"
                  className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#D1E7DF] hover:text-white font-mono text-xs uppercase tracking-wider border border-white/15 transition-all"
                >
                  <span>Academic Scheme →</span>
                </Link>
              </div>

              {/* Verified Trust Markers */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#B2D6C9] border-t border-[#0F4738]">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>CBSE Curriculum Norms</span>
                </div>
                <div className="flex items-center gap-2">
                  <Microscope className="w-4 h-4 text-[#34D399] shrink-0" />
                  <span>Equipped Science & STEM Labs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#E5C37E] shrink-0" />
                  <span>University Pathway Mentoring</span>
                </div>
              </div>
            </div>

            {/* Right Academic Divisions Presentation Dossier */}
            <div className="lg:col-span-4 bg-[#021C16] border border-[#0F4C3C] p-6 sm:p-7 rounded-3xl space-y-4 shadow-2xl relative">
              <div className="flex items-center justify-between border-b border-[#0F4C3C] pb-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E5C37E]">
                  Academic Divisions
                </span>
                <span className="text-[10px] font-mono text-[#A7F3D0] bg-[#064E3B] px-2 py-0.5 rounded-full">
                  Class 1–12
                </span>
              </div>

              <div className="space-y-3 text-xs text-[#D1E7DF]">
                <div className="p-3.5 rounded-2xl bg-[#042F24] border border-[#0D654E] hover:border-[#34D399]/40 transition-colors">
                  <strong className="block text-white font-mono text-xs mb-0.5">
                    Primary Wing (Classes 1–5)
                  </strong>
                  <span className="text-[#B2D6C9]">Foundational literacy, bilingual fluency, concrete numeracy & EVS.</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#042F24] border border-[#0D654E] hover:border-[#34D399]/40 transition-colors">
                  <strong className="block text-white font-mono text-xs mb-0.5">
                    Middle Wing (Classes 6–8)
                  </strong>
                  <span className="text-[#B2D6C9]">Integrated empirical sciences, algebra, rhetoric & house athletics.</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#042F24] border border-[#0D654E] hover:border-[#34D399]/40 transition-colors">
                  <strong className="block text-white font-mono text-xs mb-0.5">
                    Secondary Wing (Classes 9–10)
                  </strong>
                  <span className="text-[#B2D6C9]">Rigorous CBSE AISSE preparation, laboratory practicals & MUN.</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#042F24] border border-[#0D654E] hover:border-[#34D399]/40 transition-colors">
                  <strong className="block text-white font-mono text-xs mb-0.5">
                    Senior Secondary (Classes 11–12)
                  </strong>
                  <span className="text-[#B2D6C9]">Specialized Science, Commerce & Humanities streams for AISSCE.</span>
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

      {/* Campus Facilities Preview in Bespoke Architectural Dossier Styling */}
      <section className="py-20 bg-[#EFF4F1] border-y border-[#D1E5DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Verified Infrastructure"
            badgeColor="forest"
            title="A Campus Built for Serious Scholastic Inquiry"
            subtitle="Explore our specialized laboratory workbenches, central research library, and competitive athletic complex."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            <div className="rounded-3xl overflow-hidden border border-[#D1E5DB] shadow-xs bg-[#F8FAF8] flex flex-col hover:border-[#042F24] transition-all">
              <div className="relative h-52">
                <img
                  src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
                  alt="CBSE Science Laboratories"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#021C16]/80 text-[#A7F3D0] backdrop-blur-md border border-[#34D399]/30">
                  EMPIRICAL LABS
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-editorial text-2xl font-bold text-[#021C16] mb-1.5">
                    Science & STEM Workbenches
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3C584E] leading-relaxed">
                    Dedicated Physics, Chemistry, and Biology laboratory halls equipped for CBSE board practical syllabi and independent empirical experimentation.
                  </p>
                </div>
                <Link
                  to="/shakuntlayan/campus"
                  className="pt-2 text-xs font-mono font-bold text-[#064E3B] hover:text-[#021C16] flex items-center gap-1.5"
                >
                  <span>Inspect laboratory specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#D1E5DB] shadow-xs bg-[#F8FAF8] flex flex-col hover:border-[#042F24] transition-all">
              <div className="relative h-52">
                <img
                  src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
                  alt="Central Learning Library"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#021C16]/80 text-[#A7F3D0] backdrop-blur-md border border-[#34D399]/30">
                  SCHOLASTIC ARCHIVE
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-editorial text-2xl font-bold text-[#021C16] mb-1.5">
                    Central Learning Resource Library
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3C584E] leading-relaxed">
                    Extensive collections of reference textbooks, national journals, classical literature, and digital research terminals for senior scholars.
                  </p>
                </div>
                <Link
                  to="/shakuntlayan/campus"
                  className="pt-2 text-xs font-mono font-bold text-[#064E3B] hover:text-[#021C16] flex items-center gap-1.5"
                >
                  <span>Explore library collection</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-[#D1E5DB] shadow-xs bg-[#F8FAF8] flex flex-col hover:border-[#042F24] transition-all">
              <div className="relative h-52">
                <img
                  src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=600&q=80"
                  alt="Sports Arena and Athletic Track"
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#021C16]/80 text-[#A7F3D0] backdrop-blur-md border border-[#34D399]/30">
                  ATHLETIC ARENA
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-editorial text-2xl font-bold text-[#021C16] mb-1.5">
                    Sports Complex & Track
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3C584E] leading-relaxed">
                    Spacious grass athletic field, standard basketball courts, cricket practice nets, and physical fitness coaching under certified mentors.
                  </p>
                </div>
                <Link
                  to="/shakuntlayan/campus"
                  className="pt-2 text-xs font-mono font-bold text-[#064E3B] hover:text-[#021C16] flex items-center gap-1.5"
                >
                  <span>Explore sporting arenas</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Six Dimensions of Student Life */}
      <LifeAtRapid />

      {/* Institutional Achievements & Honors Showcase */}
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

      {/* Admissions CTA Banner in Sovereign Forest */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#042F24] via-[#021C16] to-[#01120D] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#0F4738]">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A7F3D0]">
              Session {settings.academicYear} Admissions
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold">
              Enroll at Rapid Shakuntlayan
            </h3>
            <p className="text-xs sm:text-sm text-[#D1E7DF] max-w-lg font-normal">
              Registration forms for Class 1 to Class 11 are open. Consult our admissions counselor or tour the campus laboratories.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/shakuntlayan/admissions"
              className="px-6 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#B38D46] text-[#021C16] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Apply to Shakuntlayan
            </Link>
            <Link
              to="/visit"
              className="px-6 py-3.5 rounded-xl bg-[#064E3B] hover:bg-[#08634B] text-[#A7F3D0] font-bold text-xs uppercase tracking-wider border border-[#34D399]/40 transition-all"
            >
              Book Campus Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
