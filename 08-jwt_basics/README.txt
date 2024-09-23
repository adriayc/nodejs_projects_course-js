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
    + JSON Web Token
      $ npm i jsonwebtoken
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

* JWT - Overview (URL: https://www.course-api.com/images/slides/slide-7.png)

* JWT - Structure
  In its compact form, JSON Web Topkens consist of three parts separeted by dos (.), which are:
    - Header
      The header typcally consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, sucha as HMAC SHA256 or RSA
    - Payload
      The second part of teh token is the payload, which contains the claims. There are theree types of claims: registered, public, and privete claims.
    - Signature
      To create teh signature part you have to take teh encoded header the encoded payload, a secret, algorithm specified in teh header, and sign that.
  Therefore , as JWT typically looks like the following.
    xxxxx.yyyyy.zzzzz

* Bearer Token - Overview
  In authentication, when the user successfully logs in using their credential , a JSON Web Token will be returned. Since tokens are credentials, grat care must be takes to prevent security issues.

  Whenever the user wants to access a protected route or resource, the user aget should send the JWT, typically in teh "Authorization" header using the "Bearer" schema, The content of the header should look like the following:
  ```
  Authorization: Bearer <totken>
  ```

* Send Bearer Token (Postman)
  - GET
    > GET: {{URL}}/products
      Headers
        Key:                    Value:
        Authorization           Bearer {{TOKEN}}
    Click 'Send'
