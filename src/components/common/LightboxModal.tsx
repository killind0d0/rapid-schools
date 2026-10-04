import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../../data/types';
import { getMediaUrl } from '../../utils/mediaUrl';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  item,
  items,
  onClose,
  onNavigate
}) => {
  if (!item) return null;

  const currentIndex = items.findIndex((i) => i.id === item.id);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
      if (e.key === 'ArrowRight' && currentIndex < items.length - 1) onNavigate(currentIndex + 1);
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [currentIndex, items.length, onClose, onNavigate]);

  return (
    <div
      className="fixed inset-0 z-50 bg-[#020617]/92 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-[#F59E0B] text-white border border-white/15 transition-all z-10 cursor-pointer shadow-lg"
        aria-label="Close image modal"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev button */}
      {currentIndex > 0 && (
        <button
          onClick={() => onNavigate(currentIndex - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#F59E0B] text-white border border-white/15 transition-all cursor-pointer shadow-lg"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {currentIndex < items.length - 1 && (
        <button
          onClick={() => onNavigate(currentIndex + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-[#F59E0B] text-white border border-white/15 transition-all cursor-pointer shadow-lg"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image and Caption Card */}
      <div className="max-w-4xl max-h-[90vh] flex flex-col items-center">
        <div className="p-2 rounded-2xl bg-[#0F172A]/80 border border-[#F59E0B]/30 shadow-2xl overflow-hidden max-w-full">
          {item.videoUrl ? (
            <video
              src={getMediaUrl(item.videoUrl)}
              poster={getMediaUrl(item.imageUrl)}
              controls
              autoPlay
              playsInline
              className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain bg-black"
            />
          ) : (
            <img
              src={getMediaUrl(item.imageUrl)}
              alt={item.altText || item.title}
              className="max-h-[70vh] w-auto max-w-full rounded-xl object-contain"
            />
          )}
        </div>
        <div className="mt-4 text-center text-white max-w-xl">
          <span className="text-[11px] uppercase tracking-[0.2em] text-[#FDE68A] font-semibold block mb-1 font-mono">
            {item.category} • {item.targetSchool === 'dreamz' ? 'Rapid Dreamz' : item.targetSchool === 'shakuntlayan' ? 'Rapid Shakuntlayan' : 'Rapid Schools'}
          </span>
          <h3 className="text-xl sm:text-2xl font-medium font-editorial text-[#F8FAFC]">{item.title}</h3>
          <p className="text-xs sm:text-sm text-[#CBD5E1] mt-1 font-sans">{item.caption}</p>
        </div>
      </div>
    </div>
  );
};
