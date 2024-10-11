---
title: Releases
weight: 5
---

<!--
SPDX-FileCopyrightText: 2024 PNED G.I.E.

SPDX-License-Identifier: CC-BY-4.0
-->

This document outlines our practices for delivering a cutting-edge application development platform that maintains stability. We aim to introduce future changes predictably, ensuring that everyone who relies on User Portal is informed about the timing and nature of new features, and prepared for the removal of outdated ones.

## Versioning

Version numbers indicate the level of changes that are introduced by the release. This use of semantic [versioning](https://semver.org/) helps you understand the potential impact of updating to a new version.

A version number has three parts: major.minor.patch. For example, version 1.2.0 indicates major version 1, minor version 2, and patch level 0.

The version number is incremented based on the level of change included in the release.

| LEVEL OF CHANGE | DETAILS |
|-|-|
|Major release | Contains significant new features, some but minimal developer assistance is expected during the update. When updating to a new major release, you might need to run update scripts, refactor code, run additional tests, and learn new APIs. |
| Minor release | Contains new smaller features. Minor releases are fully backward-compatible; no developer assistance is expected during update, but you can optionally modify your applications and libraries to begin using new APIs, features, and capabilities that were added in the release. We update peer dependencies in minor versions by expanding the supported versions, but we do not require projects to update these dependencies. |
| Patch release| Low risk, bug fix release. No developer assistance is expected during update.|

## Release frequency

We work toward a regular schedule of releases, but in general, expect the following release cycle:

- A major release when big features are introduced.
- A minor release on every GDI milestone.
- A patch release and pre-release on every change / bugfix introduced into a minor release.

## Releases

| Version | Status | Released at |
|-|-|-|-|
| ^v1.3 | IN DEVELOPEMENT | Planned to October 2024 |
| ^v1.2 | RELEASED | June 2024 |
| ^v1.1 | We aligned all components versions to the same {major}.{minor}, what led us to skip this version | N/A |
| ^v1.0 | RELEASED | January 2024 |

## Changelogs
- [frontend](https://github.com/GenomicDataInfrastructure/gdi-userportal-frontend/blob/main/CHANGELOG.md)
- [access-management-service](https://github.com/GenomicDataInfrastructure/gdi-userportal-access-management-service/blob/main/CHANGELOG.md)
- [dataset-discovery-service](https://github.com/GenomicDataInfrastructure/gdi-userportal-dataset-discovery-service/blob/main/CHANGELOG.md)
- [ckan-docker](https://github.com/GenomicDataInfrastructure/gdi-userportal-ckan-docker/blob/main/CHANGELOG.md)
- [ckanext-gdi-userportal](https://github.com/GenomicDataInfrastructure/gdi-userportal-ckanext-gdi-userportal/blob/main/CHANGELOG.md)
