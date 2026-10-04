import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSite } from '../../context/SiteContext';
import {
  Phone,
  MessageSquare,
  Sparkles,
  BookOpen,
  GraduationCap,
  Calendar,
  Menu,
  X,
  ChevronDown,
  Building2,
  Lock,
  ExternalLink
} from 'lucide-react';

export const Header: React.FC = () => {
  const { settings } = useSite();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle scroll effect
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
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md shadow-sm transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
          {/* School Selector Pills */}
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-slate-400 font-medium hidden md:inline text-[11px] uppercase tracking-wider">
              Network:
            </span>
            <Link
              to="/"
              className={`px-2.5 py-0.5 rounded-full font-medium transition-all ${
                !isDreamz && !isShakuntlayan
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              Rapid Schools
            </Link>
            <Link
              to="/dreamz"
              className={`px-2.5 py-0.5 rounded-full font-medium transition-all flex items-center gap-1 ${
                isDreamz
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              <span>Rapid Dreamz <span className="hidden sm:inline text-[10px] opacity-80">(PG–UKG)</span></span>
            </Link>
            <Link
              to="/shakuntlayan"
              className={`px-2.5 py-0.5 rounded-full font-medium transition-all flex items-center gap-1 ${
                isShakuntlayan
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <GraduationCap className="w-3 h-3 text-amber-400" />
              <span>Rapid Shakuntlayan <span className="hidden sm:inline text-[10px] opacity-80">(Class 1–12)</span></span>
            </Link>
          </div>

          {/* Quick Helplines & Portal Links */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto text-[11px] sm:text-xs">
            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
              title="Call School Office"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              <span className="hidden sm:inline">Admissions:</span>
              <span className="font-semibold">{settings.phone}</span>
            </a>
            <a
              href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Rapid%20Schools,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <Link
              to="/portal"
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <BookOpen className="w-3 h-3 text-sky-400" />
              <span>Parent Portal</span>
              <span className="text-[9px] bg-slate-800 text-slate-400 px-1 rounded">Preview</span>
            </Link>
            <Link
              to="/admin"
              className="flex items-center gap-1 text-amber-400/90 hover:text-amber-300 transition-colors"
              title="Admin CMS"
            >
              <Lock className="w-2.5 h-2.5" />
              <span>Admin</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Brand Emblem */}
          <Link to={isDreamz ? '/dreamz' : isShakuntlayan ? '/shakuntlayan' : '/'} className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-amber-500/30 flex items-center justify-center shadow-md group-hover:border-amber-400 transition-colors">
              <svg className="w-7 h-7" viewBox="0 0 64 64" fill="none">
                <path d="M32 10L48 16V31C48 42.5 41 51 32 54C23 51 16 42.5 16 31V16L32 10Z" stroke="#E2A12E" strokeWidth="2.5" fill="#132F54"/>
                <path d="M32 26C28 23 23 23 20 24V40C23 39 28 39 32 42C36 39 41 39 44 40V24C41 23 36 23 32 26Z" fill="#F8FAFC" stroke="#E2A12E" strokeWidth="1.5"/>
                <path d="M32 17V21M27 18.5L29 22M37 18.5L35 22" stroke="#E2A12E" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-outfit font-extrabold text-xl sm:text-2xl tracking-tight text-slate-900 leading-tight">
                {isDreamz ? (
                  <>RAPID <span className="text-amber-600">DREAMZ</span></>
                ) : isShakuntlayan ? (
                  <>RAPID <span className="text-blue-900">SHAKUNTLAYAN</span></>
                ) : (
                  <>RAPID <span className="text-amber-600">SCHOOLS</span></>
                )}
              </span>
              <span className="text-[11px] font-medium tracking-wide text-slate-600">
                {isDreamz
                  ? 'Junior School • Play Group to UKG'
                  : isShakuntlayan
                  ? 'Class 1 to 12 • Affiliated to CBSE, New Delhi'
                  : 'Excellence in Education • Play Group to Class 12'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-sm font-semibold text-slate-700">
            {isDreamz ? (
              // Dreamz Navigation
              <>
                <Link to="/dreamz" className={`px-3 py-2 rounded-md hover:text-amber-600 transition-colors ${location.pathname === '/dreamz' ? 'text-amber-600' : ''}`}>
                  Overview
                </Link>
                <Link to="/dreamz/approach" className={`px-3 py-2 rounded-md hover:text-amber-600 transition-colors ${location.pathname === '/dreamz/approach' ? 'text-amber-600' : ''}`}>
                  Learning Approach
                </Link>
                <Link to="/dreamz/academics" className={`px-3 py-2 rounded-md hover:text-amber-600 transition-colors ${location.pathname === '/dreamz/academics' ? 'text-amber-600' : ''}`}>
                  Early Years Stages
                </Link>
                <Link to="/gallery" className="px-3 py-2 rounded-md hover:text-amber-600 transition-colors">
                  Play Campus
                </Link>
                <Link to="/dreamz/admissions" className={`px-3 py-2 rounded-md hover:text-amber-600 transition-colors ${location.pathname === '/dreamz/admissions' ? 'text-amber-600' : ''}`}>
                  Admissions
                </Link>
                <Link to="/" className="px-3 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1 border-l pl-3 ml-2 border-slate-200">
                  <Building2 className="w-3.5 h-3.5" />
                  Rapid Schools
                </Link>
              </>
            ) : isShakuntlayan ? (
              // Shakuntlayan Navigation
              <>
                <Link to="/shakuntlayan" className={`px-3 py-2 rounded-md hover:text-blue-900 transition-colors ${location.pathname === '/shakuntlayan' ? 'text-blue-900' : ''}`}>
                  Overview
                </Link>
                <Link to="/shakuntlayan/academics" className={`px-3 py-2 rounded-md hover:text-blue-900 transition-colors ${location.pathname === '/shakuntlayan/academics' ? 'text-blue-900' : ''}`}>
                  Academic Journey (1–12)
                </Link>
                <Link to="/shakuntlayan/campus" className={`px-3 py-2 rounded-md hover:text-blue-900 transition-colors ${location.pathname === '/shakuntlayan/campus' ? 'text-blue-900' : ''}`}>
                  Campus Facilities
                </Link>
                <Link to="/shakuntlayan/student-life" className={`px-3 py-2 rounded-md hover:text-blue-900 transition-colors ${location.pathname === '/shakuntlayan/student-life' ? 'text-blue-900' : ''}`}>
                  Student Life
                </Link>
                <Link to="/shakuntlayan/admissions" className={`px-3 py-2 rounded-md hover:text-blue-900 transition-colors ${location.pathname === '/shakuntlayan/admissions' ? 'text-blue-900' : ''}`}>
                  CBSE Admissions
                </Link>
                <Link to="/" className="px-3 py-2 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors flex items-center gap-1 border-l pl-3 ml-2 border-slate-200">
                  <Building2 className="w-3.5 h-3.5" />
                  Rapid Schools
                </Link>
              </>
            ) : (
              // Parent Ecosystem Navigation
              <>
                <Link to="/" className={`px-2.5 py-2 rounded-md hover:text-amber-600 transition-colors ${location.pathname === '/' ? 'text-amber-600 font-bold' : ''}`}>
                  Home
                </Link>
                <Link to="/about" className={`px-2.5 py-2 rounded-md hover:text-amber-600 transition-colors ${location.pathname === '/about' ? 'text-amber-600 font-bold' : ''}`}>
                  About Us
                </Link>
                <Link to="/dreamz" className="px-2.5 py-2 rounded-md hover:text-amber-600 transition-colors">
                  Rapid Dreamz
                </Link>
                <Link to="/shakuntlayan" className="px-2.5 py-2 rounded-md hover:text-amber-600 transition-colors">
                  Rapid Shakuntlayan
                </Link>
                <Link to="/admissions" className={`px-2.5 py-2 rounded-md hover:text-amber-600 transition-colors ${location.pathname === '/admissions' ? 'text-amber-600 font-bold' : ''}`}>
                  Admissions
                </Link>
                <Link to="/notices" className={`px-2.5 py-2 rounded-md hover:text-amber-600 transition-colors ${location.pathname === '/notices' ? 'text-amber-600 font-bold' : ''}`}>
                  Notices
                </Link>
                <Link to="/news" className={`px-2.5 py-2 rounded-md hover:text-amber-600 transition-colors ${location.pathname === '/news' ? 'text-amber-600 font-bold' : ''}`}>
                  News & Events
                </Link>
                <Link to="/gallery" className={`px-2.5 py-2 rounded-md hover:text-amber-600 transition-colors ${location.pathname === '/gallery' ? 'text-amber-600 font-bold' : ''}`}>
                  Gallery
                </Link>
                <Link to="/downloads" className={`px-2.5 py-2 rounded-md hover:text-amber-600 transition-colors ${location.pathname === '/downloads' ? 'text-amber-600 font-bold' : ''}`}>
                  Downloads
                </Link>
                <Link to="/contact" className={`px-2.5 py-2 rounded-md hover:text-amber-600 transition-colors ${location.pathname === '/contact' ? 'text-amber-600 font-bold' : ''}`}>
                  Contact
                </Link>
              </>
            )}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/visit"
              className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-all"
            >
              Book Campus Visit
            </Link>
            <Link
              to={isDreamz ? '/dreamz/admissions' : isShakuntlayan ? '/shakuntlayan/admissions' : '/admissions'}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-amber-500 hover:bg-amber-400 shadow-md hover:shadow-lg rounded-lg transition-all"
            >
              Apply for 2025–26
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          {/* Quick Actions in Mobile Drawer */}
          <div className="grid grid-cols-2 gap-2 mb-4 pb-4 border-b border-slate-100">
            <Link
              to="/admissions"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm"
            >
              <span>Admissions</span>
            </Link>
            <Link
              to="/visit"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-slate-900 text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-sm"
            >
              <span>Book Visit</span>
            </Link>
          </div>

          <div className="space-y-1 text-base font-semibold text-slate-800">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider py-1">
              Institutions
            </div>
            <Link
              to="/"
              className={`block px-3 py-2 rounded-lg hover:bg-slate-100 ${location.pathname === '/' ? 'text-amber-600 bg-amber-50' : ''}`}
            >
              Rapid Schools (Home)
            </Link>
            <Link
              to="/dreamz"
              className={`block px-3 py-2 rounded-lg hover:bg-amber-50 ${isDreamz ? 'text-amber-700 font-bold bg-amber-50' : ''}`}
            >
              Rapid Dreamz (Play Group to UKG)
            </Link>
            <Link
              to="/shakuntlayan"
              className={`block px-3 py-2 rounded-lg hover:bg-blue-50 ${isShakuntlayan ? 'text-blue-900 font-bold bg-blue-50' : ''}`}
            >
              Rapid Shakuntlayan (Class 1 to 12)
            </Link>

            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-3 pb-1">
              Academics & Life
            </div>
            <Link to="/about" className="block px-3 py-2 rounded-lg hover:bg-slate-100">
              About Rapid Ecosystem
            </Link>
            <Link to="/dreamz/approach" className="block px-3 py-2 rounded-lg hover:bg-slate-100">
              Dreamz Early Years Approach
            </Link>
            <Link to="/shakuntlayan/academics" className="block px-3 py-2 rounded-lg hover:bg-slate-100">
              Shakuntlayan Academic Journey
            </Link>
            <Link to="/shakuntlayan/campus" className="block px-3 py-2 rounded-lg hover:bg-slate-100">
              Campus & Infrastructure
            </Link>
            <Link to="/gallery" className="block px-3 py-2 rounded-lg hover:bg-slate-100">
              Media Gallery
            </Link>

            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pt-3 pb-1">
              Information & Notices
            </div>
            <Link to="/notices" className="block px-3 py-2 rounded-lg hover:bg-slate-100">
              Official Notice Board
            </Link>
            <Link to="/news" className="block px-3 py-2 rounded-lg hover:bg-slate-100">
              News & Happenings
            </Link>
            <Link to="/events" className="block px-3 py-2 rounded-lg hover:bg-slate-100">
              Events Calendar
            </Link>
            <Link to="/downloads" className="block px-3 py-2 rounded-lg hover:bg-slate-100">
              Download Center (Prospectus & Forms)
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-lg hover:bg-slate-100">
              Contact & Directions
            </Link>
            <Link to="/portal" className="block px-3 py-2 rounded-lg hover:bg-slate-100 text-sky-700">
              Parent Portal (Preview)
            </Link>
            <Link to="/admin" className="block px-3 py-2 rounded-lg hover:bg-slate-100 text-amber-700">
              Admin CMS Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
