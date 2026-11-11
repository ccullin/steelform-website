# Cloudflare Configuration for SteelForm Engineering

## DNS Setup

### Primary Domain Records:
1. `@` (A record) - Points to Vercel deployment IP
2. `www` (CNAME) - Points to vercel.com subdomain 
3. `mail` (MX record) - For email routing
4. `@` (TXT) - For domain verification and SPF records

### Subdomains:
1. `blog.steelformengineering.com.au`
2. `api.steelformengineering.com.au`

## CDN Configuration

### Caching Rules:
- Static assets (.css, .js, .png, .jpg): 30 days
- HTML pages: 1 hour  
- Dynamic content: 5 minutes

### Cache Behavior:
- Enable cache for all static resources
- Set cache headers properly on Vercel side
- Configure origin cache control settings

## Security Configuration

### Firewall Rules:
1. Rate limiting for API endpoints (100 requests/minute)
2. IP access restrictions for admin areas
3. Web Application Firewall rules for common attacks (SQLi, XSS)

### SSL/TLS:
- Enable automatic certificate management
- Set minimum TLS version to 1.2
- Configure HTTP Strict Transport Security (HSTS)

## Redirects

### URL Redirects:
1. `http://steelformengineering.com.au` → `https://www.steelformengineering.com.au`
2. `http://www.steelformengineering.com.au` → `https://www.steelformengineering.com.au`
3. Old service pages to new locations
4. Maintenance page redirects

### Redirect Conditions:
- 301 permanent redirects for moved content
- 302 temporary redirects for testing

## Performance Optimization

### Compression:
- Enable Brotli compression (higher compression than Gzip)
- Configure appropriate content types

### Image Optimization:
- Automatic image optimization through Cloudflare Image Resizing API
- CDN caching of optimized images

## Analytics and Monitoring

### Logging:
- Enable Cloudflare Logs for security events
- Set up logging for analytics
- Monitor request patterns and traffic spikes

### Metrics:
- Page load times monitoring
- Bandwidth usage tracking
- Security event reporting