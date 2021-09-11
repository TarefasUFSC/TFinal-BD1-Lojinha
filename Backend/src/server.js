const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes');
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(routes)
app.listen(3333);