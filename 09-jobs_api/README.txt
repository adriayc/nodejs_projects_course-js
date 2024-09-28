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
    + JSON Web Token
      $ npm i jsonwebtoken
    Extra security packages
    + Helmet
      $ npm i helmet
    + Cors
      $ npm i cors
    + Express XSS Sanitizer
      $ npm i express-xss-sanitizer
    + Express Rate Limit
      $ npm i express-rate-limit
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

* Set Token Dynamically in Postman
  - POST
    > POST: {{URL}}/auth/login
      > Body -> raw -> JSON
      {
        "username": "adriano@email.com"
        "password": "adriano123"
      }
      > Scripts -> Post-response
      ```
      const jsonData = pm.response.json();
      pm.globals.set("accessToken", jsonData.token);
      ```
      NOTE: Add the configuration to the endpoints that are necessary
    Click 'Send'
  - View Globals (Click 'Variables' -> View Variables used | Globals)
  - Disable Authorization (EndPoint -> Headers)
    X Authorization   Bearer xxx
  - GET
    > GET: {{URL}}/jobs
      > Authorization
        Type: Bearer Token        Token: {{accessToken}
    Click 'Send'

* Heroku (URL: https://www.heroku.com/)
  - Install Heroku CLI (URL: https://devcenter.heroku.com/articles/heroku-cli)
    $ heroku -h
  - Sign up and Log in

* Deploy to Heroku (URL: https://devcenter.heroku.com/articles/deploying-nodejs)
  - Repository
    + Local
      - Remove repo
        $ rm -rf .git
      - Initialize repo
        $ git init
        $ git add .
        $ git commit -m "First commit"
        $ git remote -v
    + Heroku CLI
      $ heroku login
      $ heroku create jobs-api
      $ heroku config:set JWT_LIFETIME={{LIFETIME}}
      $ git push heroku main
  - Heroku
    + Select and Click 'jobs-api' (App)
      - Click 'Open app'
      - Config Vars (Settings -> Click 'Reveal Config Vars')
        > KEY: JWT_SECRET        VALUE: {{JWT_SECRET}}
        > KEY: MONGO_URI         VALUE: {{MONGO_URI}}
    + Restar All Dynos (Click 'More' -> Restar all dynos -> Click 'Restar all dynos')
    + View Logs (Click 'More' -> View logs)
    + Open App (Click 'Open app')
  - Postman
    + Add Global Variables (Click 'Variables')
      VARIABLE      INITIAL VALUE                         CURRENT VALUE
      PROD_URL      https//jobs-api.herokuapp.com/api/v1  https//jobs-api.herokuapp.com/api/v1
      Click 'Save'
    + Click 'Add request'
      - POST
        > POST: {{PROD_URL}}/auth/login
          > Body -> raw -> JSON
          {
            "username": "adriano@email.com"
            "password": "adriano123"
          }
          > Scripts -> Post-response
          ```
          const jsonData = pm.response.json();
          pm.globals.set("accessToken", jsonData.token);
          ```
        Click 'Send'
      - GET
        > GET: {{URL}}/jobs
          > Authorization
            Type: Bearer Token        Token: {{accessToken}
        Click 'Send'

* Swagger UI (URL: https://swagger.io/)

* Clone Heroku Project
  - Clone
    $ heroku git:clone -a jobs-api
  - Create .env file
  - Install dependencies and run app
    $ npm install && npm start

* Postman Docs
  - Select 'Collection' -> Click '...' -> Click 'Export' -> Select 'Collection v2.1' | Click 'Export'
    Save As: docs.json
    Click 'Save'
