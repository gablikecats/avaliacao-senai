const Sequelize = require("sequelize")
const database = require("./db.js")

const Ambiente = database.define("ambiente",
{
    id_ambiente:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ambiente:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
})

module.exports = Ambiente