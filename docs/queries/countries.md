---
title: 'Countries'
---

Get a list of countries.

### Arguments

| Name                                                             | Description                |
| ---------------------------------------------------------------- | -------------------------- |
| filter ([CountryFilterInput](../inputs/country-filter-input.md)) | Country filter arguments   |
| pagination ([PaginationInput](../inputs/pagination-input.md))    | Pagination input arguments |

### Return Type

[CountryConnection](../objects/country-connection.md)!

### Sample Query

```js title="Find countries with filter and page"
{
  countries(
    filter: { subregion: South_Eastern_Asia }
    page: { first: 5, after: "eyJjdXJzb3IiOjE1Mn0" }
  ) {
    totalCount
    edges {
      cursor
      node {
        id
        name
        iso3
        emoji
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
    "countries": {
      "totalCount": 4,
      "edges": [
        {
          "cursor": "eyJjdXJzb3IiOjE3NX0=",
          "node": {
            "id": 175,
            "name": "Philippines",
            "iso3": "PHL",
            "emoji": "π΅π­"
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjIwMH0=",
          "node": {
            "id": 200,
            "name": "Singapore",
            "iso3": "SGP",
            "emoji": "πΈπ¬"
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjIyMn0=",
          "node": {
            "id": 222,
            "name": "Thailand",
            "iso3": "THA",
            "emoji": "πΉπ­"
          }
        },
        {
          "cursor": "eyJjdXJzb3IiOjI0M30=",
          "node": {
            "id": 243,
            "name": "Vietnam",
            "iso3": "VNM",
            "emoji": "π»π³"
          }
        }
      ],
      "pageInfo": {
        "hasNextPage": false,
        "hasPreviousPage": true,
        "endCursor": "eyJjdXJzb3IiOjI0M30=",
        "startCursor": "eyJjdXJzb3IiOjE3NX0="
      }
    }
  }
}
```
