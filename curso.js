const Sequelize = require("sequelize")
const database = require("./db.js")

const Curso = database.define("curso",
{
    id_curso:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    curso:
    {
        type: Sequelize.STRING(200),
        allowNull: false
    },
})

module.exports = Curso