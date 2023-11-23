
/**
 * Converts an endpoint string to lowercase and removes any spaces.
 * @param {string} endpoint - The endpoint string to convert.
 * @returns {Object} - An object with the converted endpoint string.
 */
export const endpointToLowerCase = (endpoint) => {
    let endpointToLower = endpoint.split(' ').join('').toLowerCase()
    return {endpointToLower}
}