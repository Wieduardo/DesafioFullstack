interface IUserRequest {
    name:string,
    password:string,
    emails:string,
    phones:string
}

interface IUserResponse extends IUserRequest{
    id: string,
    createdAt: Date
}

interface IUserId {
    id: string
}

interface IUserUpdate {
    id: string,
    name: string
}


export {IUserRequest, IUserResponse, IUserId, IUserUpdate}