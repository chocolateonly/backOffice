const Sequelize=require('sequelize');

const sequelize = new Sequelize('house', 'postgres', 'postgres', {
  host: 'localhost',
  port:'5432',
  dialect: 'postgres'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
});
//test
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const House = sequelize.define('house', {
  // attributes
  owner: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
  houseType: {
    type: Sequelize.STRING
  },
  tel: {
    type: Sequelize.STRING
  },
  rentOutStartTime: {
    type: Sequelize.STRING
  },
  rentOutEndTime: {
    type: Sequelize.STRING
  },
  status:{
    type: Sequelize.STRING
  },

}, {
  // options
});
// 只同步还没在数据库中的模型
// Sync all models that aren't already in the database
module.exports=()=>sequelize.sync();
