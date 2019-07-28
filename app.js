const express = require('express');
const app = express();
const House=require('./src/routes/house');
const DBManager=require('./src/database/models');
DBManager();

app.use('/api/house',House());

app.get('/api', function(req, res){
  res.send('test:if you can see,it is successfully!!!');
});

app.listen(3000);