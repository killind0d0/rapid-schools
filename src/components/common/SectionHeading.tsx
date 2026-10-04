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
    copper: 'bg-[#BD672A]/10 text-[#BD672A] border-[#BD672A]/25',
    claret: 'bg-[#3D0B12]/15 text-[#BD672A] border-[#3D0B12]/30',
    forest: 'bg-[#064E3B]/10 text-[#0D654E] border-[#064E3B]/20',
    terracotta: 'bg-[#BD672A]/15 text-[#A2521C] border-[#BD672A]/30',
    gold: 'bg-[#D47A3B]/15 text-[#BD672A] border-[#D47A3B]/30'
  }[badgeColor];

  const dotClasses = {
    copper: 'bg-[#BD672A] shadow-[0_0_8px_rgba(189,103,42,0.6)]',
    claret: 'bg-[#BD672A] shadow-[0_0_8px_rgba(189,103,42,0.6)]',
    forest: 'bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]',
    terracotta: 'bg-[#BD672A] shadow-[0_0_8px_rgba(189,103,42,0.6)]',
    gold: 'bg-[#D47A3B] shadow-[0_0_8px_rgba(212,122,59,0.6)]'
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
            <span className="italic font-normal text-[#BD672A] drop-shadow-xs">
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
          light ? 'text-[#FAF6F0]' : 'text-[#23070B]'
        }`}
      >
        {renderTitle(title)}
      </h2>

      {/* Luxury Hairline Metallic Divider with Center Diamond */}
      <div className={`flex items-center gap-2 my-4 ${align === 'center' ? 'mx-auto' : ''}`}>
        <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-[#BD672A]/50" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#BD672A]/80 shadow-[0_0_6px_rgba(189,103,42,0.4)]" />
        <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-[#BD672A]/50" />
      </div>

      {subtitle && (
        <p
          className={`max-w-3xl text-sm sm:text-base leading-relaxed font-sans ${
            light ? 'text-[#DBCDC5]' : 'text-[#5C4E50]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
