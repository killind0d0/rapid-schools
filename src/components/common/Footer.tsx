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
  Lock,
  Award
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { settings } = useSite();

  return (
    <footer className="relative bg-[#170204] text-[#D8C7B8] pt-16 pb-24 lg:pb-12 border-t border-[#3D0B12] overflow-hidden">
      {/* Top Hairline Metallic Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#BD672A]/60 to-transparent" />

      {/* Ambient Radial Mesh in Imperial Claret */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#3D0B12]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#BD672A]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2C070C]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#2C070C] to-[#1C0306] p-[2px] ring-1 ring-[#BD672A]/50 shadow-md shrink-0">
                <div className="w-full h-full rounded-[9px] bg-[#2C070C] border border-[#BD672A]/30 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 9L49 15.5V32C49 44 41.5 52.5 32 55.5C22.5 52.5 15 44 15 32V15.5L32 9Z"
                      stroke="#D47A3B"
                      strokeWidth="2.2"
                      fill="#3D0B12"
                    />
                    <path
                      d="M32 26C27.5 22.5 22 22.5 19 23.5V40C22 39 27.5 39 32 42.5C36.5 39 42 39 45 40V23.5C42 22.5 36.5 22.5 32 26Z"
                      fill="#FAF6F0"
                      stroke="#BD672A"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
              <span className="font-outfit font-extrabold text-2xl tracking-tight text-white">
                RAPID <span className="text-[#BD672A]">SCHOOLS</span>
              </span>
            </div>

            <p className="text-sm text-[#C4B2A2] leading-relaxed max-w-sm font-sans">
              An integrated educational ecosystem fostering intellectual discipline, creative vitality, and character distinction from early childhood through senior secondary.
            </p>

            {/* School Distinction Divisions */}
            <div className="space-y-2.5 pt-2">
              <Link
                to="/dreamz"
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#230509] border border-[#3D0B12] hover:border-[#BD672A]/50 hover:bg-[#2C070C] transition-all group"
              >
                <div className="p-2 rounded-xl bg-[#BD672A]/15 text-[#F3C292] shrink-0 border border-[#BD672A]/30">
                  <Sparkles className="w-4 h-4 text-[#F3C292]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-[#F3C292] transition-colors">
                    {settings.dreamzName}
                  </div>
                  <div className="text-[11px] text-[#A8988C] mt-0.5">
                    {settings.dreamzSubtitle} • {settings.dreamzTagline}
                  </div>
                </div>
              </Link>

              <Link
                to="/shakuntlayan"
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#230509] border border-[#3D0B12] hover:border-[#064E3B]/70 hover:bg-[#2C070C] transition-all group"
              >
                <div className="p-2 rounded-xl bg-[#064E3B]/30 text-[#A7F3D0] shrink-0 border border-[#064E3B]/50">
                  <GraduationCap className="w-4 h-4 text-[#34D399]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-[#A7F3D0] transition-colors">
                    {settings.shakuntlayanName}
                  </div>
                  <div className="text-[11px] text-[#A8988C] mt-0.5">
                    {settings.shakuntlayanSubtitle}
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Institutional Navigation / Explore */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#BD672A] font-mono">
              Academic Wings
            </h3>
            <ul className="space-y-2.5 text-sm text-[#BFAEA0]">
              <li>
                <Link to="/about" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BD672A]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>About Our Vision</span>
                </Link>
              </li>
              <li>
                <Link to="/dreamz/approach" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BD672A]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Early Learning Approach</span>
                </Link>
              </li>
              <li>
                <Link to="/shakuntlayan/academics" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BD672A]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>CBSE Academic Stages</span>
                </Link>
              </li>
              <li>
                <Link to="/shakuntlayan/campus" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BD672A]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Campus Facilities</span>
                </Link>
              </li>
              <li>
                <Link to="/shakuntlayan/student-life" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BD672A]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Student Life & Pillars</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BD672A]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Institutional Gallery</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions & Communications */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#BD672A] font-mono">
              Admissions
            </h3>
            <ul className="space-y-2.5 text-sm text-[#BFAEA0]">
              <li>
                <Link to="/admissions" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BD672A]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Admission Procedure</span>
                </Link>
              </li>
              <li>
                <Link to="/visit" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BD672A]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Book Campus Visit</span>
                </Link>
              </li>
              <li>
                <Link to="/notices" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BD672A]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Official Notice Board</span>
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BD672A]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>News & Happenings</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BD672A]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Calendar & Events</span>
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#BD672A]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Download Center</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Contact & Verified CBSE Badge */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#BD672A] font-mono">
              Campus Office
            </h3>
            <ul className="space-y-3 text-xs text-[#BFAEA0]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#BD672A] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{settings.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#BD672A] shrink-0" />
                <a href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-[#F3C292] transition-colors font-semibold">
                  {settings.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#BD672A] shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-[#F3C292] transition-colors truncate">
                  {settings.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#BD672A] shrink-0 mt-0.5" />
                <span>Mon–Sat: 8:30 AM – 3:30 PM</span>
              </li>

              {/* Verified CBSE Disclosure Badge */}
              <li className="pt-2">
                <div className="p-3.5 rounded-2xl bg-[#230509] border border-[#BD672A]/30 relative overflow-hidden group">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#BD672A]/20 flex items-center justify-center border border-[#BD672A]/40 text-[#F3C292]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#BD672A]" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide uppercase">
                      CBSE Affiliation
                    </span>
                  </div>
                  <p className="text-[11px] text-[#C4B2A2] leading-relaxed">
                    Rapid Shakuntlayan is proudly affiliated with the Central Board of Secondary Education, New Delhi.
                  </p>
                  <div className="mt-2 text-[10px] font-mono text-[#F3C292] font-semibold bg-[#1C0306] px-2 py-1 rounded border border-[#BD672A]/20 inline-block">
                    {settings.cbseAffiliationNumber}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8C7B6E]">
          <p>
            © {new Date().getFullYear()} {settings.brandName}. Fostering intellectual distinction and noble character.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#F3C292] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#F3C292] transition-colors">
              Terms of Use
            </Link>
            <Link to="/contact" className="hover:text-[#F3C292] transition-colors">
              Directions
            </Link>
            <Link to="/admin" className="hover:text-[#F3C292] transition-colors flex items-center gap-1.5 font-semibold text-[#BD672A]">
              <Lock className="w-3 h-3" />
              <span>Admin Console</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
