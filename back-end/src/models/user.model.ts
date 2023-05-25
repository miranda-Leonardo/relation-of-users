import { Repository } from "typeorm";
import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import { iUserRequest, iUserResponse, iUserUpdate } from "../interfaces/user.interface";

class userModel {
    private userRepository: Repository<User>

    constructor(){
        this.userRepository = AppDataSource.getRepository( User );
    }

    async create( data: iUserRequest ): Promise<iUserResponse> {
        const createdUser = this.userRepository.create( data )
        await this.userRepository.save( createdUser )
        
        return createdUser
    }

    async getById( id: string ): Promise<iUserResponse> {
        return await this.userRepository.findOneOrFail({
            where: { id: id },
            relations: {
                additional_data: true,
                contacts: true
            }
        })
    }

    async update( id: string, data: iUserUpdate ): Promise<void> {
        await this.userRepository.update( { id: id }, data )
    }

    async delet( id: string ): Promise<{}> {
        return await this.userRepository.delete({ id: id }).then( (user) => { return {} } )
    }
}

export { userModel }
