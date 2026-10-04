export type TargetSchool = 'all' | 'dreamz' | 'shakuntlayan';

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: 'Academic' | 'Admission' | 'Circular' | 'General' | 'Examination' | 'Holiday';
  description: string;
  attachmentName?: string;
  attachmentUrl?: string;
  isPinned: boolean;
  expiryDate?: string;
  isPublished: boolean;
  targetSchool: TargetSchool;
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Sports' | 'Cultural' | 'Academic' | 'Celebration' | 'Workshop' | 'Parent-Teacher';
  startDate: string;
  endDate?: string;
  time: string;
  location: string;
  summary: string;
  content: string;
  featuredImage?: string;
  registrationInfo?: string;
  contactInfo?: string;
  targetSchool: TargetSchool;
  isPublished: boolean;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Achievement' | 'Campus Life' | 'Academic Update' | 'Community' | 'Innovation';
  date: string;
  featuredImage: string;
  summary: string;
  content: string;
  author: string;
  targetSchool: TargetSchool;
  isPublished: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Campus' | 'Classrooms' | 'Sports' | 'Arts & Culture' | 'Early Years' | 'Celebrations';
  imageUrl: string;
  caption: string;
  altText: string;
  targetSchool: TargetSchool;
}

export interface DownloadItem {
  id: string;
  title: string;
  category: 'Admission' | 'Circulars' | 'Academic' | 'Forms' | 'Policies' | 'Calendars';
  date: string;
  fileSize: string;
  fileType: 'PDF' | 'DOCX' | 'ZIP';
  description: string;
  targetSchool: TargetSchool;
  downloadUrl?: string;
}

export type EnquiryStatus = 'new' | 'contacted' | 'verified' | 'enrolled';

export interface AdmissionEnquiry {
  id: string;
  parentName: string;
  studentName: string;
  phone: string;
  email: string;
  preferredSchool: 'dreamz' | 'shakuntlayan';
  preferredClass: string;
  message?: string;
  submittedAt: string;
  status: EnquiryStatus;
  notes?: string;
}

export type VisitStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';

export interface CampusVisitBooking {
  id: string;
  parentName: string;
  phone: string;
  email: string;
  preferredSchool: 'dreamz' | 'shakuntlayan' | 'both';
  studentClass: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  submittedAt: string;
  status: VisitStatus;
}

export interface SiteSettings {
  brandName: string;
  dreamzName: string;
  dreamzTagline: string;
  dreamzSubtitle: string;
  shakuntlayanName: string;
  shakuntlayanTagline: string;
  shakuntlayanSubtitle: string;
  cbseAffiliationNumber: string;
  cbseSchoolCode: string;
  phone: string;
  email: string;
  whatsapp: string;
  address: string;
  mapsUrl: string;
  admissionsOpen: boolean;
  academicYear: string;
  emergencyHelpline: string;
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    linkedin?: string;
  };
}
