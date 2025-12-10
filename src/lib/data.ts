
export const siteData = {
  en: {
    nav: [
      { name: 'About', href: '#about' },
      { name: 'Experience', href: '#experience' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    hero: {
      initials: 'M . H',
      name: 'MAHMOUD OMAR ALI HASSANI',
      subtitle: 'Management Information Systems Graduate | Full Stack Web Developer',
      caption: "Ambitious and practical MIS graduate with a strong foundation in Full Stack Development and AI. Proven track record of building 10+ deployed applications. Experienced in technical training and leadership.",
      cta: {
        cv: 'DOWNLOAD CV',
        whatsapp: 'CONTACT ON WHATSAPP',
      },
    },
    about: {
      title: 'About Me',
      imageAlt: 'Photo of Mahmoud Omar Ali Hassani',
      bio: "Ambitious and practical Management Information Systems (MIS) graduate (2025) with a strong foundation in Full Stack Web Development and AI integration. Proven track record of building 10+ deployed web applications and platforms. Experienced in technical training and leadership, having instructed students in programming languages (Python, C#, SQL). Seeking to leverage strong technical skills, strategic planning abilities, and passion for continuous learning in a challenging IT or Software Development role.",
      roles: [
        { icon: 'grad', title: 'MIS Graduate', desc: 'Bachelor\'s in Management Information Systems.' },
        { icon: 'dev', title: 'Full Stack Developer', desc: 'Building robust web and mobile applications.' },
        { icon: 'instructor', title: 'Programming Instructor', desc: 'Teaching and mentoring aspiring coders.' },
      ],
    },
    experience: {
        title: "Professional Experience",
        list: [
            {
                role: "Programming Instructor",
                company: "Abaad Institute",
                date: "2024 – Present",
                points: [
                    "Delivered comprehensive training courses in Python, C++, C#, SQL, and Web Development (HTML, CSS).",
                    "Taught Windows Form applications and database management to diverse groups of students.",
                    "Mentored students in practical coding exercises, enhancing their problem-solving skills."
                ]
            },
            {
                role: "Educational Content Creator",
                company: "YouTube (Mahmoud Hassani Channel)",
                date: "2024 – Present",
                points: [
                    "Created and published technical tutorials focusing on programming and software development.",
                    "Built a community of learners by simplifying complex coding concepts."
                ]
            }
        ]
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
        degree: "Bachelor of Management Information Systems (MIS)",
        university: "Hadramout University, College of Administrative Sciences",
        date: "2025",
        gpaLabel: "GPA",
        gpa: "86.12% (Very Good)"
    },
    certificates: {
        title: "Certificates",
        list: [
            { id: "cert_ai1", title: "Elements of AI", provider: "Univ. of Helsinki", date: "2023", category: "AI & Data" },
            { id: "cert_ai2", title: "AI for Everyone", provider: "ITI", date: "2023", category: "AI & Data" },
            { id: "cert_ai3", title: "Prompt Engineering", provider: "Dubai Future Foundation", date: "2023", category: "AI & Data" },
            { id: "cert_ai4", title: "Business Analytics with Excel", provider: "Simplilearn", date: "2022", category: "AI & Data" },
            { id: "cert_cyber1", title: "Career Essentials in System Administration", provider: "Microsoft", date: "2024", category: "Cybersecurity & IT" },
            { id: "cert_cyber2", title: "Malware Analysis Fundamentals", provider: "Online", date: "2023", category: "Cybersecurity & IT" },
            { id: "cert_cyber3", title: "Intro to Networks", provider: "Edraak", date: "2022", category: "Cybersecurity & IT" },
            { id: "cert_dev1", title: "Git & GitHub", provider: "Mind Luster", date: "2024", category: "Development" },
            { id: "cert_dev2", title: "Intro to C++", provider: "Sololearn", date: "2021", category: "Development" },
            { id: "cert_dev3", title: "Full HTML for Beginners", provider: "Online", date: "2021", category: "Development" },
            { id: "cert_biz1", title: "Fundamentals of Digital Marketing", provider: "Google", date: "2023", category: "Business & Marketing" },
            { id: "cert_biz2", title: "Strategic Planning", provider: "Sadeem", date: "2022", category: "Business & Marketing" },
            { id: "cert_biz3", title: "Business Model Canvas", provider: "Rwaq", date: "2022", category: "Business & Marketing" },
        ]
    },
    books: {
        title: "My Books",
        authorLabel: "By",
        pagesLabel: "pages",
        cta: "Order via WhatsApp",
        whatsappMessage: "Hello, I want to order the book: [Book Title]. My name is ",
        list: [
            { id: "book_python", title: "Python Basics for Beginners", description: "A simple and practical introduction to learning the basics of the Python language with practical examples suitable for beginners.", author: "Eng. Mahmoud Al-Hassani", pages: 135, rating: 4.9 },
            { id: "book_sql", title: "SQL Databases", description: "A practical explanation of SQL concepts, creating tables, queries, and dealing with databases step by step.", author: "Eng. Mahmoud Al-Hassani", pages: 107, rating: 4.8 },
            { id: "book_winforms", title: "Visual Programming - Windows Forms", description: "Your guide to learning how to design graphical interfaces and connect them to code using Windows Forms.", author: "Eng. Mahmoud Al-Hassani", pages: 105, rating: 4.7 },
            { id: "book_csharp_console", title: "Learn Programming Basics - Console (C#)", description: "Learn the basics of programming in C# through console applications in a simple and clear way.", author: "Eng. Mahmoud Al-Hassani", pages: 133, rating: 4.8 },
        ]
    },
    gallery: {
        title: "Training Gallery",
        imageAlt: "Photo from a training session"
    },
    courses: {
        title: "My YouTube Channel & Courses",
        cta: "Watch on YouTube",
        channel: {
            id: "channel_main",
            title: "Mahmoud Code - Educational Channel",
            description: "My channel is dedicated to simplifying programming and development concepts. I share tutorials and courses on various technologies to help build the next generation of developers. Subscribe to stay updated!",
            link: "https://www.youtube.com/@mahmoud_code",
        },
        list: [
            { id: "course_os", title: "Operating Systems Course - Ubuntu", description: "Learn the basics of the Ubuntu operating system, how to use the terminal, and manage files.", link: "https://youtube.com/playlist?list=PLBqHNq4xMtKbvnceyc0XIKjCGeeP8PjtV", featured: false, rating: 5 },
            { id: "course_csharp", title: "C# Programming Fundamentals", description: "Start your programming journey by learning variables, loops, conditions, and functions in C#.", link: "https://youtube.com/playlist?list=PLBqHNq4xMtKaS3omNaEGCos8igXSP3wTK", featured: false, rating: 5 },
            { id: "course_winforms", title: "Visual Programming Course - Windows Forms", description: "Learn to design professional graphical interfaces and connect them to code using C#.", link: "https://youtube.com/playlist?list=PLBqHNq4xMtKZu1Zfpl7dUTM7OPjWtvERf", featured: false, rating: 4 },
            { id: "course_web", title: "Intro to Web - HTML + CSS", description: "The basics of building web pages and styling them using HTML and CSS in a simple and clear way.", link: "https://youtube.com/playlist?list=PLBqHNq4xMtKaMSF0YMx7xCzc2Eu79IDiv", featured: false, rating: 4 },
            { id: "course_sql", title: "Intro to Databases - SQL", description: "Learn how to create databases, execute queries, and work with tables.", link: "https://youtube.com/playlist?list=PLBqHNq4xMtKYorFE5tCByMEPYs4odgN5n", featured: false, rating: 5 },
            { id: "course_misc", title: "Miscellaneous Tech Tutorials", description: "A variety of quick and practical technical lessons in multiple fields.", link: "https://youtube.com/playlist?list=PLBqHNq4xMtKa8eUleU43wcY23Exhvhbkt", featured: false, rating: 4.3 },
        ]
    },
    contact: {
        title: "Get in Touch",
        info: {
            title: "Contact Information",
            description: "Feel free to reach out to me for collaborations, inquiries, or just to say hi! I'm always open to discussing new projects and ideas.",
            email: "pr.mahmoud.20@gmail.com",
            phone: "+967 775 258 830",
            location: "Hadramout, Yemen",
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
      { name: "GitHub", icon: "github", url: "https://github.com/alqaysar217" },
      { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/mahmoudhassani/" },
      { name: "YouTube", icon: "youtube", url: "https://www.youtube.com/@mahmoud_code" },
      { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/mahmoud_codes/" },
    ],
  },
  ar: {
    nav: [
      { name: 'عني', href: '#about' },
      { name: 'الخبرة', href: '#experience' },
      { name: 'المهارات', href: '#skills' },
      { name: 'المشاريع', href: '#projects' },
      { name: 'تواصل', href: '#contact' },
    ],
    hero: {
      initials: 'م . ح',
      name: 'محمود عمر علي حسني',
      subtitle: 'خريج نظم معلومات إدارية | مطور ويب متكامل',
      caption: 'خريج نظم معلومات إدارية طموح وعملي ولدي أساس قوي في تطوير الويب المتكامل والذكاء الاصطناعي. سجل حافل ببناء أكثر من 10 تطبيقات منشورة. لدي خبرة في التدريب الفني والقيادة.',
      cta: {
        cv: 'تحميل السيرة الذاتية',
        whatsapp: 'تواصل عبر واتساب',
      },
    },
    about: {
      title: 'عني',
      imageAlt: 'صورة محمود عمر علي حسني',
      bio: 'خريج نظم معلومات إدارية (2025) طموح وعملي، ولدي أساس قوي في تطوير الويب المتكامل وتكامل الذكاء الاصطناعي. سجل حافل ببناء أكثر من 10 تطبيقات ومنصات ويب تم نشرها. لدي خبرة في التدريب الفني والقيادة، حيث قمت بتدريب الطلاب على لغات البرمجة (Python، C#، SQL). أسعى إلى الاستفادة من المهارات التقنية القوية، وقدرات التخطيط الاستراتيجي، والشغف بالتعلم المستمر في دور مليء بالتحديات في مجال تكنولوجيا المعلومات أو تطوير البرمجيات.',
      roles: [
        { icon: 'grad', title: 'خريج نظم معلومات إدارية', desc: 'بكالوريوس في نظم المعلومات الإدارية.' },
        { icon: 'dev', title: 'مطور ويب متكامل', desc: 'بناء تطبيقات ويب وموبايل قوية.' },
        { icon: 'instructor', title: 'مدرب برمجة', desc: 'تعليم وتوجيه المبرمجين الطموحين.' },
      ],
    },
    experience: {
        title: "الخبرة المهنية",
        list: [
            {
                role: "مدرب برمجة",
                company: "معهد أبعاد",
                date: "2024 – الآن",
                points: [
                    "قدمت دورات تدريبية شاملة في Python, C++, C#, SQL, وتطوير الويب (HTML, CSS).",
                    "درّست تطبيقات Windows Form وإدارة قواعد البيانات لمجموعات متنوعة من الطلاب.",
                    "وجهت الطلاب في تمارين برمجية عملية، مما عزز مهاراتهم في حل المشكلات."
                ]
            },
            {
                role: "صانع محتوى تعليمي",
                company: "يوتيوب (قناة محمود حسني)",
                date: "2024 – الآن",
                points: [
                    "أنشأت ونشرت دروسًا فنية تركز على البرمجة وتطوير البرمجيات.",
                    "بنيت مجتمعًا من المتعلمين من خلال تبسيط مفاهيم البرمجة المعقدة."
                ]
            }
        ]
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
        university: "جامعة حضرموت، كلية العلوم الإدارية",
        date: "2025",
        gpaLabel: "المعدل",
        gpa: "86.12% (جيد جداً)"
    },
    certificates: {
        title: "الشهادات",
        list: [
            { id: "cert_ai1", title: "عناصر الذكاء الاصطناعي", provider: "جامعة هلسنكي", date: "2023", category: "AI & Data" },
            { id: "cert_ai2", title: "الذكاء الاصطناعي للجميع", provider: "ITI", date: "2023", category: "AI & Data" },
            { id: "cert_ai3", title: "هندسة الأوامر", provider: "مؤسسة دبي للمستقبل", date: "2023", category: "AI & Data" },
            { id: "cert_ai4", title: "تحليل الأعمال باستخدام Excel", provider: "Simplilearn", date: "2022", category: "AI & Data" },
            { id: "cert_cyber1", title: "أساسيات مهنة إدارة النظم", provider: "Microsoft", date: "2024", category: "Cybersecurity & IT" },
            { id: "cert_cyber2", title: "أساسيات تحليل البرمجيات الخبيثة", provider: "عبر الإنترنت", date: "2023", category: "Cybersecurity & IT" },
            { id: "cert_cyber3", title: "مقدمة في الشبكات", provider: "إدراك", date: "2022", category: "Cybersecurity & IT" },
            { id: "cert_dev1", title: "Git & GitHub", provider: "Mind Luster", date: "2024", category: "Development" },
            { id: "cert_dev2", title: "مقدمة في C++", provider: "Sololearn", date: "2021", category: "Development" },
            { id: "cert_dev3", title: "HTML الكامل للمبتدئين", provider: "عبر الإنترنت", date: "2021", category: "Development" },
            { id: "cert_biz1", title: "أساسيات التسويق الرقمي", provider: "Google", date: "2023", category: "Business & Marketing" },
            { id: "cert_biz2", title: "التخطيط الاستراتيجي", provider: "سديم", date: "2022", category: "Business & Marketing" },
            { id: "cert_biz3", title: "نموذج العمل التجاري", provider: "رواق", date: "2022", category: "Business & Marketing" },
        ]
    },
    books: {
        title: "كتبي",
        authorLabel: "تأليف",
        pagesLabel: "صفحة",
        cta: "اطلب عبر واتساب",
        whatsappMessage: "مرحباً، أريد طلب كتاب: [Book Title]. اسمي هو ",
        list: [
            { id: "book_python", title: "أساسيات بايثون للمبتدئين", description: "مدخل مبسط وعملي لتعلم أساسيات لغة بايثون مع أمثلة تطبيقية مناسبة للمبتدئين.", author: "م. محمود الحسني", pages: 135, rating: 4.9 },
            { id: "book_sql", title: "قواعد البيانات SQL", description: "شرح عملي لمفاهيم SQL، إنشاء الجداول، الاستعلامات، والتعامل مع قواعد البيانات خطوة بخطوة.", author: "م. محمود الحسني", pages: 107, rating: 4.8 },
            { id: "book_winforms", title: "البرمجة المرئية Windows Forms", description: "دليلك لتعلم تصميم الواجهات الرسومية وربطها بالكود باستخدام Windows Forms.", author: "م. محمود الحسني", pages: 105, rating: 4.7 },
            { id: "book_csharp_console", title: "تعلم أساسيات البرمجة Console (C#)", description: "تعلم أساسيات البرمجة بلغة C# عبر تطبيقات الكونسول بشكل مبسط وواضح.", author: "م. محمود الحسني", pages: 133, rating: 4.8 },
        ]
    },
    gallery: {
        title: "معرض التدريب",
        imageAlt: "صورة من جلسة تدريبية"
    },
    courses: {
        title: "قناتي على يوتيوب ودوراتي",
        cta: "شاهد على يوتيوب",
        channel: {
            id: "channel_main",
            title: "محمود كود - قناة تعليمية",
            description: "قناتي مخصصة لتبسيط مفاهيم البرمجة والتطوير. أشارك دروسًا ودورات في تقنيات مختلفة للمساعدة في بناء الجيل القادم من المطورين. اشترك لتبقى على اطلاع!",
            link: "https://www.youtube.com/@mahmoud_code",
        },
        list: [
            { id: "course_os", title: "كورس نظم تشغيل – أوبونتو", description: "تعلم أساسيات نظام تشغيل أوبونتو وكيفية التعامل مع الطرفية وإدارة الملفات.", link: "https://youtube.com/playlist?list=PLBqHNq4xMtKbvnceyc0XIKjCGeeP8PjtV", featured: false, rating: 5 },
            { id: "course_csharp", title: "أساسيات البرمجة بلغة C#", description: "ابدأ رحلتك في البرمجة بتعلم المتغيرات، الحلقات، الشروط، والدوال بلغة #C.", link: "https://youtube.com/playlist?list=PLBqHNq4xMtKaS3omNaEGCos8igXSP3wTK", featured: false, rating: 5 },
            { id: "course_winforms", title: "كورس البرمجة المرئية – Windows Forms", description: "تعلم تصميم واجهات رسومية احترافية وربطها بالكود باستخدام C#.", link: "https://youtube.com/playlist?list=PLBqHNq4xMtKZu1Zfpl7dUTM7OPjWtvERf", featured: false, rating: 4 },
            { id: "course_web", title: "مقدمة في الويب – HTML + CSS", description: "أساسيات بناء صفحات الويب والتصميم باستخدام HTML و CSS بطريقة بسيطة وواضحة.", link: "https://youtube.com/playlist?list=PLBqHNq4xMtKaMSF0YMx7xCzc2Eu79IDiv", featured: false, rating: 4 },
            { id: "course_sql", title: "مقدمة قواعد البيانات – SQL", description: "تعلم كيفية إنشاء قواعد البيانات، تنفيذ الاستعلامات، والتعامل مع الجداول.", link: "https://youtube.com/playlist?list=PLBqHNq4xMtKYorFE5tCByMEPYs4odgN5n", featured: false, rating: 5 },
            { id: "course_misc", title: "دروس تقنية متنوعة", description: "مجموعة متنوعة من الدروس التقنية في مجالات متعددة بشكل عملي وسريع.", link: "https://youtube.com/playlist?list=PLBqHNq4xMtKa8eUleU43wcY23Exhvhbkt", featured: false, rating: 4.3 },
        ]
    },
    contact: {
        title: "تواصل معي",
        info: {
            title: "معلومات التواصل",
            description: "لا تتردد في التواصل معي للتعاون أو الاستفسارات أو حتى لإلقاء التحية! أنا منفتح دائمًا لمناقشة المشاريع والأفكار الجديدة.",
            email: "pr.mahmoud.20@gmail.com",
            phone: "+967 775 258 830",
            location: "حضرموت، اليمن",
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
      { name: "GitHub", icon: "github", url: "https://github.com/alqaysar217" },
      { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/mahmoudhassani/" },
      { name: "YouTube", icon: "youtube", url: "https://www.youtube.com/@mahmoud_code" },
      { name: "Instagram", icon: "instagram", url: "https://www.instagram.com/mahmoud_codes/" },
    ],
  },
};

    
