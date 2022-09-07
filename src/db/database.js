// Importação do Mongoose
const mongoose = require("mongoose");

// conexão com mongoose
function connectionDatabase() {
    mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })


const db = mongoose.connection;
// on == quando acontecer algo (por exemplo erro)
db.on("error", (error) => {console.log(error)})

// once = fazer algo uma vez, quando? (por exemplo quando ele abrir)
db.once("open", () => { console.log("Conectado") });

}

module.exports = connectionDatabase

