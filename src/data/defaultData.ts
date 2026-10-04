import { SiteSettings, Notice, EventItem, NewsArticle, GalleryItem, DownloadItem, AdmissionEnquiry, CampusVisitBooking } from './types';

export const initialSettings: SiteSettings = {
  brandName: 'Rapid Schools',
  dreamzName: 'Rapid Dreamz',
  dreamzTagline: 'Little minds. Big beginnings.',
  dreamzSubtitle: 'Foundational Learning Wing • Play Group to UKG',
  dreamzPhone: '+91 77658 05526',
  dreamzAddress: 'Prawanand Path, A.P. Colony, Gaya, Bihar – 823001',
  dreamzMapsUrl: 'https://maps.google.com/?q=Rapid+Dreamz+Prawanand+Path+AP+Colony+Gaya',
  shakuntlayanName: 'Rapid Shakuntalayan School',
  shakuntlayanTagline: 'Love One Another • Building Minds That Shape Tomorrow',
  shakuntlayanSubtitle: 'Pre-Nursery to Class 12 • Affiliated to CBSE, New Delhi',
  shakuntlayanPhone: '+91 91538 30765 / +91 94312 63570',
  shakuntlayanAddress: 'Tekuna Farm, BMP-3, Bodhgaya Road, Gaya, Bihar – 824231',
  shakuntlayanMapsUrl: 'https://maps.google.com/?q=Rapid+Shakuntalayan+School+Bodh+Gaya',
  shakuntlayanMotto: 'Love One Another',
  shakuntlayanPrincipal: 'Mr. Rajiv Charan',
  shakuntlayanDirector: 'Mrs. Mamta Rani',
  establishedYear: '2014',
  cbseAffiliationNumber: '331099',
  cbseSchoolCode: '65598',
  phone: '+91 91538 30765',
  email: 'rapidshakuntalayangaya@gmail.com',
  whatsapp: '+919153830765',
  address: 'Senior Wing: Tekuna Farm, BMP-3, Bodhgaya Road, Gaya | Junior Wing: A.P. Colony, Gaya',
  mapsUrl: 'https://maps.google.com/?q=Rapid+Shakuntalayan+School+Bodh+Gaya',
  admissionsOpen: true,
  academicYear: '2025-2026',
  emergencyHelpline: '+91 94312 63570 / +91 91538 30765',
  socialLinks: {
    facebook: 'https://www.facebook.com/rapid.shakuntalayan.school.gaya/',
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
    description: 'Registration and interactive campus tours are now open for Rapid Dreamz (A.P. Colony, Play Group to UKG) and Rapid Shakuntalayan School (Tekuna Farm Campus, Pre-Nursery to Class 11). Online application forms are available in the Admissions portal.',
    attachmentName: 'Admissions_Guidelines_2025-26.pdf',
    isPinned: true,
    expiryDate: '2025-08-30',
    isPublished: true,
    targetSchool: 'all'
  },
  {
    id: 'not-02',
    title: 'Rapid Shakuntalayan: Schedule for Annual Term Evaluations',
    date: '2025-02-10',
    category: 'Academic',
    description: 'Evaluation date sheet and revision guidelines for Classes 1 through 9 (CBSE Affiliation No. 331099) have been published. Parents are advised to review the subject breakdown and examination instructions.',
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
    description: 'A dedicated thematic learning week focusing on tactile exploration, botanical awareness, and interactive storytelling for our early childhood learners at the A.P. Colony campus.',
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
    description: 'Updated guidelines regarding designated pickup and drop-off zones across Gaya & Bodh Gaya routes, verified bus escort contacts, and GPS tracking updates for registered parent accounts.',
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
    location: 'Rapid Dreamz Campus, Prawanand Path, A.P. Colony, Gaya',
    summary: 'An engaging walk-through for prospective parents exploring play-based inquiry, emotional milestones, and early literacy at Rapid Dreamz.',
    content: 'Experience our child-centered learning spaces, meet the early education mentors, and discover our foundational curriculum designed around play, motor dexterity, and joyful discovery.',
    featuredImage: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=1000&q=80',
    registrationInfo: 'Open to registered visitors. Prior booking recommended.',
    contactInfo: 'rapidshakuntalayangaya@gmail.com',
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
    location: 'Rapid Shakuntalayan Central Auditorium & Science Labs, Tekuna Farm, Bodh Gaya',
    summary: 'Student-led research presentations, robotics demonstrations, and working models prepared by students from Classes 6 through 12.',
    content: 'The annual Science Symposium fosters scientific temperament, design thinking, and collaborative problem-solving across secondary and senior secondary divisions.',
    featuredImage: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=1000&q=80',
    registrationInfo: 'Parents and mentors cordially invited.',
    contactInfo: 'rapidshakuntalayangaya@gmail.com',
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
    location: 'Rapid Shakuntalayan Main Sports Complex, Tekuna Farm, Bodh Gaya',
    summary: 'Track events, field athletics, team championships, and joyful developmental motor races for both schools.',
    content: 'Celebrating sportsmanship, teamwork, endurance, and physical literacy across all age groups from junior to senior students.',
    featuredImage: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=1000&q=80',
    registrationInfo: 'School-wide event.',
    contactInfo: 'rapidshakuntalayangaya@gmail.com',
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
  },
  {
    id: 'news-04',
    title: 'A Grand Celebration of Gandhi Jayanti & Lal Bahadur Shastri Jayanti',
    category: 'Campus Life',
    date: '2026-10-02',
    featuredImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80',
    summary: 'Rapid Shakuntalayan School celebrated the birth anniversaries of Mahatma Gandhi Ji and Lal Bahadur Shastri Ji with patriotic reverence and student assemblies.',
    content: 'Today, Rapid Shakuntalayan School celebrated the birth anniversaries of Mahatma Gandhi Ji and Lal Bahadur Shastri Ji with heartfelt enthusiasm. Students and faculty paid floral tributes, reflected on the principles of truth, non-violence, and self-reliance, and performed cultural speeches celebrating the leaders who forged the nation.',
    author: 'Rapid Shakuntalayan Editorial Desk',
    targetSchool: 'shakuntlayan',
    isPublished: true
  }
];

