# GDI Documentation Monorepo

This repository contains a monorepo setup for the GDI (Genomic Data Infrastructure) documentation with 6 separate Docusaurus applications:

## Applications

### 1. Central Landing Page (Port 3000)
- **Location**: `apps/landing`
- **Purpose**: Central hub with links to all documentation guides
- **URL**: http://localhost:3000

### 2. User Portal Guide (Port 3001)
- **Location**: `apps/user-portal`
- **Purpose**: Documentation for GDI Portal users
- **URL**: http://localhost:3001

### 3. CMS Guide (Port 3002)
- **Location**: `apps/cms`
- **Purpose**: Documentation for Catalogue Managers
- **URL**: http://localhost:3002

### 4. DAAMS Guide (Port 3003)
- **Location**: `apps/daams`
- **Purpose**: Documentation for Data Access Committee members
- **URL**: http://localhost:3003

### 5. System Admin Guide (Port 3004)
- **Location**: `apps/system-admin`
- **Purpose**: Documentation for System Administrators
- **URL**: http://localhost:3004

### 6. Developer Guide (Port 3005)
- **Location**: `apps/developer`
- **Purpose**: Documentation for Developers
- **URL**: http://localhost:3005

## Getting Started

### Installation

1. Install root dependencies:
   ```bash
   npm install
   ```

2. Install dependencies for all apps:
   ```bash
   npm run install:apps
   ```

### Development

#### Start All Applications
```bash
npm start
```
This will start all 6 applications concurrently on their respective ports.

#### Start Individual Applications
```bash
npm run start:landing          # Port 3000
npm run start:user-portal      # Port 3001  
npm run start:cms              # Port 3002
npm run start:daams            # Port 3003
npm run start:system-admin     # Port 3004
npm run start:developer        # Port 3005
```

### Building

#### Build All Applications
```bash
npm run build
```

#### Build Individual Applications
```bash
npm run build:landing
npm run build:user-portal
npm run build:cms
npm run build:daams
npm run build:system-admin
npm run build:developer
```

### Serving Built Applications

#### Serve All Applications
```bash
npm run serve
```

#### Serve Individual Applications
```bash
npm run serve:landing
npm run serve:user-portal
npm run serve:cms
npm run serve:daams
npm run serve:system-admin
npm run serve:developer
```

## Features

- **Scoped Search**: Each documentation site has its own search functionality using docusaurus-lunr-search
- **Independent Navigation**: Each site maintains its own sidebar and navigation
- **Consistent Branding**: All sites share the same visual identity and footer
- **Easy Navigation**: Central landing page provides easy access to all guides
- **Monorepo Benefits**: Shared dependencies and unified build processes

## Architecture

```
documentation/
├── apps/
│   ├── landing/           # Central landing page
│   ├── user-portal/       # User portal documentation
│   ├── cms/               # CMS documentation
│   ├── daams/             # DAAMS documentation
│   ├── system-admin/      # System admin documentation
│   └── developer/         # Developer documentation
├── package.json           # Root package.json with workspace configuration
└── README.md              # This file
```

Each app is a complete Docusaurus site with its own:
- `package.json`
- `docusaurus.config.ts`
- `sidebars.ts`
- `docs/` folder
- `src/` folder with custom components
- `static/` folder with assets

## Contributing

When adding new documentation:

1. Navigate to the appropriate app directory
2. Add your markdown files to the `docs/` folder
3. Update the sidebar configuration in `sidebars.ts` if needed
4. Test locally by running the specific app or all apps

## Deployment

Each application can be deployed independently or as part of a larger deployment strategy. The build outputs are generated in each app's `build/` directory.