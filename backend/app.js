const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const config = require('./config');
const express = require('express');
const cookieParser = require('cookie-parser');
const redirectToHTTPS = require('express-http-to-https').redirectToHTTPS


const errorCode = require('./errorCode.js');
const indexRouter = require('./routes/index');

const app = express();

 
// Don't redirect if the hostname is `localhost:port` or the route is `/insecure`
app.use(redirectToHTTPS([/localhost:(\d{4})/], [/\/insecure/], 301));

// view engine setup
app.set('views', path.join(__dirname, 'dist'));
app.set('jwt-secret', config.jwt_secret);

app.use(cors());
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/js', express.static(path.join(__dirname, 'dist', 'js')));
app.use('/css', express.static(path.join(__dirname, 'dist', 'css')));
app.use('/img', express.static(path.join(__dirname, 'dist', 'img')));

app.use('/', indexRouter);

// error handler
app.use(function(err, req, res, next) {
    console.log('err: ', err);
    const error = errorCode[err.status || 500];
    console.log('error: ', error);
    res.status(error.status || 500).json(error.msg || 'Internal Server Error');
});

module.exports = app;
