# 🎂 Pallav's Kitchen - Website & Portfolio

Welcome to the official repository for **Pallav's Kitchen**! This is a modern, responsive portfolio website designed to showcase handcrafted cakes and bakery delights.

## 🚀 The "Kitchen Sync" Automation

We have automated the process of updating the gallery. You no longer need to manually edit HTML or JS to add new cakes.

### How it Works
The project uses a **Gemini CLI Skill** called `kitchen-sync`. It uses AI vision to analyze your cake photos, rename them for SEO, and update the website's database.

### Workflow: Adding New Cakes
1.  **Upload:** Drop your new cake images (e.g., from WhatsApp or your camera) into the `images/` folder.
2.  **Sync:** In your terminal, run:
    ```bash
    # Ensure you are in the project root
    gemini "I've added new cakes, please run the kitchen-sync skill."
    ```
3.  **Verify:** The agent will:
    - Identify the new images.
    - Rename them descriptively (e.g., `images/blue-floral-anniversary-cake.jpg`).
    - Add their metadata to `cakes.json`.
    - Update the gallery in `script.js`.

---

## 🛠 Project Structure

- `index.html`: The main website structure.
- `style.css`: The styling (with support for Dark Mode and animated backgrounds).
- `script.js`: The "Engine" that renders the gallery and handles filtering.
- `images/`: The folder containing all cake photos and the `logo.png`.
- `cakes.json`: **The Memory.** This file stores the metadata for every cake. Do not delete it, as it prevents the automation from re-processing old cakes.
- `sync_cakes.py`: A helper script used by the automation to detect untracked images.

## 🧪 Advanced: GitHub Actions
It is possible to trigger this via GitHub Actions whenever you push new images to the `images/` folder. However, since image analysis requires a Gemini API key, you would need to:
1. Set up a `GEMINI_API_KEY` in your GitHub Repository Secrets.
2. Use a workflow that runs a script to call the Gemini API.
*(Currently, the Gemini CLI manual trigger is recommended for the best creative descriptions!)*

---
*Baked with passion at Pallav's Kitchen.*
