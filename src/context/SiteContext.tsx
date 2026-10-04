import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  SiteSettings,
  Notice,
  EventItem,
  NewsArticle,
  GalleryItem,
  DownloadItem,
  AdmissionEnquiry,
  CampusVisitBooking,
  TargetSchool,
  EnquiryStatus,
  VisitStatus
} from '../data/types';
import {
  initialSettings,
  initialNotices,
  initialEvents,
  initialNews,
  initialGallery,
  initialDownloads,
  initialEnquiries,
  initialVisits
} from '../data/defaultData';

interface SiteContextType {
  settings: SiteSettings;
  updateSettings: (newSettings: Partial<SiteSettings>) => void;
  notices: Notice[];
  addNotice: (notice: Omit<Notice, 'id'>) => void;
  updateNotice: (id: string, notice: Partial<Notice>) => void;
  deleteNotice: (id: string) => void;
  events: EventItem[];
  addEvent: (event: Omit<EventItem, 'id'>) => void;
  updateEvent: (id: string, event: Partial<EventItem>) => void;
  deleteEvent: (id: string) => void;
  news: NewsArticle[];
  addNews: (news: Omit<NewsArticle, 'id'>) => void;
  updateNews: (id: string, news: Partial<NewsArticle>) => void;
  deleteNews: (id: string) => void;
  gallery: GalleryItem[];
  addGalleryItem: (item: Omit<GalleryItem, 'id'>) => void;
  deleteGalleryItem: (id: string) => void;
  downloads: DownloadItem[];
  addDownload: (item: Omit<DownloadItem, 'id'>) => void;
  deleteDownload: (id: string) => void;
  enquiries: AdmissionEnquiry[];
  submitEnquiry: (enquiry: Omit<AdmissionEnquiry, 'id' | 'submittedAt' | 'status'>) => string;
  updateEnquiryStatus: (id: string, status: EnquiryStatus, notes?: string) => void;
  visits: CampusVisitBooking[];
  bookVisit: (visit: Omit<CampusVisitBooking, 'id' | 'submittedAt' | 'status'>) => string;
  updateVisitStatus: (id: string, status: VisitStatus) => void;
  resetAllToDefault: () => void;
}

const STORAGE_KEY = 'rapid_schools_cms_state_v5';

const SiteContext = createContext<SiteContextType | undefined>(undefined);

