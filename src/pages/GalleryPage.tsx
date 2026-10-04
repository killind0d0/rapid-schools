import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LightboxModal } from '../components/common/LightboxModal';
import { GalleryItem } from '../data/types';
import { Maximize2, Image as ImageIcon } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { gallery } = useSite();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSchool, setSelectedSchool] = useState<'all' | 'dreamz' | 'shakuntlayan'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['Campus', 'Classrooms', 'Sports', 'Arts & Culture', 'Early Years', 'Celebrations'];

  const filteredItems = gallery.filter((item) => {
    if (selectedSchool !== 'all' && item.targetSchool !== 'all' && item.targetSchool !== selectedSchool) {
      return false;
    }
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#FAF6F0] pb-24">
      <Breadcrumbs items={[{ label: 'Institutional Gallery' }]} />

      {/* Header Banner */}
      <section className="bg-[#1C0306] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Layered radial glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#BD672A]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#3D0B12]/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BD672A]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#2C070C] text-[#F3C292] border border-[#BD672A]/30 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BD672A] shadow-[0_0_8px_rgba(189,103,42,0.8)]" />
            Visual Life at Rapid
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Campus Architecture & Activity <span className="italic font-normal text-[#F3C292]">Gallery</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#D4C3B3] leading-relaxed font-sans">
            A glimpse into the daily learning environments, laboratory investigations, creative studios, and playgrounds across Rapid Schools.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Filters Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_12px_36px_-12px_rgba(44,7,12,0.06)] border border-[#E8DFD1] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* School Filter Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedSchool('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans ${
                  selectedSchool === 'all'
                    ? 'bg-[#2C070C] text-[#F3C292] shadow-xs'
                    : 'bg-[#FCFAF6] text-[#423738] hover:bg-[#F2EAE0] border border-[#E8DFD1]'
                }`}
              >
                All Campuses
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

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans ${
                  selectedCategory === 'all'
                    ? 'bg-[#BD672A]/10 text-[#BD672A] border border-[#BD672A]/30'
                    : 'bg-[#FCFAF6] text-[#6E5D5F] hover:bg-[#F2EAE0] border border-[#E8DFD1]'
                }`}
              >
                All Spaces
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer font-sans ${
                    selectedCategory === c
                      ? 'bg-[#BD672A]/10 text-[#BD672A] font-semibold border border-[#BD672A]/30'
                      : 'bg-[#FCFAF6] text-[#6E5D5F] hover:bg-[#F2EAE0] border border-[#E8DFD1]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Gallery Grid */}
        <div className="pt-8">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E8DFD1] p-8 space-y-3 shadow-xs">
              <ImageIcon className="w-12 h-12 text-[#BD672A]/40 mx-auto" />
              <h3 className="font-editorial text-2xl font-medium text-[#23070B]">No media found</h3>
              <p className="text-xs sm:text-sm text-[#6E5D5F] max-w-sm mx-auto font-sans">
                No photographs match the current combination of filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group relative rounded-3xl overflow-hidden bg-white border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(189,103,42,0.15)] hover:border-[#BD672A]/60 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden bg-[#FCFAF6]">
                    <img
                      src={item.imageUrl}
                      alt={item.altText}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C0306]/95 via-[#1C0306]/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                    
                    {/* Maximize Icon */}
                    <div className="absolute top-3.5 right-3.5 p-2 rounded-full bg-[#1C0306]/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                      <Maximize2 className="w-4 h-4 text-[#F3C292]" />
                    </div>

                    {/* Badge */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#1C0306]/90 text-[#F3C292] backdrop-blur-md border border-[#BD672A]/40 font-mono shadow-md">
                        {item.category}
                      </span>
                    </div>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h4 className="font-editorial text-xl font-medium truncate text-[#FAF6F0]">
                        {item.title}
                      </h4>
                      <p className="text-xs text-[#D8C7B8] line-clamp-1 mt-0.5 font-sans">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigate={(newIndex) => setActiveLightboxItem(filteredItems[newIndex])}
      />
    </div>
  );
};
