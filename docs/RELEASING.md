# Releasing @cachey/express

This document defines the recommended release process for `@cachey/express`.

## Versioning

Use semantic versioning:

- **PATCH** — backwards-compatible fixes
- **MINOR** — backwards-compatible features
- **MAJOR** — breaking API or behavior changes

Pre-release versions may use identifiers such as `-beta.1` or `-rc.1` when appropriate.

## Release checklist

1. Confirm the intended changes are merged into `main`.
2. Run the full test and quality-check suite available for the project.
3. Verify package contents before publishing, for example with `npm pack --dry-run`.
4. Confirm README examples match the release API.
5. Update `CHANGELOG.md` with the user-facing changes.
6. Update the package version without inventing or skipping release history.
7. Publish the package to npm using the appropriate Cachey npm account and access settings.
8. Create a matching Git tag using the `vX.Y.Z` format.
9. Create a GitHub Release from that tag.
10. Verify the npm package, GitHub Release, documentation links, and install command after publishing.

## GitHub release title

```text
@cachey/express vX.Y.Z
```

## Release notes structure

```md
## Highlights
Short explanation of the most important change.

## Added
- New features

## Changed
- Behavior or API improvements

## Fixed
- Bug fixes

## Documentation
- Documentation changes

## Upgrade notes
Anything users need to know before updating.
```

Omit empty sections.

## Release channels

Stable releases should use normal semantic versions such as `1.2.0`.

Experimental or validation builds should use explicit pre-release versions rather than publishing unfinished behavior as a stable release.

## Security fixes

For security-sensitive releases, coordinate disclosure according to `SECURITY.md` and avoid publishing exploit details before users have a reasonable opportunity to update.
