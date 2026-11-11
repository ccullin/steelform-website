# Vercel Deployment Instructions for SteelForm Engineering

## Overview
This document provides step-by-step instructions to deploy the SteelForm Engineering website to Vercel, even without having an account yet.

## Prerequisites (Before Account Creation)

### 1. Prepare Your Repository
You'll need a GitHub repository with your project files:
- All source code in `src/` directory
- Package.json with dependencies
- Next.js configuration
- Public assets

### 2. Project Files Preparation
Ensure these key files exist in your repository:

```
steelform-website/
├── package.json
├── next.config.js  
├── src/
│   ├── pages/
│   │   └── index.js
│   ├── components/ 
│   ├── styles/
│   └── lib/
├── public/
└── README.md
```

## Step-by-Step Deployment Process

### Step 1: Create GitHub Repository (If Not Already Done)
1. Go to https://github.com/new
2. Name the repository `steelform-website`
3. Initialize with README.md
4. Add `.gitignore` for Node.js projects
5. Push your local files:
   ```
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/YOUR_USERNAME/steelform-website.git
   git push -u origin main
   ```

### Step 2: Create Vercel Account (If Needed)
1. Visit https://vercel.com/signup
2. Sign up with GitHub account
3. You'll be redirected to Vercel dashboard

### Step 3: Import Your Project
1. In your Vercel dashboard:
   - Click "New Project"
   - Select your `steelform-website` repository from GitHub
   - Configure project settings:
     * Framework Preset: "Next.js" 
     * Build Command: `npm run build`
     * Output Directory: `.next`

### Step 4: Set Environment Variables (Before First Deploy)
1. In Vercel dashboard, navigate to your project
2. Go to Settings > Environment Variables  
3. Add these variables:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID = your_sanity_project_id
   NEXT_PUBLIC_SANITY_DATASET = production
   SANITY_API_TOKEN = your_sanity_api_token
   ```

### Step 5: Configure Custom Domain (Optional)
1. In Settings > Domains
2. Add `www.steelformengineering.com.au`
3. Add `steelformengineering.com.au` 
4. Vercel will provide DNS records to configure with Cloudflare

### Step 6: Deployment Configuration
1. Enable automatic deployments from GitHub branch
2. Set up preview deployments for pull requests
3. Configure build settings:
   - Node.js version: 18 or later
   - Install command: `npm install`
   - Build command: `npm run build`

## Vercel-Specific Features for This Project

### Performance Optimization
- Automatic image optimization 
- Server-side rendering (SSR) for SEO benefits
- Static site generation where appropriate

### Continuous Integration
- Deploy previews on pull requests
- Automated testing with GitHub Actions
- Rollback capability through version control

## Build Process Details

### Development Build:
```bash
npm run dev
```

### Production Build:
```bash
npm run build
# Vercel will automatically build when code is pushed to main branch
```

### Local Testing Before Deployment
1. Clone your repository locally
2. Install dependencies: `npm install`
3. Run development server: `npm run dev`  
4. Test all pages and functionality
5. Verify mobile responsiveness

## Post-Deployment Steps

### 1. Monitor Deployments
- Check Vercel dashboard for build status
- Ensure no errors or warnings during deployment process

### 2. Configure Custom Domain (After DNS Setup)
Once Cloudflare configuration is complete:
1. In Vercel Project Settings > Domains
2. Add domain verification 
3. Wait for SSL certificate generation

## Troubleshooting Common Issues

### Issue: "Build failed" error
- Check that package.json has correct dependencies
- Verify Next.js version compatibility  
- Ensure no missing imports or syntax errors

### Issue: Environment variables not found
- Double-check variable names in Vercel dashboard
- Make sure variables are set for correct environment (production vs preview)
- Restart deployment after setting variables

### Issue: "404 - Not Found" on deployed site
- Verify domain configuration in Vercel Settings > Domains
- Ensure Cloudflare DNS points to the correct Vercel IP addresses