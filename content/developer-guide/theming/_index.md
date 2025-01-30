---
title: Theming
weight: 2
---
<!--
SPDX-FileCopyrightText: 2024 PNED G.I.E.

SPDX-License-Identifier: CC-BY-4.0
-->

# Frontend Customization Documentation

The GDI User Portal offers extensive customization options through environment variables and public assets. This guide will help you understand how to customize various aspects of the portal.

## Public Assets Customization

The portal's appearance can be customized through various files in the `/public` directory:

### Core Configuration Files

1. `properties.json`: Contains main site configuration including:
   - Site title and description
   - Homepage content and titles
   - Social media links
   - Contact information
   - Footer text
   - Feature flags

2. `palette.css`: Defines the color scheme including:
   - Primary and secondary colors
   - Info and warning colors
   - Hover states
   - Surface colors
   - Dark mode support

### Visual Assets

1. **Logos**:
   - `header-logo.svg`: Main logo displayed in the header
   - `footer-logo.png`: Logo displayed in the footer
   - `favicon.ico`: Browser tab icon

2. **Images**:
   - `homepage-about-background.png`: Background image for the about section

### Typography

1. `fonts.css`: Custom font definitions and typography settings
2. `fonts/` directory: Contains custom font files

### Content Files

1. `about.md`: About page content
2. `howto.md`: How-to guide content
3. `legal.md`: Legal information and terms

## Customization Best Practices

1. **Colors**: 
   - Use the `palette.css` file to maintain consistent branding
   - Consider both light and dark mode color schemes
   - Ensure sufficient contrast for accessibility

2. **Typography**:
   - Add custom fonts to the `fonts/` directory
   - Define font faces in `fonts.css`
   - Maintain consistent font usage throughout the application

3. **Content**:
   - Keep content in markdown files for easy maintenance
   - Update `properties.json` for site-wide text changes
   - Maintain proper licensing information in `.license` files

4. **Images**:
   - Use SVG format for logos when possible
   - Optimize image sizes for web performance
   - Include appropriate alt text in implementation

5. **Environment Variables**:
   - Use different values for development, staging, and production
   - Keep sensitive values secure
   - Document any new variables added to the system