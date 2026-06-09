/* ═══════════════════════════════════════════
   YAZINC AI — Data Layer
   All site data, types, and constants
   Sourced from yaz-inc.com + Fiverr portfolio
   ═══════════════════════════════════════════ */

// ── Types ──

export interface NavLink {
  label: string;
  href: string;
}

export interface Capability {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  techTags: string[];
  accent: 'orange' | 'cyan' | 'purple';
}

export interface Project {
  slug: string;
  name: string;
  tagline?: string;
  category: string;
  industry: string;
  type: string;
  image: string;
  url: string;
  role: string;
  platform?: string;
  tools: string[];
  goals: string;
  challenges: string;
  approach?: string;
  outcome: string;
  outcomes?: string;
  featured?: boolean;
}

export interface MethodologyStep {
  icon: string;
  title: string;
  description: string;
  step: number;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'linkedin' | 'fiverr' | 'instagram';
}

export interface ContactInfo {
  phone: string;
  email: string;
  hours: string;
  location: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  bio: string;
  image: string;
  skills: string[];
  languages: string[];
  experience: string;
}

// ── Navigation ──

export const navLinks: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Contact', href: '#contact' },
];

export const taglines: string[] = [
  'AI Business Solutions',
  'Web Development',
  'Automation Expert',
  '15+ Years Experience',
  'GoHighLevel CRM',
  'Full-Stack Development',
];

// ── Stats ──

export const stats: Stat[] = [
  { label: 'Years', value: '15', suffix: '+' },
  { label: 'Projects', value: '50', suffix: '+' },
  { label: 'Countries', value: '6' },
  { label: 'Rating', value: '5.0' },
];

// ── Capabilities ──

export const capabilities: Capability[] = [
  { icon: 'Palette', title: 'Design', description: 'We create modern, responsive designs that align beauty with usability. Every interface is built to engage users and communicate your brand with clarity and purpose.' },
  { icon: 'Code', title: 'Develop', description: 'From concept to code, we build robust web platforms using WordPress, Joomla, Laravel, and React — optimized for performance, security, and scalability.' },
  { icon: 'Zap', title: 'Automate', description: 'We integrate AI and automation tools to eliminate repetitive tasks, streamline workflows, and give you time to focus on what matters most — your business growth.' },
  { icon: 'BarChart3', title: 'Analyze', description: 'Turn data into decisions. Using Python, Google Sheets, and Power BI, we collect, clean, and visualize your data to help you see trends and act fast.' },
  { icon: 'Gauge', title: 'Optimize', description: 'We enhance speed, SEO, and user experience across every project. From server performance to UX flow, we fine-tune every detail for maximum impact.' },
  { icon: 'Rocket', title: 'Elevate', description: 'Scale your digital ecosystem with smart AI-driven systems and custom SaaS tools that help your business grow intelligently and sustainably.' },
];

// ── Services ──

export const services: Service[] = [
  { icon: 'Globe', title: 'AI-Powered Web Development', description: 'We create intelligent websites and business platforms using WordPress, Joomla, Laravel, and React. Each solution is designed for performance, security, and automation — including chatbots, analytics, and third-party integrations.', techTags: ['WordPress', 'Joomla', 'Laravel', 'React'], accent: 'orange' },
  { icon: 'Layers', title: 'Custom Business Applications', description: 'From prototype to deployment, we build custom web and SaaS applications using Laravel, React, PHP, and AI vibe coding. Our solutions automate workflows and transform how businesses operate.', techTags: ['Laravel', 'React', 'SaaS', 'PHP'], accent: 'cyan' },
  { icon: 'Workflow', title: 'GoHighLevel CRM & Automation', description: 'As GoHighLevel experts, we set up funnels, workflows, payments, pipelines, and automations that manage leads, clients, and sales — all in one place.', techTags: ['GoHighLevel', 'CRM', 'Funnels', 'Automation'], accent: 'purple' },
  { icon: 'BarChart3', title: 'Data Analytics & Automation', description: 'Using Python, Google Sheets, SQL, and Power BI, we transform raw data into visual insights. We build dashboards, reports, and automation scripts for smart decision-making.', techTags: ['Python', 'SQL', 'Power BI', 'Analytics'], accent: 'orange' },
  { icon: 'ShoppingCart', title: 'E-Commerce Development', description: 'We design conversion-ready online stores using Shopify, WooCommerce, and VirtueMart. Every store is optimized for speed, security, and sales performance.', techTags: ['Shopify', 'WooCommerce', 'E-Commerce'], accent: 'cyan' },
  { icon: 'Bot', title: 'AI Integration & Chatbot Development', description: 'We integrate ChatGPT, custom GPTs, and AI APIs to automate customer interactions, content workflows, and data analysis for your business.', techTags: ['ChatGPT', 'AI APIs', 'GPTs', 'Automation'], accent: 'purple' },
];

