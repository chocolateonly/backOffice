const User = (sequelize,DataTypes)=>sequelize.define('user', {
  // attributes
  name: {
    type: DataTypes.STRING
  },
  role: {
    type: DataTypes.STRING
  }
}, {
  // options
});
module.exports=User;

