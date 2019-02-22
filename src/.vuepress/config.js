module.exports = {
  title: 'handbuch-programmieren.de',
  description:
    'Ein praxisnahes Handbuch für Programmierer und alle die es werden wollen.',
  dest: 'docs',
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
  ],
  markdown: {
    anchor: { permalink: false },
  },
  themeConfig: {
    lastUpdated: true,
  },
};
