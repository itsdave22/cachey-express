# Public Repository Policy

This repository is the public home for `@cachey/express` documentation, examples, issue tracking and release information.

## What may be public

- README and product documentation
- Installation and integration guides
- Example applications that consume the published package
- Public API examples
- Changelog and release notes
- Issue and pull-request templates
- Non-sensitive benchmarks and methodology
- Selected integration helpers explicitly intended for publication

## What should remain private

- Proprietary cache-engine internals
- Internal algorithms and heuristics
- Private infrastructure and deployment configuration
- Secrets, credentials, tokens and private endpoints
- Internal telemetry implementation details
- Abuse-prevention logic that would weaken security if disclosed
- Unreleased commercial features unless intentionally announced

## Examples

Public examples should demonstrate how a developer uses the package without copying private implementation details into this repository.

Preferred:

```js
import { cache } from "@cachey/express";

app.get("/api/products", cache({ ttl: 60 }), handler);
```

Avoid publishing internal source simply to explain what the package does. Explain behaviour at the public API boundary instead.

## Licensing

This repository does not grant an open-source license by default. Individual files or components may carry separate explicit license terms when needed.

The published npm package may have separate distribution or license terms from this repository. Those terms should be documented clearly before a stable commercial release.

## Security

Never commit passwords, API keys, signing keys, npm tokens, database credentials or private `.env` files. If a secret is committed accidentally, rotate it immediately; deleting the GitHub file alone is not sufficient.
