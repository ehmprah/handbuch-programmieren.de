const path = require('path');

module.exports = {
  title: 'handbuch-programmieren.de',
  description:
    'Ein praxisnahes Handbuch für Programmierer und alle die es werden wollen.',
  dest: 'docs',
  markdown: {
    anchor: { permalink: false },
  },
  themeConfig: {
    lastUpdated: true,
  },
  chainWebpack: (config, isServer) => {
    config.resolve.alias.set('@theme', path.resolve(__dirname, './theme'));
  },
  head: [
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: 'apple-touch-icon.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
    ],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'msapplication-TileColor', content: '#c678dd' }],
    ['meta', { name: 'theme-color', content: '#c678dd' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-135302276-1',
      },
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-135302276-1', { 'anonymize_ip': true });
    `,
    ],
  ],
};