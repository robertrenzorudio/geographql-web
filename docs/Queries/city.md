---
title: "City"
---

Get a specific city by `id`.

### Arguments

| Name | Description |
|---|---|
| id (Int) | The id of the city.|

### Return Type

[City](../objects/city)

### Sample Query

```js title="Find city by id"
{
  city(id: 127759) {
    # City Fields
    id
    name
    state_id
    country_id
    country_code
    latitude
    longitude
  }
}
```

### Sample Response

```js
{
  "data": {
    "city": {
      "id": 127759,
      "name": "Los Angeles",
      "state_id": 4655,
      "country_id": 236,
      "country_code": "US",
      "latitude": 34.05223,
      "longitude": -118.24368
    }
  }
}
```
