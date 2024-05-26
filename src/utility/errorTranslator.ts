export const translateErrorCode = (statusCode: number): string => {
    switch (statusCode) {
        case 400:
            return "Bad Request: The request was unacceptable, often due to a missing or misconfigured parameter.";
        case 401:
            return "Unauthorized: Your API key is wrong.";
        case 403:
            return "Forbidden: You have reached your monthly API request limit.";
        case 404:
            return "Not Found: The requested resource could not be found.";
        case 429:
            return "Too Many Requests: You have made too many requests in a given amount of time. Please wait a while before making new requests";
        case 500:
            return "Internal Server Error: We had a problem with our server. Try again later.";
        case 503:
            return "Service Unavailable: The server is not ready to handle the request.";
        default:
            return `Unexpected Error: An unexpected error occurred. Status code: ${statusCode}`;
    }
};
