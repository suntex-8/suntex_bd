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
      "Our standard MOQ is 500 pieces per style, single color. However, the right number depends on the relationship we build with each customer. As trust and order history grow, so does our flexibility. Special low-MOQ tracks are available for luxury and streetwear brands on inquiry.",
  },
  {
    question: "What is your average production lead time?",
    answer:
      "As fast as 1 week for smaller orders and repeat styles with established specs. Up to 1 month for larger volumes or new developments requiring full sampling and sourcing.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We follow a 5-stage quality control process: Fabric & Trims inspection, Cutting accuracy checks, In-line Sewing inspection, Finishing & measurement checks, and Pre-Shipment compliance sign-off.",
  },
  {
    question: "Do you offer private labeling services?",
    answer:
      "Yes, we offer full private labeling including custom tags, labels, packaging, and branding. Our in-house design and product development facility takes buyer ideas from concept to sample.",
  },
  {
    question: "What types of garments do you manufacture?",
    answer:
      "In-house: Knit garments (T-shirts, polos, hoodies, activewear) and Woven garments (shirts, trousers, jackets). Partner-sourced: Sweaters, home textiles, socks, caps, shoes, and leather items.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Fabric & Trims",
    description:
      "Incoming material inspection before cutting begins — ensuring quality from the very first step.",
    image: "https://images.pexels.com/photos/5910517/pexels-photo-5910517.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    number: "02",
    title: "Cutting",
    description:
      "Pattern and cut accuracy checks against approved specs — precision at every layer.",
    image: "https://images.pexels.com/photos/4498310/pexels-photo-4498310.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    number: "03",
    title: "Sewing",
    description:
      "In-line inspection throughout the sewing line — catching issues before they become defects.",
    image: "https://images.pexels.com/photos/7375531/pexels-photo-7375531.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    number: "04",
    title: "Finishing",
    description:
      "Finishing, trims, and measurement checks pre-packing — the final quality gate.",
    image: "https://images.pexels.com/photos/1266823/pexels-photo-1266823.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    number: "05",
    title: "Pre-Shipment",
    description:
      "Final inspection and compliance sign-off before dispatch — our own QC team owns every checkpoint.",
    image: "https://images.pexels.com/photos/132197/pexels-photo-132197.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];
