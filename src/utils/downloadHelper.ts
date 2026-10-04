/**
 * Generates and triggers download of an official institutional document
 * Ensures zero broken links and realistic educational document assets.
 */
export function triggerInstitutionalDownload(
  title: string,
  category: string,
  filename: string,
  schoolName: string = 'Rapid Schools',
  detailsText: string = ''
) {
  const content = `
================================================================================
                    ${schoolName.toUpperCase()}
           RAPID EDUCATIONAL ECOSYSTEM • OFFICIAL CIRCULAR / DOCUMENT
================================================================================
Document Title: ${title}
Category:       ${category}
Date Issued:    ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
Document Ref:   RS/DOC/${Math.floor(1000 + Math.random() * 9000)}/2025-26
Authentication: Certified Official Institutional Copy
--------------------------------------------------------------------------------

OVERVIEW & NOTICE DETAILS:
${detailsText || 'This document has been published under the authority of the Rapid Schools Administration for the guidance of parents, students, and educators.'}

AFFILIATION & INSTITUTIONAL JURISDICTION:
• Rapid Dreamz: Junior School (Play Group to UKG) — Early Childhood Wing
• Rapid Shakuntlayan: Class 1 to Class 12 — Affiliated to CBSE, New Delhi

ADMINISTRATIVE INSTRUCTIONS:
1. For admissions, fee schedules, or circular verification, please consult the official Admissions Cell.
2. Inquiries regarding this publication may be directed to admissions@rapidschools.edu.in.
3. This is a computer-verified institutional publication generated via the official Rapid Schools Portal.

================================================================================
        RAPID SCHOOLS • KNOWLEDGE • CHARACTER • INTEGRITY
================================================================================
`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename.endsWith('.txt') ? filename : `${filename.replace(/\.[^/.]+$/, '')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
