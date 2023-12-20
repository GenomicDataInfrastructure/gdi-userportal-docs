# Testing CKAN harvesting of FAIR data points?

Tutorial made on 20/12/2023

We assume that CKAN is properly set up (as documented in this wiki) and running.

After signing in to the CKAN portal, go to CKAN harvest page (e.g. http://localhost:5500/harvest). Click on “Add Harvest Source”.

Fill in the following fields:

- URL of the fair data points. Example: https://fair.healthinformationportal.eu/
- Title
- Source type: "FAIR data point harvester"
- Configuration: { "profile": "fairdatapoint_dcat_ap" }

Click on "Save".

Then, enter the CKAN container:

`docker compose exec -it ckan-dev bash`

Inside the container, run the following command:

`ckan --config=/srv/app/ckan.ini harvester run-test <id of harvester>`.

The harvester id is the last part of the URL of the harvest source.

You should now see datasets popping up in CKAN!
