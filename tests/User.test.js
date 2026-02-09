// PASO 2: Realizar tests del modelo user

const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")
const User = require("../models/User.js")

// declaramos variable para el servidor

let mongoServer

// Configuramos la db en memoria
beforeAll(async () => {
  // antes de nada
  mongoServer = await MongoMemoryServer.create() // creamos la db en memoria
  await mongoose.connect(mongoServer.getUri()) // nos conectamos con mongoose a esa db en memoria, trayendo la uri con getUri()
})

afterAll(async () => {
  //después de todo
  await mongoose.disconnect() // nos desconectamos del server
  await mongoServer.stop() // paramos el server en memoria
})

// agrupamos los tests de user

describe("User model tests", () => {
  // it define test individual
  it("should save an user correctly", async () => {
    const userData = { username: "Reyes", email: "reyes@test.com" } // creamos objeto con datos de usuario
    const user = new User(userData) // creamos nuevo usuario
    const savedUser = await user.save() // guardamos el user en la bd

    // hacemos las comprobaciones
    expect(savedUser._id).toBeDefined() // se espera que el _id exista
    expect(savedUser.username).toBe(userData.username) // esperamos que el username sea igual
  })

  it("should fail if username is missing", async () => {
    const userData = { email: "test@test.com" } // los datos sin username
    const user = new User(userData) // creamos nuevo usuario
    let error // declaramos variable vacía de error

    try {
      await user.save() // intentamos guardar el usuario
    } catch (err) {
      error = err // a la variable error le asignamos el valor de err (que dará al intentar guardar el user)
    }

    expect(error).toBeDefined() // se espera que haya un error
  })
})
