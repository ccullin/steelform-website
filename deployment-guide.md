# SteelForm Engineering Website Deployment Guide

## Overview
This document outlines how to deploy and manage the SteelForm Engineering website using Vercel, Sanity CMS, and Cloudflare.

## Technology Stack

### Frontend: Next.js with Vercel
- Modern React-based framework for building the website
- Server-side rendering for better SEO and performance
- Automatic deployment through GitHub integration

### Content Management: Sanity.io
- Headless CMS for managing content
- Real-time collaboration features
- Custom schema designed for manufacturing business needs

### Infrastructure: Cloudflare
- DNS management with wildcard support
- CDN for global content delivery
- Security protection against threats
- SSL/TLS certificates
- Performance optimization

## Setup Instructions

### 1. GitHub Repository Setup
1. Create a new repository on GitHub named `steelform-website`
2. Initialize with README.md and .gitignore (Node.js template)
3. Push the local project files to this repository

### 2. Vercel Deployment Configuration
1. Connect your GitHub account to Vercel
2. Import the `steelform-website` repository
3. Configure environment variables:
   - NEXT_PUBLIC_SANITY_PROJECT_ID
   - NEXT_PUBLIC_SANITY_DATASET
   - SANITY_API_TOKEN

### 3. Sanity CMS Setup
1. Create a new project in Sanity.io
2. Use the schema defined in `sanity-schema.js`
3. Configure content types for:
   - Homepage content
   - Services
   - Team members
   - Projects
   - Blog posts
   - Settings

### 4. Cloudflare Configuration
1. Add domain to Cloudflare account
2. Update DNS records pointing to Vercel deployment
3. Enable SSL/TLS encryption
4. Configure security settings and caching rules

## Environment Variables Management

### Production:
- SANITY_PROJECT_ID: [Project ID from Sanity]
- SANITY_DATASET: production
- NEXT_PUBLIC_SANITY_PROJECT_ID: [Public Project ID]
- NEXT_PUBLIC_SANITY_DATASET: production

### Development:
- SANITY_PROJECT_ID: [Project ID from Sanity]
- SANITY_DATASET: development
- NEXT_PUBLIC_SANITY_PROJECT_ID: [Public Project ID] 
- NEXT_PUBLIC_SANITY_DATASET: development

## Content Strategy

### Regular Updates:
1. Add new projects to portfolio section
2. Publish industry insights in blog section
3. Update service offerings based on market changes
4. Maintain team member information

### Content Workflow:
1. Create content in Sanity CMS
2. Preview changes before publishing
3. Schedule posts for future publication
4. Monitor analytics and user engagement

## Monitoring and Maintenance

### Performance Monitoring:
- PageSpeed Insights (Google)
- Lighthouse audits
- Cloudflare performance metrics
- Vercel deployment monitoring

### Security Checks:
- Regular malware scans
- Update dependencies monthly
- Review access controls
- Monitor for unusual traffic patterns

## Backup Strategy

1. GitHub repository serves as primary backup
2. Sanity CMS provides content versioning and backups
3. Cloudflare automatically caches static assets
4. Vercel maintains deployment history and rollback capability

## Troubleshooting Guide

### Common Issues:
1. **Content not showing in production**: Check environment variables match between Sanity and Next.js
2. **Deployment failures**: Verify GitHub repository connection to Vercel
3. **DNS issues**: Confirm Cloudflare DNS records are properly configured
4. **SSL certificate problems**: Ensure domain is verified with Cloudflare

### Quick Fix Checklist:
- [ ] Verify all environment variables are set correctly
- [ ] Check Sanity schema matches content types
- [ ] Validate DNS settings in Cloudflare
- [ ] Test Vercel deployment logs for errors