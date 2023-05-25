import { User } from "../entities/user.entity";
import { AppError } from "../errors/app.error";
import { iUserRequest, iUserUpdate } from "../interfaces/user.interface";
import { userModel } from "../models/user.model";
import { responseUserSerializer } from "../serializers/user.serializer";

const user = new userModel( User )

const userService = {
    create: async ( data: iUserRequest ) => {
        return await user.create( data ).then( res => {
            return responseUserSerializer.validate( res, { stripUnknown: true })
        }).catch( err => { throw new AppError( 'User already exist!', 409 )})
    },

    getById: async ( id: string ) => {
        return await user.getById( id ).then( res => {
            return responseUserSerializer.validate( res, { stripUnknown: true })
        }).catch( err => { throw new AppError( 'User not exists!', 404 )})
    },

    update: async ( id: string, data: iUserUpdate ) => {
        return await user.getById( id ).then( async ( res ) => {
            await user.update( id, data )
            
            return responseUserSerializer.validate( { ...res, ...data }, { stripUnknown: true })
        }).catch( err => { throw new AppError( 'User not exists!', 404 )})
    },

    delet: async ( id: string ) => {
        return await user.delet( id ).catch( err => { 
            throw new AppError( 'User not exists!', 404 ) 
        })
    }
}

export { userService }
