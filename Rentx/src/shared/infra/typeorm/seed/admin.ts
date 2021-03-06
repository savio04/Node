import { getConnection } from 'typeorm'
import { hash } from 'bcryptjs'
import createConnection from  '../index'

async function create(){
    const connection = await createConnection('localhost')
    const passwordHash = await hash('1234', 8)

    await connection.query(`
        INSERT INTO users(name,email,password,"isAdmin",driver_license)
        VALUES ('useradmin','admin@gmail.com', '${passwordHash}', ${true},'5545454')
    `)

    await connection.close()
}

create().then((response) => {
    console.log(response)
})