# EazyRequest

EazyRequest is a JavaScript class that provides a simple way to make HTTP requests to an API. It supports GET and POST requests, and allows you to pass parameters as an object or as a query string.

## Installation

You can install EazyRequest using npm or yarn:

```
npm install eazyrequest
```

```
yarn add eazyrequest
```

## Usage

To use EazyRequest, you first need to create an instance of the class and pass in the base URL of your API:

```
import EazyRequest from 'eazy-request';

const api = new EazyRequest('https://api.example.com');
```

Then, you can use the `get` and `post` methods to make requests to your API:

```
// Make a GET request with no parameters
const response = await api.get('/users');

// Make a GET request with parameters
const response = await api.get('/users', { page: 1, limit: 10 });

// Make a POST request with data
await api.post('/users', { name: 'John Doe', email: 'john.doe@example.com' });
```

## Methods

### `get(endpoint, params)`

Makes a GET request to the specified endpoint with the specified parameters.

- `endpoint` (string): The endpoint to make the request to.
- `params` (object): An object containing the parameters to include in the query string.

Returns a Promise that resolves to the response data.

### `post(endpoint, data)`

Makes a POST request to the specified endpoint with the specified data.

- `endpoint` (string): The endpoint to make the request to.
- `data` (object): An object containing the data to include in the request body.

Returns a Promise that resolves to the response data.

## License

EazyRequest is licensed under the MIT License. See the LICENSE file for more information.