import React from 'react';
import { Link } from 'react-router-dom';
import { useSite } from '../../context/SiteContext';
import { Bell, Calendar, Newspaper, ArrowRight, Download, MapPin, Clock } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';
import { triggerInstitutionalDownload } from '../../utils/downloadHelper';

export const LatestUpdates: React.FC = () => {
  const { notices, events, news } = useSite();

  const activeNotices = notices.filter((n) => n.isPublished).slice(0, 3);
  const activeEvents = events.filter((e) => e.isPublished).slice(0, 2);
  const activeNews = news.filter((n) => n.isPublished).slice(0, 2);

  return (
    <section className="py-20 sm:py-24 bg-[#F8FAFC] border-t border-[#E2E8F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Live Communications"
          badgeColor="copper"
          title="Notices, Events & Dispatches"
          subtitle="Stay informed with verified administrative circulars, upcoming academic schedules, and institutional accomplishments across Rapid Schools."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Official Notices (5 cols) */}
          <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-3xl border border-[#E2E8F0] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#E2E8F0] mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/25">
                    <Bell className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl font-medium text-[#020617] tracking-tight">
                      Official Notice Board
                    </h3>
                    <span className="text-[11px] text-[#475569] font-sans">Live Circulars & Advisories</span>
                  </div>
                </div>
                <Link
                  to="/notices"
                  className="text-xs font-bold text-[#F59E0B] hover:text-[#D97706] flex items-center gap-1 group font-mono uppercase tracking-wider"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="space-y-4">
                {activeNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#F8FAFC] hover:bg-[#F1F5F9]/80 border border-[#E2E8F0] transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                      <span className="font-bold text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/25 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono tracking-wider">
                        {notice.category}
                      </span>
                      <span className="text-[#475569] font-medium text-[11px] font-mono">
                        {new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>

                    <h4 className="text-base font-medium font-editorial text-[#020617] group-hover:text-[#F59E0B] transition-colors leading-snug">
                      {notice.title}
                    </h4>
                    <p className="text-xs text-[#334155] mt-1.5 line-clamp-2 leading-relaxed font-sans">
                      {notice.description}
                    </p>

                    {notice.attachmentName && (
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
                        className="mt-3.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#020617] hover:text-[#F59E0B] transition-colors cursor-pointer font-sans"
                      >
                        <Download className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>Download Attachment ({notice.attachmentName})</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E2E8F0] text-center">
              <Link
                to="/notices"
                className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] hover:text-[#D97706] font-mono inline-flex items-center gap-1 group"
              >
                <span>Access Archival Circulars</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 2: Upcoming Events & News (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Events Block */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#E2E8F0] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)]">
              <div className="flex items-center justify-between pb-5 border-b border-[#E2E8F0] mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#115E59]/10 text-[#115E59] border border-[#115E59]/20">
                    <Calendar className="w-5 h-5 text-[#115E59]" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl font-medium text-[#020617] tracking-tight">
                      Upcoming Events & Calendar
                    </h3>
                    <span className="text-[11px] text-[#475569] font-sans">Campus Community Gatherings</span>
                  </div>
                </div>
                <Link
                  to="/events"
                  className="text-xs font-bold text-[#115E59] hover:text-[#134E4A] flex items-center gap-1 group font-mono uppercase tracking-wider"
                >
                  <span>All Events</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-5 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#F59E0B]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#475569] mb-2.5">
                        <span className="font-bold text-[#115E59] bg-[#115E59]/10 border border-[#115E59]/20 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono tracking-wider">
                          {evt.category}
                        </span>
                        <span className="font-semibold text-[#020617] font-mono">
                          {new Date(evt.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                        </span>
                      </div>
                      <h4 className="text-base font-medium font-editorial text-[#020617] mb-1.5 leading-snug">
                        {evt.title}
                      </h4>
                      <p className="text-xs text-[#334155] line-clamp-2 mb-3.5 font-sans leading-relaxed">
                        {evt.summary}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-[#475569] pt-3 border-t border-[#E2E8F0]">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* News Articles Block */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#E2E8F0] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)]">
              <div className="flex items-center justify-between pb-5 border-b border-[#E2E8F0] mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/25">
                    <Newspaper className="w-5 h-5 text-[#F59E0B]" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl font-medium text-[#020617] tracking-tight">
                      Pedagogy & Classroom Stories
                    </h3>
                    <span className="text-[11px] text-[#475569] font-sans">Dispatches From Our Educators</span>
                  </div>
                </div>
                <Link
                  to="/news"
                  className="text-xs font-bold text-[#F59E0B] hover:text-[#D97706] flex items-center gap-1 group font-mono uppercase tracking-wider"
                >
                  <span>All Articles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="space-y-4">
                {activeNews.map((article) => (
                  <div
                    key={article.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-[#F8FAFC] hover:bg-[#F1F5F9]/80 border border-[#E2E8F0] transition-all group"
                  >
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-full sm:w-32 h-24 rounded-xl object-cover shrink-0 shadow-xs"
                    />
                    <div className="flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/20 px-2 py-0.5 rounded-full font-mono">
                        {article.category}
                      </span>
                      <h4 className="text-base font-medium font-editorial text-[#020617] group-hover:text-[#F59E0B] transition-colors mt-1 leading-snug">
                        {article.title}
                      </h4>
                      <p className="text-xs text-[#334155] line-clamp-1 mt-1 font-sans">
                        {article.summary}
                      </p>
                      <div className="mt-2 text-[11px] text-[#475569] font-mono">
                        By {article.author} • {new Date(article.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
