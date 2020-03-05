const Sequelize=require('sequelize');

const db = {
  sequelize:new Sequelize('testdb', 'postgres', 'postgres', {
    host: 'localhost',
    port:'5432',
    dialect: 'postgres',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    // 用于数据库连接池的池配置
    pool: {
      max: 5,
      idle: 30000,
      acquire: 60000,
    }
  })
};

db.House=db.sequelize.import('./../database/models/house');
db.User=db.sequelize.import('./../database/models/user');
db.Project=db.sequelize.import('./../database/models/project');

module.exports=db;