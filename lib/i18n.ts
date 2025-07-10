export const languages = {
  en: "English",
  ar: "العربية",
} as const

export type Language = keyof typeof languages

export const translations = {
  en: {
    // Navigation
    home: "Home",
    products: "Products",
    about: "About Us",
    gallery: "Gallery",
    contact: "Contact",
    callNow: "Call Now",

    // Homepage
    companyName: "MEYS",
    tagline: "Supplying the World with Premium Charcoal & Natural Hardwood",
    requestQuote: "Request a Quote",
    viewProducts: "View Products",
    whyChoose: "Why Choose MEYS?",
    trustedPartner: "Your trusted partner for premium charcoal and hardwood exports from Nigeria to the world",

    // Features
    qualityAssured: "Quality Assured",
    qualityDesc: "Premium grade charcoal and hardwood, carefully sourced and quality tested",
    globalExport: "Global Export",
    globalDesc: "Serving customers across Middle East, Africa, Asia and beyond",
    timelyDelivery: "Timely Delivery",
    timelyDesc: "Reliable shipping and logistics to meet your deadlines",
    sustainable: "Sustainable",
    sustainableDesc: "Environmentally responsible sourcing and production methods",

    // Products
    ourProducts: "Our Products",
    productsDesc: "Premium charcoal and hardwood for all your needs",
    charcoalProducts: "Charcoal Products",
    charcoalDesc:
      "High-quality charcoal for BBQ, industrial use, and energy production. Available in various sizes and packaging options.",
    hardwoodProducts: "Hardwood Products",
    hardwoodDesc: "Premium timber logs, firewood, and furniture-grade wood sourced from sustainable forests.",
    viewCharcoal: "View Charcoal Products",
    viewHardwood: "View Hardwood Products",
    requestPrice: "Request Price",
    specifications: "Specifications",

    // Product Details
    premiumCharcoal: "Premium Hardwood Charcoal",
    premiumCharcoalDesc:
      "High-quality charcoal made from premium hardwood, perfect for BBQ and grilling. Burns longer and hotter than regular charcoal.",
    bbqCharcoal: "BBQ Charcoal",
    bbqCharcoalDesc:
      "Specially processed charcoal ideal for barbecue and outdoor cooking. Provides consistent heat and excellent flavor.",
    industrialCharcoal: "Industrial Use Charcoal",
    industrialCharcoalDesc:
      "High-carbon content charcoal for industrial applications, energy production, and manufacturing processes.",
    timberLogs: "Timber Logs",
    timberLogsDesc:
      "Premium quality timber logs from sustainable forests, suitable for construction and manufacturing.",
    firewood: "Firewood",
    firewoodDesc: "Seasoned hardwood firewood for heating and energy production. Clean burning with high heat output.",
    furnitureWood: "Furniture-Grade Wood",
    furnitureWoodDesc:
      "Premium hardwood specifically selected and processed for furniture manufacturing and woodworking.",

    // About
    aboutTitle: "About MEYS",
    aboutSubtitle: "Your trusted partner for premium charcoal and hardwood exports",
    ourStory: "Our Story",
    storyP1:
      "MEYS is a registered export company (RC-2004612) based in Bauchi, Nigeria. We specialize in the sourcing and supply of clean, high-quality charcoal and hardwood to international buyers.",
    storyP2:
      "With strict attention to quality, packaging, and timely shipping, we aim to become a trusted long-term partner for businesses worldwide. Our commitment to excellence has made us a preferred supplier across the Middle East, Africa, and Asia.",
    storyP3:
      "We understand the importance of reliable supply chains in today's global market, and we've built our operations around ensuring consistent quality and delivery that our clients can depend on.",
    companyRegistration: "Company Registration",
    exportMarkets: "Export Markets",
    specialization: "Specialization",
    specializationDesc: "Premium charcoal and hardwood export",
    coreValues: "Our Core Values",
    valuesDesc: "The principles that guide everything we do",
    quality: "Quality",
    qualityValue: "We maintain the highest standards in sourcing, processing, and packaging our products",
    trust: "Trust",
    trustValue: "Building long-term partnerships with our clients through reliability and transparency",
    speed: "Speed",
    speedValue: "Efficient processing and timely delivery to meet your business deadlines",
    sustainabilityValue: "Committed to environmentally responsible sourcing and production practices",
    ourMission: "Our Mission",
    missionText:
      "To provide the global market with premium quality charcoal and hardwood products while maintaining the highest standards of sustainability, reliability, and customer service. We strive to be the preferred partner for businesses seeking consistent, high-quality natural products from Nigeria.",
    ourVision: "Our Vision",
    visionText:
      "To become the leading exporter of premium charcoal and hardwood products from Nigeria, recognized globally for our commitment to quality, sustainability, and customer satisfaction. We envision a future where MEYS is synonymous with excellence in natural product exports.",

    // Contact
    contactTitle: "Contact Us",
    contactSubtitle: "Get in touch for quotes, inquiries, and partnership opportunities",
    sendMessage: "Send us a Message",
    fullName: "Full Name",
    emailAddress: "Email Address",
    companyName: "Company Name",
    message: "Message",
    messagePlaceholder: "Please describe your requirements, quantities needed, and any specific questions...",
    sendMessageBtn: "Send Message",
    getInTouch: "Get in Touch",
    phone: "Phone",
    email: "Email",
    officeAddress: "Office Address",
    whatsapp: "WhatsApp",
    chatWhatsApp: "Chat with us on WhatsApp",
    businessHours: "Business Hours",
    mondayFriday: "Monday - Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
    westAfricaTime: "West Africa Time (WAT)",
    exportInfo: "Export Information",
    exportLicense: "Export License",
    availableOnRequest: "Available upon request",
    mainMarkets: "Main Markets",
    findOffice: "Find Our Office",

    // Gallery
    galleryTitle: "Gallery & Testimonials",
    gallerySubtitle: "See our products in action and hear from our satisfied customers",
    productGallery: "Product Gallery",
    galleryDesc: "Real photos of our premium charcoal and hardwood products",
    customerTestimonials: "Customer Testimonials",
    testimonialsDesc: "What our international clients say about us",
    seeProcess: "See Our Process",
    processDesc: "Watch how we ensure quality from sourcing to shipping",

    // Footer
    quickLinks: "Quick Links",
    contactInfo: "Contact Info",
    allRightsReserved: "All rights reserved",
    termsConditions: "Terms & Conditions",
    privacyPolicy: "Privacy Policy",

    // CTA
    readyToOrder: "Ready to Place Your Order?",
    ctaDesc:
      "Contact us today for competitive pricing and reliable delivery of premium charcoal and hardwood products.",
    getQuoteNow: "Get Quote Now",
    whatsAppUs: "WhatsApp Us",
    needCustom: "Need Custom Specifications?",
    customDesc: "We can customize our products to meet your specific requirements",
    contactCustom: "Contact Us for Custom Orders",

    // Common
    middleEast: "Middle East",
    africa: "Africa",
    asia: "Asia",
    loading: "Loading...",
    required: "Required",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    products: "المنتجات",
    about: "من نحن",
    gallery: "المعرض",
    contact: "اتصل بنا",
    callNow: "اتصل الآن",

    // Homepage
    companyName: "MEYS",
    tagline: "نزود العالم بالفحم الممتاز والأخشاب الطبيعية",
    requestQuote: "طلب عرض سعر",
    viewProducts: "عرض المنتجات",
    whyChoose: "لماذا تختار MEYS؟",
    trustedPartner: "شريكك الموثوق لتصدير الفحم والأخشاب الممتازة من نيجيريا إلى العالم",

    // Features
    qualityAssured: "جودة مضمونة",
    qualityDesc: "فحم وأخشاب من الدرجة الممتازة، مصدرة بعناية ومختبرة الجودة",
    globalExport: "تصدير عالمي",
    globalDesc: "نخدم العملاء في الشرق الأوسط وأفريقيا وآسيا وما بعدها",
    timelyDelivery: "تسليم في الوقت المحدد",
    timelyDesc: "شحن موثوق ولوجستيات لتلبية مواعيدكم النهائية",
    sustainable: "مستدام",
    sustainableDesc: "طرق توريد وإنتاج مسؤولة بيئياً",

    // Products
    ourProducts: "منتجاتنا",
    productsDesc: "فحم وأخشاب ممتازة لجميع احتياجاتكم",
    charcoalProducts: "منتجات الفحم",
    charcoalDesc: "فحم عالي الجودة للشواء والاستخدام الصناعي وإنتاج الطاقة. متوفر بأحجام وخيارات تعبئة مختلفة.",
    hardwoodProducts: "منتجات الأخشاب الصلبة",
    hardwoodDesc: "جذوع أخشاب ممتازة وحطب وأخشاب درجة الأثاث من غابات مستدامة.",
    viewCharcoal: "عرض منتجات الفحم",
    viewHardwood: "عرض منتجات الأخشاب",
    requestPrice: "طلب السعر",
    specifications: "المواصفات",

    // Product Details
    premiumCharcoal: "فحم الأخشاب الصلبة الممتاز",
    premiumCharcoalDesc:
      "فحم عالي الجودة مصنوع من الأخشاب الصلبة الممتازة، مثالي للشواء والطبخ. يحترق لفترة أطول وبحرارة أعلى من الفحم العادي.",
    bbqCharcoal: "فحم الشواء",
    bbqCharcoalDesc: "فحم معالج خصيصاً مثالي للشواء والطبخ في الهواء الطلق. يوفر حرارة ثابتة ونكهة ممتازة.",
    industrialCharcoal: "فحم للاستخدام الصناعي",
    industrialCharcoalDesc: "فحم عالي المحتوى الكربوني للتطبيقات الصناعية وإنتاج الطاقة وعمليات التصنيع.",
    timberLogs: "جذوع الأخشاب",
    timberLogsDesc: "جذوع أخشاب عالية الجودة من غابات مستدامة، مناسبة للبناء والتصنيع.",
    firewood: "حطب الوقود",
    firewoodDesc: "حطب أخشاب صلبة متمرس للتدفئة وإنتاج الطاقة. احتراق نظيف مع إنتاج حراري عالي.",
    furnitureWood: "أخشاب درجة الأثاث",
    furnitureWoodDesc: "أخشاب صلبة ممتازة مختارة ومعالجة خصيصاً لتصنيع الأثاث والنجارة.",

    // About
    aboutTitle: "حول MEYS",
    aboutSubtitle: "شريكك الموثوق لتصدير الفحم والأخشاب الممتازة",
    ourStory: "قصتنا",
    storyP1:
      "MEYS هي شركة تصدير مسجلة (RC-2004612) مقرها في باوتشي، نيجيريا. نحن متخصصون في توريد وإمداد الفحم والأخشاب الصلبة عالية الجودة والنظيفة للمشترين الدوليين.",
    storyP2:
      "مع الاهتمام الصارم بالجودة والتعبئة والشحن في الوقت المحدد، نهدف إلى أن نصبح شريكاً موثوقاً طويل الأمد للشركات في جميع أنحاء العالم. التزامنا بالتميز جعلنا مورداً مفضلاً في الشرق الأوسط وأفريقيا وآسيا.",
    storyP3:
      "نحن نفهم أهمية سلاسل التوريد الموثوقة في السوق العالمي اليوم، وقد بنينا عملياتنا حول ضمان الجودة والتسليم المتسقين التي يمكن لعملائنا الاعتماد عليها.",
    companyRegistration: "تسجيل الشركة",
    exportMarkets: "أسواق التصدير",
    specialization: "التخصص",
    specializationDesc: "تصدير الفحم والأخشاب الصلبة الممتازة",
    coreValues: "قيمنا الأساسية",
    valuesDesc: "المبادئ التي توجه كل ما نقوم به",
    quality: "الجودة",
    qualityValue: "نحافظ على أعلى المعايير في التوريد والمعالجة والتعبئة لمنتجاتنا",
    trust: "الثقة",
    trustValue: "بناء شراكات طويلة الأمد مع عملائنا من خلال الموثوقية والشفافية",
    speed: "السرعة",
    speedValue: "معالجة فعالة وتسليم في الوقت المحدد لتلبية مواعيدكم النهائية التجارية",
    sustainabilityValue: "ملتزمون بطرق التوريد والإنتاج المسؤولة بيئياً",
    ourMission: "مهمتنا",
    missionText:
      "تزويد السوق العالمي بمنتجات الفحم والأخشاب الصلبة عالية الجودة مع الحفاظ على أعلى معايير الاستدامة والموثوقية وخدمة العملاء. نسعى لأن نكون الشريك المفضل للشركات التي تبحث عن منتجات طبيعية عالية الجودة ومتسقة من نيجيريا.",
    ourVision: "رؤيتنا",
    visionText:
      "أن نصبح المصدر الرائد لمنتجات الفحم والأخشاب الصلبة الممتازة من نيجيريا، معترف بنا عالمياً لالتزامنا بالجودة والاستدامة ورضا العملاء. نتصور مستقبلاً حيث تكون MEYS مرادفة للتميز في صادرات المنتجات الطبيعية.",

    // Contact
    contactTitle: "اتصل بنا",
    contactSubtitle: "تواصل معنا للحصول على عروض الأسعار والاستفسارات وفرص الشراكة",
    sendMessage: "أرسل لنا رسالة",
    fullName: "الاسم الكامل",
    emailAddress: "عنوان البريد الإلكتروني",
    companyName: "اسم الشركة",
    message: "الرسالة",
    messagePlaceholder: "يرجى وصف متطلباتكم والكميات المطلوبة وأي أسئلة محددة...",
    sendMessageBtn: "إرسال الرسالة",
    getInTouch: "تواصل معنا",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    officeAddress: "عنوان المكتب",
    whatsapp: "واتساب",
    chatWhatsApp: "تحدث معنا على واتساب",
    businessHours: "ساعات العمل",
    mondayFriday: "الاثنين - الجمعة",
    saturday: "السبت",
    sunday: "الأحد",
    closed: "مغلق",
    westAfricaTime: "توقيت غرب أفريقيا (WAT)",
    exportInfo: "معلومات التصدير",
    exportLicense: "رخصة التصدير",
    availableOnRequest: "متوفرة عند الطلب",
    mainMarkets: "الأسواق الرئيسية",
    findOffice: "اعثر على مكتبنا",

    // Gallery
    galleryTitle: "المعرض والشهادات",
    gallerySubtitle: "شاهد منتجاتنا في العمل واستمع إلى عملائنا الراضين",
    productGallery: "معرض المنتجات",
    galleryDesc: "صور حقيقية لمنتجاتنا الممتازة من الفحم والأخشاب الصلبة",
    customerTestimonials: "شهادات العملاء",
    testimonialsDesc: "ما يقوله عملاؤنا الدوليون عنا",
    seeProcess: "شاهد عمليتنا",
    processDesc: "شاهد كيف نضمن الجودة من التوريد إلى الشحن",

    // Footer
    quickLinks: "روابط سريعة",
    contactInfo: "معلومات الاتصال",
    allRightsReserved: "جميع الحقوق محفوظة",
    termsConditions: "الشروط والأحكام",
    privacyPolicy: "سياسة الخصوصية",

    // CTA
    readyToOrder: "مستعد لتقديم طلبك؟",
    ctaDesc: "اتصل بنا اليوم للحصول على أسعار تنافسية وتسليم موثوق لمنتجات الفحم والأخشاب الصلبة الممتازة.",
    getQuoteNow: "احصل على عرض سعر الآن",
    whatsAppUs: "راسلنا على واتساب",
    needCustom: "تحتاج مواصفات مخصصة؟",
    customDesc: "يمكننا تخصيص منتجاتنا لتلبية متطلباتكم المحددة",
    contactCustom: "اتصل بنا للطلبات المخصصة",

    // Common
    middleEast: "الشرق الأوسط",
    africa: "أفريقيا",
    asia: "آسيا",
    loading: "جاري التحميل...",
    required: "مطلوب",
  },
} as const

export function getTranslation(lang: Language, key: keyof typeof translations.en): string {
  return translations[lang][key] || translations.en[key]
}
