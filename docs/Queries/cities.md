---
title: "Cities"
---

Get a list of cities.

### Arguments

| Name | Description |
|---|---|
| filter ([CityFilterInput](../inputs/city-filter-input)) | City filter arguments. |
| pagination ([PaginationInput](../inputs/pagination-input)) | Pagination input arguments. |

### Return Type

[CityConnection](../objects/city-connection)!

### Sample Query

```js title="Find cities with filter and page"
{
  cities(
    filter: { ciso2: "US", sid: 4655 }
    page: { first: 10, after: "eyJjdXJzb3IiOjEyNzc1Mn0=" }
  ) {
    totalCount
    edges {
      cursor
      node {
        name
        state_code
        country_code
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
    "cities": {
      "totalCount": 10,
      "edges": [
        {
          "cursor": "eyJjdXJzb3IiOjEyNzc1M30=",
          "node": {
            "name": "Long Beach",
            "state_code": "CA",
            "country_code": "US"
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjEyNzc1NH0=",
          "node": {
            "name": "Loomis",
            "state_code": "CA",
            "country_code": "US"
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjEyNzc1NX0=",
          "node": {
            "name": "Los Alamitos",
            "state_code": "CA",
            "country_code": "US"
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjEyNzc1Nn0=",
          "node": {
            "name": "Los Alamos",
            "state_code": "CA",
            "country_code": "US"
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjEyNzc1N30=",
          "node": {
            "name": "Los Altos",
            "state_code": "CA",
            "country_code": "US"
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjEyNzc1OH0=",
          "node": {
            "name": "Los Altos Hills",
            "state_code": "CA",
            "country_code": "US"
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjEyNzc1OX0=",
          "node": {
            "name": "Los Angeles",
            "state_code": "CA",
            "country_code": "US"
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjEyNzc2MH0=",
          "node": {
            "name": "Los Angeles County",
            "state_code": "CA",
            "country_code": "US"
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjEyNzc2MX0=",
          "node": {
            "name": "Los Banos",
            "state_code": "CA",
            "country_code": "US"
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjEyNzc2Mn0=",
          "node": {
            "name": "Los Gatos",
            "state_code": "CA",
            "country_code": "US"
          }
        }
      ],
      "pageInfo": {
        "hasNextPage": true,
        "hasPreviousPage": true,
        "endCursor": "eyJjdXJzb3IiOjEyNzc2Mn0=",
        "startCursor": "eyJjdXJzb3IiOjEyNzc1M30="
      }
    }
  }
}
```