export const SiteProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [settings, setSettings] = useState<SiteSettings>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_settings`);
      return saved ? { ...initialSettings, ...JSON.parse(saved) } : initialSettings;
    } catch {
      return initialSettings;
    }
  });

  const [notices, setNotices] = useState<Notice[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_notices`);
      return saved ? JSON.parse(saved) : initialNotices;
    } catch {
      return initialNotices;
    }
  });

  const [events, setEvents] = useState<EventItem[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_events`);
      return saved ? JSON.parse(saved) : initialEvents;
    } catch {
      return initialEvents;
    }
  });

  const [news, setNews] = useState<NewsArticle[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_news`);
      return saved ? JSON.parse(saved) : initialNews;
    } catch {
      return initialNews;
    }
  });

  const [gallery, setGallery] = useState<GalleryItem[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_gallery`);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length >= 20 && parsed.some((item: GalleryItem) => item.id?.startsWith('gal-fb-'))) {
          return parsed;
        }
      }
      return initialGallery;
    } catch {
      return initialGallery;
    }
  });

  const [downloads, setDownloads] = useState<DownloadItem[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_downloads`);
      return saved ? JSON.parse(saved) : initialDownloads;
    } catch {
      return initialDownloads;
    }
  });

  const [enquiries, setEnquiries] = useState<AdmissionEnquiry[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_enquiries`);
      return saved ? JSON.parse(saved) : initialEnquiries;
    } catch {
      return initialEnquiries;
    }
  });

  const [visits, setVisits] = useState<CampusVisitBooking[]>(() => {
    try {
      const saved = localStorage.getItem(`${STORAGE_KEY}_visits`);
      return saved ? JSON.parse(saved) : initialVisits;
    } catch {
      return initialVisits;
    }
  });

  // Sync state changes to localStorage
  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_settings`, JSON.stringify(settings));
  }, [settings]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_notices`, JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_events`, JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_news`, JSON.stringify(news));
  }, [news]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_gallery`, JSON.stringify(gallery));
  }, [gallery]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_downloads`, JSON.stringify(downloads));
  }, [downloads]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_enquiries`, JSON.stringify(enquiries));
  }, [enquiries]);

  useEffect(() => {
    localStorage.setItem(`${STORAGE_KEY}_visits`, JSON.stringify(visits));
  }, [visits]);

  const updateSettings = (newSettings: Partial<SiteSettings>) => {
    setSettings((prev) => ({ ...prev, ...newSettings }));
  };

  const addNotice = (notice: Omit<Notice, 'id'>) => {
    const id = `not-${Date.now().toString().slice(-4)}`;
    setNotices((prev) => [ { ...notice, id }, ...prev ]);
  };

  const updateNotice = (id: string, updated: Partial<Notice>) => {
    setNotices((prev) => prev.map((n) => (n.id === id ? { ...n, ...updated } : n)));
  };

  const deleteNotice = (id: string) => {
    setNotices((prev) => prev.filter((n) => n.id !== id));
  };

  const addEvent = (event: Omit<EventItem, 'id'>) => {
    const id = `evt-${Date.now().toString().slice(-4)}`;
    setEvents((prev) => [ { ...event, id }, ...prev ]);
  };

  const updateEvent = (id: string, updated: Partial<EventItem>) => {
    setEvents((prev) => prev.map((e) => (e.id === id ? { ...e, ...updated } : e)));
  };

  const deleteEvent = (id: string) => {
    setEvents((prev) => prev.filter((e) => e.id !== id));
  };

  const addNews = (article: Omit<NewsArticle, 'id'>) => {
    const id = `news-${Date.now().toString().slice(-4)}`;
    setNews((prev) => [ { ...article, id }, ...prev ]);
  };

  const updateNews = (id: string, updated: Partial<NewsArticle>) => {
    setNews((prev) => prev.map((item) => (item.id === id ? { ...item, ...updated } : item)));
  };

  const deleteNews = (id: string) => {
    setNews((prev) => prev.filter((item) => item.id !== id));
  };

  const addGalleryItem = (item: Omit<GalleryItem, 'id'>) => {
    const id = `gal-${Date.now().toString().slice(-4)}`;
    setGallery((prev) => [ { ...item, id }, ...prev ]);
  };

  const deleteGalleryItem = (id: string) => {
    setGallery((prev) => prev.filter((g) => g.id !== id));
  };

  const addDownload = (item: Omit<DownloadItem, 'id'>) => {
    const id = `dl-${Date.now().toString().slice(-4)}`;
    setDownloads((prev) => [ { ...item, id }, ...prev ]);
  };

  const deleteDownload = (id: string) => {
    setDownloads((prev) => prev.filter((d) => d.id !== id));
  };

  const submitEnquiry = (enquiryData: Omit<AdmissionEnquiry, 'id' | 'submittedAt' | 'status'>): string => {
    const prefix = enquiryData.preferredSchool === 'dreamz' ? 'RDZ' : 'RSK';
    const id = `${prefix}-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`;
    const now = new Date().toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    const newEnquiry: AdmissionEnquiry = {
      ...enquiryData,
      id,
      submittedAt: now,
      status: 'new'
    };
    setEnquiries((prev) => [newEnquiry, ...prev]);
    return id;
  };

  const updateEnquiryStatus = (id: string, status: EnquiryStatus, notes?: string) => {
    setEnquiries((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status, notes: notes !== undefined ? notes : item.notes } : item))
    );
  };

  const bookVisit = (visitData: Omit<CampusVisitBooking, 'id' | 'submittedAt' | 'status'>): string => {
    const id = `VIS-${new Date().getFullYear()}-${Math.floor(10 + Math.random() * 90)}`;
    const now = new Date().toLocaleString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
    const newBooking: CampusVisitBooking = {
      ...visitData,
      id,
      submittedAt: now,
      status: 'pending'
    };
    setVisits((prev) => [newBooking, ...prev]);
    return id;
  };

  const updateVisitStatus = (id: string, status: VisitStatus) => {
    setVisits((prev) => prev.map((v) => (v.id === id ? { ...v, status } : v)));
  };

  const resetAllToDefault = () => {
    setSettings(initialSettings);
    setNotices(initialNotices);
    setEvents(initialEvents);
    setNews(initialNews);
    setGallery(initialGallery);
    setDownloads(initialDownloads);
    setEnquiries(initialEnquiries);
    setVisits(initialVisits);
    localStorage.clear();
  };

  return (
    <SiteContext.Provider
      value={{
        settings,
        updateSettings,
        notices,
        addNotice,
        updateNotice,
        deleteNotice,
        events,
        addEvent,
        updateEvent,
        deleteEvent,
        news,
        addNews,
        updateNews,
        deleteNews,
        gallery,
        addGalleryItem,
        deleteGalleryItem,
        downloads,
        addDownload,
        deleteDownload,
        enquiries,
        submitEnquiry,
        updateEnquiryStatus,
        visits,
        bookVisit,
        updateVisitStatus,
        resetAllToDefault
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error('useSite must be used within a SiteProvider');
  }
  return context;
};
