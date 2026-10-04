import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Microscope, BookOpen, Activity, Palette, Monitor, ShieldCheck, ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const facilities = [
  {
    title: 'Physics, Chemistry & Biology Labs',
    icon: Microscope,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    desc: 'Spacious, well-ventilated laboratory halls equipped with precision apparatus, analytical balances, chemical fume exhausts, and student experiment stations strictly adhering to CBSE safety norms.'
  },
  {
    title: 'Computer Science & Digital Lab',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    desc: 'Ergonomic computing terminals with high-speed local networking, monitored internet firewalls, programming IDEs, and multimedia software enabling students to explore coding and digital problem solving.'
  },
  {
    title: 'Central Learning Resource Library',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    desc: 'Quiet reading zones stocked with thousands of volumes covering classical Indian literature, international fiction, reference encyclopedias, competitive exam series, and subscription periodicals.'
  },
  {
    title: 'Sports Complex & Athletic Field',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    desc: 'Expansive grass athletic grounds, dedicated cricket practice nets, basketball courts, badminton courts, and indoor table tennis facilities led by experienced physical education trainers.'
  },
  {
    title: 'Visual Arts & Sculpting Studio',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80',
    desc: 'Naturally lit creative studio with drawing easels, pottery wheels, sculpting clay, and exhibition boards where students express visual aesthetics and participate in inter-school showcases.'
  },
  {
    title: 'CCTV Surveillance & Campus Safety',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    desc: '24/7 security personnel, comprehensive CCTV coverage in common corridors and access points, fire safety systems, clear emergency exit pathways, and secure parent pickup credentials.'
  }
];

export const ShakunCampusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs
        items={[
          { label: 'Rapid Shakuntlayan', href: '/shakuntlayan' },
          { label: 'Campus Facilities' }
        ]}
      />

      <section className="bg-[#03231B] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#064E3B]/60 via-[#03231B] to-[#01140F]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#059669]/20 text-[#A7F3D0] border border-[#059669]/30">
            Infrastructure & Environment
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Rapid Shakuntlayan Campus
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#D1FAE5]/80 font-sans">
            Modern educational facilities engineered for academic inquiry, physical health, and collaborative student activity.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => {
            const Icon = fac.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-[#E6DDCF] shadow-sm overflow-hidden flex flex-col hover:border-[#059669]/40 hover:shadow-md transition-all"
              >
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 p-2 rounded-xl bg-[#03231B]/85 backdrop-blur-md text-[#A7F3D0] border border-[#059669]/30">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-[#1C1917] mb-2">
                      {fac.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                      {fac.desc}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guided Tour Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#03231B] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-[#064E3B]/40">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-cormorant text-2xl sm:text-3xl font-normal text-[#FCFAF6]">
              Want to see our laboratories and campus in person?
            </h3>
            <p className="text-xs sm:text-sm text-[#D1FAE5]/80 font-sans">
              Guided campus tours are conducted Monday through Saturday with an academic counselor.
            </p>
          </div>
          <Link
            to="/visit"
            className="px-6 py-3 rounded-xl bg-[#BD672A] hover:bg-[#A35520] text-white font-semibold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2 shadow-sm"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Guided Visit</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
