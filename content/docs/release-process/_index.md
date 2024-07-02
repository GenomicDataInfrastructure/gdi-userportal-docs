---
title: Versioning and Releases
weight: 2
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

## Publishing a new version

> All repositories must follow the same process.

Once all necessary changes are merged to `main`, please follow this process:
- Ensure `CHANGELOG.md` is up to date.
- Push a new tag following the versioning and releases described in this page. The tag name follows `v{major}.{minor}.{patch}`. Example:
```bash
$ git tag -a v1.2.0 -m "GDI MS08"
$ git push origin v1.2.0
```
- Create a new release branch, to simplify bugfixing and security patches. The branch name follows `releases/v{major}.{minor}`. Example:
```bash
$ git checkout -b releases/v1.2
```
- Stage the `CHANGELOG.md`
```bash
$ git add .
```
Commit the `CHANGELOG.md`:
```bash
$ git commit -m "Prepare for release v1.2"
```
Push the branch tot remote repository
```bash
$ git push origin releases/v1.2
```

- Go to GitHub and create a new release, example: 
- Click on "Draft a new release" CHANGELOG
- Select the just created release branch and tag.
- Enter a title for the release that includes the version and possibly a short description.
- Auto-generate release notes.
- Remove unnecessary release notes: ensure that only relevant information for the users is included and matches CHANGELOG.md.
- Double-check all entered information.
- Click on "Publish release" to officially make the release.
- Ensure docker images were built and published correctly.

## Release frequency

We work toward a regular schedule of releases, but in general, expect the following release cycle:

- A major release when big features are introduced.
- A minor release on every GDI milestone.
- A patch release and pre-release on every change / bugfix introduced into a minor release.

## Releases

| Version | Milestone | Status | Released at |
|-|-|-|-|
| ^v1.3.0 | MS08 | IN DEVELOPEMENT | Planned to October 2024 |
| ^v1.2.0 | MS07 | RELEASED | June 2024 |
| ^v1.1.0 | N/A | We aligned all components versions to the same {major}.{minor}, what led us to skipt 1.1 | N/A |
| ^v1.0.0 | MS11 | RELEASED | January 2024 |



