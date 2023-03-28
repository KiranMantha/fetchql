export class FetchQl {
  QUERY_METHOD = "POST";
  END_POINT = "";
  HEADERS = new Headers({
    "Content-Type": "application/json",
  });
  constructor(endpoint) {
    this.END_POINT = endpoint;
  }
  setHeaders(headersObject) {
    for (const prop in headersObject) {
      this.HEADERS.append(prop, headersObject[prop]);
    }
  }
  async makeRequest(gql, variables) {
    const requestBody = {
      query: gql,
    };
    if (variables) {
      requestBody["variables"] = variables;
    }
    const response = await fetch(this.END_POINT, {
      method: this.QUERY_METHOD,
      headers: this.HEADERS,
      body: JSON.stringify(requestBody),
    });
    return await response.json();
  }
}
