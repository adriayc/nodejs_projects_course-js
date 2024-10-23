AUTH WORKFLOW

* Initialize the app
  - Create package.json
    $ npm init
      > package name: (auth-workflow) ENTER
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
    + Http Status Codes
      $ npm i http-status-codes
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
    Extra security packages
    + Express Rate Limit
      $ npm i express-rate-limit
    + Helmet
      $ npm i helmet
    + Express XSS Sanitizer
      $ npm i express-xss-sanitizer
    + Express Mongoose Sanitize
      $ npm i express-mongo-sanitize
    + Cors
      $ npm i cors
    + Nodemailer
      $ npm install nodemailer
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
    Name: 15-Auth-Workflow
    + Create new 'Environment' [Click 'Variables' -> Add]
      > Name: Dev Environment
        Variable              Initial value                 Current value
        URL                   http://localhost:5000/api/v1  http://localhost:5000/api/v1
    + Add a request
      * Auth
        - POST
          > POST: {{URL}}/auth/register
            Body -> raw -> JSON
            {}
          Click 'Send'
        - POST
          > POST: {{URL}}/auth/login
            Body -> raw -> JSON
            {}
          Click 'Send'
        - GET
          > GET: {{URL}}/auth/logout
          Click 'Send'
      * User
        - GET
          > GET: {{URL}}/users
          Click 'Send'
        - GET
          > GET: {{URL}}/users/1
          Click 'Send'
        - GET
          > GET: {{URL}}/users/showMe
          Click 'Send'
        - PATCH
          > PATCH: {{URL}}/users/updateUser
            Body -> raw -> JSON
            {
              "name": "john"
            }
          Click 'Send'
        - PATCH
          > PATCH: {{URL}}/users/updateUserPassword
            Body -> raw -> JSON
            {
              "password": "secret"
            }
          Click 'Send'

* Front-end (React
  - Install dependencies and run app
    $ npm install
    $ npm start
