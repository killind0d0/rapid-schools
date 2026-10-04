import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Smile, Sun, ArrowRight, ShieldCheck, CheckCircle2, Calendar } from 'lucide-react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { PlayApproach } from '../../components/dreamz/PlayApproach';
import { DayTimeline } from '../../components/dreamz/DayTimeline';
import { useSite } from '../../context/SiteContext';

export const DreamzHomePage: React.FC = () => {
  const { settings } = useSite();

  return (
    <div className="min-h-screen bg-[#FFFDF9] pb-24">
      <Breadcrumbs items={[{ label: 'Rapid Dreamz (Junior Wing)' }]} />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-500 via-amber-600 to-orange-500 text-white py-16 sm:py-24">
        {/* Playful background decorative shapes */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white backdrop-blur-md border border-white/30">
                <Sparkles className="w-3.5 h-3.5" />
                Junior School • Play Group to UKG
              </span>

              <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Little Minds.<br />
                <span className="text-amber-200">Big Beginnings.</span>
              </h1>

              <p className="text-base sm:text-lg text-amber-100 max-w-xl font-normal leading-relaxed">
                Welcome to Rapid Dreamz, where every morning begins with a warm smile, curious wonder, and playful exploration. We nurture your child's innate creativity, emotional security, and foundational literacy.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/dreamz/admissions"
                  className="px-6 py-3.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Early Years Admissions</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>

                <Link
                  to="/visit"
                  className="px-6 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-slate-900 font-bold text-xs uppercase tracking-wider shadow transition-all flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-amber-600" />
                  <span>Book Early-Years Tour</span>
                </Link>
              </div>

              {/* Badges */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-amber-100 border-t border-white/20">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-rose-300 shrink-0" />
                  <span>Nurturing Educators</span>
                </div>
                <div className="flex items-center gap-2">
                  <Smile className="w-4 h-4 text-amber-200 shrink-0" />
                  <span>Sensory Playrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Child-Proof Security</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80"
                  alt="Children learning through play at Rapid Dreamz"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                    Holistic Early Childhood
                  </span>
                  <p className="text-sm font-medium">
                    Joyful discovery where curiosity is celebrated every single day.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Learning Through Play Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Learning Through Play"
          badgeColor="amber"
          title="Curiosity, Not Compulsion"
          subtitle="Our early years pedagogy blends Montessori tactile methods with Reggio Emilia creative inquiry, establishing strong emotional and cognitive foundations."
          align="center"
        />

        <PlayApproach />

        <div className="mt-8 text-center">
          <Link
            to="/dreamz/approach"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 uppercase tracking-wider"
          >
            <span>Read Complete Early-Years Methodology →</span>
          </Link>
        </div>
      </section>

      {/* A Day at Rapid Dreamz Timeline */}
      <section className="py-20 bg-amber-50/50 border-y border-amber-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Daily Schedule"
            badgeColor="amber"
            title="A Day at Rapid Dreamz"
            subtitle="Predictable, joyful rhythms that help young children feel safe, independent, and enthusiastic from arrival to departure."
            align="center"
          />

          <DayTimeline />
        </div>
      </section>

      {/* Safety & Nurturing Care */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-emerald-700">
            <ShieldCheck className="w-6 h-6" />
            <span className="text-xs font-bold uppercase tracking-wider">Safety & Well-being</span>
          </div>

          <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-slate-900">
            A Safe, Hygienic & Loving Sanctuary
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We recognize that sending your child to school for the first time is a profound act of trust. Every corner of Rapid Dreamz is designed with child safety in mind: rounded furniture edges, soft-landing flooring in activity zones, full CCTV surveillance, verified support escorts, and strict authorized-guardian pickup policies.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-700">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-slate-900 mb-1">Child-Proof Facilities</strong>
              Rounded non-toxic furniture, finger-pinch door guards, and sanitary low-height washrooms.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-slate-900 mb-1">Trained Caregivers</strong>
              Loving support ayahs and pediatric first-aid certified educators present at all times.
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
              <strong className="block text-slate-900 mb-1">Secure Pickup Protocols</strong>
              Mandatory parent RFID/escort identity verification before any child departs campus.
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Admissions Open {settings.academicYear}
            </span>
            <h3 className="font-outfit text-2xl sm:text-3xl font-bold">
              Give Your Child the Best Beginning
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
              Applications are reviewed on a rolling basis. Schedule a visit to tour our sensory classrooms and play spaces.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/dreamz/admissions"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all"
            >
              Apply to Dreamz
            </Link>
            <Link
              to="/visit"
              className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              Schedule Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
