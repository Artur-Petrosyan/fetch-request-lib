import { paramsAddAnd } from "./lib/paramsAddAnd";
import { endpointToLowerCase } from "./lib/endpointToLowerCase";


/**
 * A class for making HTTP requests to an API.
 * @class
 * @param {string} baseUrl - The base URL of the API.
 */
export class EazyRequest {
    /**
     * Constructs a new EazyRequest object.
     * @constructor
     * @param {string} baseUrl - The base URL of the API.
     */
    constructor(baseUrl) {
        if (baseUrl && typeof baseUrl === 'string') {
            this.baseURL = baseUrl;
        } else {
            return new Error('base URL must be string')
        }
    }

    /**
     * Makes an HTTP request to the API.
     * @async
     * @param {string} endpoint - The endpoint to make the request to.
     * @param {string} method - The HTTP method to use.
     * @param {Object} data - The data to include in the request.
     * @returns {Promise<any>} - The response from the API.
     */
    async #request(endpoint, method = "GET", data) {
        try {
            const response = await fetch(`${this.baseURL}${endpoint}`, {
                method,
                "body": data ? JSON.stringify(data) : undefined,
            });

            return await response.json();
        } catch (err) {
            console.log(err);
        }
    }


    /**
     * Makes a GET request to the specified endpoint.
     * @async
     * @param {string} endpoint - The endpoint to make the request to.
     * @returns {Promise<any>} - The response from the API.
     */
    async get(endpoint) {
        if (endpoint) {
            try {
                if (typeof endpoint === 'string') {
                    return await this.#request(endpoint, "GET")
                }
                throw new Error("endpoint type must be string")
            } catch (e) {
                console.log(e)
            }
        } else {
            throw new Error("endpoint must be not empty")
        }
    }

    /**
     * Makes a GET request to the specified endpoint with the given parameters.
     * @async
     * @param {string} endpoint - The endpoint to make the request to.
     * @param {Object} params - The parameters to include in the request.
     * @returns {Promise<any>} - The response from the API.
     */
    async getByParams(endpoint, params) {

        if (params) {
            try {
                if (typeof params === 'object' && Object.keys(params).length) {
                    try {
                        if (!Array.isArray(params)) {
                            let paramsStr = paramsAddAnd(params);
                            let {endpointToLower} = endpointToLowerCase(endpoint)
                            return await this.#request(`${endpointToLower}?${paramsStr}`, "GET");
                        } else {
                            throw new Error('must be a object not array')
                        }

                    } catch (e) {
                        return console.log(e)
                    }

                } else {
                    throw new Error("params must be a non-empty object");
                }
            } catch (e) {
                return console.log(e);
            }
        } else {
            throw new Error("params must be object")
        }
    }

    /**
     * Makes a POST request to the specified endpoint with the given data.
     * @async
     * @param {string} endpoint - The endpoint to make the request to.
     * @param {Object} data - The data to include in the request.
     * @returns {Promise<void>}
     */
    async post(endpoint, data) {
        try {
            if (data) {
                return await this.#request(endpoint, "POST", data);
            } else {
                throw new Error('data must be object')
            }

        } catch (e) {
            console.log(e)
        }
    }

    /**
     * Sends a PATCH request to the specified endpoint with the provided data.
     *
     * @async
     * @param {string} endpoint - The API endpoint to send the request to.
     * @param {object} data - The data to send in the request body.
     * @returns {Promise<object>} - The response from the API.
     * @throws {Error} - If the data parameter is not an object.
     *
     * @example
     * // Send a PATCH request to the "/users/123" endpoint with the data object { name: "John Doe" }
     * const response = await api.patch("/users/123", { name: "John Doe" });
     * console.log(response);
     */
    async patch(endpoint, data) {
        try {
            if (typeof data === 'object' && Object.keys(data).length) {
              return await this.#request(endpoint, "PATCH", data)
            } else {
                throw new Error('data must be object')
            }

        } catch (e) {
            console.log(e)
        }
    }
}