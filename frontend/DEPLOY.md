# Deployment Guide for Nexus Strategies Dashboard

This guide explains how to deploy the Nexus Strategies Student Risk Prediction Dashboard landing page to GitHub Pages.

## Prerequisites

- Node.js and Yarn installed
- A GitHub account
- A GitHub repository for this project

## Step-by-Step Deployment

### 1. Prepare your Repository

Ensure your project is initialized as a git repository and connected to GitHub.

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### 2. Update `package.json`

You need to add the `homepage` field and deployment scripts to your `package.json`.

**Open `/app/frontend/package.json` and add these lines:**

```json
{
  "name": "frontend",
  "version": "0.1.0",
  "homepage": "https://YOUR_GITHUB_USERNAME.github.io/YOUR_REPO_NAME",  <-- ADD THIS
  "private": true,
  "dependencies": { ... },
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "predeploy": "yarn build",      <-- ADD THIS
    "deploy": "gh-pages -d build"   <-- ADD THIS
  }
}
```

*Replace `YOUR_GITHUB_USERNAME` and `YOUR_REPO_NAME` with your actual details.*

### 3. Install `gh-pages`

Install the GitHub Pages deployment tool as a dev dependency:

```bash
yarn add -D gh-pages
```

### 4. Deploy

Run the deploy command. This will build your application and push the `build` folder to a `gh-pages` branch on your repository.

```bash
yarn deploy
```

### 5. Verify

Go to your GitHub repository settings -> Pages. Ensure the source is set to the `gh-pages` branch. Your site should be live at the URL you specified in `homepage`.

---

## Troubleshooting

- **Images not loading?** Ensure you are using absolute paths or importing images in React. For external images (Unsplash), they should work fine.
- **Blank page?** Check the Console in Developer Tools. Ensure your `homepage` URL in `package.json` matches exactly where GitHub is hosting it.
- **Routing issues?** Since this is a Single Page Application (SPA) on GitHub Pages, if you use `BrowserRouter`, refreshing on a sub-route might cause a 404. This project uses a single landing page structure, so this shouldn't be an issue.

## Local Development

To run the project locally:

```bash
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
