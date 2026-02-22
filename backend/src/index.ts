import express from "express";
import { ENV } from "./config/env";
import { clerkMiddleware } from "@clerk/express";

const app = express();

app.use(clerkMiddleware()); // It is a middleware that will check for cookies and set req.auth with the user information if the user is authenticated. It will also set req.session with the session information if the user has an active session. otherwise, it will set req.auth to null and req.session to null.

app.use(express.json()); // It is a middleware that will parse the incoming request body as JSON.

app.use(express.urlencoded({ extended: true })); // It is a middleware that will parse the incoming request body as URL-encoded data and make it available on req.body. The extended option allows for rich objects and arrays to be encoded into the URL-encoded format, which can be useful for complex data structures.

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
