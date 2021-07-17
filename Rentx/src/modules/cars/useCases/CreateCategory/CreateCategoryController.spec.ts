import request from 'supertest'
import { Connection } from 'typeorm'
import app from '../../../../shared/infra/http/app'
import createConnection from '../../../../shared/infra/typeorm'
import { hash } from 'bcryptjs'
import { v4 as uuid} from 'uuid'

let connection:Connection

describe("Create Category Controller", () => {
    beforeAll(async () => {
        connection = await createConnection()
        await connection.runMigrations()

        const id = uuid()
        const passwordHash = await hash('1234', 8)

        await connection.query(`
            INSERT INTO users(id,name,email,password,"isAdmin",driver_license)
            VALUES ('${id}','useradmin','admin@gmail.com', '${passwordHash}', ${true},'5545454')
        `)
    })

    afterAll(async () => {
        await connection.dropDatabase()
        await connection.close()
    })

    it("should be able to create a new category", async () => {

        const responseToken = await request(app).post('/sign-in').send({
            email: 'admin@gmail.com',
            password: '1234'
        })

        const { refresh_token } = responseToken.body

        const response = await request(app)
        .post("/categories")
        .send({
            name: 'name test',
            description:'category supertest'
        })
        .set({
            Authorization: `Bearer ${refresh_token}`
        })

        expect(response.status).toBe(201)
    })

    it("should not be able to create a new category with name exists", async () => {

        const responseToken = await request(app).post('/sign-in').send({
            email: 'admin@gmail.com',
            password: '1234'
        })

        const { refresh_token } = responseToken.body

        const response = await request(app)
        .post("/categories")
        .send({
            name: 'name test',
            description:'category supertest'
        })
        .set({
            Authorization: `Bearer ${refresh_token}`
        })

        expect(response.status).toBe(400)
    })
})