# Inventory REST API

A simple REST API built with **Node.js** and **Express** that supports full CRUD operations on inventory items. Includes custom middleware (request logger and input validation) and error handling. Tested with Postman.

## Setup

```bash
npm install
npm start
```

Server runs on `http://localhost:3000`.

## Endpoints

| Method | Endpoint     | Description        |
|--------|--------------|--------------------|
| GET    | /items       | Get all items      |
| GET    | /items/:id   | Get one item       |
| POST   | /items       | Create a new item  |
| PUT    | /items/:id   | Update an item     |
| DELETE | /items/:id   | Delete an item     |

### Example request body (POST / PUT)

```json
{ "name": "Keyboard", "quantity": 25, "price": 1200 }
```

## Middleware

- **logger**: logs method, URL and timestamp of every request
- **validateItem**: checks name, quantity and price before create/update (returns 400 on bad input)
- **error handler**: returns JSON errors for invalid JSON and server errors

## Status codes used

200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Server Error

## Tech

Node.js, Express.js, Postman
