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
    <footer className="relative bg-[#020617] text-[#CBD5E1] pt-16 pb-24 lg:pb-12 border-t border-[#162032] overflow-hidden">
      {/* Top Hairline Metallic Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#F59E0B]/60 to-transparent" />

      {/* Ambient Radial Mesh in Deep Navy */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#162032]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#0F172A]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#020617] p-[2px] ring-1 ring-[#F59E0B]/50 shadow-md shrink-0">
                <div className="w-full h-full rounded-[9px] bg-[#0F172A] border border-[#F59E0B]/30 flex items-center justify-center">
                  <svg className="w-6 h-6" viewBox="0 0 64 64" fill="none">
                    <path
                      d="M32 9L49 15.5V32C49 44 41.5 52.5 32 55.5C22.5 52.5 15 44 15 32V15.5L32 9Z"
                      stroke="#FBBF24"
                      strokeWidth="2.2"
                      fill="#162032"
                    />
                    <path
                      d="M32 26C27.5 22.5 22 22.5 19 23.5V40C22 39 27.5 39 32 42.5C36.5 39 42 39 45 40V23.5C42 22.5 36.5 22.5 32 26Z"
                      fill="#F8FAFC"
                      stroke="#F59E0B"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
              </div>
              <span className="font-outfit font-extrabold text-2xl tracking-tight text-white">
                RAPID <span className="text-[#F59E0B]">SCHOOLS</span>
              </span>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed max-w-sm font-sans">
              An integrated educational ecosystem fostering intellectual discipline, creative vitality, and character distinction from early childhood through senior secondary.
            </p>

            {/* School Distinction Divisions */}
            <div className="space-y-2.5 pt-2">
              <Link
                to="/dreamz"
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0C1425] border border-[#162032] hover:border-[#F59E0B]/50 hover:bg-[#0F172A] transition-all group"
              >
                <div className="p-2 rounded-xl bg-[#F59E0B]/15 text-[#FDE68A] shrink-0 border border-[#F59E0B]/30">
                  <Sparkles className="w-4 h-4 text-[#FDE68A]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-[#FDE68A] transition-colors">
                    {settings.dreamzName}
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">
                    {settings.dreamzSubtitle} • {settings.dreamzTagline}
                  </div>
                </div>
              </Link>

              <Link
                to="/shakuntlayan"
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#0C1425] border border-[#162032] hover:border-[#115E59]/70 hover:bg-[#0F172A] transition-all group"
              >
                <div className="p-2 rounded-xl bg-[#115E59]/30 text-[#99F6E4] shrink-0 border border-[#115E59]/50">
                  <GraduationCap className="w-4 h-4 text-[#2DD4BF]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white group-hover:text-[#99F6E4] transition-colors">
                    {settings.shakuntlayanName}
                  </div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">
                    {settings.shakuntlayanSubtitle}
                  </div>
                </div>
              </Link>
            </div>

            {/* Social Media Links */}
            {settings.socialLinks?.facebook && (
              <div className="pt-2 flex items-center gap-2">
                <a
                  href={settings.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#1877F2]/15 hover:bg-[#1877F2]/25 text-[#93C5FD] border border-[#1877F2]/30 text-xs font-medium transition-colors"
                >
                  <span className="w-5 h-5 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-[11px]">f</span>
                  <span>Facebook Official</span>
                </a>
              </div>
            )}
          </div>

          {/* Institutional Navigation / Explore */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#F59E0B] font-mono">
              Academic Wings
            </h3>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link to="/about" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>About Our Vision</span>
                </Link>
              </li>
              <li>
                <Link to="/dreamz/approach" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Early Learning Approach</span>
                </Link>
              </li>
              <li>
                <Link to="/shakuntlayan/academics" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>CBSE Academic Stages</span>
                </Link>
              </li>
              <li>
                <Link to="/shakuntlayan/campus" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Campus Facilities</span>
                </Link>
              </li>
              <li>
                <Link to="/shakuntlayan/student-life" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Student Life & Pillars</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Institutional Gallery</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Admissions & Communications */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#F59E0B] font-mono">
              Admissions
            </h3>
            <ul className="space-y-2.5 text-sm text-[#94A3B8]">
              <li>
                <Link to="/admissions" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Admission Procedure</span>
                </Link>
              </li>
              <li>
                <Link to="/visit" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Book Campus Visit</span>
                </Link>
              </li>
              <li>
                <Link to="/notices" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Official Notice Board</span>
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>News & Happenings</span>
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Calendar & Events</span>
                </Link>
              </li>
              <li>
                <Link to="/downloads" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 group">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F59E0B]/60 group-hover:translate-x-0.5 transition-transform" />
                  <span>Download Center</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Institutional Contact & Verified CBSE Badge */}
          <div className="space-y-3.5">
            <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-[#F59E0B] font-mono">
              Campus Office
            </h3>
            <ul className="space-y-3 text-xs text-[#94A3B8]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div className="leading-relaxed space-y-1">
                  <div>
                    <span className="text-white font-mono text-[11px] font-bold block">Senior Wing:</span>
                    <span>Tekuna Farm, BMP-3, Bodhgaya Road, Gaya – 824231</span>
                  </div>
                  <div className="pt-1">
                    <span className="text-white font-mono text-[11px] font-bold block">Junior Wing:</span>
                    <span>Prawanand Path, A.P. Colony, Gaya – 823001</span>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href="tel:+919153830765" className="hover:text-[#FDE68A] transition-colors font-semibold block text-white">
                    +91 91538 30765 / +91 94312 63570
                  </a>
                  <a href="tel:+7765805526" className="hover:text-[#FDE68A] transition-colors text-[11px] font-mono text-[#CBD5E1] block">
                    Junior Wing: +91 77658 05526
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <a href={`mailto:${settings.email}`} className="hover:text-[#FDE68A] transition-colors truncate">
                  {settings.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>Mon–Sat: 8:30 AM – 3:30 PM</span>
              </li>

              {/* Verified CBSE Disclosure Badge */}
              <li className="pt-2">
                <div className="p-3.5 rounded-2xl bg-[#0C1425] border border-[#F59E0B]/30 relative overflow-hidden group">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="w-6 h-6 rounded-full bg-[#F59E0B]/20 flex items-center justify-center border border-[#F59E0B]/40 text-[#FDE68A]">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide uppercase">
                      CBSE Affiliation
                    </span>
                  </div>
                  <p className="text-[11px] text-[#94A3B8] leading-relaxed">
                    Rapid Shakuntalayan School is affiliated with the Central Board of Secondary Education, New Delhi.
                  </p>
                  <div className="mt-2 text-[10px] font-mono text-[#FDE68A] font-semibold bg-[#020617] px-2.5 py-1 rounded border border-[#F59E0B]/20 inline-block">
                    Affiliation No. 331099 • School Code: 65598
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <p>
            © {new Date().getFullYear()} {settings.brandName}. Fostering intellectual distinction and noble character.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-[#FDE68A] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#FDE68A] transition-colors">
              Terms of Use
            </Link>
            <Link to="/contact" className="hover:text-[#FDE68A] transition-colors">
              Directions
            </Link>
            <Link to="/admin" className="hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 font-semibold text-[#F59E0B]">
              <Lock className="w-3 h-3" />
              <span>Admin Console</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
