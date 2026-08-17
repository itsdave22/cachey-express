# Basic Express example

This example demonstrates the public `@cachey/express` integration boundary without exposing private Cachey implementation details.

## Run

```bash
npm install
npm start
```

Then open:

```text
http://localhost:3000/api/status
```

The route is configured with a 30-second TTL:

```js
app.get("/api/status", cache({ ttl: 30 }), handler);
```

Use this example as a starting point only. Review authentication, personalization, cache keys and privacy requirements before caching production responses.
