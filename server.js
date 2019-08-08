const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function(req, res) {
  res.set("Cache-Control", "public, max-age=300, s-maxage=600");
  let indexHTML = fs
    .readFileSync(path.join(__dirname, "build", "index.html"))
    .toString();
  res.status(200).send(indexHTML);
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
