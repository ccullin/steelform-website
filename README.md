# SteelForm Engineering Website

## Project Overview
This repository contains the complete implementation plan and code for replicating www.steelformengineering.com.au using modern web technologies including Next.js, Sanity CMS, and Cloudflare.

## Technology Stack

### Frontend: Next.js + Vercel Hosting
- React-based framework with server-side rendering 
- Automatic deployments through Vercel platform
- Global CDN delivery with performance optimization

### Content Management: Sanity.io CMS  
- Headless content management system
- Custom schema designed for manufacturing business needs
- Real-time collaboration and preview capabilities

### Infrastructure: Cloudflare Services
- DNS management with global resolution
- CDN acceleration for fast content delivery
- Security protection including DDoS mitigation and WAF
- SSL/TLS encryption and performance optimization

## Project Structure

```
steelform-website/
├── package.json              # Project dependencies and scripts
├── next.config.js            # Next.js configuration  
├── src/
│   ├── pages/                # Page components (index.js, _app.js)
│   ├── components/           # Reusable React components
│   ├── styles/               # Global CSS and styling 
│   └── lib/                  # Utility functions
├── public/                   # Static assets (images, icons)
├── sanity-config.js          # Sanity CMS configuration  
├── sanity-schema.js          # Content schema definitions
├── vercel-deployment.md      # Vercel deployment instructions
├── cloudflare-setup-guide.md # Cloudflare setup documentation
├── deployment-guide.md       # Complete deployment workflow
└── project-summary.md        # Project overview and implementation status
```

## Key Features

### Website Implementation:
- Responsive design for all device sizes
- Mobile-first approach with touch-friendly navigation  
- Modern UI/UX optimized for manufacturing industry
- SEO friendly structure with proper meta tags

### Content Management:
- Custom schema supporting all website content types:
  - Homepage sections
  - Services overview 
  - Team member profiles
  - Project portfolio
  - Blog posts and news
  - Contact information  

### Performance & Security:
- Server-side rendering for better SEO
- Automatic image optimization  
- Global CDN delivery with Cloudflare
- SSL/TLS encryption
- Web Application Firewall protection

## Implementation Steps

1. **Repository Setup**: 
   - Create GitHub repository named `steelform-website`
   - Push all project files to the repository

2. **Vercel Deployment**:
   - Connect GitHub repository to Vercel  
   - Configure environment variables
   - Enable automatic deployments

3. **Sanity CMS Configuration**:
   - Create Sanity.io account and project
   - Import `sanity-schema.js` schema definitions
   - Set up content management workflow  

4. **Cloudflare Setup**:
   - Add domain to Cloudflare dashboard  
   - Configure DNS records pointing to Vercel
   - Enable security features and CDN

## Getting Started (For Implementation)

### Local Development:
```bash
# Clone your repository
git clone https://github.com/YOUR_USERNAME/steelform-website.git
cd steelform-website

# Install dependencies  
npm install

# Run development server
npm run dev

# Visit http://localhost:3000 to view the site
```

### Deployment:
1. Push all files to GitHub repository
2. Connect repository to Vercel 
3. Configure required environment variables in Vercel dashboard
4. Add domain and configure Cloudflare DNS settings
5. Enable SSL certificates through Cloudflare

## Configuration Files

### sanity-config.js
- Contains Sanity CMS configuration including project IDs and schema definitions  
- Used for connecting the frontend to content management system

### vercel-deployment.md  
- Complete guide for deploying to Vercel hosting platform
- Environment variable setup instructions  

### cloudflare-setup-guide.md
- Detailed steps for configuring Cloudflare DNS, CDN, security settings
- SSL/TLS configuration and performance optimization  

## Documentation Files

### deployment-guide.md
- Full workflow documentation from start to finish
- Covers all aspects of implementation process

### project-summary.md  
- Overview of completed work and current status
- Implementation checklist and future enhancements

## Environment Variables

Required for proper functionality:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production  
SANITY_API_TOKEN=your_api_token
```

## Support & Maintenance  

This implementation provides a robust foundation that can be enhanced over time. The modular structure allows easy addition of new features while maintaining core functionality.

All documentation is ready for immediate use when accounts are created in each service (Vercel, Sanity, Cloudflare).

## License

MIT License - see LICENSE file for details..
