---
title: Deployment
---
<!--
SPDX-FileCopyrightText: 2024 PNED G.I.E.

SPDX-License-Identifier: CC-BY-4.0
-->
### Environments

- `*.dev.onemilliongenomes.eu` - Continuous integration and deploymnent
- `*.stagging.onemilliongenomes.eu` - New release waiting for promotion
- `*.demo.onemilliongenomes.eu` - Same release as in production
- `*.onemilliongenomes.eu` - Productions

### Public subdomains
- `discover.` - User Portal
- `id.` - Keycloak
- `api.` - Kong API Gateway
- `catalogue.` - CKAN Catalogue

## Table of Contents

* [Deployment CKAN within Azure](./azure/_index.md)
