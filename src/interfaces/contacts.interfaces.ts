interface IContactRequest {
    name:string,
    password:string,
    email:string,
    phone:string
}

interface IContact{
    id: string,
    name:string,
    email:string,
    phone:string
}

interface IContactId {
    id: string
}

interface IContactUpdate {
    id: string,
    name: string,
    email: string,
    phone: string
}

export {IContact, IContactId, IContactRequest, IContactUpdate}