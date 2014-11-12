reminders
=========

Demo from JavaScript School on Nov 18, 2014

This silly mess will introduce you to node, MongoDB, npm, Express, Jade, GitHub, and more

The good road
-------------

1. Install node and MongoDB

  `brew install node mongodb`

2. Start MongoDB

  `mongod --config /usr/local/etc/mongod.conf`

3. Create a database called *myproject* and a collection called *reminders*

  ```
  mongo
  use myproject
  db.createCollection('reminders')
  ```

4. Install Express generator

  `npm install -g express-generator`

5. Create an Express app

  ```
  express reminders
  cd reminders
  npm install
  ```

6. Install MongoDB driver and save it as a dependency in *package.json*

  `npm install mongodb --save`

7. Run it

  `npm start`

8. Open it

  <http://localhost:3000/>

9. Follow the *carefully left* breadcrumbs, **bottom to top**, starting above *Updating readme*

  <https://github.com/danrashid/reminders/commits/master>

The easy road
-------------

1. Install node and MongoDB

  `brew install node mongodb`

2. Start MongoDB

  `mongod --config /usr/local/etc/mongod.conf`

3. Create a database called *myproject* and a collection called *reminders*

  ```
  mongo
  use myproject
  db.createCollection('reminders')
  ```

4. Clone the GitHub repo

  `git clone https://github.com/danrashid/reminders.git`

5. Run it

  ```
  cd reminders
  npm install
  npm start
  ```

6. Open it

  <http://localhost:3000/>

7. Learn much little
