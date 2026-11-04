# Inventory REST API

A simple REST API built with **Node.js** and **Express.js** that performs full **CRUD** operations (Create, Read, Update, Delete) on inventory items. All endpoints were tested using **Postman**.

## Features

- Get all items and get a single item by id
- Add a new item
- Update an existing item
- Delete an item
- JSON request handling using Express middleware (`express.json()`)
- Proper HTTP status codes (200, 201, 404)

## Tech Stack

- Node.js
- Express.js
- Postman (API testing)

## Getting Started

**Prerequisite:** Node.js installed on your system.

```bash
# 1. Clone the repository
git clone https://github.com/muskanlalwani155-design/inventory-api.git
cd inventory-api

# 2. Install dependencies
npm install

# 3. Start the server
npm start
```

The server runs on `http://localhost:3000`.

## API Endpoints

| Method | Endpoint     | Description          |
|--------|--------------|----------------------|
| GET    | /items       | Get all items        |
| GET    | /items/:id   | Get a single item    |
| POST   | /items       | Create a new item    |
| PUT    | /items/:id   | Update an item       |
| DELETE | /items/:id   | Delete an item       |

## Example Requests

### Create an item (POST /items)

Request body:

```json
{
  "name": "Keyboard",
  "quantity": 25
}
```

Response (201 Created):

```json
{
  "id": 1730700000000,
  "name": "Keyboard",
  "quantity": 25
}
```

### Update an item (PUT /items/1)

Request body:

```json
{
  "name": "Gaming Laptop",
  "quantity": 8
}
```

### Item not found (GET /items/999)

Response (404 Not Found):

```json
{
  "error": "Item not found"
}
```

## Testing with Postman

1. Start the server with `npm start`.
2. In Postman, send requests to `http://localhost:3000/items`.
3. For POST and PUT, open **Body**, select **raw** and **JSON**, and add the request body.
4. Check the response and status code for each request.

## Project Structure

```
inventory-api/
├── server.js        # Express server and all routes
├── package.json     # Project details and dependencies
└── README.md
```

## Note

Data is stored in memory (a JavaScript array), so it resets whenever the server restarts.

## Author

Muskan Lalwani - [GitHub](https://github.com/muskanlalwani155-design)
