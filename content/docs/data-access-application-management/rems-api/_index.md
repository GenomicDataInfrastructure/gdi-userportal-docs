---
title: REMS API
---
<!--
SPDX-FileCopyrightText: 2024 PNED G.I.E.

SPDX-License-Identifier: CC-BY-4.0
-->

## Existing documentation

REMS provides OpenAPI documentation, found [here](https://rems-test.rahtiapp.fi/swagger-ui/index.html).

REMS DEMO can be found [here](https://rems-demo.rahtiapp.fi).

And REMS also provides an extensive documentation, that can be found [here](https://github.com/CSCfi/rems/blob/master/docs/using-the-api.md).

## Authentication

REMS requires OIDC to use the app, however for API integration REMS also supports API Key and User impersonation.

For the User Portal we recommend using OIDC also for API, as it reduces the coupling between the two systems. This coupling is delegated to the Identity Provider.

## Request & Response content type

REMS supports transit JSON and normal JSON. We will be using normal JSON payload. To ensure it is used, `Accept` header with `application/json` must be added to the request.