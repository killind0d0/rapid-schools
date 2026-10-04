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
  Lock,
  ChevronDown
} from 'lucide-react';

export const Header: React.FC = () => {
  const { settings } = useSite();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [moreMenuOpen, setMoreMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMoreMenuOpen(false);
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
          ? 'shadow-[0_10px_30px_-10px_rgba(2,6,23,0.12)] border-b border-[#E2E8F0]'
          : 'border-b border-[#E2E8F0]'
      }`}
    >
      {/* Top Institutional Utility Bar in Academic Sapphire Navy */}
      <div className="bg-[#020617] text-[#E2E8F0] text-xs border-b border-[#162032]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
          {/* School Selector Pills */}
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-[#F59E0B] font-semibold hidden md:inline text-[10px] uppercase tracking-widest font-mono">
              Ecosystem:
            </span>
            <Link
              to="/"
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all ${
                !isDreamz && !isShakuntlayan
                  ? 'bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white font-bold ring-1 ring-[#FDE68A]/60 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                  : 'text-[#CBD5E1] hover:text-white hover:bg-[#0F172A]'
              }`}
            >
              Rapid Schools
            </Link>
            <div className="h-3 w-px bg-[#162032]" />
            <Link
              to="/dreamz"
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                isDreamz
                  ? 'bg-[#F59E0B] text-white font-bold ring-1 ring-[#FDE68A]/60 shadow-[0_0_12px_rgba(245,158,11,0.4)]'
                  : 'text-[#CBD5E1] hover:text-white hover:bg-[#0F172A]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#FDE68A]" />
              <span>Rapid Dreamz <span className="hidden sm:inline text-[10px] opacity-80">(PG–UKG)</span></span>
            </Link>
            <div className="h-3 w-px bg-[#162032]" />
            <Link
              to="/shakuntlayan"
              className={`px-3 py-1 rounded-full text-[11px] font-semibold transition-all flex items-center gap-1.5 ${
                isShakuntlayan
                  ? 'bg-[#115E59] text-white font-bold ring-1 ring-[#14B8A6]/60 shadow-[0_0_12px_rgba(20,184,166,0.35)]'
                  : 'text-[#CBD5E1] hover:text-white hover:bg-[#0F172A]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-[#99F6E4]" />
              <span>Rapid Shakuntlayan <span className="hidden sm:inline text-[10px] opacity-80">(Class 1–12)</span></span>
            </Link>
          </div>

          {/* Quick Helplines & Admin */}
          <div className="flex items-center gap-3 sm:gap-5 ml-auto text-[11px] sm:text-xs">
            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-[#E2E8F0] hover:text-[#FDE68A] transition-colors"
              title="Call School Office"
            >
              <Phone className="w-3 h-3 text-[#FBBF24]" />
              <span className="hidden sm:inline text-[#CBD5E1]">Admissions:</span>
              <span className="font-semibold">{settings.phone}</span>
            </a>
            <div className="h-3 w-px bg-[#162032] hidden sm:block" />
            <a
              href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Rapid%20Schools,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#5EEAD4] hover:text-white transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp Helpdesk</span>
            </a>
            <div className="h-3 w-px bg-[#162032]" />
            <Link
              to="/admin"
              className="flex items-center gap-1 text-[#FBBF24] hover:text-[#FDE68A] transition-colors"
              title="Admin CMS"
            >
              <Lock className="w-2.5 h-2.5" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar in Academic Sapphire Deep Navy */}
      <div className="bg-[#020617]/95 backdrop-blur-md border-b border-[#1E293B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 gap-3">
            {/* Logo & Brand Emblem with Dual-Ring Metallic Framing */}
            <Link
              to={isDreamz ? '/dreamz' : isShakuntlayan ? '/shakuntlayan' : '/'}
              className="flex items-center gap-2.5 sm:gap-3 group shrink-0"
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#020617] p-[2px] ring-1 ring-[#F59E0B]/40 shadow-md group-hover:ring-[#F59E0B] transition-all shrink-0">
                <div className="w-full h-full rounded-[10px] bg-[#0F172A] border border-[#F59E0B]/30 flex items-center justify-center">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 64 64" fill="none">
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
                    <path d="M32 26V42.5" stroke="#F59E0B" strokeWidth="1.5" />
                    <path
                      d="M32 15C33.5 17.5 35 19.5 34 21.5C33 23 31 23 30 21.5C29 19.5 30.5 17.5 32 15Z"
                      fill="#FBBF24"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col whitespace-nowrap">
                <span className="font-outfit font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-white leading-none mb-1">
                  {isDreamz ? (
                    <>RAPID <span className="text-[#F59E0B]">DREAMZ</span></>
                  ) : isShakuntlayan ? (
                    <>RAPID <span className="text-[#2DD4BF]">SHAKUNTLAYAN</span></>
                  ) : (
                    <>RAPID <span className="text-[#F59E0B]">SCHOOLS</span></>
                  )}
                </span>
                <span className="hidden sm:inline text-[10px] sm:text-[11px] font-medium tracking-wide text-[#94A3B8] leading-none">
                  {isDreamz
                    ? 'Junior Wing • Play Group to UKG'
                    : isShakuntlayan
                    ? 'Class 1 to 12 • CBSE Affiliated'
                    : 'Play Group to Class 12 Ecosystem'}
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden xl:flex items-center gap-1 text-[13px] font-semibold text-[#E2E8F0]">
              {isDreamz ? (
                // Dreamz Navigation
                <>
                  <Link
                    to="/dreamz"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/dreamz'
                        ? 'text-[#F59E0B] font-bold bg-[#F59E0B]/15 border border-[#F59E0B]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    Overview
                  </Link>
                  <Link
                    to="/dreamz/approach"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/dreamz/approach'
                        ? 'text-[#F59E0B] font-bold bg-[#F59E0B]/15 border border-[#F59E0B]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    Learning Approach
                  </Link>
                  <Link
                    to="/dreamz/academics"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/dreamz/academics'
                        ? 'text-[#F59E0B] font-bold bg-[#F59E0B]/15 border border-[#F59E0B]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    Early Years Stages
                  </Link>
                  <Link
                    to="/gallery"
                    className="px-2.5 py-1.5 rounded-lg hover:text-white hover:bg-[#1E293B]/70 transition-colors whitespace-nowrap"
                  >
                    Play Campus
                  </Link>
                  <Link
                    to="/dreamz/admissions"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/dreamz/admissions'
                        ? 'text-[#F59E0B] font-bold bg-[#F59E0B]/15 border border-[#F59E0B]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    Admissions
                  </Link>
                  <Link
                    to="/"
                    className="px-2.5 py-1.5 text-xs font-bold text-[#CBD5E1] hover:text-[#FDE68A] transition-colors flex items-center gap-1.5 border-l pl-3 ml-2 border-[#1E293B] whitespace-nowrap"
                    title="Return to Rapid Schools Main Portal"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Rapid Schools</span>
                  </Link>
                </>
              ) : isShakuntlayan ? (
                // Shakuntlayan Navigation
                <>
                  <Link
                    to="/shakuntlayan"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/shakuntlayan'
                        ? 'text-[#2DD4BF] font-bold bg-[#115E59]/20 border border-[#14B8A6]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    Overview
                  </Link>
                  <Link
                    to="/shakuntlayan/academics"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/shakuntlayan/academics'
                        ? 'text-[#2DD4BF] font-bold bg-[#115E59]/20 border border-[#14B8A6]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    Academic Journey
                  </Link>
                  <Link
                    to="/shakuntlayan/campus"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/shakuntlayan/campus'
                        ? 'text-[#2DD4BF] font-bold bg-[#115E59]/20 border border-[#14B8A6]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    Campus Facilities
                  </Link>
                  <Link
                    to="/shakuntlayan/student-life"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/shakuntlayan/student-life'
                        ? 'text-[#2DD4BF] font-bold bg-[#115E59]/20 border border-[#14B8A6]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    Student Life
                  </Link>
                  <Link
                    to="/shakuntlayan/admissions"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/shakuntlayan/admissions'
                        ? 'text-[#2DD4BF] font-bold bg-[#115E59]/20 border border-[#14B8A6]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    CBSE Admissions
                  </Link>
                  <Link
                    to="/"
                    className="px-2.5 py-1.5 text-xs font-bold text-[#CBD5E1] hover:text-[#2DD4BF] transition-colors flex items-center gap-1.5 border-l pl-3 ml-2 border-[#1E293B] whitespace-nowrap"
                    title="Return to Rapid Schools Main Portal"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#14B8A6]" />
                    <span>Rapid Schools</span>
                  </Link>
                </>
              ) : (
                // Parent Ecosystem Navigation
                <>
                  <Link
                    to="/"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/'
                        ? 'text-[#F59E0B] font-bold bg-[#F59E0B]/15 border border-[#F59E0B]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/about'
                        ? 'text-[#F59E0B] font-bold bg-[#F59E0B]/15 border border-[#F59E0B]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/dreamz"
                    className="px-2.5 py-1.5 rounded-lg text-[#FDE68A] hover:text-[#F59E0B] hover:bg-[#1E293B]/70 transition-colors whitespace-nowrap"
                  >
                    Rapid Dreamz
                  </Link>
                  <Link
                    to="/shakuntlayan"
                    className="px-2.5 py-1.5 rounded-lg text-[#5EEAD4] hover:text-[#2DD4BF] hover:bg-[#1E293B]/70 transition-colors whitespace-nowrap"
                  >
                    Rapid Shakuntlayan
                  </Link>
                  <Link
                    to="/admissions"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/admissions'
                        ? 'text-[#F59E0B] font-bold bg-[#F59E0B]/15 border border-[#F59E0B]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    Admissions
                  </Link>
                  <Link
                    to="/gallery"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/gallery'
                        ? 'text-[#F59E0B] font-bold bg-[#F59E0B]/15 border border-[#F59E0B]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    Gallery
                  </Link>
                  <Link
                    to="/contact"
                    className={`px-2.5 py-1.5 rounded-lg transition-colors whitespace-nowrap ${
                      location.pathname === '/contact'
                        ? 'text-[#F59E0B] font-bold bg-[#F59E0B]/15 border border-[#F59E0B]/30'
                        : 'hover:text-white hover:bg-[#1E293B]/70'
                    }`}
                  >
                    Contact
                  </Link>

                  {/* More Dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setMoreMenuOpen(!moreMenuOpen)}
                      className={`px-2.5 py-1.5 rounded-lg transition-colors flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                        ['/notices', '/news', '/events', '/downloads'].includes(location.pathname)
                          ? 'text-[#F59E0B] font-bold bg-[#F59E0B]/15 border border-[#F59E0B]/30'
                          : 'hover:text-white hover:bg-[#1E293B]/70'
                      }`}
                    >
                      <span>More</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${moreMenuOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {moreMenuOpen && (
                      <div className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-[#0F172A] border border-[#1E293B] shadow-2xl py-1.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                        <Link
                          to="/notices"
                          onClick={() => setMoreMenuOpen(false)}
                          className="flex items-center justify-between px-3.5 py-2 text-xs font-medium text-[#CBD5E1] hover:text-white hover:bg-[#1E293B]/80 transition-colors"
                        >
                          <span>Notice Board</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
                        </Link>
                        <Link
                          to="/news"
                          onClick={() => setMoreMenuOpen(false)}
                          className="block px-3.5 py-2 text-xs font-medium text-[#CBD5E1] hover:text-white hover:bg-[#1E293B]/80 transition-colors"
                        >
                          News & Updates
                        </Link>
                        <Link
                          to="/events"
                          onClick={() => setMoreMenuOpen(false)}
                          className="block px-3.5 py-2 text-xs font-medium text-[#CBD5E1] hover:text-white hover:bg-[#1E293B]/80 transition-colors"
                        >
                          Events & Calendar
                        </Link>
                        <Link
                          to="/downloads"
                          onClick={() => setMoreMenuOpen(false)}
                          className="block px-3.5 py-2 text-xs font-medium text-[#CBD5E1] hover:text-white hover:bg-[#1E293B]/80 transition-colors"
                        >
                          Downloads & Forms
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              )}
            </nav>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-2 lg:gap-3 shrink-0">
              <Link
                to="/visit"
                className="luxury-btn-outline px-3 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap text-[#FDE68A] border-[#F59E0B]/40 hover:bg-[#F59E0B]/10 hover:text-white"
              >
                Book Tour
              </Link>
              <Link
                to={isDreamz ? '/dreamz/admissions' : isShakuntlayan ? '/shakuntlayan/admissions' : '/admissions'}
                className="luxury-btn-primary px-3.5 sm:px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all whitespace-nowrap shadow-md text-white"
              >
                Apply 2025–26
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2.5 rounded-xl text-white hover:bg-[#1E293B] focus:outline-none focus:ring-2 focus:ring-[#F59E0B] shrink-0"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#F59E0B]" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu in Deep Navy */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#0F172A] border-b border-[#1E293B] shadow-2xl px-4 pt-4 pb-8 max-h-[85vh] overflow-y-auto text-[#E2E8F0]">
          {/* Quick Actions in Mobile Drawer */}
          <div className="grid grid-cols-2 gap-2.5 mb-5 pb-4 border-b border-[#1E293B]">
            <Link
              to="/admissions"
              onClick={() => setMobileMenuOpen(false)}
              className="luxury-btn-primary flex items-center justify-center py-2.5 px-3 text-white font-bold text-xs uppercase tracking-wider rounded-xl text-center"
            >
              <span>Apply 2025–26</span>
            </Link>
            <Link
              to="/visit"
              onClick={() => setMobileMenuOpen(false)}
              className="luxury-btn-outline flex items-center justify-center py-2.5 px-3 font-bold text-xs uppercase tracking-wider rounded-xl text-center text-[#FDE68A] border-[#F59E0B]/40 hover:bg-[#F59E0B]/10 hover:text-white"
            >
              <span>Book Tour</span>
            </Link>
          </div>

          <div className="space-y-1 text-sm font-semibold text-[#E2E8F0]">
            <div className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-[0.2em] py-1.5">
              School Institutions
            </div>
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl transition-colors ${
                location.pathname === '/'
                  ? 'text-[#F59E0B] bg-[#F59E0B]/15 font-bold border border-[#F59E0B]/30'
                  : 'hover:bg-[#1E293B] hover:text-white'
              }`}
            >
              Rapid Schools Parent Ecosystem
            </Link>
            <Link
              to="/dreamz"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl transition-colors ${
                isDreamz
                  ? 'text-[#F59E0B] bg-[#F59E0B]/15 font-bold border border-[#F59E0B]/30'
                  : 'hover:bg-[#1E293B] hover:text-white'
              }`}
            >
              Rapid Dreamz (Play Group to UKG)
            </Link>
            <Link
              to="/shakuntlayan"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2 rounded-xl transition-colors ${
                isShakuntlayan
                  ? 'text-[#2DD4BF] bg-[#115E59]/20 font-bold border border-[#14B8A6]/30'
                  : 'hover:bg-[#1E293B] hover:text-white'
              }`}
            >
              Rapid Shakuntlayan (Class 1 to 12 CBSE)
            </Link>

            <div className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-[0.2em] pt-4 pb-1.5">
              Academics & Life
            </div>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-[#1E293B] hover:text-white">
              About Institutional Vision
            </Link>
            <Link to="/dreamz/approach" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-[#1E293B] hover:text-white">
              Dreamz Early Childhood Approach
            </Link>
            <Link to="/shakuntlayan/academics" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-[#1E293B] hover:text-white">
              Shakuntlayan Academic Journey
            </Link>
            <Link to="/shakuntlayan/campus" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-[#1E293B] hover:text-white">
              Campus Facilities & Labs
            </Link>
            <Link to="/gallery" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-[#1E293B] hover:text-white">
              Photo & Campus Gallery
            </Link>

            <div className="text-[10px] font-bold text-[#F59E0B] uppercase tracking-[0.2em] pt-4 pb-1.5">
              Information & Administration
            </div>
            <Link to="/notices" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-[#1E293B] hover:text-white">
              Official Circulars & Notice Board
            </Link>
            <Link to="/news" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-[#1E293B] hover:text-white">
              Institutional News
            </Link>
            <Link to="/events" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-[#1E293B] hover:text-white">
              Calendar & Events
            </Link>
            <Link to="/downloads" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-[#1E293B] hover:text-white">
              Download Center
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-[#1E293B] hover:text-white">
              Contact & Directions
            </Link>
            <Link to="/admin" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-xl hover:bg-[#1E293B] text-[#F59E0B] font-bold">
              Admin CMS Console
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
