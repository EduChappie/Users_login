const cadastro = require("express").Router();
const userControler = require("../controller/userControler");
//const database = require("../db/database");

// Rota de criar usuário
cadastro.get("/cadastro", (req, res) => {
    res.render("cadastro.html")
})


// Criando o usuário
cadastro.post("/cadastro/sendMessage", userControler.createUser);

module.exports = cadastro