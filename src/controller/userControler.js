const { v4: uuid } = require("uuid")
const { response } = require("express")
const usuario = require("../models/userModel");

module.exports = {
    async msg(req, res) {
        try {
            const users = await usuario.find()
            return res.status(200).json({ users })

        } catch (err) {
            res.status(500).json({ erro: err.message })

        }
    },


    async createUser(req, res) {
        // Coleta das informações
        const { username, useremail, password } = req.body

        if (!username || !password) {
            res.status(400).json({ status: "valores não informados, usuario ou senha" })
        }

        // criação dos dados estruturados
        const user = new usuario({
            _id: uuid(),
            username,
            email: useremail,
            password
        })

        try {
            // ele ira tentar salvar os dados no banco de dados
            await user.save()
            return res.status(201).json({ msg: "Usuário criado com sucesso" })
        
        } catch (err) {
            req.status(400).json({ error: err.message })
        }

    }
}