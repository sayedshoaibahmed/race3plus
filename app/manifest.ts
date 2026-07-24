import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Race 3 Plus -- Keep Performance Alive",
    short_name: "Race 3 Plus",
    description:
      "Premium engine coolant and automotive protection products -- engineered to keep engines running cooler, longer, and stronger.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#0A0A0A",
    icons: [
      {
        src: "/favicon-32.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
