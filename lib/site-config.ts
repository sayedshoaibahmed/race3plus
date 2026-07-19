// lib/site-config.ts
// Central site configuration for Race3+

export const siteConfig = {
  name: "Race3+",
  tagline: "Keep Performance Alive.",
  description:
    "Race3+ delivers premium automotive engine protection solutions — coolants, additives, and performance products engineered to keep engines running cooler, longer, and stronger.",
  url: "https://race3plus.com",
  domain: "race3plus.com",
  email: "race3plus@gmail.com",
  phone: "+91 9164911163",
  whatsapp: "https://wa.me/919164911163",
  whatsappLaunchMsg:
    "https://wa.me/919164911163?text=Hi%20Race3%2B%2C%20I%27d%20like%20to%20be%20notified%20when%20the%20coolant%20launches.",
  instagram: "https://www.instagram.com/race3plus/",
  instagramHandle: "@race3plus",
  nav: [
    { label: "Home",       href: "/" },
    { label: "Products",   href: "/products" },
    { label: "About Us",   href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog",       href: "/blog" },
  ],
  footerLinks: [
    { label: "Home",       href: "/" },
    { label: "Products",   href: "/products" },
    { label: "About Us",   href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog",       href: "/blog" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
