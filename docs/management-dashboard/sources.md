---
sidebar_position: 1
---

# Managing Sources

Layer uses **sources** to feed its **RAG (Retrieval-Augmented Generation)** system, which provides specific and accurate responses to your developers' queries. These sources may consist of your product's documentation, FAQs, GitHub repositories, and other helpful resources that can be referenced by your LLM extensions.

## Supported Source Types

- **Websites**: Either by crawling an entire site or selecting individual pages to use as sources.
- **GitHub Repositories/Files**: Automatically pull content from your repositories and files. We suggest you only add human-readable code examples, as most LLMs will handle these best.
- **Document/File Uploads**: Upload files directly or from a URL. Supported file types are listed in the Add Document Source modal.
- **Suggested Responses**: Input predefined responses for commonly asked questions to guide the AI in providing consistent answers.

## Adding Sources

1. **Go to the Sources Tab**: In the Management Dashboard, navigate to the **Sources** page.
2. **Add a New Source**: Click the **plus (+)** button in the top right corner of the source table.
3. **Configure the Source**: In the "Add Source" modal:
   - Choose the **source type** (Website, GitHub, File Upload, or Suggested Response).
   - Enter the **name** for the source and fill in the relevant fields based on the source type (e.g., URL for websites, repository link for GitHub, file upload or URL for documents).
4. **Website Crawling**: If you're crawling a website, wait for the crawl to complete. A progress indicator will show in a snackbar notification. Once the crawl finishes, you can select which pages you’d like to add as sources.

## Syncing Sources

- **Automatic Syncing**: Web-based sources (websites, GitHub repositories, and documents from URLs) will sync **automatically once per week**.
- **Manual Syncing**: To manually sync a **web-based source**, click the menu on the right of the source row and select **Sync**. This will refresh the content but not re-crawl the website for new or removed pages. Full re-crawling will be added in a future release.
- **Sync Settings**: Configuring custom sync frequencies and settings for individual sources will also be available in a future release.

## Editing Sources

- **Non-Web-Based Sources**: You can edit sources that don't pull from URLs (e.g. suggested responses & manually uploaded documents) by clicking the menu on the right of the row you'd like to modify, and selecting **Edit**.
- **Web-Based Sources**: These sources cannot be edited directly in the Management Dashboard. Instead, syncing them will refresh their content to match the latest version of their URL.

## Deleting Sources

- **Delete Individual Sources**: To delete a source, click the menu on the right of the row and select **Delete**.
- **Batch Deletion**: To delete multiple sources at once, select the rows you want to delete and click the **Batch Delete** button at the top of the table.
