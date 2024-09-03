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
  - Run app
    $ node <fileName>.js

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

* VSCode Commands:
  - CTRL + ` - Open terminal
