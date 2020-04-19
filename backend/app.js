const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const config = require('./config');
const express = require('express');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');

const indexRouter = require('./routes/index');

const app = express();

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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
//   res.render('error');
});

module.exports = app;
