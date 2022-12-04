import AppDataSource from '../../data-source'
import { AppError } from '../../erros/appError'
import { User } from '../../entities/user.entity'
import { IUserUpdate } from '../../interfaces/users.interfaces'

const patchUserService = async ({id, email, password, name, phone}: IUserUpdate ) =>{

    const usersRepository = AppDataSource.getRepository(User);

    const { affected } = await usersRepository.update(id, {email, password, name, phone})
    if(affected === 0) throw new AppError(404, "user not found");

    return {message: "User updated"};

}

export default patchUserService