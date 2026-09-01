// =====================================================================
// NAVBAR / HEADER DATA
// =====================================================================

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface NavbarData {
  logo: string;
  logoAlt: string;
  menu: NavItem[];
  cta: { label: string; href: string };
  showSearch: boolean;
}

export const navbarData: NavbarData = {
  logo: "/suntex logo front.png",
  logoAlt: "SUNTEX Apparel Group Logo",
  showSearch: false,
  cta: { label: "Get In Touch", href: "#contact" },
  menu: [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Products", href: "#products" },
    { label: "Why Choose Us", href: "#advantage" },
    { label: "Facilities", href: "#facilities" },
    { label: "Team", href: "#team" },
    { label: "Contact", href: "#contact" },
  ],
};
