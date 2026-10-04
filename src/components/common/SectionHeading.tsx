import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: 'copper' | 'claret' | 'forest' | 'terracotta' | 'gold';
  title: string;
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
    copper: 'bg-[#BD672A]/10 text-[#A2521C] border-[#BD672A]/20',
    claret: 'bg-[#5A121E]/10 text-[#5A121E] border-[#5A121E]/20',
    forest: 'bg-[#064E3B]/10 text-[#064E3B] border-[#064E3B]/20',
    terracotta: 'bg-[#C2410C]/10 text-[#C2410C] border-[#C2410C]/20',
    gold: 'bg-[#D47A3B]/15 text-[#9E4D14] border-[#D47A3B]/30'
  }[badgeColor];

  const textAlign = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${textAlign} mb-12`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest border mb-3 ${badgeClasses}`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-outfit text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
          light ? 'text-[#FCFAF6]' : 'text-[#241A1B]'
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-16 h-1 mt-4 mb-4 rounded-full ${
          badgeColor === 'forest'
            ? 'bg-[#064E3B]'
            : badgeColor === 'claret'
            ? 'bg-[#5A121E]'
            : badgeColor === 'terracotta'
            ? 'bg-[#C2410C]'
            : 'bg-[#BD672A]'
        } ${align === 'center' ? 'mx-auto' : ''}`}
      />
      {subtitle && (
        <p
          className={`max-w-3xl text-sm sm:text-base leading-relaxed ${
            light ? 'text-[#DBCDC5]' : 'text-[#5E4D4F]'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
