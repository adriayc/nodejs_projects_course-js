# NODEJS TUTORIAL AND PROJECTS COURSE
> **Instructor:** John Smilga

## What is Node.js
* Environment to run JS outside Browser
* Built on Chrome's V8 JS Engine
* Big Community
* Full-Stack

## Requirements
* HTML, CSS, JS, ES6
* Callbacks, Promises, Async-Await
* YouTube - Coding Addict
* Playlist - JS Nuggets  

## Structure
* Intro
* Install
* Node Fundamentals
* Express Tutorial
* Building Apps...

## Text Editor
* VSCode
  - Extensions:
    * Auto Rename Tag
    * Bracket Pair Colorizer
    * ES7 React/Redux/GraphQL/React-Native snippets
    * indent-rainbow
    * Live Server
    * MDX
    * Prettier - Code formatter
    * Preview on Web Server
    * Quokka.js
    * Svelte
    * Svelte 3 Snippets
    * Svelte Intellisense
    * vscode-styled-components
    * DotENV

## Browser vs Server
* __Browser__
  - DOM
  - Window
  - Interactive Apps
  - No Filesystem
  - Fragmentation
  - ES6 Modules
* __Node.js__
  - No DOM
  - No Window
  - Serer Side Apps
  - Filesystem
  - Versions
  - CommonJS

## Install Node.js
* [Node.js](https://nodejs.org/en/)

## REPL
The Node.js Read-Eval-Print-Loop (REPL) is an interactive shell taht processes Node.js expressions. The shell **reads** JavaScript code the user enters, **eval** uates the result of interpreting the line of code, **prints** the result to the user, and **loops** until the user signals to quit.

```js
$ node
> const name = 'adriano'
undefined
> name
'adriano'
> CTRL + C
(To exit, press CTRL + C again or CTRL + D or type .exit)
```

## CLI
* Create 'tutorial' directory and inside the directory a file 'app.js'
```js
const amount = 12;

if (amount < 12) {
  console.log('Small number');
} else {
  console.log('Large number');
}

console.log(`Hey it's my first node app!!!`);
```

* Run the file with node.js CLI
```bash
$ node app.js
```

## Source Code
* [Website](https://johnsmilga.com/)
* [Repository](https://github.com/john-smilga/node-express-course)

## NPM
[npm](https://www.npmjs.com/) (short for Node Package Manager) is a package manager for JavaScript. It is used primarily with Node.js, a JavaScript runtime that allows you to run JavaScript on the sever side. npm helps developers manage dependencies and packages for their Node.js projects.

## Express
Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile application.

```sh
$ npm install express --save
```

## MongoDB
MongoDB is a popular NoSQL database designed for handling large amounts of unstructured or semi- structured data. Unlike traditional relational databases that use tables and rows, MongoDB stores data in flexible, JSON-like documents.

## Mongoose
[Mongoose](https://mongoosejs.com/) is a popular Object Data Modelin (ODM) library for MongoDB and Node.js. Mongoose provides a straightforward way to model your data, manage schema definitions, and interact with MongoDB.

## JSON Web Token
A[JSON Web Token (JWT)](https://jwt.io/) is a compact, URL-safe means of representing claims to be brasferred between two parties. It allows you tu verify teh token's authenticity and the identity of the user or service.

## Nodemailer
[Nodemailer](https://nodemailer.com/) is a module for Node.js application that allows easy email sending.

### Ethereal Email
[Ethereal](https://ethereal.email/) is a fake SMTP service, mostly aimed at Nodemailer and EmailEngine users (but not limited to).

## Stripe
[Stripe](https://stripe.com/) powers online and in-person payment processing and financial solutions for businesses of all sizes. Accept payments, send payouts, and automate financial processes with a suite of APIs and no-code tools.
