import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home, Sparkles, GraduationCap, ArrowRight } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[80vh] bg-slate-900 text-white flex items-center justify-center p-4">
      <div className="max-w-xl w-full text-center space-y-6 py-16">
        <div className="w-20 h-20 rounded-3xl bg-amber-500/10 text-amber-400 border border-amber-500/20 flex items-center justify-center mx-auto shadow-xl">
          <Compass className="w-10 h-10 animate-spin-slow" />
        </div>

        <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
          Error 404 • Page Not Found
        </span>

        <h1 className="font-outfit text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
          Lost Your Way?
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-md mx-auto leading-relaxed">
          The educational page or resource you are looking for may have moved or is temporarily unavailable. Let's guide you back to Rapid Schools.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Go to Home</span>
          </Link>

          <Link
            to="/admissions"
            className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all flex items-center gap-2"
          >
            <span>Admissions Portal</span>
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl bg-transparent hover:bg-white/5 text-slate-300 hover:text-white font-medium text-xs uppercase tracking-wider transition-all"
          >
            <span>Contact Desk</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs text-slate-400 max-w-sm mx-auto">
          <Link to="/dreamz" className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-center transition-colors">
            <Sparkles className="w-4 h-4 text-amber-400 mx-auto mb-1" />
            <span className="font-semibold block text-slate-200">Rapid Dreamz</span>
            <span className="text-[10px] text-slate-400">Play Group to UKG</span>
          </Link>

          <Link to="/shakuntlayan" className="p-3 rounded-xl bg-slate-800/60 hover:bg-slate-800 text-center transition-colors">
            <GraduationCap className="w-4 h-4 text-sky-400 mx-auto mb-1" />
            <span className="font-semibold block text-slate-200">Rapid Shakuntlayan</span>
            <span className="text-[10px] text-slate-400">Class 1 to 12 (CBSE)</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
