import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { FileText, Download, Search, ShieldCheck } from 'lucide-react';
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
    <div className="min-h-screen bg-[#FAF6F0] pb-24">
      <Breadcrumbs items={[{ label: 'Download Center' }]} />

      {/* Header Banner */}
      <section className="bg-[#1C0306] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Layered radial glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#BD672A]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#3D0B12]/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BD672A]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#2C070C] text-[#F3C292] border border-[#BD672A]/30 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD672A] shadow-[0_0_8px_rgba(189,103,42,0.8)]" />
            Document Repository
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Institutional Downloads & <span className="italic font-normal text-[#F3C292]">Forms</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D4C3B3] leading-relaxed font-sans">
            Official admission prospectuses, syllabi maps, academic calendars, fee policies, and registration forms available for immediate download.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_12px_36px_-12px_rgba(44,7,12,0.06)] border border-[#E8DFD1] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-[#A8988C] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search publications or forms by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs sm:text-sm text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all font-sans"
              />
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value as any)}
                className="w-full px-3 py-2.5 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs sm:text-sm text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all font-sans"
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
                className="w-full px-3 py-2.5 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs sm:text-sm text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 transition-all font-sans"
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
        <div className="pt-8 space-y-4">
          {filteredDownloads.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E8DFD1] p-8 space-y-3 shadow-xs">
              <FileText className="w-12 h-12 text-[#BD672A]/40 mx-auto" />
              <h3 className="font-editorial text-2xl font-medium text-[#23070B]">No documents found</h3>
              <p className="text-xs sm:text-sm text-[#6E5D5F] max-w-sm mx-auto font-sans">
                No matching documents match your criteria. Try adjusting your filters or search keywords.
              </p>
            </div>
          ) : (
            filteredDownloads.map((doc) => (
              <div
                key={doc.id}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E8DFD1] hover:border-[#BD672A]/50 shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(189,103,42,0.12)] transition-all duration-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#BD672A]/10 text-[#BD672A] border border-[#BD672A]/25 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5 font-mono">
                      <span className="text-[10px] font-bold text-[#BD672A] bg-[#BD672A]/10 border border-[#BD672A]/25 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                        {doc.category}
                      </span>
                      <span className="text-xs font-semibold text-[#6E5D5F]">
                        {doc.targetSchool === 'all'
                          ? 'Rapid Schools Network'
                          : doc.targetSchool === 'dreamz'
                          ? 'Rapid Dreamz'
                          : 'Rapid Shakuntlayan'}
                      </span>
                      <span className="text-[11px] text-[#A8988C]">
                        • {doc.fileSize}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl font-medium text-[#23070B] leading-snug">
                      {doc.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C4E50] mt-1 max-w-2xl leading-relaxed font-sans">
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
                    className="luxury-btn-primary w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Download className="w-4 h-4 text-white" />
                    <span>Download {doc.fileType}</span>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Security & Verification Note */}
        <div className="mt-12 p-6 rounded-3xl bg-white border border-[#E8DFD1] text-xs text-[#5C4E50] flex items-center gap-3.5 shadow-xs font-sans">
          <ShieldCheck className="w-6 h-6 text-[#064E3B] shrink-0" />
          <span>
            <strong className="text-[#23070B] font-semibold">Authenticity Assurance:</strong> All circulars, forms, and prospectuses downloaded from this portal are digitally generated and certified by the Rapid Schools Administrative Office.
          </span>
        </div>
      </div>
    </div>
  );
};
