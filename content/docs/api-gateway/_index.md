---
title: API Gateway
---

## Purpose

The purpose of this page is to document our findings on two major API Gateway providers, Kong and Gravitee.

## Kong

### Deployment

Kong provides a myriad of different ways to be deployed, please check this link. For exercising, we used docker compose.

### Usage

Kong provides tons of different products, and each has different access tiers, for this document we are considering only the API Gateway, please check this link.

Basically there are two modes to run it, database and db-less. The database mode, as the name implies, requires a database, which enables API Gateway management on the fly, with a UI (Kong Manager) or via API.

The bd-less mode allows us to declare a yaml configuration within the deployment, simplifying infra requirements. That mode seems to be very convenient for starters, but it has constraints and plugin compatibility issues, please check this link for more details.

For this test, we will use the db-less mode, to exercise basic resilience features, routing and response transformation.

### Extensibility

Kong provides several plugins to extend its capabilities. If extra logic is required and it is not covered by any of the existing extensions, it is fairly simple to implement a new one. Kong provides SDKs to implement plugins in Lua, Python, Go, Java Script, and WebAssembly filters with Go and Rust.

We tested Python and Lua. Between the two, Lua SDK was simplest to use, as Kong provides a development tool called Pongo, and a good tutorial to guide through the basic features. Python, on the other hand, requires extra configurations and the tutorial provided by Kong was not accurate.

In the future we should consider testing Go or WebAssembly with Go and Rust, as it should perform considerably better than the script languages, although there are known limitations with WebAssembly, please check this link.

### Documentation

The documentation is quite complete and provides different setups a lot of example.

### Resources

Kong runs on top of NGINX, so it should be lightweight and fast, but extra evaluation should be executed on that matter.

Should we write stress tests?

### Pros

- Out of the box traceability and resiliency techniques
- DB-Less mode
- Huge portfolio of build-in plugins
- Easy to setup a develop environment

### Cons

- Strange lock when transforming a response. It turned out to be a tiny hidden details, that took few hours and a lot of reading of documentation, we have to clear “Content-Length” if we intend to replace the response payload to another value. In my head it should be dynamic according to the body I set.
- Although Kong provides a full dev setup, with unit tests, integration tests, and most of the required dependencies, I was not able to debug (with breakpoints).
- Again due to hidden details, while I was trying to write an integration test, it took some time to understand the behaviour of the service mock. In the docs it’s mentioned the mock service echoes the request back as a response payload. But actually the response payload was different.

## Gravitee

### Deployment

Similarly, Gravitee offers plenty of deployment possibilites. Again, we used docker compose for our experience (image provided by Gravitee).

### Usage

Along with the API Gateway, Gravitee provides several other features: load balancer, policies (for traffic and communication), monitoring, audit...
Yet, Kong seems to provide a larger set of features.

Configuration can be done by creating a gravitee.yaml file. It offers a large scope for customizing Gravitee: CORS, security, databases, notifications...

By default, Gravitee requires the following services: mongodb, elasticsearch, gateway, management-api, management ui, portal ui.
The latter can be customized: we can get rid of some of them or replace them by other options.

Running Gravitee without any database is not possible, which adds an extra service to manage.

An important drawback of Gravitee is the following: the configuration of the endpoints (external APIs) seems to be only possible through the UI Portal. It could be unconvenient, especially on production environment where we would have preferred a config file instead of a UI.

Overall, the configuration could be quite tricky.

### Extensibility

Gravitee has a marketplace of plugins available to everyone. It also provides a Java SDK to write our own plugins.

### Documentation

From our experience, finding answers or troubleshooting in the documentation could be cumbersome.

Besides, the community seems to be relatively small as compared to Kong's one.

### Resources

The tests performed do not allow us to conclude about performances.

However, people tend to agree that Gravitee uses many RAM but provides good performances. Scaling horizontally and especially vertically is very effective with Gravitee.

### Pros

- Multiple deployment solutions (especially with docker compose)
- Large set of features and plugins

### Cons

- Requires an important amount of RAM
- Requires a database
- Customization can be tricky
- Bound to the Portal to configure the endpoints and routing

## Summary

We recommend Kong, as it is lightweight and does not require several different components to start using.