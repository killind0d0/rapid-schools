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
    <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-200 text-xs sm:text-sm py-2 px-4 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 overflow-hidden">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500 text-slate-950 uppercase tracking-wider shrink-0">
            <Bell className="w-3 h-3 animate-pulse" />
            Announcement
          </span>
          <p className="truncate text-slate-200 font-medium">
            <span className="text-amber-400 font-semibold mr-2">[{currentNotice.category}]</span>
            {currentNotice.title}
          </p>
        </div>
        <Link
          to="/notices"
          className="shrink-0 inline-flex items-center gap-1 text-amber-400 hover:text-amber-300 font-medium text-xs transition-colors group"
        >
          <span>View Notice Board</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
