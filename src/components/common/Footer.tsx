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
    <footer className="bg-[#24060B] text-[#D8C7B8] pt-16 pb-24 lg:pb-12 border-t border-[#461019]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#3D0F17]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3D0B12] border border-[#BD672A]/40 flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 64 64" fill="none">
                  <path d="M32 9L49 15.5V32C49 44 41.5 52.5 32 55.5C22.5 52.5 15 44 15 32V15.5L32 9Z" stroke="#D47A3B" strokeWidth="2.2" fill="#4F101A"/>
                  <path d="M32 26C27.5 22.5 22 22.5 19 23.5V40C22 39 27.5 39 32 42.5C36.5 39 42 39 45 40V23.5C42 22.5 36.5 22.5 32 26Z" fill="#FAF6F0" stroke="#D47A3B" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="font-outfit font-extrabold text-2xl tracking-tight text-white">
                RAPID <span className="text-[#D47A3B]">SCHOOLS</span>
              </span>
            </div>
            <p className="text-sm text-[#C4B2A2] leading-relaxed max-w-sm">
              An integrated educational ecosystem fostering intellectual discipline, creative vitality, and character distinction from early childhood through senior secondary.
            </p>

            {/* School Distinction Box */}
            <div className="space-y-2 pt-2">
              <Link
                to="/dreamz"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#330910] border border-[#4F131D] hover:border-[#BD672A]/60 transition-colors group"
              >
                <Sparkles className="w-4 h-4 text-[#F97316] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-[#FDBA74] transition-colors">
                    {settings.dreamzName}
                  </div>
                  <div className="text-[11px] text-[#BFAEA0]">
                    {settings.dreamzSubtitle} • {settings.dreamzTagline}
                  </div>
                </div>
              </Link>

              <Link
                to="/shakuntlayan"
                className="flex items-start gap-2.5 p-3 rounded-xl bg-[#330910] border border-[#4F131D] hover:border-[#064E3B]/80 transition-colors group"
              >
                <GraduationCap className="w-4 h-4 text-[#34D399] mt-0.5 shrink-0" />
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-[#6EE7B7] transition-colors">
                    {settings.shakuntlayanName}
                  </div>
                  <div className="text-[11px] text-[#BFAEA0]">
                    {settings.shakuntlayanSubtitle}
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links / Explore */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#D47A3B]">
              Explore
            </h3>
            <ul className="space-y-2 text-sm text-[#BFAEA0]">
              <li>
                <Link to="/about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#63484C]" />
                  About Our Vision
                </Link>
              </li>
              <li>
                <Link to="/dreamz/approach" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#63484C]" />
                  Early Learning Approach
                </Link>
              </li>
              <li>
                <Link to="/shakuntlayan/academics" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#63484C]" />
                  CBSE Academic Stages
                </Link>
              </li>
              <li>
                <Link to="/shakuntlayan/campus" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#63484C]" />
                  Campus Facilities
                </Link>
              </li>
              <li>
                <Link to="/shakuntlayan/student-life" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#63484C]" />
                  Student Life & Pillars
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#63484C]" />
                  Institutional Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions & Info */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#D47A3B]">
              Admissions & Info
            </h3>
            <ul className="space-y-2 text-sm text-[#BFAEA0]">
              <li>
                <Link to="/admissions" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#63484C]" />
                  Admission Procedure
                </Link>
              </li>
              <li>
                <Link to="/visit" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#63484C]" />
                  Book Campus Visit
                </Link>
              </li>
              <li>
                <Link to="/notices" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#63484C]" />
                  Notice Board
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#63484C]" />
                  News & Events
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#63484C]" />
                  Download Center
                </Link>
              </li>
              <li>
                <Link to="/portal" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#63484C]" />
                  Parent Portal Preview
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold tracking-widest uppercase text-[#D47A3B]">
              Institutional Contact
            </h3>
            <ul className="space-y-3 text-xs text-[#BFAEA0]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D47A3B] shrink-0 mt-0.5" />
                <span>{settings.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D47A3B] shrink-0" />
                <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white transition-colors">
                  {settings.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D47A3B] shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-white transition-colors truncate">
                  {settings.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D47A3B] shrink-0 mt-0.5" />
                <span>Mon–Sat: 8:30 AM – 3:30 PM</span>
              </li>
              <li className="pt-2">
                <div className="p-2.5 rounded-xl bg-[#330910] border border-[#4F131D] text-[11px] text-[#A8988C]">
                  <span className="font-semibold text-white block mb-0.5">Affiliation Disclosure:</span>
                  Rapid Shakuntlayan is affiliated with CBSE, New Delhi. {settings.cbseAffiliationNumber}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7B6E]">
          <p>
            © {new Date().getFullYear()} {settings.brandName}. Designed with institutional distinction.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#D47A3B] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#D47A3B] transition-colors">
              Terms of Use
            </Link>
            <Link to="/contact" className="hover:text-[#D47A3B] transition-colors">
              Directions
            </Link>
            <Link to="/admin" className="hover:text-[#D47A3B] transition-colors flex items-center gap-1">
              <Lock className="w-3 h-3" />
              <span>Admin Console</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
