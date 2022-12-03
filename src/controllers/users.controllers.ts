import { instanceToPlain } from 'class-transformer'
import { Request, Response } from 'express'
import { IUserRequest } from '../interfaces/users.interfaces'
import createUserService from '../services/users/createUser.service'
import listUserService from '../services/users/listUser.service'

const createUserController = async (req: Request, res: Response) => {
   const{name,email,password,phone}: IUserRequest = req.body
   const user = await createUserService({name, password, email, phone})
   return res.status(201).json(instanceToPlain(user))
}

const listUserController = (req: Request, res: Response) => {
    try{
        const users = listUserService()
        return res.json(users)
    } catch(error) {
        if (error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

const patchUserController = (req: Request, res: Response) => {
    try{

    } catch(error) {
        if (error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

const deleteUserController = (req: Request, res: Response) => {
    try{

    } catch(error) {
        if (error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
}

export {createUserController, listUserController, patchUserController, deleteUserController}