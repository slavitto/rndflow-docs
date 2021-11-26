module.exports = {
  lang: 'ru-RU',
  title: 'R&D Flow',
  description:
    'Цифровая экосистема для создания и использования алгоритмов анализа данных и интеллектуальных приложений',
  head: [
    [
      'script',
      {
        src: 'https://code.iconify.design/2/2.1.0/iconify.min.js',
      },
    ],
    ['link', { rel: 'icon', href: 'favicon.svg' }],
  ],

  themeConfig: {
    logo: '/images/logo.svg',
    docsRepo: 'https://github.com/rndflow/rndflow-documentation',
    docsBranch: 'master',
    docsDir: 'src',
    locales: {
      '/': {
        selectText: 'Языки',
        label: 'Русский',
        ariaLabel: 'Языки',
        editLinkText: 'Редактировать страницу',
        navbar: [
          {
            text: 'Введение',
            link: '/intro/',
          },
          {
            text: 'Описание',
            link: '/desc/dashboard',
          },
          {
            text: 'Платформа',
            link: 'https://server.rndflow.com',
          },
        ],
        sidebar: {
          '/intro/': [
            '/intro/',
            '/intro/software',
            '/intro/definitions',
            '/intro/architecture',
          ],
          '/desc/': [
            '/desc/dashboard',
            '/desc/workspace',
            '/desc/project',
            '/desc/nodes',
          ],
        },
      },
    },
  },

  base: '/docs/',
};
