import config from "./config/config";
import { handleDefault } from "./controllers/default";
import { handleTestTwo } from "./controllers/test-two";
import path from "path";

var express = require("express");
var app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", async function (req, res) {
  const results = await handleDefault();
  res.render("results", { results: results });
});

app.get("/testTwo", async function (req, res) {
  const resp = await handleTestTwo();
  console.log(resp);
  res.send(resp.result);
});

app.listen(config.port, function () {
  console.log(`Server listening on ${config.port}`);
});
