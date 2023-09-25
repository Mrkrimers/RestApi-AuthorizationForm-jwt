const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoute = require('./controller/user.controller')
const cookieParser = require('cookie-parser')

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(bodyParser.json());
app.use(cookieParser());

app.use('/user', userRoute);

app.use((err, request, response, next) => response.send(err.message))

module.exports = app;