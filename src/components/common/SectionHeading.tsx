import React from 'react';

interface SectionHeadingProps {
  badge?: string;
  badgeColor?: 'gold' | 'amber' | 'blue' | 'teal';
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  light?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeColor = 'gold',
  title,
  subtitle,
  align = 'center',
  light = false
}) => {
  const badgeClasses = {
    gold: 'bg-amber-500/10 text-amber-700 border-amber-500/20',
    amber: 'bg-orange-500/10 text-orange-700 border-orange-500/20',
    blue: 'bg-sky-500/10 text-sky-700 border-sky-500/20',
    teal: 'bg-teal-500/10 text-teal-700 border-teal-500/20'
  }[badgeColor];

  const textAlign = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${textAlign} mb-12`}>
      {badge && (
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border mb-3 ${badgeClasses}`}
        >
          {badge}
        </span>
      )}
      <h2
        className={`font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
          light ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-16 h-1 mt-4 mb-4 rounded-full ${
          badgeColor === 'teal'
            ? 'bg-teal-500'
            : badgeColor === 'blue'
            ? 'bg-sky-600'
            : 'bg-amber-500'
        } ${align === 'center' ? 'mx-auto' : ''}`}
      />
      {subtitle && (
        <p
          className={`max-w-3xl text-base sm:text-lg leading-relaxed ${
            light ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
