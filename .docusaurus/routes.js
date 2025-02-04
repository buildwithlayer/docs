import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/archive',
    component: ComponentCreator('/archive', '51a'),
    exact: true
  },
  {
    path: '/authors',
    component: ComponentCreator('/authors', '498'),
    exact: true
  },
  {
    path: '/dry_with_api_flask',
    component: ComponentCreator('/dry_with_api_flask', 'f81'),
    exact: true
  },
  {
    path: '/llm_extensibility',
    component: ComponentCreator('/llm_extensibility', '73b'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '626'),
    exact: true
  },
  {
    path: '/tags/api-flask',
    component: ComponentCreator('/tags/api-flask', 'c31'),
    exact: true
  },
  {
    path: '/tags/dry',
    component: ComponentCreator('/tags/dry', '93d'),
    exact: true
  },
  {
    path: '/tags/llm-extensibility',
    component: ComponentCreator('/tags/llm-extensibility', '048'),
    exact: true
  },
  {
    path: '/tags/marshmallow',
    component: ComponentCreator('/tags/marshmallow', '899'),
    exact: true
  },
  {
    path: '/tags/one-of-schema',
    component: ComponentCreator('/tags/one-of-schema', '4f0'),
    exact: true
  },
  {
    path: '/tags/sql-alchemy',
    component: ComponentCreator('/tags/sql-alchemy', '889'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '704'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '203'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'a5c'),
            routes: [
              {
                path: '/docs/',
                component: ComponentCreator('/docs/', 'bc1'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/deployments/',
                component: ComponentCreator('/docs/deployments/', '102'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/deployments/copilot',
                component: ComponentCreator('/docs/deployments/copilot', '757'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/deployments/gemini',
                component: ComponentCreator('/docs/deployments/gemini', 'a47'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/deployments/gpt',
                component: ComponentCreator('/docs/deployments/gpt', '7b3'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/deployments/vs-code',
                component: ComponentCreator('/docs/deployments/vs-code', '3ef'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/deployments/web-widget',
                component: ComponentCreator('/docs/deployments/web-widget', 'f6b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/management-dashboard/',
                component: ComponentCreator('/docs/management-dashboard/', 'b28'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/management-dashboard/analytics',
                component: ComponentCreator('/docs/management-dashboard/analytics', '28e'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/management-dashboard/deploying',
                component: ComponentCreator('/docs/management-dashboard/deploying', '3bf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/management-dashboard/rag-config',
                component: ComponentCreator('/docs/management-dashboard/rag-config', 'baf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/management-dashboard/rag-testing',
                component: ComponentCreator('/docs/management-dashboard/rag-testing', '486'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/management-dashboard/sources',
                component: ComponentCreator('/docs/management-dashboard/sources', 'acf'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/management-dashboard/tools',
                component: ComponentCreator('/docs/management-dashboard/tools', '2f7'),
                exact: true,
                sidebar: "defaultSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '15c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
