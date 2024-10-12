SEND EMAILS

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
    + JSON Web Token
      $ npm i jsonwebtoken
    + Mongoose
      $ npm install mongoose --save
    + Nodemailer
      $ npm install nodemailer
    + SendGrid (For Prod)
      $ npm install --save @sendgrid/mail
  - Ethereal Email
    + Create account and Login
  - SendGrid for production (URL: https://sendgrid.com/en-us)
    + Sin up/Sign in
    + Tell Us About Yourself
    + Send a single send -> Click 'Create Sender identity'
    + Email API -> Integration Guide -> Web API | Click 'Choose' -> Node.js | Click 'Choose'
      ...
      2) Create an API key
        > My First API Key
        Click 'Create Key'
        NOTE: COPY API Key
      3) Create an environment variable
      4) Install the package
      5) Send your firt email
      Click 'Next: Verify Integration'
