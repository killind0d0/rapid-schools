import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] pb-24">
      <Breadcrumbs items={[{ label: 'Terms of Use' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E2E8F0] shadow-sm space-y-6">
          <span className="text-[11px] font-bold uppercase tracking-wider text-[#115E59] bg-[#ECFDF5] px-3 py-1 rounded-full border border-[#99F6E4]">
            Institutional Governance
          </span>
          <h1 className="font-cormorant text-4xl sm:text-5xl font-bold text-[#020617]">
            Terms of Website Use
          </h1>
          <p className="text-xs text-[#64748B]">
            Rapid Schools Portal & Digital Communications Guidelines
          </p>

          <div className="prose text-[#475569] text-xs sm:text-sm leading-relaxed space-y-4 pt-4 border-t border-[#F1F5F9]">
            <h3 className="font-cormorant text-xl font-bold text-[#020617]">1. Acceptance of Terms</h3>
            <p>
              By accessing and browsing the official portal of Rapid Schools (including portals dedicated to Rapid Dreamz and Rapid Shakuntlayan), you agree to comply with these terms of use and all applicable laws and regulations.
            </p>

            <h3 className="font-cormorant text-xl font-bold text-[#020617]">2. Authenticity of Institutional Information</h3>
            <p>
              All circulars, notices, and fee guidelines published on this portal constitute authorized administrative notices. For disputes or discrepancies, original signed circulars held at the Principal’s office shall take precedence.
            </p>

            <h3 className="font-cormorant text-xl font-bold text-[#020617]">3. Intellectual Property</h3>
            <p>
              All emblems, crests, pedagogical frameworks, photographs, and written materials on this site are the intellectual property of Rapid Schools Educational Society and may not be reproduced without prior written consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
