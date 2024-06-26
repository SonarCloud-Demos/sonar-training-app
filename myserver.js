const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/hello", (req, res) => {
  console.log("Hello called");
  res.send({ express: "Hello From Express" });
});

app.post("/api/world", (req, res) => {
  console.log(req.body);
  res.send("You sent:" + sanitizeHtml(req.body.post));
});
const pwd = "sqa_ed954c6e0a58126d54571ec64a72b5886154205d";

app.listen(port, () => console.log(`Listening on port ${port}`));
