const express = require("express");//estamos importando el módulo Express de nuestra dependencia "EXPRESS".
const dbconection = require("./config");//conexion exzxport a la base de datos mongood ATLAs
const UserRouter = require("./routes/users");
const app = express();//"express()" ES LA FUNCION CONSTRUCTORA DE NUESTRO MODULO EXPRESS AL INSTANCIARLA Y ASIGNARLA A LA "CONST APP" NOS PERMITE utilizar la variable "app" para configurar el servidor web, definir rutas y agregar middleware. 
const port = process.env.PORT || 27017;//definimos en una constante "port" el N de puerto por donde el servidor escuchara nuestras solisitudes. Se puede usar cualquier puerto q uno quiera. 

// creo midelware
app.use(express.json());

app.use("/api", UserRouter);
// mensaje en la web(routes)
app.get("/", (req, res) => {
    res.send("Welcome to my API");
});
//mesnaje de conexion exitosa.(servidor escuchando acl la espera de consultas) 
app.listen(port, () => console.log("el servidor se creo y esta en funcionamiento en el puerto", port));
dbconection();
///................................................................................
