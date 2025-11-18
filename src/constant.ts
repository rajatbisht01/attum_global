import {
  Search,
  Share2,
  Target,
  TrendingUp,
  Megaphone,
  Palette,
  Globe,
  Users,
  CheckCircle,
  BarChart3,
  Database,
  Cloud,
  ClipboardCheck,
  Code,
} from "lucide-react";


export const brandServices = [
  {
    icon: ClipboardCheck,
    title: "SMART Audits",
    description: "Comprehensive audits to evaluate brand, digital, sales, and customer experience effectiveness.",
    detailedDescription:
      "Our SMART Audits provide a 360° view of your business by analyzing brand strength, digital presence, sales efficiency, and customer experience. We identify gaps, uncover opportunities, and deliver actionable insights to elevate your market positioning.",
    image:
      "https://images.unsplash.com/photo-1581091870622-9d8d3f6a47b3?auto=format&fit=crop&w=800&q=80",
    bulletPoints: ["Brand Audit", "Digital Audit", "Sales Audit", "CX Audit"],
  },
  {
    icon: TrendingUp,
    title: "Brand Consulting",
    description: "Strategic consulting to define, position, and scale your brand in competitive markets.",
    detailedDescription:
      "We craft brand strategies that align with your business vision and customer expectations. From positioning and identity design to client strategy, our consulting ensures your brand stands out and builds long-term trust.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    bulletPoints: ["Brand Audit", "Positioning", "Design and Development", "Client Strategy"],
  },
  {
    icon: Target,
    title: "GTM & Retail Expansion",
    description: "End-to-end market entry and retail growth strategies for maximum reach.",
    detailedDescription:
      "Our GTM & Retail Expansion services help brands break into new markets and scale efficiently. We design product, channel, and retail strategies that maximize sales penetration while ensuring customer experience consistency.",
    image:
      "https://images.unsplash.com/photo-1556742400-b5c4ae8fc4b4?auto=format&fit=crop&w=800&q=80",
    bulletPoints: ["Product Strategy", "Channel Strategy", "Retail Expansion", "Sales Strategy", "CX Strategy"],
  },
  {
    icon: Search,
    title: "Integrated Marketing",
    description: "Cross-channel marketing campaigns for impactful engagement and conversions.",
    detailedDescription:
      "We build integrated marketing campaigns that connect your brand across digital, print, and media touchpoints. From campaign planning to budget optimization, we ensure consistent messaging and measurable ROI.",
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=80",
    bulletPoints: ["Campaigns", "Lead Management & Strategy", "Media Planning", "Marketing Budgets"],
  },
  {
    icon: Users,
    title: "Traditional Campaigns",
    description: "High-impact ATL & BTL campaigns for mass brand visibility and awareness.",
    detailedDescription:
      "Our traditional campaigns leverage outdoor, TV, radio, print, and innovative activations to amplify your brand reach. We blend creativity with data-driven targeting for maximum brand recall and resonance.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    bulletPoints: ["Advertising", "Outdoor", "TV & Radio", "Innovations", "Print & BTL"],
  },
  {
    icon: Globe,
    title: "Lead Management",
    description: "Tools and strategies to acquire, nurture, and convert high-quality leads.",
    detailedDescription:
      "We design robust lead management frameworks powered by CRM tools, inbound/outbound strategies, and personalized content journeys. Our focus is to maximize conversion rates and build long-term customer relationships.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80",
    bulletPoints: ["CRM / Tool", "Inbound & Outbound Call Center", "Content Development", "Deliver"],
  },
  {
    icon: CheckCircle,
    title: "B2B Strategy",
    description: "Targeted B2B frameworks to strengthen partnerships, marketing, and field execution.",
    detailedDescription:
      "We craft B2B strategies that empower enterprises to optimize key account management, leverage field marketing, and create impactful content. Our approach ensures sustainable growth in competitive B2B landscapes.",
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80",
    bulletPoints: ["KAM", "B2B Marketing", "Field Marketing", "Content Strategy"],
  },
  {
    icon: BarChart3,
    title: "CX Strategy",
    description: "Frameworks to enhance customer satisfaction, retention, and advocacy.",
    detailedDescription:
      "Our CX Strategy solutions improve customer journeys, implement NPS/CSAT measurement, and design recovery frameworks. We enable businesses to deliver seamless experiences that build loyalty and long-term value.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    bulletPoints: ["NPS/CSAT", "Customer Journey Planning", "Service Recovery Frameworks"],
  },
];


