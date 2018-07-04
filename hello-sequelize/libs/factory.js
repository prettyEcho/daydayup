const Sequelize = require('sequelize')
const config = require('../conf/orm')
const debug = require('debug')('sequelize:dao:factory');

const Factory = {
  Sequelize,
  //DB Relation
  createSequelizeInstance() {
    if (typeof Factory.sequelize === 'undefined') {
      debug('create new instance...');
      //db config
      return new Sequelize(config.database, 
          config.username, 
          config.password,
          config.option);
    }
  },
  getDao(model) {
      return Factory.sequelize.import(model, require(`../models/${model}`));
  }
}

Factory.sequelize = Factory.createSequelizeInstance(); //创建实例
module.exports = Factory;