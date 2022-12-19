const mongoose = require('mongoose')

module.exports = function () {
    // console.log(process.env.MONGO_URI)
   mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Conectado a mongodb..."))
    .catch((err) => console.log("ERROR FATAL: ", err))
}
