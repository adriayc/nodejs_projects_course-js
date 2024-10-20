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
