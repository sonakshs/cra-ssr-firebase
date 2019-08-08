const functions = require('firebase-functions');
const express = require('express');
const path = require("path");
const fs = require("fs");
const util = require('util')
const app = express();

// app.use("/static", express.static(path.join(__dirname, "../build/static")));

app.get("*", (req, response) => {
    response.set("Cache-Control", "no-store");
    console.log(util.inspect(req.params),'req')
    console.log("dirname", __dirname)
    let indexHTML = fs
      .readFileSync(path.join(__dirname, "hosting", "index.html"))
      .toString();
    const titlePlaceholder = "__TITLE_PLACEHOLDER__";
    const title = "My New Title";
    console.log(titlePlaceholder, title,'title')
    indexHTML = indexHTML.replace(titlePlaceholder, title);
    response.status(200).send(indexHTML);
  });

exports.app = functions.https.onRequest(app);