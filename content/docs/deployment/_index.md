---
title: Deployment
weight: 2
---
<!--
SPDX-FileCopyrightText: 2024 PNED G.I.E.

SPDX-License-Identifier: CC-BY-4.0
-->


## Environment Variables

### GDI User Portal - Frontend

It is the user interface and contains all frontend components only. It is published in `ghcr.io/genomicdatainfrastructure/gdi-userportal-frontend`.

It requires the following environment variables:
- `NEXT_PUBLIC_DDS_URL`: URL for the Dataset Discovery Service, described below. For Elixir LU the value is: `https://api.portal.dev.gdi.lu/discovery`.
- `NEXT_PUBLIC_DAAM_URL`: URL for the Access Management Service, described below. For Elixir LU the value is: `https://api.portal.dev.gdi.lu/daam`.
- `NEXTAUTH_URL`: URL which IAM must redirect back, after authorization is granted. It must be the same as the Portal URL. For Elixir LU the value is: `https://portal.dev.gdi.lu`.
- `NEXTAUTH_SECRET`: It's a secret used for encryption of any information persisted in the user session. This value must be generated and stored safely.
- `KEYCLOAK_CLIENT_ID`: Oauth2 client id. This value must be generated and stored safely.
- `KEYCLOAK_CLIENT_SECRET`: Oauth2 client secret. This value must be generated and stored safely.
- `KEYCLOAK_ISSUER_URL`: Oauth2 authentication server URL as per `${KEYCLOAK_HOST}/realms/{GDI_REALM}`.
- `END_SESSION_URL` It's the url used for Oauth2 authorization flow to invalidate the user session. For Elixir LU the value is: `https://id.portal.dev.gdi.lu/realms/gdi/protocol/openid-connect/logout`.
- `REFRESH_TOKEN_URL`: It's the url used for Oauth2 authorization flow to refresh the access token. For Elixir LU the value is: `https://id.portal.dev.gdi.lu/realms/gdi/protocol/openid-connect/token`.
- `CSP_HEADER`: It can be used to enforce CSP restrictions, to enforce security controls.

### GDI User Portal - CKAN

It is the DCAT-AP metadata repository. It is responsible for defining metadata schema, harvesting and URI to label mapping. As this CKAN has an specific schema for GDI, we publish our custom docker image in `ghcr.io/genomicdatainfrastructure/gdi-userportal-ckan-docker`.

It requires the following environment variables:
- `CKAN___BEAKER__SESSION__SECRET`: CKAN session secret to encrypt session data.
- `CKAN___API_TOKEN__JWT__ENCODE__SECRET`: CKAN JWT econding secret.
- `CKAN___API_TOKEN__JWT__DECODE__SECRET`: CKAN JWT decoding secret.
- `CKAN_SYSADMIN_NAME`: The sysadmin username.
- `CKAN_SYSADMIN_PASSWORD`: The sysadmin password. This password is ignored if Keycloak authentication is in place.
- `CKAN_SYSADMIN_EMAIL`: The sysadmin email.
- `CKAN__AUTH__USER_CREATE_ORGANIZATIONS`: Flag that adds to new users `Create Organizations` permission. In GDI this is `false`.
- `CKAN_SQLALCHEMY_URL`: Databse URL in the following as per `postgresql://${CKAN_DB_USER}:${CKAN_DB_PASSWORD}@${POSTGRES_HOST}/${CKAN_DB}`.
- `CKANEXT__OIDC_PKCE__BASE_URL`: Authentication base URL as per `${KEYCLOAK_HOST}/realms/{GDI_REALM}/protocol/openid-connect`:
- `CKANEXT__OIDC_PKCE__CLIENT_ID`: Oauth2 client id. This value must be generated and stored safely.
- `CKANEXT__OIDC_PKCE__CLIENT_SECRET`: Oauth2 client secret. This value must be generated and stored safely.
- `CKANEXT__OIDC_PKCE__AUTH_PATH`: Oauth2 auth endpoint path. In Keycloak it is `/auth`.
- `CKANEXT__OIDC_PKCE__TOKEN_PATH`: Oauth2 token endpoint path. In Keycloak it is `/token`:
- `CKANEXT__OIDC_PKCE__USERINFO_PATH`: Oauth2 userinfo endpoint path. In Keycloak it is `/userinfo`:
- `CKANEXT__OIDC_PKCE__ERROR_REDIRECT`: CKAN URL to redirect in case of error. In User Portal it is `/user/register`.
- `CKANEXT__OIDC_PKCE__SCOPE`: Oauth2 scopes. In User Portal it is `email openid profile`.
- `CKANEXT__OIDC_PKCE__USE_SAME_ID`: Flag that tells ckanext-oidc-pkce plugin to use IAM id as internal CKAN id. In User Portal it is `true`.
- `CKANEXT__OIDC_PKCE__MUNGE_PASSWORD`: Flag that tells ckanext-oidc-pkce plugin if the passport must be mungled in CKAN's database. In User Portal it is `true`.
- `CKAN__ROUTE_AFTER_LOGIN`: Route after a sucessfull login. In User Portal it is `home`.
- `CKAN__HARVEST__MQ__TYPE`: Type of Message Queue used by ckanext-harvest. In User Portal it is `redis`.
- `CKAN__HARVEST__MQ__HOSTNAME`: hostname of Message Queue Broker used by ckanext-harvest. In User Portal it is `redis`.
- `CKAN__HARVEST__MQ__PORT`: port of Message Queue Broker used by ckanext-harvest. In User Portal it is `6379`.
- `CKAN__HARVEST__MQ__REDIS_DB`: database of Message Queue Broker used by ckanext-harvest. In User Portal it is `1`.
- `CKAN_SOLR_URL`: SOLR URL used by CKAN. In User Portal it is `http://solr:8983/solr/ckan`.
- `CKAN_REDIS_URL`: Redis URL used by CKAN. In User Portal it is `redis://redis:6379/1`.


