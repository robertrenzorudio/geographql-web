---
title: 'Country'
---

Get a specific country by `id`, `iso2`, `iso3`, or `numeric_code`.

### Arguments

| Name              | Description                                                    |
| ----------------- | -------------------------------------------------------------- |
| id (Int)          | The id of the country.                                         |
| iso2 (Id)         | The two-letter code (ISO Alpha-2) designated to the country.   |
| iso3 (Id)         | The three-letter code (ISO Alpha-2) designated to the country. |
| numeric_code (Id) | The three-digit code (ISO numeric) designated to the country.  |

### Return Type

[Country](../objects/country.md)

### Sample Query

```js title="Find country by iso3"
{
  country(iso3: "USA") {
    # Country Fields
    id
    name
    iso2
    capital
    tld
    states(page: { first: 2 }) {
      totalCount
      edges {
        cursor
        node {
          id
          name
        }
      }
    }
    currency
    currency_symbol
    emoji
    # ...
  }
}
```

### Sample Response

```js
{
  "data": {
    "country": {
      "id": 236,
      "name": "United States",
      "iso2": "US",
      "capital": "Washington",
      "tld": ".us",
      "states": {
        "totalCount": 2,
        "edges": [
          {
            "cursor": "eyJjdXJzb3IiOjQ2NDl9",
            "node": {
              "id": 4649,
              "name": "Alabama"
            }
          },
          {
            "cursor": "eyJjdXJzb3IiOjQ2NTB9",
            "node": {
              "id": 4650,
              "name": "Alaska"
            }
          }
        ]
      },
      "currency": "USD",
      "currency_symbol": "$",
      "emoji": "🇺🇸"
    }
  }
}
```
