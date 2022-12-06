import { User } from '../../entities/user.entity'
import AppDataSource from '../../data-source'
import { IUser, IUserRequest } from '../../interfaces/users.interfaces'
import { AppError } from '../../erros/appError'

const createUserService = async ({name, password, email, phone}: IUserRequest): Promise<IUser> =>{
    
    const userRepository = AppDataSource.getRepository(User);

    const userAlreadyExists = await userRepository.findOne({where: {email: email}});

    if(userAlreadyExists){
        throw new AppError(401,"User already exists");
    }

    const user = userRepository.create({
        name,
        password,
        email,
        phone
    })

    await userRepository.save(user);

    return user;

}

export default createUserService