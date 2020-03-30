const Sequelize = require('sequelize');
const { db } = require('./config');

const sequelize = new Sequelize(db.name, db.username, db.password, {
   host: db.host,
   port: db.port,
   dialect: db.dialect,
});

sequelize
    .authenticate()
    .then(() => console.log('Sequelize is initialized'))
    .catch(err => console.log(err));

module.exports = sequelize;