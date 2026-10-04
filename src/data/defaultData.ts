import { SiteSettings, Notice, EventItem, NewsArticle, GalleryItem, DownloadItem, AdmissionEnquiry, CampusVisitBooking } from './types';

export const initialSettings: SiteSettings = {
  brandName: 'Rapid Schools',
  dreamzName: 'Rapid Dreamz',
  dreamzTagline: 'Little minds. Big beginnings.',
  dreamzSubtitle: 'Junior School — Play Group to UKG',
  shakuntlayanName: 'Rapid Shakuntlayan',
  shakuntlayanTagline: 'Building minds that shape tomorrow.',
  shakuntlayanSubtitle: 'Class 1 to Class 12 • CBSE Affiliated, New Delhi',
  cbseAffiliationNumber: 'Affiliation No. (Configurable in Admin)',
  cbseSchoolCode: 'School Code (Configurable in Admin)',
  phone: '+91 98765 43210',
  email: 'admissions@rapidschools.edu.in',
  whatsapp: '+919876543210',
  address: 'Rapid Educational Campus, Institutional Area, Knowledge City, India',
  mapsUrl: 'https://maps.google.com',
  admissionsOpen: true,
  academicYear: '2025-2026',
  emergencyHelpline: '+91 98765 43211 (Campus Office)',
  socialLinks: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com'
  }
};

export const initialNotices: Notice[] = [
  {
    id: 'not-01',
    title: 'Admissions Open for Academic Session 2025–2026',
    date: '2025-02-15',
    category: 'Admission',
    description: 'Registration and interactive campus tours are now open for Rapid Dreamz (Play Group to UKG) and Rapid Shakuntlayan (Class 1 to 11). Online application forms are available in the Admissions portal.',
    attachmentName: 'Admissions_Guidelines_2025-26.pdf',
    isPinned: true,
    expiryDate: '2025-08-30',
    isPublished: true,
    targetSchool: 'all'
  },
  {
    id: 'not-02',
    title: 'Rapid Shakuntlayan: Schedule for Annual Term Evaluations',
    date: '2025-02-10',
    category: 'Academic',
    description: 'Evaluation date sheet and revision guidelines for Classes 1 through 9 have been published. Parents are advised to review the subject breakdown and examination instructions.',
    attachmentName: 'DateSheet_Term_Evaluations.pdf',
    isPinned: true,
    expiryDate: '2025-04-15',
    isPublished: true,
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'not-03',
    title: 'Rapid Dreamz: Sensory Exploration & Nature Discovery Week',
    date: '2025-02-08',
    category: 'General',
    description: 'A dedicated thematic learning week focusing on tactile exploration, botanical awareness, and interactive storytelling for our early childhood learners.',
    attachmentName: 'Sensory_Week_Circular.pdf',
    isPinned: false,
    expiryDate: '2025-03-30',
    isPublished: true,
    targetSchool: 'dreamz'
  },
  {
    id: 'not-04',
    title: 'School Transport Advisory & Safety Protocol Update',
    date: '2025-01-20',
    category: 'Circular',
    description: 'Updated guidelines regarding designated pickup and drop-off zones, verified bus escort contacts, and GPS tracking link access for registered parent accounts.',
    attachmentName: 'Transport_Protocols_2025.pdf',
    isPinned: false,
    expiryDate: '2025-06-30',
    isPublished: true,
    targetSchool: 'all'
  }
];

export const initialEvents: EventItem[] = [
  {
    id: 'evt-01',
    title: 'Parent Orientation & Early Childhood Open Day',
    category: 'Parent-Teacher',
    startDate: '2025-03-15',
    endDate: '2025-03-15',
    time: '09:30 AM – 01:00 PM',
    location: 'Rapid Dreamz Campus Amphitheatre',
    summary: 'An engaging walk-through for prospective parents exploring play-based inquiry, emotional milestones, and early literacy at Rapid Dreamz.',
    content: 'Experience our child-centered learning spaces, meet the early education mentors, and discover our foundational curriculum designed around play, motor dexterity, and joyful discovery.',
    featuredImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    registrationInfo: 'Open to registered visitors. Prior booking recommended.',
    contactInfo: 'admissions@rapidschools.edu.in',
    targetSchool: 'dreamz',
    isPublished: true
  },
  {
    id: 'evt-02',
    title: 'Inter-House Science & Innovation Symposium',
    category: 'Academic',
    startDate: '2025-03-22',
    endDate: '2025-03-23',
    time: '10:00 AM – 04:00 PM',
    location: 'Rapid Shakuntlayan Central Auditorium & Science Labs',
    summary: 'Student-led research presentations, robotics demonstrations, and working models prepared by students from Classes 6 through 12.',
    content: 'The annual Science Symposium fosters scientific temperament, design thinking, and collaborative problem-solving across secondary and senior secondary divisions.',
    featuredImage: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1000&q=80',
    registrationInfo: 'Parents and mentors cordially invited.',
    contactInfo: 'events@rapidschools.edu.in',
    targetSchool: 'shakuntlayan',
    isPublished: true
  },
  {
    id: 'evt-03',
    title: 'Annual Sports & Physical Well-being Meet',
    category: 'Sports',
    startDate: '2025-04-05',
    endDate: '2025-04-06',
    time: '08:00 AM – 03:00 PM',
    location: 'Rapid Main Sports Complex & Athletics Track',
    summary: 'Track events, field athletics, team championships, and joyful developmental motor races for both schools.',
    content: 'Celebrating sportsmanship, teamwork, endurance, and physical literacy across all age groups from junior to senior students.',
    featuredImage: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=80',
    registrationInfo: 'School-wide event.',
    contactInfo: 'sports@rapidschools.edu.in',
    targetSchool: 'all',
    isPublished: true
  }
];