// ── Projects (Real Fiverr Portfolio) ──

export const projectCategories: string[] = [
  'All',
  'WordPress',
  'Shopify',
  'E-Commerce',
  'AI/SaaS',
  'Joomla',
];

export const projects: Project[] = [
  {
    slug: 'access-georgia-foundation',
    name: 'Access Georgia Foundation',
    category: 'WordPress',
    industry: 'Non Profit',
    type: 'Custom CMS - WordPress',
    image: '/images/portfolio/access-georgia.png',
    url: 'https://accessgaf.org/',
    role: 'Lead Developer',
    tools: ['WordPress', 'Figma', 'Custom CSS', 'JavaScript'],
    goals: 'Developed a custom WordPress CMS for Access Foundation, aimed at helping minority and women-led startups with mentorship, capital, and networks. The site showcases programs like the Founders Cohort and Mentoring Program, with a focus on user-friendly navigation and engagement.',
    challenges: 'Built a custom layout from scratch, working with UX/UI to ensure a dynamic user experience. Configured and optimized plugins for performance without slowing the site. Used JavaScript and CSS for interactivity and smooth navigation.',
    outcome: 'The site is now a high-performance, responsive platform supporting underserved entrepreneurs in Georgia and beyond.',
  },
  {
    slug: 'sibf',
    name: 'Society of International Business Fellows',
    category: 'WordPress',
    industry: 'Business Services & Consulting',
    type: 'Custom CMS - WordPress',
    image: '/images/portfolio/sibf.png',
    url: 'https://sibf.org/',
    role: 'Lead Developer',
    tools: ['WordPress', 'Figma', 'Custom CSS', 'JavaScript'],
    goals: 'Developed a custom WordPress CMS for The Society of International Business Fellows (SIBF), an organization focused on fostering global leadership through education and networking. The site serves as a portal for members to access resources, attend events, and collaborate globally.',
    challenges: 'Creating a seamless user experience while incorporating a custom-made design that involved collaborating with the UX/UI team. Ensured smooth plugin configuration for membership portals and events without sacrificing site speed or functionality.',
    outcome: 'The final platform is a fully customized, responsive, and visually compelling website that supports the organization\'s goals.',
  },
  {
    slug: 'gcdd',
    name: 'Georgia Council on Developmental Disabilities',
    category: 'Joomla',
    industry: 'Public Sector',
    type: 'CMS - Joomla - Yootheme Builder - Custom Development',
    image: '/images/portfolio/gcdd.png',
    url: 'https://gcdd.org/',
    role: 'Lead Developer',
    tools: ['Joomla', 'Yootheme Builder', 'Figma', 'Custom CSS', 'JavaScript', 'Automation Tools'],
    goals: 'The client had two separate websites—one built on WordPress and the other on Joomla. Our task was to consolidate both into one unified platform, ensuring smooth migration of data, images, videos, and podcasts. The platform serves as a hub for information and updates on government policies for the developmentally disabled community.',
    challenges: 'The project required migrating extensive data from two different CMS platforms while ensuring no loss of content. The content included sensitive information and multimedia files such as videos, podcasts, and magazines. We implemented custom solutions for accessibility and automation.',
    outcome: 'The final product is a centralized, easy-to-navigate platform that provides essential resources to the disabled community.',
  },
  {
    slug: 'gaipsec',
    name: 'Georgia Inclusive Post Secondary Education',
    category: 'WordPress',
    industry: 'Education',
    type: 'WordPress - CMS - Listing - Blog',
    image: '/images/portfolio/gaipsec.png',
    url: 'https://gaipsec.org',
    role: 'Lead Developer',
    tools: ['WordPress', 'Adobe XD', 'Custom Theme', 'CSS', 'JavaScript'],
    goals: 'We upgraded the client\'s previous website to streamline content and blog management. The project focused on creating an interactive and user-friendly college and university listing platform for parents and students with disabilities. Users can filter and select institutions based on personalized needs.',
    challenges: 'We faced challenges integrating a responsive filtration system that would cater to the needs of individuals with disabilities. Custom CSS and JavaScript were used to ensure the filters were intuitive and worked smoothly on all devices.',
    outcome: 'The redesigned site provides a seamless experience for users, offering easy navigation, up-to-date information, and an accessible interface for the disabled community.',
  },
  {
    slug: 'meettheneednc',
    name: 'Meet the Need NC',
    category: 'WordPress',
    industry: 'Education',
    type: 'WordPress - CMS - Custom Theme',
    image: '/images/portfolio/meettheneednc.png',
    url: 'https://meettheneednc.org',
    role: 'Web Developer - WordPress Developer',
    tools: ['WordPress', 'Figma', 'Custom Theme', 'CSS', 'JavaScript'],
    goals: 'The goal was to develop the website based on a Figma design concept. I created a custom WordPress theme with full implementation of CSS and JavaScript to ensure smooth functionality and match the designer\'s vision.',
    challenges: 'The project mainly involved accurately following the designer\'s mockups to build a custom theme. I ensured the theme implementation was seamless, with proper CSS and JavaScript integrations to match the design specifications.',
    outcome: 'The website successfully provides regular updates to its audience through blogs, news, and videos. Users can stay informed about community happenings and state initiatives.',
  },
  {
    slug: 'innoval-pharma',
    name: 'INNOVAL Pharma AG',
    category: 'E-Commerce',
    industry: 'Medical & Health',
    type: 'WordPress - CMS - E-commerce - WooCommerce',
    image: '/images/portfolio/innoval-pharma.png',
    url: 'https://www.innoval.ch',
    role: 'WordPress Developer',
    tools: ['WordPress', 'Notion.io', 'Custom CSS', 'JavaScript', 'WooCommerce'],
    goals: 'The client\'s original single-page website was extended into a full multi-page platform. We followed the existing design and ensured responsiveness across devices. Products were listed, a custom order form was integrated, and analytics were set up. Additionally, a multilingual feature was added to cater to their global audience, alongside a dedicated services section.',
    challenges: 'The key challenge was building a multilingual platform that integrated with the client\'s CRM and sales systems, which was resolved with custom solutions and plugin configurations.',
    outcome: 'The revamped site now supports INNOVAL Pharma\'s operations, showcasing their products and services since 1985. The multilingual and e-commerce capabilities help expand their reach in the pharmaceutical industry.',
  },
  {
    slug: 'garderoba',
    name: 'Garderoba',
    category: 'Shopify',
    industry: 'Clothing Stores',
    type: 'Shopify - E-commerce - EStore - Clothing',
    image: '/images/portfolio/garderoba.png',
    url: 'https://garderobard.com/',
    role: 'Shopify Developer',
    tools: ['Shopify'],
    goals: 'Fashion e-commerce store for Dominican Republic brand. Complete Shopify e-commerce solution with optimized checkout and regional shipping integration.',
    challenges: 'Creating a visually stunning fashion storefront that handles multi-currency and regional shipping logistics for the Caribbean market.',
    outcome: 'Complete Shopify e-commerce solution with optimized checkout and regional shipping integration.',
  },
  {
    slug: 'lalibella',
    name: 'Lalibella',
    category: 'E-Commerce',
    industry: 'Womens Clothing',
    type: 'WordPress - WooCommerce - Clothing - Ecommerce',
    image: '/images/portfolio/lalibella.png',
    url: 'https://lalibella.ch/',
    role: 'WordPress Developer',
    tools: ['WordPress', 'WooCommerce', 'Custom CSS', 'JavaScript'],
    goals: 'The Lalibella website was designed and developed to represent a premium women\'s clothing brand from Switzerland, providing an elegant and intuitive platform for customers to explore and purchase high-quality fashion items. Built using WordPress and WooCommerce, the website combines visual sophistication with robust functionality.',
    challenges: 'Creating a sophisticated, mobile-first e-commerce experience that reflects the brand\'s luxury and attention to detail.',
    outcome: 'A visually appealing e-commerce platform with seamless shopping experience across all devices.',
  },
  {
    slug: 'euromex-sports',
    name: 'EuroMex Sports',
    category: 'Shopify',
    industry: 'Sporting Goods Store',
    type: 'Shopify - E-commerce - EStore - Clothing',
    image: '/images/portfolio/euromex-sports.png',
    url: 'https://euromexsports.com',
    role: 'Shopify Developer',
    tools: ['Shopify'],
    goals: 'The Euromex Sports website was designed and developed to showcase the company\'s extensive portfolio in the sports industry, ensuring a user-friendly experience while maintaining high functionality and aesthetic appeal.',
    challenges: 'Building a high-performance sports merchandise store with complex product categorization and inventory management.',
    outcome: 'Modern e-commerce platform for sports merchandise with optimized product discovery and checkout flow.',
  },
  {
    slug: 'mywebrocket',
    name: 'MyWebRocket',
    category: 'AI/SaaS',
    industry: 'Software Development',
    type: 'WordPress - AI Tools - SAAS',
    image: '/images/portfolio/mywebrocket.png',
    url: 'https://mywebrocket.app/',
    role: 'Web Developer',
    tools: ['WordPress', 'Figma', 'CSS', 'JavaScript', 'Custom Development'],
    goals: 'Managed web accessibility solution powered by AI. AI-powered SaaS accessibility platform with real-time compliance monitoring and automated remediation.',
    challenges: 'Integrating AI-powered accessibility scanning with real-time compliance reporting while maintaining site performance.',
    outcome: 'AI-powered SaaS accessibility platform with real-time compliance monitoring and automated remediation.',
  },
  {
    slug: 'roofly-ai',
    name: 'Roofly.AI',
    category: 'AI/SaaS',
    industry: 'Artificial Intelligence',
    type: 'CMS - WordPress - GHL - CRM',
    image: '/images/portfolio/roofly-ai.png',
    url: 'https://roofly.ai/',
    role: 'Web Developer',
    tools: ['WordPress', 'GHL Integration', 'CSS', 'JavaScript', 'Figma'],
    goals: 'Roofly is more than just a communication platform. It\'s a comprehensive solution that unifies communication, streamlines outreach and empowers businesses with data-driven decision-making capabilities. By leveraging AI and advanced analytics, Roofly is helping roofing industry businesses operate more efficiently.',
    challenges: 'Building a seamless integration between WordPress CMS, GoHighLevel CRM, and AI-powered analytics for the roofing industry.',
    outcome: 'AI-powered unified outreach and communication platform for the roofing industry.',
  },
  {
    slug: 'createmomento',
    name: 'CreateMomento',
    category: 'AI/SaaS',
    industry: 'Software Company',
    type: 'WordPress - AI - CMS - SAAS',
    image: '/images/portfolio/createmomento.png',
    url: 'https://createmomento.com/',
    role: 'Web Developer',
    tools: ['WordPress', 'AI Integration', 'Custom Development'],
    goals: 'All the AI tools you need in one platform to save time, eliminate errors, and improve efficiency for a wide range of sales and marketing tasks across multiple channels.',
    challenges: 'Building a multi-channel AI-powered sales and marketing platform that integrates seamlessly with existing business workflows.',
    outcome: 'All-in-one AI-powered sales and marketing SaaS platform.',
  },
  {
    slug: 'sola-fide-catering',
    name: 'Sola Fide Catering',
    category: 'WordPress',
    industry: 'Food & Beverage',
    type: 'WordPress - AI - CMS - Custom Order',
    image: '/images/portfolio/sola-fide.png',
    url: 'https://solafidecatering.com/',
    role: 'Web Developer',
    tools: ['WordPress', 'Custom Order Forms', 'CSS', 'JavaScript'],
    goals: 'No event is complete without delectable cuisine. Our menu is a balance of comfort and innovation, celebrating food that appeals to both novice and extreme foodie through classic comfort fare with a twist.',
    challenges: 'Building a custom order management system with real-time availability and menu customization features.',
    outcome: 'Custom catering website with online ordering system and menu management.',
  },
  {
    slug: 'dr-sables',
    name: "Dr. Sable's - Patient-Centered Dental Care",
    category: 'WordPress',
    industry: 'Dental Care',
    type: 'WordPress - Custom Theme - Appointment',
    image: '/images/portfolio/sabledds.png',
    url: 'https://sabledds.com/',
    role: 'Web Developer',
    tools: ['WordPress', 'Custom Theme', 'CSS', 'JavaScript', 'Forms', 'Figma'],
    goals: 'Patient-centered dental care website with appointment booking and custom theme.',
    challenges: 'Creating an accessible, HIPAA-aware appointment system with insurance verification and patient portal integration.',
    outcome: 'Professional dental care website with appointment system and patient-friendly navigation.',
  },
  {
    slug: 'sowth',
    name: 'SOWTH - Southern Farmers & Ranchers',
    category: 'WordPress',
    industry: 'Agriculture',
    type: 'WordPress - Theme Development - CMS - CRM Integration',
    image: '/images/portfolio/sowth.png',
    url: 'https://sowth.org/',
    role: 'Web Developer',
    tools: ['WordPress', 'Theme Development', 'CMS', 'CRM Integration', 'Figma'],
    goals: 'Calling all Southern farmers, ranchers - community platform with membership management and resource sharing.',
    challenges: 'Building a community platform that serves both agricultural professionals and consumers with CRM-backed membership management.',
    outcome: 'Community platform for southern farmers and ranchers with membership management and resource sharing.',
  },
];

