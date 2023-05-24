import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import { iUserRequest, iUserResponse } from "../interfaces/user.interface";

class userModel {
    private userRepository = AppDataSource.getRepository( User )

    async create( data: iUserRequest ): Promise<iUserResponse> {
        const createdUser = this.userRepository.create( data )
        await this.userRepository.save( createdUser )
        
        return createdUser
    }

    async findUserByEmail( email: string ): Promise<User | null> {
        return await this.userRepository.findOne({ 
            where: { email: email },
            relations:{
                additional_data: true,
                contacts: true
            }
        })
    }
}

export { userModel }
