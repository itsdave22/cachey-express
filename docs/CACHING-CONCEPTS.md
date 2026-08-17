# Caching concepts

This document explains the concepts around `@cachey/express` at a public integration level. It does not document proprietary implementation details.

## Cache HIT

A cache HIT means a reusable cached response was found for a request. The application may be able to return that response without repeating the expensive work behind the route.

## Cache MISS

A cache MISS means no reusable cached response is available. The request continues to the application, and the resulting response may then become cacheable according to the configured strategy.

## TTL

TTL means **Time To Live**. It defines how long a cached entry may remain valid before it should be refreshed or replaced.

Short TTLs favor freshness. Longer TTLs can reduce more repeated work.

## Cache keys

A cache key identifies which requests belong to the same cached entry. Good cache-key design is important whenever responses vary by URL, query parameters, headers, locale, authentication state or other request properties.

Never share cached personalized responses between users unless the cache strategy explicitly separates them safely.

## Invalidation

Invalidation removes or expires cached data before its normal TTL when the underlying data has changed.

Examples include:

- a product was edited
- an article was published
- an account setting changed
- an administrator explicitly clears cached data

## Stale-While-Revalidate

Stale-While-Revalidate (SWR) is a strategy where a previously cached value may temporarily be served while a fresh value is generated in the background. Whether and how a given Cachey release supports SWR should always be verified against its release documentation.

## Memory and Redis

In-memory caching can be simple and fast for a single process, while Redis can provide a shared cache across multiple processes or servers. Production requirements determine which approach is appropriate.

## Security rule

Do not cache sensitive or user-specific responses by default. Authentication, cookies, authorization context and private data must be considered before enabling caching on a route.

For product-specific configuration, use the documentation for the exact installed release of `@cachey/express`.
