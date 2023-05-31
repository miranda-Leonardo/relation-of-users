import { EntityTarget, Repository } from 'typeorm';
import { AppDataSource } from '../data-source';
import { Contact } from '../entities/contact.entity';
import { AdditionalData } from '../entities/additional-data.entity';
import {
  iAdditionalDataRequest,
  iAdditionalDataUpdate,
} from '../interfaces/additional-data.interface';
import { iContactRequest } from '../interfaces/contact.interface';
import { User } from '../entities/user.entity';
import { iUserRequest, iUserUpdate } from '../interfaces/user.interface';

type iRepository = User | Contact | AdditionalData;
type iEntity = EntityTarget<iRepository>;
type iDataRequest = iUserRequest | iAdditionalDataRequest | iContactRequest;
type iDataUpdate = iUserUpdate | iAdditionalDataUpdate;

class IndexModel {
  protected repository: Repository<iRepository>;

  constructor( entity: iEntity ) {
    this.repository = AppDataSource.getRepository( entity );
  }

  async create( data: iDataRequest ) {
    const created = this.repository.create( data );
    await this.repository.save( created );

    return created;
  }

  async getById( id: string ) {
    return await this.repository.findOneByOrFail({ id: id });
  }

  async update( id: string, data: iDataUpdate ) {
    await this.repository.update({ id: id }, data );
  }

  async delet( id: string ) {
    return await this.repository.delete({ id: id }).then(( res ) => {
      return {};
    });
  }
}

export { IndexModel };
