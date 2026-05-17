import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";

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



const startServer = async() => {
  try {
    await connectDB();
    app.listen(ENV.PORT || 3000, () => {
      console.log(`Server is running on port ${ENV.PORT}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
}

startServer();
