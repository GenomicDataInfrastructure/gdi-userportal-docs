---
title: Testing Harvesting of FAIR Data Points
---

First, make sure that the `fairdatapointharvester` extension has been added to the CKAN plugins.

After signing in to the CKAN portal, go to CKAN harvest page (e.g. http://localhost:5500/harvest). Click on “Add Harvest Source”.

Fill in the following fields:

- URL of the fair data points. Example: https://fair.healthinformationportal.eu/
- Title
- Source type: "FAIR data point harvester"
- Configuration: `{ "profile": "fairdatapoint_dcat_ap" }`

Click on "Save".

Then, enter the CKAN container:

`docker compose exec -it ckan-dev bash`

Inside the container, run the following command:

`ckan --config=/srv/app/ckan.ini harvester run-test <id of harvester>`.

The harvester id is the last part of the URL of the harvest source.

You should now see datasets popping up in CKAN!
