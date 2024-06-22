const sequelize = require('../config/database');
const { Sequelize, DataTypes } = require('sequelize');

const models = {
 Share : require('./Share')(sequelize, DataTypes),
 Portfolio : require('./Portfolio')(sequelize, DataTypes),
 Transaction : require('./Transaction')(sequelize, DataTypes)
}

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
      models[modelName].associate(models);
  }
});

models.Transaction.associate = (models) => {
  models.Transaction.belongsTo(models.Portfolio, { foreignKey: 'portfolioId' });
  models.Transaction.belongsTo(models.Share, { foreignKey: 'shareId' });
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

const db = {
  ...models,
  sequelize,
  Sequelize
};

module.exports = db;
