  module.exports = function (sequelize, DataTypes) {
    const Login = sequelize.define('login', {
      userId: {
        type: DataTypes.INTEGER,
      },
      token: {
        type: DataTypes.STRING
      }
    });
    return Login;
  };