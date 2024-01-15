---
title: GDI User Portal Auditing
---

A full history of dataset changes is now displayed in the Activity Stream to admins, and optionally to the public. By default, this feature is enabled for new installations but is disabled for sites which upgrade, to prevent the exposure of potentially sensitive history. It is recommended for open data CKANs that are upgrading to make this history public. This can be achieved by setting the following in the `ckan.ini` file:

```ini
ckan.auth.public_activity_stream_detail = true
