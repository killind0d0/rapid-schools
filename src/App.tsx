import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { SiteProvider } from './context/SiteContext';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { MobileBottomBar } from './components/common/MobileBottomBar';
import { NoticeTicker } from './components/common/NoticeTicker';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AdmissionsPage } from './pages/AdmissionsPage';
import { CampusVisitPage } from './pages/CampusVisitPage';
import { NoticesPage } from './pages/NoticesPage';
import { NewsPage } from './pages/NewsPage';
import { EventsPage } from './pages/EventsPage';
import { GalleryPage } from './pages/GalleryPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { ContactPage } from './pages/ContactPage';
import { ParentPortalPage } from './pages/ParentPortalPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Dreamz Pages
import { DreamzHomePage } from './pages/dreamz/DreamzHomePage';
import { DreamzApproachPage } from './pages/dreamz/DreamzApproachPage';
import { DreamzAcademicsPage } from './pages/dreamz/DreamzAcademicsPage';
import { DreamzAdmissionsPage } from './pages/dreamz/DreamzAdmissionsPage';

// Shakuntlayan Pages
import { ShakunHomePage } from './pages/shakuntlayan/ShakunHomePage';
import { ShakunAcademicsPage } from './pages/shakuntlayan/ShakunAcademicsPage';
import { ShakunCampusPage } from './pages/shakuntlayan/ShakunCampusPage';
import { ShakunStudentLifePage } from './pages/shakuntlayan/ShakunStudentLifePage';
import { ShakunAdmissionsPage } from './pages/shakuntlayan/ShakunAdmissionsPage';

// Admin Page
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';

// Scroll Restoration
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export const App: React.FC = () => {
  return (
    <SiteProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          {/* Top Announcement Ticker */}
          <NoticeTicker />

          {/* Institutional Navigation Header */}
          <Header />

          {/* Main Router Content */}
          <main className="flex-1" id="main-content">
            <Routes>
              {/* Parent Brand Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/admissions" element={<AdmissionsPage />} />
              <Route path="/visit" element={<CampusVisitPage />} />
              <Route path="/notices" element={<NoticesPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/downloads" element={<DownloadsPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/portal" element={<ParentPortalPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />

              {/* Rapid Dreamz Routes */}
              <Route path="/dreamz" element={<DreamzHomePage />} />
              <Route path="/dreamz/approach" element={<DreamzApproachPage />} />
              <Route path="/dreamz/academics" element={<DreamzAcademicsPage />} />
              <Route path="/dreamz/admissions" element={<DreamzAdmissionsPage />} />

              {/* Rapid Shakuntlayan Routes */}
              <Route path="/shakuntlayan" element={<ShakunHomePage />} />
              <Route path="/shakuntlayan/academics" element={<ShakunAcademicsPage />} />
              <Route path="/shakuntlayan/campus" element={<ShakunCampusPage />} />
              <Route path="/shakuntlayan/student-life" element={<ShakunStudentLifePage />} />
              <Route path="/shakuntlayan/achievements" element={<ShakunHomePage />} />
              <Route path="/shakuntlayan/admissions" element={<ShakunAdmissionsPage />} />

              {/* Admin CMS */}
              <Route path="/admin" element={<AdminDashboardPage />} />

              {/* 404 Catch-All */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />

          {/* Mobile Bottom Quick Contact Bar */}
          <MobileBottomBar />
        </div>
      </BrowserRouter>
    </SiteProvider>
  );
};

export default App;
