import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Bell, Download, Search, Pin } from 'lucide-react';
import { triggerInstitutionalDownload } from '../utils/downloadHelper';

export const NoticesPage: React.FC = () => {
  const { notices } = useSite();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSchool, setSelectedSchool] = useState<'all' | 'dreamz' | 'shakuntlayan'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const today = new Date().toISOString().split('T')[0];

  // Filter notices: published, active (not expired), and search query
  const filteredNotices = notices.filter((notice) => {
    if (!notice.isPublished) return false;
    
    // Automatic expiry check
    if (notice.expiryDate && notice.expiryDate < today) return false;

    // School filter
    if (selectedSchool !== 'all' && notice.targetSchool !== 'all' && notice.targetSchool !== selectedSchool) {
      return false;
    }

    // Category filter
    if (selectedCategory !== 'all' && notice.category !== selectedCategory) {
      return false;
    }

    // Search query
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      return (
        notice.title.toLowerCase().includes(q) ||
        notice.description.toLowerCase().includes(q) ||
        notice.category.toLowerCase().includes(q)
      );
    }

    return true;
  });

  const categories = ['Academic', 'Admission', 'Circular', 'General', 'Examination', 'Holiday'];

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      <Breadcrumbs items={[{ label: 'Official Notice Board' }]} />

      {/* Header Banner */}
      <section className="bg-[#020617] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Layered radial glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#162032]/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#0F172A] text-[#FDE68A] border border-[#F59E0B]/30 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(189,103,42,0.8)]" />
            Administrative Communications
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Official Notice Board & <span className="italic font-normal text-[#FDE68A]">Circulars</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-sans">
            Authenticated administrative circulars, examination schedules, holiday declarations, and academic advisories for Rapid Schools.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_12px_36px_-12px_rgba(44,7,12,0.06)] border border-[#E2E8F0] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search circulars by keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs sm:text-sm text-[#020617] focus:bg-white focus:outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#F59E0B]/15 transition-all font-sans"
              />
            </div>

            {/* School Filter */}
            <div className="sm:col-span-3">
              <select
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs sm:text-sm text-[#020617] focus:bg-white focus:outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#F59E0B]/15 transition-all font-sans"
              >
                <option value="all">All Schools (Unified)</option>
                <option value="dreamz">Rapid Dreamz Only</option>
                <option value="shakuntlayan">Rapid Shakuntlayan Only</option>
              </select>
            </div>

            {/* Category Filter */}
            <div className="sm:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-xs sm:text-sm text-[#020617] focus:bg-white focus:outline-none focus:border-[#F59E0B] focus:ring-4 focus:ring-[#F59E0B]/15 transition-all font-sans"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Notices Grid */}
        <div className="pt-8 space-y-4">
          {filteredNotices.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E2E8F0] p-8 space-y-3 shadow-xs">
              <Bell className="w-12 h-12 text-[#F59E0B]/40 mx-auto" />
              <h3 className="font-editorial text-2xl font-medium text-[#020617]">No circulars found</h3>
              <p className="text-xs sm:text-sm text-[#475569] max-w-sm mx-auto font-sans">
                No active circulars match your current search and filter selections. Clear your filters to view all active announcements.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSchool('all');
                  setSelectedCategory('all');
                }}
                className="mt-2 luxury-btn-outline px-4 py-2 rounded-xl text-xs font-semibold cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-300 hover:shadow-[0_15px_35px_-10px_rgba(44,7,12,0.06)] ${
                  notice.isPinned
                    ? 'border-[#F59E0B]/50 bg-gradient-to-r from-white via-white to-[#F8FAFC]'
                    : 'border-[#E2E8F0]'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2.5 mb-2.5">
                  <div className="flex items-center gap-2">
                    {notice.isPinned && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#F59E0B] text-white uppercase tracking-widest font-mono shadow-[0_0_8px_rgba(189,103,42,0.4)]">
                        <Pin className="w-3 h-3" />
                        Pinned Notice
                      </span>
                    )}
                    <span className="text-[10px] font-bold text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/25 px-2.5 py-0.5 rounded-full uppercase tracking-wider font-mono">
                      {notice.category}
                    </span>
                    <span className="text-xs font-semibold text-[#475569] font-sans">
                      {notice.targetSchool === 'all'
                        ? 'Rapid Schools Network'
                        : notice.targetSchool === 'dreamz'
                        ? 'Rapid Dreamz'
                        : 'Rapid Shakuntlayan'}
                    </span>
                  </div>

                  <span className="text-xs text-[#475569] font-mono">
                    Published: {new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-medium text-[#020617] mt-2 mb-1.5 leading-snug">
                  {notice.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-sans">
                  {notice.description}
                </p>

                {notice.attachmentName && (
                  <div className="mt-5 pt-3.5 border-t border-[#E2E8F0] flex items-center justify-between">
                    <button
                      onClick={() =>
                        triggerInstitutionalDownload(
                          notice.title,
                          notice.category,
                          notice.attachmentName!,
                          notice.targetSchool === 'dreamz'
                            ? 'Rapid Dreamz'
                            : notice.targetSchool === 'shakuntlayan'
                            ? 'Rapid Shakuntlayan'
                            : 'Rapid Schools',
                          notice.description
                        )
                      }
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#F8FAFC] hover:bg-[#F8FAFC] text-[#020617] hover:text-[#F59E0B] text-xs font-semibold transition-colors border border-[#E2E8F0] cursor-pointer font-sans"
                    >
                      <Download className="w-3.5 h-3.5 text-[#F59E0B]" />
                      <span>Download Attachment: {notice.attachmentName}</span>
                    </button>

                    <span className="text-[11px] text-[#64748B] font-mono">
                      Ref: RS/NOT/{notice.id.toUpperCase()}
                    </span>
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
