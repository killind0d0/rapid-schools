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
    <div className="min-h-screen bg-slate-50 pb-24">
      <Breadcrumbs items={[{ label: 'News & Stories' }]} />

      {/* Banner */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Campus Dispatches
          </span>
          <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
            Classroom Stories & Educational News
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300">
            Insights into our pedagogical initiatives, student research projects, cultural celebrations, and academic milestones.
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
              All Wings
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

        {/* News Grid */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedNews.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col group cursor-pointer"
              onClick={() => setReadingArticle(article)}
            >
              <div className="relative h-52 overflow-hidden bg-slate-100">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-slate-950/70 text-amber-400 backdrop-blur-md border border-amber-500/30">
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {new Date(article.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1 truncate">
                    <User className="w-3.5 h-3.5" />
                    {article.author}
                  </span>
                </div>

                <h3 className="font-outfit text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-3 leading-relaxed flex-1">
                  {article.summary}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-amber-600 group-hover:text-amber-700">
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
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
              aria-label="Close article"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              {readingArticle.category} • {readingArticle.targetSchool === 'dreamz' ? 'Rapid Dreamz' : readingArticle.targetSchool === 'shakuntlayan' ? 'Rapid Shakuntlayan' : 'Rapid Schools'}
            </span>

            <h2 className="font-outfit text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-2">
              {readingArticle.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-slate-500 mb-6 pb-4 border-b border-slate-100">
              <span>Published: {new Date(readingArticle.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              <span>•</span>
              <span>Author: {readingArticle.author}</span>
            </div>

            <img
              src={readingArticle.featuredImage}
              alt={readingArticle.title}
              className="w-full h-64 sm:h-80 object-cover rounded-2xl mb-6 shadow-md"
            />

            <div className="prose text-slate-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p className="font-semibold text-slate-900 text-base sm:text-lg">
                {readingArticle.summary}
              </p>
              <p className="whitespace-pre-line">
                {readingArticle.content}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setReadingArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 transition-colors"
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
