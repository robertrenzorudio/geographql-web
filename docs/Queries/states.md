---
title: "States"
---

Get a list of states.

### Arguments

| Name | Description |
|---|---|
| filter ([StateFilterInput](../inputs/state-filter-input)) | State filter arguments. |
| pagination ([PaginationInput](../inputs/pagination-input)) | Pagination input arguments. |

### Return Type

[StateConnection](../objects/state-connection)!

### Sample Query

```js title="Find state with filter and page"
{
  states(
    filter: { ciso2: "US" }
    page: { first: 4, after: "eyJjdXJzb3IiOjQ2NTR9" }
  ) {
    totalCount
    edges {
      cursor
      node {
        name
        state_code
        country_code
        latitude
        longitude
      }
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      endCursor
      startCursor
    }
  }
}


```

### Sample Response

```js
{
  "data": {
    "states": {
      "totalCount": 4,
      "edges": [
        {
          "cursor": "eyJjdXJzb3IiOjQ2NTV9",
          "node": {
            "name": "California",
            "state_code": "CA",
            "country_code": "US",
            "latitude": 36.778261,
            "longitude": -119.4179324
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjQ2NTZ9",
          "node": {
            "name": "Colorado",
            "state_code": "CO",
            "country_code": "US",
            "latitude": 39.5500507,
            "longitude": -105.7820674
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjQ2NTd9",
          "node": {
            "name": "Connecticut",
            "state_code": "CT",
            "country_code": "US",
            "latitude": 41.6032207,
            "longitude": -73.087749
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjQ2NTh9",
          "node": {
            "name": "Delaware",
            "state_code": "DE",
            "country_code": "US",
            "latitude": 38.9108325,
            "longitude": -75.5276699
          }
        }
      ],
      "pageInfo": {
        "hasNextPage": true,
        "hasPreviousPage": true,
        "endCursor": "eyJjdXJzb3IiOjQ2NTh9",
        "startCursor": "eyJjdXJzb3IiOjQ2NTV9"
      }
    }
  }
}
```
