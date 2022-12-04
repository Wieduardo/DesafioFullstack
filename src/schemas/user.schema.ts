import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IPatch, IUserLogin, IUserRequest, IUserUpdate } from '../interfaces/users.interfaces'

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required()
})

const userLoginSchema: SchemaOf<IUserLogin> = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
})

const userPatchSchema: SchemaOf<IPatch> = yup.object().shape({
    name: yup.string(),
    password: yup.string(),
    email: yup.string().email(),
    phone: yup.string()
})


export { userSchema, userLoginSchema, userPatchSchema }