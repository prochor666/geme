# Templating frontend (formerly package TPLUI)

Vue 3 + Vite + Tailwind + Material design icons UI stack

# Your local setup

## OS Requirements

Install Node.js, follow the instructions for your OS from the link bellow:

[Node.js LTS](https://nodejs.org).

## Prepare local setup

Clone this repository of course:

```shell
git clone git@ssh.dev.azure.com:v3/SOFTINO/CRD_TEMPLATING/crd_templating_fe
```

```shell
cd crd_templating_fe
```

```shell
npm install
```

# How to run

## Run local server

This command starts your local dev server based on configuration in ./vite.config.js.

```shell
npm run dev
```

## Build your app

This command builds an app into ./dist directory.

```shell
npm run build
```

# Update to the latest packages

Warning, "things" can break!

```
npm i npm-check-updates
ncu -u
npm install
```

# Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
