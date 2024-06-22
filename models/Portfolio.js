module.exports = (sequelize, DataTypes) => {
    const Portfolio = sequelize.define('portfolios', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        }
    });
    return Portfolio;
};