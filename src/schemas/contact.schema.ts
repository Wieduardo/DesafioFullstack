import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IContactRequest } from '../interfaces/contacts.interfaces'


const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required()
})

export { contactSchema }