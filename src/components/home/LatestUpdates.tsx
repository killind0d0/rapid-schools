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
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Campus Bulletins"
          badgeColor="gold"
          title="Notices, Events & Stories"
          subtitle="Stay informed with administrative circulars, upcoming academic schedules, and institutional accomplishments."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Official Notices (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-700">
                  <Bell className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-slate-900">
                    Official Notice Board
                  </h3>
                  <span className="text-[11px] text-slate-500">Live Circulars & Advisories</span>
                </div>
              </div>
              <Link
                to="/notices"
                className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 group"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="space-y-4 flex-1">
              {activeNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="p-4 rounded-xl bg-slate-50 hover:bg-amber-50/40 border border-slate-100 hover:border-amber-200 transition-colors group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                    <span className="font-bold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
                      {notice.category}
                    </span>
                    <span className="text-slate-400 font-medium">
                      {new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                    {notice.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
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
                      className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-slate-700 hover:text-amber-600 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5 text-amber-500" />
                      <span>Download Attachment ({notice.attachmentName})</span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-center">
              <Link
                to="/notices"
                className="text-xs font-bold text-slate-600 hover:text-slate-900"
              >
                Access Archival Circulars →
              </Link>
            </div>
          </div>

          {/* Column 2: Upcoming Events & News (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Events Block */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-blue-500/10 text-blue-700">
                    <Calendar className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-slate-900">
                      Upcoming Events & Calendar
                    </h3>
                    <span className="text-[11px] text-slate-500">School Community Activities</span>
                  </div>
                </div>
                <Link
                  to="/events"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center gap-1 group"
                >
                  <span>All Events</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50/30 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                        <span className="font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded text-[11px]">
                          {evt.category}
                        </span>
                        <span className="font-semibold text-slate-700">
                          {new Date(evt.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900 mb-1">
                        {evt.title}
                      </h4>
                      <p className="text-xs text-slate-600 line-clamp-2 mb-3">
                        {evt.summary}
                      </p>
                    </div>

                    <div className="space-y-1 text-[11px] text-slate-500 pt-2 border-t border-slate-200/60">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-slate-400" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* News Articles Block */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-700">
                    <Newspaper className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-slate-900">
                      Pedagogy & News
                    </h3>
                    <span className="text-[11px] text-slate-500">Stories From Our Classrooms</span>
                  </div>
                </div>
                <Link
                  to="/news"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 flex items-center gap-1 group"
                >
                  <span>All Articles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="space-y-4">
                {activeNews.map((article) => (
                  <div
                    key={article.id}
                    className="flex flex-col sm:flex-row gap-4 p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-colors"
                  >
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-full sm:w-28 h-20 rounded-lg object-cover shrink-0"
                    />
                    <div className="flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                        {article.category}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 mt-1">
                        {article.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {article.summary}
                      </p>
                      <div className="mt-2 text-[11px] text-slate-400">
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
