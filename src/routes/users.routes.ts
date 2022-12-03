import { Router } from 'express'
import { createUserController,listUserController, patchUserController, deleteUserController } from '../controllers/users.controllers'
import { validationMiddleware } from '../middlewares/validation.middleware'
import { userSchema } from '../schemas/user.schema'

const userRoutes = Router()

userRoutes.post('/users', validationMiddleware(userSchema), createUserController)
userRoutes.get('/users', listUserController)
userRoutes.patch('/users/:id', patchUserController)
userRoutes.delete('/users/:id', deleteUserController)


export default userRoutes