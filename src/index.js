require("dotenv").config();

const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const connectionDatabase = require("./db/database")
const router = require("./routers/router")

connectionDatabase()

const app = express()

// configuração do Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Configuração para html e pasta Public
app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, "public"))
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')



// ""Importação das rotas""
for (let i = 0; i < router.length; i++) {
    app.use(router[i])
}

// Comando para rodar o servidor
const port = 3031
app.listen(port, console.log("http://localhost:3031"))