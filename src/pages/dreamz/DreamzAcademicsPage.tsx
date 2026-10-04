import React from 'react';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import { SectionHeading } from '../../components/common/SectionHeading';
import { Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stages = [
  {
    grade: 'Play Group',
    age: '2 to 2.5 Years',
    overview: 'Gentle transition from home into a warm, predictable social setting. Focus is on separation ease, tactile curiosity, and motor stability.',
    milestones: [
      'Separation comfort and routine familiarity',
      'Basic verbal expression of bodily needs',
      'Grasping, stacking, and large muscle coordination',
      'Enjoyment of nursery rhymes, puppet shows, and tactile materials'
    ]
  },
  {
    grade: 'Pre-Nursery',
    age: '2.5 to 3 Years',
    overview: 'Developing language confidence, curiosity, sensory discrimination, and sharing habits with friendly peers.',
    milestones: [
      'Two-to-three word conversational sentences',
      'Color and basic shape recognition through play',
      'Hand-eye coordination using pegboards and soft blocks',
      'Independent shoe-removal, handwashing, and water bottle handling'
    ]
  },
  {
    grade: 'Nursery',
    age: '3 to 4 Years',
    overview: 'Structured phonemic sounds, pre-writing pencil grip activities, counting games, and social cooperative play.',
    milestones: [
      'Introduction to 26 phonetic letter sounds through Jolly Phonics',
      'Number sense and counting objects from 1 to 10',
      'Expressive drawing with jumbo crayons and clay sculpting',
      'Turn-taking and empathetic peer cooperation during free play'
    ]
  },
  {
    grade: 'LKG (Lower Kindergarten)',
    age: '4 to 5 Years',
    overview: 'Building two-letter blending, sight words, quantitative comparisons, environmental science, and creative dramatics.',
    milestones: [
      'Blending CVC words (cat, dog, sun) and early decodable readers',
      'Number writing, sequential counting, and basic quantity comparisons',
      'Environmental understanding (plants, seasons, animals, helpers)',
      'Confidence in stage recitation and collaborative circle talks'
    ]
  },
  {
    grade: 'UKG (Upper Kindergarten)',
    age: '5 to 6 Years',
    overview: 'Smooth bridge to formal primary school. Confident sentence writing, basic addition/subtraction, scientific curiosity, and emotional maturity.',
    milestones: [
      'Fluent reading of short storybooks and simple creative journaling',
      'Foundational addition, subtraction, and practical time concepts',
      'Logical problem-solving and structured scientific curiosity projects',
      'Complete readiness for CBSE Class 1 at Rapid Shakuntlayan'
    ]
  }
];

export const DreamzAcademicsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF9] pb-24">
      <Breadcrumbs
        items={[
          { label: 'Rapid Dreamz', href: '/dreamz' },
          { label: 'Early Years Stages' }
        ]}
      />

      <section className="bg-gradient-to-r from-amber-500 to-orange-500 text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 text-white border border-white/30">
            Developmental Stages
          </span>
          <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
            Early Years Academic Journey
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-amber-100">
            Carefully calibrated developmental stepping stones from Play Group through UKG.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-6">
        {stages.map((st, index) => (
          <div
            key={index}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-amber-300 transition-all space-y-4"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <h3 className="font-outfit text-xl sm:text-2xl font-bold text-slate-900">
                  {st.grade}
                </h3>
                <span className="text-xs font-bold text-amber-600">
                  Age Benchmark: {st.age}
                </span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                Stage {index + 1}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {st.overview}
            </p>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                Core Developmental Milestones:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {st.milestones.map((m, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="pt-6 text-center">
          <Link
            to="/dreamz/admissions"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-md transition-all"
          >
            <span>Apply for Early Years Admission</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
