JWT BASICS (LOGIN/REGISTER)

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
    + DotEnv
      $ npm i dotenv
    + ExpressJS Async Errors
      $ npm i express-async-errors
  - Run app
    $ cd store-api
    $ code .              // Open VSCode
    $ npm install         // Install all dependencies (Optional)
    $ node <fileName>.js  // Run a file (Optional)
    $ npm start

* Postman
  - Create 'Blank collection'
    Name: Comfy Store
    + Create 'variables Globals' (Click Environment quick look -> Globals | Edit)
      > Variable: URL     Initial value: localhost:3000/api/v1    Current value: localhost:3000/api/v1
    + Add a request
      - GET
        > GET: localhost:3000/api/v1/dashboard
        > GET: {{URL}}/products
        Click 'Send'
      - POST
        > GET: {{URL}}/login
          Body -> raw -> JSON
          {
            "username": "john"
            "password": "secret"
          }
        Click 'Send'
