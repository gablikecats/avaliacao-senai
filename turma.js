const Sequelize = require("sequelize")
const database = require("./db.js")

const Turma = database.define("turma",
{
    id_turma:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_curso:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    id_instrutor:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    turma:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
})

module.exports = Turma