import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ENV } from "./lib/env.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const frontendPath = path.resolve(__dirname, "../../frontend/dist");

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

app.use(express.static(frontendPath));

app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

app.listen(ENV.PORT || 3000, () => {
  console.log(`Server is running on port ${ENV.PORT || 3000}`);
});