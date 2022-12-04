import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IcontactPatch, IContactRequest } from '../interfaces/contacts.interfaces'


const contactSchema: SchemaOf<IContactRequest> = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    number: yup.string().required()
})

const contactPatchSchema: SchemaOf<IcontactPatch> = yup.object().shape({
    name: yup.string(),
    email: yup.string().email(),
    number: yup.string()
})

export { contactSchema, contactPatchSchema }