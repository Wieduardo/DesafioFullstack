import AppDataSource from '../../data-source'
import { AppError } from '../../erros/appError'
import { Contact } from '../../entities/contact.entity'
import { IContactUpdate } from '../../interfaces/contacts.interfaces'

const patchContactService = async ({id, name, email, number}: IContactUpdate) =>{

    const contactRepository = AppDataSource.getRepository(Contact)

    const { affected } = await contactRepository.update(id, {name, email, number})
    if(affected === 0) throw new AppError(404, "Contact not found");

    return {message: "Contact updated"};

}

export default patchContactService