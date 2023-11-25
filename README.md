
# EazyRequest

A class for making HTTP requests to an API.

## Installation

```bash
npm install eazy-request
```

## Usage

```javascript
import { EazyRequest } from 'eazy-request';

const api = new EazyRequest('https://api.example.com');

// Make a GET request to the "/users" endpoint
api.get('/users')
 .then(response => console.log(response))
 .catch(error => console.error(error));

// Make a GET request to the "/users" endpoint with query parameters
api.getByParams('/users', { name: 'John Doe', age: 30 })
 .then(response => console.log(response))
 .catch(error => console.error(error));

// Make a POST request to the "/users" endpoint with data
api.post('/users', { name: 'John Doe', age: 30 })
 .then(response => console.log(response))
 .catch(error => console.error(error));

// Make a PATCH request to the "/users/123" endpoint with data
api.patch('/users/123', { name: 'John Doe' })
 .then(response => console.log(response))
 .catch(error => console.error(error));
```

## Methods

### `constructor(baseUrl)`

Constructs a new `EazyRequest` object.

#### Parameters

- `baseUrl` (string): The base URL of the API.

#### Returns

- `EazyRequest`: A new `EazyRequest` object.

### `get(endpoint)`

Makes a GET request to the specified endpoint.

#### Parameters

- `endpoint` (string): The endpoint to make the request to.

#### Returns

- `Promise<any>`: The response from the API.

### `getByParams(endpoint, params)`

Makes a GET request to the specified endpoint with the given parameters.

#### Parameters

- `endpoint` (string): The endpoint to make the request to.
- `params` (Object): The parameters to include in the request.

#### Returns

- `Promise<any>`: The response from the API.

### `post(endpoint, data)`

Makes a POST request to the specified endpoint with the given data.

#### Parameters

- `endpoint` (string): The endpoint to make the request to.
- `data` (Object): The data to include in the request.

#### Returns

- `Promise<void>`:

### `patch(endpoint, data)`

Sends a PATCH request to the specified endpoint with the provided data.

#### Parameters

- `endpoint` (string): The API endpoint to send the request to.
- `data` (object): The data to send in the request body.

#### Returns

- `Promise<object>`: The response from the API.

#### Throws

- `Error`: If the `data` parameter is not an object.

#### Example

```javascript
// Send a PATCH request to the "/users/123" endpoint with the data object { name: "John Doe" }
const response = await api.patch("/users/123", { name: "John Doe" });
console.log(response);
```