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
  Download
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
    deleteEvent,
    news,
    deleteNews,
    downloads,
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
    <div className="min-h-screen bg-[#FAF6F0] pb-24 text-[#23070B]">
      <Breadcrumbs items={[{ label: 'Administrative Console' }]} />

      {/* Admin Top Banner */}
      <section className="bg-[#1C0306] text-white py-10 sm:py-12 border-b border-[#3D0B12] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-[#BD672A]/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BD672A]/30 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-5 relative z-10">
          <div>
            <div className="flex items-center gap-2 mb-1.5 font-mono">
              <span className="px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#BD672A] text-white shadow-xs">
                Staff & Admin Console
              </span>
              <span className="text-xs text-[#D8C7B8]">Authenticated Operations Portal</span>
            </div>
            <h1 className="font-editorial text-3xl sm:text-4xl font-medium text-white tracking-tight">
              Rapid Schools Administrative CMS
            </h1>
            <p className="text-xs sm:text-sm text-[#D8C7B8] font-sans mt-0.5">
              Manage admission enquiries, schedule tours, publish notices, and calibrate institutional configuration.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                if (confirm('Reset all CMS content, notices, and test enquiries back to original default state?')) {
                  resetAllToDefault();
                  setSettingsForm(settings);
                }
              }}
              className="luxury-btn-outline px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer"
              title="Reset state to initial defaults"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>
            <Link
              to="/"
              className="luxury-btn-primary px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 shadow-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Public Portal</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-5 relative z-20">
        <div className="bg-white rounded-2xl shadow-[0_12px_36px_-12px_rgba(44,7,12,0.06)] border border-[#E8DFD1] p-2 flex flex-wrap gap-1.5">
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
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer font-sans ${
                  isActive
                    ? 'bg-[#2C070C] text-[#F3C292] shadow-sm border border-[#BD672A]/40'
                    : 'text-[#6E5D5F] hover:text-[#23070B] hover:bg-[#FCFAF6]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F3C292]' : 'text-[#A8988C]'}`} />
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
            <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[#E8DFD1] shadow-xs flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-[#A8988C] absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search candidate, phone, email..."
                    value={enquirySearch}
                    onChange={(e) => setEnquirySearch(e.target.value)}
                    className="pl-8 pr-3 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 w-64 font-sans transition-all"
                  />
                </div>

                <select
                  value={enquiryFilter}
                  onChange={(e) => setEnquiryFilter(e.target.value as any)}
                  className="px-3 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 font-sans transition-all"
                >
                  <option value="all">All School Wings</option>
                  <option value="dreamz">Rapid Dreamz Only</option>
                  <option value="shakuntlayan">Rapid Shakuntlayan Only</option>
                </select>
              </div>

              <button
                onClick={exportEnquiriesCsv}
                className="luxury-btn-outline px-4 py-2 rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer font-sans"
              >
                <Download className="w-3.5 h-3.5 text-[#BD672A]" />
                <span>Export Registry CSV</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-[#5C4E50]">
                  <thead className="bg-[#FCFAF6] text-[10px] font-bold text-[#6E5D5F] uppercase tracking-wider border-b border-[#E8DFD1] font-mono">
                    <tr>
                      <th className="py-3 px-4">Ref Code</th>
                      <th className="py-3 px-4">Candidate & Parent</th>
                      <th className="py-3 px-4">School & Target Class</th>
                      <th className="py-3 px-4">Contact Details</th>
                      <th className="py-3 px-4">Timestamp</th>
                      <th className="py-3 px-4">Status Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F6F1E7]">
                    {filteredEnquiries.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-[#A8988C] font-sans">
                          No admission enquiries match the current filters.
                        </td>
                      </tr>
                    ) : (
                      filteredEnquiries.map((enq) => (
                        <tr key={enq.id} className="hover:bg-[#FCFAF6] transition-colors">
                          <td className="py-3.5 px-4 font-mono font-bold text-[#23070B]">
                            {enq.id}
                          </td>
                          <td className="py-3.5 px-4 font-sans">
                            <strong className="text-[#23070B] block font-semibold">{enq.studentName}</strong>
                            <span className="text-[11px] text-[#6E5D5F]">Parent: {enq.parentName}</span>
                          </td>
                          <td className="py-3.5 px-4 font-sans">
                            <span className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1 font-mono ${
                              enq.preferredSchool === 'dreamz'
                                ? 'bg-[#BD672A]/10 text-[#BD672A] border border-[#BD672A]/25'
                                : 'bg-[#064E3B]/10 text-[#064E3B] border border-[#064E3B]/20'
                            }`}>
                              {enq.preferredSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}
                            </span>
                            <div className="font-semibold text-[#23070B]">{enq.preferredClass}</div>
                          </td>
                          <td className="py-3.5 px-4 text-[11px] font-sans">
                            <div><a href={`tel:${enq.phone}`} className="font-semibold text-[#23070B] hover:text-[#BD672A]">{enq.phone}</a></div>
                            <div className="text-[#6E5D5F]">{enq.email}</div>
                          </td>
                          <td className="py-3.5 px-4 text-[#6E5D5F] text-[11px] font-mono">
                            {enq.submittedAt}
                          </td>
                          <td className="py-3.5 px-4">
                            <select
                              value={enq.status}
                              onChange={(e) => updateEnquiryStatus(enq.id, e.target.value as EnquiryStatus)}
                              className={`px-3 py-1 rounded-xl text-xs font-bold border transition-colors cursor-pointer font-sans ${
                                enq.status === 'new'
                                  ? 'bg-[#BD672A]/10 text-[#BD672A] border-[#BD672A]/30'
                                  : enq.status === 'contacted'
                                  ? 'bg-[#064E3B]/10 text-[#064E3B] border-[#064E3B]/30'
                                  : enq.status === 'verified'
                                  ? 'bg-[#2C070C]/10 text-[#2C070C] border-[#2C070C]/25'
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
          <div className="bg-white rounded-3xl border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] overflow-hidden">
            <div className="p-5 border-b border-[#E8DFD1] flex items-center justify-between">
              <h3 className="font-editorial text-2xl font-medium text-[#23070B]">
                Scheduled Campus Visits ({visits.length})
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#5C4E50]">
                <thead className="bg-[#FCFAF6] text-[10px] font-bold text-[#6E5D5F] uppercase tracking-wider border-b border-[#E8DFD1] font-mono">
                  <tr>
                    <th className="py-3 px-4">Booking Ref</th>
                    <th className="py-3 px-4">Parent / Visitor</th>
                    <th className="py-3 px-4">Target Campus & Class</th>
                    <th className="py-3 px-4">Requested Date & Slot</th>
                    <th className="py-3 px-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F6F1E7]">
                  {visits.map((v) => (
                    <tr key={v.id} className="hover:bg-[#FCFAF6] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-[#23070B]">
                        {v.id}
                      </td>
                      <td className="py-3.5 px-4 font-sans">
                        <strong className="text-[#23070B] block font-semibold">{v.parentName}</strong>
                        <span className="text-[11px] text-[#6E5D5F]">{v.phone} • {v.email}</span>
                      </td>
                      <td className="py-3.5 px-4 font-sans">
                        <span className="font-semibold text-[#23070B] block">
                          {v.preferredSchool === 'both' ? 'Both Campuses' : v.preferredSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}
                        </span>
                        <span className="text-[11px] text-[#6E5D5F]">Class: {v.studentClass}</span>
                      </td>
                      <td className="py-3.5 px-4 font-sans">
                        <strong className="text-[#23070B] block">{v.preferredDate}</strong>
                        <span className="text-[11px] text-[#6E5D5F]">{v.preferredTime}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <select
                          value={v.status}
                          onChange={(e) => updateVisitStatus(v.id, e.target.value as VisitStatus)}
                          className="px-3 py-1 rounded-xl text-xs font-bold border border-[#E8DFD1] bg-[#FCFAF6] cursor-pointer font-sans"
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
              <h3 className="font-editorial text-2xl font-medium text-[#23070B]">
                Notice Board Publisher
              </h3>
              <button
                onClick={() => setShowNoticeModal(true)}
                className="luxury-btn-primary px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Plus className="w-4 h-4" />
                <span>Publish New Circular</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] overflow-hidden">
              <div className="divide-y divide-[#F6F1E7]">
                {notices.map((n) => (
                  <div key={n.id} className="p-5 flex items-start justify-between gap-4 hover:bg-[#FCFAF6] transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        {n.isPinned && (
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#BD672A] text-white uppercase font-mono">
                            Pinned
                          </span>
                        )}
                        <span className="text-[10px] font-bold text-[#BD672A] bg-[#BD672A]/10 border border-[#BD672A]/25 px-2.5 py-0.5 rounded-full font-mono">
                          {n.category}
                        </span>
                        <span className="text-xs text-[#6E5D5F] font-sans">
                          {n.targetSchool === 'all' ? 'All Schools' : n.targetSchool === 'dreamz' ? 'Rapid Dreamz' : 'Rapid Shakuntlayan'}
                        </span>
                        <span className="text-xs text-[#6E5D5F] font-mono">• Date: {n.date}</span>
                      </div>
                      <h4 className="font-editorial text-xl font-medium text-[#23070B]">
                        {n.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5C4E50] line-clamp-2 max-w-3xl font-sans">
                        {n.description}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => updateNotice(n.id, { isPinned: !n.isPinned })}
                        className={`p-2 rounded-xl border text-xs cursor-pointer ${n.isPinned ? 'bg-[#BD672A]/10 text-[#BD672A] border-[#BD672A]/30' : 'bg-[#FCFAF6] text-[#6E5D5F] border-[#E8DFD1]'}`}
                        title="Toggle Pin"
                      >
                        <Pin className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Delete circular "${n.title}"?`)) deleteNotice(n.id);
                        }}
                        className="p-2 rounded-xl border border-rose-200 bg-rose-50 text-rose-600 hover:bg-rose-100 cursor-pointer"
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
              <div className="fixed inset-0 z-50 bg-[#1C0306]/85 backdrop-blur-md flex items-center justify-center p-4">
                <div className="bg-white rounded-3xl max-w-xl w-full p-7 sm:p-9 shadow-2xl space-y-4 border border-[#E8DFD1]">
                  <h3 className="font-editorial text-3xl font-medium text-[#23070B]">
                    Publish Official Notice
                  </h3>

                  <form onSubmit={handleCreateNotice} className="space-y-3.5">
                    <div>
                      <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                        Notice Title *
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Revision of School Timings"
                        value={newNoticeTitle}
                        onChange={(e) => setNewNoticeTitle(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs sm:text-sm text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 font-sans"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                          Category *
                        </label>
                        <select
                          value={newNoticeCategory}
                          onChange={(e) => setNewNoticeCategory(e.target.value as any)}
                          className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs text-[#23070B] font-sans"
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
                        <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                          School Wing *
                        </label>
                        <select
                          value={newNoticeSchool}
                          onChange={(e) => setNewNoticeSchool(e.target.value as any)}
                          className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs text-[#23070B] font-sans"
                        >
                          <option value="all">All Schools (Unified)</option>
                          <option value="dreamz">Rapid Dreamz</option>
                          <option value="shakuntlayan">Rapid Shakuntlayan</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                        Attachment Filename (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Schedule_March_2025.pdf"
                        value={newNoticeAttachment}
                        onChange={(e) => setNewNoticeAttachment(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 font-sans"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                        Full Notice Description *
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Provide circular text and guidance for parents..."
                        value={newNoticeDesc}
                        onChange={(e) => setNewNoticeDesc(e.target.value)}
                        className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 font-sans"
                        required
                      />
                    </div>

                    <div className="flex items-center gap-2 pt-1 font-sans">
                      <input
                        type="checkbox"
                        id="pinCheck"
                        checked={newNoticePin}
                        onChange={(e) => setNewNoticePin(e.target.checked)}
                        className="w-4 h-4 rounded text-[#BD672A] focus:ring-[#BD672A]"
                      />
                      <label htmlFor="pinCheck" className="text-xs font-semibold text-[#423738]">
                        Pin notice to top of public Notice Board & announcement ticker
                      </label>
                    </div>

                    <div className="pt-4 flex justify-end gap-2.5">
                      <button
                        type="button"
                        onClick={() => setShowNoticeModal(false)}
                        className="luxury-btn-outline px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="luxury-btn-primary px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm"
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
            <h3 className="font-editorial text-2xl font-medium text-[#23070B]">
              Institutional Events Manager ({events.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {events.map((evt) => (
                <div key={evt.id} className="p-6 rounded-3xl bg-white border border-[#E8DFD1] shadow-xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2 font-mono">
                      <span className="font-bold text-[#064E3B] bg-[#064E3B]/10 border border-[#064E3B]/20 px-2.5 py-0.5 rounded-full text-[10px] uppercase">
                        {evt.category}
                      </span>
                      <span className="text-[#6E5D5F]">{evt.startDate}</span>
                    </div>
                    <h4 className="font-editorial text-2xl font-medium text-[#23070B]">{evt.title}</h4>
                    <p className="text-xs sm:text-sm text-[#5C4E50] mt-1 line-clamp-2 font-sans">{evt.summary}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#E8DFD1] flex items-center justify-between">
                    <span className="text-[11px] text-[#A8988C] font-sans">{evt.location}</span>
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
            <h3 className="font-editorial text-2xl font-medium text-[#23070B]">
              Classroom Stories & Articles ({news.length})
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {news.map((item) => (
                <div key={item.id} className="p-6 rounded-3xl bg-white border border-[#E8DFD1] shadow-xs flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#BD672A] bg-[#BD672A]/10 border border-[#BD672A]/20 px-2.5 py-0.5 rounded-full font-mono uppercase">
                      {item.category}
                    </span>
                    <h4 className="font-editorial text-2xl font-medium text-[#23070B] mt-2">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-[#5C4E50] mt-1 line-clamp-2 font-sans">{item.summary}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-[#E8DFD1] flex items-center justify-between">
                    <span className="text-[11px] text-[#A8988C] font-sans">By {item.author}</span>
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
            <h3 className="font-editorial text-2xl font-medium text-[#23070B]">
              Download Repository Documents ({downloads.length})
            </h3>
            <div className="bg-white rounded-3xl border border-[#E8DFD1] shadow-xs divide-y divide-[#F6F1E7]">
              {downloads.map((doc) => (
                <div key={doc.id} className="p-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1 font-mono">
                      <span className="text-[10px] font-bold text-[#BD672A] bg-[#BD672A]/10 border border-[#BD672A]/25 px-2.5 py-0.5 rounded-full">
                        {doc.category}
                      </span>
                      <span className="text-xs text-[#6E5D5F]">{doc.fileSize} • {doc.fileType}</span>
                    </div>
                    <h4 className="text-base font-semibold text-[#23070B] font-editorial">{doc.title}</h4>
                    <p className="text-xs text-[#5C4E50] font-sans">{doc.description}</p>
                  </div>
                  <button
                    onClick={() => {
                      if (confirm(`Delete document "${doc.title}"?`)) deleteDownload(doc.id);
                    }}
                    className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl shrink-0 cursor-pointer"
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
          <div className="bg-white p-7 sm:p-10 rounded-3xl border border-[#E8DFD1] shadow-[0_20px_45px_-15px_rgba(44,7,12,0.05)] max-w-3xl">
            <div className="border-b border-[#E8DFD1] pb-3 mb-6">
              <h3 className="font-editorial text-3xl font-medium text-[#23070B]">
                Institutional & Contact Settings
              </h3>
              <p className="text-xs text-[#6E5D5F] font-sans mt-0.5">
                Calibrate verified school contact details, affiliation codes, and academic sessions.
              </p>
            </div>

            {settingsSaved && (
              <div className="mb-4 p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 font-sans">
                <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Institutional configuration successfully updated and saved!</span>
              </div>
            )}

            <form onSubmit={handleSaveSettings} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                    Admissions Helpline Phone
                  </label>
                  <input
                    type="text"
                    value={settingsForm.phone}
                    onChange={(e) => setSettingsForm({ ...settingsForm, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs sm:text-sm text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                    Admissions Email Address
                  </label>
                  <input
                    type="email"
                    value={settingsForm.email}
                    onChange={(e) => setSettingsForm({ ...settingsForm, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs sm:text-sm text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                    Official WhatsApp Number
                  </label>
                  <input
                    type="text"
                    value={settingsForm.whatsapp}
                    onChange={(e) => setSettingsForm({ ...settingsForm, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs sm:text-sm text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                    Active Academic Session
                  </label>
                  <input
                    type="text"
                    value={settingsForm.academicYear}
                    onChange={(e) => setSettingsForm({ ...settingsForm, academicYear: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs sm:text-sm text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 font-sans"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                  Campus Address
                </label>
                <input
                  type="text"
                  value={settingsForm.address}
                  onChange={(e) => setSettingsForm({ ...settingsForm, address: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs sm:text-sm text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 font-sans"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                    CBSE Affiliation Disclosure Text
                  </label>
                  <input
                    type="text"
                    value={settingsForm.cbseAffiliationNumber}
                    onChange={(e) => setSettingsForm({ ...settingsForm, cbseAffiliationNumber: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs sm:text-sm text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 font-sans"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-[#6E5D5F] uppercase tracking-[0.15em] mb-1 font-mono">
                    Emergency Helpline
                  </label>
                  <input
                    type="text"
                    value={settingsForm.emergencyHelpline}
                    onChange={(e) => setSettingsForm({ ...settingsForm, emergencyHelpline: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-[#E8DFD1] bg-[#FCFAF6] text-xs sm:text-sm text-[#23070B] focus:bg-white focus:outline-none focus:border-[#BD672A] focus:ring-4 focus:ring-[#BD672A]/15 font-sans"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="luxury-btn-primary px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm cursor-pointer"
                >
                  Save Institutional Settings
                </button>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
