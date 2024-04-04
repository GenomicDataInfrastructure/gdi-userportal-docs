---
title: 4 April 2024
geekdocAnchor: false
weight: -10
---
<!--
SPDX-FileCopyrightText: 2024 PNED G.I.E.

SPDX-License-Identifier: CC-BY-4.0
-->

## Agenda
- Technical workshop with Beacon team

## Agreements
- We must be logged in order to query on Beacon Network.
- For development, we are going to use `https://beacon-network-backend-demo.ega-archive.org/beacon-network/v2.0.0`.
- We will limit filtering terms by scope `individual`.
- We will perform only registered level queries - `requestedGranularity = count`.
- we will include only result sets that have records hit by the query - `includeResultsetResponses = HIT`.
- We will group filtering terms by ontology and present ontologies as facets/filters in the User Portal.
- When implement support alphanumeric terms, we will hardcode a list of possible values, to simplify integration between User Portal and Beacon Network.
- We will present in User Portal a list of datasets, with record counts per dataset.
- We will filter resultset items by type - `setType = dataset`.
- We will not pass to beacon network a GA4GH passport.

## Assumptions
- OIDC between Beacon Network and User Portal should work via common IdP access token (LS-AAI).
- REMS issues passports and visas to LS-AAI.
- Beacon Network will retrieve a list of datasets where the ids match with ids present in the User Portal's catalogue.