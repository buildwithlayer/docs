import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '47d'),
    exact: true
  },
  {
    path: '/blog/ai_gtm',
    component: ComponentCreator('/blog/ai_gtm', 'e18'),
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
    path: '/blog/dry_with_api_flask',
    component: ComponentCreator('/blog/dry_with_api_flask', '823'),
    exact: true
  },
  {
    path: '/blog/layer_neon_copilot_extension',
    component: ComponentCreator('/blog/layer_neon_copilot_extension', '46c'),
    exact: true
  },
  {
    path: '/blog/llm_extensibility',
    component: ComponentCreator('/blog/llm_extensibility', '4fa'),
    exact: true
  },
  {
    path: '/blog/llm_extensibility_vital_to_api_vendors',
    component: ComponentCreator('/blog/llm_extensibility_vital_to_api_vendors', 'bf3'),
    exact: true
  },
  {
    path: '/blog/mcp_experience',
    component: ComponentCreator('/blog/mcp_experience', '459'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/agent-experience-ax',
    component: ComponentCreator('/blog/tags/agent-experience-ax', '288'),
    exact: true
  },
  {
    path: '/blog/tags/ai-agents',
    component: ComponentCreator('/blog/tags/ai-agents', 'b67'),
    exact: true
  },
  {
    path: '/blog/tags/ai-go-to-market',
    component: ComponentCreator('/blog/tags/ai-go-to-market', '14a'),
    exact: true
  },
  {
    path: '/blog/tags/api',
    component: ComponentCreator('/blog/tags/api', '539'),
    exact: true
  },
  {
    path: '/blog/tags/api-flask',
    component: ComponentCreator('/blog/tags/api-flask', 'e07'),
    exact: true
  },
  {
    path: '/blog/tags/developer-experience-dx',
    component: ComponentCreator('/blog/tags/developer-experience-dx', '8f3'),
    exact: true
  },
  {
    path: '/blog/tags/dry',
    component: ComponentCreator('/blog/tags/dry', '612'),
    exact: true
  },
  {
    path: '/blog/tags/git-hub-copilot',
    component: ComponentCreator('/blog/tags/git-hub-copilot', 'f4d'),
    exact: true
  },
  {
    path: '/blog/tags/grubhub',
    component: ComponentCreator('/blog/tags/grubhub', '962'),
    exact: true
  },
  {
    path: '/blog/tags/llm-extensibility',
    component: ComponentCreator('/blog/tags/llm-extensibility', '127'),
    exact: true
  },
  {
    path: '/blog/tags/marshmallow',
    component: ComponentCreator('/blog/tags/marshmallow', '160'),
    exact: true
  },
  {
    path: '/blog/tags/mcp',
    component: ComponentCreator('/blog/tags/mcp', '226'),
    exact: true
  },
  {
    path: '/blog/tags/mcp-experience',
    component: ComponentCreator('/blog/tags/mcp-experience', '017'),
    exact: true
  },
  {
    path: '/blog/tags/mcpx',
    component: ComponentCreator('/blog/tags/mcpx', 'f9e'),
    exact: true
  },
  {
    path: '/blog/tags/neon',
    component: ComponentCreator('/blog/tags/neon', '3e6'),
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
    path: '/blog/tags/vs-code',
    component: ComponentCreator('/blog/tags/vs-code', '3c4'),
    exact: true
  },
  {
    path: '/blog/vscode_grubhub_extension',
    component: ComponentCreator('/blog/vscode_grubhub_extension', 'f51'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', 'a56'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '061'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', '360'),
            routes: [
              {
                path: '/demo-mcp-server',
                component: ComponentCreator('/demo-mcp-server', 'f4e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/generator',
                component: ComponentCreator('/generator', '065'),
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
                path: '/management-dashboard/prompts',
                component: ComponentCreator('/management-dashboard/prompts', '2d4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/management-dashboard/resources',
                component: ComponentCreator('/management-dashboard/resources', '0e8'),
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
