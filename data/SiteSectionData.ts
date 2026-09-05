// =====================================================================
// SITE SECTION DATA (About, Services, Trust, Advantage, Counter,
// Projects, Process, Testimonials, Pricing, Contact, Blog, Footer)
// =====================================================================

// --- SHARED ---
export interface TitleBlock {
  subTitle: string;
  headline: string;
  centered?: boolean;
}

// =====================================================================
// ABOUT SECTION
// =====================================================================
export interface AboutData extends TitleBlock {
  paragraph: string;
  checkList: string[];
  cta: { label: string; href: string };
  phone: { label: string; number: string; href: string };
  featureItems: { icon: string; text: string }[];
  images: { main: string; overlay: string };
  rating: { score: string; stars: number; halfStar: boolean; caption: string };
  tagText: string;
}

export const aboutData: AboutData = {
  subTitle: "Who We Are",
  headline: "A Manufacturing & Sourcing Partner Built by Specialists",
  paragraph:
    "SUNTEX Apparel Group is a Bangladesh-based garment manufacturing and sourcing company formed by specialists from across the apparel value chain. We combine our own knit and woven production with a trusted partner network for every other category a modern buyer needs — giving international and local clients one reliable point of contact for quality, adaptability, and on-time delivery.",
  checkList: [
    "200+ Partner Composite Factories",
    "5M+ Knit Pieces / Month Capacity",
    "1M+ Woven Pieces / Month Capacity",
    "500 Minimum Order Quantity (pcs)",
  ],
  cta: { label: "Explore More", href: "#services" },
  phone: {
    label: "Call Us Anytime",
    number: "+123-456-7890",
    href: "tel:+1234567890",
  },
  featureItems: [
    { icon: "handshake", text: "Factory & Production\nLeadership" },
    { icon: "dye", text: "Merchandising\nExpertise" },
  ],
  images: {
    main: "https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&w=800",
    overlay: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  rating: {
    score: "4.9",
    stars: 5,
    halfStar: true,
    caption: "Trusted by International\n& Local Buyers Alike",
  },
  tagText: "SUNTEX Global Ltd.",
};

// =====================================================================
// SERVICES SECTION
// =====================================================================
export interface Service {
  title: string;
  description: string;
  href: string;
  icon: "woven" | "knit" | "garment" | "fiber";
  hoverImage?: string;
  readMore?: { label: string; href: string };
}

export interface ServicesData extends TitleBlock {
  items: Service[];
  bottomText: string;
  seeAll: { label: string; href: string };
}

export const servicesData: ServicesData = {
  subTitle: "What We Do",
  headline: "One Partner, Two Ways We Deliver",
  centered: true,
  items: [
    {
      title: "Knit Garments",
      description:
        "In-house knit production with warp and circular knitting — full control over quality, cost, and lead time from fabric to finished garment.",
      href: "/services",
      icon: "knit",
      hoverImage: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=1200",
      readMore: { label: "read more", href: "/services" },
    },
    {
      title: "Woven Garments",
      description:
        "High-quality woven garment manufacturing — shirts, trousers, jackets, and formal wear with precision finishing.",
      href: "/services",
      icon: "woven",
      hoverImage: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=1200",
      readMore: { label: "read more", href: "/services" },
    },
    {
      title: "Sweaters & Home Textiles",
      description:
        "Partner-sourced sweaters, home textiles, socks, caps, and leather items — collaborative partners who extend our range.",
      href: "/services",
      icon: "garment",
      hoverImage: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=1200",
      readMore: { label: "read more", href: "/services" },
    },
    {
      title: "Design & Development",
      description:
        "In-house design and product development — from concept to tech pack to physical sample, all under one roof.",
      href: "/services",
      icon: "fiber",
      hoverImage: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=1200",
      readMore: { label: "read more", href: "/services" },
    },
  ],
  bottomText: "Don't hesitate, contact us for better help and services.",
  seeAll: { label: "See All Services", href: "/services" },
};

// =====================================================================
// WHY GLOBAL BRANDS TRUST US
// =====================================================================
export interface TrustBar {
  label: string;
  value: number;
}

export interface TrustData extends TitleBlock {
  paragraph: string;
  stats: { value: string; label: string }[];
  image1: string;
  image2: string;
  bars: TrustBar[];
  checkList: string[];
  video: { poster: string; url: string; playLabel: string };
  demoImage: string;
}

export const trustData: TrustData = {
  subTitle: "Why Global Brands Trust Us",
  headline: "Reliable Manufacturing Partner for International Buyers",
  paragraph:
    "SUNTEX was founded by specialists from across the garment industry — united by one goal: manufacture and source the best possible garments while ensuring quality and adaptability to global market trends. Our mission is to connect global fashion ideas with reliable Bangladeshi manufacturing.",
  stats: [
    { value: "200+", label: "Partner Factories in Bangladesh" },
    { value: "6M+", label: "Total Monthly Piece Capacity" },
  ],
  image1: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=1200",
  image2: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=1200",
  bars: [
    { label: "Experienced Professionals", value: 90 },
    { label: "Quality Materials Only", value: 95 },
    { label: "On-Time Delivery Rate", value: 88 },
  ],
  checkList: [
    "Tight Project Oversight",
    "Fast Turnaround on Factory Visits",
    "Easy Logistics & Vendor Consolidation",
    "Dhaka, Gazipur, Narayanganj, Chattogram",
  ],
  video: {
    poster: "https://images.pexels.com/photos/326240/pexels-photo-326240.jpeg?auto=compress&cs=tinysrgb&w=1200",
    url: "https://www.youtube.com/watch?v=Cn4G2lZ_g2I",
    playLabel: "Play Video",
  },
  demoImage: "https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

// =====================================================================
// ADVANTAGE SECTION
// =====================================================================
export interface Advantage {
  title: string;
  image: string;
  description: string;
  readMore: { label: string; href: string };
  icon: string;
}

export interface AdvantageData extends TitleBlock {
  items: Advantage[];
}

export const advantageData: AdvantageData = {
  subTitle: "Our Advantage",
  headline: "Why Brands Choose SUNTEX as Their Manufacturing Partner",
  centered: true,
  items: [
    {
      title: "Vertical Integration",
      image: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Manufacturing and sourcing under one roof — fewer handoffs, fewer risks. From sampling to shipping, handled end-to-end.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "users",
    },
    {
      title: "Experienced Team",
      image: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Production leadership, 15+ year merchandising expertise, and a new generation of e-commerce and retail minds combined.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "shield",
    },
    {
      title: "Network Depth",
      image: "https://images.pexels.com/photos/326240/pexels-photo-326240.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "200+ partner factories mean real flexibility on capacity and category — knit, woven, sweaters, home textiles, socks, caps, shoes.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "sparkles",
    },
    {
      title: "Flexible MOQ",
      image: "https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Standard MOQ of 500 pieces per style, with special low-MOQ options for luxury brands, streetwear, capsule collections, and emerging labels.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "leaf",
    },
    {
      title: "One Point of Contact",
      image: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Sampling to shipping, handled end-to-end by a single accountable team — no chasing multiple vendors.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "truck",
    },
    {
      title: "In-House Design",
      image: "https://images.pexels.com/photos/9776239/pexels-photo-9776239.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Faster development — ideas become physical samples without leaving our facility. Tech packs, prototypes, and production-ready specs.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "cog",
    },
    {
      title: "Own QC & Inspection",
      image: "https://images.pexels.com/photos/4498310/pexels-photo-4498310.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "In-house quality control and compliance inspection at every stage — fabric, cutting, sewing, finishing, and pre-shipment.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "award",
    },
    {
      title: "Fast Turnaround",
      image: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "As fast as 1 week for repeat styles — up to 1 month for new developments. Logistics and shipping coordination included.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "headset",
    },
  ],
};

// =====================================================================
// COUNTER / INNOVATION SECTION
// =====================================================================
export interface Counter {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface CounterData extends TitleBlock {
  paragraph: string;
  image: string;
  counters: Counter[];
}

export const counterData: CounterData = {
  subTitle: "Our Numbers",
  headline: "SUNTEX at a Glance",
  paragraph:
    "Our vision is to be Bangladesh's most trusted full-service sourcing and manufacturing partner — recognized for adaptability to global trends and uncompromising quality.",
  image: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=1200",
  counters: [
    {
      value: 200,
      suffix: "+",
      label: "Partner Factories",
      description: "Concentrated in Bangladesh's core manufacturing belt — Dhaka, Gazipur, Narayanganj, Chattogram.",
    },
    {
      value: 5,
      suffix: "M+",
      label: "Knit Pieces / Month",
      description: "In-house knit production capacity with warp and circular knitting technology.",
    },
    {
      value: 1,
      suffix: "M+",
      label: "Woven Pieces / Month",
      description: "High-volume woven garment production for international fashion brands.",
    },
    {
      value: 500,
      suffix: "",
      label: "Standard MOQ",
      description: "Pieces per style, single color — flexible options available as trust grows.",
    },
  ],
};

// =====================================================================
// PROJECTS SECTION
// =====================================================================
export interface Project {
  title: string;
  description: string;
  viewMore: { label: string; href: string };
  image: string;
}

export interface ProjectsData extends TitleBlock {
  items: Project[];
}

export const projectsData: ProjectsData = {
  subTitle: "Our Product Range",
  headline: "What We Manufacture & Source",
  centered: true,
  items: [
    {
      title: "Knit Garments",
      description: "T-shirts, polos, hoodies, joggers, and activewear — produced in-house with 5M+ monthly capacity.",
      viewMore: { label: "View More", href: "/services" },
      image: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Woven Garments",
      description: "Shirts, trousers, jackets, and formal wear — 1M+ pieces per month with precision finishing.",
      viewMore: { label: "View More", href: "/services" },
      image: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Sweaters",
      description: "Full-range sweater manufacturing through our trusted partner factory network.",
      viewMore: { label: "View More", href: "/services" },
      image: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Home Textiles",
      description: "Bedding, towels, curtains, and home furnishing products sourced from certified factories.",
      viewMore: { label: "View More", href: "/services" },
      image: "https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Caps, Socks & Leather",
      description: "Accessories and leather items — extending your product line through our partner network.",
      viewMore: { label: "View More", href: "/services" },
      image: "https://images.pexels.com/photos/4498310/pexels-photo-4498310.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ],
};

// =====================================================================
// WORKING PROCESS SECTION
// =====================================================================
export interface ProcessStep {
  order: string;
  title: string;
  description: string;
}

export interface ProcessData extends TitleBlock {
  steps: ProcessStep[];
}

export const processData: ProcessData = {
  subTitle: "Working Process",
  headline: "How We Bring Your Garments to Life",
  centered: true,
  steps: [
    {
      order: "01",
      title: "Inquiry & Consultation",
      description: "Understanding your product requirements, target market, and timeline.",
    },
    {
      order: "02",
      title: "Sampling & Development",
      description: "Concept to tech pack to physical sample — all handled in-house.",
    },
    {
      order: "03",
      title: "Costing & Confirmation",
      description: "Transparent pricing with clear MOQ terms and production timelines.",
    },
    {
      order: "04",
      title: "Production & QC",
      description: "Full-scale manufacturing with in-line quality control at every stage.",
    },
    {
      order: "05",
      title: "Logistics & Delivery",
      description: "End-to-end shipping coordination from factory floor to port.",
    },
    {
      order: "06",
      title: "After-Sales Support",
      description: "Ongoing partnership — reorders,developments, & continuous improvement.",
    },
  ],
};

// =====================================================================
// TESTIMONIALS SECTION
// =====================================================================
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  largeImage: string;
}

export interface TestimonialsData extends TitleBlock {
  badge: { value: string; text: string };
  items: Testimonial[];
}

export const testimonialsData: TestimonialsData = {
  subTitle: "Customer Testimonials",
  headline: "What Our Buyers Say About SUNTEX",
  centered: true,
  badge: { value: "100+", text: "More Than 100+ Customers. We pride ourselves on delivering exceptional service and craftsmanship." },
  items: [
    {
      quote:
        "SUNTEX delivered our entire knit collection on time with exceptional quality. Their vertical integration meant we dealt with one team from sample to shipment.",
      name: "Fahim Shyket",
      role: "Director, Marketing Lead",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      largeImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote:
        "The flexibility on MOQ was a game-changer for our streetwear brand. Starting at 500 pieces let us test the market without massive upfront investment.",
      name: "Kimberly Nguyen",
      role: "Brand Director",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      largeImage: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote:
        "From concept to container — SUNTEX handled everything. Their in-house design team turned our rough sketches into production-ready tech packs in days.",
      name: "Harper Russo",
      role: "Operations Manager",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      largeImage: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ],
};

// =====================================================================
// PRICING SECTION
// =====================================================================
export interface PricingPlan {
  title: string;
  tagline: string;
  price: string;
  period: string;
  cta: string;
  features: string[];
  featured?: boolean;
  image: string;
}

export interface PricingData extends TitleBlock {
  items: PricingPlan[];
}

export const pricingData: PricingData = {
  subTitle: "Our Pricing Approach",
  headline: "Flexible Manufacturing for Every Business Size",
  centered: true,
  items: [
    {
      title: "Emerging Labels",
      tagline: "Perfect for startups and capsule collections",
      price: "500+",
      period: "pieces/style",
      cta: "Request a Quote",
      image: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "MOQ: 500 Pieces Per Style",
        "Standard Fabric Options",
        "Basic Stitching & Finishing",
        "Standard Packaging",
        "Quality Inspection Included",
        "Delivery: 2–3 Weeks",
      ],
    },
    {
      title: "Growth Brands",
      tagline: "For established brands scaling production",
      price: "1,000+",
      period: "pieces/style",
      cta: "Get Custom Pricing",
      featured: true,
      image: "https://images.pexels.com/photos/9776239/pexels-photo-9776239.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "MOQ: 1,000+ Pieces",
        "Multiple Fabric Options",
        "Custom Labels & Tags",
        "Advanced Stitching",
        "Dedicated Quality Control",
        "Delivery: 3–4 Weeks",
      ],
    },
    {
      title: "Global Brands",
      tagline: "High-volume production for international buyers",
      price: "5,000+",
      period: "pieces/style",
      cta: "Contact Sales Team",
      image: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "5,000+ Pieces Production",
        "Full Customization",
        "Private Label & Branding",
        "Priority Production Line",
        "International Quality Standards",
        "Fast-Track Export Handling",
      ],
    },
  ],
};

// =====================================================================
// CONTACT SECTION
// =====================================================================
export interface ContactData extends TitleBlock {
  paragraph: string;
  form: { submitLabel: string; fields: { label: string; type: string; placeholder: string; name: string; textarea?: boolean; select?: boolean; options?: string[] }[] };
  images: { one: string; two: string };
}

export const contactData: ContactData = {
  subTitle: "Connect with Us",
  headline: "Let's Connect Ideas to Reality",
  centered: false,
  paragraph:
    "We'd welcome the chance to discuss your next collection, program, or order.",
  images: {
    one: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1200",
    two: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  form: {
    submitLabel: "Submit A Message",
    fields: [
      { label: "Name", type: "text", name: "name", placeholder: "Your Name" },
      { label: "Company", type: "text", name: "company", placeholder: "Company Name" },
      { label: "Email", type: "email", name: "email", placeholder: "Email Address" },
      { label: "Phone", type: "tel", name: "phone", placeholder: "Phone Number" },
      {
        label: "Product Category",
        type: "text",
        name: "category",
        placeholder: "Select category",
        select: true,
        options: ["Knit", "Woven", "Sweater", "Home Textiles", "Socks", "Shoes & Leather"],
      },
      { label: "Message", type: "text", name: "message", placeholder: "Tell us about your project", textarea: true },
    ],
  },
};

// =====================================================================
// BLOG SECTION
// =====================================================================
export interface BlogPost {
  date: { day: string; month: string; year: string };
  meta: { author: string; comments: string };
  title: string;
  excerpt: string;
  readMore: { label: string; href: string };
  image: string;
}

export interface BlogData extends TitleBlock {
  items: BlogPost[];
}

export const blogData: BlogData = {
  subTitle: "Our Blog & Insights",
  headline: "Industry Trends & Manufacturing Updates",
  centered: true,
  items: [
    {
      date: { day: "15", month: "Aug", year: "2026" },
      meta: { author: "SUNTEX Team", comments: "(05) Comments" },
      title: "Understanding MOQ: How Low-Volume Brands Can Access Factory Production",
      excerpt:
        "The right MOQ depends on the relationship we build with each customer. As trust and order history grow, so does our flexibility.",
      readMore: { label: "READ MORE", href: "#blog" },
      image: "https://images.pexels.com/photos/9776239/pexels-photo-9776239.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      date: { day: "10", month: "Aug", year: "2026" },
      meta: { author: "SUNTEX Team", comments: "(03) Comments" },
      title: "From Concept to Container: The SUNTEX End-to-End Manufacturing Process",
      excerpt:
        "Our mission is to connect global fashion ideas with reliable Bangladeshi manufacturing — the right product, right quality, on time.",
      readMore: { label: "READ MORE", href: "#blog" },
      image: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      date: { day: "05", month: "Aug", year: "2026" },
      meta: { author: "SUNTEX Team", comments: "(02) Comments" },
      title: "Why Bangladesh Remains the World's Garment Manufacturing Hub",
      excerpt:
        "With 200+ partner factories in the core manufacturing belt, Bangladesh offers unmatched depth for textile and garment sourcing.",
      readMore: { label: "READ MORE", href: "#blog" },
      image: "https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ],
};

// =====================================================================
// FOOTER DATA
// =====================================================================
export interface FooterData {
  description: string;
  columns: { title: string; links: { label: string; href: string }[] }[];
  contact: { label: string; value: string; href: string }[];
  copyright: string;
  social: { label: string; href: string; icon: "facebook" | "twitter" | "instagram" | "linkedin" }[];
}

export const footerData: FooterData = {
  description:
    "SUNTEX Global Ltd. is a Bangladesh-based garment manufacturing and sourcing company formed by specialists from across the apparel value chain.",
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Services", href: "#services" },
        { label: "Projects", href: "#projects" },
        { label: "Blog", href: "#blog" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Knit Garments", href: "/services" },
        { label: "Woven Garments", href: "/services" },
        { label: "Sweaters & Home Textiles", href: "/services" },
        { label: "Design & Development", href: "/services" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact", href: "#contact" },
        { label: "FAQ", href: "/services" },
        { label: "Privacy Policy", href: "#" },
        { label: "Terms & Conditions", href: "#" },
      ],
    },
  ],
  contact: [
    { label: "Address", value: "House-690, Road-09, Mirpur DOHS, Dhaka-1216, Bangladesh", href: "#" },
    { label: "Email", value: "info@suntexbd.com", href: "mailto:info@suntexbd.com" },
    { label: "Phone", value: "+123-456-7890", href: "tel:+1234567890" },
  ],
  social: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
  ],
  copyright: "© 2026 SUNTEX Apparel Group. All Rights Reserved.",
};

// =====================================================================
// MISSION & VISION
// =====================================================================
export interface MissionVisionData {
  mission: { heading: string; text: string; tags: string[] };
  vision: { heading: string; text: string; tags: string[] };
}

export const missionVisionData: MissionVisionData = {
  mission: {
    heading: "Our Mission",
    text: "To connect global fashion ideas with reliable Bangladeshi manufacturing — delivering the right product, at the right quality, on time, every time.",
    tags: ["Reliable Manufacturing", "Global Fashion", "Quality First", "On Time Delivery"],
  },
  vision: {
    heading: "Our Vision",
    text: "To be Bangladesh's most trusted full-service sourcing & manufacturing partner — recognized for adaptability to global trends & uncompromising quality.",
    tags: ["Global Recognition", "Innovation", "Quality Research", "Trusted Partner"],
  },
};

// =====================================================================
// PRODUCTS SECTION
// =====================================================================
export interface ProductCategory {
  category: string;
  note: string;
  image: string;
}

export interface ProductsData extends TitleBlock {
  items: ProductCategory[];
  caption: string;
}

export const productsData: ProductsData = {
  subTitle: "Our Products",
  headline: "All Types of Products, Under One Roof",
  centered: true,
  items: [
    { category: "Knit", note: "Manufactured in-house", image: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { category: "Woven", note: "Manufactured in-house", image: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { category: "Sweater", note: "Via trusted partners", image: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { category: "Home Textiles", note: "Via trusted partners", image: "https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { category: "Socks", note: "Via trusted partners", image: "https://images.pexels.com/photos/4498310/pexels-photo-4498310.jpeg?auto=compress&cs=tinysrgb&w=600" },
    { category: "Shoes & Leather", note: "Via trusted partners", image: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=600" },
  ],
  caption: "Knit and woven are manufactured in-house; sweaters, home textiles, socks, and shoes & leather items are supplied through trusted, collaborative business partners.",
};

// =====================================================================
// MOQ SECTION
// =====================================================================
export interface MoqData extends TitleBlock {
  standard: { value: string; scope: string; philosophy: string };
  specialTrack: { availability: string; target: string; useCase: string };
}

export const moqData: MoqData = {
  subTitle: "Order Flexibility",
  headline: "MOQ Built Around the Relationship",
  centered: true,
  standard: {
    value: "500",
    scope: "Pieces per style, single color",
    philosophy: "The right number, honestly, depends on the relationship we build with each customer. As trust and order history grow, so does our flexibility.",
  },
  specialTrack: {
    availability: "Available on inquiry",
    target: "Luxury & Streetwear Brands",
    useCase: "Built for smaller drops, capsule collections, and emerging labels that need production quality without factory-scale volume.",
  },
};

// =====================================================================
// FACTORY NETWORK SECTION
// =====================================================================
export interface FactoryNetworkData extends TitleBlock {
  paragraph: string;
  locations: string[];
  advantages: string[];
}

export const factoryNetworkData: FactoryNetworkData = {
  subTitle: "Our Network",
  headline: "A Deep, Reliable Factory Network",
  centered: true,
  paragraph: "200+ composite factories across Bangladesh — concentrated in Dhaka and Narayanganj. This network means real flexibility on capacity, product category, and turnaround — without compromising the quality control of a single trusted circle of partners.",
  locations: ["Dhaka", "Gazipur", "Narayanganj", "Chattogram"],
  advantages: [
    "Tight project oversight",
    "Fast turnaround on physical factory visits",
    "Easy logistics and vendor consolidation",
  ],
};

// =====================================================================
// FACILITIES GALLERY SECTION
// =====================================================================
export interface FacilityItem {
  title: string;
  image: string;
}

export interface FacilitiesData extends TitleBlock {
  items: FacilityItem[];
}

export const facilitiesData: FacilitiesData = {
  subTitle: "Our Facilities",
  headline: "See Where It's Made",
  centered: true,
  items: [
    { title: "Cutting Section", image: "https://images.pexels.com/photos/4498310/pexels-photo-4498310.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Sewing Line", image: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Finishing & QC", image: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=800" },
    { title: "Warehouse & Logistics", image: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=800" },
  ],
};

// =====================================================================
// QUALITY ASSURANCE (5-STAGE QC)
// =====================================================================
export interface QcStage {
  step: number;
  stage: string;
  description: string;
}

export interface QualityData extends TitleBlock {
  stages: QcStage[];
  caption: string;
}

export const qualityData: QualityData = {
  subTitle: "Quality Assurance",
  headline: "Quality Checked at Every Stage",
  centered: true,
  stages: [
    { step: 1, stage: "Fabric & Trims", description: "Incoming material inspection before cutting begins." },
    { step: 2, stage: "Cutting", description: "Pattern and cut accuracy checks against approved specs." },
    { step: 3, stage: "Sewing", description: "In-line inspection throughout the sewing line." },
    { step: 4, stage: "Finishing", description: "Finishing, trims, and measurement checks pre-packing." },
    { step: 5, stage: "Pre-Shipment", description: "Final inspection and compliance sign-off before dispatch." },
  ],
  caption: "Our own QC team owns every checkpoint — not a subcontracted inspector meeting a buyer only at the final stage.",
};

// =====================================================================
// LEAD TIME SECTION
// =====================================================================
export interface LeadTimeData extends TitleBlock {
  tiers: { tier: string; details: string }[];
}

export const leadTimeData: LeadTimeData = {
  subTitle: "Lead Time",
  headline: "Lead Time That Matches Your Order",
  centered: true,
  tiers: [
    { tier: "As Fast As 1 Week", details: "For smaller orders and repeat styles with established specs." },
    { tier: "Up To 1 Month", details: "For larger volumes or new developments requiring full sampling and sourcing." },
  ],
};

// =====================================================================
// TEAM SECTION
// =====================================================================
export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
}

export interface TeamData extends TitleBlock {
  members: TeamMember[];
}

export const teamData: TeamData = {
  subTitle: "Our Team",
  headline: "Specialists Across the Value Chain",
  centered: true,
  members: [
    { name: "Production Lead", role: "Production & Factory Management", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Merchandising Lead", role: "Merchandising Leadership (15+ Yrs)", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "E-Commerce Lead", role: "E-Commerce & Retail Strategy", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400" },
    { name: "Design Lead", role: "Design & Quality Assurance", avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400" },
  ],
};

// =====================================================================
// WHO WE SERVE SECTION
// =====================================================================
export interface WhoWeServeData extends TitleBlock {
  segments: { title: string; description: string; icon: string }[];
}

export const whoWeServeData: WhoWeServeData = {
  subTitle: "Who We Serve",
  headline: "Built for Global Buyers and Local Clients",
  centered: true,
  segments: [
    {
      title: "International Buyers",
      description: "From emerging streetwear and luxury labels to established retailers — sourced and produced to meet international quality expectations and shipped worldwide.",
      icon: "globe",
    },
    {
      title: "Local Bangladesh Clients",
      description: "Local brands and businesses get the same in-house design, sampling, QC, and production capability — with the ease of working with a partner just down the road.",
      icon: "home",
    },
  ],
};
