# Getting started with @cachey/express

This guide covers the public integration surface for `@cachey/express` without exposing the proprietary Cachey core.

## Requirements

- Node.js 18 or newer is recommended.
- An existing Express application.
- A currently published version of `@cachey/express`.

## Install

```bash
npm install @cachey/express
```

## Basic route caching

```js
import express from "express";
import { cache } from "@cachey/express";

const app = express();

app.get(
  "/api/products",
  cache({ ttl: 60 }),
  async (req, res) => {
    res.json({ products: [] });
  }
);

app.listen(3000);
```

The example above expresses the intended public developer experience: add Cachey middleware to a route and define a TTL.

## TTL guidance

A TTL controls how long a cached response may remain reusable.

- `30` seconds: rapidly changing responses
- `300` seconds: moderate-change API data
- `3600` seconds: relatively stable content

Choose TTL values based on how stale a response is allowed to become.

## What belongs in the public repository

This repository may include:

- installation examples
- API usage examples
- integration guides
- troubleshooting
- release notes
- issue templates
- public architecture descriptions

It intentionally does not need to contain the proprietary Cachey caching engine, internal infrastructure, private services or implementation details.

## Next steps

- Read [Caching concepts](./CACHING-CONCEPTS.md)
- Read the [Architecture overview](./ARCHITECTURE.md)
- Check the [Roadmap](../ROADMAP.md)
- Review [Support](../SUPPORT.md)

For the product documentation, visit https://cachey.eu/express.
