import { HTTP_STATUS } from "../constants.ts/http-status.constant";
import { DatabaseException } from "../exceptions/exceptions";
import { IUser } from "../interface/user.interface";
import UserRepository from "../repository/user.repo";
import crypto from 'crypto'

const userrepo = new UserRepository()
async function signupUserServices(
    payload: IUser
){
    const {email,name}=payload

    const sameUsername= await userrepo.searchUser(
        'name',
        name,
        'both'
    )
    if(sameUsername){
        throw new DatabaseException(
            HTTP_STATUS.DATABASE_ERROR.CODE,
            `The name :${name} is already taken `
        )
    }
     const sameEmail= await userrepo.searchUser(
        'email',
        email,
        'both'
    )
    if(sameEmail){
        throw new DatabaseException(
            HTTP_STATUS.DATABASE_ERROR.CODE,
            `The email :${email} is already taken `
        )
    }
    let finalPassword=crypto

}
export {
    signupUserServices
}