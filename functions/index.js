const functions = require('firebase-functions');
const express = require('express');
const path = require("path");
const fs = require("fs");
const app = express();

const titlePlaceholder = "__TITLE_PLACEHOLDER__";

app.get("*", (request, response) => {
    response.set("Cache-Control", "no-store");
    const reqpath = request.path ? request.path.split("/") : req.path;
    let indexHTML = fs
      .readFileSync(path.join(__dirname, "hosting", "index.html"))
      .toString();
    let title = reqpath[1];
    indexHTML = replaceMetaTitle(indexHTML, title)
    response.status(200).send(indexHTML);
  });
  
const replaceMetaTitle = (html, title) => {
    title = "/"+ title +" Title";
    return html.replace(titlePlaceholder, title);
}

exports.app = functions.https.onRequest(app);