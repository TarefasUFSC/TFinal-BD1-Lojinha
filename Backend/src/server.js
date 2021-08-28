const express = require("express");
const routes = require('./routes')


const app = express();
// req.query
// req.params
// req.body
app.use(express.json())
app.use(routes)

app.listen(3333);