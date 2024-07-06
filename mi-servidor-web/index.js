const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", function (req, res) {
  fs.readFile("./index.html", function (err, text) {
    //console.log(text.toString());
    res.send(text.toString());
  });
});

app.listen(3000, function () {
  console.log("El servidor arranco");
});
