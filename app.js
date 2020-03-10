const express = require('express');
const app = express();
const House=require('./src/routes/house');
const Project=require('./src/routes/projects')
const bodyParser = require("body-parser");//define req.body type

const db=require('./src/dbConnection');
//test db
db.sequelize
  .sync()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(bodyParser.json({limit:null}));
app.use(bodyParser.urlencoded({extended: false}));
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});

app.use('/api/house',House);
app.use('/api/project',Project);

app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send(`error:${err.status}`);
/*    res.render('error', {
      message: err.message,
      error: err
    });*/
  });
//}
app.listen(2323);