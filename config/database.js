const { Sequelize, DataTypes } = require('sequelize');
const config = require('../config/config.json');

const env = process.env.NODE_ENV || 'development';
const { database, username, password, host, dialect, port } = config[env];

const sequelize = new Sequelize(database, username, password, {
  host,
  dialect,
  port
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;