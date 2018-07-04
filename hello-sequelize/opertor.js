/* 
    增删改查
*/
const { User } = require('./app');
const { log } = require('./libs/util');
const debug = require('debug')('opertor');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

/* 
//select

// search for known ids
User.findById(1).then(user => {
    debug(user);
    // project will be an instance of Project and stores the content of the table entry
    // with id 123. if such an entry is not defined you will get null
  })
  
// search for attributes
User.findOne({ where: {id: 2} }).then(user => {
    debug(user);
// project will be the first entry of the Projects table with the title 'aProject' || null
})


User.findOne({
    where: {title: 'aUser'},
    attributes: ['id', ['name', 'title']]
}).then(User => {
// project will be the first entry of the Projects table with the title 'aProject' || null
// project.title will contain the name of the project
}) */


/* // limit the results of the query
Project.findAll({ limit: 10 })

// step over the first 10 elements
Project.findAll({ offset: 10 })

// step over the first 10 elements, and take 2
Project.findAll({ offset: 10, limit: 2 })

// yields ORDER BY title DESC
Project.findAll({order: 'title DESC'})

// yields GROUP BY name
Project.findAll({group: 'name'}) */

/* 
[Op.and]: {a: 5},           // AND (a = 5)
[Op.or]: [{a: 5}, {a: 6}],  // (a = 5 OR a = 6)
[Op.gt]: 6,                // id > 6
[Op.gte]: 6,               // id >= 6
[Op.lt]: 10,               // id < 10
[Op.lte]: 10,              // id <= 10
[Op.ne]: 20,               // id != 20
[Op.between]: [6, 10],     // BETWEEN 6 AND 10
[Op.notBetween]: [11, 15], // NOT BETWEEN 11 AND 15
[Op.in]: [1, 2],           // IN [1, 2]
[Op.notIn]: [1, 2],        // NOT IN [1, 2]
[Op.like]: '%hat',         // LIKE '%hat'
[Op.notLike]: '%hat',       // NOT LIKE '%hat'
[Op.iLike]: '%hat',         // ILIKE '%hat' (case insensitive)  (PG only)
[Op.notILike]: '%hat',      // NOT ILIKE '%hat'  (PG only)
[Op.overlap]: [1, 2],       // && [1, 2] (PG array overlap operator)
[Op.contains]: [1, 2],      // @> [1, 2] (PG array contains operator)
[Op.contained]: [1, 2],     // <@ [1, 2] (PG array contained by operator)
[Op.any]: [2,3]            // ANY ARRAY[2, 3]::INTEGER (PG only)
 */

User.findAll()
    .then(result => {   
        for( let i of result ) {
            log(i.dataValues);
        }
    })
    .catch(err => {
        debug(`error: ${err}`)
    })

User.count()
    .then(result => {   
        debug(result);
    })
    .catch(err => {
        debug(`error: ${err}`)
    })


/* 
//destroy

return destroyed raws
*/

/* User.destroy({
    where: {
        'id': {
            [Op.gt]: 1, 
        }
    } 
}).then(result => {
    debug(result);
}).catch(err => {
    debug(err);
})
 */


/* 
//create

*/
/* User.create({
    username: 'jhon',
    password: '123',
    email: '234'
}).then(result => {
    console.log(result.dataValues);
}) */


/* //exists
User.findOrCreate({
    where: {
        username: 'echo'
    },
    defaults: {
        'password': '123',
        'email': '15732029828@163.com'
    }
}).spread((user, created) => {
    console.log(user.dataValues);  
    console.log(created);  
})

//not exists
User.findOrCreate({
    where: {
        username: 'rena'
    },
    defaults: {
        'password': '123',
        'email': '15732029828@163.com'
    }
}).spread((user, created) => {
    console.log(user.dataValues);  
    console.log(created);  
}) */

/* 
//update  

return a array contains the updated rows length
*/

User.update({
    username: 'tony'
},{
    where: {
        username: 'rena'
    }
}).then(result => {
    log(result);
})