### GDI User Portal - Access Management Service

It is the service that integrates the User Portal and REMS. We publish the docker image in `ghcr.io/genomicdatainfrastructure/gdi-userportal-access-management-service`.

It requires the following environment variables:
- `QUARKUS_OIDC_AUTH_SERVER_URL`: Oauth2 authentication server URL as per `${KEYCLOAK_HOST}/realms/{GDI_REALM}`.
- `QUARKUS_OIDC_CLIENT_ID`: Oauth2 client id. This value must be generated and stored safely.
- `QUARKUS_OIDC_CREDENTIALS_SECRET`: Oauth2 client secret. This value must be generated and stored safely.
- `QUARKUS_HTTP_CORS`: Flag that enables CORS.
- `QUARKUS_HTTP_CORS_ORIGINS`: List of trusted origin URLs, separed by comma.
- `QUARKUS_HTTP_CORS_HEADERS`: List of accepted headers, separed by comma. In User Portal it is `accept, authorization, content-type, x-requested-with`.
- `QUARKUS_HTTP_CORS_METHODS`: List of accepted methods, separed by comma. In User Portal it is `POST, OPTIONS, GET`.
- `QUARKUS_REST_CLIENT_REMS_YAML_API_KEY`: REMS apikey.
- `QUARKUS_REST_CLIENT_REMS_YAML_BOT_USER`: REMS bot user id.
- `QUARKUS_REST_CLIENT_REMS_YAML_URL`: REMS base URL.
- `QUARKUS_LOG_LEVEL`: Log Level. In User Portal it is `DEBUG`.


### GDI User Portal - Dataset Discovery Service

It is the service that integrates the User Portal and REMS. We publish the docker image in `ghcr.io/genomicdatainfrastructure/gdi-userportal-access-management-service`.

It requires the following environment variables:
- `QUARKUS_OIDC_AUTH_SERVER_URL`: Oauth2 authentication server URL as per `${KEYCLOAK_HOST}/realms/{GDI_REALM}`.
- `QUARKUS_OIDC_CLIENT_ID`: Oauth2 client id. This value must be generated and stored safely.
- `QUARKUS_OIDC_CREDENTIALS_SECRET`: Oauth2 client secret. This value must be generated and stored safely.
- `QUARKUS_HTTP_CORS`: Flag that enables CORS.
- `QUARKUS_HTTP_CORS_ORIGINS`: List of trusted origin URLs, separed by comma.
- `QUARKUS_HTTP_CORS_HEADERS`: List of accepted headers, separed by comma. In User Portal it is `accept, authorization, content-type, x-requested-with`.
- `QUARKUS_HTTP_CORS_METHODS`: List of accepted methods, separed by comma. In User Portal it is `POST, OPTIONS, GET`.
- `QUARKUS_REST_CLIENT_CKAN_YAML_URL`: CKAN URL.
- `QUARKUS_REST_CLIENT_BEACON_YAML_URL`: Beacon URL.
- `QUARKUS_REST_CLIENT_KEYCLOAK_YAML_URL`: Keycloak URL.
- `QUARKUS_REST_CLIENT_KEYCLOAK_YAML_BEACON_IDP_ALIAS`: Beacon expected IDP Alias. In User Portal it is `LSAAI`.
- `QUARKUS_LOG_LEVEL`: Log Level. In User Portal it is `DEBUG`.


### GDI User Portal - REMS Synchronizer

It is a CRON job runs every 30 minutes. It creates in REMS if it does not exist default organization, workflow and form, and creates if it does not exist one catalogue item per datasets retrieve from CKAN.

It requires the following environment variables:
- `REMS_URL`: REMS URL.
- `CKAN_URL`: CKAN URL.
- `REMS_API_KEY`: REMS apikey.
- `REMS_BOT_USER`: REMS bot user id.

## Existing deployments

{{< toc-tree >}} 


