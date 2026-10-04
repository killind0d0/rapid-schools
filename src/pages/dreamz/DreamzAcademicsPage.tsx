import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Sparkles, CheckCircle2, ArrowRight, BookOpen, Heart, Compass, Sprout, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StageChapter {
  chapter: string;
  grade: string;
  botanicalTitle: string;
  age: string;
  overview: string;
  milestones: string[];
  sensoryFocus: string;
  readinessBridge: string;
}

const chapters: StageChapter[] = [
  {
    chapter: 'Chapter I',
    grade: 'Play Group',
    botanicalTitle: 'The Gentle Sprout • Sensorial Awakenings',
    age: '2 to 3 Years',
    overview: 'A loving transition from the parental embrace into a calm, predictable social sanctuary. The emphasis is on joyful separation security, tactile manipulation, and gross motor reassurance.',
    milestones: [
      'Ease of morning separation and attachment trust with lead educators',
      'Articulating basic physical needs, hydration cues, and emotional states',
      'Grasping, stacking natural timber blocks, and large-muscle balance coordination',
      'Joyful engagement with nursery rhymes, tactile fabric boards, and puppet theatre'
    ],
    sensoryFocus: 'Tactile discrimination with soft fabrics, timber cubes, water play',
    readinessBridge: 'Comfortable independence in classroom routines and social calm'
  },
  {
    chapter: 'Chapter II',
    grade: 'Nursery',
    botanicalTitle: 'The Blossom • Language Springs & Phonics',
    age: '3 to 4 Years',
    overview: 'Explosion of speech, phonetic wonder, and collaborative peer play. Children move from solitary play to empathetic partner interaction and expressive creative art.',
    milestones: [
      'Introduction to 26 Jolly Phonics phonetic letter sounds through tactile sandpaper tracing',
      'Counting objects 1 to 10 with concrete bead bars and counting acorns',
      'Pincer-grip mastery using beeswax clay sculpting, jumbo crayons, and pegboards',
      'Empathetic turn-taking, greeting rituals, and listening gracefully in circle discussions'
    ],
    sensoryFocus: 'Phonemic sound recognition, natural beeswax modeling, color gradient tablets',
    readinessBridge: 'Confidence in group interactions and structured curiosity tasks'
  },
  {
    chapter: 'Chapter III',
    grade: 'LKG (Lower Kindergarten)',
    botanicalTitle: 'The Branch • Phonemic Blending & Quantitative Logic',
    age: '4 to 5 Years',
    overview: 'Structured emergence of early reading, quantitative reasoning, and scientific questioning. Children blend consonant-vowel-consonant sounds and explore natural living phenomena.',
    milestones: [
      'Blending CVC words (cat, sun, pen) and reading introductory decodable phonics readers',
      'Number formation, sequential counting, and concrete greater-than/less-than relationships',
      'Inquiry into living botany, plant growth cycles, weather shifts, and community helpers',
      'Poise and vocal confidence in weekly stage recitation and collaborative storytelling'
    ],
    sensoryFocus: 'Sandpaper numeral boards, nature investigation tables, decodable phonetic libraries',
    readinessBridge: 'Autonomous self-selected Montessori work cycles and sustained concentration'
  },
  {
    chapter: 'Chapter IV',
    grade: 'UKG (Upper Kindergarten)',
    botanicalTitle: 'The Flourishing Tree • Complete CBSE Class 1 Readiness',
    age: '5 to 6 Years',
    overview: 'The pinnacle early-childhood chapter providing an effortless, joyful bridge into formal primary schooling. Cultivates fluent reading, basic arithmetic logic, and emotional maturity.',
    milestones: [
      'Fluent decoding of storybooks, sight word confidence, and short creative journaling',
      'Foundational addition, subtraction with Montessori stamp game apparatus, and practical clock time',
      'Empirical observation of scientific principles (buoyancy, light reflection, seed germination)',
      'Total cognitive and social readiness for smooth transition into Class 1 at Rapid Shakuntlayan'
    ],
    sensoryFocus: 'Montessori addition strip boards, early cursive tracing, botanical specimen boards',
    readinessBridge: 'Seamless graduation into CBSE primary curriculum standards with vibrant curiosity'
  }
];

export const DreamzAcademicsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FCF8F3] pb-24 text-[#2A1208]">
      <Breadcrumbs
        items={[
          { label: 'Rapid Dreamz', href: '/dreamz' },
          { label: 'Early Years Stages' }
        ]}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-[#B43B0E] via-[#A0340A] to-[#8C2C07] text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#FDBA74]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 left-10 w-72 h-72 bg-[#FFEDD5]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-black/30 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-[#FFEDD5] backdrop-blur-md border border-white/25 font-mono shadow-xs">
            <Sprout className="w-3.5 h-3.5 text-[#FDBA74]" />
            <span>Developmental Pedagogical Chapters</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Early Years Academic Chapters
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#FFEDD5] font-normal leading-relaxed">
            Four carefully calibrated pedagogical milestones guiding toddlers from separation comfort to confident primary school readiness.
          </p>
        </div>
      </section>

      {/* Chapters Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-8">
        {chapters.map((ch, index) => (
          <div
            key={index}
            className="p-6 sm:p-9 rounded-3xl bg-[#FCF8F3] border border-[#F0DEC8] shadow-[0_4px_24px_-4px_rgba(180,59,14,0.06)] hover:border-[#FB923C]/60 hover:shadow-[0_12px_28px_-6px_rgba(180,59,14,0.1)] transition-all duration-300 space-y-6"
          >
            {/* Chapter Header */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F0DEC8] pb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-[#8C2C07] uppercase tracking-wider">
                    {ch.chapter}
                  </span>
                  <span className="text-xs text-[#FDBA74]">✦</span>
                  <span className="text-xs font-semibold text-[#166534] bg-[#DCFCE7] px-2.5 py-0.5 rounded-full border border-[#86EFAC]/50">
                    Age: {ch.age}
                  </span>
                </div>
                <h2 className="font-editorial text-2xl sm:text-3xl font-bold text-[#2A1208]">
                  {ch.grade}
                </h2>
                <p className="text-xs font-serif italic text-[#8C2C07]">
                  {ch.botanicalTitle}
                </p>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#FFEDD5] text-[#9A3412] border border-[#FED7AA]">
                Milestone 0{index + 1}
              </span>
            </div>

            {/* Overview */}
            <p className="text-xs sm:text-sm text-[#5C3D2E] leading-relaxed font-normal">
              {ch.overview}
            </p>

            {/* Developmental Milestones Grid */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#8C2C07] font-mono">
                Key Developmental Milestones:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#4A2E20]">
                {ch.milestones.map((m, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FFFDF9] border border-[#F0DEC8]">
                    <CheckCircle2 className="w-4 h-4 text-[#166534] shrink-0 mt-0.5" />
                    <span className="leading-snug">{m}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pedagogical Footnote */}
            <div className="pt-3 border-t border-[#F0DEC8]/70 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#FFF7ED] text-[#8C2C07]">
                <strong className="block font-semibold mb-0.5">Sensory Tooling:</strong>
                <span className="text-[#5C3D2E]">{ch.sensoryFocus}</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F0FDF4] text-[#166534]">
                <strong className="block font-semibold mb-0.5">Developmental Goal:</strong>
                <span className="text-[#365314]">{ch.readinessBridge}</span>
              </div>
            </div>
          </div>
        ))}

        {/* Bottom CTA */}
        <div className="pt-6 text-center">
          <Link
            to="/dreamz/admissions"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-[#B43B0E] hover:bg-[#8C2C07] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all"
          >
            <span>Apply for Early Years Admission</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
