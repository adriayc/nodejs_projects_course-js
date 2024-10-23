PROJECT INTRO AND SETUP

* Initialize the app
  - Create package.json
    $ npm init
      > package name: (my-node-app) ENTER
      > version: (1.0.0) ENTER
      > description: ENTER
      > entry point: (index.js) ENTER
      > test command: ENTER
      > git repository: ENTER
      > keywords: ENTER
      > author: ENTER
      > license: (ISC) ENTER
      Is this OK? (yes) ENTER
    $ npm init -y
  - Install dependencies
    + Nodemon
      $ npm install --save-dev nodemon
    + Express
      $ npm install express --save
  - Run app
    $ cd my-node-app
    $ code .  // Open VSCode
    $ npm install  // Install all dependencies (Optional)
    $ node <fileName>.js  // Run a file (Optional)
    $ npm start  // Run app
