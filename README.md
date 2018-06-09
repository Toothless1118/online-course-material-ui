# online-course-frontend
Online Course Frontend


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

The following software is required to be installed on your system:

* Node 8.x
* Npm 3.x

Type the following commands in the terminal to verify your node and npm versions

  ```bash
  node -v
  npm -v
  ```

### Install

Follow the following steps to get development environment running.

* Clone _'react-redux-starter'_ repository from GitHub

  ```bash
  git clone https://github.com/Toothless1118/online-course-frontend.git
  ```

   _OR USING SSH_

  ```bash
  git clone git@github.com:Toothless1118/online-course-frontend.git
  ```

* Install node modules

   ```bash
   cd online-course-frontend
   npm install
   ```

### Build

#### Build Application

dev | prod
:---: | :---:
npm run build:dev | npm run build:prod

#### Build Application And Watch For Changes

dev | prod
:---: | :---:
npm run build:dev:watch | npm run build:prod:watch

#### Build Application With BundleAnalayzer Plugin Included

dev | prod
:---: | :---:
npm run build:dev:bundleanalyze | npm run build:prod:bundleanalyze


#### Build Application With BundleBuddy Plugin Included

dev | prod
:---: | :---:
npm run build:dev:bundlebuddy | npm run build:prod:bundlebuddy

### Run ESlint

#### Lint Project Using ESLint

  ```bash
  npm run lint
  ```

#### Lint Project Using ESLint, and autofix

  ```bash
  npm run lint:fix
  ```

### Run

#### Run Start

This will run the _'serve:dev'_ npm task

```bash
npm start
```

#### Run Dev Server

```bash
npm run serve:dev
```

#### Run Dev Server With Dashboard

```bash
npm run serve:dev:dashboard
```

The above command will display a dashboard view in your console resembling the following image:

![webpack-dashboard](https://user-images.githubusercontent.com/33935506/36639594-589409e8-1a18-11e8-84fe-29f7bdafcaa6.png)

#### Run Prod Server

This command will build application using production settings and start the application using _live-server_

```bash
npm run serve:prod
```

#### Checking

Project is running at http://localhost:9000/

---
