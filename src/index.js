const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const database = require("./database")

const app = express()

// configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configuração para html e pasta Public
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, "public"))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')


//Rota padrão
app.get("/", (req, res) => {
    res.render('index.html');
})
//Rota main
app.get("/main/:user/:id", (req, res) => {
    res.send("Seja Bem vindo " + req.params.user)
})

//Rota de entrar no site
app.post("/entrar", (req, res) => {
    
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

// Rota de criar usuário
app.get("/cadastro", (req, res) => {
    res.render("cadastro.html")
})
// Criando o usuário
app.post("/cadastro/sendMessage", (req, res) => {
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

// Comando para rodar o servidor
const port = 3031
app.listen(port, console.log("http://localhost:3031"))