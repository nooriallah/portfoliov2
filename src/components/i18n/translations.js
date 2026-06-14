export const LANGUAGES = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "fa", label: "دری", dir: "rtl" },
  { code: "ps", label: "پښتو", dir: "rtl" },
];

export const translations = {
  // ---------------- ENGLISH ----------------
  en: {
    nav: {
      home: "Home",
      about: "About",
      work: "Work",
      experience: "Experience",
      skills: "Skills",
      services: "Services",
      reviews: "Reviews",
      contact: "Contact",
    },
    ui: { hireMe: "Hire Me", downloadCv: "Download CV", viewWork: "View Work" },
    roles: ["Web Developer", "Programmer", "Front-End Engineer", "Freelancer"],
    hero: {
      greeting: "Hi, I'm",
      name: "Nooriallah Qayoumi",
      intro: "I am a {role}",
      tagline:
        "Creative developer specializing in front-end with solid back-end skills, turning ideas into fast, clean, reliable web experiences.",
    },
    sections: {
      about: { eyebrow: "About", title: "About Me" },
      work: { eyebrow: "Portfolio", title: "Selected Work" },
      experience: { eyebrow: "Quality", title: "Experience & Education" },
      skills: { eyebrow: "Skills", title: "What I Work With" },
      services: { eyebrow: "Services", title: "What I Offer" },
      reviews: { eyebrow: "Review", title: "What Clients Say" },
      contact: { eyebrow: "Contact", title: "Let's Work Together" },
    },
    about: {
      heading: "Web Developer & Programmer",
      text: "Creative web developer specializing in front-end and back-end development, familiar with the full development cycle for web application projects and well-versed in numerous languages, frameworks and CMS platforms.",
      facts: [
        ["Degree", "Bachelor in CS"],
        ["Experience", "4+ Years"],
        ["Location", "Kabul, Afghanistan"],
        ["Freelance", "Available"],
        ["Email", "nooriallah18@gmail.com"],
        ["Birthday", "19 March"],
      ],
    },
    skills: {
      frontend: "Front-End",
      backend: "Back-End",
      databases: "Databases",
      tools: "CMS & Tools",
      languages: "Languages",
    },
    services: {
      frontend: {
        title: "Front-End Development",
        desc: "Responsive, accessible interfaces built with React and modern CSS.",
      },
      backend: {
        title: "Back-End & APIs",
        desc: "Server-side logic and REST APIs with PHP/Laravel and Node.js.",
      },
      cms: {
        title: "WordPress & CMS",
        desc: "Custom themes, plugins and content systems for fast launches.",
      },
      apps: {
        title: "Web Applications",
        desc: "Full single-page apps from concept to deployment.",
      },
      db: {
        title: "Database Design",
        desc: "Well-structured, performant MySQL/PostgreSQL schemas.",
      },
      support: {
        title: "Maintenance & Support",
        desc: "Ongoing fixes, optimization and feature work.",
      },
    },
    work: [
      {
        title: "Shenaas Platform",
        tag: "Web App",
        desc: "Academic / journal management system built around OJS workflows.",
      },
      {
        title: "E-Commerce Site",
        tag: "Laravel",
        desc: "Storefront with cart, payments and an admin dashboard.",
      },
      {
        title: "Corporate Website",
        tag: "WordPress",
        desc: "Custom-themed marketing site with a CMS for the client team.",
      },
      {
        title: "React Dashboard",
        tag: "React.js",
        desc: "Data-driven admin panel with charts and role-based access.",
      },
    ],
    workNote:
      "These are placeholder projects — replace them in i18n/translations.js.",
    experience: {
      heading: "My Experience",
      items: [
        {
          year: "2021 — Present",
          title: "Freelance Web Developer",
          place: "Self-employed",
          desc: "Building web apps and sites for clients across PHP, Laravel and React.",
        },
        {
          year: "2020 — 2021",
          title: "Web Developer",
          place: "Shenaas Project",
          desc: "Front-end and CMS work on an academic publishing platform.",
        },
      ],
    },
    education: {
      heading: "My Education",
      items: [
        {
          year: "Graduated",
          title: "Bachelor in Computer Science",
          place: "Kabul, Afghanistan",
          desc: "Foundations in software engineering, databases and web technologies.",
        },
        {
          year: "Ongoing",
          title: "Continuous Learning",
          place: "Online",
          desc: "Modern JS frameworks, DevOps and cloud deployment.",
        },
      ],
    },
    reviews: [
      {
        role: "Product Designer / Rashha Design",
        text: "A fantastic experience! He delivered a beautifully crafted website that perfectly captured our vision. Highly recommended for expertise and professionalism.",
      },
      {
        role: "CEO / Maham Tejarat Arshin",
        text: "Incredibly impressed with his web development skills. He transformed our ideas into a user-friendly and visually stunning website.",
      },
      {
        role: "Sales Manager / LBtak",
        text: "His expertise in PHP and React brought our project to life. Prompt communication and exceptional work ethic made the process seamless.",
      },
    ],
    contact: {
      items: [
        { label: "Email", value: "nooriallah18@gmail.com" },
        { label: "Phone", value: "+93 (0) 773 77 17 16" },
        { label: "Location", value: "Poli-e-sorkh, Karte-3, Kabul" },
      ],
      qrText: "Scan to save my contact details.",
      form: {
        name: "Your Name",
        email: "Your Email",
        subject: "Subject",
        message: "Your Message",
        send: "Send Message",
      },
    },
    footer: { rights: "All rights reserved." },
  },

  // ---------------- دری (PERSIAN / DARI) ----------------
  fa: {
    nav: {
      home: "خانه",
      about: "درباره",
      work: "کارها",
      experience: "تجربه",
      skills: "مهارت‌ها",
      services: "خدمات",
      reviews: "نظرات",
      contact: "تماس",
    },
    ui: {
      hireMe: "استخدام من",
      downloadCv: "دانلود رزومه",
      viewWork: "مشاهده کارها",
    },
    roles: ["توسعه‌دهنده وب", "برنامه‌نویس", "مهندس فرانت‌اند", "فریلنسر"],
    hero: {
      greeting: "سلام، من",
      name: "نورالله قیومی",
      intro: "من یک {role} هستم",
      tagline:
        "توسعه‌دهنده خلاق با تخصص در فرانت‌اند و مهارت‌های قوی بک‌اند که ایده‌ها را به تجربه‌های وبی سریع، تمیز و قابل‌اعتماد تبدیل می‌کند.",
    },
    sections: {
      about: { eyebrow: "درباره", title: "درباره من" },
      work: { eyebrow: "نمونه‌کار", title: "کارهای منتخب" },
      experience: { eyebrow: "کیفیت", title: "تجربه و تحصیلات" },
      skills: { eyebrow: "مهارت‌ها", title: "با چه چیزهایی کار می‌کنم" },
      services: { eyebrow: "خدمات", title: "چه خدماتی ارائه می‌دهم" },
      reviews: { eyebrow: "نظرات", title: "نظر مشتریان" },
      contact: { eyebrow: "تماس", title: "بیایید با هم کار کنیم" },
    },
    about: {
      heading: "توسعه‌دهنده وب و برنامه‌نویس",
      text: "توسعه‌دهنده خلاق وب با تخصص در توسعه فرانت‌اند و بک‌اند، آشنا با چرخه کامل توسعه پروژه‌های تحت وب و مسلط بر زبان‌ها، فریم‌ورک‌ها و سیستم‌های مدیریت محتوای متعدد.",
      facts: [
        ["مدرک", "لیسانس علوم کامپیوتر"],
        ["تجربه", "+۴ سال"],
        ["موقعیت", "کابل، افغانستان"],
        ["فریلنس", "در دسترس"],
        ["ایمیل", "nooriallah18@gmail.com"],
        ["تاریخ تولد", "۱۹ مارچ"],
      ],
    },
    skills: {
      frontend: "فرانت‌اند",
      backend: "بک‌اند",
      databases: "پایگاه داده",
      tools: "CMS و ابزارها",
      languages: "زبان‌ها",
    },
    services: {
      frontend: {
        title: "توسعه فرانت‌اند",
        desc: "رابط‌های کاربری واکنش‌گرا و دسترس‌پذیر ساخته‌شده با React و CSS مدرن.",
      },
      backend: {
        title: "بک‌اند و API",
        desc: "منطق سمت سرور و REST API با PHP/Laravel و Node.js.",
      },
      cms: {
        title: "وردپرس و CMS",
        desc: "قالب‌ها، افزونه‌ها و سیستم‌های محتوای سفارشی برای راه‌اندازی سریع.",
      },
      apps: {
        title: "اپلیکیشن‌های وب",
        desc: "اپلیکیشن‌های تک‌صفحه‌ای کامل از ایده تا استقرار.",
      },
      db: {
        title: "طراحی پایگاه داده",
        desc: "ساختارهای داده MySQL/PostgreSQL با ساختار مناسب و کارآمد.",
      },
      support: {
        title: "نگهداری و پشتیبانی",
        desc: "رفع اشکال، بهینه‌سازی و توسعه ویژگی‌ها به‌صورت مستمر.",
      },
    },
    work: [
      {
        title: "پلتفرم شناس",
        tag: "Web App",
        desc: "سیستم مدیریت ژورنال/علمی مبتنی بر OJS.",
      },
      {
        title: "فروشگاه اینترنتی",
        tag: "Laravel",
        desc: "فروشگاه با سبد خرید، پرداخت و پنل مدیریت.",
      },
      {
        title: "وب‌سایت شرکتی",
        tag: "WordPress",
        desc: "سایت بازاریابی با قالب سفارشی و CMS برای تیم مشتری.",
      },
      {
        title: "داشبورد React",
        tag: "React.js",
        desc: "پنل مدیریت داده‌محور با نمودار و دسترسی نقش‌محور.",
      },
    ],
    workNote:
      "این‌ها پروژه‌های نمونه هستند — آن‌ها را در i18n/translations.js جایگزین کنید.",
    experience: {
      heading: "تجربه من",
      items: [
        {
          year: "۲۰۲۱ — اکنون",
          title: "توسعه‌دهنده وب فریلنس",
          place: "خوداشتغال",
          desc: "ساخت اپلیکیشن‌ها و سایت‌های وب برای مشتریان با PHP، Laravel و React.",
        },
        {
          year: "۲۰۲۰ — ۲۰۲۱",
          title: "توسعه‌دهنده وب",
          place: "پروژه شناس",
          desc: "کار فرانت‌اند و CMS روی یک پلتفرم نشر علمی.",
        },
      ],
    },
    education: {
      heading: "تحصیلات من",
      items: [
        {
          year: "فارغ‌التحصیل",
          title: "لیسانس علوم کامپیوتر",
          place: "کابل، افغانستان",
          desc: "مبانی مهندسی نرم‌افزار، پایگاه داده و فناوری‌های وب.",
        },
        {
          year: "در حال یادگیری",
          title: "یادگیری مستمر",
          place: "آنلاین",
          desc: "فریم‌ورک‌های مدرن JS، DevOps و استقرار ابری.",
        },
      ],
    },
    reviews: [
      {
        role: "طراح محصول / Rashha Design",
        text: "تجربه‌ای فوق‌العاده! او وب‌سایتی زیبا ساخت که دقیقاً چشم‌انداز ما را منعکس می‌کرد. برای تخصص و حرفه‌ای‌گری به‌شدت توصیه می‌شود.",
      },
      {
        role: "مدیرعامل / Maham Tejarat Arshin",
        text: "از مهارت‌های توسعه وب او بسیار تحت تأثیر قرار گرفتم. او ایده‌های ما را به وب‌سایتی کاربرپسند و چشم‌نواز تبدیل کرد.",
      },
      {
        role: "مدیر فروش / LBtak",
        text: "تخصص او در PHP و React پروژه ما را زنده کرد. ارتباط سریع و اخلاق کاری استثنایی روند کار را روان ساخت.",
      },
    ],
    contact: {
      items: [
        { label: "ایمیل", value: "nooriallah18@gmail.com" },
        { label: "تلفن", value: "+93 (0) 773 77 17 16" },
        { label: "موقعیت", value: "پل سرخ، کارته سه، کابل" },
      ],
      qrText: "برای ذخیره اطلاعات تماس من اسکن کنید.",
      form: {
        name: "نام شما",
        email: "ایمیل شما",
        subject: "موضوع",
        message: "پیام شما",
        send: "ارسال پیام",
      },
    },
    footer: { rights: "تمامی حقوق محفوظ است." },
  },

  // ---------------- پښتو (PASHTO) ----------------
  ps: {
    nav: {
      home: "کور",
      about: "په اړه",
      work: "کارونه",
      experience: "تجربه",
      skills: "مهارتونه",
      services: "خدمتونه",
      reviews: "نظرونه",
      contact: "اړیکه",
    },
    ui: {
      hireMe: "ما استخدام کړئ",
      downloadCv: "سي‌وي ډاونلوډ",
      viewWork: "کارونه وګورئ",
    },
    roles: [
      "د ویب پراختیا کوونکی",
      "پروګرامر",
      "د فرنټ‌اینډ انجنیر",
      "فري‌لانسر",
    ],
    hero: {
      greeting: "سلام، زه",
      name: "نورالله قیومی",
      intro: "زه یو {role} یم",
      tagline:
        "یو خلاق پراختیا کوونکی چې په فرنټ‌اینډ کې تخصص لري او د بیک‌اینډ پیاوړي مهارتونه لري، نظرونه چټک، پاک او د باور وړ ویب تجربو ته اړوي.",
    },
    sections: {
      about: { eyebrow: "په اړه", title: "زما په اړه" },
      work: { eyebrow: "پورټفولیو", title: "ټاکل شوي کارونه" },
      experience: { eyebrow: "کیفیت", title: "تجربه او زده‌کړه" },
      skills: { eyebrow: "مهارتونه", title: "زه له څه سره کار کوم" },
      services: { eyebrow: "خدمتونه", title: "زه څه وړاندې کوم" },
      reviews: { eyebrow: "نظرونه", title: "پیرودونکي څه وايي" },
      contact: { eyebrow: "اړیکه", title: "راځئ چې یوځای کار وکړو" },
    },
    about: {
      heading: "د ویب پراختیا کوونکی او پروګرامر",
      text: "یو خلاق ویب پراختیا کوونکی چې په فرنټ‌اینډ او بیک‌اینډ پراختیا کې تخصص لري، د ویب اپلیکیشن پروژو د بشپړ پراختیایي دورې سره بلد دی او په ډیرو ژبو، فریم‌ورکونو او د محتوا مدیریت سیسټمونو پوهیږي.",
      facts: [
        ["سند", "د کمپیوټر ساینس لیسانس"],
        ["تجربه", "+۴ کاله"],
        ["موقعیت", "کابل، افغانستان"],
        ["فري‌لانس", "شته"],
        ["ایمیل", "nooriallah18@gmail.com"],
        ["د زیږون نیټه", "۱۹ مارچ"],
      ],
    },
    skills: {
      frontend: "فرنټ‌اینډ",
      backend: "بیک‌اینډ",
      databases: "ډیټابیسونه",
      tools: "CMS او وسایل",
      languages: "ژبې",
    },
    services: {
      frontend: {
        title: "د فرنټ‌اینډ پراختیا",
        desc: "ځواب ورکوونکي او د لاسرسي وړ انٹرفیسونه چې د React او عصري CSS په مرسته جوړ شوي.",
      },
      backend: {
        title: "بیک‌اینډ او APIs",
        desc: "د سرور خوا منطق او REST APIs د PHP/Laravel او Node.js سره.",
      },
      cms: {
        title: "وردپرس او CMS",
        desc: "دودیز قالبونه، پلگ‌اینونه او د محتوا سیسټمونه د چټک پیل لپاره.",
      },
      apps: {
        title: "ویب اپلیکیشنونه",
        desc: "بشپړ یو-مخیز اپلیکیشنونه له نظر څخه تر پلي کولو پورې.",
      },
      db: {
        title: "د ډیټابیس ډیزاین",
        desc: "ښه جوړ شوي او اغیزمن MySQL/PostgreSQL سکیماوې.",
      },
      support: {
        title: "ساتنه او ملاتړ",
        desc: "دوامداره سمونونه، اصلاح او د ځانګړتیاوو کار.",
      },
    },
    work: [
      {
        title: "د شناس پلیټ‌فارم",
        tag: "Web App",
        desc: "د OJS پر بنسټ د ژورنال/علمي مدیریت سیسټم.",
      },
      {
        title: "آنلاین پلورنځی",
        tag: "Laravel",
        desc: "د پیرود ټوکري، تادیاتو او اډمین ډشبورډ سره پلورنځی.",
      },
      {
        title: "شرکتي ویب‌پاڼه",
        tag: "WordPress",
        desc: "د دودیز قالب او CMS سره د بازارموندنې سایټ د پیرودونکي ټیم لپاره.",
      },
      {
        title: "React ډشبورډ",
        tag: "React.js",
        desc: "د ډیټا پر بنسټ اډمین پینل د چارټونو او رول-بنسټیز لاسرسي سره.",
      },
    ],
    workNote: "دا نمونه پروژې دي — په i18n/translations.js کې یې بدل کړئ.",
    experience: {
      heading: "زما تجربه",
      items: [
        {
          year: "۲۰۲۱ — اوس",
          title: "فري‌لانس ویب پراختیا کوونکی",
          place: "ځان‌بوختیا",
          desc: "د پیرودونکو لپاره د PHP، Laravel او React سره د ویب اپونو او سایټونو جوړول.",
        },
        {
          year: "۲۰۲۰ — ۲۰۲۱",
          title: "ویب پراختیا کوونکی",
          place: "د شناس پروژه",
          desc: "د یوې علمي خپرونې پلیټ‌فارم باندې د فرنټ‌اینډ او CMS کار.",
        },
      ],
    },
    education: {
      heading: "زما زده‌کړه",
      items: [
        {
          year: "فارغ",
          title: "د کمپیوټر ساینس لیسانس",
          place: "کابل، افغانستان",
          desc: "د سافټویر انجینرۍ، ډیټابیس او ویب ټکنالوژیو بنسټونه.",
        },
        {
          year: "روان",
          title: "دوامداره زده‌کړه",
          place: "آنلاین",
          desc: "عصري JS فریم‌ورکونه، DevOps او کلاوډ پلي کول.",
        },
      ],
    },
    reviews: [
      {
        role: "د محصول ډیزاینر / Rashha Design",
        text: "یوه عالي تجربه! هغه یوه ښکلې ویب‌پاڼه جوړه کړه چې زموږ لیدلوری یې سم انعکاس کړ. د تخصص او مسلکيتوب لپاره ډیر سپارښتل کیږي.",
      },
      {
        role: "اجرايوي رئیس / Maham Tejarat Arshin",
        text: "د هغه د ویب پراختیا مهارتونو زه ډیر اغیزمن کړم. هغه زموږ نظرونه یوې کارن‌دوسته او ښکلې ویب‌پاڼې ته واړول.",
      },
      {
        role: "د پلور مدیر / LBtak",
        text: "د PHP او React کې د هغه تخصص زموږ پروژه ژوندۍ کړه. چټکه اړیکه او استثنایي کاري اخلاقو بهیر اسانه کړ.",
      },
    ],
    contact: {
      items: [
        { label: "ایمیل", value: "nooriallah18@gmail.com" },
        { label: "تلیفون", value: "+93 (0) 773 77 17 16" },
        { label: "موقعیت", value: "پل سرخ، کارته دریم، کابل" },
      ],
      qrText: "زما د اړیکو معلومات د خوندي کولو لپاره سکن کړئ.",
      form: {
        name: "ستاسو نوم",
        email: "ستاسو ایمیل",
        subject: "موضوع",
        message: "ستاسو پیغام",
        send: "پیغام ولیږئ",
      },
    },
    footer: { rights: "ټول حقونه خوندي دي." },
  },
};
