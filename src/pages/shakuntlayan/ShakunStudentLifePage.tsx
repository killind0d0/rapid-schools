import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { LifeAtRapid } from '../../components/home/LifeAtRapid';
import { Users, Award, Shield, Flag, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShakunStudentLifePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs
        items={[
          { label: 'Rapid Shakuntlayan', href: '/shakuntlayan' },
          { label: 'Student Life' }
        ]}
      />

      <section className="bg-[#03231B] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#064E3B]/60 via-[#03231B] to-[#01140F]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#059669]/20 text-[#A7F3D0] border border-[#059669]/30">
            Co-Curricular & Culture
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Student Life & Character Formation
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#D1FAE5]/80 font-sans">
            Fostering sportsmanship, civic responsibility, house camaraderie, and leadership through structured co-curriculars.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* House System & Governance */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#E6DDCF] shadow-sm space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#064E3B] bg-[#ECFDF5] px-3.5 py-1 rounded-full border border-[#064E3B]/20">
            House Camaraderie
          </span>
          <h2 className="font-cormorant text-2xl sm:text-4xl font-normal text-[#1C1917]">
            The Inter-House Mentorship Structure
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
            Every student at Rapid Shakuntlayan is inducted into a school house upon entry. The house system builds vertical bonds across grades, giving junior students senior role models and teaching seniors the obligations of mentorship, fair play, and healthy competition in athletics, debates, and cultural showcases.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#57534E]">
            <div className="p-4 rounded-xl bg-[#FCFAF6] border border-[#E6DDCF]">
              <strong className="block text-[#064E3B] mb-1 font-semibold text-sm">Student Prefectorial Body</strong>
              Head Boy, Head Girl, Sports Captains, and House Prefects elected annually to lead school assemblies and maintain discipline.
            </div>
            <div className="p-4 rounded-xl bg-[#FCFAF6] border border-[#E6DDCF]">
              <strong className="block text-[#064E3B] mb-1 font-semibold text-sm">Inter-House Trophies</strong>
              Year-long contests in academic quizzing, athletics, declamation, and fine arts culminating in the Annual Rolling Trophy.
            </div>
            <div className="p-4 rounded-xl bg-[#FCFAF6] border border-[#E6DDCF]">
              <strong className="block text-[#064E3B] mb-1 font-semibold text-sm">Community Outreach & Clubs</strong>
              Eco-Club, Science & Robotics Society, Literary & Debating Forum, and Youth Parliament.
            </div>
          </div>
        </div>

        {/* Six Dimensions of Student Life */}
        <LifeAtRapid />

        <div className="p-8 sm:p-10 rounded-3xl bg-[#03231B] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-[#064E3B]/40">
          <div>
            <h3 className="font-cormorant text-2xl sm:text-3xl font-normal text-[#FCFAF6]">Experience Life at Shakuntlayan</h3>
            <p className="text-xs text-[#D1FAE5]/80 mt-1 font-sans">Submit an admission enquiry to discover our active student societies.</p>
          </div>
          <Link
            to="/shakuntlayan/admissions"
            className="px-6 py-3 rounded-xl bg-[#059669] hover:bg-[#047857] text-white font-semibold text-xs uppercase tracking-wider transition-all shrink-0 shadow-sm"
          >
            Apply for Class 1–12 Admissions →
          </Link>
        </div>
      </div>
    </div>
  );
};
