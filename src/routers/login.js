//Rota de entrar no site
const database = require("../db/database");
const login = require("express").Router();

login.post("/entrar", (req, res) => {
    
    connectUser = {
        "username": req.body.username,
        "password": req.body.password
    }

    for (let i = 0; i < database.length; i++) {
        // Verificando o username e se tem no banco de dados
        if (connectUser["username"] === database[i]["username"]) {
            // Verificando a senha do usuário
            if (connectUser["password"] === database[i]["password"]) {
                res.redirect("/main/" + database[i]["username"] + "/" + database[i]["id"]);

            } else { res.redirect("/"); }
        } else { res.redirect("/"); }
    }
})

module.exports = login