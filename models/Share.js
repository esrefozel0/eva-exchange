module.exports = (sequelize, DataTypes) => {
    const Share = sequelize.define('shares', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        symbol: {
            type: DataTypes.STRING(3),
            allowNull: false,
            unique: true,
            validate: {
                isUppercase: true,
                len: [3, 3]
            }
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false
        }
    }, {paranoid: true});
    return Share;
};