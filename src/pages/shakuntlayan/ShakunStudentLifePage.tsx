import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { LifeAtRapid } from '../../components/home/LifeAtRapid';
import { Users, Award, Shield, Flag, HeartHandshake, CheckCircle2, Trophy, BookOpen, Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShakunStudentLifePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24 text-[#021C16]">
      <Breadcrumbs
        items={[
          { label: 'Rapid Shakuntlayan', href: '/shakuntlayan' },
          { label: 'Student Life' }
        ]}
      />

      {/* Hero Canvas in Sovereign British Racing Forest Emerald */}
      <section className="bg-gradient-to-br from-[#042F24] via-[#021C16] to-[#01120D] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Mint Conifer Aurora Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(52,211,153,0.14)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 left-10 w-96 h-96 bg-[radial-gradient(circle,_rgba(197,160,89,0.1)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/35 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#064E3B] text-[#A7F3D0] border border-[#34D399]/40 shadow-xs">
            <Users className="w-3.5 h-3.5 text-[#34D399]" />
            <span>Co-Curricular Culture & Prefectorial Governance</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Student Life & Character Formation
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D1E7DF] font-normal leading-relaxed">
            Cultivating sportsmanship, civic responsibility, house camaraderie, and leadership through structured co-curricular societies and student self-governance.
          </p>
        </div>
      </section>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* House System & Governance Dossier */}
        <div className="bg-[#F8FAF8] p-8 sm:p-12 rounded-3xl border border-[#D1E5DB] shadow-[0_4px_24px_-4px_rgba(4,47,36,0.06)] space-y-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#064E3B] bg-[#E3EFE9] px-3.5 py-1 rounded-full border border-[#064E3B]/20">
              House Camaraderie & Governance
            </span>
            <span className="text-xs font-mono font-semibold text-[#8A6A27] bg-[#F9F5EA] px-3 py-1 rounded-full border border-[#C5A059]/40">
              Institutional Tradition
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#021C16]">
            The Inter-House Mentorship Structure
          </h2>

          <p className="text-sm sm:text-base text-[#1E3B32] leading-relaxed">
            Upon enrollment at Rapid Shakuntlayan, every student is inducted into one of four institutional houses. The house system creates strong vertical mentorship across grades: junior students find supportive role models, while senior scholars learn the duties of leadership, peer tutoring, and ethical competition across sports fields, stage debates, and quiz symposiums.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-3 text-xs text-[#1E3B32]">
            <div className="p-5 rounded-2xl bg-white border border-[#D1E5DB] shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#064E3B] text-[#A7F3D0] flex items-center justify-center">
                <Flag className="w-4 h-4" />
              </div>
              <strong className="block text-[#064E3B] font-mono text-xs uppercase tracking-wider">
                Prefectorial Council
              </strong>
              <p className="text-[#3C584E] leading-relaxed">
                Head Boy, Head Girl, Sports Captains, and House Prefects elected annually to lead morning assemblies, represent student voice, and enforce discipline.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D1E5DB] shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#064E3B] text-[#E5C37E] flex items-center justify-center">
                <Trophy className="w-4 h-4" />
              </div>
              <strong className="block text-[#064E3B] font-mono text-xs uppercase tracking-wider">
                Annual Cock-House Trophy
              </strong>
              <p className="text-[#3C584E] leading-relaxed">
                Year-long inter-house tournaments across athletics, academic decathlons, declamation, and fine arts culminating in the Cock-House Rolling Shield.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#D1E5DB] shadow-2xs space-y-2">
              <div className="w-8 h-8 rounded-xl bg-[#064E3B] text-[#A7F3D0] flex items-center justify-center">
                <HeartHandshake className="w-4 h-4" />
              </div>
              <strong className="block text-[#064E3B] font-mono text-xs uppercase tracking-wider">
                Civic Stewardship & Clubs
              </strong>
              <p className="text-[#3C584E] leading-relaxed">
                Eco-Conservation Society, Science & Robotics Guild, Literary & Debating Forum, and social outreach drives instilling lifelong civic values.
              </p>
            </div>
          </div>
        </div>

        {/* Six Dimensions of Student Life */}
        <div>
          <SectionHeading
            badge="Holistic Dimensions"
            badgeColor="forest"
            title="Six Dimensions of Campus Life"
            subtitle="Balancing scholastic rigor with physical vigor, artistic expression, and ethical character formation."
            align="center"
          />

          <LifeAtRapid />
        </div>

        {/* Admissions Link Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#042F24] via-[#021C16] to-[#01120D] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-[#0F4738]">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono font-bold text-[#A7F3D0] uppercase tracking-wider block">
              Join Our Scholastic Society
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
              Experience Student Life at Shakuntlayan
            </h3>
            <p className="text-xs sm:text-sm text-[#D1E7DF] font-normal">
              Submit an admission enquiry to discover our clubs, house societies, and athletic coaching programs.
            </p>
          </div>
          <Link
            to="/shakuntlayan/admissions"
            className="px-6 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#B38D46] text-[#021C16] font-bold text-xs uppercase tracking-wider transition-all shrink-0 shadow-md flex items-center gap-2"
          >
            <span>Apply for Class 1–12 Admissions</span>
            <ArrowRight className="w-4 h-4 text-[#021C16]" />
          </Link>
        </div>
      </div>
    </div>
  );
};
