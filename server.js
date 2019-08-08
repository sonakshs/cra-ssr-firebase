//ExpressJS server to host the static build/ 

const express = require("express");
const path = require("path");
const fs = require("fs");

const PORT = process.env.PORT || 3001;

const app = express();

app.use("/static", express.static(path.join(__dirname, "build/static")));

app.get("*", function(request, response) {
  response.set("Cache-Control", "no-store");
  let indexHTML = fs
    .readFileSync(path.join(__dirname, "build", "index.html"))
    .toString();
  const titlePlaceholder = "__TITLE_PLACEHOLDER__";
  const title = "My New Title";
  console.log(titlePlaceholder, title,'title')
  indexHTML = indexHTML.replace(titlePlaceholder, title);
  response.status(200).send(indexHTML);
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
