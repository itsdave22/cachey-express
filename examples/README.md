# @cachey/express Examples

This directory is reserved for safe, public examples that demonstrate how to use the published `@cachey/express` package.

Examples should consume the package as a normal dependency and must not contain proprietary Cachey implementation details.

## Planned examples

```text
examples/
├── basic/
├── ttl/
├── redis/
├── custom-key/
├── invalidation/
└── stale-while-revalidate/
```

## Example rule

Good public example:

```js
import express from "express";
import { cache } from "@cachey/express";

const app = express();

app.get("/api/status", cache({ ttl: 30 }), (req, res) => {
  res.json({ ok: true, generatedAt: new Date().toISOString() });
});
```

Do not copy internal package source into examples. If an example requires undocumented private behaviour, document the desired public API first instead.

## Production warning

Caching can expose data when cache keys or bypass rules are configured incorrectly. Examples are educational starting points and should be reviewed for each application's authentication, personalization and privacy requirements before production use.
