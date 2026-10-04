import React, { useState } from 'react';
import { useSite } from '../context/SiteContext';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { LightboxModal } from '../components/common/LightboxModal';
import { GalleryItem } from '../data/types';
import { Maximize2, Image as ImageIcon, Play, Film, Camera } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  const { gallery } = useSite();
  const [selectedMediaType, setSelectedMediaType] = useState<'all' | 'photo' | 'video'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSchool, setSelectedSchool] = useState<'all' | 'dreamz' | 'shakuntlayan'>('all');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['Campus', 'Classrooms', 'Sports', 'Arts & Culture', 'Early Years', 'Celebrations'];

  const filteredItems = gallery.filter((item) => {
    if (selectedMediaType !== 'all') {
      const isVideo = item.mediaType === 'video' || !!item.videoUrl;
      if (selectedMediaType === 'video' && !isVideo) return false;
      if (selectedMediaType === 'photo' && isVideo) return false;
    }
    if (selectedSchool !== 'all' && item.targetSchool !== 'all' && item.targetSchool !== selectedSchool) {
      return false;
    }
    if (selectedCategory !== 'all' && item.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      <Breadcrumbs items={[{ label: 'Institutional Gallery' }]} />

      {/* Header Banner */}
      <section className="bg-[#020617] text-white py-16 sm:py-20 relative overflow-hidden">
        {/* Layered radial glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#F59E0B]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#162032]/50 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F59E0B]/30 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-[#0F172A] text-[#FDE68A] border border-[#F59E0B]/30 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(189,103,42,0.8)]" />
            Visual Life at Rapid • Verified Media
          </div>
          <h1 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-tight">
            Campus Architecture & Activity <span className="italic font-normal text-[#FDE68A]">Gallery</span>
          </h1>
          <p className="max-w-2xl mx-auto text-sm sm:text-base text-[#CBD5E1] leading-relaxed font-sans">
            A real-world glimpse into daily learning environments, sports competitions, celebrations, laboratory practicals, and student reels across Rapid Schools.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Filters Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-[0_12px_36px_-12px_rgba(44,7,12,0.06)] border border-[#E2E8F0] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            
            {/* School Filter Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSelectedSchool('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans ${
                  selectedSchool === 'all'
                    ? 'bg-[#0F172A] text-[#FDE68A] shadow-xs'
                    : 'bg-[#F8FAFC] text-[#1E293B] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                }`}
              >
                All Campuses
              </button>
              <button
                onClick={() => setSelectedSchool('dreamz')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans ${
                  selectedSchool === 'dreamz'
                    ? 'bg-[#F59E0B] text-white shadow-xs'
                    : 'bg-[#F8FAFC] text-[#1E293B] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                }`}
              >
                Rapid Dreamz
              </button>
              <button
                onClick={() => setSelectedSchool('shakuntlayan')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans ${
                  selectedSchool === 'shakuntlayan'
                    ? 'bg-[#115E59] text-white shadow-xs'
                    : 'bg-[#F8FAFC] text-[#1E293B] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                }`}
              >
                Rapid Shakuntalayan
              </button>
            </div>

            {/* Media Type Filter Pills (Photos vs Videos/Reels) */}
            <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#F1F5F9] border border-[#E2E8F0]">
              <button
                onClick={() => setSelectedMediaType('all')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer font-sans ${
                  selectedMediaType === 'all'
                    ? 'bg-white text-[#020617] shadow-xs'
                    : 'text-[#64748B] hover:text-[#020617]'
                }`}
              >
                All Media
              </button>
              <button
                onClick={() => setSelectedMediaType('video')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer font-sans flex items-center gap-1.5 ${
                  selectedMediaType === 'video'
                    ? 'bg-[#115E59] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#020617]'
                }`}
              >
                <Film className="w-3.5 h-3.5 text-[#2DD4BF]" />
                <span>Reels & Videos</span>
              </button>
              <button
                onClick={() => setSelectedMediaType('photo')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer font-sans flex items-center gap-1.5 ${
                  selectedMediaType === 'photo'
                    ? 'bg-[#F59E0B] text-white shadow-xs'
                    : 'text-[#64748B] hover:text-[#020617]'
                }`}
              >
                <Camera className="w-3.5 h-3.5 text-white" />
                <span>Photographs</span>
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans ${
                  selectedCategory === 'all'
                    ? 'bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/30'
                    : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
                }`}
              >
                All Categories
              </button>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCategory(c)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer font-sans ${
                    selectedCategory === c
                      ? 'bg-[#F59E0B]/10 text-[#F59E0B] font-semibold border border-[#F59E0B]/30'
                      : 'bg-[#F8FAFC] text-[#475569] hover:bg-[#F1F5F9] border border-[#E2E8F0]'
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
            <div className="text-center py-16 bg-white rounded-3xl border border-[#E2E8F0] p-8 space-y-3 shadow-xs">
              <ImageIcon className="w-12 h-12 text-[#F59E0B]/40 mx-auto" />
              <h3 className="font-editorial text-2xl font-medium text-[#020617]">No media found</h3>
              <p className="text-xs sm:text-sm text-[#475569] max-w-sm mx-auto font-sans">
                No items match the current combination of filters.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredItems.map((item) => {
                const isVideo = item.mediaType === 'video' || !!item.videoUrl;
                return (
                  <div
                    key={item.id}
                    onClick={() => setActiveLightboxItem(item)}
                    className="group relative rounded-3xl overflow-hidden bg-white border border-[#E2E8F0] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] hover:shadow-[0_25px_50px_-12px_rgba(189,103,42,0.15)] hover:border-[#F59E0B]/60 transition-all duration-300 cursor-pointer flex flex-col"
                  >
                    <div className="relative h-64 overflow-hidden bg-[#020617]">
                      <img
                        src={item.imageUrl}
                        alt={item.altText}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/95 via-[#020617]/35 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                      
                      {/* Play Button Overlay for Videos */}
                      {isVideo && (
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-14 h-14 rounded-full bg-[#F59E0B] text-[#020617] flex items-center justify-center shadow-[0_0_25px_rgba(245,158,11,0.6)] group-hover:scale-115 group-hover:bg-[#FBBF24] transition-all">
                            <Play className="w-6 h-6 fill-current ml-1 text-[#020617]" />
                          </div>
                        </div>
                      )}

                      {/* Top Right Badges */}
                      <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
                        {isVideo && (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#115E59]/90 text-[#99F6E4] backdrop-blur-md border border-[#2DD4BF]/50 font-mono shadow-md flex items-center gap-1">
                            <Film className="w-3 h-3 text-[#2DD4BF]" />
                            <span>Video</span>
                          </span>
                        )}
                        <div className="p-2 rounded-full bg-[#020617]/70 text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                          <Maximize2 className="w-3.5 h-3.5 text-[#FDE68A]" />
                        </div>
                      </div>

                      {/* Top Left Category Badge */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-[#020617]/90 text-[#FDE68A] backdrop-blur-md border border-[#F59E0B]/40 font-mono shadow-md">
                          {item.category}
                        </span>
                      </div>

                      {/* Bottom overlay text */}
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h4 className="font-editorial text-xl font-medium truncate text-[#F8FAFC]">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#CBD5E1] line-clamp-1 mt-0.5 font-sans">
                          {item.caption}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
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
