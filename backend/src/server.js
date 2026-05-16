import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";

const app = express();
const __dirname = path.resolve();

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});

app.get("/books", (req, res) => {
  res.status(200).json({ message: "this is a list of books" });
});

const frontendPath = path.join(__dirname, "frontend", "dist");

app.use(express.static(frontendPath));

app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(ENV.PORT || 3000, () => {
  console.log(`Server is running on port ${ENV.PORT || 3000}`);
});