export const initialGallery: GalleryItem[] = [
  // 13 Authentic School Videos & Reels
  {
    id: 'gal-fb-v01',
    title: 'Student Expression & Campus Life',
    category: 'Celebrations',
    imageUrl: '/rapid-schools/gallery/photos/poster_1084680567729794.jpg',
    videoUrl: '/rapid-schools/gallery/videos/1084680567729794.mp4',
    mediaType: 'video',
    caption: 'Official student reel highlighting energy, creativity, and student life at Rapid Shakuntalayan School.',
    altText: 'Student performance and campus life reel',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-v02',
    title: 'Director Mr. Amitabh Kumar — Address to Scholars',
    category: 'Campus',
    imageUrl: '/rapid-schools/gallery/photos/poster_919466247147412.jpg',
    videoUrl: '/rapid-schools/gallery/videos/919466247147412.mp4',
    mediaType: 'video',
    caption: 'School Director Mr. Amitabh Kumar sharing words of encouragement and guidance with students.',
    altText: 'Director addressing school assembly',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-v03',
    title: 'Annual Track & Field Championships',
    category: 'Sports',
    imageUrl: '/rapid-schools/gallery/photos/poster_1979336363017799.jpg',
    videoUrl: '/rapid-schools/gallery/videos/1979336363017799.mp4',
    mediaType: 'video',
    caption: 'High-energy track events, sprint finals, and athletic teamwork on the school sports field.',
    altText: 'Track and field competition video',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-v04',
    title: 'Science Practical & STEM Demonstration',
    category: 'Classrooms',
    imageUrl: '/rapid-schools/gallery/photos/poster_857001857365218.jpg',
    videoUrl: '/rapid-schools/gallery/videos/857001857365218.mp4',
    mediaType: 'video',
    caption: 'Secondary students demonstrating empirical physics and chemical reaction models in the laboratory.',
    altText: 'Students conducting science experiments',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-v05',
    title: 'Cultural Harmony & Performing Arts',
    category: 'Arts & Culture',
    imageUrl: '/rapid-schools/gallery/photos/poster_920614683788172.jpg',
    videoUrl: '/rapid-schools/gallery/videos/920614683788172.mp4',
    mediaType: 'video',
    caption: 'Choral recitations, traditional Indian instruments, and dance performances celebrating our heritage.',
    altText: 'Cultural musical performances on stage',
    targetSchool: 'all'
  },
  {
    id: 'gal-fb-v06',
    title: 'Annual Felicitation & Recognition Ceremony',
    category: 'Celebrations',
    imageUrl: '/rapid-schools/gallery/photos/poster_798529716599286.jpg',
    videoUrl: '/rapid-schools/gallery/videos/798529716599286.mp4',
    mediaType: 'video',
    caption: 'Celebrating academic distinction, board honors, and student leadership trophies.',
    altText: 'Annual prize distribution and awards assembly',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-v07',
    title: 'Patriotic Celebrations & Flag Hoisting',
    category: 'Celebrations',
    imageUrl: '/rapid-schools/gallery/photos/poster_1230369338489040.jpg',
    videoUrl: '/rapid-schools/gallery/videos/1230369338489040.mp4',
    mediaType: 'video',
    caption: 'Ceremonial flag salutation, national anthem chorus, and patriotic march-past by student house contingents.',
    altText: 'Independence Day flag hoisting assembly',
    targetSchool: 'all'
  },
  {
    id: 'gal-fb-v08',
    title: 'Rapid Dreamz: Junior Learning & Rhymes',
    category: 'Early Years',
    imageUrl: '/rapid-schools/gallery/photos/poster_1426754705716888.jpg',
    videoUrl: '/rapid-schools/gallery/videos/1426754705716888.mp4',
    mediaType: 'video',
    caption: 'Rapid Dreamz junior scholars participating in tactile learning games, puzzle coordination, and rhythm exercises.',
    altText: 'Junior kindergarten learning and playful activities',
    targetSchool: 'dreamz'
  },
  {
    id: 'gal-fb-v09',
    title: 'Inter-House Drill & Physical Conditioning',
    category: 'Sports',
    imageUrl: '/rapid-schools/gallery/photos/poster_1476739274464624.jpg',
    videoUrl: '/rapid-schools/gallery/videos/1476739274464624.mp4',
    mediaType: 'video',
    caption: 'Synchronized calisthenics, agility drills, and yoga postures promoting physical fitness and team cohesion.',
    altText: 'Students during physical education drills',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-v10',
    title: 'Saraswati Puja & Devotional Chorus',
    category: 'Arts & Culture',
    imageUrl: '/rapid-schools/gallery/photos/poster_1519727795795889.jpg',
    videoUrl: '/rapid-schools/gallery/videos/1519727795795889.mp4',
    mediaType: 'video',
    caption: 'Reverent invocation of Goddess Saraswati with student shloka chanting and devotional choral arrangements.',
    altText: 'Saraswati Puja devotional ceremony',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-v11',
    title: 'Annual Day Theatrical & Musical Gala',
    category: 'Arts & Culture',
    imageUrl: '/rapid-schools/gallery/photos/poster_1914517019148179.jpg',
    videoUrl: '/rapid-schools/gallery/videos/1914517019148179.mp4',
    mediaType: 'video',
    caption: 'Comprehensive theatrical plays, classical choreography, and auditorium productions performed before parents and dignitaries.',
    altText: 'Annual day stage performances and drama showcase',
    targetSchool: 'all'
  },
  {
    id: 'gal-fb-v12',
    title: 'Classroom Inquiry & Collaborative Study',
    category: 'Classrooms',
    imageUrl: '/rapid-schools/gallery/photos/poster_4129280310720278.jpg',
    videoUrl: '/rapid-schools/gallery/videos/4129280310720278.mp4',
    mediaType: 'video',
    caption: 'Students engaging in structured classroom discourse, public speaking practice, and collaborative problem-solving.',
    altText: 'Interactive classroom seminar and student presentation',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-v13',
    title: 'Ceremonial Parade & Guard of Honor',
    category: 'Celebrations',
    imageUrl: '/rapid-schools/gallery/photos/poster_907139858568404.jpg',
    videoUrl: '/rapid-schools/gallery/videos/907139858568404.mp4',
    mediaType: 'video',
    caption: 'Disciplined student battalion march-past, salute to the tricolor, and ceremonial brass band performance.',
    altText: 'Republic Day parade and inspection',
    targetSchool: 'all'
  },
  // 16 Authentic School Photographs
  {
    id: 'gal-fb-p01',
    title: 'Rapid Shakuntalayan School Crest & Gate',
    category: 'Campus',
    imageUrl: '/rapid-schools/gallery/photos/photo_014.jpg',
    mediaType: 'photo',
    caption: 'Official institutional crest and perimeter entrance at Tekuna Farm, Bodh Gaya Road.',
    altText: 'School campus entrance gate and official insignia',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p02',
    title: 'Tekuna Farm Main Academic Complex',
    category: 'Campus',
    imageUrl: '/rapid-schools/gallery/photos/photo_015.jpg',
    mediaType: 'photo',
    caption: 'Sprawling green school estate and modern multi-story academic buildings on Bodh Gaya Road.',
    altText: 'Rapid Shakuntalayan main academic campus building',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p03',
    title: 'Gandhi Jayanti & Shastri Jayanti Commemoration',
    category: 'Celebrations',
    imageUrl: '/rapid-schools/gallery/photos/photo_006.jpg',
    mediaType: 'photo',
    caption: 'Staff and student leaders offering floral tributes on Mahatma Gandhi and Lal Bahadur Shastri Jayanti.',
    altText: 'Gandhi Jayanti commemorative tribute ceremony',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p04',
    title: 'Inter-House Sports Meet & Parade',
    category: 'Sports',
    imageUrl: '/rapid-schools/gallery/photos/photo_005.jpg',
    mediaType: 'photo',
    caption: 'House march-past and athletic assembly on the school playground.',
    altText: 'Students marching in house colors on sports field',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p05',
    title: 'Classroom Scholastic Inquiry & Debate',
    category: 'Classrooms',
    imageUrl: '/rapid-schools/gallery/photos/photo_003.jpg',
    mediaType: 'photo',
    caption: 'Interactive secondary classroom environment emphasizing disciplined study and peer debate.',
    altText: 'Students and educators in modern classroom',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p06',
    title: 'Faculty Mentorship & Teacher Development',
    category: 'Campus',
    imageUrl: '/rapid-schools/gallery/photos/photo_004.jpg',
    mediaType: 'photo',
    caption: 'Dedicated educators collaborating on pedagogical frameworks, lesson planning, and student mentorship.',
    altText: 'Teaching staff and faculty symposium',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p07',
    title: 'National Celebration Assembly & Speeches',
    category: 'Celebrations',
    imageUrl: '/rapid-schools/gallery/photos/photo_007.jpg',
    mediaType: 'photo',
    caption: 'Distinguished guests, faculty, and student council gathered for ceremonial national day addresses.',
    altText: 'Dignitaries addressing students during national celebration',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p08',
    title: 'Morning Assembly & School Discipline',
    category: 'Campus',
    imageUrl: '/rapid-schools/gallery/photos/photo_008.jpg',
    mediaType: 'photo',
    caption: 'Orderly morning assembly rows, uniform inspection, and collective pledge recitation.',
    altText: 'Students lined up during morning assembly',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p09',
    title: 'Applied Science & Discovery Laboratory',
    category: 'Classrooms',
    imageUrl: '/rapid-schools/gallery/photos/photo_010.jpg',
    mediaType: 'photo',
    caption: 'Curious scholars conducting observational science experiments and apparatus measurements.',
    altText: 'Science laboratory workspace with students',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p10',
    title: 'Rapid Dreamz: Early Sensory Learning',
    category: 'Early Years',
    imageUrl: '/rapid-schools/gallery/photos/photo_011.jpg',
    mediaType: 'photo',
    caption: 'Joyful tactile exploration and motor skill enrichment at the A.P. Colony junior campus.',
    altText: 'Early years learners exploring sensory games',
    targetSchool: 'dreamz'
  },
  {
    id: 'gal-fb-p11',
    title: 'Rapid Dreamz: Kindergarten Play & Story Circle',
    category: 'Early Years',
    imageUrl: '/rapid-schools/gallery/photos/photo_012.jpg',
    mediaType: 'photo',
    caption: 'Interactive storytelling circle, foundational literacy building, and social emotional bonding.',
    altText: 'Kindergarten children enjoying group learning at Rapid Dreamz',
    targetSchool: 'dreamz'
  },
  {
    id: 'gal-fb-p12',
    title: 'Student Leadership Council & Prefects',
    category: 'Campus',
    imageUrl: '/rapid-schools/gallery/photos/photo_016.jpg',
    mediaType: 'photo',
    caption: 'Elected student prefects and house captains taking leadership oath for campus order and peer support.',
    altText: 'Student leaders and prefect body investiture',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p13',
    title: 'Academic Honors & Inter-School Laurels',
    category: 'Celebrations',
    imageUrl: '/rapid-schools/gallery/photos/photo_017.jpg',
    mediaType: 'photo',
    caption: 'Merit scholars awarded trophies and certificates for distinguished performance in regional olympiads.',
    altText: 'Scholars receiving academic trophies and certificates',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p14',
    title: 'Creative Visual Arts & Painting Studio',
    category: 'Arts & Culture',
    imageUrl: '/rapid-schools/gallery/photos/photo_018.jpg',
    mediaType: 'photo',
    caption: 'Student artwork gallery featuring vibrant watercolors, sketching, and cultural craft projects.',
    altText: 'Student art exhibition and fine arts showcase',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p15',
    title: 'Athletic Sports Complex & Games Field',
    category: 'Sports',
    imageUrl: '/rapid-schools/gallery/photos/photo_019.jpg',
    mediaType: 'photo',
    caption: 'Extensive sports facilities supporting football, cricket nets, kabaddi, and athletic track training.',
    altText: 'School playground and sporting facilities',
    targetSchool: 'shakuntlayan'
  },
  {
    id: 'gal-fb-p16',
    title: 'Rapid Dreamz: Creative Activity & Play Hub',
    category: 'Early Years',
    imageUrl: '/rapid-schools/gallery/photos/photo_020.jpg',
    mediaType: 'photo',
    caption: 'Child-safe indoor arena equipped with cognitive puzzles, building blocks, and vibrant learning aids.',
    altText: 'Early childhood play and activity zone at Rapid Dreamz',
    targetSchool: 'dreamz'
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
