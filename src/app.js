const express = require("express");
require("dotenv").config();
const dbLanding = require("./router/dbLanding");
const dbNeas = require("./router/dbNeas");
const dbUser = require("./router/dbUser");

const app = express();

require("./db")();

app.use(express.json());

app.use("/landing", dbLanding);
app.use("/neas", dbNeas);
app.use("/user", dbUser);

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Servidor corriendo en http://localhost:${port}`)
);
