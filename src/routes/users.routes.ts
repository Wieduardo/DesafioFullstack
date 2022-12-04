import { Router } from 'express'
import { createUserController,listUserController, patchUserController, deleteUserController, loginUserController, retrieveUserController } from '../controllers/users.controllers'
import { validationMiddleware } from '../middlewares/validation.middleware'
import { verifyTokenAuthMiddleware } from '../middlewares/verifyToken.middleware'
import { userLoginSchema, userPatchSchema, userSchema } from '../schemas/user.schema'

const userRoutes = Router()

userRoutes.post('', validationMiddleware(userSchema), createUserController)
userRoutes.get('', listUserController)
userRoutes.patch('', verifyTokenAuthMiddleware, validationMiddleware(userPatchSchema), patchUserController)
userRoutes.delete('', verifyTokenAuthMiddleware, deleteUserController)
userRoutes.post('/login', validationMiddleware(userLoginSchema), loginUserController)
userRoutes.get('/user', verifyTokenAuthMiddleware, retrieveUserController )


export default userRoutes