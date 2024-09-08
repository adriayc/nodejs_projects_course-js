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
    + Express (Express Info)
      $ npm install express@ --save
      $ npm install express@4.19.2 --save   // Install a specific version
    + Nodemon
      $ npm install --save-dev nodemon
    + Morgan (HTTP request logger middleware for Node.js)
      $ npm i morgan
  - Run app
    $ node <fileName>.js
    $ npm start

* Starter Overview (Project directory)

* API vs SSR
  - API
    + API - JSON
    + SEND DATA
    + RES.JSON
  - SSR
    + SSR - TEMPLATE
    + SEND TEMPLATE
    + RES.RENDER()

* METHODS
  - GET: Read Data
    > GET     www.store.com/api/orders      get all orders
  - POST: Insert Data
    > POST    www.store.com/api/orders      place an order (send data)
  - PUT: Update Data
    > PUT     www.store.com/api/orders/:id  update specific order (params + send data)

* Install Postman (URL: https://www.postman.com/)
  - Create Workspaces (E.G: Node.js & Express.js)
    + Create Collection (E.G: Express Tutorial)
      - Add a request
        > GET: localhost:5000/api/people
          Click 'Send'
        > POST: localhost:5000/api/postman/people
          > Body -> raw -> JSON
            {
              "name": "adrian"
            }
          Click 'Send'
        > PUT: localhost:5000/api/postman/people/1
          > Body -> raw -> JSON
            {
              "name": "adrian"
            }
          Click 'Send'
