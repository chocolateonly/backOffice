const express = require('express');


module.exports=()=>{
  const router=express.Router();

  router.post('/', function(req, res){
    res.send('post!!!');
// 创建新用户

  });
  router.get('/:id', function(req, res){
    res.send('get!!!');
  });
  router.put('/', function(req, res){
    res.send('put!!!');
  });
  router.delete('/:id', function(req, res){
    res.send('delete!!!');
  });
  return router;
};
