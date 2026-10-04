import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Bell, Download, Search, Pin, Calendar, Tag, Filter, CheckCircle2 } from 'lucide-react';
import { triggerInstitutionalDownload } from '../utils/downloadHelper';

export const NoticesPage: React.FC = () => {
  const { notices, settings } = useSite();
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
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs items={[{ label: 'Official Notice Board' }]} />

      {/* Banner */}
      <section className="bg-[#2D060C] text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5A121E]/60 via-[#2D060C] to-[#1A0407]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#BD672A]/20 text-[#EAB592] border border-[#BD672A]/30">
            Administrative Communications
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Official Notice Board & Circulars
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#D4C3B3] font-sans">
            Authenticated administrative circulars, examination schedules, holiday declarations, and academic advisories for Rapid Schools.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#E6DDCF] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search circulars by keyword..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
              />
            </div>

            {/* School Filter */}
            <div className="sm:col-span-3">
              <select
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
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
                className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
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
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E6DDCF] p-8 space-y-3">
              <Bell className="w-12 h-12 text-[#A8A29E] mx-auto" />
              <h3 className="font-cormorant text-2xl font-semibold text-[#1C1917]">No notices found</h3>
              <p className="text-xs text-[#78716C] max-w-sm mx-auto">
                No active circulars match your current search and filter selections. Clear your filters to view all active announcements.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedSchool('all');
                  setSelectedCategory('all');
                }}
                className="mt-2 px-4 py-2 rounded-xl bg-[#FAF7F2] text-[#1C1917] text-xs font-semibold hover:bg-[#E6DDCF] transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredNotices.map((notice) => (
              <div
                key={notice.id}
                className={`p-6 rounded-2xl bg-white border transition-all hover:shadow-sm ${
                  notice.isPinned
                    ? 'border-[#BD672A]/40 bg-[#FAF3EC]/30'
                    : 'border-[#E6DDCF]'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    {notice.isPinned && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-0.5 rounded bg-[#BD672A] text-white uppercase tracking-wider">
                        <Pin className="w-3 h-3" />
                        Pinned Notice
                      </span>
                    )}
                    <span className="text-xs font-semibold text-[#064E3B] bg-[#ECFDF5] border border-[#064E3B]/20 px-2.5 py-0.5 rounded-full">
                      {notice.category}
                    </span>
                    <span className="text-xs font-medium text-[#78716C]">
                      {notice.targetSchool === 'all'
                        ? 'Rapid Schools Network'
                        : notice.targetSchool === 'dreamz'
                        ? 'Rapid Dreamz'
                        : 'Rapid Shakuntlayan'}
                    </span>
                  </div>

                  <span className="text-xs text-[#78716C] font-medium">
                    Published: {new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </span>
                </div>

                <h3 className="font-cormorant text-xl sm:text-2xl font-semibold text-[#1C1917] mt-2 mb-1">
                  {notice.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {notice.description}
                </p>

                {notice.attachmentName && (
                  <div className="mt-4 pt-3 border-t border-[#E6DDCF] flex items-center justify-between">
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
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF7F2] hover:bg-[#FAF3EC] text-[#1C1917] hover:text-[#BD672A] text-xs font-semibold transition-colors border border-[#E6DDCF]"
                    >
                      <Download className="w-3.5 h-3.5 text-[#BD672A]" />
                      <span>Download Attachment: {notice.attachmentName}</span>
                    </button>

                    <span className="text-[11px] text-[#A8A29E]">
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
