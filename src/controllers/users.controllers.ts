import { Request, Response } from 'express'
import { IUserRequest } from '../interfaces/users.interfaces'
import createUserService from '../services/users/createUser.service'
import listUserService from '../services/users/listUser.service'

const createUserController = (req: Request, res: Response) => {
    try{
        const { name, password, emails, phones, createdAt}: IUserRequest = req.body
        const user = createUserService({ name, password, emails, phones, createdAt})
        return res.status(201).json(user)
    } catch(error) {
        if (error instanceof Error){
            return res.status(400).json({
                message: error.message
            })
        }
    }
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