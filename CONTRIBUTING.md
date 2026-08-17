# Contributing to @cachey/express

Thanks for helping improve Cachey. Contributions are welcome when they are focused, documented, and safe for existing users.

## Before you start

- Search existing issues before opening a new one.
- For larger features, open a feature request first so the direction can be discussed.
- Never include secrets, API keys, credentials, private URLs, or production data in issues, commits, examples, or tests.
- Security vulnerabilities must be reported privately according to `SECURITY.md`.

## Development workflow

1. Fork the repository.
2. Create a branch from `main`.
3. Make one focused change per pull request where practical.
4. Add or update tests when behavior changes.
5. Update documentation for user-facing changes.
6. Run the relevant checks locally.
7. Open a pull request with a clear explanation of the problem and solution.

Suggested branch names:

```text
feat/redis-adapter
fix/cache-key-normalization
docs/ttl-examples
chore/dependency-update
```

## Commit messages

Use concise, descriptive commit messages. Conventional-style prefixes are encouraged:

```text
feat: add cache tag invalidation
fix: handle empty response bodies
docs: clarify ttl configuration
test: cover cache miss behavior
chore: update development tooling
```

## Pull requests

A good pull request should explain:

- What problem it solves
- What changed
- How it was tested
- Whether the change affects public APIs or existing behavior
- Whether documentation or migration notes are required

Keep unrelated refactors out of feature and bug-fix pull requests whenever possible.

## Compatibility

Avoid breaking public APIs without prior discussion. If a breaking change is necessary, document the impact and provide a migration path where possible.

## Documentation

Examples should be minimal, runnable, and safe to copy. Do not document a feature as available until it exists in the corresponding package release.

## Code of Conduct

By participating in this project, you agree to follow `CODE_OF_CONDUCT.md`.

Thank you for contributing to Cachey. 🐿️
