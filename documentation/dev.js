#!/usr/bin/env node

/**
 * Development helper script for the GDI Documentation Monorepo
 * This script helps manage the development workflow for all apps
 */

const { execSync, spawn } = require('child_process');
const path = require('path');

const apps = [
  { name: 'landing', port: 3000, description: 'Central Landing Page' },
  { name: 'user-portal', port: 3001, description: 'User Portal Guide' },
  { name: 'cms', port: 3002, description: 'CMS Guide' },
  { name: 'daams', port: 3003, description: 'DAAMS Guide' },
  { name: 'system-admin', port: 3004, description: 'System Admin Guide' },
  { name: 'developer', port: 3005, description: 'Developer Guide' }
];

function installAllDependencies() {
  console.log('📦 Installing dependencies for all apps...\n');
  
  for (const app of apps) {
    const appPath = path.join(__dirname, 'apps', app.name);
    console.log(`Installing dependencies for ${app.description}...`);
    
    try {
      execSync('npm install', { 
        cwd: appPath, 
        stdio: 'inherit' 
      });
      console.log(`✅ ${app.description} dependencies installed\n`);
    } catch (error) {
      console.error(`❌ Failed to install dependencies for ${app.description}`);
    }
  }
}

function startApp(appName) {
  const app = apps.find(a => a.name === appName);
  if (!app) {
    console.error(`❌ App '${appName}' not found`);
    return;
  }
  
  const appPath = path.join(__dirname, 'apps', app.name);
  console.log(`🚀 Starting ${app.description} on port ${app.port}...`);
  
  spawn('npm', ['start'], { 
    cwd: appPath, 
    stdio: 'inherit',
    shell: true 
  });
}

function showHelp() {
  console.log(`
GDI Documentation Monorepo Helper

Usage:
  node dev.js install          Install dependencies for all apps
  node dev.js start <app>      Start a specific app
  node dev.js list             List all available apps
  node dev.js help             Show this help message

Available apps:
${apps.map(app => `  ${app.name.padEnd(15)} - ${app.description} (port ${app.port})`).join('\n')}

Examples:
  node dev.js install
  node dev.js start landing
  node dev.js start user-portal
`);
}

function listApps() {
  console.log('\n📚 Available Documentation Apps:\n');
  apps.forEach(app => {
    console.log(`${app.name.padEnd(15)} - ${app.description.padEnd(30)} (port ${app.port})`);
  });
  console.log('');
}

// Parse command line arguments
const command = process.argv[2];
const arg = process.argv[3];

switch (command) {
  case 'install':
    installAllDependencies();
    break;
  case 'start':
    if (!arg) {
      console.error('❌ Please specify an app name');
      listApps();
    } else {
      startApp(arg);
    }
    break;
  case 'list':
    listApps();
    break;
  case 'help':
  default:
    showHelp();
    break;
}