---
sidebar_position: 6
title: 'Rate Limit'
---

## Query Cost

Queries are assigned a point representing the complexity of the request.
There are two types of query cost:
[Requeted Query Cost](rate-limit.md#requested-query-cost) and
[Actual Query Cost](rate-limit.md#actual-query-cost), which serves
different purpose in rate limiting.

- Requeted Query Cost: This is used to check if the query exceeds the [maximum allowed query complexity](rate-limit.md#maximum-query-complexity). It is also used to check
  if the requester has enough [points](rate-limit.md#rate-limit).
- Actual Query Cost: Requester's [points](rate-limit.md#rate-limit) is deducted by this value after resolving the query.

### Requested Query Cost

The requested query cost is the maximum possible cost of the query and is calculated
before the resolving the query. It is calculated as follows:

```js {2} title="Simple Query"
{
  countries(page: { first: 1 }) {
    totalCount
    edges {
      cursor
      node {
        id
        name
        # ...
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

```js title="calculation"
  1 (Country)
------------------
= 1 (Total Points)
```

---

```js {2,10,15,22} title="Nested Query"
{
  countries(page: { first: 10 }) {
    totalCount
    edges {
      cursor
      node {
        id
        name
        # ...
        states(page: { first: 5 }) {
          totalCount
          # ...
          edges {
            node {
              cities(page: { first: 3 }) {
                totalCount
                # ...
              }
            }
          }
        }
        cities(page: { first: 5 }) {
          totalCount
          # ...
        }
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

```js title="calculation"
   10 (Countries)
   50 (10 Countries x 5 States)
  150 (10 Countries x 5 States x 3 cities)
+  50 (10 Countries x 5 Cities)
------------------------------------------
= 260 (Total Points)
```

### Actual Query Cost

It is possible that the actual query cost is smaller than requested query
cost. For example consider the following query: `countries(page: { first: 5 }) {...}`
and suppose that it only returns **3** countries. Then we have:

- Calculated query cost = 5
- Actual query cost = 3

The actual query cost is calculated the same way as the requested query cost. It is
calculated after resolving the query and using the actual number of retuned data.

### Maximum Query Complexity

The maximum allowed query cost is: `1000 points`.

## Rate Limit

The rate limit is `10000 points` per IP address per hour.

Option for more points using API key is currently in development.
