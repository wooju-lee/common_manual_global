// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IIC BO : User Manual',
  tagline: 'Common Manual Documentation',
  favicon: 'img/favicon.png',

  future: {
    v4: true,
  },

  url: 'https://common-manual.vercel.app',
  baseUrl: '/',

  organizationName: 'wooju-lee',
  projectName: 'common_manual',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
    localeConfigs: {
      ko: { label: 'Korean', htmlLang: 'ko' },
      en: { label: 'English', htmlLang: 'en' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/wooju-lee/common_manual/tree/main/',
          async sidebarItemsGenerator({defaultSidebarItemsGenerator, docs, ...args}) {
            const items = await defaultSidebarItemsGenerator({docs, ...args});
            // Inject frontmatter.countries into customProps for client-side filtering
            function enrichItems(sidebarItems) {
              return sidebarItems.map((item) => {
                if (item.type === 'doc') {
                  const doc = docs.find((d) => d.id === item.id);
                  if (doc?.frontMatter?.countries) {
                    return {
                      ...item,
                      customProps: {
                        ...item.customProps,
                        countries: doc.frontMatter.countries,
                      },
                    };
                  }
                }
                if (item.type === 'category' && item.items) {
                  return {...item, items: enrichItems(item.items)};
                }
                return item;
              });
            }
            return enrichItems(items);
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/wooju-lee/common_manual/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: ['docusaurus-plugin-image-zoom'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'IIC BO : User Manual',
        logo: {
          alt: 'IIC BO Logo',
          src: 'img/logo.png',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'commonSidebar',
            position: 'left',
            label: '공통',
          },
          {
            type: 'docSidebar',
            sidebarId: 'posSidebar',
            position: 'left',
            label: 'POS',
          },
          {
            type: 'docSidebar',
            sidebarId: 'inventorySidebar',
            position: 'left',
            label: '재고',
          },
          {
            type: 'docSidebar',
            sidebarId: 'lmsSidebar',
            position: 'left',
            label: '렌즈 작업 관리',
          },
          {
            type: 'docSidebar',
            sidebarId: 'salesSidebar',
            position: 'left',
            label: '매출',
            className: 'navbar-tbd',
          },
          {
            type: 'docSidebar',
            sidebarId: 'orderSidebar',
            position: 'left',
            label: '주문',
            className: 'navbar-tbd',
          },
          {
            type: 'docSidebar',
            sidebarId: 'reportSidebar',
            position: 'left',
            label: '데일리 리포트',
            className: 'navbar-tbd',
          },
          {
            type: 'docSidebar',
            sidebarId: 'storeManagementSidebar',
            position: 'left',
            label: '스토어 관리',
            className: 'navbar-tbd',
          },
          {
            type: 'docSidebar',
            sidebarId: 'systemSettingSidebar',
            position: 'left',
            label: '시스템 설정',
            className: 'navbar-tbd',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: 'Copyright © 2026 IIC_PM Wooju. All rights reserved.',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgba(255, 255, 255, 0.9)',
          dark: 'rgba(0, 0, 0, 0.9)',
        },
      },
    }),
};

export default config;
