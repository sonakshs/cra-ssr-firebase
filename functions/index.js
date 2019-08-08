const functions = require('firebase-functions');
const express = require('express');
const path = require("path");
const fs = require("fs");
const util = require('util')
const app = express();

// app.use("/static", express.static(path.join(__dirname, "../build/static")));

app.get("*", (request, response) => {
    response.set("Cache-Control", "no-store");
    const reqpath = request.path ? request.path.split("/") : req.path;
    let indexHTML = fs
      .readFileSync(path.join(__dirname, "hosting", "index.html"))
      .toString();
    const titlePlaceholder = "__TITLE_PLACEHOLDER__";
    const title = "/"+ reqpath[1]+" Title";
    indexHTML = indexHTML.replace(titlePlaceholder, title);
    response.status(200).send(indexHTML);
  });

exports.app = functions.https.onRequest(app);