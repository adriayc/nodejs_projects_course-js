TASK MANAGER API

* Initialize the app
  - Create package.json
    $ npm init
      > package name: (task-manager) ENTER
      > version: (1.0.0) ENTER
      > description: ENTER
      > entry point: (app.js) app.js ENTER
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
    $ cd task-manager
    $ code .  // Open VSCode
    $ npm install  // Install all dependencies (Optional)
    $ node <fileName>.js  // Run a file (Optional)
    $ npm start  // Run app

* Routes Structure and Details
  - E.G. Algolia Search's API (URL: https://hn.algolia.com/api)
    > Items
      GET   http://hn.algolia.com/api/v1/items/:id
