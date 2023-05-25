import { AppError } from "../errors/app.error";
import { iUserRequest, iUserResponse, iUserUpdate } from "../interfaces/user.interface";
import { userModel } from "../models/user.model";
import { responseUserSerializer } from "../serializers/user.serializer";

const userService = {
    create: async ( data: iUserRequest ): Promise<iUserResponse | void> => {
        return await new userModel().create( data ).then( async ( user ): Promise<iUserResponse> => {
            return await responseUserSerializer.validate( user, { stripUnknown: true })
        }).catch( err => { 
            throw new AppError( 'User already exist!', 409 ) 
        })
    },

    getById: async ( id: string ): Promise<iUserResponse | void> => {
        return await new userModel().getById( id ).then( async ( user ): Promise<iUserResponse> => {
            return await responseUserSerializer.validate( user, { stripUnknown: true })
        }).catch( err => { 
            throw new AppError( 'User not exists!', 404 )
        })
    },

    update: async ( id: string, data: iUserUpdate ): Promise<iUserResponse> => {
        return await new userModel().getById( id ).then( async ( user ): Promise<iUserResponse> => {
            await new userModel().update( id, data )
            
            return await responseUserSerializer.validate( { ...user, ...data }, { stripUnknown: true })
        }).catch( err => { throw new AppError( 'User not exists!', 404 ) })
    },

    delet: async ( id: string ): Promise<{}> => {
        return await new userModel().delet( id ).catch( err => { 
            throw new AppError( 'User not exists!', 404 ) 
        })
    }
}

export { userService }
