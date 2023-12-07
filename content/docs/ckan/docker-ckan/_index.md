---
title: GDI User Portal CKAN Docker
---

## Overview
The Data Catalogue for the User Portal is on [GenomicDataInfrastructure/gdi-userportal-ckan-docker](https://github.com/GenomicDataInfrastructure/gdi-userportal-ckan-docker).

This project has two purposes:
1. Prepare a docker image for CKAN, with all extensions and configurations needed to deploy the catalogue for the User Portal.
2. Setup a development environment for testing, fixing and enhancing our customised CKAN and its extensions.

The CKAN images used are from the official CKAN [ckan-docker](https://github.com/ckan/ckan-docker-base) repo.

The non-CKAN images are as follows:

* PostgreSQL: Official PostgreSQL image. Database files are stored in a named volume.
* Solr: CKAN's [pre-configured Solr image](https://github.com/ckan/ckan-solr). Index data is stored in a named volume.
* Redis: standard Redis image
* NGINX: latest stable nginx image that includes SSL and Non-SSL endpoints
* Keycloak: Latest official Keycloak image. A test CKAN realm is injected during `docker compose up`
* National Catalogue Mock: Python script to expose a synthetic RDF file, to test the Harvester.

CKAN and all the components are configured using environment variables that you can set in the `.env` file.

## Requirements to run

* Docker with compose. `colima` is curently beeing used.
* Enough computer resources, example: `colima start --arch aarch64 --vm-type=vz --mount-type=virtiofs --vz-rosetta --cpu 4 --memory 10`

## Useful commands

### Build and start dev environment
```bash
docker compose -f docker-compose.dev.yml up -d --build
```

### Remove images and volumes
```bash
docker compose -f docker-compose.dev.yml down -v
```

### Logs
```bash
docker compose -f docker-compose.dev.yml logs -f
```

## Installing new extensions

The current agreement is:
* Fork all the branches from the extension's repo into [GitHub GDI](https://github.com/GenomicDataInfrastructure).
* Create and push a new branch following this standard: `user-portal-{original branch name/tag name}`
  Reminder, prefer always to use a release/tag branch, over main/master branches, to avoid not tested changes.
* Add a git submodule: `git submodule add {git_ssh_url} src/ckanext-{extension}`.
* Add branch reference into `.gitmodules`, if not added.
* Configure the extension via environment variables or via a setup script. Setup scripts must be added into `ckan/docker-entrypoint.d/`.
* Ensure the extension is working as expected.
* Update `ckan/Dockerfile` to install the new extension via pip.

All Docker Compose commands in this README will use the V2 version of Compose ie: `docker compose`. The older version (V1) 
used the `docker-compose` command. Please see [Docker Compose](https://docs.docker.com/compose/compose-v2/) for
more information.

## Copying and License
-------------------

This material is copyright (c) 2006-2023 Open Knowledge Foundation and contributors.

It is open and licensed under the GNU Affero General Public License (AGPL) v3.0
whose full text may be found at:

http://www.fsf.org/licensing/licenses/agpl-3.0.html
