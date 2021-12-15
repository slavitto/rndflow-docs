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
            link: '/desc/',
          },
          {
            text: 'Разработка',
            link: '/dev/',
          },
          {
            text: 'Инструкции',
            link: '/instructions/',
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
            '/intro/literature',
          ],
          '/desc/': [
            '/desc/',
            '/desc/dashboard',
            '/desc/workspace',
            '/desc/project',
            '/desc/nodes',
            '/desc/links',
            '/desc/node_params',
            '/desc/package',
            '/desc/job',
            '/desc/project_role',
            '/desc/project_user',
            '/desc/secrets',
            '/desc/api_keys',
            '/desc/interface',
            '/desc/executor',
            '/desc/s3',
          ],
          '/dev/': ['/dev/', '/dev/compute', '/dev/sql', '/dev/docker'],
          '/instructions/': [
            '/instructions/',
            '/instructions/workspace',
            '/instructions/project',
            '/instructions/nodes',
            '/instructions/package',
            '/instructions/link',
            '/instructions/role',
            '/instructions/user',
            '/instructions/api_keys',
            '/instructions/secrets',
            '/instructions/interface',
            '/instructions/executor',
            '/instructions/s3',
            '/instructions/video',
            '/instructions/examples',
          ],
        },
      },
    },
  },

  base: '/docs/',
};
