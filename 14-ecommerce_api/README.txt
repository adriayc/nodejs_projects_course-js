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
    + Express Fileupload
      $ npm i express-fileupload
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
      * Auth
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
      * Product
        - POST
          > POST: {{URL}}/products
            Body -> raw -> JSON
            {}
          Click 'Send'
        - GET
          > GET: {{URL}}/products
          Click 'Send'
        - GET
          > GET: {{URL}}/products/1
          Click 'Send'
        - PATCH
          > PATCH: {{URL}}/products/1
            Body -> raw -> JSON
            {}
          Click 'Send'
        - DELETE
          > DELETE: {{URL}}/products/1
          Click 'Send'
        - POST
          > POST: {{URL}}/products/uploadImage
            Body -> form-data
            KEY                   VALUE
            image        [File]   Click 'Select Files'
          Click 'Send'
      * Review
        - POST
          > POST: {{URL}}/reviews
            Body -> raw -> JSON
            {}
          Click 'Send'
        - GET
          > GET: {{URL}}/reviews
          Click 'Send'
        - GET
          > GET: {{URL}}/reviews/1
          Click 'Send'
        - PATCH
          > PATCH: {{URL}}/reviews/1
            Body -> raw -> JSON
            {}
          Click 'Send'
        - DELETE
          > DELETE: {{URL}}/reviews/1
          Click 'Send'
      * Order
        - POST
          > POST: {{URL}}/orders
            Body -> raw -> JSON
            {}
          Click 'Send'
        - GET
          > GET: {{URL}}/orders
          Click 'Send'
        - GET
          > GET: {{URL}}/orders/showAllMyOrders
          Click 'Send'
        - GET
          > GET: {{URL}}/orders/1
          Click 'Send'
        - PATCH
          > PATCH: {{URL}}/orders/1
            Body -> raw -> JSON
            {}

* Front-end (Recct)
  + Install dependencies & Run app
    $ npm install
    $ npm start
  + Add 'proxy' attribute in package.json file
    > "proxy": "http://localhost:5000"

* Reset Database (Back-end)
  + Remove all products and reviews
  + Create a new product and two reviews (With differents users)

* Aggregation pipeline
  + MongoDB Atlas
    - Aggregation [Database -> 'Browse collections' -> 'e-commerce-api' | Click 'reviews' -> Click 'Aggregation']
      + Click '+ Add Stage'
        > Stage 1: $match [Select]
          {
            "product": ObjectId('{{PRODUCT_ID}}')
          }
      + Click '+ Add Stage'
        > Stage 2: $group [Select]
          {
            _id: null,
            avarageRating: { $avg: "$rating" }
            numOfReviews: { $sum: 1, }
          }
      Click '</> Export to language'
        > Node      Click 'COPY!!!'
          [*] Include Import Statements
          [*] Include Driver Syntax
        Click 'Close'
    - Aggregation (Additional Group ID - Example) [Database -> 'Browse collections' -> 'e-commerce-api' | Click 'reviews' -> Click 'Aggregation']
      + Click '+ Add Stage'
        > Stage 1: $match [Select]
          {
            "product": ObjectId('{{PRODUCT_ID}}')
          }
      + Click '+ Add Stage'
        > Stage 2: $group [Select]
          {
            _id: "$rating",
            amount: { $sum: 1 }
          }

* Docgen Library (URL: https://github.com/thedevsaddam/docgen)
  - Install and Uninstall
    + Install Linux
      $ curl https://raw.githubusercontent.com/thedevsaddam/docgen/v3/install.sh -o install.sh \
        && sudo chmod +x install.sh \
        && sudo ./install.sh \
        && rm install.sh
    + Uninstall Linux
      $ curl https://raw.githubusercontent.com/thedevsaddam/docgen/v3/uninstall.sh -o uninstall.sh \
        && sudo chmod +x uninstall.sh \
        && sudo ./uninstall.sh \
        && rm uninstall.sh
  - Commands
    $ docgen --help                               // help for docgen
    $ docgen build -i docs.json -o index.html     // generate documentation (From the docs.json exported with Postman)
  - Postman
    + Export collection [Select collection name 'e-commerce-api' and Click '...' -> Export]
      > Export collection
        > collection V2.1
        Click 'Export
      > Select path to save file
        > Save as: {{PATH}}/docs.json
        Click 'Save'
  - COPY and PAST 'docs.json' inside root app and generate doc
  - COPY and PAST 'index.html' inside 'public/' directory
  - Show doc (URL: http://localhost:5000/)

* Deployment
  - Heroku (URL: https://www.heroku.com/)
    + Sign up / Log in
    + Install heroku CLI
    + Change start to "node app.js"
    + Setup node version in package.json
      "engine": { "node": "20.x" }
    + Create "Profile" file in root app
      "web: node app.js"
    + Remove existing git repo
      $ rm -rf .git
    + Git Local
      $ git init
      $ git add .
      $ git commit -m "First commit"
    + Heroku CLI
      $ heroku login                  // Login
      $ heroku create "{{APP_NAME}}"  // Create app
      $ git remove -v                 // Show remotes
      >> Setup env vars in GUI
        > Heroku -> select "App Name" -> Settings -> Config Var | Click 'Reveal Config Vars'
          KEY               VALUE
          MONGO_URI         {{MONGO_URI}}         Click 'Add'
          ...
      $ git push heroku master|main   // Push app
    + Heroku GUI
      - Open app [Select 'App Name' -> Click 'Open app']
  - Render (URL: https://render.com/)
    + Create an account / Sign in
    + Remove existing git repo
      $ rm -rf .git
    + GitHub
      - Create new repo [Repositories | Click 'New']
        > Respository name: temp-node-e-commerce-api
        > Public
        Click 'Create repository'
    + Git Local
      $ git init
      $ git add .
      $ git commit -m "First commit"
      Push GitHub Reposity
      $ git remove add orgin git@github.com:{{USERNAME}}/{{REPO_NAME}}.git
      $ git branch - M main
      $ git push -u origin main
    + Render GUI
      - Create Web Service [Click 'New' -> Web Service]
        > Create a new Web Service
          > Connect a reposity: Search... and select repo
            > Name: node-e-commerce-api
            > Build Command: $ npm install
            > Start Command: $ node app.js
            > Plan Type: Free
            > Click 'Advanced' -> 'Add Secret File'
              > Filename: .env
              Click 'Save'
        Click 'Create Web Service'
      - Open URL Application [Dashboard -> Click 'URL_APP']

* Fixes
  - Remove or comment out 'morgan' settings
    > // app.use(morgan('tiny'))
  - Modify the prod URL in "docs.json" file, rebuild it and replace it
    $ docgen build -i docs.json -o index.html     // generate documentation (From the docs.json exported with Postman)
  - Separate script JS from 'index.html' (Docs)
    + Righ click -> Format Document With... -> HTML Language Feature
      > CUT and PASTE script in file 'public/browser-app.js' and remove 'script' tags
  - Run app
    $ npm run dev
  - Heroku CLI
    $ git add .
    $ git commit -m "Added fex fixes"
    $ git push heroku maste
