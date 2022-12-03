import users from '../../database'
import { IUser } from '../../interfaces/users.interfaces'

const listUserService = (): IUser[] =>{
    return users
}

export default listUserService