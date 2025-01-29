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

## Environment Variables

The following environment variables can be used to configure the portal:

| Variable Name                | Explanation                                              | Additional Notes                                                 |
| ---------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------- |
| NEXT_PUBLIC_DDS_URL          | URL for the Data Discovery Service API                   | Ensure this points to the correct environment (dev/staging/prod) |
| NEXT_PUBLIC_DAAM_URL         | URL for the Data Access and Authorization Management API | Ensure this points to the correct environment (dev/staging/prod) |
| NEXTAUTH_URL                 | The base URL of your application                         | Important for authentication callbacks                           |
| NEXTAUTH_SECRET              | Secret used to encrypt JWT tokens                        | Should be a long, random string. Rotate regularly for security   |
| KEYCLOAK_CLIENT_ID           | Client ID for Keycloak authentication                    | Obtained from your Keycloak admin console                        |
| KEYCLOAK_CLIENT_SECRET       | Client secret for Keycloak authentication                | Obtained from your Keycloak admin console. Keep this secret!     |
| KEYCLOAK_ISSUER_URL          | URL of the Keycloak realm                                | Ensure this points to the correct realm                          |
| END_SESSION_URL              | URL for ending the user's session                        | Used for logout functionality                                    |
| REFRESH_TOKEN_URL            | URL for refreshing authentication tokens                 | Ensures long-lived sessions                                      |
| CSP_HEADER                   | Content Security Policy header                           | Defines allowed sources for various resource types               |

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