export class FetchQl {
    private QUERY_METHOD = "POST";
    private END_POINT = "";
    private HEADERS = new Headers({
      "Content-Type": "application/json",
    });
  
    constructor(endpoint: string) {
      this.END_POINT = endpoint;
    }
  
    setHeaders(headersObject: Record<string, string>): void {
      for (const prop in headersObject) {
        this.HEADERS.append(prop, headersObject[prop]);
      }
    }
  
    async makeRequest(gql: string, variables: Record<string, string>): Promise {
      const requestBody = {
        query: gql,
      };
  
      if (variables) {
        requestBody["variables"] = variables;
      }
  
      const response = await fetch(this.END_POINT, {
        method: this.QUERY_METHOD,
        headers: this.HEADERS,
        body: JSON.stringify(requestBody) as string,
      });
      return await response.json();
    }
  }
  