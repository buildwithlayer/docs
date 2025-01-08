import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/api',
    component: ComponentCreator('/api', '112'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '94f'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/dry_with_apiflask',
    component: ComponentCreator('/blog/dry_with_apiflask', '10a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/api-flask',
    component: ComponentCreator('/blog/tags/api-flask', 'e07'),
    exact: true
  },
  {
    path: '/blog/tags/dry',
    component: ComponentCreator('/blog/tags/dry', '612'),
    exact: true
  },
  {
    path: '/blog/tags/marshmallow',
    component: ComponentCreator('/blog/tags/marshmallow', '160'),
    exact: true
  },
  {
    path: '/blog/tags/one-of-schema',
    component: ComponentCreator('/blog/tags/one-of-schema', 'ca8'),
    exact: true
  },
  {
    path: '/blog/tags/sql-alchemy',
    component: ComponentCreator('/blog/tags/sql-alchemy', 'b95'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '4b2'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '935'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'fa8'),
            routes: [
              {
                path: '/category/deployments',
                component: ComponentCreator('/category/deployments', '4e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/deployments/copilot',
                component: ComponentCreator('/deployments/copilot', '8a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/deployments/gemini',
                component: ComponentCreator('/deployments/gemini', '069'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/deployments/gpt',
                component: ComponentCreator('/deployments/gpt', '7d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/deployments/vs-code',
                component: ComponentCreator('/deployments/vs-code', '40e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/deployments/web-widget',
                component: ComponentCreator('/deployments/web-widget', 'e04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/',
                component: ComponentCreator('/', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
