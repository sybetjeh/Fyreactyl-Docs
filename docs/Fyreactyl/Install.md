---
sidebar_position: 2
---

# Installation

:::warning READ BEFORE PROCEEDING!
I have spent hours making this documentation to help you. You're supposed to at least have basic linux knowledge, and you're also supposed to understand what commands you're running.
:::

## Supported Operating Systems

| Name                         | Versions |
| ---------------------------- | -------- |
| [Ubuntu](#ubuntu-and-debian) | >=20.04  |
| [Debian](#ubuntu-and-debian) | >=10     |
| [Windows](#windows)          | >=10     |
| [CentOS](#centos)            | >=7      |

## [Ubuntu & Debian](#ubuntu-and-debian)

If you have not go ahead and install these prerequisites.

```bash
# Becoming root
sudo -i

sudo apt update && sudo apt upgrade

# installing git CLI
sudo apt install git

# installing NPM
sudo apt install npm

# installing NodeJS
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt install nodejs

# installing mysql
sudo apt install mysql-server
```

Go ahead and check if the right version has been installed.

```bash
git --version
npm -v
node -v
```

Now to install Fyreactyl:

```bash
git clone https://github.com/FyreHub/Fyreactyl.git
cd Fyreactyl
sudo npm install
```

After installing Dashactyl, create the `settings.yml` file using the `settings-template.yml` file and edit it for your dashboard, just incase for making mistakes you will copy the `settings.yml`

```bash
cp settings-example.yml settings.yml
nano settings.yml
```

---

## [Windows](#windows)

First, make sure you have all the prerequisites listed at the top of the page (if you do you can skip this part).

- Git CLI: https://git-scm.com/download/win
- NPM and NodeJS: https://nodejs.org/en/

You can check the versions with the following commands:

```bat
git --version
npm -v
node -v
```

Now to install Fyreactyl and its dependencies:

```bat
git clone https://github.com/FyreHub/Fyreactyl.git
cd Fyreactyl
npm install
```

After installing Fyreactyl, copy the `settings-example.yml` file, after use the `settings.yml` file and edit it for your accordingly dashboard.

---

## [CentOS](#centos)

If you have not go ahead and install these prerequisites.

```bash
# Becoming root
sudo -i

sudo yum update && sudo apt upgrade

# installing git CLI
sudo yum install git

# installing NPM
sudo yum install npm

# installing NodeJS
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo bash -
sudo yum install nodejs

# install mysql
sudo yum install mysql-server
```

Go ahead and chech if the right version has been installed.

```bash
git --version
npm -v
node -v
```

Now to install Fyreactyl:

```bash
git clone https://github.com/FyreHub/Fyreactyl.git
cd Fyreactyl
sudo yum install
```

After installing Dashactyl, create the `settings.yml` file using the `settings-example.yml` file and edit it for your dashboard, just incase for making mistakes you will copy the `settings.yml`

```bash
cp settings-example.yml settings.yml
nano settings.yml
```
