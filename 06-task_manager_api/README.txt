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

* MongoDB
  - NoSQL, NON RELATIONAL DB
  - STORE JSON
  - EASY TO GET STARTED
  - FREE CLOUD HOSTING - ATLAS

* MongoDB Atlas Database
  - Create an Atlas account
  - Deploy a free cluster
    > M0 (Free)
    > Name: TaskManagerCluster
    Click 'Create Deployment'

* MongoDB Access and Connection String
  - Get User/Password (SECURITY | Database Access)
  - Add IP Address (SECURITY | Network Access -> Click '+ Add IP Address')
    > Access List Entry: 0.0.0.0/0
    > Comment: EMPTY
    Click 'Confirm'
  - Connection String (DEPLOYMENT | Database -> Click 'Connect' -> Drivers -> Copy Connection String)
    > mongodb+srv://<DB_USER>:<DB_PASSWORD>@taskmanagercluster.c64pr.mongodb.net/?retryWrites=true&w=majority&appName=TaskManagerCluster
    Click 'Done'
  - Add IP Address for Production (SECURITY | Network Access -> Click '+ Add IP Address')
    > Access List Entry: {{IP_ADDRESS}}
    > Comment: {{COMMENT}}
    Click 'Confirm'

* MongoDB Overview
  - Create Database and Collection (DEPLOYMENT | Database -> Click 'Browser Collections' -> Click '+ Create Database')
    > Database name: Store
    > Collection name: Products
    > Additional Preferences: {{DEFAULT}}
    Click 'Create '
  - Create Collection or Insert Document
    + Create Collection (Click 'Database name | Store' -> Click 'Create Collection')
      > Database name: Store (Default)
      > Collection name: users
      > Additional Preferences: {{DEFAULT}}
      Click 'Create'
    + Insert Document (Click 'Collection name | Products' -> Click 'Insert Document')
      > _id: ObjectId('xxxxx')          ObjectId
      > name: "first product"           String
      Click 'Insert'

* CRUD (GUI Example)
  - Go to 'Products' collection (DEPLOYMENT | Database -> Click 'Browser Collections' -> Click 'Collection | Products')
    + Create New Document (Click 'Insert Document')
      > _id: XXXX             ObjectId
      > name: "test"          String
      Click 'Insert'
    + Update Document (Click 'Edit Document')
      > _id: ObjectId('xxxxx')
      > name: "test 2"
      Click 'Update'
    + Delete Document (Click 'Remove Document')
      Click 'Delete'
