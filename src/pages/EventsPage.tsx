import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Calendar, Clock, MapPin, ArrowRight, X } from 'lucide-react';
import { EventItem } from '../data/types';
import { Link } from 'react-router-dom';

export const EventsPage: React.FC = () => {
  const { events } = useSite();
  const [selectedSchool, setSelectedSchool] = useState<'all' | 'dreamz' | 'shakuntlayan'>('all');
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const publishedEvents = events.filter((e) => {
    if (!e.isPublished) return false;
    if (selectedSchool !== 'all' && e.targetSchool !== 'all' && e.targetSchool !== selectedSchool) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-24">
      <Breadcrumbs items={[{ label: 'Events Calendar' }]} />

      {/* Header Banner */}
      <section className="bg-[#1C0306] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Layered radial glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#BD672A]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#3D0B12]/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BD672A]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#2C070C] text-[#F3C292] border border-[#BD672A]/30 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD672A] shadow-[0_0_8px_rgba(189,103,42,0.8)]" />
            Institutional Calendar
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Upcoming Events & <span className="italic font-normal text-[#F3C292]">Celebrations</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D4C3B3] leading-relaxed font-sans">
            Sports meets, science exhibitions, parent orientation forums, and creative symposiums across Rapid Schools.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* School Filters */}
        <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_12px_36px_-12px_rgba(44,7,12,0.06)] border border-[#E8DFD1] flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.18em] font-mono">Filter Wing:</span>
            <button
              onClick={() => setSelectedSchool('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans ${
                selectedSchool === 'all'
                  ? 'bg-[#2C070C] text-[#F3C292] shadow-xs'
                  : 'bg-[#FCFAF6] text-[#423738] hover:bg-[#F2EAE0] border border-[#E8DFD1]'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setSelectedSchool('dreamz')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans ${
                selectedSchool === 'dreamz'
                  ? 'bg-[#BD672A] text-white shadow-xs'
                  : 'bg-[#FCFAF6] text-[#423738] hover:bg-[#F2EAE0] border border-[#E8DFD1]'
              }`}
            >
              Rapid Dreamz
            </button>
            <button
              onClick={() => setSelectedSchool('shakuntlayan')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans ${
                selectedSchool === 'shakuntlayan'
                  ? 'bg-[#064E3B] text-white shadow-xs'
                  : 'bg-[#FCFAF6] text-[#423738] hover:bg-[#F2EAE0] border border-[#E8DFD1]'
              }`}
            >
              Rapid Shakuntlayan
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {publishedEvents.map((evt) => (
            <div
              key={evt.id}
              onClick={() => setSelectedEvent(evt)}
              className="bg-white rounded-3xl border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(189,103,42,0.12)] hover:border-[#BD672A]/50 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              {evt.featuredImage && (
                <div className="relative h-50 overflow-hidden bg-[#FCFAF6]">
                  <img
                    src={evt.featuredImage}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#1C0306]/90 text-[#F3C292] backdrop-blur-md border border-[#BD672A]/40 font-mono shadow-md">
                      {evt.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#6E5D5F] mb-2.5 font-mono">
                    <span className="font-semibold text-[#BD672A] bg-[#BD672A]/10 px-2.5 py-0.5 rounded-full border border-[#BD672A]/20 text-[10px] uppercase">
                      {evt.targetSchool === 'all'
                        ? 'Rapid Schools Network'
                        : evt.targetSchool === 'dreamz'
                        ? 'Rapid Dreamz'
                        : 'Rapid Shakuntlayan'}
                    </span>
                    <span className="font-semibold text-[#23070B]">
                      {new Date(evt.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-medium text-[#23070B] group-hover:text-[#BD672A] transition-colors leading-snug">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C4E50] mt-2 line-clamp-2 leading-relaxed font-sans">
                    {evt.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8DFD1] space-y-1.5 text-xs text-[#6E5D5F] font-sans">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#BD672A]" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#BD672A] shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-[#BD672A] group-hover:text-[#A2521C] transition-colors font-mono">
                    <span className="uppercase tracking-wider text-[11px]">View Event Dossier</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-50 bg-[#1C0306]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-7 sm:p-10 shadow-2xl relative border border-[#E8DFD1]">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FCFAF6] hover:bg-[#FAF6F0] text-[#23070B] border border-[#E8DFD1] transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BD672A] bg-[#BD672A]/10 px-3.5 py-1 rounded-full border border-[#BD672A]/25 font-mono">
              {selectedEvent.category} • {selectedEvent.targetSchool === 'dreamz' ? 'Rapid Dreamz' : selectedEvent.targetSchool === 'shakuntlayan' ? 'Rapid Shakuntlayan' : 'Rapid Schools'}
            </span>

            <h2 className="font-editorial text-2xl sm:text-4xl font-medium text-[#23070B] mt-3 mb-4 leading-tight">
              {selectedEvent.title}
            </h2>

            {selectedEvent.featuredImage && (
              <img
                src={selectedEvent.featuredImage}
                alt={selectedEvent.title}
                className="w-full h-56 object-cover rounded-2xl mb-6 shadow-sm border border-[#E8DFD1]"
              />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 sm:p-5 rounded-2xl bg-[#FCFAF6] border border-[#E8DFD1] text-xs text-[#5C4E50] mb-6 font-sans">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#BD672A] shrink-0" />
                <span><strong className="text-[#23070B]">Date:</strong> {selectedEvent.startDate} {selectedEvent.endDate ? `to ${selectedEvent.endDate}` : ''}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#BD672A] shrink-0" />
                <span><strong className="text-[#23070B]">Time:</strong> {selectedEvent.time}</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <MapPin className="w-4 h-4 text-[#BD672A] shrink-0" />
                <span><strong className="text-[#23070B]">Venue:</strong> {selectedEvent.location}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#5C4E50] leading-relaxed font-sans">
              <p className="font-semibold text-[#23070B] text-sm sm:text-base">{selectedEvent.summary}</p>
              <p>{selectedEvent.content}</p>
            </div>

            {(selectedEvent.registrationInfo || selectedEvent.contactInfo) && (
              <div className="mt-6 p-4 rounded-2xl bg-[#FCFAF6] border border-[#BD672A]/30 text-xs space-y-1 text-[#23070B] font-sans">
                {selectedEvent.registrationInfo && (
                  <div><strong className="text-[#BD672A]">Registration:</strong> {selectedEvent.registrationInfo}</div>
                )}
                {selectedEvent.contactInfo && (
                  <div><strong className="text-[#BD672A]">Inquiries:</strong> {selectedEvent.contactInfo}</div>
                )}
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-[#E8DFD1] flex items-center justify-between">
              <Link
                to="/visit"
                className="luxury-btn-primary px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider"
              >
                Plan a Campus Visit
              </Link>
              <button
                onClick={() => setSelectedEvent(null)}
                className="luxury-btn-outline px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
