// PASO 3: Testing con express
// no usamos app.listen para que jest no intente abrir el puerto 3000 en cada test
const express = require("express")
const User = require("./models/User.js")
const app = express()

app.use(express.json())

app.post("/users", async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).send(user)
  } catch (error) {
    res.status(400).send(error)
  }
})

module.exports = app
