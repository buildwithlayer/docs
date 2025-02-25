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
    path: '/ai_gtm',
    component: ComponentCreator('/ai_gtm', '1ba'),
    exact: true
  },
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
    path: '/layer_neon_copilot_extension',
    component: ComponentCreator('/layer_neon_copilot_extension', 'df1'),
    exact: true
  },
  {
    path: '/llm_extensibility',
    component: ComponentCreator('/llm_extensibility', '73b'),
    exact: true
  },
  {
    path: '/llm_extensibility_vital_to_api_vendors',
    component: ComponentCreator('/llm_extensibility_vital_to_api_vendors', '44e'),
    exact: true
  },
  {
    path: '/tags',
    component: ComponentCreator('/tags', '626'),
    exact: true
  },
  {
    path: '/tags/agent-experience-ax',
    component: ComponentCreator('/tags/agent-experience-ax', '67d'),
    exact: true
  },
  {
    path: '/tags/ai-agents',
    component: ComponentCreator('/tags/ai-agents', '632'),
    exact: true
  },
  {
    path: '/tags/ai-go-to-market',
    component: ComponentCreator('/tags/ai-go-to-market', '648'),
    exact: true
  },
  {
    path: '/tags/api',
    component: ComponentCreator('/tags/api', '69c'),
    exact: true
  },
  {
    path: '/tags/api-flask',
    component: ComponentCreator('/tags/api-flask', 'c31'),
    exact: true
  },
  {
    path: '/tags/developer-experience-dx',
    component: ComponentCreator('/tags/developer-experience-dx', '3e4'),
    exact: true
  },
  {
    path: '/tags/dry',
    component: ComponentCreator('/tags/dry', '93d'),
    exact: true
  },
  {
    path: '/tags/git-hub-copilot',
    component: ComponentCreator('/tags/git-hub-copilot', 'aa7'),
    exact: true
  },
  {
    path: '/tags/llm-extensibility',
    component: ComponentCreator('/tags/llm-extensibility', '6c6'),
    exact: true
  },
  {
    path: '/tags/marshmallow',
    component: ComponentCreator('/tags/marshmallow', '899'),
    exact: true
  },
  {
    path: '/tags/neon',
    component: ComponentCreator('/tags/neon', '361'),
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
    path: '/vscode_grubhub_extension',
    component: ComponentCreator('/vscode_grubhub_extension', '9dc'),
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
    component: ComponentCreator('/', 'b9e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
