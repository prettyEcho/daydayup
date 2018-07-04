const Factory = require('./libs/factory');
const sequelize = Factory.sequelize;
const debug = require('debug')('sequelize');

//test connection
sequelize
    .authenticate()
    .then(() => {
        debug("Connection has been established successfully.");
    })
    .catch(err => {
        console.log(err);
        debug("Unable to connect to the database:", err);
    })

//get Dao
const User = Factory.getDao('user');

//force: true creat table
/* User.sync({force: false})
    .then(() => {
        // Table created
        return User.create({
            username: 'echo',
            password: '123',
            email: '15732029828@163.com'
        });
    })
    .catch(err => {
        debug("created error:" + err);
    }); */

//sync and close pool connections
sequelize.sync().then(() => {
    debug("handles before:", process._getActiveHandles().length);
    return sequelize.close().then(() => {
      debug("handles after:", process._getActiveHandles().length);
    })
  })
  .then(() => {
    debug('shutdown gracefully', process._getActiveHandles().length);
  });

module.exports = { 
    User 
};