// ── Methodology ──

export const methodologySteps: MethodologyStep[] = [
  { step: 1, icon: 'UserCheck', title: 'UX Above Everything', description: 'We design with people in mind — creating intuitive interfaces and smooth experiences that turn visitors into customers. Every decision starts with understanding user behavior and aligning it with your business goals.' },
  { step: 2, icon: 'RefreshCw', title: 'Agile & Iterative', description: 'Our process is fast, flexible, and built for results. We work in iterative sprints — refining and improving at every stage. This approach allows us to adapt quickly and deliver scalable, bug-free solutions.' },
  { step: 3, icon: 'Target', title: 'Conversion Focused', description: 'We don\'t just build; we optimize for performance and ROI. From landing page layout to user flow, every component is crafted to increase engagement, improve conversions, and support long-term business.' },
  { step: 4, icon: 'TrendingUp', title: 'Data-Driven Decisions', description: 'We rely on analytics, feedback, and performance data to guide every enhancement. By tracking user behavior and engagement, we continuously improve user experience and technical efficiency.' },
  { step: 5, icon: 'Users', title: 'Collaboration & Transparency', description: 'Our clients are part of the process. You\'ll have access to progress reports, design mockups, and automation flowcharts at every stage — ensuring full visibility and clear communication.' },
  { step: 6, icon: 'ArrowUpRight', title: 'Continuous Improvement', description: 'Once the project is live, we don\'t stop there. We provide ongoing optimization, AI-driven upgrades, and performance monitoring to ensure your systems evolve as your business grows.' },
];

