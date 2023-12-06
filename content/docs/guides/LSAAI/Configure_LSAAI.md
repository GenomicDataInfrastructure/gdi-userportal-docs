# Configure KeyCloak with Azure and LSAAI

* * *

## Keycloak

For Keycloak, A Linux app service plan within Azure was utilised for Keycloak set up. One of the primary advantages is that HTTPS is readily configured out of the box, eliminating the need for additional work with certbot. Moreover, when using an app service plan, there's no need to be concerned about Linux updates.

In addition, I followed the tutorial available at the following link to successfully set up Keycloak: [https://www.youtube.com/watch?v=neHFkd8c-gc](https://www.youtube.com/watch?v=neHFkd8c-gc)

## Configuring Identity Providers (IdPs)

When configuring identity providers (IdPs), the following information becomes crucial for OpenID setup:

* ClientSecret
* ClientId
* Token URL
* Authorization URL
* Redirect URI

Both the 'Token URL' and 'Authorization URL' are derived from the IdP. When registering a service, you acquire the clientId and secret. The 'Redirect URI', which remains constant, is provided by Keycloak:  
[https://{app_name_azure}.azurewebsites.net/auth/realms/master/broker/azuread/endpoint](https://{app_name_azure}.azurewebsites.net/auth/realms/master/broker/azuread/endpoint)

Additionally, the corresponding configuration entails:

* Scopes: "openid", "profile", "email"
* Method: POST the Clientsecret
* Sync method: import

#### Azure AD

For Azure integration, I followed the tutorial at [https://www.youtube.com/watch?v=LYF-NLHD2uQ.](https://www.youtube.com/watch?v=LYF-NLHD2uQ.) This tutorial comprehensively explains both the service registration and the Azure AD setup within Keycloak. Management of the app registration is done within our Ad: [portal.zure.com](http://portal.zure.com)


### LSAAI

To register Keycloak as service I used [https://elixir-europe.org/platforms/compute/aai/service-providers.](https://elixir-europe.org/platforms/compute/aai/service-providers.) .  
Initially, obtaining an account is the first step. 1. Make sure your organisation is recognised as IdP and register if not. 2. Submit a registration for you application as a service. Please note that approval for this step may entail a waiting period.  
  
Management of the app registration is done within: [https://services.aai.lifescience-ri.eu](https://services.aai.lifescience-ri.eu) .

Discovery endpoint: [**https://login.elixir-czech.org/oidc/.well-known/openid-configuration**](https://login.elixir-czech.org/oidc/.well-known/openid-configuration)

The LSAAI configuration looks like:  

![LSAAI Configuration](../../../../assets/images/LSAAI.png) Note: Sync mode must be "import" instead of "force"

The first time you log in you will get a question if you want to be a member of the test environment. Agree and proceed.



