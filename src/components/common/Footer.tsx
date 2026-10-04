import React from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../../context/SiteContext';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  GraduationCap,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Lock
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { settings } = useSite();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 64 64" fill="none">
                  <path d="M32 10L48 16V31C48 42.5 41 51 32 54C23 51 16 42.5 16 31V16L32 10Z" stroke="#E2A12E" strokeWidth="2.5" fill="#132F54"/>
                  <path d="M32 26C28 23 23 23 20 24V40C23 39 28 39 32 42C36 39 41 39 44 40V24C41 23 36 23 32 26Z" fill="#F8FAFC" stroke="#E2A12E" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="font-outfit font-extrabold text-2xl tracking-tight text-white">
                RAPID <span className="text-amber-500">SCHOOLS</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              A unified educational ecosystem dedicated to nurturing curiosity, character, and academic distinction across early childhood and K-12 schooling.
            </p>

            {/* School Distinction Box */}
            <div className="space-y-2 pt-2">
              <Link
                to="/dreamz"
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-colors group"
              >
                <Sparkles className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                    {settings.dreamzName}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {settings.dreamzSubtitle} • {settings.dreamzTagline}
                  </div>
                </div>
              </Link>

              <Link
                to="/shakuntlayan"
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 transition-colors group"
              >
                <GraduationCap className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-amber-400 transition-colors">
                    {settings.shakuntlayanName}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {settings.shakuntlayanSubtitle}
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links / Explore */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-wider uppercase text-amber-400">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  About Our Vision
                </Link>
              </li>
              <li>
                <Link to="/dreamz/approach" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  Early Learning Approach
                </Link>
              </li>
              <li>
                <Link to="/shakuntlayan/academics" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  CBSE Academic Stages
                </Link>
              </li>
              <li>
                <Link to="/shakuntlayan/campus" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link to="/shakuntlayan/student-life" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  Student Life & Pillars
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  Institutional Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions & Info */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-wider uppercase text-amber-400">
              Admissions & Info
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link to="/admissions" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  Admission Procedure
                </Link>
              </li>
              <li>
                <Link to="/visit" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  Book Campus Visit
                </Link>
              </li>
              <li>
                <Link to="/notices" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  Notice Board
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  Download Center
                </Link>
              </li>
              <li>
                <Link to="/portal" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                  Parent Portal Preview
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-wider uppercase text-amber-400">
              Institutional Contact
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {settings.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-white transition-colors truncate">
                  {settings.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Office Hours: Mon–Sat, 8:30 AM – 3:30 PM</span>
              </li>
              <li className="pt-2">
                <div className="p-2.5 rounded bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-300 block mb-0.5">Affiliation Disclosure:</span>
                  Rapid Shakuntlayan is affiliated with CBSE, New Delhi. {settings.cbseAffiliationNumber}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {settings.brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Use
            </Link>
            <Link to="/contact" className="hover:text-slate-400 transition-colors">
              Directions
            </Link>
            <Link to="/admin" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>Admin Console</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
