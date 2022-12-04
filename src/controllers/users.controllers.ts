import { instanceToPlain } from 'class-transformer'
import { Request, Response } from 'express'
import { IUserRequest } from '../interfaces/users.interfaces'
import createUserService from '../services/users/createUser.service'
import listUserService from '../services/users/listUser.service'
import deleteUserService from '../services/users/deleteUser.service'
import loginUserService from '../services/users/loginUser.service'
import jwt from 'jsonwebtoken'
import patchUserService from '../services/users/patchUser.service'
import retrieveUserService from '../services/users/retrieveUser.service'

const createUserController = async (req: Request, res: Response) => {
   const{name,email,password,phone}: IUserRequest = req.body
   const user = await createUserService({name, password, email, phone})
   return res.status(201).json(instanceToPlain(user))
}

const listUserController = async (req: Request, res: Response) => {
    const user = await listUserService();
	return res.json(instanceToPlain(user));
}

const retrieveUserController= async (req: Request, res: Response) => {
    const { authorization } = req.headers;
	const token = authorization!
	const { id } = jwt.decode(token) as { id: string };
    const retrieveUser = await retrieveUserService({id});

	return res.json(instanceToPlain(retrieveUser));
}

const patchUserController = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
	const token = authorization!
	const { id } = jwt.decode(token) as { id: string };
	const { email, password, name, phone } = req.body;
	const output = await patchUserService({
		id,
		email,
		password,
        name,
        phone
	});
	return res.status(200).json(output);
}

const deleteUserController = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
	const token = authorization!
	const { id } = jwt.decode(token) as { id: string };
    const deleteUser = await deleteUserService({id});
	return res.status(204).send();
}

const loginUserController = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	const token = await loginUserService(email, password);
	return res.status(200).json(token);
};

export {createUserController, listUserController, patchUserController, deleteUserController, loginUserController, retrieveUserController}