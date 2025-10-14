# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the ALODA agency website - a static HTML site converted from Webflow export to a standalone version. The repository contains both the original Webflow export and the cleaned standalone version ready for VPS deployment.

## Repository Structure

### Original Webflow Export (for reference only)
- `mainpage/` - Original main page export
- `about/` - Original about page export  
- `services/` - Original services page export
- `our_cases/` - Original cases page export

### Standalone Site (production-ready)
- `standalone_site/` - **Main working directory for all development**
  - `index.html` - Main landing page (cleaned)
  - `about.html` - About page (cleaned)
  - `services.html` - Services page (cleaned)  
  - `cases.html` - Cases page (cleaned)
  - `css/main.css` - Consolidated styles
  - `js/` - Essential JavaScript files
  - `images/` - All site assets and images

## Key Technologies

- **Static HTML/CSS/JS**: No framework dependencies
- **jQuery 3.5.1**: Used for page interactions
- **Google Fonts**: Inter and Inter Tight fonts
- **Responsive Design**: Mobile-first approach
- **Russian Content**: All content in Russian language

## Development Workflow

### Primary Working Directory
**Always work in `standalone_site/` directory** - this is the production-ready version.

### Common Development Tasks

1. **Content Updates**:
   ```bash
   # Edit HTML files directly in standalone_site/
   vim standalone_site/index.html
   vim standalone_site/about.html
   # etc.
   ```

2. **Styling Changes**:
   ```bash
   # Edit the main CSS file
   vim standalone_site/css/main.css
   ```

3. **Adding Images**:
   ```bash
   # Add new images to images directory
   cp new_image.jpg standalone_site/images/
   # Update HTML references accordingly
   ```

4. **Testing Locally**:
   ```bash
   cd standalone_site
   python3 -m http.server 8000
   # Visit http://localhost:8000
   ```

### File Organization

- **HTML files**: Clean structure with relative paths
- **CSS**: Single consolidated file at `css/main.css`
- **JavaScript**: Essential files in `js/` directory
- **Images**: All assets in `images/` directory with original Webflow naming
- **No build process**: Direct file editing

## Deployment

The site is ready for VPS deployment. See `DEPLOYMENT.md` for complete instructions.

**Quick deployment checklist**:
1. Upload `standalone_site/` directory to your VPS
2. Configure web server (Nginx/Apache) to serve from this directory
3. Set up domain DNS to point to your VPS
4. Configure SSL certificate (recommended)

## Site Structure & Navigation

### Pages
- **index.html** - Main page with hero section, services overview, cases preview
- **about.html** - Company information and team details
- **services.html** - Detailed service offerings
- **cases.html** - Portfolio and case studies

### Navigation
- All internal links use relative paths (about.html, services.html, etc.)
- Contact forms/buttons link to #contact anchors
- Mobile responsive hamburger menu included

## Content Management

### Updating Content
- **Company info**: Edit contact details in footer sections of all HTML files
- **Services**: Update service listings in both index.html and services.html
- **Cases/Portfolio**: Modify project cards in cases.html and featured work in index.html
- **Images**: Replace files in images/ directory, keeping same filenames for consistency

### SEO Considerations
- All pages have proper meta descriptions in Russian
- Page titles are descriptive and include company name
- Image alt tags are present (update as needed)
- Clean URL structure with .html extensions

## Important Notes

- **No Webflow dependencies**: Site is completely standalone
- **No external API calls**: All content is static
- **Russian language**: All content and meta tags in Russian
- **Mobile responsive**: Works on all device sizes
- **Cross-browser compatible**: Uses standard HTML/CSS/JS

## Troubleshooting

### Common Issues
1. **Broken images**: Check file paths in images/ directory
2. **Styling issues**: Verify css/main.css is loading correctly
3. **Navigation problems**: Ensure all .html files exist with correct names
4. **Mobile view**: Test responsive design on various screen sizes

### File Permissions
Ensure proper permissions for web serving:
```bash
chmod -R 755 standalone_site/
```