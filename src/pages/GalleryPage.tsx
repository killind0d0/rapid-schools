import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SectionHeading } from '../components/common/SectionHeading';
import { LightboxModal } from '../components/common/LightboxModal';
import { GalleryItem } from '../data/types';
import { Maximize2, Sparkles, Image as ImageIcon } from 'lucide-react';

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
    <div className="min-h-screen bg-[#FCFAF6] pb-24">
      <Breadcrumbs items={[{ label: 'Institutional Gallery' }]} />

      {/* Banner */}
      <section className="bg-[#2D060C] text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#5A121E]/60 via-[#2D060C] to-[#1A0407]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#BD672A]/20 text-[#EAB592] border border-[#BD672A]/30">
            Visual Life at Rapid
          </span>
          <h1 className="font-cormorant text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white">
            Campus Architecture & Activity Gallery
          </h1>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-[#D4C3B3] font-sans">
            A glimpse into the daily learning environments, laboratory investigations, creative studios, and playgrounds across Rapid Schools.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Filters Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm border border-[#E6DDCF] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* School Filter Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setSelectedSchool('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedSchool === 'all'
                    ? 'bg-[#3D0B12] text-[#EAB592]'
                    : 'bg-[#FAF7F2] text-[#57534E] hover:bg-[#E6DDCF]'
                }`}
              >
                All Campuses
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

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-[#FAF3EC] text-[#BD672A] font-semibold border border-[#BD672A]/30'
                    : 'bg-[#FAF7F2] text-[#78716C] hover:bg-[#E6DDCF] border border-[#E6DDCF]'
                }`}
              >
                All Spaces
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedCategory === c
                      ? 'bg-[#FAF3EC] text-[#BD672A] font-semibold border border-[#BD672A]/30'
                      : 'bg-[#FAF7F2] text-[#78716C] hover:bg-[#E6DDCF] border border-[#E6DDCF]'
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
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E6DDCF] p-8 space-y-3">
              <ImageIcon className="w-12 h-12 text-[#A8A29E] mx-auto" />
              <h3 className="font-cormorant text-2xl font-semibold text-[#1C1917]">No media found</h3>
              <p className="text-xs text-[#78716C] max-w-sm mx-auto">
                No photographs match the current combination of filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveLightboxItem(item)}
                  className="group relative rounded-2xl overflow-hidden bg-white border border-[#E6DDCF] shadow-sm hover:shadow-md hover:border-[#BD672A]/50 transition-all duration-300 cursor-pointer flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden bg-[#FAF7F2]">
                    <img
                      src={item.imageUrl}
                      alt={item.altText}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A0407]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                    
                    {/* Maximize Icon */}
                    <div className="absolute top-3 right-3 p-2 rounded-full bg-[#1A0407]/60 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-4 h-4 text-[#EAB592]" />
                    </div>

                    {/* Badge */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-widest uppercase bg-[#2D060C]/85 text-[#EAB592] backdrop-blur-md border border-[#BD672A]/30">
                        {item.category}
                      </span>
                    </div>

                    {/* Bottom overlay text */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="font-cormorant text-lg font-semibold truncate text-[#FCFAF6]">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-[#D4C3B3] line-clamp-1 mt-0.5">
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
