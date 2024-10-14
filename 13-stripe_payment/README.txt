STRIPE PAYMENT

* Initialize the app
  - Create package.json
    $ npm init
      > package name: (stripe-payment) ENTER
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
    + JSON Web Token
      $ npm i jsonwebtoken
    + Mongoose
      $ npm install mongoose --save
  - Run app
    $ cd store-api
    $ code .              // Open VSCode
    $ npm install         // Install all dependencies (Optional)
    $ node <fileName>.js  // Run a file (Optional)
    $ npm start

* Stripe
  - Create account/Sign in
