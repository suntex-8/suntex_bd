// =====================================================================
// SITE SECTION DATA (About, Services, Trust, Advantage, Counter,
// Projects, Process, Testimonials, Pricing, Contact, Blog, Footer)
// ---------------------------------------------------------------------
// Every section reads its content from here so you can edit copy and
// image links without touching the components.
//
// Image links: place images in /public and reference "/your-image.jpg",
// or use any external URL.
// =====================================================================

// --- SHARED ---
export interface TitleBlock {
  subTitle: string;
  headline: string;
  /** Set true when the headline is a single centered line */
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
  subTitle: "About Us",
  headline: "Where Tradition Meets Innovation In Suntex Manufacturing",
  paragraph:
    "We are a leading Suntex & garment manufacturing company dedicated to producing high quality fabrics and apparel for global brands. With years of expertise, advanced technology,",
  checkList: [
    "Sustainable Production Practices",
    "Advanced Weaving Technology",
    "Professional Quality Inspection Teams",
    "Experienced Craftsmanship Team",
  ],
  cta: { label: "Explore More", href: "#services" },
  phone: {
    label: "Call Center 24/7",
    number: "+1 (212)-578-5758",
    href: "tel:+12125785758",
  },
  featureItems: [
    { icon: "handshake", text: "Collaborative Design\nPartnerships" },
    { icon: "dye", text: "Cutting-Edge Dyeing\nTechniques" },
  ],
  images: {
    main:
      "https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&w=800",
    overlay:
      "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  rating: {
    score: "4.9",
    stars: 5,
    halfStar: true,
    caption: "Real Stories, Real Satisfaction:\nHear from Our Customers",
  },
  tagText: "Suntex Industry",
};

// =====================================================================
// SERVICES SECTION
// =====================================================================
export interface Service {
  title: string;
  description: string;
  href: string;
  /** Icon name used to pick an inline SVG. Options: "woven","knit","garment","fiber" */
  icon: "woven" | "knit" | "garment" | "fiber";
  /** Optional hover background image */
  hoverImage?: string;
  readMore?: { label: string; href: string };
}

export interface ServicesData extends TitleBlock {
  items: Service[];
  bottomText: string;
  seeAll: { label: string; href: string };
}

export const servicesData: ServicesData = {
  subTitle: "Our Services",
  headline: "Complete Suntex & Garment Manufacturing Solutions",
  centered: true,
  items: [
    {
      title: "Woven Suntexs",
      description:
        "We are a leading Suntex garment manufacturing company dedicated to producing high quality fabrics and apparel.",
      href: "#services",
      icon: "woven",
      hoverImage: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=1200",
      readMore: { label: "read more", href: "#services" },
    },
    {
      title: "Knit Warp & Circular",
      description:
        "We are a leading Suntex garment manufacturing company dedicated to producing high quality fabrics and apparel.",
      href: "#services",
      icon: "knit",
      hoverImage: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=1200",
      readMore: { label: "read more", href: "#services" },
    },
    {
      title: "Garment Manufacturing",
      description:
        "We are a leading Suntex garment manufacturing company dedicated to producing high quality fabrics and apparel.",
      href: "#services",
      icon: "garment",
      hoverImage: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=1200",
      readMore: { label: "read more", href: "#services" },
    },
    {
      title: "Natural Fiber Suntexs",
      description:
        "We are a leading Suntex garment manufacturing company dedicated to producing high quality fabrics and apparel.",
      href: "#services",
      icon: "fiber",
      hoverImage: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=1200",
      readMore: { label: "read more", href: "#services" },
    },
  ],
  bottomText: "Don't hesitate, contact us for better help and services.",
  seeAll: { label: "See All Services", href: "#services" },
};

// =====================================================================
// WHY GLOBAL BRANDS TRUST US  (PARALLAX SECTION)
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
  /** DEMO image used for the large parallax background. Change this link freely. */
  demoImage: string;
}

