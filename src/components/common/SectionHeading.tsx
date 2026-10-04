import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: 'copper' | 'claret' | 'forest' | 'terracotta' | 'gold';
  title: React.ReactNode | string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeColor = 'copper',
  title,
  subtitle,
  align = 'center',
  light = false
}) => {
  const badgeClasses = {
    copper: 'bg-[#F59E0B]/10 text-[#F59E0B] border-[#F59E0B]/25',
    claret: 'bg-[#162032]/15 text-[#F59E0B] border-[#162032]/30',
    forest: 'bg-[#115E59]/10 text-[#0F766E] border-[#115E59]/20',
    terracotta: 'bg-[#F59E0B]/15 text-[#D97706] border-[#F59E0B]/30',
    gold: 'bg-[#FBBF24]/15 text-[#F59E0B] border-[#FBBF24]/30'
  }[badgeColor];

  const dotClasses = {
    copper: 'bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.6)]',
    claret: 'bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.6)]',
    forest: 'bg-[#14B8A6] shadow-[0_0_8px_rgba(20,184,166,0.5)]',
    terracotta: 'bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.6)]',
    gold: 'bg-[#FBBF24] shadow-[0_0_8px_rgba(251,191,36,0.6)]'
  }[badgeColor];

  const textAlign = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  const renderTitle = (titleNode: React.ReactNode) => {
    if (typeof titleNode !== 'string') return titleNode;

    const emotionalWords = [
      'Philosophy',
      'Dimensions',
      'Dispatches',
      'Stories',
      'Celebrations',
      'Gallery',
      'Heritage',
      'Ecosystem',
      'Vision',
      'Excellence',
      'Curiosity',
      'Character',
      'Scholarship',
      'Community',
      'Journey',
      'School',
      'Schools'
    ];

    const words = titleNode.split(' ');
    return words.map((word, idx) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, '');
      const isEmotional = emotionalWords.includes(cleanWord);
      return (
        <React.Fragment key={idx}>
          {idx > 0 && ' '}
          {isEmotional ? (
            <span className="italic font-normal text-[#F59E0B] drop-shadow-xs">
              {word}
            </span>
          ) : (
            word
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <div className={`flex flex-col ${textAlign} mb-12 sm:mb-14`}>
      {badge && (
        <div className="mb-3.5 inline-flex items-center">
          <span
            className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] border shadow-xs ${badgeClasses}`}
          >
            <span className={`w-1.5 h-1.5 rounded-full ${dotClasses}`} />
            {badge}
          </span>
        </div>
      )}

      <h2
        className={`font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight leading-[1.15] ${
          light ? 'text-[#F8FAFC]' : 'text-[#020617]'
        }`}
      >
        {renderTitle(title)}
      </h2>

      {/* Luxury Hairline Metallic Divider with Center Diamond */}
      <div className={`flex items-center gap-2 my-4 ${align === 'center' ? 'mx-auto' : ''}`}>
        <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#F59E0B]/50" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#F59E0B]/80 shadow-[0_0_6px_rgba(245,158,11,0.4)]" />
        <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#F59E0B]/50" />
      </div>

      {subtitle && (
        <p
          className={`max-w-3xl text-sm sm:text-base leading-relaxed font-sans ${
            light ? 'text-[#CBD5E1]' : 'text-[#334155]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
