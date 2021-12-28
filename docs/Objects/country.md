---
title: "Country"
---

Information about a country.

### Fields

| Name | Description |
|---|---|
| id (Int!) | The id of the country. |
| name (String!) | The name of the country. |
| iso2 (ID!) | The two-letter code (ISO Alpha-2) designated to the country. |
| iso3 (ID!) | The three-letter code (ISO Alpha-2) designated to the country. |
| numeric_code (ID!) | The three-digit code (ISO numeric) designated to the country. |
| phone_code (ID!) | The dialing code of the country. |
| states ([StateConnection](./state-connection)!) | Get a list of states/provinces/regions within the country. |
| cities ([CityConnection](./city-connection)!) | Get a list of cities within the country. |
| capital (String!) | The capital city of the country. |
| currency (String!) | The currency of the country. |
| currency_symbol (String!) | The currency symbol of the country. |
| tld (String!) | The top-level domain of the country. |
| native (String!) | The native name of the country. |
| region (String!) | The region where the country is located. |
| subregion (String!) | The subregion where the country is located. |
| timezones ([[Timezone](./timezone)!]!) | The timezones in the country. |
| translations ([JSONObject](./json-object)!) | The translation of the country's name in several languages. |
| latitude (Float!) | The latitude coordinate of the country. |
| longitude (Float!) | The longitude coordinate of the country. |
| emoji (String!) | The emoji flag of the country. |
| emojiU (String!) | The unicode of the country's emoji flag. |

- The field `states` is the same query as [states](../queries/states) but with country already applied.
- The field `cities` is the same query as [cities](../queries/cities) but uses [CountryCitiesFilterInput](../inputs/country-cities-filter-input) for filtering.
