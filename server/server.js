const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const db = require("./config/connection");
const path = require("path");
// const { authMiddleware } = require("./utils/auth");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define your routes or middleware here

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`App is now listening on "http://localhost:${PORT}"`);
  });
});
