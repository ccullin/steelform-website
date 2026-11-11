# Cloudflare Setup Guide for SteelForm Engineering

## Overview
This document outlines how to configure Cloudflare for the SteelForm Engineering website, even without having an account yet.

## Prerequisites (Before Account Creation)

### 1. Have Your Vercel Deployment Ready
- You must have already deployed your site to Vercel and obtained:
  - Vercel project URL (e.g., `your-project.vercel.app`)
  - Vercel IP addresses for DNS configuration

### 2. Domain Registration
- Ensure you own the domain `steelformengineering.com.au`
- You can register through any registrar or use existing registration

## Step-by-Step Cloudflare Configuration Process

### Step 1: Create Cloudflare Account (If Needed)
1. Visit https://dash.cloudflare.com/sign-up
2. Sign up using email address and password
3. Verify your email address 
4. Log in to the Cloudflare dashboard

### Step 2: Add Your Domain to Cloudflare
1. In Cloudflare Dashboard:
   - Click "Add Site" button
   - Enter `steelformengineering.com.au`
   - Select "I will add DNS records manually"
2. Follow the setup wizard and click "Continue"

### Step 3: Configure DNS Records (Primary)
1. Go to "DNS" tab in your zone settings:
   
**A Records:**
- Name: `@` 
- Type: A
- Content: Vercel IP address (obtained from Vercel dashboard or documentation)
- TTL: Automatic

- Name: `www`
- Type: CNAME  
- Content: your-project.vercel.app (Vercel subdomain)
- TTL: Automatic

**TXT Records:**
- Name: `@` 
- Type: TXT
- Content: Domain verification string from Vercel or email confirmation
- TTL: Automatic

### Step 4: SSL/TLS Configuration
1. Go to "SSL/TLS" in Cloudflare dashboard:
   - Set SSL/TLS encryption mode to "Full (strict)"
   - Enable "Always Use HTTPS"
   - Configure HTTP/2 support

### Step 5: Performance Settings  
1. Navigate to "Speed" tab:
   - Enable "Auto Minify" for CSS, JavaScript and HTML
   - Enable "Brotli Compression"
   - Set "Cache Level" to "Aggressive"

### Step 6: Security Configuration

**WAF (Web Application Firewall):**
1. Go to "Security" > "WAF"
2. Enable WAF rules:
   - SQL injection protection  
   - Cross-site scripting (XSS) prevention
   - Rate limiting for common endpoints

**Firewall Rules:**
- Set up custom firewall rules for your specific security needs
- Configure IP access restrictions if needed

### Step 7: CDN Configuration
1. Go to "Speed" > "Caching":
   - Enable Cloudflare caching 
   - Set cache behavior:
     * Static assets (.css, .js, images): 30 days
     * HTML pages: 1 hour
     * Dynamic content: 5 minutes

### Step 8: Redirects Setup (Optional)
If you need to redirect traffic:

1. Go to "Page Rules" in Cloudflare dashboard:
   - Create new rule for HTTP to HTTPS redirection
   - Add rules for www vs non-www redirects
   
Example redirect setup:
- From: `http://steelformengineering.com.au/*`
- To: `https://www.steelformengineering.com.au/$1`  
- Status: 301 Permanent Redirect

## Required DNS Records Summary

| Name | Type | Content |
|------|------|---------|
| @ | A | Vercel IP address |
| www | CNAME | your-project.vercel.app |
| @ | TXT | Domain verification code |
| mail | MX | Your email provider records |

## Cloudflare Features for This Project

### 1. Security
- DDoS protection
- Web Application Firewall (WAF)
- Bot management and rate limiting  
- SSL/TLS certificate automation

### 2. Performance Optimization
- Global CDN with edge caching
- Automatic image optimization through Cloudflare Images API
- Brotli compression for faster delivery
- HTTP/2 support

### 3. Analytics and Monitoring
- Traffic analytics dashboard
- Security logs and reports  
- Performance insights and metrics

## Testing Your Configuration

### DNS Propagation Test:
1. Use online tools like: https://dnschecker.org/
2. Check if your domain resolves to Cloudflare servers
3. Wait for propagation (typically 5-10 minutes)

### SSL/TLS Test:
1. Visit https://www.sslshopper.com/certificate-decoder.html
2. Enter your website URL  
3. Verify certificate is valid and properly configured

## Troubleshooting Common Issues

### Issue: "DNS records not pointing to Cloudflare"
- Double-check DNS settings in registrar (GoDaddy, Namecheap, etc.)
- Ensure A record points directly to Vercel's IP addresses
- Verify CNAME for www subdomain

### Issue: SSL Certificate Problems  
- Wait 5-10 minutes for certificate generation
- Check that domain verification TXT records are correct
- Restart deployment or try re-adding the site in Cloudflare

### Issue: Site Not Loading After Setup
1. Clear browser cache
2. Test with a different browser/device
3. Verify Vercel is correctly configured to serve your project  
4. Check that your domain points to the right IP addresses

## Maintenance and Updates

### Regular Checks:
- Monitor Cloudflare dashboard for security incidents
- Review performance metrics monthly
- Update firewall rules as needed based on threat patterns  

### Domain Renewal:
- Set up auto-renewal in your domain registrar
- Keep contact information updated in both registrar and Cloudflare

## Backup and Rollback Plan

1. **Backup DNS Configuration**: Export current DNS records from Cloudflare
2. **Record Vercel Settings**: Save project settings for quick recovery  
3. **Maintain Documentation**: Keep this guide updated with changes made

This configuration will provide enterprise-grade security, global performance optimization, and reliable delivery for the SteelForm Engineering website.