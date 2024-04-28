require("dotenv").config();
const mongoose = require("mongoose");// intancio la dependencia monggose
const dbconection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Conexión correcta a la base de datos");
    } catch (err) {
        console.log("Error de conexión a la base de datos:", err);
    }
}
module.exports= dbconection;

