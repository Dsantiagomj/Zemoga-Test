# Zemoga-Test

## Live demo

Branches are deployed on Netlify, relate to the links below to check them.

- Layout: [Click here](https://nervous-ritchie-f6b438.netlify.app)

* Interactive: [Click here](https://blissful-nobel-ba04ce.netlify.app/)

## Interactive

This branch contains two main sections.

First section of this branch was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br />

This section of the branch is deployed on [Netlify](https://blissful-nobel-ba04ce.netlify.app/). To run it locally refer to commit `149413d`.

To do so, run command `git checkout 149413d`.

Section two of this branch is coded from scratch and contains a NodeJs/Express application and the React application.

This section is the default one on this branch, only runs locally and requires mongodb to be installed on your machine. You can install it from [here]([https://docs.mongodb.com/manual/installation/).<br />

## Available Scripts - First section

In the project directory, you can run:

### `npm install`

Installs all the project dependencies.<br />

This command should be executed first if you intend to run this project locally.

### `npm start`

Runs the app in the development mode.<br />

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />

You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />

It correctly bundles React in production mode and optimizes the build for the best performance.

## Available Scripts - Second section

In the project directory, you can run:

### `npm install`

Installs all the project dependencies.<br />

This command should be executed first if you intend to run this project locally.

### `npm run server`

Runs the NodeJs/Express application in development mode.<br/ >

The application runs in port `3000`.

### `node script.js`

This script fills the database with the page data.<br />

This command only needs to be run once, it's necessary to have mongoDB installed and the server running.

### `npm run dev`

Runs the app in the development mode.<br />

Open [http://localhost:8000](http://localhost:8000) to view it in the browser.

The page will reload if you make edits.<br />

You will also see any lint errors in the console.
