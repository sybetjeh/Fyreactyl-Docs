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

The start of the settings file; The `port` is where Fyreactyl will be running. Your Discord credentials can be found [at the developer portal](https://discord.com/developers/applications) with the application you are using for Fyreactyl. Make sure ypu change the `localhost:8000` to your domain and keep http.

### Discord Auth

```yaml
discord:
  id: ""
  secret: ""
  signup_callback: "http://localhost:8000/accounts/discord/signup/callback"
  login_callback: "http://localhost:8000/accounts/discord/login/callback"
  link_callback: "http://localhost:8000/accounts/discord/link/callback"
  prompt: false

  token: ""
  guild: "000000000000000000" # Add your server ID you want to force users to join on login here.
```

your Discord credentials can be found at the developer [portal](https://discord.com/developers/applications) with the application you are using for Fyreactyl. When setting up the `callbackpath`, make sure it is also whitelisted in the portal: **Your Application > Oauth2 > Redirects**. The `token` is the token of your bot application for Fyreactyl. This must be kept secret **at all times** as it can be easily abused. The `guild` is your server ID if applicable.

Make sure you change `http://localhost:8000` it to `https://youDomain.tld`. Change `promt: false` to `promt: false` if you will be using discord auth as well as email and password.

### Pterodactyl config

```yaml
pterodactyl:
  domain: "" # The panel domain
  key: "" # Make sure to higher/remove rate limits for application API keys, so the dashboard doesn't get rate limited.
  generate_password_on_sign_up: true
```

In the `domain` part add you panel domain with https e.g. `https://panel.my.domain`.
Go ahead and go the the pteropanel settings and go to api and create an api key with **read & write** and paste it in to `key`

### Database

```bash
mysql -u root -p

# After you've got that setup, let's go into the next step. Remember to change 'YourPasswordHere' with a secure password.
CREATE USER 'dashboard'@'127.0.0.1' IDENTIFIED BY 'YourPasswordHere';
CREATE DATABASE dashactyl;
GRANT ALL PRIVILEGES ON dashactyl.* TO 'dashboard'@'127.0.0.1' WITH GRANT OPTION;
quit;
```

Now

```yaml
database:
  host: "Enter your database IP here."
  port: "Enter your database port here."
  user: "Enter your database user here."
  password: "Enter your database password here."
  database: "dashactyl"
```

Go ahead and fill in the detail. normally the **port** is 3306 if you make it on your vps. Make sure you check what port your provider tells you to use.

### API EndPoints

```yaml
api: # The client area might break if there are no API codes, so I highly recommend adding a single secure API code.
  apicodepassword: # This would be the "Bearer apicodepassword".
    user info: true
    blacklist user: true
    unblacklist user: true
    set coins: true
    set package: true
    set resources: true
    create coupon: true
    revoke coupon: true
    change name: true
```
This section is for managing the Freactyl API endpoints. Each option toggles whether the endpoint can be used publicly.

```yaml
locations:
  "1": # Location ID.
    name: "Africa" # Location display name.
    enabled: true # Enable or disable server creation on this location.
    package: null # Required package to make a server on this location.

    # package:
    # - default
    # - another_package_name

    renewal: false # Enables renewals for this feature. (Do not toggle after setting up this node on the client area. It might break things.)
```
Here you can add your nodes. Make sure you add the nodes you need for location ID check if it matched the on pteropanel.
```package``` checks if a user has a package on his account. If the user doesn't have the specified package in Freactyl, the user won't be able to create the server in that location.

```yaml
eggs: # These are the eggs servers can be created with.
  paper:
    display: "Paper"
    minimum:
      memory: 100
      disk: 100
      cpu: 10
    maximum:
      memory: null
      disk: null
      cpu: null
    info:
      egg: 3
      docker_image: quay.io/pterodactyl/core:java
      startup: java -Xms128M -Xmx{{SERVER_MEMORY}}M -Dterminal.jline=false -Dterminal.ansi=true -jar {{SERVER_JARFILE}}
      environment:
        SERVER_JARFILE: "server.jar"
        BUILD_NUMBER: "latest"
      feature_limits:
        databases: 1
        backups: 1
```

This section is for the server configuration eggs in Pterodactyl. When creating a server through Freactyl, the package associated with this egg will be used to create it. You can set this to your liking, and/or remove the default egg to change it with another one.
Add as many as you need but make sure you chnage the ```egg``` **ID**

