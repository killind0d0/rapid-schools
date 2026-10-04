import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Breadcrumbs items={[{ label: 'Terms of Use' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
            Institutional Governance
          </span>
          <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900">
            Terms of Website Use
          </h1>
          <p className="text-xs text-slate-400">
            Rapid Schools Portal & Digital Communications Guidelines
          </p>

          <div className="prose text-slate-700 text-xs sm:text-sm leading-relaxed space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-base font-bold text-slate-900">1. Acceptance of Terms</h3>
            <p>
              By accessing and browsing the official portal of Rapid Schools (including portals dedicated to Rapid Dreamz and Rapid Shakuntlayan), you agree to comply with these terms of use and all applicable laws and regulations.
            </p>

            <h3 className="text-base font-bold text-slate-900">2. Authenticity of Institutional Information</h3>
            <p>
              All circulars, notices, and fee guidelines published on this portal constitute authorized administrative notices. For disputes or discrepancies, original signed circulars held at the Principal’s office shall take precedence.
            </p>

            <h3 className="text-base font-bold text-slate-900">3. Intellectual Property</h3>
            <p>
              All emblems, crests, pedagogical frameworks, photographs, and written materials on this site are the intellectual property of Rapid Schools Educational Society and may not be reproduced without prior written consent.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
