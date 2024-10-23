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
