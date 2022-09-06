const cadastro = require("express").Router();
const database = require("../db/database");

// Rota de criar usuário
cadastro.get("/cadastro", (req, res) => {
    res.render("cadastro.html")
})


// Criando o usuário
cadastro.post("/cadastro/sendMessage", (req, res) => {
    // Coleta das informações
    const fast = req.body
    newUser = {
        "username": fast.username,
        "password": fast.password
    }


    if (newUser["username"].length && newUser["password"].length) {
        database.push({
            "username": newUser["username"],
            "password": newUser["password"],
            "id": `${parseInt(Math.random()*300)}`
        })
        res.redirect("/")
        console.log("==> Atenção <==")
        console.log("==> Sua conta foi criada, mas pela API ainda não possuir banco de dados, não será permitido você entrar")
        console.log(database)
    }
})

module.exports = cadastro