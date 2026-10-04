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
    <div className="bg-[#1F0408] text-[#EFE7DC] text-xs py-2 px-4 border-b border-[#3D0A11]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#BD672A] text-white uppercase tracking-wider shrink-0">
            <Bell className="w-3 h-3 animate-pulse" />
            Official Bulletin
          </span>
          <p className="truncate text-[#E8DDD1] font-medium text-xs">
            <span className="text-[#D47A3B] font-bold mr-2">[{currentNotice.category}]</span>
            {currentNotice.title}
          </p>
        </div>
        <Link
          to="/notices"
          className="shrink-0 inline-flex items-center gap-1 text-[#D47A3B] hover:text-[#E8955A] font-semibold text-xs transition-colors group"
        >
          <span>Notice Board</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
