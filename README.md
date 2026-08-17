# @cachey/express 🐿️

**Fast, flexible caching middleware for Express.js.**

`@cachey/express` is the developer-focused caching package from [Cachey](https://cachey.eu). It aims to make response caching easier to add to Express applications while keeping configuration understandable and predictable.

[![npm](https://img.shields.io/npm/v/@cachey/express?label=npm)](https://www.npmjs.com/package/@cachey/express)
[![Website](https://img.shields.io/badge/Website-cachey.eu-00a6ff)](https://cachey.eu/express)

## Installation

```bash
npm install @cachey/express
```

## Quick start

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

> The public API may evolve between releases. Check the installed package version and release notes before upgrading production applications.

## Why Cachey?

Caching can reduce repeated work, improve response times and lower load on application servers. Cachey is designed around an Express-friendly developer experience with simple integration and room for more advanced caching strategies.

## Focus areas

- Express middleware integration
- TTL-based response caching
- Predictable cache keys
- Cache HIT / MISS visibility
- Memory caching
- Redis-backed caching
- Cache invalidation
- Stale-While-Revalidate strategies
- Performance and telemetry tooling

Feature availability can vary by package version. Use the published package documentation and GitHub releases as the source of truth for a specific release.

## Usage

### Route-level caching

```js
app.get(
  "/api/products",
  cache({ ttl: 60 }),
  async (req, res) => {
    const products = await loadProducts();
    res.json(products);
  }
);
```

### TTL examples

Use shorter TTL values for frequently changing data and longer TTL values for content that changes rarely.

```js
cache({ ttl: 30 });
cache({ ttl: 300 });
cache({ ttl: 3600 });
```

## Documentation

- Cachey: https://cachey.eu
- `@cachey/express`: https://cachey.eu/express
- npm: https://www.npmjs.com/package/@cachey/express
- [Public architecture overview](./docs/ARCHITECTURE.md)
- [Examples](./examples/README.md)
- [Roadmap](./ROADMAP.md)
- [Support](./SUPPORT.md)
- [Public repository policy](./docs/PUBLIC-REPOSITORY-POLICY.md)
- [Release process](./docs/RELEASING.md)

## Roadmap

The public roadmap covers API stabilization, documentation, Redis, invalidation, SWR, telemetry, production guidance and future integrations.

➡️ [View the full roadmap](./ROADMAP.md)

## Source-code strategy

The public Cachey repository is intended for documentation, examples, issue tracking, release information and selected integration code. The proprietary core implementation does not need to be published here.

No open-source license is granted by this repository unless a specific file or component explicitly states otherwise. A separate package or component may use its own license terms.

## Security

Please **do not report security vulnerabilities in public issues**. Read [SECURITY.md](./SECURITY.md) for the responsible disclosure process.

## Contributing

Bug reports, documentation improvements and feature proposals are welcome. Read [CONTRIBUTING.md](./CONTRIBUTING.md) before opening a pull request.

Please also follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

---

**Consent. Cache. Kontrolle.** 🐿️💙
