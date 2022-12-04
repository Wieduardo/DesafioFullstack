import { User } from '../../entities/user.entity'
import AppDataSource from '../../data-source'
import { AppError } from '../../erros/appError'
import jwt  from 'jsonwebtoken'

const loginUserService = async (email:string , password:string)=>{

    const userRepository = AppDataSource.getRepository(User) 

    const user = await userRepository.findOne({where: {email: email}})

    if (!user) {
        throw new AppError(404, "Wrong email/password")
    }

    const token = jwt.sign({id: user.id}, String(process.env.SECRET_KEY),{expiresIn: '1d'})


    return {"token":token};

}

export default loginUserService