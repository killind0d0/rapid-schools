import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSite } from '../../context/SiteContext';
import {
  Phone,
  MessageSquare,
  Sparkles,
  GraduationCap,
  Calendar,
  Menu,
  X,
  Building2,
  Lock
} from 'lucide-react';

export const Header: React.FC = () => {
  const { settings } = useSite();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDreamz = location.pathname.startsWith('/dreamz');
  const isShakuntlayan = location.pathname.startsWith('/shakuntlayan');

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_10px_30px_-10px_rgba(35,7,11,0.12)] border-b border-[#E8DFD1]'
          : 'border-b border-[#E8DFD1]'
      }`}
    >
      {/* Top Institutional Utility Bar in Imperial Obsidian Claret Satin */}
      <div className="bg-[#1C0306] text-[#EFE7DC] text-xs border-b border-[#3D0B12]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
          {/* School Selector Pills */}
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-[#BD672A] font-semibold hidden md:inline text-[10px] uppercase tracking-widest font-mono">
              Ecosystem:
            </span>
            <Link
              to="/"
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                !isDreamz && !isShakuntlayan
                  ? 'bg-gradient-to-r from-[#BD672A] to-[#D47A3B] text-white font-bold ring-1 ring-[#F3C292]/60 shadow-[0_0_12px_rgba(189,103,42,0.4)]'
                  : 'text-[#DBCDC0] hover:text-white hover:bg-[#2C070C]'
              }`}
            >
              Rapid Schools
            </Link>
            <div className="h-3 w-px bg-[#3D0B12]" />
            <Link
              to="/dreamz"
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                isDreamz
                  ? 'bg-[#BD672A] text-white font-bold ring-1 ring-[#F3C292]/60 shadow-[0_0_12px_rgba(189,103,42,0.4)]'
                  : 'text-[#DBCDC0] hover:text-white hover:bg-[#2C070C]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#FED7AA]" />
              <span>Rapid Dreamz <span className="hidden sm:inline text-[10px] opacity-80">(PG–UKG)</span></span>
            </Link>
            <div className="h-3 w-px bg-[#3D0B12]" />
            <Link
              to="/shakuntlayan"
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                isShakuntlayan
                  ? 'bg-[#064E3B] text-white font-bold ring-1 ring-[#10B981]/60 shadow-[0_0_12px_rgba(16,185,129,0.35)]'
                  : 'text-[#DBCDC0] hover:text-white hover:bg-[#2C070C]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#A7F3D0]" />
              <span>Rapid Shakuntlayan <span className="hidden sm:inline text-[10px] opacity-80">(Class 1–12)</span></span>
            </Link>
          </div>

          {/* Quick Helplines & Admin */}
          <div className="flex items-center gap-3 sm:gap-5 ml-auto text-[11px] sm:text-xs">
            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-[#EFE7DC] hover:text-[#F3C292] transition-colors"
              title="Call School Office"
            >
              <Phone className="w-3 h-3 text-[#D47A3B]" />
              <span className="hidden sm:inline text-[#DBCDC0]">Admissions:</span>
              <span className="font-semibold">{settings.phone}</span>
            </a>
            <div className="h-3 w-px bg-[#3D0B12] hidden sm:block" />
            <a
              href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Rapid%20Schools,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#86EFAC] hover:text-white transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp Helpdesk</span>
            </a>
            <div className="h-3 w-px bg-[#3D0B12]" />
            <Link
              to="/admin"
              className="flex items-center gap-1 text-[#D47A3B] hover:text-[#F3C292] transition-colors"
              title="Admin CMS"
            >
              <Lock className="w-2.5 h-2.5" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar in Alabaster Sandstone with Frosted Glass Blur */}
      <div className="bg-[#FCFAF6]/95 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Brand Emblem with Dual-Ring Metallic Framing */}
            <Link
              to={isDreamz ? '/dreamz' : isShakuntlayan ? '/shakuntlayan' : '/'}
              className="flex items-center gap-3 group shrink-0"
            >
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#2C070C] to-[#1C0306] p-[2px] ring-1 ring-[#BD672A]/40 shadow-md group-hover:ring-[#BD672A] transition-all shrink-0">
                <div className="w-full h-full rounded-[10px] bg-[#2C070C] border border-[#BD672A]/30 flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 64 64" fill="none">
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
                    <path d="M32 26V42.5" stroke="#BD672A" strokeWidth="1.5" />
                    <path
                      d="M32 15C33.5 17.5 35 19.5 34 21.5C33 23 31 23 30 21.5C29 19.5 30.5 17.5 32 15Z"
                      fill="#D47A3B"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-outfit font-extrabold text-lg sm:text-xl lg:text-2xl tracking-tight text-[#23070B] leading-none mb-1">
                  {isDreamz ? (
                    <>RAPID <span className="text-[#BD672A]">DREAMZ</span></>
                  ) : isShakuntlayan ? (
                    <>RAPID <span className="text-[#064E3B]">SHAKUNTLAYAN</span></>
                  ) : (
                    <>RAPID <span className="text-[#BD672A]">SCHOOLS</span></>
                  )}
                </span>
                <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-[#6E5D5F] leading-none">
                  {isDreamz
                    ? 'Junior Wing • Play Group to UKG'
                    : isShakuntlayan
                    ? 'Class 1 to 12 • Affiliated to CBSE, New Delhi'
                    : 'Play Group to Class 12 • An Integrated Ecosystem'}
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden xl:flex items-center gap-1 text-[13px] font-semibold text-[#423738]">
              {isDreamz ? (
                // Dreamz Navigation
                <>
                  <Link
                    to="/dreamz"
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/dreamz'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Overview
                  </Link>
                  <Link
                    to="/dreamz/approach"
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/dreamz/approach'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Learning Approach
                  </Link>
                  <Link
                    to="/dreamz/academics"
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/dreamz/academics'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Early Years Stages
                  </Link>
                  <Link
                    to="/gallery"
                    className="px-3 py-1.5 rounded-lg hover:text-[#BD672A] hover:bg-[#F2EAE0] transition-colors"
                  >
                    Play Campus
                  </Link>
                  <Link
                    to="/dreamz/admissions"
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/dreamz/admissions'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Admissions
                  </Link>
                  <Link
                    to="/"
                    className="px-3 py-1.5 text-xs font-bold text-[#6E5D5F] hover:text-[#23070B] transition-colors flex items-center gap-1.5 border-l pl-3 ml-2 border-[#E8DFD1]"
                    title="Return to Rapid Schools Main Portal"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#BD672A]" />
                    <span>Rapid Schools</span>
                  </Link>
                </>
              ) : isShakuntlayan ? (
                // Shakuntlayan Navigation
                <>
                  <Link
                    to="/shakuntlayan"
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/shakuntlayan'
                        ? 'text-[#064E3B] font-bold bg-[#064E3B]/10 border border-[#064E3B]/20'
                        : 'hover:text-[#064E3B] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Overview
                  </Link>
                  <Link
                    to="/shakuntlayan/academics"
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/shakuntlayan/academics'
                        ? 'text-[#064E3B] font-bold bg-[#064E3B]/10 border border-[#064E3B]/20'
                        : 'hover:text-[#064E3B] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Academic Journey (1–12)
                  </Link>
                  <Link
                    to="/shakuntlayan/campus"
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/shakuntlayan/campus'
                        ? 'text-[#064E3B] font-bold bg-[#064E3B]/10 border border-[#064E3B]/20'
                        : 'hover:text-[#064E3B] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Campus Facilities
                  </Link>
                  <Link
                    to="/shakuntlayan/student-life"
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/shakuntlayan/student-life'
                        ? 'text-[#064E3B] font-bold bg-[#064E3B]/10 border border-[#064E3B]/20'
                        : 'hover:text-[#064E3B] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Student Life
                  </Link>
                  <Link
                    to="/shakuntlayan/admissions"
                    className={`px-3 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/shakuntlayan/admissions'
                        ? 'text-[#064E3B] font-bold bg-[#064E3B]/10 border border-[#064E3B]/20'
                        : 'hover:text-[#064E3B] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    CBSE Admissions
                  </Link>
                  <Link
                    to="/"
                    className="px-3 py-1.5 text-xs font-bold text-[#6E5D5F] hover:text-[#23070B] transition-colors flex items-center gap-1.5 border-l pl-3 ml-2 border-[#E8DFD1]"
                    title="Return to Rapid Schools Main Portal"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#064E3B]" />
                    <span>Rapid Schools</span>
                  </Link>
                </>
              ) : (
                // Parent Ecosystem Navigation
                <>
                  <Link
                    to="/"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/about'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/dreamz"
                    className="px-2.5 py-1.5 rounded-lg text-[#BD672A] hover:text-[#A2521C] hover:bg-[#BD672A]/10 transition-colors"
                  >
                    Rapid Dreamz
                  </Link>
                  <Link
                    to="/shakuntlayan"
                    className="px-2.5 py-1.5 rounded-lg text-[#064E3B] hover:text-[#043327] hover:bg-[#064E3B]/10 transition-colors"
                  >
                    Rapid Shakuntlayan
                  </Link>
                  <Link
                    to="/admissions"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/admissions'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Admissions
                  </Link>
                  <Link
                    to="/notices"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/notices'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Notices
                  </Link>
                  <Link
                    to="/news"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/news'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    News
                  </Link>
                  <Link
                    to="/events"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/events'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Events
                  </Link>
                  <Link
                    to="/gallery"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/gallery'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Gallery
                  </Link>
                  <Link
                    to="/downloads"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/downloads'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Downloads
                  </Link>
                  <Link
                    to="/contact"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors ${
                      location.pathname === '/contact'
                        ? 'text-[#BD672A] font-bold bg-[#BD672A]/10 border border-[#BD672A]/20'
                        : 'hover:text-[#BD672A] hover:bg-[#F2EAE0]'
                    }`}
                  >
                    Contact
                  </Link>
                </>
              )}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/visit"
                className="luxury-btn-outline px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                Book Campus Tour
              </Link>
              <Link
                to={isDreamz ? '/dreamz/admissions' : isShakuntlayan ? '/shakuntlayan/admissions' : '/admissions'}
                className="luxury-btn-primary px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all"
              >
                Apply 2025–26
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-[#23070B] hover:bg-[#F2EAE0] focus:outline-none focus:ring-2 focus:ring-[#BD672A]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FCFAF6] border-b border-[#E8DFD1] shadow-2xl px-4 pt-4 pb-8 max-h-[85vh] overflow-y-auto">
          {/* Quick Actions in Mobile Drawer */}
          <div className="grid grid-cols-2 gap-2.5 mb-5 pb-4 border-b border-[#E8DFD1]">
            <Link
              to="/admissions"
              className="luxury-btn-primary flex items-center justify-center py-2.5 px-3 text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center"
            >
              <span>Apply 2025–26</span>
            </Link>
            <Link
              to="/visit"
              className="luxury-btn-outline flex items-center justify-center py-2.5 px-3 font-bold text-xs uppercase tracking-wider rounded-xl text-center"
            >
              <span>Book Tour</span>
            </Link>
          </div>

          <div className="space-y-1 text-sm font-semibold text-[#23070B]">
            <div className="text-[10px] font-bold text-[#BD672A] uppercase tracking-[0.2em] py-1.5">
              School Institutions
            </div>
            <Link
              to="/"
              className={`block px-3 py-2 rounded-xl transition-colors ${
                location.pathname === '/'
                  ? 'text-[#BD672A] bg-[#BD672A]/10 font-bold border border-[#BD672A]/20'
                  : 'hover:bg-[#F2EAE0]'
              }`}
            >
              Rapid Schools Parent Ecosystem
            </Link>
            <Link
              to="/dreamz"
              className={`block px-3 py-2 rounded-xl transition-colors ${
                isDreamz
                  ? 'text-[#BD672A] bg-[#BD672A]/15 font-bold border border-[#BD672A]/30'
                  : 'hover:bg-[#F2EAE0]'
              }`}
            >
              Rapid Dreamz (Play Group to UKG)
            </Link>
            <Link
              to="/shakuntlayan"
              className={`block px-3 py-2 rounded-xl transition-colors ${
                isShakuntlayan
                  ? 'text-[#064E3B] bg-[#064E3B]/10 font-bold border border-[#064E3B]/20'
                  : 'hover:bg-[#F2EAE0]'
              }`}
            >
              Rapid Shakuntlayan (Class 1 to 12 CBSE)
            </Link>

            <div className="text-[10px] font-bold text-[#BD672A] uppercase tracking-[0.2em] pt-4 pb-1.5">
              Academics & Life
            </div>
            <Link to="/about" className="block px-3 py-2 rounded-xl hover:bg-[#F2EAE0]">
              About Institutional Vision
            </Link>
            <Link to="/dreamz/approach" className="block px-3 py-2 rounded-xl hover:bg-[#F2EAE0]">
              Dreamz Early Childhood Approach
            </Link>
            <Link to="/shakuntlayan/academics" className="block px-3 py-2 rounded-xl hover:bg-[#F2EAE0]">
              Shakuntlayan Academic Journey
            </Link>
            <Link to="/shakuntlayan/campus" className="block px-3 py-2 rounded-xl hover:bg-[#F2EAE0]">
              Campus Facilities & Labs
            </Link>
            <Link to="/gallery" className="block px-3 py-2 rounded-xl hover:bg-[#F2EAE0]">
              Photo & Campus Gallery
            </Link>

            <div className="text-[10px] font-bold text-[#BD672A] uppercase tracking-[0.2em] pt-4 pb-1.5">
              Information & Administration
            </div>
            <Link to="/notices" className="block px-3 py-2 rounded-xl hover:bg-[#F2EAE0]">
              Official Circulars & Notice Board
            </Link>
            <Link to="/news" className="block px-3 py-2 rounded-xl hover:bg-[#F2EAE0]">
              Institutional News
            </Link>
            <Link to="/events" className="block px-3 py-2 rounded-xl hover:bg-[#F2EAE0]">
              Calendar & Events
            </Link>
            <Link to="/downloads" className="block px-3 py-2 rounded-xl hover:bg-[#F2EAE0]">
              Download Center
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-xl hover:bg-[#F2EAE0]">
              Contact & Directions
            </Link>
            <Link to="/admin" className="block px-3 py-2 rounded-xl hover:bg-[#F2EAE0] text-[#BD672A] font-bold">
              Admin CMS Console
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
