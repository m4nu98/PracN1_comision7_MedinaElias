const express = require ("express");
const router = express.Router();
const userSchema = require("../models/users");


//ENDPOINT ====crear usuario mediante (((POST)))
router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

  module.exports= router;

//ENDPOINT ==== OBTENER TODOS LOS USUSARIO (((GET)))
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//ENDPOINT ====== OBTENER UN USUARIO ESPECIFICO CON EL "ID"(((GET)))
router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//ENDPOINT ====== ACTUALIZAR UN USUSARIO (((((PUT)))))
router.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  userSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//ENDPOINT ====== DELATE(ELIMINAR) UN USUARIO ((((DELATE))))
router.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .deleteOne({ _id: id }) // Utiliza deleteOne en lugar de delare
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;