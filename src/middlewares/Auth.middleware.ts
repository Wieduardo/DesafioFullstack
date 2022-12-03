import { Request, Response, NextFunction } from 'express'
import jwt, { decode } from 'jsonwebtoken'
import 'dotenv/config'

const ensureAuthMiddleware = async(req: Request, res: Response, next: NextFunction) => {

    let token = req.headers.authorization

    if(!token){
        return res.status(401).json({
            message: 'Invalid token'
        })
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY as string, (error: any, decoded: any) => {
        if(error){
            return res.status(401).json({
                message: 'Invalid token'
            })
        }

        if(!decoded.isAdm){
            return res.status(403).json({
                message: 'User is not admin'
            })
        }

        /*req.user = {
            isAdm: decoded.isAdm,
            id: decoded.sub
        }*/

        next()

    })

}

export { ensureAuthMiddleware }