import users from '../../database'
import {v4 as uuidv4} from 'uuid'
import { IUserRequest, IUserResponse } from '../../interfaces/users.interfaces'

const createUserService = ({name, password, emails, phones, createdAt}: IUserRequest): IUserResponse =>{

    const newUser: IUserResponse ={
        id: uuidv4(),
        name,
        password,
        emails,
        phones,
        createdAt
    }

    users.push(newUser)

    return newUser
}

export default createUserService