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
    <section className="py-20 sm:py-24 bg-[#FAF6F0] border-t border-[#E8DFD1] relative">
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
          <div className="lg:col-span-5 bg-white p-7 sm:p-9 rounded-3xl border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-[#E8DFD1] mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#BD672A]/10 text-[#BD672A] border border-[#BD672A]/25">
                    <Bell className="w-5 h-5 text-[#BD672A]" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl font-medium text-[#23070B] tracking-tight">
                      Official Notice Board
                    </h3>
                    <span className="text-[11px] text-[#6E5D5F] font-sans">Live Circulars & Advisories</span>
                  </div>
                </div>
                <Link
                  to="/notices"
                  className="text-xs font-bold text-[#BD672A] hover:text-[#A2521C] flex items-center gap-1 group font-mono uppercase tracking-wider"
                >
                  <span>View All</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="space-y-4">
                {activeNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className="p-4 sm:p-5 rounded-2xl bg-[#FCFAF6] hover:bg-[#F6F1E7]/80 border border-[#E8DFD1] transition-all group"
                  >
                    <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                      <span className="font-bold text-[#BD672A] bg-[#BD672A]/10 border border-[#BD672A]/25 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono tracking-wider">
                        {notice.category}
                      </span>
                      <span className="text-[#6E5D5F] font-medium text-[11px] font-mono">
                        {new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                      </span>
                    </div>

                    <h4 className="text-base font-medium font-editorial text-[#23070B] group-hover:text-[#BD672A] transition-colors leading-snug">
                      {notice.title}
                    </h4>
                    <p className="text-xs text-[#5C4E50] mt-1.5 line-clamp-2 leading-relaxed font-sans">
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
                        className="mt-3.5 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#23070B] hover:text-[#BD672A] transition-colors cursor-pointer font-sans"
                      >
                        <Download className="w-3.5 h-3.5 text-[#BD672A]" />
                        <span>Download Attachment ({notice.attachmentName})</span>
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E8DFD1] text-center">
              <Link
                to="/notices"
                className="text-xs font-bold uppercase tracking-wider text-[#BD672A] hover:text-[#A2521C] font-mono inline-flex items-center gap-1 group"
              >
                <span>Access Archival Circulars</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Column 2: Upcoming Events & News (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Events Block */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)]">
              <div className="flex items-center justify-between pb-5 border-b border-[#E8DFD1] mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#064E3B]/10 text-[#064E3B] border border-[#064E3B]/20">
                    <Calendar className="w-5 h-5 text-[#064E3B]" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl font-medium text-[#23070B] tracking-tight">
                      Upcoming Events & Calendar
                    </h3>
                    <span className="text-[11px] text-[#6E5D5F] font-sans">Campus Community Gatherings</span>
                  </div>
                </div>
                <Link
                  to="/events"
                  className="text-xs font-bold text-[#064E3B] hover:text-[#043327] flex items-center gap-1 group font-mono uppercase tracking-wider"
                >
                  <span>All Events</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-5 rounded-2xl border border-[#E8DFD1] bg-[#FCFAF6] hover:border-[#BD672A]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#6E5D5F] mb-2.5">
                        <span className="font-bold text-[#064E3B] bg-[#064E3B]/10 border border-[#064E3B]/20 px-2.5 py-0.5 rounded-full text-[10px] uppercase font-mono tracking-wider">
                          {evt.category}
                        </span>
                        <span className="font-semibold text-[#23070B] font-mono">
                          {new Date(evt.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                        </span>
                      </div>
                      <h4 className="text-base font-medium font-editorial text-[#23070B] mb-1.5 leading-snug">
                        {evt.title}
                      </h4>
                      <p className="text-xs text-[#5C4E50] line-clamp-2 mb-3.5 font-sans leading-relaxed">
                        {evt.summary}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-[#6E5D5F] pt-3 border-t border-[#E8DFD1]">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#BD672A]" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3.5 h-3.5 text-[#BD672A] shrink-0" />
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* News Articles Block */}
            <div className="bg-white p-7 sm:p-9 rounded-3xl border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)]">
              <div className="flex items-center justify-between pb-5 border-b border-[#E8DFD1] mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#BD672A]/10 text-[#BD672A] border border-[#BD672A]/25">
                    <Newspaper className="w-5 h-5 text-[#BD672A]" />
                  </div>
                  <div>
                    <h3 className="font-editorial text-2xl font-medium text-[#23070B] tracking-tight">
                      Pedagogy & Classroom Stories
                    </h3>
                    <span className="text-[11px] text-[#6E5D5F] font-sans">Dispatches From Our Educators</span>
                  </div>
                </div>
                <Link
                  to="/news"
                  className="text-xs font-bold text-[#BD672A] hover:text-[#A2521C] flex items-center gap-1 group font-mono uppercase tracking-wider"
                >
                  <span>All Articles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="space-y-4">
                {activeNews.map((article) => (
                  <div
                    key={article.id}
                    className="flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-[#FCFAF6] hover:bg-[#F6F1E7]/80 border border-[#E8DFD1] transition-all group"
                  >
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-full sm:w-32 h-24 rounded-xl object-cover shrink-0 shadow-xs"
                    />
                    <div className="flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD672A] bg-[#BD672A]/10 border border-[#BD672A]/20 px-2 py-0.5 rounded-full font-mono">
                        {article.category}
                      </span>
                      <h4 className="text-base font-medium font-editorial text-[#23070B] group-hover:text-[#BD672A] transition-colors mt-1 leading-snug">
                        {article.title}
                      </h4>
                      <p className="text-xs text-[#5C4E50] line-clamp-1 mt-1 font-sans">
                        {article.summary}
                      </p>
                      <div className="mt-2 text-[11px] text-[#6E5D5F] font-mono">
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
