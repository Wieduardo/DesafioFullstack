import { Request, Response } from 'express'
import jwt from 'jsonwebtoken'
import { instanceToPlain } from 'class-transformer'
import createContactService from '../services/contacts/createContact.service';
import listContactService from '../services/contacts/listContacts.service';
import deleteContactService from '../services/contacts/deleteContact.service';
import patchContactService from '../services/contacts/patchContact.service';

const createContactController = async (req: Request, res: Response) =>{
    const { authorization } = req.headers;
	const token = authorization!
	const { id } = jwt.decode(token) as { id: string };
    const { name, email, number } = req.body;
    const output = await createContactService({
		id,
		name,
        email,
        number
	});
    return res.status(201).json(instanceToPlain(output))
}

const listContactsController = async (req: Request, res: Response) =>{
    const { authorization } = req.headers;
    const { contactId } = req.params;

	const token = authorization!
	const { id } = jwt.decode(token) as { id: string };

    const contacts = await listContactService({id})
    res.json(instanceToPlain(contacts))
}

const deleteContactsController = async (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const { contactId } = req.params;

	const token = authorization!
	const { id } = jwt.decode(token) as { id: string };

    const contacts = await deleteContactService({id,contactId})
    return res.status(204).send();
}

const patchContactController = async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email, number } = req.body;
	const output = await patchContactService({
		id,
        name,
		email,
        number
	});
	return res.status(200).json(output);

}

export {createContactController, listContactsController, deleteContactsController, patchContactController}