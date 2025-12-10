export const siteData = {
  en: {
    nav: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    hero: {
      initials: 'M . H',
      name: 'MAHMOUD OMAR ALI HASSANI',
      subtitle: 'Full Stack Developer | MIS Graduate | Programming Instructor',
      caption: 'Building the future, one line of code at a time',
      cta: {
        cv: 'DOWNLOAD CV',
        whatsapp: 'CONTACT ON WHATSAPP',
      },
    },
    about: {
      title: 'About Me',
      imageAlt: 'Photo of Mahmoud Omar Ali Hassani',
      bio: "A passionate MIS graduate and Full-Stack Developer from Iraq with a knack for crafting elegant solutions to complex problems. As a programming instructor, I'm dedicated to sharing knowledge and inspiring the next generation of developers. My journey is driven by a constant quest for learning and a passion for building innovative technology.",
      roles: [
        { icon: 'grad', title: 'MIS Graduate', desc: 'Bachelor\'s in Management Information Systems.' },
        { icon: 'dev', title: 'Full Stack Developer', desc: 'Building robust web and mobile applications.' },
        { icon: 'instructor', title: 'Programming Instructor', desc: 'Teaching and mentoring aspiring coders.' },
      ],
    },
    skills: {
      title: 'Skills',
      categories: [
        {
          name: 'Web Development',
          icon: 'web',
          skills: [
            { name: 'HTML', level: 95 },
            { name: 'CSS', level: 90 },
            { name: 'PHP', level: 80 },
            { name: 'ASP.NET', level: 75 },
          ],
        },
        {
          name: 'Programming',
          icon: 'programming',
          skills: [
            { name: 'Python', level: 90 },
            { name: 'C++', level: 85 },
            { name: 'C#', level: 88 },
            { name: 'SQL', level: 92 },
          ],
        },
        {
          name: 'Tools & Technologies',
          icon: 'tools',
          skills: [
            { name: 'Git & GitHub', level: 90 },
            { name: 'VS Code', level: 95 },
            { name: 'Linux', level: 70 },
            { name: 'Docker', level: 60 },
          ],
        },
        {
          name: 'Design',
          icon: 'design',
          skills: [
            { name: 'Photoshop', level: 80 },
            { name: 'UI/UX Basics', level: 75 },
            { name: 'Figma', level: 70 },
          ],
        },
        {
          name: 'Soft Skills',
          icon: 'soft',
          skills: [
            { name: 'Leadership', level: 90 },
            { name: 'Planning', level: 85 },
            { name: 'Communication', level: 95 },
          ],
        },
      ],
    },
    projects: {
        title: "My Projects",
        linkText: "Live Demo",
        list: [
            { id: "project1", title: "Aduai", description: "A comprehensive platform for supplications and prayers.", tech: ["React", "Node.js", "Firebase"], link: "#" },
            { id: "project2", title: "Nabd Jawhar", description: "E-learning platform focused on personal development.", tech: ["Next.js", "TypeScript", "PostgreSQL"], link: "#" },
            { id: "project3", title: "Abaad Institute", description: "Official website for a leading educational institute.", tech: ["PHP", "MySQL", "Bootstrap"], link: "#" },
            { id: "project4", title: "Saqia Charity", description: "Donation and charity management system.", tech: ["Laravel", "Vue.js", "Stripe"], link: "#" },
            { id: "project5", title: "Organization Developer", description: "Internal tool for organizational structure planning.", tech: ["ASP.NET", "C#", "SQL Server"], link: "#" },
            { id: "project6", title: "Everest", description: "Project management and team collaboration tool.", tech: ["Python", "Django", "React"], link: "#" },
        ]
    },
    education: {
        title: "Education",
        degree: "Bachelor's in Management Information Systems (MIS)",
        university: "University of Information Technology and Communications",
        date: "2018 - 2022",
        gpaLabel: "GPA",
        gpa: "86.12%"
    },
    certificates: {
        title: "Certificates",
        list: [
            { id: "cert1", title: "Advanced React", provider: "Coursera", date: "2023", category: "Web" },
            { id: "cert2", title: "Python for Data Science", provider: "edX", date: "2023", category: "Programming" },
            { id: "cert3", title: "UI/UX Design Fundamentals", provider: "Udemy", date: "2022", category: "Design" },
            { id: "cert4", title: "Node.js Professional", provider: "Vivasoft", date: "2024", category: "Web" },
            { id: "cert5", title: "Advanced C#", provider: "Pluralsight", date: "2023", category: "Programming" },
        ]
    },
    books: {
        title: "My Books",
        authorLabel: "By",
        pagesLabel: "pages",
        cta: "Order via WhatsApp",
        whatsappMessage: "Hello, I want to order the book: [Book Title]. My name is ",
        list: [
            { id: "book1", title: "The Art of C++", description: "A deep dive into modern C++ features and best practices.", author: "Mahmoud Hassani", pages: 350, rating: 4.8 },
            { id: "book2", title: "Pythonic Code", description: "Writing clean, efficient, and readable Python.", author: "Mahmoud Hassani", pages: 280, rating: 4.9 },
        ]
    },
    gallery: {
        title: "Training Gallery",
        imageAlt: "Photo from a training session"
    },
    courses: {
        title: "YouTube Courses",
        cta: "Watch on YouTube",
        list: [
            { id: "course1", title: "Full Stack Web Development Masterclass", description: "A comprehensive course covering everything from HTML to advanced backend concepts with Node.js.", link: "#", featured: true },
            { id: "course2", title: "Introduction to Python", description: "Begin your programming journey with Python.", link: "#", featured: false },
            { id: "course3", title: "Data Structures in C++", description: "Master fundamental data structures.", link: "#", featured: false },
            { id: "course4", title: "SQL for Beginners", description: "Learn to manage and query databases.", link: "#", featured: false },
        ]
    },
    contact: {
        title: "Get in Touch",
        info: {
            title: "Contact Information",
            description: "Feel free to reach out to me for collaborations, inquiries, or just to say hi! I'm always open to discussing new projects and ideas.",
            email: "mahmoud@example.com",
            phone: "+964 123 456 7890",
            location: "Baghdad, Iraq",
        },
        form: {
            name: "Full Name",
            email: "Email Address",
            message: "Your Message",
            submit: "Send Message",
            whatsapp: "Chat on WhatsApp",
            validation: {
                name: "Name must be at least 2 characters.",
                email: "Invalid email address.",
                message: "Message must be at least 10 characters.",
            },
            toast: {
                title: "Message Sent!",
                description: "Thank you for reaching out. I'll get back to you soon.",
            }
        }
    },
    footer: {
        copyright: "Mahmoud Omar Ali Hassani. All rights reserved."
    },
    socialLinks: [
      { name: "GitHub", icon: "github", url: "https://github.com" },
      { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
      { name: "YouTube", icon: "youtube", url: "https://youtube.com" },
      { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
    ],
  },
  ar: {
    nav: [
      { name: 'عني', href: '#about' },
      { name: 'المهارات', href: '#skills' },
      { name: 'المشاريع', href: '#projects' },
      { name: 'تواصل', href: '#contact' },
    ],
    hero: {
      initials: 'م . ح',
      name: 'محمود عمر علي حسني',
      subtitle: 'مطور ويب متكامل | خريج نظم معلومات إدارية | مدرب برمجة',
      caption: 'بناء المستقبل، سطراً برمجياً في كل مرة',
      cta: {
        cv: 'تحميل السيرة الذاتية',
        whatsapp: 'تواصل عبر واتساب',
      },
    },
    about: {
      title: 'عني',
      imageAlt: 'صورة محمود عمر علي حسني',
      bio: 'خريج نظم معلومات إدارية شغوف ومطور ويب متكامل من العراق، أمتلك موهبة في صياغة حلول أنيقة للمشكلات المعقدة. بصفتي مدرب برمجة، أكرس نفسي لمشاركة المعرفة وإلهام الجيل القادم من المطورين. رحلتي مدفوعة بسعي دائم للتعلم وشغف ببناء تكنولوجيا مبتكرة.',
      roles: [
        { icon: 'grad', title: 'خريج نظم معلومات إدارية', desc: 'بكالوريوس في نظم المعلومات الإدارية.' },
        { icon: 'dev', title: 'مطور ويب متكامل', desc: 'بناء تطبيقات ويب وموبايل قوية.' },
        { icon: 'instructor', title: 'مدرب برمجة', desc: 'تعليم وتوجيه المبرمجين الطموحين.' },
      ],
    },
    skills: {
      title: 'المهارات',
      categories: [
        {
          name: 'تطوير الويب',
          icon: 'web',
          skills: [
            { name: 'HTML', level: 95 },
            { name: 'CSS', level: 90 },
            { name: 'PHP', level: 80 },
            { name: 'ASP.NET', level: 75 },
          ],
        },
        {
          name: 'البرمجة',
          icon: 'programming',
          skills: [
            { name: 'Python', level: 90 },
            { name: 'C++', level: 85 },
            { name: 'C#', level: 88 },
            { name: 'SQL', level: 92 },
          ],
        },
        {
          name: 'الأدوات والتقنيات',
          icon: 'tools',
          skills: [
            { name: 'Git & GitHub', level: 90 },
            { name: 'VS Code', level: 95 },
            { name: 'Linux', level: 70 },
            { name: 'Docker', level: 60 },
          ],
        },
        {
          name: 'التصميم',
          icon: 'design',
          skills: [
            { name: 'Photoshop', level: 80 },
            { name: 'أساسيات UI/UX', level: 75 },
            { name: 'Figma', level: 70 },
          ],
        },
        {
          name: 'المهارات الشخصية',
          icon: 'soft',
          skills: [
            { name: 'القيادة', level: 90 },
            { name: 'التخطيط', level: 85 },
            { name: 'التواصل', level: 95 },
          ],
        },
      ],
    },
    projects: {
        title: "مشاريعي",
        linkText: "عرض مباشر",
        list: [
            { id: "project1", title: "أدعية", description: "منصة شاملة للأدعية والأوراد.", tech: ["React", "Node.js", "Firebase"], link: "#" },
            { id: "project2", title: "نبض جوهر", description: "منصة تعليم إلكتروني تركز على تطوير الذات.", tech: ["Next.js", "TypeScript", "PostgreSQL"], link: "#" },
            { id: "project3", title: "معهد أبعاد", description: "الموقع الرسمي لمعهد تعليمي رائد.", tech: ["PHP", "MySQL", "Bootstrap"], link: "#" },
            { id: "project4", title: "جمعية ساقيا", description: "نظام لإدارة التبرعات والأعمال الخيرية.", tech: ["Laravel", "Vue.js", "Stripe"], link: "#" },
            { id: "project5", title: "مطوّر المنظمات", description: "أداة داخلية لتخطيط الهياكل التنظيمية.", tech: ["ASP.NET", "C#", "SQL Server"], link: "#" },
            { id: "project6", title: "إيفرست", description: "أداة لإدارة المشاريع والتعاون بين الفرق.", tech: ["Python", "Django", "React"], link: "#" },
        ]
    },
    education: {
        title: "التعليم",
        degree: "بكالوريوس في نظم المعلومات الإدارية (MIS)",
        university: "جامعة تكنولوجيا المعلومات والاتصالات",
        date: "2018 - 2022",
        gpaLabel: "المعدل",
        gpa: "86.12%"
    },
    certificates: {
        title: "الشهادات",
        list: [
            { id: "cert1", title: "React المتقدم", provider: "Coursera", date: "2023", category: "الويب" },
            { id: "cert2", title: "Python لعلم البيانات", provider: "edX", date: "2023", category: "البرمجة" },
            { id: "cert3", title: "أساسيات تصميم UI/UX", provider: "Udemy", date: "2022", category: "التصميم" },
            { id: "cert4", title: "Node.js للمحترفين", provider: "Vivasoft", date: "2024", category: "الويب" },
            { id: "cert5", title: "C# المتقدم", provider: "Pluralsight", date: "2023", category: "البرمجة" },
        ]
    },
    books: {
        title: "كتبي",
        authorLabel: "تأليف",
        pagesLabel: "صفحة",
        cta: "اطلب عبر واتساب",
        whatsappMessage: "مرحباً، أريد طلب كتاب: [Book Title]. اسمي هو ",
        list: [
            { id: "book1", title: "فن لغة C++", description: "نظرة عميقة على ميزات C++ الحديثة وأفضل الممارسات.", author: "محمود حسني", pages: 350, rating: 4.8 },
            { id: "book2", title: "الكود البايثوني", description: "كتابة كود Python نظيف وفعال ومقروء.", author: "محمود حسني", pages: 280, rating: 4.9 },
        ]
    },
    gallery: {
        title: "معرض التدريب",
        imageAlt: "صورة من جلسة تدريبية"
    },
    courses: {
        title: "دورات يوتيوب",
        cta: "شاهد على يوتيوب",
        list: [
            { id: "course1", title: "ماستركلاس تطوير الويب المتكامل", description: "دورة شاملة تغطي كل شيء من HTML إلى مفاهيم الواجهة الخلفية المتقدمة مع Node.js.", link: "#", featured: true },
            { id: "course2", title: "مقدمة في بايثون", description: "ابدأ رحلتك البرمجية مع بايثون.", link: "#", featured: false },
            { id: "course3", title: "هياكل البيانات في C++", description: "أتقن هياكل البيانات الأساسية.", link: "#", featured: false },
            { id: "course4", title: "SQL للمبتدئين", description: "تعلم إدارة واستعلام قواعد البيانات.", link: "#", featured: false },
        ]
    },
    contact: {
        title: "تواصل معي",
        info: {
            title: "معلومات التواصل",
            description: "لا تتردد في التواصل معي للتعاون أو الاستفسارات أو حتى لإلقاء التحية! أنا منفتح دائمًا لمناقشة المشاريع والأفكار الجديدة.",
            email: "mahmoud@example.com",
            phone: "+964 123 456 7890",
            location: "بغداد، العراق",
        },
        form: {
            name: "الاسم الكامل",
            email: "البريد الإلكتروني",
            message: "رسالتك",
            submit: "إرسال الرسالة",
            whatsapp: "محادثة عبر واتساب",
            validation: {
                name: "يجب أن يتكون الاسم من حرفين على الأقل.",
                email: "بريد إلكتروني غير صالح.",
                message: "يجب أن تتكون الرسالة من 10 أحرف على الأقل.",
            },
            toast: {
                title: "تم إرسال الرسالة!",
                description: "شكراً لتواصلك. سأرد عليك قريباً.",
            }
        }
    },
    footer: {
        copyright: "محمود عمر علي حسني. جميع الحقوق محفوظة."
    },
    socialLinks: [
      { name: "GitHub", icon: "github", url: "https://github.com" },
      { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
      { name: "YouTube", icon: "youtube", url: "https://youtube.com" },
      { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
    ],
  },
};
