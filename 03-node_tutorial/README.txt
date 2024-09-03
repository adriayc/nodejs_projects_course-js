* Built-in Modules
  - OS
  - PATH
  - FS
  - HTTP

* HTTP
  - BRIEF INTRO
  - COVER IN DETAIL LATER (NEXT SECTION)

* Initialize the app
  - Create package.json
    > $ npm init
      > package name: (tutorial) ENTER
      > version: (1.0.0) ENTER
      > description: ENTER
      > entry point: (01-into.js) ENTER
      > test command: ENTER
      > git repository: ENTER
      > keywords: ENTER
      > author: ENTER
      > license: (ISC) ENTER
      Is this OK? (yes) ENTER
    > $ npm init -y
  - Install dependencies
    + Lodash
      $ npm i lodash
    + Bootstrap
      $ npm i bootstrap
    + Nodemon (Tools that helps develop Node.js based applications)
      $ npm i nodemon --save-dev
      $ npm i nodemon -D
  - Uninstall dependencies (E.G. - npm uninstall packageName)
    $ npm uninstall bootstrap
    NOTE: Another way - remove the dependency or dependencies on package-json, node_modules, package-lock.json and run 'npm install'
  - Install package globally
    + Nodemon
      $ npm install -g nodemon
  - package-lock.json is automatically generated for any operations where npm modifies either the npm_modules tree, or package.json
  - Run app
    $ node <fileName>.js
    $ npm start

* Share Code on GitHub
  - Create the repository on GitHub
    > Repository name: node-tutorial
    > Public
    Click "Create repository"
    NOTE: Copy the "...or push an existing repository from the command line" section.
  - Crear '.gitignore' file in the app and add the 'node_modules' directory.
  - Inicialize the respository locally
    $ git init
    $ git add .
    $ git commit -m "First commit"
    NOTE: PASTE remote repository commands (GitHub)
  - Clone the remote repository
    COPY the SSH url of the remote repository (GitHub)
    $ git clone SSH_URL
    $ npm install

* UPCOMING TOPICS
  - EVENT LOOP, ASYNC PATTERNS, EVENTS EMITTER AND STREAMS
  - MAIN CONCEPTS
  - PRE-BUILT CODE

* Event Loop
  The event loop is what allows Node.js to perform no-blocking I/O operations - despite the fact that a single JavaScript thread is used by default - by offloading operations to the system kernel whenever possible.

* VSCode Commands:
  - CTRL + ` - Open terminal
  - CTRL + C - Stop the app from running
