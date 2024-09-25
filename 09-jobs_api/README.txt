JOBS API

* Initialize the app
  - Create package.json
    $ npm init
      > package name: (jobs-api) ENTER
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
    + DotEnv
      $ npm i dotenv
    + ExpressJS Async Errors
      $ npm i express-async-errors
    + Http Status Codes
      $ npm i http-status-codes
    + Mongoose
      $ npm install mongoose --save
    + Bcrypt.js
      $ npm i bcryptjs
  - Run app
    $ cd jobs-api
    $ code .              // Open VSCode
    $ npm install         // Install all dependencies (Optional)
    $ node <fileName>.js  // Run a file (Optional)
    $ npm start

* Connection String
  - Connection String (DEPLOYMENT | Database -> Click 'Connect' -> Drivers -> Copy Connection String)
    > mongodb+srv://{{DB_USER}}:{{DB_PASSWORD}}@nodeexpresscluster.c64pr.mongodb.net/?retryWrites=true&w=majority&appName={{APP_NAME}}
    Click 'Done'
