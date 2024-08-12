const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'senha', {
  dialect: 'mysql',
  host: 'localhost',
});

module.exports = sequelize;
