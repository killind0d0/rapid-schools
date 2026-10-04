import React from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../../context/SiteContext';
import { Bell, ArrowRight } from 'lucide-react';

export const NoticeTicker: React.FC = () => {
  const { notices } = useSite();
  const pinnedNotices = notices.filter((n) => n.isPublished && n.isPinned);

  if (pinnedNotices.length === 0) return null;

  const currentNotice = pinnedNotices[0];

  return (
    <div className="bg-[#020617] text-[#E2E8F0] text-xs py-2 px-4 border-b border-[#162032] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent" />
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F59E0B] text-white uppercase tracking-widest shrink-0 shadow-[0_0_10px_rgba(245,158,11,0.4)]">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Official Bulletin
          </span>
          <p className="truncate text-[#E2E8F0] font-medium text-xs">
            <span className="text-[#FDE68A] font-bold mr-2">[{currentNotice.category}]</span>
            {currentNotice.title}
          </p>
        </div>
        <Link
          to="/notices"
          className="shrink-0 inline-flex items-center gap-1 text-[#FDE68A] hover:text-white font-semibold text-xs transition-colors group"
        >
          <span>Notice Board</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
