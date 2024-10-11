FILE/IMAGE UPLOAD

* Initialize the app
  - Create package.json
    $ npm init
      > package name: (file-upload) ENTER
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
    + JSON Web Token
      $ npm i jsonwebtoken

* Postman
  - Create 'Blank collection'
    Name: File Uploads
    + Create 'variables Globals' (Click Environment quick look -> Globals | Edit)
      > Variable: URL     Initial value: localhost:3000/api/v1    Current value: localhost:3000/api/v1
    + Add a request
      - POST
        > GET: {{URL}}/products
          Body -> raw -> JSON
          {
            "name": "Product name",
            "price": 300,
            "image": "123"
          }
        Click 'Send'
      - GET
        > GET: {{URL}}/products
        Click 'Send'
      - POST
        > GET: {{URL}}/products/uploads
          Body -> form-data
          Key                 Value
          image     [File]    Select files...
        Click 'Send'
