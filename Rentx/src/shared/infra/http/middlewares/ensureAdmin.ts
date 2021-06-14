import { NextFunction, Request, Response } from "express";
import UserRepository from "../../../../modules/accounts/infra/typeorm/repositories/UserRepository";
import AppError from "../../../errors/AppError";


async function ensureAdmin(request:Request,response:Response,next:NextFunction){
    const {id} = request.user
    const repository = new UserRepository
    const user = await repository.findById(id)

    if(!user?.isAdmin){
        throw new AppError('User is not admin')
    }

    next()
}

export default ensureAdmin