---
sidebar_position: 1
---

# Resources

Layer uses **resources** to feed its **RAG (Retrieval-Augmented Generation)** system, which provides specific and accurate context to agents. These resources may consist of your product's documentation, FAQs, GitHub repositories, and other helpful context that can be referenced by your LLM extensions.

:::note

Most MCP clients do not support resources at the moment, so an additional tool to search and provide the context of resources is added to both your demo MCP server and generated MCP server. Layer will automatically update how these are handled as more clients support resources.

:::

## Supported Resource Types

- **Websites**: Either by crawling an entire site or selecting individual pages to use as resources.
- **GitHub Repositories/Files**: Automatically pull content from your repositories and files. We suggest you only add human-readable code examples, as most LLMs will handle these best.
- **Document/File Uploads**: Upload files directly or from a URL. Supported file types are listed in the Add Document Resource modal.
- **Suggested Responses**: Input predefined responses for commonly asked questions to guide the AI in providing consistent answers.

## Adding Resources

1. **Go to the Resources Tab**: In the Management Dashboard, navigate to the **Resources** page.
2. **Add a New Resource**: Click the **plus (+)** button in the top right corner of the resource table.
3. **Configure the Resource**: In the "Add Resource" modal:
   - Choose the **source type** (Website, GitHub, File Upload, or Suggested Response).
   - Fill in the relevant fields based on the resource type (e.g., URL for websites, repository link for GitHub, file upload or URL for documents).
4. **Website Crawling**: If you're crawling a website, wait for the crawl to complete. A progress indicator will show in a snackbar notification. Once the crawl finishes, you can select which pages you’d like to add as resources.

## Syncing Resources

- **Automatic Syncing**: Web-based resources (websites, GitHub repositories, and documents from URLs) will sync **automatically once per week**.
- **Manual Syncing**: To manually sync a **web-based resource**, click the menu on the right of the resource row and select **Sync**. This will refresh the content but not re-crawl the website for new or removed pages. Full re-crawling will be added in a future release.
- **Sync Settings**: Configuring custom sync frequencies and settings for individual resources will also be available in a future release.

## Editing Resources

- **Non-Web-Based Resources**: You can edit resources that don't pull from URLs (e.g. suggested responses & manually uploaded documents) by clicking the menu on the right of the row you'd like to modify, and selecting **Edit**.
- **Web-Based Resources**: These resources cannot be edited directly in the Management Dashboard. Instead, syncing them will refresh their content to match the latest version of their URL.

## Deleting Resources

- **Delete Individual Resources**: To delete a resource, click the menu on the right of the row and select **Delete**.
- **Batch Deletion**: To delete multiple resources at once, select the rows you want to delete and click the **Batch Delete** button at the top of the table.
