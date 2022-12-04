import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { AppError } from '../../erros/appError'
import { IUserId } from '../../interfaces/users.interfaces'

const retrieveUserService = async ({id}: IUserId) => {
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({where: {id: id}})

    if(!user){
        throw new AppError(404,"User does not exist")
    }

    return user
}

export default retrieveUserService