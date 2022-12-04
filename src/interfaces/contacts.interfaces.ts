interface IContactRequest {
    name:string,
    email:string,
    number:string
}

interface IContact{
    id: string,
    name:string,
    email:string,
    number:string
}

interface IContactId {
    id: string
}

interface IUserContactID {
    id: string
    contactId: string
}

interface IContactUpdate {
    id: string,
    name?: string,
    email?: string,
    number?: string
}
interface IcontactPatch {
    name?: string,
    email?: string,
    number?: string
}

export {IContact, IContactId, IContactRequest, IContactUpdate, IUserContactID, IcontactPatch}