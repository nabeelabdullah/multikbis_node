
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING
        },
        lastName: {
            type: DataTypes.STRING
        },
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    return User;
};