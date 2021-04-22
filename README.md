## NestJs Starter Kit

### Overview

- NestJs starter git with basic middlewares ex. logging, response structure, tracing, validation and more.

- Basic setup with mysql database

- Docker-compose for setting up environment

### Getting Started
```
npm install
```

```
npm run start:dev
```

## .env
create a .env file in the root directory with the below variables
```
POSTGRES_HOST=localhost
POSTGRES_PORT=3306
POSTGRES_USER=user
POSTGRES_DATABASE=db
POSTGRES_PASSWORD=password
```
### Swagger documentation
Swagger documentation gets automatically generates, you just need to follow the conventions of entity creation.

swagger url - http://localhost:3000/docs

run e2e tests </br>
```
npm run test:e2e
```

### Creating new module

To create a new module we need few things in place, we can do it either via nest-cli or manually.

structure </br>
module -> </br>
1. *dto* -> dto_file (filename.dto.ts) (one or more)</br>
Here you define your data structure to be received in request body
2. *entity* -> entity_files (filename.entity.ts) (one or more)
Here you define the db schema for an entity, nest picks it up and creates a table in your database using the schema defined. 
3. *module controller file* (module.controller.ts)
Here you define your routing paths and methods to generate swagger docs for your defined path, use the ApiResponse module from swagger-ui, it will generate docs automatically for you.
4. *module service file* (module.service.ts) </br>
This is repository for the controllers where you call db functions.
</br>

Note: Remember to add any new module you have created in app.module file otherwise nest will not pickup your new module changes.

### pre-commit
In pre-commit we are using husky as pre-commit so no need to define any pre-commit file inside .git/config folder
you can refer what's inside hook by looking package.json file, look for husky.

### Docker-compose
It's to run the application standalone in any environment, currently it's defines postgres as dependency and uses it's port to servce the db
</br>

*using docker-compose* </br>

`docker-compose up`

### Open issues
