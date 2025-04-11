---
sidebar_position: 4
slug: /generator
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# MCP Server Generator

Once you're ready to go beyond testing with your **[demo server](/demo-mcp-server)**, Layer provides a CLI to help you generate a **production-ready MCP server** that you can self-publish.

## Installation

To install the generator CLI globally:

```
npm i -g @buildwithlayer/generator
```

## Creating a Server

To generate your own MCP server:

1. Navigate to the directory where you want the project to be created.
2. Run the following command:

```
buildwithlayer mcp {project_name}
```

3. Follow the CLI prompts to configure your project:

| Prompt                      | Description                                                                                                        |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **Layer-User-Api-Key**      | Your Layer user-level API key (this can be accessed from the settings page on the management dashboard)            |
| **Environment**             | Use "production"                                                                                                   |
| **NPM Package Name**        | The published name of your server package (you must include your org name for your package to be runnable via npx) |
| **Command Bin Name**        | The CLI command your server will expose                                                                            |
| **Description**             | A short description of the server package                                                                          |
| **Author**                  | Your name or organization                                                                                          |
| **License**                 | Default is MIT, but use your preferred license                                                                     |
| **GitHub Repository Owner** | Your GitHub username or org                                                                                        |
| **GitHub Repository Name**  | The name of the repository where the project will live                                                             |
| **Package Manager**         | Choose between npm, yarn, or pnpm                                                                                  |

## Testing Locally

To test your generated server locally, you can execute the `run.js` file in the generated project's bin directory, with additional arguments for any **[auth override flags](/demo-mcp-server#auth-override-flags)** (i.e. `PATH_TO_YOUR_PROJECT/bin/run.js {AUTH_OVERRIDE_FLAGS}`).

### Installing in MCP Clients

<Tabs>
  <TabItem value="cursor" label="Cursor" default>
    1. Open **Cursor Settings → MCP**
    2. Click **Add new global MCP server**
    3. Replace the file contents with the following

    ```json
    {
      "mcpServers": {
        "layerdemo": {
          "command": "PATH_TO_YOUR_PROJECT/bin/run.js",
          "args": [
            AUTH_OVERRIDE_FLAGS
          ]
        }
      }
    }
    ```

  </TabItem>
  <TabItem value="claude" label="Claude" >
    1. Open **Claude Settings → Developer**
    2. Click **Edit Config**
    3. Replace the file contents with the following

    ```json
    {
      "mcpServers": {
        "layerdemo": {
          "command": "PATH_TO_YOUR_PROJECT/bin/run.js",
          "args": [
            AUTH_OVERRIDE_FLAGS
          ]
        }
      }
    }
    ```

  </TabItem>
  <TabItem value="windsurf" label="Windsurf" >
    1. Open **Windsurf Settings → General → MCP Servers**
    2. Click **Add New MCP Server**
    3. Replace the file contents with the following

    ```json
    {
      "mcpServers": {
        "layerdemo": {
          "command": "PATH_TO_YOUR_PROJECT/bin/run.js",
          "args": [
            AUTH_OVERRIDE_FLAGS
          ]
        }
      }
    }
    ```

  </TabItem>
</Tabs>

## Publishing to NPM

The generated server includes Github actions to make deploying your server as an NPM package super easy.

To publish it:

- Create a Github Repo (using the owner and repo name specified in the server generation)
- Add the following repository secrets (Repo Settings -> Secrets and variables -> Actions -> Repository secrets):
  - NPM_TOKEN: An NPM Token with publish access to the NPM organization you specified in the server generation
  - GH_USERNAME: The username that show up on the Github release on push to main
  - GH_EMAIL: The email that show up on the Github release on push to main
  - GH_TOKEN: A Github access token with access to create releases in your repo
- Push your generated server to the main branch of your repo

You should then see actions running to create a Github release then publish to NPM.

Once published, you can access your server with the following command

```
npx @{ORGANIZATION_NAME}/{PACKAGE_NAME} {AUTH_OVERRIDE_FLAGS}
```

### Installing in MCP Clients

<Tabs>
  <TabItem value="cursor" label="Cursor" default>
    1. Open **Cursor Settings → MCP**
    2. Click **Add new global MCP server**
    3. Replace the file contents with the following

    ```json
    {
      "mcpServers": {
        "layerdemo": {
          "command": "npx",
          "args": [
            "@ORGANIZATION_NAME/PACKAGE_NAME",
            AUTH_OVERRIDE_FLAGS
          ]
        }
      }
    }
    ```

  </TabItem>
  <TabItem value="claude" label="Claude" >
    1. Open **Claude Settings → Developer**
    2. Click **Edit Config**
    3. Replace the file contents with the following

    ```json
    {
      "mcpServers": {
        "layerdemo": {
          "command": "npx",
          "args": [
            "@ORGANIZATION_NAME/PACKAGE_NAME",
            AUTH_OVERRIDE_FLAGS
          ]
        }
      }
    }
    ```

  </TabItem>
  <TabItem value="windsurf" label="Windsurf" >
    1. Open **Windsurf Settings → General → MCP Servers**
    2. Click **Add New MCP Server**
    3. Replace the file contents with the following

    ```json
    {
      "mcpServers": {
        "layerdemo": {
          "command": "npx",
          "args": [
            "@ORGANIZATION_NAME/PACKAGE_NAME",
            AUTH_OVERRIDE_FLAGS
          ]
        }
      }
    }
    ```

  </TabItem>
</Tabs>
