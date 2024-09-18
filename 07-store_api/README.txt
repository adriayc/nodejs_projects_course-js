STORE API

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
    + Mongoose
      $ npm install mongoose --save
    + ExpressJS Async Errors
      $ npm i express-async-errors
  - Run app
    $ cd store-api
    $ code .              // Open VSCode
    $ npm install         // Install all dependencies (Optional)
    $ node <fileName>.js  // Run a file (Optional)
    $ npm start           // Run app

* Connection String
  - Connection String (DEPLOYMENT | Database -> Click 'Connect' -> Drivers -> Copy Connection String)
    > mongodb+srv://<DB_USER>:<DB_PASSWORD>@nodeexpresscluster.c64pr.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressCluster
    Click 'Done'

* Postman
  - Create 'Blank collection'
    Name: Store API
    + Create 'variables Globals' (Click Environment quick look -> Globals | Edit)
      > Variable: URL     Initial value: localhost:3000/api/v1    Current value: localhost:3000/api/v1
    + Add a request
      - GET
        > GET: localhost:3000/api/v1/products
        > GET: {{URL}}/products
        Click 'Send'
      - GET
        > GET: {{URL}}/products/static
        Click 'Send'

* Populate DB
  - Run file
    $ node populate.js
