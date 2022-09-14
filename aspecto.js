const Sequelize = require("sequelize")
const database = require("./db.js")

const Aspecto = database.define("aspecto",
{
    id_aspecto:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome_aspecto:
    {
        type: Sequelize.STRING(200),
        allowNull: false,
        unique: true
    },
})

module.exports = Aspecto