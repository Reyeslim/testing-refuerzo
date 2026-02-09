// Paso 4: Test de integración y supertest

const request = require("supertest") // sirve para simular peticiones http
const mongoose = require("mongoose")
const { MongoMemoryServer } = require("mongodb-memory-server")
const app = require("../app.js")

let mongoServer

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create()
  await mongoose.connect(mongoServer.getUri())
})

afterAll(async () => {
  await mongoose.disconnect()
  await mongoServer.stop()
})

describe("POST /users", () => {
  it("should respond 201 and create user", async () => {
    const res = await request(app) // le decimos a supertest que utilice app
      .post("/users") // simula ruta post
      .send({
        username: "Reyes",
        email: "reyes@test.com",
      }) // simula el body

    expect(res.statusCode).toEqual(201) // se espera que devuelva 201
    expect(res.body.username).toBe("Reyes") // se espera que el body devuelva el nombre
  })

  it("should respond 400 if the body is blank", async () => {
    const res = await request(app)
      .post("/users") // simula post
      .send({}) // simula body vacío

    expect(res.statusCode).toEqual(400) // se espera status 400
  })
})
