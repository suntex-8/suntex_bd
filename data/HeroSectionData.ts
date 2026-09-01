// =====================================================================
// HERO SECTION DATA
// =====================================================================

export interface HeroSocial {
  label: string;
  href: string;
  icon: "facebook" | "twitter" | "instagram" | "linkedin";
}

export interface HeroSlide {
  image: string;
  subTitle: string;
  headline: string;
  paragraph: string;
  cta: string;
  ctaHref: string;
}

export interface HeroData {
  slides: HeroSlide[];
  social: HeroSocial[];
  followLabel: string;
  autoPlayInterval: number;
}

export const heroSectionData: HeroData = {
  autoPlayInterval: 6000,
  followLabel: "Follow",
  social: [
    { label: "Facebook", href: "#", icon: "facebook" },
    { label: "Twitter", href: "#", icon: "twitter" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "LinkedIn", href: "#", icon: "linkedin" },
  ],
  slides: [
    {
      image: "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1920",
      subTitle: "Connecting Ideas to Reality",
      headline: "SUNTEX\nApparel Group",
      paragraph:
        "Full-Service Garment Manufacturing & Sourcing, Built in Bangladesh.",
      cta: "Get a Quote",
      ctaHref: "#contact",
    },
    {
      image: "https://images.pexels.com/photos/9776239/pexels-photo-9776239.jpeg?auto=compress&cs=tinysrgb&w=1920",
      subTitle: "200+ Partner Factories Across Bangladesh",
      headline: "Manufacturing\nYou Can Trust",
      paragraph:
        "In-house knit & woven production with a trusted partner network for every category a modern buyer needs.",
      cta: "Our Services",
      ctaHref: "#services",
    },
    {
      image: "https://images.pexels.com/photos/326240/pexels-photo-326240.jpeg?auto=compress&cs=tinysrgb&w=1920",
      subTitle: "Flexible MOQ from 500 Pieces",
      headline: "Quality Without\nCompromise",
      paragraph:
        "From emerging labels to global brands — we deliver the right product, at the right quality, on time.",
      cta: "Contact Us",
      ctaHref: "#contact",
    },
  ],
};
