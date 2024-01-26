# hahow

## Reference
[Hahow Backend Engineer 徵才小專案](https://github.com/hahow/hahow-recruit/blob/master/backend.md)

## Quick Start
### Server
- Start server on localhost at port 3000 by Node.js version 20

```
npm start
```

### Making Requests
- Query for hero without login

```
curl -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/heros/1
```

- Query for hero with login

```
curl -H "Accept: application/json" -H "Content-Type: application/json" -H "Name: hahow" -H "Password: rocks" -X GET http://localhost:3000/heros/1
```

- Query for heros array without login

```
curl -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://localhost:3000/heros
```

- Query for heros array without login

```
curl -H "Accept: application/json" -H "Content-Type: application/json" -H "Name: hahow" -H "Password: rocks" -X GET http://localhost:3000/heros
```

### Testing
- Run unit tests

```
npm test
```

## Technologies
Express is applied as backend Node.js framework.

## APIs
- `GET /heros`: Get an array of hero objects, hero profile is provided if login.
- `GET /heros/:id`: Get a hero object of given `id`, hero profile is provided if login.

## Folder Structure
- src: source code
  - auth: authentication functionalities
  - error: customized error class with HTTP status code
  - middleware: middlewares and error handler
  - model: data-related logics
  - router: url routing logics
  - util: common utility functions 
  - app.js: Express application
  - index.js: HTTP server logics
- test: testing logics, each folder under `test` corresponding to each folder of `src` 
- config.json: configuration file
- README.md: documentation

## Third-party Dependency
- express: The backend HTTP framework
- axios: To send HTTP request to third-party APIs
- axios-mock-adapter: Create mock for axios so requests to third-party API is not required during testing.
- jest: The testing framework
- supertest: To test HTTP application by creating request and response without networking.

## Principles of Writing Comments
- For functions, comeents of JSDoc format is applied.
- To explain high-level logic inside functions
- To elaborate detail logics for complicated/complex codes
