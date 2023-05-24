import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import { iUserRequest, iUserResponse, iUserUpdate } from "../interfaces/user.interface";

class userModel {
    private userRepository = AppDataSource.getRepository( User )

    async create( data: iUserRequest ): Promise<iUserResponse> {
        const createdUser = this.userRepository.create( data )
        await this.userRepository.save( createdUser )
        
        return createdUser
    }

    async findByEmail( email: string ): Promise<User | null> {
        return await this.userRepository.findOneBy({ email: email })
    }

    async getById( id: string ): Promise<User | null> {
        return await this.userRepository.findOne({
            where: { id: id },
            relations: {
                additional_data: true,
                contacts: true
            }
        })
    }

    async update( id: string, data: iUserUpdate ): Promise<iUserResponse | null> {
        return await this.getById( id ).then( async (user): Promise<iUserResponse | null> => {
            if( user ){
                await this.userRepository.update( { id: id }, data )

                return { ...user, ...data }
            }

            return null
        })
    }
}

export { userModel }
