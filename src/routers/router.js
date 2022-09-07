const express = require("express")
const router = express.Router()

const userController = require("../controller/userControler");

//Importação das rotas
const login = require('./login');
const cadastro = require("./cadastro")


//Rota padrão
router.get("/", (req, res) => {
    res.render('index.html');
})
//Rota main
router.get("/main/:user/:id", (req, res) => {
    res.send("Seja Bem vindo " + req.params.user)
})


router.get("/showUsers", userController.msg)


module.exports = [
    router,
    login,
    cadastro
]