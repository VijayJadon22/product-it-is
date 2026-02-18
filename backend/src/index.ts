import express from "express";
import { ENV } from "./config/env";

const app = express();

const PORT = ENV.PORT || 3002;

app.get("/", (req, res) => {
  return res.json({ message: "You app is live" });
});

const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT: ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
