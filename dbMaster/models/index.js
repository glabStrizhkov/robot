'use strict';

const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const basename = path.basename(__filename);
const db = {};
let modelList = [];

const { DATABASE, DB_USER, DB_PASSWORD } = process.env;
console.log(process.env);

const sequelize = new Sequelize(DATABASE, DB_USER, DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DIALECT,
  logging: false
})

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;

    modelList.push(model.name);
  });


db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.Op = Sequelize.Op;
db.modelList = modelList;

module.exports = db;
