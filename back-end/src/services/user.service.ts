import { AppError } from "../errors/app.error";
import { iUserRequest, iUserResponse } from "../interfaces/user.interface";
import { userModel } from "../models/user.model";
import { responseUserSerializer } from "../serializers/user.serializer";

const userService = {
    async create( data: iUserRequest ): Promise<iUserResponse> {
        const { create, findUserByEmail } = new userModel
        
        await findUserByEmail( data.email ).then( user => { throw new AppError( 'User already exist!', 409 ) })

        return await create( data ).then( async ( user ): Promise<iUserResponse> => {
            return await responseUserSerializer.validate( user, { stripUnknown: true })
        })
    },

    async getByEmail( email: string ): Promise<iUserResponse> {
        const { findUserByEmail } = new userModel

        return await findUserByEmail( email ).then( async ( user ): Promise<iUserResponse> => {
            return await responseUserSerializer.validate( user, { stripUnknown: true })
        }).catch( err => {
            throw new AppError( 'User not exists!', 404 )
        })
    }
}

export { userService }
