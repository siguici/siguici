<div align="center">

[![sigui-logo]][sigui-link]

<br/>

[![active-icon]][active-link]
[![typescript-icon]][typescript-link]
[![javascript-icon]][javascript-link]

</div>

[sigui-logo]: https://github.com/siguici/sigui.ci/blob/HEAD/public/logo.svg
[sigui-link]: https://sigui.ci/ "Sigui"

[active-icon]: https://img.shields.io/badge/Sigui-enabled-brightgreen.svg
[active-link]: https://github.com/siguici/sigui.ci"

[typescript-icon]: https://img.shields.io/badge/TypeScript-294E80.svg?logo=typescript
[typescript-link]:  https://github.com/siguici/sigui.ci/search?l=typescript "TypeScript code"

[javascript-icon]: https://img.shields.io/badge/JavaScript-yellow.svg?logo=javascript
[javascript-link]:  https://github.com/siguici/sigui.ci/search?l=javascript "JavaScript code"

***

# Sigui

Sigui's web application.

## 🔖 Contents

- [Sigui](#sigui)
  - [🔖 Contents](#-contents)
  - [📋 Requirements](#-requirements)
  - [🎉 Getting Started](#-getting-started)
    - [⚡️ Installation](#️-installation)
    - [🔨 Add Integrations](#-add-integrations)
    - [🔧 Configuration](#-configuration)
    - [🗃️ Manage Database](#️-manage-database)
    - [🌐 Starting server](#-starting-server)
      - [Developement](#developement)
      - [Preview](#preview)
      - [Build assets](#build-assets)
      - [Production](#production)
  - [🧪 Testing](#-testing)
  - [🔐 Security Reports](#-security-reports)

## 📋 Requirements

> - **Requires [Deno 1.34+](https://nodejs.org/)** (at least 1.34.3 recommended to avoid potential bugs).
> - **Requires [PostgreSQL 15.3+](https://www.postgresql.org/)** as Relational Database Management System.
> - **Requires [pnpm@^8.6.6](https://pnpm.io/)** to manage [TS][typescript-link] and [JS][javascript-link] dependencies.
> - **Requires [Git ~2.40.0](https://git-scm.com/)** to manage source code versions.)

## 🎉 Getting Started

### ⚡️ Installation

Install [Sigui](https://github.com/siguici/sigui.ci/) using [Git](https://git-scm.com/):

```shell
git clone https://github.com/siguici/sigui.ci sigui
```

Access the working directory:

```shell
cd sigui 
```

🏗️ ### Project Structure

This project is using Qwik with [QwikCity](https://qwik.builder.io/qwikcity/overview/). QwikCity is just an extra set of tools on top of Qwik to make it easier to build a full site, including directory-based routing, layouts, and more.

Inside your project, you'll see the following directory structure:

```tree
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

### 🔨 Add Integrations

Use the `pnpm qwik add` command to add additional integrations. Some examples of integrations include: Cloudflare, Netlify or Express server, and the [Static Site Generator (SSG)](https://qwik.builder.io/qwikcity/guides/static-site-generation/).

```shell
pnpm qwik add # or `yarn qwik add`
```

### 🔧 Configuration

Install dependencies:

```shell
pnpm install # or pnpm i
```

Generate schemas:

```shell
pnpm db:generate
```

### 🗃️ Manage Database

Install developement migrations:

```shell
pnpm db:migrate # or pnpm db:migrate:prod (for)
```

Install production migrations:

```shell
pnpm db:migrate:prod
```

### 🌐 Starting server

#### Developement

Development mode uses [Vite's development server](https://vitejs.dev/). During development, the `dev` command will server-side render (SSR) the output.

```shell
pnpm start
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

#### Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.

```shell
pnpm preview
```

#### Build assets

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

```shell
pnpm build
```

#### Production

This app has a minimal [Deno server](https://deno.com/manual/examples/http_server) implementation. After running a full build, you can preview the build using the command:

```shell
pnpm serve
```

Then visit [http://localhost:3000/](http://localhost:3000/)

## 🧪 Testing

🧹 Keep a modern codebase with **ESLint**:

```shell
pnpm lint
```

⚗️ Format code using **Prettier**:

```shell
pnpm fmt
```

✅ Run unit tests using **Vitest**

```shell
pnpm test.unit
```

🚀 Execute end-to-end testing with **Playwright**:

```shell
pnpm test.e2e
```

## 🔐 Security Reports

If you discover a security vulnerability within [sigui.ci](https://sigui.ci), please send an e-mail to [Sigui Kessé Emmanuel](https://github.com/siguici) via [contact@sigui.ci](mailto:contact@sigui.ci "Ping Sigui Kessé Emmanuel"). All security vulnerabilities will be promptly addressed.

***

<div align="center"><sub>Made with ❤︎ by <a href="https://twitter.com/intent/follow?screen_name=siguici" title="Follow Sigui Kessé Emmanuel"><span style="margin-bottom:-6px; content:url(https://img.shields.io/twitter/follow/siguici.svg?label=Sigui+Kessé+Emmanuel)">Sigui Kessé Emmanuel</span></a> and <a href="https://github.com/siguici/sigui.ci/contributors" title="Contributors">You</a>!</sub></div>
