const Sequelize=require('sequelize');

const sequelize = new Sequelize('testdb', 'postgres', 'postgres', {
  host: 'localhost',
  port:'5432',
  dialect: 'postgres',/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  // 用于数据库连接池的池配置
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  }
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

module.exports={
  sequelize,
  Sequelize
};