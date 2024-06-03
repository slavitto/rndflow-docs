import { defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

module.exports = {
  lang: 'en-US',
  title: 'R&D Flow',
  description:
    'Digital ecosystem for creating and using data analytics algorithms and intelligent applications',
  head: [
    [
      'script',
      {
        src: 'https://code.iconify.design/2/2.1.0/iconify.min.js',
      },
    ],
    ['link', { rel: 'icon', href: 'favicon.svg' }],
  ],

  theme: defaultTheme({
    logo: '/images/logo.svg',
    docsRepo: 'https://github.com/rndflow/rndflow-documentation',
    docsBranch: 'master',
    docsDir: 'src',
    search: true,
    editLink: false,
    contributors: false,
    locales: {
      '/': {
        selectText: 'languages',
        label: 'English',
        ariaLabel: 'languages',
        editLinkText: 'Edit page',
        navbar: [
          {
            text: 'Intro',
            link: '/intro/',
          },
          {
            text: 'Description',
            link: '/desc/',
          },
          {
            text: 'Development',
            link: '/dev/',
          },
          {
            text: 'Instructions',
            link: '/instructions/',
          },
          {
            text: 'Administration',
            link: '/admin/',
          },
          {
            text: 'Platform',
            link: 'https://rnd-srv.nowecom.ru/',
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
            '/desc/docker',
            '/desc/git',
            '/desc/interface',
            '/desc/executor',
            '/desc/s3',
            '/desc/payplan',
            '/desc/finance',
            '/desc/explorer',
            '/desc/tasks',
          ],
          '/dev/': ['/dev/', '/dev/compute', '/dev/sql', '/dev/docker'],
          '/instructions/': [
            '/instructions/',
            '/instructions/video',
            '/instructions/workspace',
            '/instructions/project',
            '/instructions/nodes',
            '/instructions/package',
            '/instructions/job',
            '/instructions/link',
            '/instructions/role',
            '/instructions/user',
            '/instructions/api_keys',
            '/instructions/secrets',
            '/instructions/interface',
            '/instructions/executor',
            '/instructions/s3',
            '/instructions/docker',
            '/instructions/git',
            '/instructions/payplan',
            '/instructions/examples',
          ],
          '/admin/': ['/admin/'],
        },
      },
    },
  }),

  base: '/docs/',

  plugins: [
    searchPlugin(
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ),
    'vuepress-plugin-export'
  ],
};
