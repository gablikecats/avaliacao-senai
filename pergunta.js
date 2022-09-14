const Sequelize = require("sequelize")
const database = require("./db.js")

const Pergunta = database.define("pergunta",
{
    id_pergunta:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_aspecto:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    pergunta:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    observacao:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
})

module.exports = Pergunta