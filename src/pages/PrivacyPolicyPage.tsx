import React from 'react';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full">
            Institutional Governance
          </span>
          <h1 className="font-outfit text-3xl sm:text-4xl font-extrabold text-slate-900">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">
            Effective Date: Academic Session 2025–2026 • Rapid Schools Educational Society
          </p>

          <div className="prose text-slate-700 text-xs sm:text-sm leading-relaxed space-y-4 pt-4 border-t border-slate-100">
            <h3 className="text-base font-bold text-slate-900">1. Information Collection & Usage</h3>
            <p>
              Rapid Schools (comprising Rapid Dreamz and Rapid Shakuntlayan) collects necessary contact, academic, and identification information solely for admissions processing, official circular notifications, campus safety, and school-parent communications.
            </p>

            <h3 className="text-base font-bold text-slate-900">2. Student Data Protection & Privacy</h3>
            <p>
              We adhere strictly to applicable Indian child data privacy and educational data regulations. Information provided via admission enquiries or campus visit bookings is kept confidential and is accessible only to authorized admissions officers and educators.
            </p>

            <h3 className="text-base font-bold text-slate-900">3. Non-Disclosure to Third Parties</h3>
            <p>
              We do not sell, rent, or lease personal student or parent information to third-party commercial marketing entities. Data is disclosed only when required by statutory regulatory boards (such as CBSE) or law enforcement authorities.
            </p>

            <h3 className="text-base font-bold text-slate-900">4. Policy Amendments</h3>
            <p>
              The institution reserves the right to update this policy in accordance with guidelines issued by educational regulatory councils. Updated terms will be posted with revised effective dates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
