import React, { useState } from 'react';
import { useSite } from '../../context/SiteContext';
import { Breadcrumbs } from '../../components/common/Breadcrumbs';
import {
  Users,
  Calendar,
  Bell,
  FileText,
  Settings,
  Plus,
  Trash2,
  CheckCircle,
  Pin,
  RefreshCw,
  Search,
  ExternalLink,
  Shield,
  Download,
  AlertCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { EnquiryStatus, VisitStatus } from '../../data/types';

export const AdminDashboardPage: React.FC = () => {
  const {
    settings,
    updateSettings,
    enquiries,
    updateEnquiryStatus,
    visits,
    updateVisitStatus,
    notices,
    addNotice,
    deleteNotice,
    updateNotice,
    events,
    addEvent,
    deleteEvent,
    updateEvent,
    news,
    addNews,
    deleteNews,
    downloads,
    addDownload,
    deleteDownload,
    resetAllToDefault
  } = useSite();

  const [activeTab, setActiveTab] = useState<'enquiries' | 'visits' | 'notices' | 'events' | 'news' | 'downloads' | 'settings'>('enquiries');

  // Search & Filter state for enquiries
  const [enquiryFilter, setEnquiryFilter] = useState<'all' | 'dreamz' | 'shakuntlayan'>('all');
  const [enquirySearch, setEnquirySearch] = useState('');

  // Notice Form State
  const [showNoticeModal, setShowNoticeModal] = useState(false);
  const [newNoticeTitle, setNewNoticeTitle] = useState('');
  const [newNoticeCategory, setNewNoticeCategory] = useState<'Academic' | 'Admission' | 'Circular' | 'General' | 'Examination' | 'Holiday'>('Circular');
  const [newNoticeDesc, setNewNoticeDesc] = useState('');
  const [newNoticeSchool, setNewNoticeSchool] = useState<'all' | 'dreamz' | 'shakuntlayan'>('all');
  const [newNoticePin, setNewNoticePin] = useState(false);
  const [newNoticeAttachment, setNewNoticeAttachment] = useState('');

  // Settings local state
  const [settingsForm, setSettingsForm] = useState(settings);
  const [settingsSaved, setSettingsSaved] = useState(false);

  const filteredEnquiries = enquiries.filter((e) => {
    if (enquiryFilter !== 'all' && e.preferredSchool !== enquiryFilter) return false;
    if (enquirySearch.trim()) {
      const q = enquirySearch.toLowerCase();
      return (
        e.parentName.toLowerCase().includes(q) ||
        e.studentName.toLowerCase().includes(q) ||
        e.phone.toLowerCase().includes(q) ||
        e.email.toLowerCase().includes(q) ||
        e.preferredClass.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const handleCreateNotice = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNoticeTitle.trim() || !newNoticeDesc.trim()) return;

    addNotice({
      title: newNoticeTitle,
      category: newNoticeCategory,
      description: newNoticeDesc,
      targetSchool: newNoticeSchool,
      isPinned: newNoticePin,
      attachmentName: newNoticeAttachment || undefined,
      date: new Date().toISOString().split('T')[0],
      isPublished: true
    });

    setShowNoticeModal(false);
    setNewNoticeTitle('');
    setNewNoticeDesc('');
    setNewNoticeAttachment('');
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    updateSettings(settingsForm);
    setSettingsSaved(true);
    setTimeout(() => setSettingsSaved(false), 3000);
  };

  const exportEnquiriesCsv = () => {
    const headers = ['Enquiry ID', 'Date', 'Parent Name', 'Student Name', 'Phone', 'Email', 'School', 'Class', 'Status', 'Message'];
    const rows = enquiries.map((e) => [
      e.id,
      `"${e.submittedAt}"`,
      `"${e.parentName}"`,
      `"${e.studentName}"`,
      `"${e.phone}"`,
      `"${e.email}"`,
      e.preferredSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan',
      `"${e.preferredClass}"`,
      e.status,
      `"${(e.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Rapid_Schools_Enquiries_${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#FCFAF6] pb-24 text-[#1C1917]">
      <Breadcrumbs items={[{ label: 'Administrative Console' }]} />

      {/* Admin Top Banner */}
      <section className="bg-[#2D060C] text-white py-8 border-b border-[#3D0B12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider bg-[#BD672A] text-white">
                Staff & Admin Portal
              </span>
              <span className="text-xs text-[#D4C3B3]">Authenticated Operational Environment</span>
            </div>
            <h1 className="font-cormorant text-2xl sm:text-3xl font-semibold text-white">
              Rapid Schools Administrative CMS
            </h1>
            <p className="text-xs text-[#D4C3B3] font-sans">
              Manage admission enquiries, schedule tours, publish notices, and calibrate institutional settings.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => {
                if (confirm('Reset all CMS content, notices, and test enquiries back to original default state?')) {
                  resetAllToDefault();
                  setSettingsForm(settings);
                }
              }}
              className="px-3.5 py-2 rounded-xl bg-[#3D0B12] hover:bg-[#5A121E] text-[#D4C3B3] text-xs font-semibold border border-[#BD672A]/30 transition-colors flex items-center gap-1.5"
              title="Reset state to initial defaults"
            >
              <RefreshCw className="w-3.5 h-3.5 text-[#EAB592]" />
              <span>Reset to Defaults</span>
            </button>
            <Link
              to="/"
              className="px-4 py-2 rounded-xl bg-[#BD672A] hover:bg-[#A35520] text-white text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>View Public Portal</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 relative z-20">
        <div className="bg-white rounded-2xl shadow-sm border border-[#E6DDCF] p-2 flex flex-wrap gap-1">
          {[
            { id: 'enquiries', label: `Admissions (${enquiries.length})`, icon: Users },
            { id: 'visits', label: `Campus Visits (${visits.length})`, icon: Calendar },
            { id: 'notices', label: `Notice Board (${notices.length})`, icon: Bell },
            { id: 'events', label: `Events (${events.length})`, icon: Calendar },
            { id: 'news', label: `Stories (${news.length})`, icon: FileText },
            { id: 'downloads', label: `Downloads (${downloads.length})`, icon: Download },
            { id: 'settings', label: 'Global Settings', icon: Settings }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#3D0B12] text-[#EAB592] shadow-sm'
                    : 'text-[#78716C] hover:text-[#1C1917] hover:bg-[#FAF7F2]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#EAB592]' : 'text-[#A8A29E]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Workspace Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        
        {/* ENQUIRIES TAB */}
        {activeTab === 'enquiries' && (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl border border-[#E6DDCF] shadow-sm flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-[#A8A29E] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search candidate, phone, email..."
                    value={enquirySearch}
                    onChange={(e) => setEnquirySearch(e.target.value)}
                    className="pl-8 pr-3 py-1.5 rounded-xl border border-[#E6DDCF] text-xs focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A] w-64 text-[#1C1917]"
                  />
                </div>

                <select
                  value={enquiryFilter}
                  onChange={(e) => setEnquiryFilter(e.target.value as any)}
                  className="px-3 py-1.5 rounded-xl border border-[#E6DDCF] text-xs bg-white text-[#1C1917] focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A]"
                >
                  <option value="all">All School Wings</option>
                  <option value="dreamz">Rapid Dreamz Only</option>
                  <option value="shakuntlayan">Rapid Shakuntlayan Only</option>
                </select>
              </div>

              <button
                onClick={exportEnquiriesCsv}
                className="px-3.5 py-1.5 rounded-xl bg-[#FAF7F2] hover:bg-[#E6DDCF] text-[#3D0B12] text-xs font-bold transition-colors flex items-center gap-1.5 border border-[#E6DDCF]"
              >
                <Download className="w-3.5 h-3.5 text-[#BD672A]" />
                <span>Export CSV</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-[#E6DDCF] shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-[#57534E]">
                  <thead className="bg-[#FAF7F2] text-[11px] font-bold text-[#78716C] uppercase tracking-wider border-b border-[#E6DDCF]">
                    <tr>
                      <th className="py-3 px-4">Ref ID</th>
                      <th className="py-3 px-4">Candidate & Parent</th>
                      <th className="py-3 px-4">School & Target Class</th>
                      <th className="py-3 px-4">Contact Details</th>
                      <th className="py-3 px-4">Timestamp</th>
                      <th className="py-3 px-4">Status Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F5EFE6]">
                    {filteredEnquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-[#A8A29E]">
                          No admission enquiries match the current filters.
                        </td>
                      </tr>
                    ) : (
                      filteredEnquiries.map((enq) => (
                        <tr key={enq.id} className="hover:bg-[#FAF7F2]/80 transition-colors">
                          <td className="py-3.5 px-4 font-mono font-bold text-[#1C1917]">
                            {enq.id}
                          </td>
                          <td className="py-3.5 px-4">
                            <strong className="text-[#1C1917] block font-semibold">{enq.studentName}</strong>
                            <span className="text-[11px] text-[#78716C]">Parent: {enq.parentName}</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-0.5 ${
                              enq.preferredSchool === 'dreamz'
                                ? 'bg-[#FFEDD5] text-[#C2410C]'
                                : 'bg-[#ECFDF5] text-[#064E3B]'
                            }`}>
                              {enq.preferredSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}
                            </span>
                            <div className="font-semibold text-[#1C1917]">{enq.preferredClass}</div>
                          </td>
                          <td className="py-3.5 px-4 text-[11px]">
                            <div><a href={`tel:${enq.phone}`} className="font-semibold text-[#1C1917] hover:text-[#BD672A]">{enq.phone}</a></div>
                            <div className="text-[#78716C]">{enq.email}</div>
                          </td>
                          <td className="py-3.5 px-4 text-[#78716C] text-[11px]">
                            {enq.submittedAt}
                          </td>
                          <td className="py-3.5 px-4">
                            <select
                              value={enq.status}
                              onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as EnquiryStatus)}
                              className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors ${
                                enq.status === 'new'
                                  ? 'bg-[#FFEDD5] text-[#C2410C] border-[#FDBA74]'
                                  : enq.status === 'contacted'
                                  ? 'bg-[#ECFDF5] text-[#064E3B] border-[#A7F3D0]'
                                  : enq.status === 'verified'
                                  ? 'bg-[#FAF7F2] text-[#3D0B12] border-[#E6DDCF]'
                                  : 'bg-emerald-50 text-emerald-800 border-emerald-300'
                              }`}
                            >
                              <option value="new">New Enquiry</option>
                              <option value="contacted">Contacted</option>
                              <option value="verified">Verified Documents</option>
                              <option value="enrolled">Enrolled</option>
                            </select>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* VISITS TAB */}
        {activeTab === 'visits' && (
          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-200 flex items-center justify-between">
              <h3 className="font-outfit text-base font-bold text-slate-900">
                Scheduled Campus Visits ({visits.length})
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-600">
                <thead className="bg-slate-50 text-[11px] font-bold text-slate-500 uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Booking ID</th>
                    <th className="py-3 px-4">Parent / Visitor</th>
                    <th className="py-3 px-4">Target Campus & Class</th>
                    <th className="py-3 px-4">Requested Date & Slot</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {visits.map((v) => (
                    <tr key={v.id} className="hover:bg-slate-50">
                      <td className="py-3.5 px-4 font-mono font-bold text-slate-900">
                        {v.id}
                      </td>
                      <td className="py-3.5 px-4">
                        <strong className="text-slate-900 block font-semibold">{v.parentName}</strong>
                        <span className="text-[11px] text-slate-500">{v.phone} • {v.email}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="font-semibold text-slate-900 block">
                          {v.preferredSchool === 'both' ? 'Both Campuses' : v.preferredSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}
                        </span>
                        <span className="text-[11px] text-slate-500">Class: {v.studentClass}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <strong className="text-slate-900 block">{v.preferredDate}</strong>
                        <span className="text-[11px] text-slate-500">{v.preferredTime}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <select
                          value={v.status}
                          onChange={(e) => updateVisitStatus(v.id, e.target.value as VisitStatus)}
                          className="px-2.5 py-1 rounded-lg text-xs font-bold border border-slate-200 bg-white"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* NOTICES TAB */}
        {activeTab === 'notices' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-cormorant text-2xl font-bold text-[#1C1917]">
                Notice Board Publisher
              </h3>
              <button
                onClick={() => setShowNoticeModal(true)}
                className="px-4 py-2 rounded-xl bg-[#BD672A] hover:bg-[#A35520] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Publish New Circular</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-[#E6DDCF] shadow-sm overflow-hidden">
              <div className="divide-y divide-[#F5EFE6]">
                {notices.map((n) => (
                  <div key={n.id} className="p-4 sm:p-5 flex items-start justify-between gap-4 hover:bg-[#FAF7F2]">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {n.isPinned && (
                          <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#BD672A] text-white uppercase">
                            Pinned
                          </span>
                        )}
                        <span className="text-xs font-bold text-[#064E3B] bg-[#ECFDF5] px-2 py-0.5 rounded">
                          {n.category}
                        </span>
                        <span className="text-xs text-[#78716C]">
                          {n.targetSchool === 'all' ? 'All Schools' : n.targetSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}
                        </span>
                        <span className="text-xs text-[#78716C]">• Date: {n.date}</span>
                      </div>
                      <h4 className="font-cormorant text-lg font-bold text-[#1C1917]">
                        {n.title}
                      </h4>
                      <p className="text-xs text-[#57534E] line-clamp-2 max-w-3xl">
                        {n.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => updateNotice(n.id, { isPinned: !n.isPinned })}
                        className={`p-2 rounded-lg border text-xs cursor-pointer ${n.isPinned ? 'bg-[#FFEDD5] text-[#C2410C] border-[#FDBA74]' : 'bg-[#FAF7F2] text-[#78716C] border-[#E6DDCF]'}`}
                        title="Toggle Pin"
                      >
                        <Pin className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete circular "${n.title}"?`)) deleteNotice(n.id);
                        }}
                        className="p-2 rounded-lg border border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100 cursor-pointer"
                        title="Delete notice"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Create Notice Modal */}
            {showNoticeModal && (
              <div className="fixed inset-0 z-50 bg-[#1C1917]/70 backdrop-blur-sm flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-4 border border-[#E6DDCF]">
                  <h3 className="font-cormorant text-2xl font-bold text-[#1C1917]">
                    Publish Official Notice
                  </h3>

                  <form onSubmit={handleCreateNotice} className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1">
                        Notice Title *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Revision of School Timings"
                        value={newNoticeTitle}
                        onChange={(e) => setNewNoticeTitle(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A] text-[#1C1917]"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1">
                          Category *
                        </label>
                        <select
                          value={newNoticeCategory}
                          onChange={(e) => setNewNoticeCategory(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs bg-white text-[#1C1917]"
                        >
                          <option value="Admission">Admission</option>
                          <option value="Academic">Academic</option>
                          <option value="Circular">Circular</option>
                          <option value="Examination">Examination</option>
                          <option value="General">General</option>
                          <option value="Holiday">Holiday</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1">
                          School Wing *
                        </label>
                        <select
                          value={newNoticeSchool}
                          onChange={(e) => setNewNoticeSchool(e.target.value as any)}
                          className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs bg-white text-[#1C1917]"
                        >
                          <option value="all">All Schools (Unified)</option>
                          <option value="dreamz">Rapid Dreamz</option>
                          <option value="shakuntlayan">Rapid Shakuntlayan</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1">
                        Attachment Filename (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Schedule_March_2025.pdf"
                        value={newNoticeAttachment}
                        onChange={(e) => setNewNoticeAttachment(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A] text-[#1C1917]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1">
                        Full Notice Description *
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Provide circular text and guidance for parents..."
                        value={newNoticeDesc}
                        onChange={(e) => setNewNoticeDesc(e.target.value)}
                        className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A] text-[#1C1917]"
                        required
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="pinCheck"
                        checked={newNoticePin}
                        onChange={(e) => setNewNoticePin(e.target.checked)}
                        className="w-4 h-4 rounded text-[#BD672A] focus:ring-[#BD672A]"
                      />
                      <label htmlFor="pinCheck" className="text-xs font-semibold text-[#44403C]">
                        Pin notice to top of public Notice Board & announcement ticker
                      </label>
                    </div>

                    <div className="pt-4 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setShowNoticeModal(false)}
                        className="px-4 py-2 rounded-xl bg-[#FAF7F2] text-[#44403C] text-xs font-bold uppercase tracking-wider hover:bg-[#E6DDCF] cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-xl bg-[#BD672A] hover:bg-[#A35520] text-white text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm"
                      >
                        Publish Notice
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* EVENTS TAB */}
        {activeTab === 'events' && (
          <div className="space-y-4">
            <h3 className="font-cormorant text-2xl font-bold text-[#1C1917]">
              Institutional Events Manager ({events.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {events.map((evt) => (
                <div key={evt.id} className="p-5 rounded-2xl bg-white border border-[#E6DDCF] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-bold text-[#064E3B] bg-[#ECFDF5] px-2 py-0.5 rounded">
                        {evt.category}
                      </span>
                      <span className="text-[#78716C]">{evt.startDate}</span>
                    </div>
                    <h4 className="font-cormorant text-lg font-bold text-[#1C1917]">{evt.title}</h4>
                    <p className="text-xs text-[#57534E] mt-1 line-clamp-2">{evt.summary}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#F5EFE6] flex items-center justify-between">
                    <span className="text-[11px] text-[#A8A29E]">{evt.location}</span>
                    <button
                      onClick={() => {
                        if (confirm(`Remove event "${evt.title}"?`)) deleteEvent(evt.id);
                      }}
                      className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NEWS TAB */}
        {activeTab === 'news' && (
          <div className="space-y-4">
            <h3 className="font-cormorant text-2xl font-bold text-[#1C1917]">
              Classroom Stories & Articles ({news.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {news.map((item) => (
                <div key={item.id} className="p-5 rounded-2xl bg-white border border-[#E6DDCF] shadow-sm flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold text-[#064E3B] bg-[#ECFDF5] px-2 py-0.5 rounded">
                      {item.category}
                    </span>
                    <h4 className="font-cormorant text-lg font-bold text-[#1C1917] mt-2">{item.title}</h4>
                    <p className="text-xs text-[#57534E] mt-1 line-clamp-2">{item.summary}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#F5EFE6] flex items-center justify-between">
                    <span className="text-[11px] text-[#A8A29E]">By {item.author}</span>
                    <button
                      onClick={() => {
                        if (confirm(`Delete article "${item.title}"?`)) deleteNews(item.id);
                      }}
                      className="p-1.5 rounded-lg text-rose-600 hover:bg-rose-50 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* DOWNLOADS TAB */}
        {activeTab === 'downloads' && (
          <div className="space-y-4">
            <h3 className="font-cormorant text-2xl font-bold text-[#1C1917]">
              Download Repository Documents ({downloads.length})
            </h3>
            <div className="bg-white rounded-3xl border border-[#E6DDCF] shadow-sm divide-y divide-[#F5EFE6]">
              {downloads.map((doc) => (
                <div key={doc.id} className="p-4 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[11px] font-bold text-[#064E3B] bg-[#ECFDF5] px-2 py-0.5 rounded">
                        {doc.category}
                      </span>
                      <span className="text-xs text-[#78716C]">{doc.fileSize} • {doc.fileType}</span>
                    </div>
                    <h4 className="text-sm font-bold text-[#1C1917]">{doc.title}</h4>
                    <p className="text-xs text-[#57534E]">{doc.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      if (confirm(`Delete document "${doc.title}"?`)) deleteDownload(doc.id);
                    }}
                    className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg shrink-0 cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SETTINGS TAB */}
        {activeTab === 'settings' && (
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#E6DDCF] shadow-sm max-w-3xl">
            <div className="border-b border-[#F5EFE6] pb-3 mb-6">
              <h3 className="font-cormorant text-2xl font-bold text-[#1C1917]">
                Institutional & Contact Settings
              </h3>
              <p className="text-xs text-[#78716C]">
                Calibrate verified school contact details, affiliation codes, and academic years.
              </p>
            </div>

            {settingsSaved && (
              <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Institutional settings successfully updated and persisted!</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1">
                    Admissions Helpline Phone
                  </label>
                  <input
                    type="text"
                    value={settingsForm.phone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A] text-[#1C1917]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1">
                    Admissions Email Address
                  </label>
                  <input
                    type="email"
                    value={settingsForm.email}
                    onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A] text-[#1C1917]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1">
                    Official WhatsApp Number (with country code)
                  </label>
                  <input
                    type="text"
                    value={settingsForm.whatsapp}
                    onChange={(e) => setSettingsForm({ ...settingsForm, whatsapp: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A] text-[#1C1917]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1">
                    Active Academic Session
                  </label>
                  <input
                    type="text"
                    value={settingsForm.academicYear}
                    onChange={(e) => setSettingsForm({ ...settingsForm, academicYear: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A] text-[#1C1917]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1">
                  Campus Address
                </label>
                <input
                  type="text"
                  value={settingsForm.address}
                  onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A] text-[#1C1917]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1">
                    CBSE Affiliation Disclosure Text
                  </label>
                  <input
                    type="text"
                    value={settingsForm.cbseAffiliationNumber}
                    onChange={(e) => setSettingsForm({ ...settingsForm, cbseAffiliationNumber: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A] text-[#1C1917]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#44403C] uppercase tracking-wider mb-1">
                    Emergency Helpline
                  </label>
                  <input
                    type="text"
                    value={settingsForm.emergencyHelpline}
                    onChange={(e) => setSettingsForm({ ...settingsForm, emergencyHelpline: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-[#E6DDCF] text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#BD672A]/30 focus:border-[#BD672A] text-[#1C1917]"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#BD672A] hover:bg-[#A35520] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
                >
                  Save Settings
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
