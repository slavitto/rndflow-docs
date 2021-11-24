module.exports = {
  lang: 'ru-RU',
  title: 'R&D Flow',
  description:
    'Цифровая экосистема для создания и использования алгоритмов анализа данных и интеллектуальных приложений',
  head: [['link', { rel: 'icon', href: 'favicon.svg' }]],

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
            text: 'Платформа',
            link: 'https://server.rndflow.com',
          },
        ],
        sidebar: {
          '/intro/': ['', 'software', 'definitions', 'architecture'],
        },
      },
    },
  },

  base: '/docs/',
};
