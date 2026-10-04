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
    <div className="min-h-screen bg-slate-50 pb-24">
      <Breadcrumbs items={[{ label: 'Events Calendar' }]} />

      {/* Banner */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Institutional Calendar
          </span>
          <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
            Upcoming Events & Celebrations
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300">
            Sports meets, science exhibitions, parent orientation forums, and creative symposiums across Rapid Schools.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* School Filters */}
        <div className="bg-white rounded-2xl p-4 shadow-md border border-slate-200/80 flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Filter Wing:</span>
            <button
              onClick={() => setSelectedSchool('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedSchool === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All Events
            </button>
            <button
              onClick={() => setSelectedSchool('dreamz')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedSchool === 'dreamz'
                  ? 'bg-amber-500 text-slate-950'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              Rapid Dreamz
            </button>
            <button
              onClick={() => setSelectedSchool('shakuntlayan')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                selectedSchool === 'shakuntlayan'
                  ? 'bg-blue-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
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
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
            >
              {evt.featuredImage && (
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={evt.featuredImage}
                    alt={evt.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-slate-950/70 text-amber-400 backdrop-blur-md border border-amber-500/30">
                      {evt.category}
                    </span>
                  </div>
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                      {evt.targetSchool === 'all'
                        ? 'Rapid Schools Network'
                        : evt.targetSchool === 'dreamz'
                        ? 'Rapid Dreamz'
                        : 'Rapid Shakuntlayan'}
                    </span>
                    <span className="font-semibold text-slate-800">
                      {new Date(evt.startDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                  </div>

                  <h3 className="font-outfit text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors">
                    {evt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                    {evt.summary}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 space-y-1.5 text-xs text-slate-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{evt.time}</span>
                  </div>
                  <div className="flex items-center gap-2 truncate">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate">{evt.location}</span>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-xs font-bold text-blue-900 group-hover:text-amber-600">
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
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              {selectedEvent.category} • {selectedEvent.targetSchool === 'dreamz' ? 'Rapid Dreamz' : selectedEvent.targetSchool === 'shakuntlayan' ? 'Rapid Shakuntlayan' : 'Rapid Schools'}
            </span>

            <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-4">
              {selectedEvent.title}
            </h2>

            {selectedEvent.featuredImage && (
              <img
                src={selectedEvent.featuredImage}
                alt={selectedEvent.title}
                className="w-full h-56 object-cover rounded-2xl mb-6 shadow-sm"
              />
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>Date:</strong> {selectedEvent.startDate} {selectedEvent.endDate ? `to ${selectedEvent.endDate}` : ''}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>Time:</strong> {selectedEvent.time}</span>
              </div>
              <div className="flex items-center gap-2 sm:col-span-2">
                <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                <span><strong>Venue:</strong> {selectedEvent.location}</span>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p className="font-semibold text-slate-900">{selectedEvent.summary}</p>
              <p>{selectedEvent.content}</p>
            </div>

            {(selectedEvent.registrationInfo || selectedEvent.contactInfo) && (
              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs space-y-1 text-amber-950">
                {selectedEvent.registrationInfo && (
                  <div><strong>Registration:</strong> {selectedEvent.registrationInfo}</div>
                )}
                {selectedEvent.contactInfo && (
                  <div><strong>Inquiries:</strong> {selectedEvent.contactInfo}</div>
                )}
              </div>
            )}

            <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/visit"
                className="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400"
              >
                Plan a Campus Visit
              </Link>
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-5 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-200"
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
