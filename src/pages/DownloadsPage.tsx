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
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs items={[{ label: 'Download Center' }]} />

      {/* Banner */}
      <section className="bg-[#2D060C] text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5A121E]/60 via-[#2D060C] to-[#1A0407]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#BD672A]/20 text-[#EAB592] border border-[#BD672A]/30">
            Document Repository
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Institutional Downloads & Forms
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#D4C3B3] font-sans">
            Official admission prospectuses, syllabi maps, academic calendars, fee policies, and registration forms available for immediate download.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#E6DDCF] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
            <div className="sm:col-span-6 relative">
              <Search className="w-4 h-4 text-[#A8A29E] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search publications or forms by title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
              />
            </div>

            <div className="sm:col-span-3">
              <select
                value={selectedSchool}
                onChange={(e) => setSelectedSchool(e.target.value as any)}
                className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
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
                className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
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
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E6DDCF] p-8 space-y-3">
              <FileText className="w-12 h-12 text-[#A8A29E] mx-auto" />
              <h3 className="font-cormorant text-2xl font-semibold text-[#1C1917]">No documents found</h3>
              <p className="text-xs text-[#78716C] max-w-sm mx-auto">
                No matching documents match your criteria. Try adjusting your filters or search keywords.
              </p>
            </div>
          ) : (
            filteredDownloads.map((doc) => (
              <div
                key={doc.id}
                className="p-5 rounded-2xl bg-white border border-[#E6DDCF] hover:border-[#BD672A]/50 hover:shadow-sm transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#FAF3EC] text-[#BD672A] border border-[#BD672A]/20 flex items-center justify-center shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-semibold text-[#064E3B] bg-[#ECFDF5] border border-[#064E3B]/20 px-2 py-0.5 rounded">
                        {doc.category}
                      </span>
                      <span className="text-[11px] font-medium text-[#78716C]">
                        {doc.targetSchool === 'all'
                          ? 'Rapid Schools Network'
                          : doc.targetSchool === 'dreamz'
                          ? 'Rapid Dreamz'
                          : 'Rapid Shakuntlayan'}
                      </span>
                      <span className="text-[11px] text-[#A8A29E]">
                        • {doc.fileSize}
                      </span>
                    </div>

                    <h3 className="font-cormorant text-lg sm:text-xl font-semibold text-[#1C1917]">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-[#57534E] mt-0.5 max-w-2xl leading-relaxed">
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
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#BD672A] hover:bg-[#A35520] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
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
        <div className="mt-10 p-5 rounded-2xl bg-[#FAF7F2] border border-[#E6DDCF] text-xs text-[#57534E] flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-[#064E3B] shrink-0" />
          <span>
            <strong className="text-[#1C1917]">Authenticity Assurance:</strong> All circulars, forms, and prospectuses downloaded from this portal are digitally generated and certified by the Rapid Schools Administrative Office.
          </span>
        </div>
      </div>
    </div>
  );
};
