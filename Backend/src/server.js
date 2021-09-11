const express = require("express");
const routes = require('./routes')
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes)
app.use(express.json({ limit: '5000mb' }));
app.use(express.urlencoded({ limit: "5000mb" }));
app.listen(3333);