import AppDataSource from '../../data-source'
import { User } from '../../entities/user.entity'
import { Contact } from '../../entities/contact.entity'
import { IContact } from '../../interfaces/contacts.interfaces'

const createContactService= async ({id, name, email, number}: IContact): Promise<Contact> =>{

    const userRepository = AppDataSource.getRepository(User)
    const contactRepository = AppDataSource.getRepository(Contact)

    const user = await userRepository.findOneBy({
        id: id
    })

    const contact = contactRepository.create({
        name,
        email,
        number,
        user: user!
    })

    await contactRepository.save(contact)

    return contact

}

export default createContactService