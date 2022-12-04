import { Contact } from '../../entities/contact.entity'
import AppDataSource from '../../data-source'
import {  IUserContactID } from '../../interfaces/contacts.interfaces'
import { AppError } from '../../erros/appError'

const deleteContactService = async ({id,contactId}:IUserContactID)=>{

    const contactRepository =AppDataSource.getRepository(Contact)
    const contacts = await contactRepository.find({where: {user: {id: id}}})

    if (!contacts) {
        throw new AppError(404, "Sem registros")
    }

    await contactRepository.delete({id:contactId})

}

export default deleteContactService