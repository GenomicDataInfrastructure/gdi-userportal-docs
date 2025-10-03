import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "GDI DAAMS Guide",
  tagline: "Documentation for Data Access Committee members",
  favicon: "img/favicon.svg",

  url: process.env.DOCS_URL || "https://your-docusaurus-site.example.com",
  baseUrl: process.env.DOCS_BASE_URL || "/",

  organizationName: "lnds-lu/",
  projectName: "gdi-documentation-daams",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
  plugins: [require.resolve("docusaurus-lunr-search")],

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "GDI DAAMS Guide",
      logo: {
        alt: "Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          href: "http://localhost:3000",
          label: "← Back to Documentation Hub",
          position: "right",
        },
      ],
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