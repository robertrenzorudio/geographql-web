---
title: 'CountryFilterInput'
---

An input object for filtering countries.

### Fields

| Name                                           | Description         |
| ---------------------------------------------- | ------------------- |
| region [(Region)](../enums/region.md)          | Filter by region    |
| subregion [(Subregion)](../enums/subregion.md) | Filter by subregion |

If both `region` and `subregion` are supplied, it will filter by `subregion`.
