import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Microscope, BookOpen, Activity, Palette, Monitor, ShieldCheck, ArrowRight, Calendar, Compass, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CampusFacility {
  id: string;
  dossierCode: string;
  title: string;
  division: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  specifications: {
    dimensions: string;
    workstations: string;
    standards: string;
  };
  desc: string;
  keyApparatus: string[];
}

const facilities: CampusFacility[] = [
  {
    id: 'physics-lab',
    dossierCode: 'LAB-PHYS-01',
    title: 'Physics & Applied Mechanics Lab',
    division: 'Senior Secondary Science Wing',
    icon: Microscope,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80',
    specifications: {
      dimensions: 'CBSE Standard Floor Plan',
      workstations: '30 Independent Student Stations',
      standards: 'National Science Norms'
    },
    desc: 'Spacious, well-lit laboratory engineered for precision optical experiments, electromagnetic investigations, mechanics verifications, and board practical examinations.',
    keyApparatus: ['Optical benches & sodium lamps', 'Sonometer & resonance apparatus', 'Spectrometers & Wheatstone bridges']
  },
  {
    id: 'chemistry-lab',
    dossierCode: 'LAB-CHEM-02',
    title: 'Chemical Analytical Laboratory',
    division: 'Senior Secondary Science Wing',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=800&q=80',
    specifications: {
      dimensions: 'Dedicated Chemical Exhaust Bay',
      workstations: 'Individual Gas & Water Burner Nodes',
      standards: 'Emergency Eye-Wash & Fire Suppressant'
    },
    desc: 'Equipped with chemical-resistant granite countertops, emergency deluge showers, individual reagent racks, and precision digital balances strictly complying with CBSE safety norms.',
    keyApparatus: ['Digital analytical balances', 'Borosilicate laboratory glassware', 'Volumetric titration apparatus']
  },
  {
    id: 'biology-lab',
    dossierCode: 'LAB-BIO-03',
    title: 'Biological & Botanical Science Lab',
    division: 'Life Sciences Wing',
    icon: Compass,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    specifications: {
      dimensions: 'Microscopy Observation Hall',
      workstations: 'Compound & Dissecting Microscopes',
      standards: 'Bio-Safety Protocols'
    },
    desc: 'Illuminated student workstations with high-magnification compound microscopes, human anatomical models, preserved specimen museums, and physiological study materials.',
    keyApparatus: ['Compound binocular microscopes', 'Histological specimen collections', 'Permanent botanical mounts']
  },
  {
    id: 'computing-lab',
    dossierCode: 'LAB-TECH-04',
    title: 'Computer Science & Informatics Suite',
    division: 'Digital Technology Wing',
    icon: Monitor,
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
    specifications: {
      dimensions: 'High-Density Networked Terminal Room',
      workstations: 'Ergonomic Computing Workstations',
      standards: 'Enterprise Monitored Firewall'
    },
    desc: 'High-performance computing terminals linked via structured gigabit cabling. Loaded with verified programming environments for Python, SQL, web technologies, and computational logic.',
    keyApparatus: ['Python & SQL IDE platforms', 'Full UPS continuous power backup', 'Interactive projection smartboard']
  },
  {
    id: 'library',
    dossierCode: 'FAC-LIB-05',
    title: 'Central Learning Resource Library',
    division: 'Scholastic Resource Wing',
    icon: BookOpen,
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80',
    specifications: {
      dimensions: 'Multi-Tiered Scholastic Library',
      workstations: 'Quiet Research Carrels & Reading Bays',
      standards: 'Open-Access Classification System'
    },
    desc: 'Extensive repository of CBSE reference texts, national academic periodicals, encyclopedias, classical Hindi and world literature, and digital catalog workstations.',
    keyApparatus: ['National periodicals & journals', 'Senior research reference section', 'Digital cataloging search kiosks']
  },
  {
    id: 'sports-complex',
    dossierCode: 'FAC-ATH-06',
    title: 'Sports Complex & Athletic Grounds',
    division: 'Physical Education & Athletics Wing',
    icon: Activity,
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80',
    specifications: {
      dimensions: 'Multi-Sport Outdoor Campus Fields',
      workstations: 'Standard Basketball Court & Cricket Nets',
      standards: 'SGFI Competition Dimensional Norms'
    },
    desc: 'Expansive grass athletic field, standard hard basketball courts, cricket turf practice nets, and indoor facilities for table tennis, chess, and yoga guided by certified coaches.',
    keyApparatus: ['Cricket turf practice enclosures', 'Regulation outdoor basketball court', 'Indoor table tennis arena']
  },
  {
    id: 'arts-studio',
    dossierCode: 'FAC-ART-07',
    title: 'Visual Arts & Sculpting Studio',
    division: 'Cultural & Aesthetic Wing',
    icon: Palette,
    image: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=800&q=80',
    specifications: {
      dimensions: 'Naturally Lit Creative Studio',
      workstations: 'Artist Easels & Ceramic Pottery Wheels',
      standards: 'Exhibition Gallery Space'
    },
    desc: 'Abundant natural north lighting, wooden easels, ceramic clay wheels, and drying racks allowing scholars to master watercolors, oil pastels, sculpting, and traditional crafts.',
    keyApparatus: ['Adjustable timber painting easels', 'Terracotta clay sculpting workbenches', 'Student artwork exhibition boards']
  },
  {
    id: 'security-campus',
    dossierCode: 'FAC-SAFE-08',
    title: 'Institutional Safety & Security',
    division: 'Campus Governance Wing',
    icon: ShieldCheck,
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80',
    specifications: {
      dimensions: 'Comprehensive Campus Perimeter',
      workstations: 'Central Surveillance Command Desk',
      standards: 'CCTV & Fire Hydrant Certified'
    },
    desc: 'Round-the-clock trained security officers, comprehensive HD CCTV surveillance across common corridors and campus entrances, verified visitor identity passes, and fire safety systems.',
    keyApparatus: ['Full-perimeter HD CCTV network', 'Mandatory visitor logging & gate passes', 'Certified fire hydrants & extinguishers']
  }
];

