---
sidebar_position: 2
---

# Prompts

Prompts define structured workflows that guide how AI agents interact with your product. Each prompt can include a series of steps that provide context, suggest actions, or instruct the agent to call specific tools.

These are especially useful for guiding agents through multi-step flows—like onboarding, setup, or usage patterns that require sequential behavior.

:::note

Most MCP clients do not support prompts at the moment, so they are currently treated as additional tools. Layer will automatically update how these are handled as more clients support prompts.

:::

## Prompt Step Types

Each prompt consists of one or more steps. Supported step types include:

- **Tool**: Instructs the agent to call a specific tool defined in your MCP server.
- **Resource**: Provides the content of a resource (e.g. docs) as input to the agent.
- **Text**: Supplies freeform text or instructions to shape the agent’s understanding and behavior.
- **Local Action**: Describes a task the agent should perform using local functionality, or instructs the user if local actions aren’t supported by the client (e.g., running a CLI command).

These step types can be combined to build flexible, guided experiences for agents interacting with your product.

## Prompt Arguments

You can add **prompt arguments** to make your prompts dynamic and reusable. Prompt arguments can be used inside **Text** and **Local Action** steps by referencing them with curly braces (e.g., `{environment}`).

Each argument includes:

- **Name**: This will be used by the agent to prompt the user for the argument, and can be used as a placeholder to reference in steps
- **Description**: A short explanation of what the argument represents
- **Required**: Indicates whether the agent must supply a value before running the prompt

To add arguments:

1. In the **Add Prompt** modal, navigate to the **Arguments** tab.
2. Click **Add Argument**, then fill in the name, description, and required flag.
3. Use the argument in your prompt steps by referencing its name in curly braces.

## Creating Prompts

1. **Go to the Prompts Tab**: In the Management Dashboard, navigate to the **Prompts** page.
2. **Add a New Prompt**:
   - Click the **plus (+)** button in the top right corner of the prompt table.
   - Give your prompt a clear **name** and **description**.
   - Add arguments, if desired.
   - Add one or more **steps**.
   - For each step, configure the relevant settings (e.g. select a tool or resource, input text, define a local action).

## Editing Prompts

- To update a prompt, click the menu on the right side of the prompt row and select **Edit**.
- You can add or remove steps at any time, and update prompt metadata.

## Deleting Prompts

- **Delete Individual Prompts**: Click the menu on the right of the prompt row and select **Delete**.
- **Batch Deletion**: Select multiple prompts and click the **Batch Delete** button at the top of the table.

## Best Practices

- Use prompts to guide agents through common workflows or onboarding paths.
- Combine text, tools, and resources to build helpful, agent-friendly instructions.
- Keep step instructions clear and focused—agents will follow them closely and sequentially.
- Test prompts with your demo MCP server to ensure they produce the desired agent behavior.
