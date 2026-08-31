// =====================================================================
// HERO SECTION DATA
// ---------------------------------------------------------------------
// Change these values to update the hero slider. Each slide is a full
// screen background with headline/content. Update the `image` links to
// your own images located in /public or any external URL.
// =====================================================================

export interface HeroSocial {
  label: string;
  href: string;
}

export interface HeroSlide {
  /** Background image. Keep the image in /public and reference like "/images/hero-1.jpg" */
  image: string;
  /** Yellow sub-title above the big headline */
  subTitle: string;
  /** Big display headline. Use "\n" (double quotes) to split onto two lines */
  headline: string;
  /** Supporting paragraph */
  paragraph: string;
  /** Button label */
  cta: string;
  /** Button target */
  ctaHref: string;
}

export interface HeroData {
  slides: HeroSlide[];
  /** Social rail shown vertically on the left of the hero */
  social: HeroSocial[];
  /** Label shown under the social icons */
  followLabel: string;
  /** Slider rotation speed in ms */
  autoPlayInterval: number;
}

export const heroSectionData: HeroData = {
  autoPlayInterval: 6000,
  followLabel: "Follow",
  social: [
    { label: "Fb", href: "#" },
    { label: "Tw", href: "#" },
    { label: "Ig", href: "#" },
    { label: "Li", href: "#" },
  ],
  slides: [
    {
      image:
        "https://images.pexels.com/photos/984619/pexels-photo-984619.jpeg?auto=compress&cs=tinysrgb&w=1920",
      subTitle: "The Future of Fabric Begins Here",
      headline: "Weaving Quality\nInto Every Thread",
      paragraph:
        "In 1999, Suntex entered the garments sector with its manufacturing textile facilities of cotton yarn. Combining modern technology with skilled manpower.",
      cta: "Explore More",
      ctaHref: "#about",
    },
    {
      image:
        "https://images.pexels.com/photos/9776239/pexels-photo-9776239.jpeg?auto=compress&cs=tinysrgb&w=1920",
      subTitle: "Premium Textile Manufacturing",
      headline: "Crafted For\nGlobal Brands",
      paragraph:
        "We are a leading textile & garment manufacturing company dedicated to producing high quality fabrics trusted by fashion brands worldwide.",
      cta: "Explore More",
      ctaHref: "#about",
    },
    {
      image:
        "https://images.pexels.com/photos/326240/pexels-photo-326240.jpeg?auto=compress&cs=tinysrgb&w=1920",
      subTitle: "Sustainable & Innovative Solutions",
      headline: "Innovation In\nEvery Stitch",
      paragraph:
        "Combining modern technology with skilled manpower, we deliver sustainable textile solutions under an inspiring atmosphere.",
      cta: "Explore More",
      ctaHref: "#about",
    },
  ],
};