export const ShakunCampusPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAF8] pb-24 text-[#021C16]">
      <Breadcrumbs
        items={[
          { label: 'Rapid Shakuntlayan', href: '/shakuntlayan' },
          { label: 'Campus Facilities' }
        ]}
      />

      {/* Hero Canvas in Sovereign British Racing Forest Emerald */}
      <section className="bg-gradient-to-br from-[#042F24] via-[#021C16] to-[#01120D] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Mint Conifer Aurora Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[radial-gradient(circle,_rgba(52,211,153,0.14)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 left-10 w-96 h-96 bg-[radial-gradient(circle,_rgba(197,160,89,0.1)_0%,_transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/35 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#064E3B] text-[#A7F3D0] border border-[#34D399]/40 shadow-xs">
            <Microscope className="w-3.5 h-3.5 text-[#34D399]" />
            <span>Infrastructure Dossier • Verified Campus Facilities</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Rapid Shakuntlayan Campus Infrastructure
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D1E7DF] font-normal leading-relaxed">
            Architectural and scientific facilities purpose-built for rigorous CBSE scholarship, empirical discovery, and athletic discipline.
          </p>
        </div>
      </section>

      {/* Facilities Dossier Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {facilities.map((fac) => {
            const Icon = fac.icon;
            return (
              <div
                key={fac.id}
                className="rounded-3xl bg-[#F8FAF8] border border-[#D1E5DB] shadow-xs overflow-hidden flex flex-col hover:border-[#042F24] hover:shadow-[0_12px_30px_-8px_rgba(4,47,36,0.12)] transition-all duration-300"
              >
                {/* Dossier Image Banner */}
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#021C16]/90 via-[#021C16]/30 to-transparent" />

                  {/* Badges on image */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#042F24]/90 text-[#A7F3D0] border border-[#34D399]/30 backdrop-blur-md">
                      {fac.dossierCode}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                    <div>
                      <span className="text-[11px] font-mono text-[#E5C37E] block uppercase tracking-wider">
                        {fac.division}
                      </span>
                      <h3 className="font-editorial text-2xl font-bold text-white">
                        {fac.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-2xl bg-[#064E3B] text-[#A7F3D0] border border-[#34D399]/30 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Dossier Specifications Panel */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <p className="text-xs sm:text-sm text-[#3C584E] leading-relaxed">
                    {fac.desc}
                  </p>

                  {/* Architectural Blueprint Specifications Table */}
                  <div className="p-4 rounded-2xl bg-white border border-[#D1E5DB] space-y-2 text-xs">
                    <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#064E3B] border-b border-[#D1E5DB] pb-1.5 flex items-center justify-between">
                      <span>Dossier Specifications</span>
                      <span className="text-[#8A6A27]">CBSE Verified</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[#1E3B32]">
                      <div>
                        <span className="text-[10px] text-[#4E776A] block font-mono">Capacity / Layout</span>
                        <strong className="text-xs text-[#021C16]">{fac.specifications.workstations}</strong>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#4E776A] block font-mono">Compliance Norm</span>
                        <strong className="text-xs text-[#021C16]">{fac.specifications.standards}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Key Apparatus Manifest */}
                  <div className="pt-2 border-t border-[#D1E5DB]">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8A6A27] block mb-2">
                      Key Inventory & Infrastructure:
                    </span>
                    <ul className="space-y-1 text-xs text-[#1E3B32]">
                      {fac.keyApparatus.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#064E3B]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guided Campus Tour Banner */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#042F24] via-[#021C16] to-[#01120D] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-[#0F4738]">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A7F3D0] block">
              In-Person Verification
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
              Inspect our laboratories and campus in person
            </h3>
            <p className="text-xs sm:text-sm text-[#D1E7DF] font-normal">
              Guided campus tours and academic counselor meetings are scheduled Monday through Saturday.
            </p>
          </div>
          <Link
            to="/visit"
            className="px-6 py-3.5 rounded-xl bg-[#C5A059] hover:bg-[#B38D46] text-[#021C16] font-bold text-xs uppercase tracking-wider transition-colors shrink-0 flex items-center gap-2 shadow-sm"
          >
            <Calendar className="w-4 h-4 text-[#021C16]" />
            <span>Book Guided Campus Visit</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
