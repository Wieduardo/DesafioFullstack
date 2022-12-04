import { Contact } from '../../entities/contact.entity'
import AppDataSource from '../../data-source'
import { IContactId } from '../../interfaces/contacts.interfaces'

const listContactService = async ({id}:IContactId)=>{

    const contactRepository =AppDataSource.getRepository(Contact)
    const contacts = await contactRepository.find({where: {user: {id: id}}})

    return contacts

}

export default listContactService