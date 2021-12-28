---
title: "State"
---

Information about a state.

### Fields

| Name | Description |
|---|---|
| id (Int!) | The id of the state. |
| name (String!) | The name of the state. |
| state_code (String!) | The code designated to the state. Code is unique within the country. |
| country_id (Int!) | The id of the country where the state is located. |
| country_code (String!) | The ISO Alpha-2 code designated to the country where the state is located. |
| cities ([CityConnection](./city-connection)!) | Get a list of cities within the state. |
| latitude (Float!) | The latitude coordinate of the state. |
| longitude (Float!) | The longitude coordinate of the state. |

The field `cities` is the same query as [cities](../queries/cities) but with country and state filter already
applied.
