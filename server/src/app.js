const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoute = require('./controller/user.controller')

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRoute);

app.use((err, request, response, next) => response.send(err.message))

module.exports = app;