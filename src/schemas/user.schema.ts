import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUserRequest } from '../interfaces/users.interfaces'

const userSchema: SchemaOf<IUserRequest> = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
})

export { userSchema }