const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const fuckedRoutes = require("./routes/fucked.js");
const hateRoutes = require("./routes/hate.js");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(fuckedRoutes);
app.use(hateRoutes);

app.use((req, use, next) => {
  res.status(404).send("Pagina nao encontrada");
});

app.listen(3000);
