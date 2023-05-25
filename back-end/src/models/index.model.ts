import { EntityTarget, Repository } from "typeorm";
import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import { iUserRequest, iUserUpdate } from "../interfaces/user.interface";
import { Contact } from "../entities/contact.entity";
import { AdditionalData } from "../entities/additional-data.entity";
import { iAdditionaDataRequest, iAdditionaDataUpdate } from "../interfaces/additional-data.interface";
import { iContactRequest } from "../interfaces/contact.interface";

type iRepository = User | Contact | AdditionalData
type iEntity = EntityTarget<iRepository>
type iDataRequest = iUserRequest | iAdditionaDataRequest | iContactRequest
type iDataUpdate = iUserUpdate | iAdditionaDataUpdate

class indexModel {
    protected repository: Repository<iRepository>

    constructor( entity: iEntity ){
        this.repository = AppDataSource.getRepository( entity )
    }

    async create( data: iDataRequest ) {
        const created = this.repository.create( data )
        await this.repository.save( created )
        
        return created
    }

    async update( id: string, data: iDataUpdate ) {
        await this.repository.update( { id: id }, data )
    }

    async delet( id: string ) {
        return await this.repository.delete({ id: id }).then( res => { return {} } )
    }
}

export { indexModel }
