import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "GDI Documentation",
  tagline: "Documentation for the Genomic Data Infrastructure",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: process.env.DOCS_URL || "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // Use environment variable to support both app hosting (/docs/) and GitLab Pages (/)
  baseUrl: process.env.DOCS_BASE_URL || "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lnds-lu/", // Usually your GitHub org/user name.
  projectName: "gdi-documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          // // Please change this to your repo.
          // // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
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
          // title: "More",
          items: [
            // {
            //   label: "Demo",
            //   href: "https://gdi.demo.lnds.tech/",
            // },
            // {
            //   label: "Source Code",
            //   href: "https://gitlab.com/lnds-lu/service-library/gdi-documentation",
            // },
            {
              label: "Contact support",
              href: "https://get.support.lnds.lu/",
            },
          ],
        },
        {
          // title: "About LNDS",
          items: [
            {
              label: "About LNDS",
              href: "https://www.lnds.lu/",
            },
            // {
            //   label: "LinkedIn",
            //   href: "https://www.linkedin.com/company/luxembourg-national-data-service-lnds/",
            // },
            // {
            //   label: "Gitlab",
            //   href: "https://gitlab.com/lnds-lu/",
            // },
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
