# Setup Guide for N8N

## N8N Installation

1. **Docker Installation**
   - Make sure you have Docker installed on your machine.
   - Use the following command to run N8N:
     ```bash
     docker run -d -p 5678:5678 n8n/n8n
     ```

2. **Local Installation**
   - Clone the N8N repository:
     ```bash
     git clone https://github.com/n8n-io/n8n.git
     cd n8n
     npm install
     npm run start
     ```

## Importing Workflows

1. Go to the N8N editor UI.
2. Click on the "Import" button.
3. Paste your workflow JSON or upload a file containing the workflow.
4. Click "Import" to add the workflow to your N8N instance.