import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Heart, Smile, Sun, ArrowRight, ShieldCheck, CheckCircle2, Calendar, Award } from 'lucide-react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { PlayApproach } from '../../components/dreamz/PlayApproach';
import { DayTimeline } from '../../components/dreamz/DayTimeline';
import { useSite } from '../../context/SiteContext';

export const DreamzHomePage: React.FC = () => {
  const { settings } = useSite();

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24 text-[#451A03]">
      <Breadcrumbs items={[{ label: 'Rapid Dreamz (Junior Wing)' }]} />

      {/* Hero Section with Luxury Velour Terracotta & Morning Sun Amber Highlights */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#B45309] via-[#B45309] to-[#92400E] text-white py-16 sm:py-24">
        {/* Morning Sun Amber Ambient Blooms */}
        <div className="absolute -top-16 -right-16 w-96 h-96 bg-[#FCD34D]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-96 h-96 bg-[#FEF3C7]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/25 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              {/* Warm Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-[#FEF3C7] backdrop-blur-md border border-white/25 font-mono shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#FCD34D]" />
                <span>Rapid Dreamz • Play Group to UKG</span>
              </div>

              {/* Master Cormorant Garamond Heading */}
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08]">
                Little Minds.{' '}
                <span className="block font-editorial italic font-normal text-[#FDE68A]">
                  Big Beginnings.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#FEF3C7] max-w-xl font-normal leading-relaxed">
                Step into a loving educational sanctuary where morning begins with a warm smile, curious wonder, and tactile discovery. We cultivate your child's innate imagination, emotional security, and foundational literacy with Montessori wonder.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Link
                  to="/dreamz/admissions"
                  className="px-6 py-3.5 rounded-xl bg-[#451A03] hover:bg-[#2E1002] text-[#FEF3C7] hover:text-white font-bold text-xs uppercase tracking-wider shadow-lg border border-[#FCD34D]/30 transition-all flex items-center gap-2"
                >
                  <span>Early Years Admissions</span>
                  <ArrowRight className="w-4 h-4 text-[#FCD34D]" />
                </Link>

                <Link
                  to="/visit"
                  className="px-6 py-3.5 rounded-xl bg-[#F8FAFC] hover:bg-[#F8FAFC] text-[#78350F] font-bold text-xs uppercase tracking-wider shadow transition-all flex items-center gap-2 border border-[#FEF3C7]"
                >
                  <Calendar className="w-4 h-4 text-[#B45309]" />
                  <span>Book Early-Years Tour</span>
                </Link>
              </div>

              {/* Reassuring Care Highlights */}
              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-[#FEF3C7] border-t border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Heart className="w-3.5 h-3.5 text-[#FCD34D]" />
                  </div>
                  <span className="font-medium">Nurturing Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Smile className="w-3.5 h-3.5 text-[#FCD34D]" />
                  </div>
                  <span className="font-medium">Sensory Playrooms</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#0F766E]/40 flex items-center justify-center shrink-0 border border-[#5EEAD4]/40">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#CCFBF1]" />
                  </div>
                  <span className="font-medium text-[#CCFBF1]">Child-Safe Security</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card with Velour Drop Shadow */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(69,26,3,0.5)] border-4 border-white/25 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80"
                  alt="Joyful child learning through tactile play at Rapid Dreamz"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#451A03]/95 via-[#451A03]/70 to-transparent p-6 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FCD34D] block mb-1 font-mono">
                    Nurturing Early Childhood
                  </span>
                  <p className="text-sm font-medium text-[#FEF3C7]">
                    Where hands touch, minds question, and each child's light is gently kindled.
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
          badge="Montessori & Reggio Emilia"
          badgeColor="terracotta"
          title="Curiosity, Not Compulsion"
          subtitle="Our early years pedagogy blends Montessori tactile methods with Reggio Emilia creative inquiry, establishing strong emotional and cognitive foundations."
          align="center"
        />

        <PlayApproach />

        <div className="mt-10 text-center">
          <Link
            to="/dreamz/approach"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#B45309] hover:text-[#92400E] uppercase tracking-wider font-mono bg-[#FEF3C7]/80 hover:bg-[#FEF3C7] px-5 py-2.5 rounded-full border border-[#FCD34D] transition-all"
          >
            <span>Explore Complete Early-Years Methodology</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* A Day at Rapid Dreamz Timeline */}
      <section className="py-20 bg-gradient-to-b from-[#FFFBEB]/70 via-[#F8FAFC] to-[#FFFBEB]/50 border-y border-[#FEF3C7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Daily Rhythm"
            badgeColor="terracotta"
            title="A Day at Rapid Dreamz"
            subtitle="Predictable, joyful routines that help young children feel safe, independent, and enthusiastic from arrival to departure."
            align="center"
          />

          <DayTimeline />
        </div>
      </section>

      {/* Safety & Nurturing Care Sanctuary */}
      <section className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#F8FAFC] border border-[#FEF3C7] shadow-[0_4px_24px_-4px_rgba(180,83,9,0.06)] space-y-6">
          <div className="flex items-center gap-2 text-[#0F766E]">
            <div className="w-8 h-8 rounded-full bg-[#CCFBF1] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#0F766E]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest font-mono">
              Child Protection & Hygiene Protocol
            </span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl font-bold text-[#451A03]">
            A Safe, Hygienic & Loving Sanctuary
          </h2>

          <p className="text-sm sm:text-base text-[#78350F] leading-relaxed">
            Entrusting your toddler to a school for the first time is a sacred act of confidence. Rapid Dreamz provides a fully child-proofed world: rounded timber furnishings, finger-pinch protection on all doorways, continuous CCTV surveillance, pediatric first-aid certified educators, and strictly enforced biometric and photo-verified parent escort pickup protocols.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-[#451A03]">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#FEF3C7] shadow-xs">
              <span className="text-[#B45309] font-bold text-xs uppercase tracking-wider block mb-1">
                Child-Proof Architecture
              </span>
              <p className="text-[#78350F] leading-relaxed">
                Rounded non-toxic furniture, anti-slip rubberized flooring in indoor activity bays, and low-level ergonomic sanitization facilities.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#FEF3C7] shadow-xs">
              <span className="text-[#0F766E] font-bold text-xs uppercase tracking-wider block mb-1">
                Pediatric First-Aid Educators
              </span>
              <p className="text-[#78350F] leading-relaxed">
                Loving support caregivers, dedicated female attendant ayahs, and faculty trained in infant and toddler emergency response.
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#FEF3C7] shadow-xs">
              <span className="text-[#B45309] font-bold text-xs uppercase tracking-wider block mb-1">
                Authorized Handoff Protocol
              </span>
              <p className="text-[#78350F] leading-relaxed">
                Mandatory photo escort authorization cards and identity verification prior to any toddler departing campus grounds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions CTA Banner in Deep Velour Terracotta */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#451A03] via-[#451A03] to-[#451A03] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#B45309]/30">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FCD34D] font-mono">
              Admissions Open • Academic Year {settings.academicYear}
            </span>
            <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-[#F8FAFC]">
              Give Your Child the Best Beginning
            </h3>
            <p className="text-xs sm:text-sm text-[#FEF3C7]/80 max-w-lg">
              Applications for Play Group, Nursery, LKG, and UKG are accepted on a rolling basis with gentle interaction sessions.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link
              to="/dreamz/admissions"
              className="px-6 py-3.5 rounded-xl bg-[#B45309] hover:bg-[#92400E] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Apply to Dreamz
            </Link>
            <Link
              to="/visit"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-[#FEF3C7] font-bold text-xs uppercase tracking-wider border border-white/20 transition-all"
            >
              Schedule Tour
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