export const initialNews: NewsArticle[] = [
  {
    id: 'news-01',
    title: 'Nurturing Foundational Literacy: The Pedagogical Approach at Rapid Dreamz',
    category: 'Campus Life',
    date: '2025-02-12',
    featuredImage: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=80',
    summary: 'How phonics, visual storytelling, and sensory engagement collaborate to build lifelong reading enthusiasm in early learners.',
    content: 'At Rapid Dreamz, language learning begins not with rote memorization, but with curiosity-sparking story circles, phonemic play, and interactive puppetry. Our educators construct print-rich environments where children naturally develop phonetic awareness and vocabulary with confidence.',
    author: 'Early Years Academic Cell',
    targetSchool: 'dreamz',
    isPublished: true
  },
  {
    id: 'news-02',
    title: 'Preparing Future Thinkers: Inquiry-Based Learning in CBSE Class 9–12',
    category: 'Academic Update',
    date: '2025-02-05',
    featuredImage: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1000&q=80',
    summary: 'A look inside Rapid Shakuntlayan classrooms where theoretical concepts transform into empirical understanding through laboratory inquiry.',
    content: 'Modern educational demands require students to transcend memorization. At Rapid Shakuntlayan, our CBSE framework integrates real-world case studies, hands-on scientific experiments, and peer debate sessions that sharpen analytical reasoning and competitive readiness.',
    author: 'Department of Academic Studies',
    targetSchool: 'shakuntlayan',
    isPublished: true
  },
  {
    id: 'news-03',
    title: 'Holistic Art & Expression: Unveiling the Spring Visual Arts Gallery',
    category: 'Campus Life',
    date: '2025-01-28',
    featuredImage: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1000&q=80',
    summary: 'A showcase of collaborative murals, pottery, and mixed-media creations developed by students across both schools.',
    content: 'Art at Rapid Schools is celebrated as a fundamental language of human expression. The Spring Visual Arts exhibition brings together vibrant finger-painting experiments from Rapid Dreamz alongside intricate canvas studies by Rapid Shakuntlayan seniors.',
    author: 'Cultural Co-Curricular Committee',
    targetSchool: 'all',
    isPublished: true
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: 'gal-01',
    title: 'Early Explorations & Play Area',
    category: 'Early Years',
    imageUrl: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1000&q=80',
    caption: 'Safe, rubberized indoor play space supporting motor dexterity and social interaction.',
    altText: 'Children engaging in creative play at Rapid Dreamz',
    targetSchool: 'dreamz'
  },
  {
    id: 'gal-02',
    title: 'Advanced Science Laboratory',
    category: 'Classrooms',
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80',
    caption: 'Dedicated chemistry and physics workbenches conforming to national safety guidelines.',
    altText: 'Science laboratory with experimental equipment at Rapid Shakuntlayan',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-03',
    title: 'Central Learning Resource Library',
    category: 'Campus',
    imageUrl: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1000&q=80',
    caption: 'Peaceful reading zones with diverse literature, research journals, and digital catalogues.',
    altText: 'Quiet library study area with book collections',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-04',
    title: 'Visual Arts and Sculpture Studio',
    category: 'Arts & Culture',
    imageUrl: 'https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&w=1000&q=80',
    caption: 'Dedicated creative studio space for sketching, watercolor, clay modeling, and crafts.',
    altText: 'Art supplies and creative works in the school art room',
    targetSchool: 'all'
  },
  {
    id: 'gal-05',
    title: 'Athletics & Physical Training Field',
    category: 'Sports',
    imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80',
    caption: 'Spacious sports grounds for athletics, football, cricket practice, and physical education.',
    altText: 'School athletic field and running track',
    targetSchool: 'all'
  },
  {
    id: 'gal-06',
    title: 'Interactive Smart Learning Room',
    category: 'Classrooms',
    imageUrl: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=80',
    caption: 'Ergonomic seating with multimedia interactive display panels for engaging classroom discussions.',
    altText: 'Classroom with modern presentation boards and student desks',
    targetSchool: 'shakuntlayan'
  }
];

