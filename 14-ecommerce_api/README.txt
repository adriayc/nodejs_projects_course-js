E-COMMERCE API

* Initialize the app
  - Create package.json
    $ npm init
      > package name: (ecommerce-api) ENTER
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
    + Http Status Codes
      $ npm i http-status-codes
    + Express
      $ npm install express --save
    + DotEnv
      $ npm i dotenv
    + Mongoose
      $ npm install mongoose --save
    + ExpressJS Async Errors
      $ npm i express-async-errors
    + Morgan (HTTP request logger middleware)
      $ npm i morgan
    + Validator.js (String validators and sanitizers)
      $ npm i validator
    + Bcrypt.js
      $ npm i bcryptjs
    + JSON Web Token
      $ npm i jsonwebtoken
    + Cookie Parser
      $ npm i cookie-parser
    + Cors
      $ npm i cors
  - Uninstall dependencies
    $ npm uninstall <package_name>
  - Run app
    $ cd ecommerce-api
    $ code .              // Open VSCode
    $ npm install         // Install all dependencies (Optional)
    $ node <fileName>.js  // Run a file (Optional)
    $ npm start

* Postman
  - Create 'Blank collection'
    Name: 14-E-commerce-API
    + Create new 'Environment' [Click 'Variables' -> Add]
      > Name: Dev Environment
        Variable              Initial value                 Current value
        URL                   http://localhost:5000/api/v1  http://localhost:5000/api/v1
    + Add a request
      - POST
        > GET: {{URL}}/auth/register
          Body -> raw -> JSON
          {}
        Click 'Send'
      - POST
        > GET: {{URL}}/auth/login
          Body -> raw -> JSON
          {}
        Click 'Send'
      - GET
        > GET: {{URL}}/auth/logout
        Click 'Send'

* Front-end (Recct)
  + Install dependencies & Run app
    $ npm install
    $ npm start
  + Add 'proxy' attribute in package.json file
    > "proxy": "http://localhost:5000"
