import { InMemoryUsersRepository } from "../../../users/repositories/in-memory/InMemoryUsersRepository"
import { ICreateUserDTO } from "../../../users/useCases/createUser/ICreateUserDTO"
import { OperationType } from "../../entities/Statement"
import { InMemoryStatementsRepository } from "../../repositories/in-memory/InMemoryStatementsRepository"
import {CreateStatementUseCase} from './CreateStatementUseCase'
import { ICreateStatementDTO } from "./ICreateStatementDTO"

let statementRepositoryInMemory:InMemoryStatementsRepository
let userRepositoryInMemoryu:InMemoryUsersRepository
let statementUseCase:CreateStatementUseCase

describe("Create Statment", () => {

  beforeEach(() => {
    statementRepositoryInMemory = new InMemoryStatementsRepository
    userRepositoryInMemoryu = new InMemoryUsersRepository
    statementUseCase = new CreateStatementUseCase(
      userRepositoryInMemoryu,
      statementRepositoryInMemory
    )
  })

  it("Should be able create a new statment", async () => {
    const user:ICreateUserDTO = {
      name:'teste',
      email: 'teste@gmail.com',
      password: '1234'
    }

    const newUSer = await userRepositoryInMemoryu.create(user)
    const data: ICreateStatementDTO = {
      user_id: newUSer.id as string,
      description: 'teste',
      amount:25,
      type:OperationType.DEPOSIT
    }

    const sattemt = await statementUseCase.execute(data)

    expect(sattemt).toHaveProperty("id")
  })
})