// ── Contact Info ──

export const contactInfo: ContactInfo = {
  phone: '+92 322 6577047',
  email: 'yazinc21@gmail.com',
  hours: 'Mon - Friday',
  location: 'Global — Serving clients across US, EU, Australia, South Africa & Middle East',
};

// ── Social Links ──

export const socialLinks: SocialLink[] = [
  { name: 'LinkedIn', url: 'https://pk.linkedin.com/in/yazinc', icon: 'linkedin' },
  { name: 'Fiverr', url: 'https://www.fiverr.com/yazinc', icon: 'fiverr' },
  { name: 'Instagram', url: 'https://www.instagram.com/yazincnet', icon: 'instagram' },
];

// ── Profile ──

export const profile: ProfileData = {
  name: 'Yasir Ikram',
  title: 'AI & Business Solutions Consultant',
  bio: 'With over 15 years of experience in web application development and business automation, Yasir Ikram has helped agencies, startups, and SMEs across the US, EU, Australia, South Africa, and the Middle East build smarter, scalable digital systems. At YAZ INC, we blend full-stack development with AI-powered innovation — from intelligent CRMs and automation workflows to custom web and e-commerce platforms. Every project is driven by a simple goal: to help businesses save time, automate processes, and scale faster.',
  image: '/images/profile/yasir-ikram.png',
  skills: [
    'AI Integration',
    'WordPress',
    'Shopify',
    'GoHighLevel',
    'Laravel',
    'React',
    'Joomla',
    'WooCommerce',
    'Python',
    'Power BI',
    'PHP',
    'JavaScript',
    'Figma',
    'Custom CSS',
  ],
  languages: ['English', 'Urdu', 'Punjabi'],
  experience: '15+ Years',
};

