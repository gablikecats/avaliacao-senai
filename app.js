const express = require("express")
const app = express()
app.use(express.json())

/*Const para criar tabelas*/

const usuarios_table = require("./usuario.js")
const turma_table = require("./turma.js")
const instituicao_table = require("./instituicao.js")
const curso_table = require("./curso.js")
const ambiente_table = require("./ambiente.js")
const pergunta_table = require("./pergunta.js")
const aspectos_table = require("./aspecto.js")

/*------------------------*/

async function findAspectonaTable(request, response, next){
    const { id_aspecto } = request.body
    const AspectoAlreadyExists = aspectos_table.findByPk(
        aspectos_table.id_aspecto = id_aspecto
    )
    if (!AspectoAlreadyExists) {
        return response.status(400)
        
    }
    request.aspectos_table = AspectoAlreadyExists
    console.log("console log da function :", id_aspecto)

    return next()
}
/**/

const cors = require("cors")
const data = require("./db.js")
const database = require("../config/database.js")
const { request } = require("express")
app.use(cors())

//cadastrar usuario! (feito)
app.post("/senai-avaliacao/cadastro/usuario", async ( request, response ) => {
    try{
        await data.sync()
        const { nome, email_institucional, funcao } = request.body;
        const { registro, senha } = request.headers;
        await usuarios_table.create(
            {
                nome,
                email_institucional,
                registro,
                senha,
                funcao,
            }
        )
        return response.status(201).send("Usuário cadastrado com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

//cadastrar turma! (feito)
app.post("/senai-avaliacao/cadastro/turma", async ( request, response ) => {
    try{
        await data.sync()
        const { id_curso, id_instrutor, turma } = request.body;
        await turma_table.create(
            {
                id_curso,
                id_instrutor,
                turma,
                criado_em: new Date(),
            }
        )
        return response.status(201).send("Turma cadastrada com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

//cadastrar instituição! (feito)
app.post("/senai-avaliacao/cadastro/instituicao", async ( request, response ) => {
    try{
        await data.sync()
        const { instituicao } = request.body;
        await instituicao_table.create(
            {
                instituicao,
                criado_em: new Date(),
            }
        )
        return response.status(201).send("Instituição cadastrada com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

//cadastrar curso! (feito)
app.post("/senai-avaliacao/cadastro/curso", async ( request, response ) => {
    try{
        await data.sync()
        const { id_turma, id_instrutor, curso } = request.body;
        await curso_table.create(
            {
                curso,
                criado_em: new Date(),
            }
        )
        return response.status(201).send("Curso cadastrado com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

//cadastrar ambiente! (feito)
app.post("/senai-avaliacao/cadastro/ambiente", async ( request, response ) => {
    try{
        await data.sync()
        const { ambiente } = request.body;
        await ambiente_table.create(
            {
                ambiente,
                criado_em: new Date(),
            }
        )
        return response.status(201).send("Ambiente cadastrado com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

//cadastrar aspecto! (feito)
app.post("/senai-avaliacao/cadastro/aspecto", async ( request, response ) => {
    try{
        await data.sync()
        const { nome_aspecto } = request.body;
        await aspectos_table.create(
            {
                nome_aspecto,
            }
        )
        return response.status(201).send("Aspecto cadastrado com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

app.post("/senai-avaliacao/cadastro/pergunta", findAspectonaTable, async ( request, response) => {
    try{
        await data.sync()
        const { id_aspecto } = request
        const { pergunta, observacao } = request.body;
        console.log("console log do post:", id_aspecto)
        await pergunta_table.create(
            {
                id_aspecto,
                pergunta,
                observacao,
                createdAt: new Date(),
                updatedAt: new Date(),
            }
        )
        return response.status(201).send("Pergunta cadastrada com sucesso.")
    }

    catch(error){
        return response.status(400).json(error)
    }
});

//procurar todos os usuarios! (feito)
app.get("/senai-avaliacao/usuarios", async (request, response) => {
    try{
        await data.sync()
        
        const usuarios = await usuarios_table.findAll();

        return response.status(201).json(usuarios)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

//procurar usuario pelo nome! (feito)
app.get("/senai-avaliacao/usuario/nome", async (request, response) => {
    try{
        await data.sync()

        const { nome_usuario } = request.body; 
        
        const usuarios = await usuarios_table.findAll({
            where: {
                nome : nome_usuario
            }
        });

        return response.status(201).json(usuarios)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

//procurar usuario pelo registro! (feito)
app.get("/senai-avaliacao/usuario/registro", async (request, response) => {
    try{
        await data.sync()

        const { registro_usuario } = request.body; 
        
        const usuarios = await usuarios_table.findAll({
            where: {
                registro : registro_usuario
            }
        });

        return response.status(201).json(usuarios)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

//procurar usuario pela funcao! (feito)
app.get("/senai-avaliacao/usuario/funcao", async (request, response) => {
    try{
        await data.sync()

        const { funcao_usuario } = request.body; 
        
        const usuarios = await usuarios_table.findAll({
            where: {
                funcao : funcao_usuario
            }
        });

        return response.status(201).json(usuarios)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

//procurar todos as perguntas! (feito)
app.get("/senai-avaliacao/usuarios", async (request, response) => {
    try{
        await data.sync()
        
        const perguntas = await pergunta_table.findAll();

        return response.status(201).json(perguntas)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

//procurar todos os aspectos! (feito)
app.get("/senai-avaliacao/aspectos", async (request, response) => {
    try{
        await data.sync()
        
        const aspectos = await aspectos_table.findAll();

        return response.status(201).json(aspectos)
    }
    catch(error){
        return response.status(400).json(error)
    }
});


app.get("/senai-avaliacao/perguntas", async (request, response) => {
    try{
        await data.sync()
        
        const perguntas = await pergunta_table.findAll();

        return response.status(201).json(perguntas)
    }
    catch(error){
        return response.status(400).json(error)
    }
});

app.listen(3333);