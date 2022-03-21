---
sidebar_position: 3
---

# Configuration

This page goes over the `settings.yml` configuration and setting up the Nginx webserver for Fyreactyl.

## Configuring your Settings

Because the `settings.yml` file is quit big , this page will break down and explain each individual section.

```yaml
website:
  port: 8000
  secret: "extremely secret very secret MAXIMUM secret LMAO."
  secure: false # This option requires https.
  url: "http://localhost:8000"
```

The start of the settings file; The `port` is where Fyreactyl will be running. Your Discord credentials can be found [at the developer portal](https://discord.com/developers/applications) with the application you are using for Fyreactyl. Make sure ypu change the localhost to your domain and keep http.

```yaml
discord:
  id: ""
  secret: ""
  signup_callback: "http://localhost:8000/accounts/discord/signup/callback"
  login_callback: "http://localhost:8000/accounts/discord/login/callback"
  link_callback: "http://localhost:8000/accounts/discord/link/callback"
  prompt: false
```

your Discord credentials can be found [at the developer portal](https://discord.com/developers/applications) with the application you are using for Dashactyl. When setting up the `callbackpath`, make sure it is also whitelisted in the portal: **Your Application > Oauth2 > Redirects**. The `token` is the token of your bot application for Dashactyl. This must be kept secret **at all times** as it can be easily abused. The `guild` is your server ID if applicable.
