import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/api',
    component: ComponentCreator('/api', '4fb'),
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
    component: ComponentCreator('/', '797'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '8b6'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '246'),
            routes: [
              {
                path: '/deployments/',
                component: ComponentCreator('/deployments/', '3f1'),
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
                path: '/management-dashboard/',
                component: ComponentCreator('/management-dashboard/', 'c89'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/management-dashboard/analytics',
                component: ComponentCreator('/management-dashboard/analytics', 'dde'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/management-dashboard/deploying',
                component: ComponentCreator('/management-dashboard/deploying', '19b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/management-dashboard/rag-config',
                component: ComponentCreator('/management-dashboard/rag-config', 'c4f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/management-dashboard/rag-testing',
                component: ComponentCreator('/management-dashboard/rag-testing', '086'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/management-dashboard/sources',
                component: ComponentCreator('/management-dashboard/sources', 'd79'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/management-dashboard/tools',
                component: ComponentCreator('/management-dashboard/tools', '96d'),
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
