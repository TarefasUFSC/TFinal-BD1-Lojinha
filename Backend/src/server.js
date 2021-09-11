const express = require("express");
const routes = require('./routes')
const cors = require("cors");
const bodyParser = require('body-parser')
const app = express();

app.use(cors());
app.use(express.json())
app.use(routes)
var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 10, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({ extended: true, limit: 1024 * 1024 * 10, type: 'application/x-www-form-urlencoded' });
app.use(jsonParser);
app.use(urlencodedParser);
app.listen(3333);