import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      favicon: "/favicon.svg",
      logo: {
        src: "./src/assets/ske.svg",
        alt: "The SKE logo",
        replacesTitle: true,
      },
      title: "Sigui Kessé Emmanuel",
      social: {
        github: "https://github.com/siguici",
        twitter: "https://twitter.com/siguici",
        discord: "https://discord.gg/PURzNH7KBj",
        youtube: "https://youtube.com/@siguici",
      },
      editLink: {
        baseUrl: "https://github.com/siguici/siguici/edit/0.x/docs/",
      },
      sidebar: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Getting started",
          items: [{ label: "Quickstart", link: "/start/" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
