import React from 'react';
import { Hero } from '../components/home/Hero';
import { SchoolSelector } from '../components/home/SchoolSelector';
import { WhyRapid } from '../components/home/WhyRapid';
import { LifeAtRapid } from '../components/home/LifeAtRapid';
import { LatestUpdates } from '../components/home/LatestUpdates';
import { QuickEnquirySection } from '../components/home/QuickEnquirySection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Immersive Ecosystem Hero */}
      <Hero />

      {/* School Selector (Rapid Dreamz vs Rapid Shakuntlayan) */}
      <SchoolSelector />

      {/* Why Rapid 5 Pillars Section */}
      <WhyRapid />

      {/* Six Dimensions of Student Life */}
      <LifeAtRapid />

      {/* Bulletins, Notices & Events Preview */}
      <LatestUpdates />

      {/* Quick Admission Enquiry Interactive Form */}
      <QuickEnquirySection />
    </div>
  );
};
