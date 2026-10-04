import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Calendar, Clock, MapPin, Mail, ArrowRight, X, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs items={[{ label: 'Events Calendar' }]} />

      {/* Banner */}
      <section className="bg-[#2D060C] text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5A121E]/60 via-[#2D060C] to-[#1A0407]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#BD672A]/20 text-[#EAB592] border border-[#BD672A]/30">
            Institutional Calendar
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Upcoming Events & Celebrations
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#D4C3B3] font-sans">
            Sports meets, science exhibitions, parent orientation forums, and creative symposiums across Rapid Schools.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* School Filters */}
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-[#E6DDCF] flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-[#78716C] uppercase tracking-wider">Filter Wing:</span>
            <button
              onClick={() => setSelectedSchool('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSchool === 'all'
                  ? 'bg-[#3D0B12] text-[#EAB592]'
                  : 'bg-[#FAF7F2] text-[#57534E] hover:bg-[#E6DDCF]'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setSelectedSchool('dreamz')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSchool === 'dreamz'
                  ? 'bg-[#C2410C] text-white'
                  : 'bg-[#FAF7F2] text-[#57534E] hover:bg-[#E6DDCF]'
              }`}
            >
              Rapid Dreamz
            </button>
            <button
              onClick={() => setSelectedSchool('shakuntlayan')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSchool === 'shakuntlayan'
                  ? 'bg-[#064E3B] text-white'
                  : 'bg-[#FAF7F2] text-[#57534E] hover:bg-[#E6DDCF]'
              }`}
            >
              Rapid Shakuntlayan
            </button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {publishedEvents.map((evt) => (
            <div
              key={evt.id}
              onClick={() => setSelectedEvent(evt)}
              className="bg-white rounded-3xl border border-[#E6DDCF] shadow-sm hover:shadow-md hover:border-[#BD672A]/50 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              {evt.featuredImage && (
                <div className="relative h-48 overflow-hidden bg-[#FAF7F2]">
                  <img
                    src={evt.featuredImage}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#2D060C]/85 text-[#EAB592] backdrop-blur-md border border-[#BD672A]/30">
                      {evt.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-[#78716C] mb-2">
                    <span className="font-semibold text-[#BD672A] bg-[#FAF3EC] px-2.5 py-0.5 rounded-full border border-[#BD672A]/20">
                      {evt.targetSchool === 'all'
                        ? 'Rapid Schools Network'
                        : evt.targetSchool === 'dreamz'
                        ? 'Rapid Dreamz'
                        : 'Rapid Shakuntlayan'}
                    </span>
                    <span className="font-medium text-[#1C1917]">
                      {new Date(evt.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>

                  <h3 className="font-cormorant text-xl sm:text-2xl font-semibold text-[#1C1917] group-hover:text-[#BD672A] transition-colors">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#57534E] mt-2 line-clamp-2 leading-relaxed">
                    {evt.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E6DDCF] space-y-1.5 text-xs text-[#78716C]">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-[#BD672A]" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2 truncate">
                    <MapPin className="w-3.5 h-3.5 text-[#BD672A] shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-xs font-semibold text-[#BD672A] group-hover:text-[#A35520]">
                    <span>View Event Dossier</span>
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
          className="fixed inset-0 z-50 bg-[#1C1917]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-[#E6DDCF]">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF7F2] hover:bg-[#E6DDCF] text-[#1C1917] transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-[#064E3B] bg-[#ECFDF5] px-3.5 py-1 rounded-full border border-[#064E3B]/20">
              {selectedEvent.category} • {selectedEvent.targetSchool === 'dreamz' ? 'Rapid Dreamz' : selectedEvent.targetSchool === 'shakuntlayan' ? 'Rapid Shakuntlayan' : 'Rapid Schools'}
            </span>

            <h2 className="font-cormorant text-2xl sm:text-4xl font-normal text-[#1C1917] mt-3 mb-4">
              {selectedEvent.title}
            </h2>

            {selectedEvent.featuredImage && (
              <img
                src={selectedEvent.featuredImage}
                alt={selectedEvent.title}
                className="w-full h-56 object-cover rounded-2xl mb-6 shadow-sm border border-[#E6DDCF]"
              />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[#FCFAF6] border border-[#E6DDCF] text-xs text-[#57534E] mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#BD672A] shrink-0" />
                <span><strong className="text-[#1C1917]">Date:</strong> {selectedEvent.startDate} {selectedEvent.endDate ? `to ${selectedEvent.endDate}` : ''}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#BD672A] shrink-0" />
                <span><strong className="text-[#1C1917]">Time:</strong> {selectedEvent.time}</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <MapPin className="w-4 h-4 text-[#BD672A] shrink-0" />
                <span><strong className="text-[#1C1917]">Venue:</strong> {selectedEvent.location}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#57534E] leading-relaxed">
              <p className="font-semibold text-[#1C1917]">{selectedEvent.summary}</p>
              <p>{selectedEvent.content}</p>
            </div>

            {(selectedEvent.registrationInfo || selectedEvent.contactInfo) && (
              <div className="mt-6 p-4 rounded-xl bg-[#FAF3EC] border border-[#BD672A]/30 text-xs space-y-1 text-[#78350F]">
                {selectedEvent.registrationInfo && (
                  <div><strong>Registration:</strong> {selectedEvent.registrationInfo}</div>
                )}
                {selectedEvent.contactInfo && (
                  <div><strong>Inquiries:</strong> {selectedEvent.contactInfo}</div>
                )}
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-[#E6DDCF] flex items-center justify-between">
              <Link
                to="/visit"
                className="px-5 py-2.5 rounded-xl bg-[#BD672A] text-white font-semibold text-xs uppercase tracking-wider hover:bg-[#A35520] transition-colors"
              >
                Plan a Campus Visit
              </Link>
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-5 py-2.5 rounded-xl bg-[#FAF7F2] text-[#1C1917] font-semibold text-xs uppercase tracking-wider hover:bg-[#E6DDCF] transition-colors"
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
