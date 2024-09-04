* HTTP Request/Response Cycle (URL: https://www.course-api.com/images/slides/slide-4.png)
                    Request
  > HTTP Message    DATA          Node/Express
                    Response

* HTTP Messages
  - Request/Response Message (URL: https://www.course-api.com/images/slides/slide-5.png)
  - HTTP Methods (URL: https://www.course-api.com/images/slides/slide-6.png)
    + GET: Read Data
    + POST: Insert Data
    + PUT: Update Data
    + DELETE: Delete Data

* Starter Project Info (REPO: https://github.com/john-smilga/node-express-course)
  In order to follow along with the course, you will need to get a starter project.

* Initialize the app
  - Create package.json
    > $ npm init
      > package name: (tutorial) ENTER
      > version: (1.0.0) ENTER
      > description: ENTER
      > entry point: (index.js) ENTER
      > test command: ENTER
      > git repository: ENTER
      > keywords: ENTER
      > author: ENTER
      > license: (ISC) ENTER
      Is this OK? (yes) ENTER
    > $ npm init -y
  - Install dependencies
    + Express
      $ npm install express --save
    + Nodemon
      $ npm install --save-dev nodemon
  - Run app
    $ node <fileName>.js
    $ npm start

* Starter Overview (Project directory)
