// =====================================================================
// SERVICES PAGE DATA
// =====================================================================

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image: string;
}

export const faqItems: FaqItem[] = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Our MOQ varies depending on the product type and fabric. For standard orders, we typically start at 500 pieces per style. Contact us for specific requirements.",
  },
  {
    question: "What is your average production lead time?",
    answer:
      "Standard production takes 3–4 weeks after sample approval. Expedited options are available for urgent orders at an additional cost.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We follow a multi-stage quality control process including raw material inspection, in-line production checks, and final product inspection before shipment.",
  },
  {
    question: "Do you offer private labeling services?",
    answer:
      "Yes, we offer full private labeling including custom tags, labels, packaging, and branding to match your company's identity.",
  },
  {
    question: "What types of fabrics do you manufacture?",
    answer:
      "We specialize in woven fabrics, knit warp & circular knits, natural fibers, and technical synthetics for various applications.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Sampling & Approval",
    description:
      "We Develop Samples And Prototypes For Client Approval Before Moving To Bulk Production.",
    image: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    number: "02",
    title: "Production Planning",
    description:
      "We Develop Samples And Prototypes For Client Approval Before Moving To Bulk Production.",
    image: "https://images.pexels.com/photos/4498310/pexels-photo-4498310.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    number: "03",
    title: "Cutting & Stitching",
    description:
      "We Develop Samples And Prototypes For Client Approval Before Moving To Bulk Production.",
    image: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    number: "04",
    title: "Quality Inspection",
    description:
      "We Develop Samples And Prototypes For Client Approval Before Moving To Bulk Production.",
    image: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
