---
sidebar_position: 3
slug: /demo-mcp-server
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Demo MCP Server

When you sign up for Layer, we automatically generate a **Demo MCP Server** for your product. This is a hosted MCP server used to test and validate your setup across supported clients before deploying your own self-hosted version.

The demo server reflects the current configuration of your **Resources**, **Tools**, and **Prompts**. Any edits to your tools, resources, or prompts will be reflected in the demo server after you reconnect to it in your MCP client.

If you plan to launch publicly, we recommend using Layer's **[MCP Server Generator](/generator)** to generate and publish a self-hosted version after testing.

## Using Your Demo Server

The command used to access your demo command is:

```
npx @buildwithlayer/generator demo mcp {YOUR_LAYER_API_KEY} {AUTH_OVERRIDE_FLAGS}
```

You can find your **Layer API Key** on the settings page of the management dashboard. Note that you should use `Layer-Api-Key` and not `Layer-User-Api-Key`.

### Auth Override Flags

Additional flags are generated for your server for each auth parameter or header parameter shared by all of your [**tools**](/management-dashboard/tools). These flags allow you to set auth tokens once, so you are not prompted for them each time you start a new chat.

You can see the generated flags, as well as the following installation instructions for your demo server by clicking the **Demo MCP Server** button in the bottom of the management dashboard's navbar.

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
            "@buildwithlayer/generator",
            "demo",
            "mcp",
            "YOUR_LAYER_API_KEY",
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
            "@buildwithlayer/generator",
            "demo",
            "mcp",
            "YOUR_LAYER_API_KEY",
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
            "@buildwithlayer/generator",
            "demo",
            "mcp",
            "YOUR_LAYER_API_KEY",
            AUTH_OVERRIDE_FLAGS
          ]
        }
      }
    }
    ```

  </TabItem>
</Tabs>
