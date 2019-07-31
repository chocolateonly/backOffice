const House = (sequelize,DataTypes)=>sequelize.define('house', {
  // attributes
  owner: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  houseType: {
    type: DataTypes.STRING
  },
  tel: {
    type: DataTypes.STRING
  },
  rentOutStartTime: {
    type: DataTypes.STRING
  },
  rentOutEndTime: {
    type: DataTypes.STRING
  },
  status:{
    type: DataTypes.STRING
  },

}, {
  // options
});
module.exports=House;

