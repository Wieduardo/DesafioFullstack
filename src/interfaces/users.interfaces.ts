interface IUserRequest {
    name:string,
    password:string,
    email:string,
    phone:string
}

interface IUser{
    id: string,
    name:string,
    password:string,
    email:string,
    phone:string,
    createdAt: Date
}

interface IUserId {
    id: string
}

interface IUserUpdate {
    id: string,
    name: string
}

interface IUserLogin {
    name: string,
    password: string
}


export {IUserRequest, IUser, IUserId, IUserUpdate, IUserLogin}