var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cons = require('consolidate');
var indexRouter = require('./routes/index');
var contactRouter = require('./routes/contact');
var projectRouter = require('./routes/project');
var resumeRouter = require('./routes/resume');
// var feedRouter = require('./routes/feedback');

const mongoose = require('mongoose');
const url="mongodb://localhost:27017/Myprofile";
const connect = mongoose.connect(url);
connect.then((db)=>{
      console.log("Succesfully connected to the server");
},(err)=>{ console.log(err);});

var app = express();
app.engine('html', cons.swig);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '/public')));
app.use('/public', express.static('public'));
app.use('/', indexRouter);
app.use('/contact', contactRouter);
app.use('/project', projectRouter);
app.use('/resume', resumeRouter);
// app.post('/post-feedback', function (req, res) {
//   connect.then(function(db) {
//       db.collection('Myprofile').insertOne(req.body);
//   });    
//   res.send('Data received:\n' + JSON.stringify(req.body));
// });
// app.use('/post-feedback', feedRouter);

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
  res.render('error');
});

module.exports = app;
