module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define('transactions', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    value: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    portfolioId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shareId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  Transaction.associate = (models) => {
    Transaction.belongsTo(models.Portfolio, {
      foreignKey: 'portfolioId', 
      as: 'portfolio',
      allowNull: false
    });
    Transaction.belongsTo(models.Share, {
      foreignKey: 'shareId',
      as: 'share',
      allowNull: false
    });
  };

  return Transaction;
};