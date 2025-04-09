---
sidebar_position: 3
---

# Tools

Layer lets you define **tools** that AI agents can call through your MCP server. Tools represent structured API endpoints that agents can invoke using function calling. These allow agents to interact directly with your product in real-time.

## Adding Tools

1. **Go to the Tools Tab**: In the Management Dashboard, navigate to the **Tools** page.
2. **Add a New Tool**:
   - Select the option for how you would like to add tools using the dropdown button in the top-right corner of the tool table:
     - **OpenAPI Import**: Upload your OpenAPI spec and select endpoints to add as tools
     - **Manual Configuration**: Fill in the endpoint details and parameter schema manually
   - Try to use a descriptive **name** and **description** for each tool, as they will influence when an agent chooses to call the tool.

## Editing Tools

- To update an existing tool, click the menu on the right side of the tool row and select **Edit**.
- You can modify the name, description, parameters, and other details at any time.

## Deleting Tools

- **Delete Individual Tools**: Click the menu on the right of the tool row and select **Delete**.
- **Batch Deletion**: Select multiple rows and click the **Batch Delete** button at the top of the table.

## Best Practices

- Make sure your tool names and descriptions are clear and actionable—agents rely on this metadata when deciding which tools to call.
- Use sample inputs and outputs to give the agent more context and improve call accuracy.
- Only expose tools that are safe to use autonomously—tools with destructive actions (e.g., deleting user data) should be gated or omitted unless necessary.
