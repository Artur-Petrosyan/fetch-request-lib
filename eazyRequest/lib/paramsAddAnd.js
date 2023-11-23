/**
 * Converts an object of parameters to a string of URL-encoded parameters.
 * @param {Object} params - The object of parameters to convert.
 * @returns {string} - The URL-encoded string of parameters.
 */
export const paramsAddAnd = params => {
    return Object.entries(params)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
};