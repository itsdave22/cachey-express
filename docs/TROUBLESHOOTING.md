# Troubleshooting

This guide covers public integration-level checks for `@cachey/express`.

## The route does not appear to be cached

Check:

1. The middleware is attached to the route you are testing.
2. The configured TTL is greater than zero.
3. The request is actually reaching the same route and cache key.
4. The installed package version supports the configuration you are using.
5. The response is eligible for caching under your current strategy.

## Every request is a cache MISS

Possible causes include:

- the cache key changes between requests
- the TTL is too short
- the cache backend is not persisting entries
- multiple application processes are using isolated in-memory caches
- invalidation runs more often than expected

If the app runs across multiple processes or servers, a shared backend such as Redis may be more appropriate than process-local memory caching.

## Stale data is being returned

Check the TTL and invalidation strategy. If the underlying data changes before the TTL expires, explicit invalidation or a shorter TTL may be necessary.

## Authenticated users receive unexpected data

Disable caching on the affected route immediately and review the cache-key and authorization boundaries. Private responses must never be shared across users or tenants.

See [Secure caching](./SECURE-CACHING.md).

## Memory usage grows unexpectedly

For in-memory caching, review entry count, TTL values and cleanup behavior. Production workloads with large or shared caches may require a dedicated backend.

## A README example does not work with my installed version

The public API may evolve. Check:

```bash
npm list @cachey/express
```

Then compare your installed version with the npm release and GitHub release notes.

## Still stuck?

Read [SUPPORT.md](../SUPPORT.md) and open a GitHub issue with a minimal reproducible example if the problem is safe to discuss publicly.

Do not post credentials, API keys, tokens or private production data in issues.
