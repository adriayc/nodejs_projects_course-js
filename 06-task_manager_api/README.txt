TASK MANAGER API

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
  - Run app
    $ cd task-manager
    $ code .  // Open VSCode
    $ npm install  // Install all dependencies (Optional)
    $ node <fileName>.js  // Run a file (Optional)
    $ npm start  // Run app

* Routes Structure and Details
  - E.G. Algolia Search's API (URL: https://hn.algolia.com/api)
    > Items
      GET   http://hn.algolia.com/api/v1/items/:id

* Postman
  - Create 'Blank collection'
    Name: Task Manager API
    + Create 'variables Globals' (Click Environment quick look -> Globals | Edit)
      > Variable: URL     Initial value: localhost:3000/api/v1    Current value: localhost:3000/api/v1
    + Add a request
      - GET
        > GET: localhost:3000/api/v1/tasks
        > GET: {{URL}}/tasks
        Click 'Send'
      - POST
        > POST: {{URL}}/tasks
          Body -> raw -> JSON
          {
            "name": "testing"
          }
        Click 'Send'
      - GET
        > GET: {{URL}}/tasks/hello
        Click 'Send'
      - PATCH
        > PATCH: {{URL}}/tasks/123
          Body -> raw -> JSON
          {
            "name": "testing2"
          }
        Click 'Send'
      - DELETE
        > DELETE: {{URL}}/tasks/peter
        Click 'Send'

* REST API
  + GET             api/tasks               - Get All Tasks
  + POST            api/tasks               - Create Task
  + GET             api/tasks/:id           - Get Task
  + PUT/PATCH       api/tasks/:id           - Update Task
  + DELETE          api/tasks/:id           - Delete Task
