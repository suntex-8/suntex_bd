// =====================================================================
// NAVBAR / HEADER DATA
// ---------------------------------------------------------------------
// Edit the menu links and company details to match your site. The
// navbar reads everything from here.
// =====================================================================

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  /** Optional dropdown children. Leave empty for a plain link. */
  children?: NavChild[];
}

export interface NavbarData {
  /** Path to your logo image (place in /public) */
  logo: string;
  logoAlt: string;
  /** Main navigation menu */
  menu: NavItem[];
  /** Primary CTA button on the right of the navbar */
  cta: { label: string; href: string };
  /** Whether to show the search icon in the navbar */
  showSearch: boolean;
}

export const navbarData: NavbarData = {
  logo: "/suntex logo front.png",
  logoAlt: "Suntex BD Logo",
  showSearch: true,
  cta: { label: "Contact Us", href: "#contact" },
  menu: [
    {
      label: "Home",
      href: "#home",
      children: [
        { label: "Garments", href: "#home" },
        { label: "Suntex", href: "#home" },
      ],
    },
    {
      label: "Services",
      href: "#services",
      children: [
        { label: "Our Services", href: "#services" },
        { label: "Service Details", href: "#services" },
      ],
    },
    {
      label: "Projects",
      href: "#projects",
      children: [
        { label: "Our Projects", href: "#projects" },
        { label: "Projects Details", href: "#projects" },
      ],
    },
    {
      label: "Pages",
      href: "#pages",
      children: [
        { label: "About Page", href: "#about" },
        { label: "Team Page", href: "#pages" },
        { label: "Pricing Page", href: "#pricing" },
        { label: "FAQ Page", href: "#pages" },
      ],
    },
    {
      label: "Blog",
      href: "#blog",
      children: [
        { label: "Blog Grid", href: "#blog" },
        { label: "Blog Standard", href: "#blog" },
        { label: "Blog Details", href: "#blog" },
      ],
    },
    { label: "Contact", href: "#contact" },
  ],
};
