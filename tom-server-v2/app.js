const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const stuffRoutes = require("./routes/game");
const userRoutes = require("./routes/user");

const app = express();

const PORT = process.env.PORT || 5001;

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

mongoose
  .connect(
    "mongodb+srv://TomSewer:SewerTheBetter42@tomwork0-loahx.gcp.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

app.use("/api/stuff", stuffRoutes);
app.use("/api/auth", userRoutes);

app.listen(PORT, () => console.log(`Server has started on port ${PORT}.`));

module.exports = app;
