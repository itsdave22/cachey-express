import express from "express";
import { cache } from "@cachey/express";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/status", cache({ ttl: 30 }), (req, res) => {
  res.json({
    ok: true,
    generatedAt: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Cachey example listening on http://localhost:${port}`);
});
