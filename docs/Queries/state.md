---
title: "State"
---

Get a specific state by id or locationCode.

### Arguments

| Name | Description |
|---|---|
| id (Int) | The id of the state.|
| locationCode ([StateCountryCodeInput](../inputs/state-country-code-input)) | The state-country code pair of the state.|
State code is not unique while state-country code pair is.

### Return Type

[State](../objects/state)

### Sample Query

```js title="Find state by locationCode"
{
  state(locationCode: { country_code: "US", state_code: "CA" }) {
    # State Fields
    id
    name
    country_id
    cities(page: { first: 4 }) {
      totalCount
      edges {
        cursor
        node {
          id
          name
        }
      }
    }
    # ...
  }
}
```

### Sample Response

```js
{
  "data": {
    "state": {
      "id": 4655,
      "name": "California",
      "country_id": 236,
      "cities": {
        "totalCount": 4,
        "edges": [
          {
            "cursor": "eyJjdXJzb3IiOjEyNzIwMX0=",
            "node": {
              "id": 127201,
              "name": "Acalanes Ridge"
            }
          },
          {
            "cursor": "eyJjdXJzb3IiOjEyNzIwMn0=",
            "node": {
              "id": 127202,
              "name": "Acton"
            }
          },
          {
            "cursor": "eyJjdXJzb3IiOjEyNzIwM30=",
            "node": {
              "id": 127203,
              "name": "Adelanto"
            }
          },
          {
            "cursor": "eyJjdXJzb3IiOjEyNzIwNH0=",
            "node": {
              "id": 127204,
              "name": "Agoura"
            }
          }
        ]
      }
    }
  }
}
```
