import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Calendar, User, ArrowRight, X } from 'lucide-react';
import { NewsArticle } from '../data/types';

export const NewsPage: React.FC = () => {
  const { news } = useSite();
  const [selectedSchool, setSelectedSchool] = useState<'all' | 'dreamz' | 'shakuntlayan'>('all');
  const [readingArticle, setReadingArticle] = useState<NewsArticle | null>(null);

  const publishedNews = news.filter((n) => {
    if (!n.isPublished) return false;
    if (selectedSchool !== 'all' && n.targetSchool !== 'all' && n.targetSchool !== selectedSchool) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-24">
      <Breadcrumbs items={[{ label: 'News & Stories' }]} />

      {/* Header Banner */}
      <section className="bg-[#1C0306] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Layered radial glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#BD672A]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#3D0B12]/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BD672A]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#2C070C] text-[#F3C292] border border-[#BD672A]/30 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD672A] shadow-[0_0_8px_rgba(189,103,42,0.8)]" />
            Campus Dispatches
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Classroom Stories & Educational <span className="italic font-normal text-[#F3C292]">News</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D4C3B3] leading-relaxed font-sans">
            Insights into our pedagogical initiatives, student research projects, cultural celebrations, and academic milestones.
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
              All Wings
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

        {/* News Grid */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedNews.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(189,103,42,0.12)] hover:border-[#BD672A]/50 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
              onClick={() => setReadingArticle(article)}
            >
              <div className="relative h-52 overflow-hidden bg-[#FCFAF6]">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3.5 left-3.5">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#1C0306]/90 text-[#F3C292] backdrop-blur-md border border-[#BD672A]/40 font-mono shadow-md">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-7 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-[#6E5D5F] mb-2.5 font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#BD672A]" />
                    {new Date(article.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5 truncate">
                    <User className="w-3.5 h-3.5 text-[#BD672A]" />
                    {article.author}
                  </span>
                </div>

                <h3 className="font-editorial text-2xl font-medium text-[#23070B] group-hover:text-[#BD672A] transition-colors line-clamp-2 leading-snug">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#5C4E50] mt-2 line-clamp-3 leading-relaxed flex-1 font-sans">
                  {article.summary}
                </p>

                <div className="mt-5 pt-4 border-t border-[#E8DFD1] flex items-center justify-between text-xs font-bold text-[#BD672A] group-hover:text-[#A2521C] transition-colors">
                  <span className="uppercase tracking-wider text-[11px] font-mono">Read Full Dispatch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Reading Modal */}
      {readingArticle && (
        <div
          className="fixed inset-0 z-50 bg-[#1C0306]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-7 sm:p-10 shadow-2xl relative border border-[#E8DFD1]">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FCFAF6] hover:bg-[#FAF6F0] text-[#23070B] border border-[#E8DFD1] transition-colors cursor-pointer"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#BD672A] bg-[#BD672A]/10 px-3.5 py-1 rounded-full border border-[#BD672A]/25 font-mono">
              {readingArticle.category} • {readingArticle.targetSchool === 'dreamz' ? 'Rapid Dreamz' : readingArticle.targetSchool === 'shakuntlayan' ? 'Rapid Shakuntlayan' : 'Rapid Schools'}
            </span>

            <h2 className="font-editorial text-2xl sm:text-4xl font-medium text-[#23070B] mt-3 mb-2 leading-tight">
              {readingArticle.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-[#6E5D5F] mb-6 pb-4 border-b border-[#E8DFD1] font-mono">
              <span>Published: {new Date(readingArticle.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>•</span>
              <span>Author: {readingArticle.author}</span>
            </div>

            <img
              src={readingArticle.featuredImage}
              alt={readingArticle.title}
              className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-6 shadow-sm border border-[#E8DFD1]"
            />

            <div className="prose text-[#5C4E50] text-sm sm:text-base leading-relaxed space-y-4 font-sans">
              <p className="font-semibold text-[#23070B] text-base sm:text-lg">
                {readingArticle.summary}
              </p>
              <p className="whitespace-pre-line leading-relaxed">
                {readingArticle.content}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E8DFD1] flex justify-end">
              <button
                onClick={() => setReadingArticle(null)}
                className="luxury-btn-primary px-6 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider cursor-pointer"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
