import React from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../../context/SiteContext';
import { Phone, MessageSquare, Calendar, FileText } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  const { settings } = useSite();

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#020617]/95 backdrop-blur-md border-t border-[#162032] text-[#E2E8F0] shadow-2xl safe-area-bottom">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent" />
      <div className="grid grid-cols-4 divide-x divide-[#0F172A] text-center py-2 px-1">
        {/* Call Office */}
        <a
          href={`tel:${settings.phone.replace(/[^0-9+]/g, '')}`}
          className="flex flex-col items-center justify-center py-1 text-[#CBD5E1] hover:text-[#FDE68A] active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-1 text-[#FBBF24]" />
          <span className="text-[10px] font-bold tracking-tight">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${settings.whatsapp.replace(/[^0-9]/g, '')}?text=Hello%20Rapid%20Schools,%20I%20would%20like%20to%20enquire%20about%20admissions.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1 text-[#CBD5E1] hover:text-[#5EEAD4] active:scale-95 transition-transform"
        >
          <MessageSquare className="w-4 h-4 mb-1 text-[#5EEAD4]" />
          <span className="text-[10px] font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Visit */}
        <Link
          to="/visit"
          className="flex flex-col items-center justify-center py-1 text-[#CBD5E1] hover:text-[#FDE68A] active:scale-95 transition-transform"
        >
          <Calendar className="w-4 h-4 mb-1 text-[#FBBF24]" />
          <span className="text-[10px] font-bold tracking-tight">Visit</span>
        </Link>

        {/* Apply / Admissions */}
        <Link
          to="/admissions"
          className="flex flex-col items-center justify-center py-1.5 text-white active:scale-95 transition-transform luxury-btn-primary rounded-xl font-bold mx-1 shadow-sm"
        >
          <FileText className="w-4 h-4 mb-0.5 text-white" />
          <span className="text-[10px] tracking-tight">Apply</span>
        </Link>
      </div>
    </div>
  );
};
