// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GeographQL',
  tagline: 'A Country, State, and City GraphQL API',
  url: 'https://geographql.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'robertrenzorudio', // Usually your GitHub org/user name.
  projectName: 'gqlworld-web', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/robertrenzorudio/geographql-web/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // If Algolia did not provide you any appId, use 'BH4D9OD16A'
        appId: 'X5PGPTV2OK',
        // Public API key: it is safe to commit it
        apiKey: '8c8b5bf87c0d54ac2dcf47ecec25c812',
        indexName: 'geographql',
      },
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'GeographQL',
        logo: {
          src: 'img/logo.svg',
          alt: 'GeographQL Logo',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://api.geographql.rudio.dev/graphql',
            label: 'Playground',
            position: 'right',
          },
          {
            href: 'https://github.com/robertrenzorudio/geographql',
            label: 'GitHub',
            position: 'right',
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        links: [
          {
            html: `
                <a href="https://www.digitalocean.com/?refcode=273926c1a044&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge">
                  <img src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg" alt="DigitalOcean Referral Badge" />
                </a>
          `,
          },
          {
            html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Deploys by Netlify" />
                </a>
              `,
          },
        ],
        copyright: `GeographQL. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
