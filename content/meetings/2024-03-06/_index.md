---
title: 6 March 2024
geekdocAnchor: false
weight: -8
---
<!--
SPDX-FileCopyrightText: 2024 PNED G.I.E.

SPDX-License-Identifier: CC-BY-4.0
-->

## Agenda
- How to store URI and labels in CKAN?

## Agreements
- Test multilingual extension to understand if it fits to our needs.
- If multilingual extension is not good, we will extend `GenomicDataInfrastructure/gdi-userportal-ckanext-fairdatapoint`:
  - Create a new table with URI, label, language code, and grouping_property.
  - Each row will be unique by URI, language code and field name.
  - The table content will be curated by a person directly in the database, whenever needed.
  - The FAIR Data Point Harvester will populated URI's and labels in the dataset/package extras.
  - A new endpoint will be developed to retrieve the list of URI's and their respective labels, given a language code.
  - Fix the `gdi-userportal-frontend` to use the new endpoint.
  - Remove existing endpoints used by frontend to retrieve values and counters (e.g. `/theme_list`).


### package search response payload examples
```
{
    "extras": [{
        "key": "themes_labels_en",
        "vakue": {
            "http://purl.bioontology.org/ontology/ICD10CM/U07.1": "COVID-19",
            "http://www.ebi.ac.uk/efo/EFO_0000400": "diabetes mellitus"
        }
    }, {
        "key": "access_rights_labels_en,
        "vakue": {
            "https://publications.europa.eu/resource/authority/access-right/SENSITIVE": "sensitive"
        }
    }]
    ...
}
```

or

```
{
    ...
    "extras": [{
        "key": "labels_en",
        "vakue": {
            "http://purl.bioontology.org/ontology/ICD10CM/U07.1": "COVID-19",
            "http://www.ebi.ac.uk/efo/EFO_0000400": "diabetes mellitus",
            "https://publications.europa.eu/resource/authority/access-right/SENSITIVE": "sensitive"
        }
    }]
    ...
}
```

### URI/labels endpoint

```
Request:
GET /v1/uri-labels/{language_code}

Response:
{
    ...
    "themes": [{
        "key": "http://purl.bioontology.org/ontology/ICD10CM/U07.1",
        "label": "COVID-19"
    }, {
        "key": "http://www.ebi.ac.uk/efo/EFO_0000400",
        "label": "diabetes mellitus"
    }],
    "access_rights": [{
        "key": "https://publications.europa.eu/resource/authority/access-right/SENSITIVE",
        "label": "sensitive"
    }]
    ...
}
```

## Action points
- Update docs
- Create ZenHub story
