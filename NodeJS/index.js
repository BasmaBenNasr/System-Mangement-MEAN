const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db.js');

var app = express();
app.use(bodyParser.json());

app.listen(3000, ()=>console.log('Yes your server is running at port : 3000'))