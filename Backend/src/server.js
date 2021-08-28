const express = require("express");
const routes = require('./routes')
const cors = require("cors");

const app = express();
// req.query
// req.params
// req.body
app.use(cors());
app.use(express.json())
app.use(routes)

app.listen(3333);