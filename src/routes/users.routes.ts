import { application, Router } from 'express'
import { createUserController,listUserController, patchUserController, deleteUserController } from '../controllers/users.controllers'

const userRoutes = Router()

userRoutes.post('', createUserController)
userRoutes.get('', listUserController)
userRoutes.patch('', patchUserController)
userRoutes.delete('', deleteUserController)


export default userRoutes