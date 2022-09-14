const Sequelize = require("sequelize")
const database = require("./db.js")

const Instituicao = database.define("instituicao",
{
    id_instituicao:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    instituicao:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
})

module.exports = Instituicao