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
    <section className="py-20 bg-[#F6F1E7]/70 border-t border-[#E6DDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Live Communications"
          badgeColor="copper"
          title="Notices, Events & Dispatches"
          subtitle="Stay informed with administrative circulars, upcoming academic schedules, and institutional accomplishments."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column 1: Official Notices (5 cols) */}
          <div className="lg:col-span-5 bg-[#FCFAF6] p-6 sm:p-8 rounded-3xl border border-[#E6DDCF] shadow-xs flex flex-col">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD0] mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-[#5A121E]/10 text-[#5A121E]">
                  <Bell className="w-5 h-5 text-[#5A121E]" />
                </div>
                <div>
                  <h3 className="font-outfit text-xl font-bold text-[#2B1B1D]">
                    Official Notice Board
                  </h3>
                  <span className="text-[11px] text-[#7A6668]">Live Circulars & Advisories</span>
                </div>
              </div>
              <Link
                to="/notices"
                className="text-xs font-bold text-[#BD672A] hover:text-[#9A4E1B] flex items-center gap-1 group"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="space-y-4 flex-1">
              {activeNotices.map((notice) => (
                <div
                  key={notice.id}
                  className="p-4 rounded-2xl bg-[#FAF6F0] hover:bg-[#F2EAE0] border border-[#E8DFD0] transition-colors group"
                >
                  <div className="flex items-center justify-between gap-2 mb-2 text-xs">
                    <span className="font-bold text-[#5A121E] bg-[#5A121E]/10 border border-[#5A121E]/20 px-2 py-0.5 rounded text-[11px]">
                      {notice.category}
                    </span>
                    <span className="text-[#8C7678] font-medium text-[11px]">
                      {new Date(notice.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-[#2B1B1D] group-hover:text-[#5A121E] transition-colors">
                    {notice.title}
                  </h4>
                  <p className="text-xs text-[#5C494A] mt-1 line-clamp-2 leading-relaxed">
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
                      className="mt-3 inline-flex items-center gap-1 text-[11px] font-bold text-[#3D2C2E] hover:text-[#BD672A] transition-colors cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 text-[#BD672A]" />
                      <span>Download Attachment ({notice.attachmentName})</span>
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#E8DFD0] text-center">
              <Link
                to="/notices"
                className="text-xs font-bold text-[#5A121E] hover:text-[#3D0B12]"
              >
                Access Archival Circulars →
              </Link>
            </div>
          </div>

          {/* Column 2: Upcoming Events & News (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Events Block */}
            <div className="bg-[#FCFAF6] p-6 sm:p-8 rounded-3xl border border-[#E6DDCF] shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD0] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#064E3B]/10 text-[#064E3B]">
                    <Calendar className="w-5 h-5 text-[#064E3B]" />
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-[#2B1B1D]">
                      Upcoming Events & Calendar
                    </h3>
                    <span className="text-[11px] text-[#7A6668]">Campus Community Gatherings</span>
                  </div>
                </div>
                <Link
                  to="/events"
                  className="text-xs font-bold text-[#064E3B] hover:text-[#022C22] flex items-center gap-1 group"
                >
                  <span>All Events</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeEvents.map((evt) => (
                  <div
                    key={evt.id}
                    className="p-4 rounded-2xl border border-[#E8DFD0] bg-[#FAF6F0] hover:border-[#BD672A]/50 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-[#7A6668] mb-2">
                        <span className="font-bold text-[#064E3B] bg-[#064E3B]/10 border border-[#064E3B]/20 px-2 py-0.5 rounded text-[10px] uppercase">
                          {evt.category}
                        </span>
                        <span className="font-semibold text-[#3D2C2E]">
                          {new Date(evt.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-[#2B1B1D] mb-1">
                        {evt.title}
                      </h4>
                      <p className="text-xs text-[#5C494A] line-clamp-2 mb-3">
                        {evt.summary}
                      </p>
                    </div>

                    <div className="space-y-1 text-[11px] text-[#7A6668] pt-2 border-t border-[#E8DFD0]">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#A39282]" />
                        <span>{evt.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5 truncate">
                        <MapPin className="w-3 h-3 text-[#A39282] shrink-0" />
                        <span className="truncate">{evt.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* News Articles Block */}
            <div className="bg-[#FCFAF6] p-6 sm:p-8 rounded-3xl border border-[#E6DDCF] shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-[#E8DFD0] mb-6">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#BD672A]/10 text-[#BD672A]">
                    <Newspaper className="w-5 h-5 text-[#BD672A]" />
                  </div>
                  <div>
                    <h3 className="font-outfit text-xl font-bold text-[#2B1B1D]">
                      Pedagogy & Classroom Stories
                    </h3>
                    <span className="text-[11px] text-[#7A6668]">Dispatches From Our Educators</span>
                  </div>
                </div>
                <Link
                  to="/news"
                  className="text-xs font-bold text-[#BD672A] hover:text-[#9A4E1B] flex items-center gap-1 group"
                >
                  <span>All Articles</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              <div className="space-y-4">
                {activeNews.map((article) => (
                  <div
                    key={article.id}
                    className="flex flex-col sm:flex-row gap-4 p-3 rounded-2xl hover:bg-[#F2EAE0] border border-transparent hover:border-[#E8DFD0] transition-colors"
                  >
                    <img
                      src={article.featuredImage}
                      alt={article.title}
                      className="w-full sm:w-28 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#BD672A] bg-[#BD672A]/10 border border-[#BD672A]/20 px-2 py-0.5 rounded">
                        {article.category}
                      </span>
                      <h4 className="text-sm font-bold text-[#2B1B1D] mt-1">
                        {article.title}
                      </h4>
                      <p className="text-xs text-[#5C494A] line-clamp-1 mt-0.5">
                        {article.summary}
                      </p>
                      <div className="mt-2 text-[11px] text-[#8C7678]">
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