export const trustData: TrustData = {
  subTitle: "Why Global Brands Trust Us",
  headline:
    "Why Trust Global Fashion Brands Rely On Our Suntex Excellence",
  paragraph:
    "We are committed to integrating sustainability, environmental stewardship, and ethical governance into our business. As a leader in technical Suntexs, we recognize the responsibility we have in reducing our environmental impact, fostering a positive social footprint,",
  stats: [
    { value: "100mln+", label: "Satisfied Customer in World Wide" },
    { value: "350k+", label: "Project Complete" },
  ],
  image1: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=1200",
  image2: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=1200",
  bars: [
    { label: "Experienced Professionals", value: 85 },
    { label: "Quality Materials Only", value: 90 },
    { label: "Eco-Friendly Solutions", value: 70 },
  ],
  checkList: [
    "Access & Diversification",
    "Clear Investment Process",
    "Expert Guidance Risk",
    "24/7 Ongoing Support",
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
  headline: "Why We Stand Out in the Suntex Industry",
  centered: true,
  items: [
    {
      title: "Skilled Workforce Expertise",
      image: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "A leading Suntex & garment manufacturing company dedicated to producing high-quality fabrics Knit warp & circular.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "users",
    },
    {
      title: "Unmatched Quality Control",
      image: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "A leading Suntex & garment manufacturing company dedicated to producing high-quality fabrics Knit warp & circular.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "shield",
    },
    {
      title: "Eco-Friendly Practices",
      image: "https://images.pexels.com/photos/326240/pexels-photo-326240.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "A leading Suntex & garment manufacturing company dedicated to producing high-quality fabrics Knit warp & circular.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "leaf",
    },
    {
      title: "Innovative Fabric Solutions",
      image: "https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "A leading Suntex & garment manufacturing company dedicated to producing high-quality fabrics Knit warp & circular.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "sparkles",
    },
    {
      title: "Fast Global Delivery",
      image: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Reliable, on-time logistics that get your fabrics to any destination across the globe without delay.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "truck",
    },
    {
      title: "Certified Sustainability",
      image: "https://images.pexels.com/photos/9776239/pexels-photo-9776239.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Internationally recognised environmental and ethical certifications across all our production lines.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "award",
    },
    {
      title: "Advanced Machinery",
      image: "https://images.pexels.com/photos/4498310/pexels-photo-4498310.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "State-of-the-art looms and finishing equipment enabling precision, consistency and higher output.",
      readMore: { label: "read more", href: "#advantage" },
      icon: "cog",
    },
    {
      title: "24/7 Client Support",
      image: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1200",
      description:
        "Dedicated support desk available around the clock to guide you from inquiry to final delivery.",
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
  subTitle: "Innovation in Suntexs",
  headline: "Modern Tradition At The Forefront Of The Suntex Industry",
  paragraph:
    "We believe in operating in a way that ensures a holistic view on taking care of our products & processes in a way that safeguards our planet and our people.",
  image: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=1200",
  counters: [
    {
      value: 25,
      suffix: "+",
      label: "Years of experience",
      description: "Decades of experience in delivering impactful digital solutions.",
    },
    {
      value: 750,
      suffix: "k+",
      label: "meters month output",
      description: "With efficient production of 690 tons of fabric per month.",
    },
    {
      value: 4356,
      suffix: "",
      label: "factory floor space",
      description: "One of the largest & most reputed Suntex groups in the globe.",
    },
    {
      value: 99,
      suffix: "%",
      label: "Client satisfaction rate",
      description: "We build long-term partnerships through proven results.",
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
  subTitle: "Future Project",
  headline: "Discover Our Creative Technical Fabric Projects",
  centered: true,
  items: [
    {
      title: "Luxury Fabric",
      description: "Delivered premium silk and cotton blends tailored for high-fashion collections.",
      viewMore: { label: "View More", href: "#projects" },
      image: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Denim Textiles",
      description: "Heavy-duty denim production with sustainable dyeing for global apparel brands.",
      viewMore: { label: "View More", href: "#projects" },
      image: "https://images.pexels.com/photos/9776239/pexels-photo-9776239.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Outdoor Weave",
      description: "Technical outdoor fabrics engineered for extreme weather and UV resistance.",
      viewMore: { label: "View More", href: "#projects" },
      image: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Technical Synthetics",
      description: "High-performance synthetic knits for athletic and performance wear brands.",
      viewMore: { label: "View More", href: "#projects" },
      image: "https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      title: "Heritage Collection",
      description: "Traditional handloom techniques revived for modern sustainable fashion.",
      viewMore: { label: "View More", href: "#projects" },
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
  headline: "Description Suntexs process for exceptional results",
  centered: true,
  steps: [
    {
      order: "01",
      title: "Production of fabric",
      description: "We do execute stabilization including reweaving & stitch repair details.",
    },
    {
      order: "02",
      title: "Exportation globally",
      description: "Assist collection strategies, storage, application and pest production.",
    },
    {
      order: "03",
      title: "Improve and Evolve",
      description: "We review the design for enhancements and ongoing improvement.",
    },
    {
      order: "04",
      title: "Lasting Partnership",
      description: "We build strong client relationships through regular contact and feedback.",
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
  subTitle: "Customer testimonials",
  headline: "Comments Regarding The Suntex Industry",
  centered: true,
  badge: { value: "100+", text: "More Than 100+ Customers. We pride ourselves on delivering exceptional service and craftsmanship." },
  items: [
    {
      quote:
        "An industrial manufacturing company is a business entity that specializes in producing and supplying a wide range of products and components used in various industries.",
      name: "Savannah Nguyen",
      role: "CHIEF CLIENTS",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      largeImage: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote:
        "An industrial manufacturing company is a business entity that specializes in producing and supplying a wide range of products and components used in various industries.",
      name: "Esther Howard",
      role: "CHIEF EXECUTIVE",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      largeImage: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      quote:
        "An industrial manufacturing company is a business entity that specializes in producing and supplying a wide range of products and components used in various industries.",
      name: "Cameron Williamson",
      role: "FOUNDER, FABRICA",
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
  subTitle: "Our Pricing Plans",
  headline: "Flexible Manufacturing Solutions For Every Business Size",
  centered: true,
  items: [
    {
      title: "Basic Production",
      tagline: "Affordable price plan for industrial purposes â€¦",
      price: "$199",
      period: "/Monthly",
      cta: "Request a Quote",
      image: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Minimum Order: 500 â€“ 1,000 pieces",
        "Standard Fabric Options",
        "Basic Stitching & Finishing",
        "Standard Packaging",
        "Quality Inspection Included",
        "Delivery: 2â€“3 Weeks",
      ],
    },
    {
      title: "Standard Manufacturing",
      tagline: "Affordable price plan for industrial purposes â€¦",
      price: "$259",
      period: "/Monthly",
      cta: "Get Custom Pricing",
      featured: true,
      image: "https://images.pexels.com/photos/9776239/pexels-photo-9776239.jpeg?auto=compress&cs=tinysrgb&w=1200",
      features: [
        "Minimum Order: 1,000 â€“ 5,000 pieces",
        "Multiple Fabric Options",
        "Custom Labels & Tags",
        "Advanced Stitching",
        "Dedicated Quality Control",
        "Delivery: 3â€“4 Weeks",
      ],
    },
    {
      title: "Premium Bulk Production",
      tagline: "Affordable price plan for industrial purposes â€¦",
      price: "$499",
      period: "/Monthly",
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
  form: { submitLabel: string; fields: { label: string; type: string; placeholder: string; name: string; textarea?: boolean }[] };
  images: { one: string; two: string };
}

export const contactData: ContactData = {
  subTitle: "Connect with Us",
  headline: "We're Here To Help With Your Texora & Garment Needs.",
  centered: false,
  paragraph:
    "Great! We're excited to hear from you and/or start something amazing together.",
  images: {
    one: "https://images.pexels.com/photos/3735641/pexels-photo-3735641.jpeg?auto=compress&cs=tinysrgb&w=1200",
    two: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  form: {
    submitLabel: "Submit A Message",
    fields: [
      { label: "Full Name", type: "text", name: "name", placeholder: "Full Name" },
      { label: "Phone No", type: "tel", name: "phone", placeholder: "Phone No" },
      { label: "Email Address", type: "email", name: "email", placeholder: "Email Address" },
      { label: "How Can We Help You?", type: "text", name: "message", placeholder: "How Can We Help You?", textarea: true },
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
  subTitle: "Our Blog & Article",
  headline: "Latest Insights & Industry Trends",
  centered: true,
  items: [
    {
      date: { day: "21", month: "July", year: "2026" },
      meta: { author: "Admin", comments: "(03) Comments" },
      title: "Smart Suntexs How Technology is Transforming Fabrics",
      excerpt:
        "Our mission is to empower businesses of all size to thrive in an ever-changing world.",
      readMore: { label: "READ MORE", href: "#blog" },
      image: "https://images.pexels.com/photos/9776239/pexels-photo-9776239.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      date: { day: "21", month: "July", year: "2026" },
      meta: { author: "Admin", comments: "(03) Comments" },
      title: "The Future of Sustainable Fabrics in Global Fashion",
      excerpt:
        "Our mission is to empower businesses of all size to thrive in an ever-changing world.",
      readMore: { label: "READ MORE", href: "#blog" },
      image: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      date: { day: "21", month: "July", year: "2026" },
      meta: { author: "Admin", comments: "(03) Comments" },
      title: "Behind the Loom Inside Modern Garment Manufacturing",
      excerpt:
        "Our mission is to empower businesses of all size to thrive in an ever-changing world.",
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
  social: { label: string; href: string }[];
}

export const footerData: FooterData = {
  description:
    "Suntex is a leading garment & textile manufacturing company dedicated to producing high quality fabrics for global brands.",
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
        { label: "Woven Suntexs", href: "#services" },
        { label: "Knit Warp & Circular", href: "#services" },
        { label: "Garment Manufacturing", href: "#services" },
        { label: "Natural Fiber", href: "#services" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact", href: "#contact" },
        { label: "FAQ", href: "#contact" },
        { label: "Privacy Policy", href: "#contact" },
        { label: "Terms & Conditions", href: "#contact" },
      ],
    },
  ],
  contact: [
    { label: "Address", value: "Main Street, Melbourne, Australia", href: "#" },
    { label: "Email", value: "info@suntexbd.com", href: "mailto:info@suntexbd.com" },
    { label: "Phone", value: "+88 012 345 67890", href: "tel:+8801234567890" },
  ],
  social: [
    { label: "Fb", href: "#" },
    { label: "Tw", href: "#" },
    { label: "Ig", href: "#" },
    { label: "Li", href: "#" },
  ],
  copyright: "Â© 2026 Suntex BD. All Rights Reserved.",
};
