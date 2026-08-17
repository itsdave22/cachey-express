# Secure caching checklist

Caching can improve performance, but incorrect cache boundaries can expose private data. Use this checklist before caching a production route.

## Before enabling caching

- Decide whether the response is public or user-specific.
- Identify every request property that can change the response.
- Confirm that authentication and authorization are evaluated correctly.
- Avoid caching secrets, tokens or private account data.
- Decide how and when cached entries are invalidated.

## Authenticated responses

Treat authenticated routes as private by default.

If a response differs by user, tenant, role, locale or permission level, those boundaries must be reflected safely in the cache strategy. A shared cache entry must never cause one user to receive another user's private response.

## Cache keys

A safe cache key may need to account for:

- route path
- query parameters
- selected headers
- locale
- tenant or organization
- authorization context

Do not include raw secrets or access tokens in externally visible cache keys or logs.

## Cookies and headers

Responses that depend on cookies or request headers require extra care. Never assume two requests are equivalent just because their URLs match.

## Invalidating sensitive data

When underlying data changes, invalidate relevant cache entries promptly. This is especially important for permissions, account settings, pricing, inventory and other state where stale data can create security or business problems.

## Logging

Cache HIT/MISS telemetry should avoid collecting secrets, credentials, full authorization headers or sensitive personal data.

## Production rule

When uncertain whether a response is safe to cache, leave it uncached until the cache boundary is understood and tested.

For vulnerability reporting, follow [SECURITY.md](../SECURITY.md).
