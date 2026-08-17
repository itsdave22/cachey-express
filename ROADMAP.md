# @cachey/express Roadmap

This roadmap describes the public direction of `@cachey/express` without exposing proprietary implementation details.

## Guiding principles

- Keep Express integration simple.
- Prefer predictable behaviour over hidden magic.
- Make caching observable and debuggable.
- Keep advanced internals private where they are part of Cachey's proprietary core.
- Document public APIs before considering them stable.

## Near term

- [ ] Stabilize the public middleware API.
- [ ] Publish complete installation and quick-start documentation.
- [ ] Document TTL behaviour and recommended defaults.
- [ ] Add safe, runnable examples that consume the published package.
- [ ] Document cache HIT / MISS behaviour.
- [ ] Improve error messages and migration notes.

## Next

- [ ] Redis integration documentation.
- [ ] Custom cache-key documentation.
- [ ] Cache invalidation documentation.
- [ ] Stale-While-Revalidate usage guide.
- [ ] Metrics and telemetry documentation.
- [ ] Production deployment guidance.

## Later

- [ ] Framework integration guides.
- [ ] Advanced observability examples.
- [ ] Performance comparison methodology.
- [ ] More adapters and integrations where they fit the Cachey ecosystem.

## Versioning

The project follows semantic versioning for public releases whenever possible:

- Patch: bug fixes and backwards-compatible maintenance.
- Minor: backwards-compatible features.
- Major: breaking public API changes.

Pre-1.0 releases may evolve more quickly. Always read the release notes before upgrading production applications.

## Public vs private development

This repository may contain documentation, examples, issue templates and selected public integration code. Proprietary Cachey implementation details can remain in private repositories and do not need to be published here.

Roadmap items are directional and are not promises of release dates.
