export type ProductCardIconKey =
  | "knit"
  | "woven"
  | "sweater"
  | "home"
  | "socks"
  | "shoes";

export interface ProductCard {
  category: string;
  note: string;
  image: string;
  imageAlt: string;
  description: string;
  icon: ProductCardIconKey;
}

export const productCards: ProductCard[] = [
  {
    category: "Knit",
    note: "Manufactured in-house",
    image:
      "https://images.pexels.com/photos/5806993/pexels-photo-5806993.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Close-up of grey knitted fabric",
    description:
      "In-house knit production from fabric to finished garment, with full control over quality, cost, and lead time.",
    icon: "knit",
  },
  {
    category: "Woven",
    note: "Manufactured in-house",
    image:
      "https://images.pexels.com/photos/6634463/pexels-photo-6634463.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Close-up of blue and white woven fabric",
    description:
      "In-house woven manufacturing for shirts, trousers, jackets, and formal wear with precision finishing.",
    icon: "woven",
  },
  {
    category: "Sweater",
    note: "Via trusted partners",
    image:
      "https://images.pexels.com/photos/5704187/pexels-photo-5704187.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Stack of folded knitted sweaters",
    description:
      "Partner-led sweater production supported by SUNTEX merchandising, sampling, and quality oversight.",
    icon: "sweater",
  },
  {
    category: "Home Textiles",
    note: "Via trusted partners",
    image:
      "https://images.pexels.com/photos/282892/pexels-photo-282892.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Rolled white towels stacked together",
    description:
      "Partner-supplied home textile ranges coordinated through one reliable SUNTEX point of contact.",
    icon: "home",
  },
  {
    category: "Socks",
    note: "Via trusted partners",
    image:
      "https://images.pexels.com/photos/6832964/pexels-photo-6832964.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Colorful knitted socks on a wooden table",
    description:
      "Partner-sourced sock programs managed with SUNTEX quality control, sampling, and logistics support.",
    icon: "socks",
  },
  {
    category: "Shoes & Leather",
    note: "Via trusted partners",
    image:
      "https://images.pexels.com/photos/26587826/pexels-photo-26587826.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Pair of brown leather dress shoes",
    description:
      "Partner-sourced shoes and leather goods brought together under one sourcing relationship.",
    icon: "shoes",
  },
];
