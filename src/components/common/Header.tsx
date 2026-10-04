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
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD3] shadow-xs transition-all duration-200">
      {/* Top Institutional Utility Bar in Rich Burgundy */}
      <div className="bg-[#2D070D] text-[#EFE7DC] text-xs border-b border-[#4A101A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex flex-wrap items-center justify-between gap-2">
          {/* School Selector Pills */}
          <div className="flex items-center gap-1 sm:gap-2">
            <span className="text-[#C4B29E] font-medium hidden md:inline text-[10px] uppercase tracking-widest font-mono">
              Network:
            </span>
            <Link
              to="/"
              className={`px-2.5 py-0.5 rounded-full font-medium transition-all ${
                !isDreamz && !isShakuntlayan
                  ? 'bg-[#BD672A] text-white font-bold shadow-xs'
                  : 'text-[#DBCDC0] hover:text-white hover:bg-[#4A101A]'
              }`}
            >
              Rapid Schools
            </Link>
            <Link
              to="/dreamz"
              className={`px-2.5 py-0.5 rounded-full font-medium transition-all flex items-center gap-1 ${
                isDreamz
                  ? 'bg-[#C2410C] text-white font-bold shadow-xs'
                  : 'text-[#DBCDC0] hover:text-white hover:bg-[#4A101A]'
              }`}
            >
              <Sparkles className="w-3 h-3 text-[#FED7AA]" />
              <span>Rapid Dreamz <span className="hidden sm:inline text-[10px] opacity-80">(PG–UKG)</span></span>
            </Link>
            <Link
              to="/shakuntlayan"
              className={`px-2.5 py-0.5 rounded-full font-medium transition-all flex items-center gap-1 ${
                isShakuntlayan
                  ? 'bg-[#064E3B] text-white font-bold shadow-xs'
                  : 'text-[#DBCDC0] hover:text-white hover:bg-[#4A101A]'
              }`}
            >
              <GraduationCap className="w-3 h-3 text-[#A7F3D0]" />
              <span>Rapid Shakuntlayan <span className="hidden sm:inline text-[10px] opacity-80">(Class 1–12)</span></span>
            </Link>
          </div>

          {/* Quick Helplines & Portal Links */}
          <div className="flex items-center gap-3 sm:gap-4 ml-auto text-[11px] sm:text-xs">
            <a
              href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-1.5 text-[#EFE7DC] hover:text-[#E8955A] transition-colors"
              title="Call School Office"
            >
              <Phone className="w-3 h-3 text-[#D47A3B]" />
              <span className="hidden sm:inline">Desk:</span>
              <span className="font-semibold">{settings.phone}</span>
            </a>
            <a
              href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Rapid%20Schools,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-[#86EFAC] hover:text-white transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-3 h-3" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <Link
              to="/admin"
              className="flex items-center gap-1 text-[#D47A3B] hover:text-[#E8955A] transition-colors"
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
          <Link to={isDreamz ? '/dreamz' : isShakuntlayan ? '/shakuntlayan' : '/'} className="flex items-center gap-3 group shrink-0">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#3D0B12] border border-[#BD672A]/40 flex items-center justify-center shadow-md group-hover:border-[#BD672A] transition-colors shrink-0">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 64 64" fill="none">
                <path d="M32 9L49 15.5V32C49 44 41.5 52.5 32 55.5C22.5 52.5 15 44 15 32V15.5L32 9Z" stroke="#D47A3B" strokeWidth="2.2" fill="#4F101A"/>
                <path d="M32 26C27.5 22.5 22 22.5 19 23.5V40C22 39 27.5 39 32 42.5C36.5 39 42 39 45 40V23.5C42 22.5 36.5 22.5 32 26Z" fill="#FAF6F0" stroke="#D47A3B" strokeWidth="1.5"/>
                <path d="M32 26V42.5" stroke="#D47A3B" strokeWidth="1.5"/>
                <path d="M32 15C33.5 17.5 35 19.5 34 21.5C33 23 31 23 30 21.5C29 19.5 30.5 17.5 32 15Z" fill="#E58B48"/>
              </svg>
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-outfit font-extrabold text-lg sm:text-xl lg:text-2xl tracking-tight text-[#2B1B1D] leading-none mb-1">
                {isDreamz ? (
                  <>RAPID <span className="text-[#C2410C]">DREAMZ</span></>
                ) : isShakuntlayan ? (
                  <>RAPID <span className="text-[#064E3B]">SHAKUNTLAYAN</span></>
                ) : (
                  <>RAPID <span className="text-[#5A121E]">SCHOOLS</span></>
                )}
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-[#695557] leading-none">
                {isDreamz
                  ? 'Junior School • Play Group to UKG'
                  : isShakuntlayan
                  ? 'Class 1 to 12 • Affiliated to CBSE, New Delhi'
                  : 'Play Group to Class 12 • An Integrated Ecosystem'}
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 xl:gap-1.5 text-xs xl:text-[13px] font-semibold text-[#3D2C2E]">
            {isDreamz ? (
              // Dreamz Navigation
              <>
                <Link to="/dreamz" className={`px-3 py-2 rounded-md hover:text-[#C2410C] transition-colors ${location.pathname === '/dreamz' ? 'text-[#C2410C] font-bold' : ''}`}>
                  Overview
                </Link>
                <Link to="/dreamz/approach" className={`px-3 py-2 rounded-md hover:text-[#C2410C] transition-colors ${location.pathname === '/dreamz/approach' ? 'text-[#C2410C] font-bold' : ''}`}>
                  Learning Approach
                </Link>
                <Link to="/dreamz/academics" className={`px-3 py-2 rounded-md hover:text-[#C2410C] transition-colors ${location.pathname === '/dreamz/academics' ? 'text-[#C2410C] font-bold' : ''}`}>
                  Early Years Stages
                </Link>
                <Link to="/gallery" className="px-3 py-2 rounded-md hover:text-[#C2410C] transition-colors">
                  Play Campus
                </Link>
                <Link to="/dreamz/admissions" className={`px-3 py-2 rounded-md hover:text-[#C2410C] transition-colors ${location.pathname === '/dreamz/admissions' ? 'text-[#C2410C] font-bold' : ''}`}>
                  Admissions
                </Link>
                <Link to="/" className="px-3 py-2 text-xs font-bold text-[#7A6668] hover:text-[#2B1B1D] transition-colors flex items-center gap-1 border-l pl-3 ml-2 border-[#E5DDD0]">
                  <Building2 className="w-3.5 h-3.5" />
                  Rapid Schools
                </Link>
              </>
            ) : isShakuntlayan ? (
              // Shakuntlayan Navigation
              <>
                <Link to="/shakuntlayan" className={`px-3 py-2 rounded-md hover:text-[#064E3B] transition-colors ${location.pathname === '/shakuntlayan' ? 'text-[#064E3B] font-bold' : ''}`}>
                  Overview
                </Link>
                <Link to="/shakuntlayan/academics" className={`px-3 py-2 rounded-md hover:text-[#064E3B] transition-colors ${location.pathname === '/shakuntlayan/academics' ? 'text-[#064E3B] font-bold' : ''}`}>
                  Academic Journey (1–12)
                </Link>
                <Link to="/shakuntlayan/campus" className={`px-3 py-2 rounded-md hover:text-[#064E3B] transition-colors ${location.pathname === '/shakuntlayan/campus' ? 'text-[#064E3B] font-bold' : ''}`}>
                  Campus Facilities
                </Link>
                <Link to="/shakuntlayan/student-life" className={`px-3 py-2 rounded-md hover:text-[#064E3B] transition-colors ${location.pathname === '/shakuntlayan/student-life' ? 'text-[#064E3B] font-bold' : ''}`}>
                  Student Life
                </Link>
                <Link to="/shakuntlayan/admissions" className={`px-3 py-2 rounded-md hover:text-[#064E3B] transition-colors ${location.pathname === '/shakuntlayan/admissions' ? 'text-[#064E3B] font-bold' : ''}`}>
                  CBSE Admissions
                </Link>
                <Link to="/" className="px-3 py-2 text-xs font-bold text-[#7A6668] hover:text-[#2B1B1D] transition-colors flex items-center gap-1 border-l pl-3 ml-2 border-[#E5DDD0]">
                  <Building2 className="w-3.5 h-3.5" />
                  Rapid Schools
                </Link>
              </>
            ) : (
              // Parent Ecosystem Navigation
              <>
                <Link to="/" className={`px-2.5 py-2 rounded-md hover:text-[#5A121E] transition-colors ${location.pathname === '/' ? 'text-[#5A121E] font-bold' : ''}`}>
                  Home
                </Link>
                <Link to="/about" className={`px-2.5 py-2 rounded-md hover:text-[#5A121E] transition-colors ${location.pathname === '/about' ? 'text-[#5A121E] font-bold' : ''}`}>
                  About Us
                </Link>
                <Link to="/dreamz" className="px-2.5 py-2 rounded-md hover:text-[#C2410C] transition-colors">
                  Rapid Dreamz
                </Link>
                <Link to="/shakuntlayan" className="px-2.5 py-2 rounded-md hover:text-[#064E3B] transition-colors">
                  Rapid Shakuntlayan
                </Link>
                <Link to="/admissions" className={`px-2.5 py-2 rounded-md hover:text-[#5A121E] transition-colors ${location.pathname === '/admissions' ? 'text-[#5A121E] font-bold' : ''}`}>
                  Admissions
                </Link>
                <Link to="/notices" className={`px-2.5 py-2 rounded-md hover:text-[#5A121E] transition-colors ${location.pathname === '/notices' ? 'text-[#5A121E] font-bold' : ''}`}>
                  Notices
                </Link>
                <Link to="/news" className={`px-2.5 py-2 rounded-md hover:text-[#5A121E] transition-colors ${location.pathname === '/news' ? 'text-[#5A121E] font-bold' : ''}`}>
                  News & Events
                </Link>
                <Link to="/gallery" className={`px-2.5 py-2 rounded-md hover:text-[#5A121E] transition-colors ${location.pathname === '/gallery' ? 'text-[#5A121E] font-bold' : ''}`}>
                  Gallery
                </Link>
                <Link to="/downloads" className={`px-2.5 py-2 rounded-md hover:text-[#5A121E] transition-colors ${location.pathname === '/downloads' ? 'text-[#5A121E] font-bold' : ''}`}>
                  Downloads
                </Link>
                <Link to="/contact" className={`px-2.5 py-2 rounded-md hover:text-[#5A121E] transition-colors ${location.pathname === '/contact' ? 'text-[#5A121E] font-bold' : ''}`}>
                  Contact
                </Link>
              </>
            )}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              to="/visit"
              className="px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#3D2C2E] bg-[#F1E9DD] hover:bg-[#E7DDCF] border border-[#DDD1C0] rounded-xl transition-all"
            >
              Book Campus Tour
            </Link>
            <Link
              to={isDreamz ? '/dreamz/admissions' : isShakuntlayan ? '/shakuntlayan/admissions' : '/admissions'}
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#5A121E] hover:bg-[#430B14] shadow-md hover:shadow-lg rounded-xl transition-all"
            >
              Apply 2025–26
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#3D2C2E] hover:text-[#1F1718] hover:bg-[#EFE8DD] focus:outline-none focus:ring-2 focus:ring-[#BD672A]"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E8DFD3] shadow-xl px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          {/* Quick Actions in Mobile Drawer */}
          <div className="grid grid-cols-2 gap-2 mb-4 pb-4 border-b border-[#E8DFD3]">
            <Link
              to="/admissions"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#5A121E] text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs"
            >
              <span>Admissions</span>
            </Link>
            <Link
              to="/visit"
              className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#2D070D] text-[#EFE7DC] font-bold text-xs uppercase tracking-wider rounded-xl shadow-xs"
            >
              <span>Book Visit</span>
            </Link>
          </div>

          <div className="space-y-1 text-base font-semibold text-[#2D2123]">
            <div className="text-[10px] font-bold text-[#8C7678] uppercase tracking-widest py-1">
              Institutions
            </div>
            <Link
              to="/"
              className={`block px-3 py-2 rounded-lg hover:bg-[#F2EAE0] ${location.pathname === '/' ? 'text-[#5A121E] bg-[#F2EAE0] font-bold' : ''}`}
            >
              Rapid Schools (Home)
            </Link>
            <Link
              to="/dreamz"
              className={`block px-3 py-2 rounded-lg hover:bg-[#FFEDD5] ${isDreamz ? 'text-[#C2410C] font-bold bg-[#FFEDD5]' : ''}`}
            >
              Rapid Dreamz (Play Group to UKG)
            </Link>
            <Link
              to="/shakuntlayan"
              className={`block px-3 py-2 rounded-lg hover:bg-[#E6F4EA] ${isShakuntlayan ? 'text-[#064E3B] font-bold bg-[#E6F4EA]' : ''}`}
            >
              Rapid Shakuntlayan (Class 1 to 12)
            </Link>

            <div className="text-[10px] font-bold text-[#8C7678] uppercase tracking-widest pt-3 pb-1">
              Academics & Life
            </div>
            <Link to="/about" className="block px-3 py-2 rounded-lg hover:bg-[#F2EAE0]">
              About Rapid Ecosystem
            </Link>
            <Link to="/dreamz/approach" className="block px-3 py-2 rounded-lg hover:bg-[#F2EAE0]">
              Dreamz Early Years Approach
            </Link>
            <Link to="/shakuntlayan/academics" className="block px-3 py-2 rounded-lg hover:bg-[#F2EAE0]">
              Shakuntlayan Academic Journey
            </Link>
            <Link to="/shakuntlayan/campus" className="block px-3 py-2 rounded-lg hover:bg-[#F2EAE0]">
              Campus Facilities
            </Link>
            <Link to="/gallery" className="block px-3 py-2 rounded-lg hover:bg-[#F2EAE0]">
              Media Gallery
            </Link>

            <div className="text-[10px] font-bold text-[#8C7678] uppercase tracking-widest pt-3 pb-1">
              Information & Notices
            </div>
            <Link to="/notices" className="block px-3 py-2 rounded-lg hover:bg-[#F2EAE0]">
              Official Notice Board
            </Link>
            <Link to="/news" className="block px-3 py-2 rounded-lg hover:bg-[#F2EAE0]">
              News & Happenings
            </Link>
            <Link to="/events" className="block px-3 py-2 rounded-lg hover:bg-[#F2EAE0]">
              Events Calendar
            </Link>
            <Link to="/downloads" className="block px-3 py-2 rounded-lg hover:bg-[#F2EAE0]">
              Download Center
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-lg hover:bg-[#F2EAE0]">
              Contact & Directions
            </Link>
            <Link to="/admin" className="block px-3 py-2 rounded-lg hover:bg-[#F2EAE0] text-[#BD672A] font-semibold">
              Admin CMS Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
