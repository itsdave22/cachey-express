# Public Architecture Overview

This document explains the public integration model of `@cachey/express` without exposing proprietary Cachey internals.

## Request flow

A typical cached Express route can be understood as:

```text
Client Request
      |
      v
Express Route
      |
      v
@cachey/express middleware
      |
      +--> cached response available? --> return response
      |
      +--> no cached response ---------> execute route handler
                                          |
                                          v
                                     build response
                                          |
                                          v
                                  make response reusable
```

The exact internal implementation may change between releases. Applications should depend on documented public behaviour rather than private implementation details.

## Public integration boundary

Applications interact with Cachey through the published package API. The public repository should document inputs, outputs, configuration, headers, errors and supported integrations.

## Storage backends

Cache storage can be treated as an implementation boundary. Different releases may support memory-backed or external storage strategies. Application code should avoid relying on undocumented backend internals.

## Cache keys

A cache key identifies a reusable response. Good key design normally considers the request path and any request-specific information that changes the response. Never cache personalized or authorization-sensitive responses under a shared key unless the documented configuration explicitly makes that safe.

## Invalidation

Invalidation removes or expires data that should no longer be reused. Public documentation should describe supported invalidation controls without exposing private internal algorithms.

## Observability

Cache behaviour should be diagnosable. Where supported, developers should be able to distinguish useful states such as cache HIT, MISS, bypass or refresh through documented telemetry or response metadata.

## Security boundary

Caching must never become an authorization mechanism. Authentication and permission checks remain application responsibilities. Sensitive responses require appropriate cache controls and key separation.

## Proprietary core

Cachey's proprietary logic, heuristics, infrastructure and internal services can remain private. Public examples should consume supported APIs rather than reimplementing the private core.
