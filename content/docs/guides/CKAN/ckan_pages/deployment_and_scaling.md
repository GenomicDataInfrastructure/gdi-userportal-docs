# CKAN, deployment and scaling

* * *

Regular CKAN consists of four different server components:

1. CKAN frontend
2. Postgresql database
3. Solr
4. Redis

These servers can be separated. In practice, usually CKAN frontend is one one public-facing sever, and the rest on one backend server. Solr is for search and could be separated out even further if its hit by heavy traffic.

CKAN themselves recommend two servers (one front-end one database) for this, see [https://github.com/ckan/ckan/wiki/CKAN-hosting-guidelines](https://github.com/ckan/ckan/wiki/CKAN-hosting-guidelines) Requirements seem to be relatively small even for national level servers. The frontend can scale horizontally (deploy multiple nodes), the database probably scales best if more RAM is used for the server.

Using nginx for https and caching, traffic shouldn’t be too bad.

See also [https://github.com/ckan/ckan/wiki/Hardware-Requirements](https://github.com/ckan/ckan/wiki/Hardware-Requirements)