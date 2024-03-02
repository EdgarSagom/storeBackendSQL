# storeBackendSQL

### Step 1: Initialize

- npm init -y

### Step 2: Configuration

- npm i express knex pg
- npm i standard -D
- npm i nodemon

### Step 3: Environment Variables

At the Terminal

- knex init
- npm i dotenv

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

- knex migrate:make Table_Name
- knex migrate:latest

### Step 5: Table seeds

At the Terminal

- knex seed:make 01-table_Name
  (Note: To populate the tables to be run with data, it is important to list them)
- knex seed:run (Note: To run the seeds and load the data, check on pgAdmin)
