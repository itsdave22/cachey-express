# FAQ

## Is the Cachey core open source?

No. This public repository is intended for documentation, examples, issue tracking, release information and selected integration material. The proprietary Cachey core does not need to be published here.

## Can I use the examples in my own project?

The examples demonstrate how the public package is intended to be integrated. Always verify the exact API against the version of `@cachey/express` you have installed.

## Why is the repository marked UNLICENSED?

Because publishing a repository does not mean we want to grant broad open-source rights to the proprietary project. Individual public components may receive separate terms later if that becomes useful.

## Does Cachey support Redis?

Redis is a focus area for `@cachey/express`. Check the release notes and documentation for your installed version to confirm current availability and configuration.

## What is TTL?

TTL means Time To Live. It defines how long a cache entry may remain valid before it is refreshed or replaced.

## What is SWR?

SWR means Stale-While-Revalidate. It can allow a cached response to be served while fresh data is regenerated. Support and configuration may differ by release.

## Can I cache authenticated routes?

Only with careful cache-key separation and a clear understanding of the response data. Never allow private data from one user to be served to another user through an incorrectly shared cache entry.

## Where should bugs be reported?

Use GitHub Issues for reproducible bugs that are safe to discuss publicly. Security vulnerabilities must be reported according to `SECURITY.md` instead.

## Where is the main documentation?

The product documentation will live at https://cachey.eu/express, while this repository remains the home for source-adjacent documentation, examples, issues and releases.
