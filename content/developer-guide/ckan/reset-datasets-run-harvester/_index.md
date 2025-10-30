---
title: CKAN: Reset datasets & run harvester
---

<!--
SPDX-FileCopyrightText: 2024 Stichting Health-RI

SPDX-License-Identifier: CC-BY-4.0
-->

Goal: clear all non-harvest CKAN content in the target environment, run a local CKAN with the deployed version against that environment's database and Solr, and execute `harvester run-test` for every harvest source.

**Warning**: this is a destructive operation. The SQL statements below delete every non-harvest dataset, resource, tag, and package from the target CKAN database. Take a backup before proceeding. Pointing a local CKAN instance to a shared environment database or Solr instance can also impact the environment's availability. Coordinate with the team and product owner before continuing.

**Scope**: the commands target the CKAN PostgreSQL database (`ckandb`).

## Prerequisites

- Access to the environment PostgreSQL CKAN database (`ckandb`) via a database client.
- Access to the environment Solr endpoint (URL and credentials).
- Local CKAN checkout with the exact tag or commit deployed in the environment.

## 1. Clean non-harvest data in the target database

Connect your database client to the environment CKAN PostgreSQL database and run:

```sql
TRUNCATE TABLE harvest_object CASCADE;

DELETE FROM package_tag
WHERE package_id IN (
    SELECT id
    FROM package
    WHERE type != 'harvest'
);

DELETE FROM package_extra
WHERE package_id IN (
    SELECT id
    FROM package
    WHERE type != 'harvest'
);

DELETE FROM resource
WHERE package_id IN (
    SELECT id
    FROM package
    WHERE type != 'harvest'
);

DELETE FROM package
WHERE type != 'harvest';
```

Optional verification of remaining harvest sources:

```sql
SELECT name
FROM package
WHERE type = 'harvest' 
ORDER BY name;
```

## 2. Run CKAN locally with the deployed version

1. Identify the deployed version (tag or commit) running in the target environment.
2. Check out the same version locally:

   ```commandline
   git fetch --all --tags
   git checkout <DEPLOYED_TAG_OR_COMMIT>
   git status  # should show a clean working tree
   ```

   Ensure there are no outstanding local commits or untracked changes.

3. Point your local CKAN instance at the environment database and Solr by updating the environment variables used by your `ckan.ini`:

   ```commandline
   CKAN_SQLALCHEMY_URL=postgresql://<user>:<pass>@<host>:<port>/<dbname>
   CKAN_SOLR_URL=http://<solr-host>:<solr-port>/solr/<core>
   CKAN_SITE_URL=https://<ckan-env>.healthdata.nl
   ```

4. Restart the local stack:

   ```commandline
   docker compose down
   docker compose up -d --build
   # or: docker-compose ... depending on your CLI
   ```

## 3. Run harvester run-test for every source

1. Obtain the IDs (names) of all harvest sources:

   ```sql
   SELECT name
   FROM package
   WHERE type = 'harvest' AND state = 'active'
   ORDER BY name;
   ```

2. Execute `harvester run-test` for each source (replace the list with the names from your environment):

   ```commandline
   for id in ist fdp-test ega csfi lnds-fdp university-of-oslo radboud maxima-medisch-centrum-test nbis lumc dataseries-blob health-dcat missing-fields-test aumc-fdp
   do
     ckan --config=ckan.ini harvester run-test "$id"
     # Alternative syntax: ckan -c ckan.ini harvester run-test "$id"
   done
   ```

   Ensure the `ckan` CLI resolves inside your container or virtual environment. For Dockerised setups:

   ```commandline
   docker compose exec ckan ckan -c /srv/app/ckan.ini harvester run-test <id>
   ```

## 4. Clear and rebuild the Solr index

Run the following to synchronise Solr with CKAN:

```commandline
ckan -c ckan.ini search-index clear
ckan -c ckan.ini search-index rebuild
```
