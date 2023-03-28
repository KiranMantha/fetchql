[![GitHub contributors](https://img.shields.io/github/contributors/kiranmantha/fetchql)](https://GitHub.com/KiranMantha/fetchql/graphs/contributors/) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://GitHub.com/KiranMantha/fetchql/pulls)

# fetchql

a utility to make graphql calls using fetch api

# Getting Started

1. install the package by running `npm install fetchql` or `yarn add fetchql`
2. import it as `import { FetchQl } from 'fetchql';`
3. Initialize FetchQl by passing graphql endpoint as

```javascript
const fetchql = new FetchQl("<-your-graphql-endpoint->");
```

4. By default fetchql add `"Content-Type": "application/json"` header. You can set any other headers by passing headers object as

```javascript
fetchql.setHeaders({ header1: "value1", header2: "value2" });
```

5. finally to make api calls:

```javascript
fetchql.makeRequest(<graphql-query>, <variables-object>);
```

6. `makeRequest` function is compatible with graphql `query` or `mutation` and it returns a promise. the variables object is optional.
7. `fetchql` is compatible with typescript as it got its own declaration file.