import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import {
  Calendar,
  CheckCircle2,
  Clock,
  CreditCard,
  FileText,
  Bus,
  Award,
  BookOpen,
  Lock,
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';

const futureModules = [
  {
    title: 'Daily Attendance & Leave Tracker',
    icon: CheckCircle2,
    desc: 'Live SMS notifications, punch-in timestamps, monthly attendance analytics, and direct leave request approvals.'
  },
  {
    title: 'Homework & Assignment Vault',
    icon: BookOpen,
    desc: 'Classroom homework uploads, downloadable worksheets, project guidelines, and submission status.'
  },
  {
    title: 'Report Cards & Term Analytics',
    icon: Award,
    desc: 'Progressive grade transcripts, teacher feedback rubrics, and subject-wise percentile progression graphs.'
  },
  {
    title: 'Fee Payment & Receipts',
    icon: CreditCard,
    desc: 'Automated fee invoices, UPI and netbanking gateway integration, and instant download of certified tax receipts.'
  },
  {
    title: 'Real-time Transport & GPS Bus Tracker',
    icon: Bus,
    desc: 'Live vehicle tracking, driver contact credentials, ETA arrival alerts, and designated stop notifications.'
  },
  {
    title: 'Class Timetable & Exam Date Sheet',
    icon: Calendar,
    desc: 'Weekly schedule of lectures, subject teacher mapping, and semester evaluation timetables.'
  }
];

export const ParentPortalPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Breadcrumbs items={[{ label: 'Parent Portal (Preview)' }]} />

      {/* Banner */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-500/30">
            System Preview • Coming Soon
          </span>
          <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
            Integrated Parent Digital Portal
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300">
            A secure single-sign-on gateway designed to connect parents with real-time academic progression, fees, attendance, and transport tracking.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        
        {/* Architectural Advisory Notice */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200 space-y-4 mb-10">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-50 text-sky-700">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-outfit text-xl font-bold text-slate-900">
                Portal Architecture Roadmap
              </h2>
              <p className="text-xs text-slate-500">
                In strict accordance with our security guidelines, no simulated or fake authentication is deployed. The digital portal is currently undergoing secure ERP integration.
              </p>
            </div>
          </div>
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futureModules.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-sky-600" />
                    </div>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 border border-slate-200">
                      Coming Soon
                    </span>
                  </div>

                  <h3 className="font-outfit text-base font-bold text-slate-900 mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] font-medium text-slate-400">
                  Integration scheduled with school ERP
                </div>
              </div>
            );
          })}
        </div>

        {/* Interim Parent Support */}
        <div className="mt-12 p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-outfit text-xl font-bold text-white">
              Need Circulars or Official Notices Right Now?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              All active circulars, date sheets, and transport advisories are published immediately on our Notice Board.
            </p>
          </div>
          <Link
            to="/notices"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2"
          >
            <span>Access Notice Board</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