export const digitalServices = [
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Enhance visibility and rank higher on search engines with technical SEO, keyword targeting, and on-page optimization.",
    longDescription:
      "Our SEO services go beyond basic keyword ranking. We focus on improving your technical foundation, optimizing site architecture, and building sustainable strategies that deliver long-term organic growth. By addressing crawlability, page speed, and content relevance, we ensure that your business consistently attracts the right audience.",
    points: [
      "On-page & technical SEO",
      "Comprehensive keyword research",
      "Site speed & mobile optimization",
      "Backlink strategy & monitoring",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Engage customers across platforms with organic and paid campaigns that build brand trust and awareness.",
    longDescription:
      "We help brands establish a consistent voice and personality across social platforms. Our strategies combine organic content, paid ads, influencer partnerships, and community management to drive authentic engagement and measurable conversions.",
    points: [
      "Platform-specific strategy (LinkedIn, Instagram, Facebook, X)",
      "Paid social campaigns",
      "Influencer collaborations",
      "Community building & management",
    ],
    image:
      "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description:
      "Data-driven paid campaigns across Google, Facebook, LinkedIn, and more to maximize ROI.",
    longDescription:
      "Our performance marketing approach combines smart targeting, conversion optimization, and advanced analytics to ensure every dollar spent contributes to your growth. From awareness to acquisition, we focus on measurable outcomes.",
    points: [
      "PPC and display campaigns",
      "Conversion rate optimization",
      "Remarketing strategies",
      "ROI-focused ad spend",
    ],
    image:
      "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: TrendingUp,
    title: "Analytics & Reporting",
    description:
      "In-depth analysis of campaign performance with real-time dashboards and actionable insights.",
    longDescription:
      "Our analytics solutions provide transparency into your digital performance. We track KPIs, monitor customer behavior, and visualize results through interactive dashboards, enabling data-driven decision-making.",
    points: [
      "Custom KPI dashboards",
      "Funnel analysis & attribution",
      "Real-time campaign tracking",
      "Actionable insights & reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Megaphone,
    title: "Content Marketing",
    description:
      "Create impactful blogs, articles, infographics, and video content that drives engagement and conversions.",
    longDescription:
      "We build content strategies that attract, inform, and convert your audience. From thought leadership blogs to visually stunning infographics and videos, our content strengthens your brand voice and boosts SEO.",
    points: [
      "Blog & article creation",
      "Infographics & whitepapers",
      "Video production",
      "Content strategy & distribution",
    ],
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Palette,
    title: "Email & Automation",
    description:
      "Targeted email campaigns and marketing automation workflows to nurture leads and boost conversions.",
    longDescription:
      "We design personalized email sequences and automation workflows that nurture prospects, improve retention, and drive repeat business. From newsletters to transactional flows, our solutions are optimized for engagement.",
    points: [
      "Drip campaigns",
      "Newsletters",
      "Behavior-based automation",
      "A/B testing & optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Globe,
    title: "Web & App Marketing",
    description:
      "Optimized campaigns to boost traffic, engagement, and downloads for websites and mobile apps.",
    longDescription:
      "We drive discovery and engagement for your apps and websites through tailored campaigns. Our focus spans SEO, ASO (App Store Optimization), paid acquisition, and retargeting strategies.",
    points: [
      "App Store Optimization (ASO)",
      "Cross-platform ad campaigns",
      "Engagement & retention strategies",
      "Web traffic growth",
    ],
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },

  {
    icon: Palette,
    title: "Marketing Collateral Design",
    description:
      "Custom design services for brochures, case studies, eBooks, and more to elevate brand presence and communication.",
    longDescription:
      "We craft visually appealing marketing assets that align with your brand identity. From sales collateral to investor decks, our designs communicate your message effectively and leave a lasting impression.",
    points: [
      "Brochures & flyers",
      "Case studies & eBooks",
      "Presentation design",
      "Sales enablement material",
    ],
    image:
      "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=800&q=80",
  },
];




export const platforms = [
  {
    id: 1,
    icon: Database,
    title: "ERP Solutions",
    description:
      "Comprehensive enterprise resource planning systems for streamlined operations and real-time insights.",
    features: [
      "Inventory Management",
      "Financial Analytics",
      "Supply Chain Optimization",
    ],
    image:
      "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80", // Business workflow / ERP-like system
  },
  {
    id: 2,
    icon: Users,
    title: "CRM Platforms",
    description:
      "Customer relationship management tools to enhance engagement and drive sales growth.",
    features: ["Lead Management", "Sales Automation", "Customer Analytics"],
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80", // Team collaboration / CRM training
  },
  {
    id: 3,
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Scalable cloud solutions ensuring security, reliability, and performance at enterprise scale.",
    features: ["Auto-scaling", "Data Security", "Global CDN"],
    image: "/assets/servers.jpg", // Dark cloud / data center background
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "Advanced analytics platforms turning your data into actionable business intelligence.",
    features: [
      "Real-time Dashboards",
      "Predictive Analytics",
      "Custom Reports",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", // Analytics dashboard
  },
];