export const initialDownloads: DownloadItem[] = [
  {
    id: 'dl-01',
    title: 'Admission Prospectus & General Guidelines (2025–26)',
    category: 'Admission',
    date: '2025-02-01',
    fileSize: '2.4 MB',
    fileType: 'PDF',
    description: 'Comprehensive overview of enrollment procedures, age criteria, document prerequisites, and campus guidelines for both schools.',
    targetSchool: 'all'
  },
  {
    id: 'dl-02',
    title: 'Rapid Dreamz: Early Childhood Curriculum Overview',
    category: 'Academic',
    date: '2025-01-25',
    fileSize: '1.8 MB',
    fileType: 'PDF',
    description: 'Stage-wise developmental framework from Play Group through UKG outlining play-based milestones and daily routines.',
    targetSchool: 'dreamz'
  },
  {
    id: 'dl-03',
    title: 'Rapid Shakuntlayan: CBSE Course Syllabus & Scheme of Studies',
    category: 'Academic',
    date: '2025-01-20',
    fileSize: '3.1 MB',
    fileType: 'PDF',
    description: 'Class 1 to 12 syllabus map, evaluation rubrics, prescribed textbooks, and internal assessment guidelines.',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'dl-04',
    title: 'Standard Student Medical & Emergency Information Form',
    category: 'Forms',
    date: '2025-01-15',
    fileSize: '450 KB',
    fileType: 'PDF',
    description: 'Mandatory health history declaration, immunization record submission, and emergency contact authorization.',
    targetSchool: 'all'
  },
  {
    id: 'dl-05',
    title: 'Annual Institutional Academic Calendar (2025–26)',
    category: 'Calendars',
    date: '2025-02-10',
    fileSize: '920 KB',
    fileType: 'PDF',
    description: 'List of school working days, term holidays, assessment dates, parent-educator conferences, and annual celebrations.',
    targetSchool: 'all'
  },
  {
    id: 'dl-06',
    title: 'School Fee Policy, Payment Schedule & Transport Regulations',
    category: 'Policies',
    date: '2025-01-10',
    fileSize: '680 KB',
    fileType: 'PDF',
    description: 'Transparent schedule of quarterly dues, authorized payment gateways, withdrawal rules, and transport fee zones.',
    targetSchool: 'all'
  }
];

export const initialEnquiries: AdmissionEnquiry[] = [
  {
    id: 'ENQ-2025-101',
    parentName: 'Rameshwar Sharma',
    studentName: 'Aarav Sharma',
    phone: '+91 98234 56789',
    email: 'rameshwar.s@example.com',
    preferredSchool: 'dreamz',
    preferredClass: 'Nursery',
    message: 'We are seeking admission for our 3.5 year old son. We would love to observe the early-years learning environment and understand teacher-student ratios.',
    submittedAt: '2025-02-18 10:24 AM',
    status: 'new'
  },
  {
    id: 'ENQ-2025-102',
    parentName: 'Pooja Verma',
    studentName: 'Ananya Verma',
    phone: '+91 98711 22334',
    email: 'pooja.verma@example.com',
    preferredSchool: 'shakuntlayan',
    preferredClass: 'Class 6',
    message: 'Looking for transfer admission from an out-of-state CBSE school. Seeking details on mathematics faculty and athletic facilities.',
    submittedAt: '2025-02-17 04:15 PM',
    status: 'contacted'
  }
];

export const initialVisits: CampusVisitBooking[] = [
  {
    id: 'VIS-2025-01',
    parentName: 'Dr. Anand Mehrotra',
    phone: '+91 94150 99887',
    email: 'dr.mehrotra@example.com',
    preferredSchool: 'both',
    studentClass: 'Nursery & Class 4',
    preferredDate: '2025-03-05',
    preferredTime: '10:30 AM',
    message: 'Visiting with two children to tour both junior and primary wings.',
    submittedAt: '2025-02-19 11:10 AM',
    status: 'confirmed'
  }
];
