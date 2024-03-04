# storeBackendSQL

storeBackendSQL with PostgreSQL, Express, Knex, dotenv, nodemon and [Node.js](https://nodejs.org/en)

![](./Entity-RelationshipModel.jpg)

Follow the steps and commits.

### Step 1: Initialize

- npm init -y

### Step 2: Configuration

- npm i [express](https://expressjs.com/) [knex](https://knexjs.org/guide/) [pg](https://www.pgadmin.org/)
- npm i [standard](https://standardjs.com/) -D
- npm i [nodemon](https://www.npmjs.com/package/nodemon)

### Step 3: Environment Variables

At the Terminal

- `knex init`
- npm i [dotenv](https://www.npmjs.com/package/dotenv)

Create in the root folder:

- .gitignore

```javascript
  .env
```

Create in the root folder:

- .env

```javascript
  DB_HOST_DEV = 127.0.0.1
  DB_NAME_DEV =
  DB_USER_DEV =
  DB_PASS_DEV =
```

### Step 4: Table migrations

At the Terminal

- `knex migrate:make Table_Name`
- `knex migrate:latest`

### Step 5: Table seeds

At the Terminal

- `knex seed:make 01-table_Name`
  (Note: To populate the tables to be run with data, it is important to list them)
- `knex seed:run` (Note: To run the seeds and load the data, check on pgAdmin)

### Step 6: Server configuration

Create in the root folder:

- server.js
- At the Terminal `npm run dev`

### Step 7: Controllers and Routes (test)

- Create a folder in the root: controllers and inside a file productController.js
- Create a folder in the root: routes and inside a file productRoutes.js
- test: `http://localhost:3000/api/v1/products`

### Step 8: Models, Controllers and Routes (real)

- Create a folder in the root: models and inside a file Products.js
- Modify files: productController.js and productRoutes.js
- Review in Insomnia or Postman

### Step 9: Added endpoints for products table

### Step 10: Added endpoints for customers table

### Step 11: Added endpoints for shops table
