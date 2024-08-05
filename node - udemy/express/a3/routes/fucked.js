const path = require("path");

const express = require("express");

const router = express.Router();

const rootDir = require("../util/path");

router.get("/get-fucked", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "get-fucked.html"));
});

router.post("/get-fucked", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
