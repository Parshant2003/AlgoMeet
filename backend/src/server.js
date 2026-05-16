import express from "express";
import { ENV } from "./lib/env.js";
import path from "path";

const app = express();
const __dirname = path.resolve();

// API route
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy" });
});

// API route
app.get("/books", (req, res) => {
  res.status(200).json({ message: "this is a list of books" });
});

// Production mode me frontend build serve karo
// express.static() CSS, JS, images ko serve karega
if (ENV.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/dist")));

  // React Router ke liye catch-all route
  // Ye tab chalega jab koi API route match nahi hoga
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
  });
}

// Server start
app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`);
});