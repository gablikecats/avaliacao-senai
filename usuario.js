const Sequelize = require("sequelize")
const database = require("./db.js")

const Usuario = database.define("usuario",
{
    id:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    email_institucional:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    registro:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    senha:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
    funcao:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
})

module.exports = Usuario