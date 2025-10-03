# GDI Documentation Monorepo

This repository contains a monorepo setup for the GDI (Genomic Data Infrastructure) documentation consisting of **6 separate Docusaurus applications**: one central landing page and 5 specialised documentation guides.

## Monorepo architecture and behavior

### Repository structure
```
documentation/
├── apps/                   # All web applications
│   ├── landing/           # Central landing page (no docs, just navigation)
│   ├── user-portal/       # User portal documentation
│   ├── cms/               # CMS documentation  
│   ├── daams/             # DAAMS documentation
│   ├── system-admin/      # System admin documentation
│   └── developer/         # Developer documentation
├── package.json           # Root package.json with workspace configuration
├── dev.js                 # Development helper script
└── README.md              # This file
```

### How it works
This monorepo creates **6 independent web applications** that work together:

1. **Central Landing Page** (`apps/landing`) 
   - **No documentation content** - serves as a navigation hub only
   - Hero banner with "Welcome to GDI Documentation"
   - 5 feature cards that link to the specialised guides
   - Runs on port 3000

2. **5 Specialised documentation sites** (`apps/*`)
   - **Completely separate** Docusaurus sites with their own content
   - **Scoped search** - each site only searches its own content
   - **Independent navigation** - each has its own sidebar structure
   - **Back to hub** link in navbar to return to landing page
   - Each documentation site runs on its own port `3001-3005`

### Each Documentation App Contains:
```
apps/[app-name]/
├── package.json           # App-specific dependencies and scripts
├── docusaurus.config.ts   # App-specific Docusaurus configuration
├── sidebars.ts           # App-specific sidebar navigation
├── tsconfig.json         # TypeScript configuration
├── docs/                 # Markdown documentation files
│   └── intro.md          # App-specific introduction page
├── src/                  # Custom React components and styling
│   ├── css/
│   ├── components/
│   └── pages/
└── static/               # Static assets (images, files)
    └── img/
```

## 📱 Applications Overview

| App | Port | Purpose | Target Audience |
|-----|------|---------|-----------------|
| **Landing** | 3000 | Central navigation hub | All users |
| **User Portal** | 3001 | Portal usage guide | End users requesting datasets |
| **CMS** | 3002 | Catalogue management | Data catalogue managers |
| **DAAMS** | 3003 | Data access review | Data Access Committee members |
| **System Admin** | 3004 | Deployment & setup | System administrators |
| **Developer** | 3005 | Development & customization | Software developers |

## Runnning locally and editing content

### 1. Clone and set up

```bash
# Clone the repository
git clone <repository-url>
cd gdi-userportal-docs/documentation

# Install root dependencies (includes concurrently for multi-app management)
npm install

# Install dependencies for all 6 applications
npm run install:apps
```

### 2.Start all apps
```bash
# Start all 6 applications at once (recommended for development)
npm start
```

This will launch:
- **Landing Page**: http://localhost:3000 ← **Start here**
- **User Portal Guide**: http://localhost:3001
- **CMS Guide**: http://localhost:3002
- **DAAMS Guide**: http://localhost:3003
- **System Admin Guide**: http://localhost:3004
- **Developer Guide**: http://localhost:3005

### 3. start individual apps
```bash
# Using npm scripts
npm run start:landing          # Port 3000
npm run start:user-portal      # Port 3001  
npm run start:cms              # Port 3002
npm run start:daams            # Port 3003
npm run start:system-admin     # Port 3004
npm run start:developer        # Port 3005

# Or using the helper script
node dev.js start landing
node dev.js start user-portal
node dev.js start cms
# etc...
```

### 4. Helper Commands
```bash
# List all available apps
node dev.js list

# Get help with available commands
node dev.js help

# Install dependencies for all apps
node dev.js install
```

## Development Workflow

### Adding content to a specific guide

1. **Go to the app directory**:
   ```bash
   cd apps/user-portal  # or cms, daams, system-admin, developer
   ```

2. **Add or edit markdown files** to the `docs/` folder:
   ```bash
   # Example structure
   docs/
   ├── intro.md
   ├── getting-started/
   │   ├── installation.md
   │   └── first-steps.md
   └── advanced/
       └── configuration.md
   ```

3. **Update sidebar navigation** in `sidebars.ts`:
   ```typescript
   const sidebars = {
     tutorialSidebar: [
       'intro',
       {
         type: 'category',
         label: 'Getting Started',
         items: ['getting-started/installation', 'getting-started/first-steps'],
       },
       // ... more sections
     ],
   };
   ```

4. **Test your changes**:
   ```bash
   # From the app directory
   npm start
   
   # Or from root directory
   npm run start:user-portal
   ```

### Key features per app

- **Independent Search**: Each app searches only its own content
- **Separate Navigation**: Each app has its own sidebar structure  
- **Custom Branding**: Each app has its own title and description
- **Mermaid Support**: All apps support Mermaid diagrams
- **TypeScript**: Full TypeScript support in all apps
- **Hot Reload**: Live reloading during development

## Building for production

### Build all apps
```bash
npm run build
```

### Build individual apps
```bash
npm run build:landing
npm run build:user-portal
npm run build:cms
npm run build:daams
npm run build:system-admin
npm run build:developer
```

Build outputs are generated in each app's `build/` directory.

### Serve Built Applications Locally
```bash
# Serve all built apps
npm run serve

# Serve individual built apps
npm run serve:landing        # Port 3000
npm run serve:user-portal    # Port 3001
# etc...
```

## Deployment strategy

Each application can be deployed:

1. **Independently** - Deploy each app to its own domain/subdomain
2. **Under subpaths** - Deploy all apps under a single domain with different paths
3. **Multi-environment** - Deploy different apps to different environments

Example deployment structure:
```
docs.gdi.example.com/           ← Landing page
docs.gdi.example.com/portal/    ← User portal guide  
docs.gdi.example.com/cms/       ← CMS guide
docs.gdi.example.com/daams/     ← DAAMS guide
docs.gdi.example.com/admin/     ← System admin guide
docs.gdi.example.com/dev/       ← Developer guide
```

## Contributing

1. **Choose the right app** for your content based on the target audience
2. **Follow markdown best practices** for documentation
3. **Test locally** before committing changes
4. **Update navigation** in `sidebars.ts` when adding new sections
5. **Use consistent styling** and follow existing patterns

## Troubleshooting

### Common Issues

1. **Port conflicts**: If a port is in use, Docusaurus will prompt to use an alternative
2. **Dependencies not installed**: Run `npm run install:apps` from the root directory
3. **Build failures**: Check that all markdown files have valid frontmatter
4. **Search not working**: Ensure `docusaurus-lunr-search` plugin is properly configured

### Getting Help
```bash
# Check all available commands
node dev.js help

# Verify app structure
node dev.js list
```

