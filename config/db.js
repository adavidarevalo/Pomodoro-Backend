const mongoose = require('mongoose')
require("dotenv").config({path:"variable.env"})


const conectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_Mongo, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB Conectada');
    } catch (error) {
        console.log('hubo un error')
        console.log(error);
        process.exit(1)
    }
}

module.exports = conectDB;