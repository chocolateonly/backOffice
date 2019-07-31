const {
  sequelize,
  Sequelize
}=require('./../../db');

const House = sequelize.define('house', {
  // attributes
  owner: {
    type: Sequelize.STRING
  },
  address: {
    type: Sequelize.STRING
  },
/*  houseType: {
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
  },*/

}, {
  // options
});
module.exports=House;

