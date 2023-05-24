import { AppError } from "../errors/app.error";
import { iUserRequest, iUserResponse, iUserUpdate } from "../interfaces/user.interface";
import { userModel } from "../models/user.model";
import { responseUserSerializer } from "../serializers/user.serializer";

const userService = {
    async create( data: iUserRequest ): Promise<iUserResponse> {
        const { create, findByEmail } = new userModel
        
        await findByEmail( data.email ).then( user => { throw new AppError( 'User already exist!', 409 ) })

        return await create( data ).then( async ( user ): Promise<iUserResponse> => {
            return await responseUserSerializer.validate( user, { stripUnknown: true })
        })
    },

    async getById( id: string ): Promise<iUserResponse> {
        const { findByEmail } = new userModel

        return await findByEmail( id ).then( async ( user ): Promise<iUserResponse> => {
            return await responseUserSerializer.validate( user, { stripUnknown: true })
        }).catch( err => { throw new AppError( 'User not exists!', 404 ) })
    },

    async update( id: string, data: iUserUpdate ): Promise<iUserResponse> {
        const { update } = new userModel

        return await update( id, data ).then( async (user): Promise<iUserResponse> => {
            return await responseUserSerializer.validate( user, { stripUnknown: true })
        }).catch( err => { throw new AppError( err ) })
    },

    async delet( id: string ): Promise<{}> {
        const { delet } = new userModel

        return await delet( id ).catch( err => { 
            throw new AppError( 'User not exists!', 404 ) 
        })
    }
}

export { userService }
