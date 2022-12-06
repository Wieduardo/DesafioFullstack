interface IUserRequest {
    name:string,
    password:string,
    email:string,
    phone:string
}

interface IUser{
    id: string,
    name:string,
    email:string,
    phone:string,
    createdAt: Date
}

interface IUserId {
    id: string
}

interface IUserUpdate {
    id: string,
    name?: string,
    password?:string,
    email?:string,
    phone?:string,
}

interface IPatch{
    name?: string,
    password?:string,
    email?:string,
    phone?:string,
}

interface IUserLogin {
    email: string,
    password: string
}


export {IUserRequest, IUser, IUserId, IUserUpdate, IUserLogin, IPatch}