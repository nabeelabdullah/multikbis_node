"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var sequelize = new Sequelize('mydb', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});
var db = {};

fs
    .readdirSync(__dirname)
    .filter(function (file) {
        return (file.indexOf(".") !== 0) && (file !== "index.js") && (file !== 'buyer_db.js');
    })
    .forEach(function (file) {
        var model = sequelize["import"](path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        console.log("associate");
        db[modelName].associate(db);
    }
});

module.exports = db;

  