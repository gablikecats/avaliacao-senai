const { Sequelize } = require("sequelize")
const config = require("../config/database.js")
const data = new Sequelize(config)

module.exports = data