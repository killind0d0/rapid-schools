import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { FileText, Download, Search, CheckCircle2, ShieldCheck, FileCheck } from 'lucide-react';
import { triggerInstitutionalDownload } from '../utils/downloadHelper';

export const DownloadsPage: React.FC = () => {
  const { downloads } = useSite();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSchool, setSelectedSchool] = useState<'all' | 'dreamz' | 'shakuntlayan'>('all');

  const categories = ['Admission', 'Academic', 'Forms', 'Calendars', 'Policies', 'Circulars'];

  const filteredDownloads = downloads.filter((item) => {
    if (selectedSchool !== 'all' && item.targetSchool !== 'all' && item.targetSchool !== selectedSchool) {
      return false;
    }
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
      );
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Breadcrumbs items={[{ label: 'Download Center' }]} />

      {/* Banner */}
      <section className="bg-slate-950 text-white py-14 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Document Repository
          </span>
          <h1 className="font-outfit text-3xl sm:text-5xl font-extrabold tracking-tight">
            Institutional Downloads & Forms
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-300">
            Official admission prospectuses, syllabi maps, academic calendars, fee policies, and registration forms available for immediate download.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border border-slate-200/80 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search publications or forms by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">All Wings (Both Schools)</option>
                <option value="dreamz">Rapid Dreamz Documents</option>
                <option value="shakuntlayan">Rapid Shakuntlayan Documents</option>
              </select>
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="all">All Categories</option>
                {categories.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Document List */}
        <div className="pt-8 space-y-3">
          {filteredDownloads.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
              <FileText className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="font-outfit text-lg font-bold text-slate-700">No documents found</h3>
              <p className="text-xs text-slate-500 max-w-sm mx-auto">
                No matching documents match your criteria. Try adjusting your filters or search keywords.
              </p>
            </div>
          ) : (
            filteredDownloads.map((doc) => (
              <div
                key={doc.id}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-blue-900 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded">
                        {doc.category}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">
                        {doc.targetSchool === 'all'
                          ? 'Rapid Schools Network'
                          : doc.targetSchool === 'dreamz'
                          ? 'Rapid Dreamz'
                          : 'Rapid Shakuntlayan'}
                      </span>
                      <span className="text-[11px] text-slate-400">
                        • {doc.fileSize}
                      </span>
                    </div>

                    <h3 className="font-outfit text-base font-bold text-slate-900">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5 max-w-2xl leading-relaxed">
                      {doc.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() =>
                      triggerInstitutionalDownload(
                        doc.title,
                        doc.category,
                        `${doc.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`,
                        doc.targetSchool === 'dreamz'
                          ? 'Rapid Dreamz'
                          : doc.targetSchool === 'shakuntlayan'
                          ? 'Rapid Shakuntlayan'
                          : 'Rapid Schools',
                        doc.description
                      )
                    }
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-amber-500 text-white hover:text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download {doc.fileType}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Security & Verification Note */}
        <div className="mt-10 p-5 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-600 flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            <strong>Authenticity Assurance:</strong> All circulars, forms, and prospectuses downloaded from this portal are digitally generated and certified by the Rapid Schools Administrative Office.
          </span>
        </div>
      </div>
    </div>
  );
};
