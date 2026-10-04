import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { Newspaper, Calendar, User, ArrowRight, X } from 'lucide-react';
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
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs items={[{ label: 'News & Stories' }]} />

      {/* Banner */}
      <section className="bg-[#2D060C] text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5A121E]/60 via-[#2D060C] to-[#1A0407]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#BD672A]/20 text-[#EAB592] border border-[#BD672A]/30">
            Campus Dispatches
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Classroom Stories & Educational News
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#D4C3B3] font-sans">
            Insights into our pedagogical initiatives, student research projects, cultural celebrations, and academic milestones.
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
              All Wings
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

        {/* News Grid */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedNews.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-[#E6DDCF] shadow-sm hover:shadow-md hover:border-[#BD672A]/50 transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
              onClick={() => setReadingArticle(article)}
            >
              <div className="relative h-52 overflow-hidden bg-[#FAF7F2]">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#2D060C]/85 text-[#EAB592] backdrop-blur-md border border-[#BD672A]/30">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-[#A8A29E] mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#BD672A]" />
                    {new Date(article.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 truncate">
                    <User className="w-3.5 h-3.5 text-[#BD672A]" />
                    {article.author}
                  </span>
                </div>

                <h3 className="font-cormorant text-xl sm:text-2xl font-semibold text-[#1C1917] group-hover:text-[#BD672A] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57534E] mt-2 line-clamp-3 leading-relaxed flex-1">
                  {article.summary}
                </p>

                <div className="mt-4 pt-4 border-t border-[#E6DDCF] flex items-center justify-between text-xs font-semibold text-[#BD672A] group-hover:text-[#A35520]">
                  <span>Read Full Article</span>
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
          className="fixed inset-0 z-50 bg-[#1C1917]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-[#E6DDCF]">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#FAF7F2] hover:bg-[#E6DDCF] text-[#1C1917] transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-widest text-[#BD672A] bg-[#FAF3EC] px-3.5 py-1 rounded-full border border-[#BD672A]/20">
              {readingArticle.category} • {readingArticle.targetSchool === 'dreamz' ? 'Rapid Dreamz' : readingArticle.targetSchool === 'shakuntlayan' ? 'Rapid Shakuntlayan' : 'Rapid Schools'}
            </span>

            <h2 className="font-cormorant text-2xl sm:text-4xl font-normal text-[#1C1917] mt-3 mb-2">
              {readingArticle.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-[#78716C] mb-6 pb-4 border-b border-[#E6DDCF]">
              <span>Published: {new Date(readingArticle.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>•</span>
              <span>Author: {readingArticle.author}</span>
            </div>

            <img
              src={readingArticle.featuredImage}
              alt={readingArticle.title}
              className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-6 shadow-sm border border-[#E6DDCF]"
            />

            <div className="prose text-[#57534E] text-sm sm:text-base leading-relaxed space-y-4">
              <p className="font-semibold text-[#1C1917] text-base sm:text-lg">
                {readingArticle.summary}
              </p>
              <p className="whitespace-pre-line">
                {readingArticle.content}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E6DDCF] flex justify-end">
              <button
                onClick={() => setReadingArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-[#3D0B12] text-[#EAB592] font-semibold text-xs uppercase tracking-wider hover:bg-[#5A121E] transition-colors"
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