// ── Footer Data ──

export const footerLinks = {
  solutions: [
    { label: 'AI-Powered Web Development', href: '#services' },
    { label: 'Custom Business Applications', href: '#services' },
    { label: 'GoHighLevel CRM & Automation', href: '#services' },
    { label: 'E-Commerce Development', href: '#services' },
    { label: 'AI Integration & Chatbots', href: '#services' },
  ],
  company: [
    { label: 'About', href: '#about' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Methodology', href: '#methodology' },
    { label: 'Contact', href: '#contact' },
  ],
  resources: [
    { label: 'Blog', href: '#' },
    { label: 'Case Studies', href: '#portfolio' },
    { label: 'YazFex AI', href: 'https://www.yazfexai.com' },
    { label: 'Support', href: '#contact' },
  ],
  connect: [
    { label: 'LinkedIn', href: 'https://pk.linkedin.com/in/yazinc' },
    { label: 'Fiverr', href: 'https://www.fiverr.com/yazinc' },
    { label: 'Instagram', href: 'https://www.instagram.com/yazincnet' },
    { label: 'Email Us', href: 'mailto:yazinc21@gmail.com' },
  ],
};

export const heroImages: string[] = [
  '/images/hero/hero-1.png',
  '/images/hero/hero-2.png',
  '/images/hero/hero-3.png',
  '/images/hero/hero-4.png',
];
