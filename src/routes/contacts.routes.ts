import { application, Router } from 'express'
import { createContactController, deleteContactsController, listContactsController, patchContactController } from '../controllers/contacts.controllers'
import { verifyTokenAuthMiddleware } from '../middlewares/verifyToken.middleware'
import { validationMiddleware } from '../middlewares/validation.middleware'
import { contactPatchSchema, contactSchema } from '../schemas/contact.schema'

const contactRoutes = Router()

contactRoutes.post('', verifyTokenAuthMiddleware,validationMiddleware(contactSchema), createContactController)
contactRoutes.get('', verifyTokenAuthMiddleware, listContactsController)
contactRoutes.patch('/:contactId', verifyTokenAuthMiddleware, validationMiddleware(contactPatchSchema), patchContactController)
contactRoutes.delete('/:contactId', verifyTokenAuthMiddleware, deleteContactsController )


export default contactRoutes