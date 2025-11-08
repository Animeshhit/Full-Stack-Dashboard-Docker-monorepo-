import express from "express";

const app = express();

app.get("/", (_req, res) => {
  res.send("API is running");
});

app.listen(8080, () => {
  console.log("API listening on http://localhost:8080");
});
