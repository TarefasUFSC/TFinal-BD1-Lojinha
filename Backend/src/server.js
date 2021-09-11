const express = require("express");
const routes = require('./routes')
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes)
app.use(express.json({ limit: '50mb', extended: true }));
app.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.listen(3333);