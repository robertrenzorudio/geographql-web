---
title: "PaginationInput"
---

### Fields

| Name | Description |
|---|---|
| first (Int) | Returns the first n elements. |
| last (Int) | Returns the last n elements. |
| before (String) | Returns the elements that come before the specified cursor. |
| after (String) | Returns the elements that come after the specified cursor.|

### Unsupported Input Combinations

- Providing both `first` and `last` is not supported
- Using `first` with `before` is not supported
- Using `last` with `after` is not supported
- Using `last` without `before` is not supported
