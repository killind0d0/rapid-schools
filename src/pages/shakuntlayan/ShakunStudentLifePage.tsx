import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { LifeAtRapid } from '../../components/home/LifeAtRapid';
import { Users, Award, Shield, Flag, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShakunStudentLifePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Breadcrumbs
        items={[
          { label: 'Rapid Shakuntlayan', href: '/shakuntlayan' },
          { label: 'Student Life' }
        ]}
      />

      <section className="bg-slate-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-sky-300 border border-blue-500/30">
            Co-Curricular & Culture
          </span>
          <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
            Student Life & Character Formation
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300">
            Fostering sportsmanship, civic responsibility, house camaraderie, and leadership through structured co-curriculars.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
        {/* House System & Governance */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
            House Camaraderie
          </span>
          <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-900">
            The Inter-House Mentorship Structure
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Every student at Rapid Shakuntlayan is inducted into a school house upon entry. The house system builds vertical bonds across grades, giving junior students senior role models and teaching seniors the obligations of mentorship, fair play, and healthy competition in athletics, debates, and cultural showcases.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-blue-900 mb-1">Student Prefectorial Body</strong>
              Head Boy, Head Girl, Sports Captains, and House Prefects elected annually to lead school assemblies and maintain discipline.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-blue-900 mb-1">Inter-House Trophies</strong>
              Year-long contests in academic quizzing, athletics, declamation, and fine arts culminating in the Annual Rolling Trophy.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-blue-900 mb-1">Community Outreach & Clubs</strong>
              Eco-Club, Science & Robotics Society, Literary & Debating Forum, and Youth Parliament.
            </div>
          </div>
        </div>

        {/* Six Dimensions of Student Life */}
        <LifeAtRapid />

        <div className="p-8 rounded-3xl bg-blue-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="font-outfit text-xl font-bold">Experience Life at Shakuntlayan</h3>
            <p className="text-xs text-slate-300 mt-1">Submit an admission enquiry to discover our active student societies.</p>
          </div>
          <Link
            to="/shakuntlayan/admissions"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shrink-0"
          >
            Apply for Class 1–12 Admissions →
          </Link>
        </div>
      </div>
    </div>
  );
};
