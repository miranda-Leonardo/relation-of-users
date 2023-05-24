import { User } from "../entities/user.entity";
import { AppError } from "../errors/app.error";
import { iUserRequest, iUserResponse } from "../interfaces/user.interface";
import { userModel } from "../models/user.model";
import { responseUserSerializer } from "../serializers/user.serializer";

const userService = {
    async create( data: iUserRequest ): Promise<iUserResponse> {
        const { create, findUserByEmail } = new userModel
        
        findUserByEmail( data.email ).then( user => { throw new AppError( 'User already exist!', 409 ) })

        return create( data ).then( async ( user ): Promise<iUserResponse> => {
            return await responseUserSerializer.validate( user, { stripUnknown: true })
        })
    }
}

export { userService }
