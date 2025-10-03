import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "GDI Documentation",
  tagline: "Welcome to GDI Documentation",
  favicon: "img/favicon.svg",

  url: process.env.DOCS_URL || "https://your-docusaurus-site.example.com",
  baseUrl: process.env.DOCS_BASE_URL || "/",

  organizationName: "lnds-lu/",
  projectName: "gdi-documentation",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: false, // Disable docs for landing page
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "GDI Documentation",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [],
    },
    footer: {
      style: "dark",
      links: [
        {
          items: [
            {
              label: "Contact support",
              href: "https://get.support.lnds.lu/",
            },
          ],
        },
        {
          items: [
            {
              label: "About LNDS",
              href: "https://www.lnds.lu/",
            },
          ],
        },
      ],
      copyright: `${new Date().getFullYear()} Luxembourg National Data Service (LNDS). It is a brand of PNED G.I.E., an economic interest group established by the Luxembourg government and public institutes 2023 <br/> All rights reserved`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;