export declare class FetchQl {
    private QUERY_METHOD;
    private END_POINT;
    private HEADERS;
    constructor(endpoint: string);
    setHeaders(headersObject: Record<string, string>): void;
    makeRequest(gql: string, variables: Record<string, string>): Promise<any>;
}
