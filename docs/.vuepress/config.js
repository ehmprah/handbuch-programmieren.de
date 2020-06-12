const path = require('path');

module.exports = {
  title: 'handbuch-programmieren.de',
  description:
    'Ein praxisnahes Handbuch für Programmierer und alle die es werden wollen.',
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
    ['meta', { name: 'msapplication-TileColor', content: '#282c34' }],
    ['meta', { name: 'theme-color', content: '#282c34' }],
    [
      'script',
      {
        async: '',
        src: 'https://www.googletagmanager.com/gtag/js?id=UA-135302276-1',
      },
    ],
    [
      'script',
      {
        async: '',
        'data-ad-client': "ca-pub-2532767366053494",
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
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
