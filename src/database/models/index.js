module.exports={
  House:require('./house'),
};


// 只同步还没在数据库中的模型
// Sync all models that aren't already in the database
//module.exports=()=>sequelize.sync();
