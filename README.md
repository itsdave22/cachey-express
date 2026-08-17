# @cachey/express

Fast, flexible caching middleware for Express.js.

Reduce response times, lower server load and add intelligent
caching to your Express APIs with only a few lines of code.

## Installation

npm install @cachey/express

## Quick Start

import express from "express";
import { cache } from "@cachey/express";

const app = express();

app.get(
  "/api/products",
  cache({ ttl: 60 }),
  async (req, res) => {
    // ...
  }
);

⚡ Features
📦 Installation
🚀 Quick Start
🧠 Cache strategies
🗄️ Memory Cache
🔴 Redis
♻️ Stale-While-Revalidate
🔑 Cache Keys
🧹 Invalidation
📊 Cache Hit / Miss
⚙️ Configuration
🧪 Examples
📈 Benchmarks
🔐 Security
📚 Documentation
