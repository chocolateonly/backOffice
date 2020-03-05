const user=require('./user')
const Project = (sequelize,DataTypes)=>sequelize.define('project', {
  // attributes
  title: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  time: {
    type: DataTypes.DATE
  },
  status: {
    type: DataTypes.STRING
  },
  createdBy:{
    type: DataTypes.STRING,
/*    references:{
      model:user,
      key:'id'
    }*/
  },
}, {
  // options
});
module.exports=Project;

