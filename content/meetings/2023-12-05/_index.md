---
title: Notes from Dec 5th 2023
geekdocAnchor: false
---

## Agenda
* License requirements for CKAN and its extensions
* Front-end development
* Harvesting configuration
* Auditing and debugging in CKAN (jobs executions, changes on group, organizations, datasets, users...)
* Review Keycloak integration

## Agreements
* We will way until we know from Civity if the project will be public, and understand license requirements, before add ckanext-data-fair-point to GDI User Portal;
* We will review how auditing and user changes tracking works in CKAN after WP04 meeting on Dec 7th 2023;
* We will replace Keycloak extension after WP04 meeting on Dec 7th 2023;
* We will not replace Angular by React/Next.js and Portal.js. Our current architecture allows us to postpone that decision to when we have clear mid to long term goals and commitments regarding User Portal development;
* The wishlist button + overview of wishlist are out of scope for January milestone;

## Action points
* Check if it is doable on deploy CKAN on Elixir LU by Thursday - @Bruno
* If not, deploy temporarily on Azure HealthRI - @Hans
* Export Harvester and LS-AAI integration documentation to markdown files - @Hans
* Create doc repo for GDI User Portal - @Bruno
* Configure harvester - @Hans
* Share with HealthRI AGPL rules regarding state of changes - @Bruno
* Add concrete stories in zenhub to make visible our progress - @Tasneem, @Hans, @Bruno
