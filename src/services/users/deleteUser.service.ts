import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { IUserId } from '../../interfaces/users.interfaces'
import { AppError } from '../../erros/appError'

const deleteUserService = async ({id}: IUserId): Promise<void> =>{
    
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOne({where: {id: id}})

    if(!user){
        throw new AppError(404,"User does not exist")
    }

    await userRepository.delete({id:id})

}

export default deleteUserService