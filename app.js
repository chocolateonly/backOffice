const express = require('express');
const app = express();
const House=require('./src/routes/house');
const bodyParser = require("body-parser");//define req.body type

const db=require('./src/db');
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

app.use('/api/house',House);


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
app.listen(3000);