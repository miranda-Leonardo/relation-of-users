import { IndexModel } from './index.model';
import { Repository } from 'typeorm';
import { iUserResponse } from '../interfaces/user.interface';

class UserModel extends IndexModel {
  protected repository: Repository<iUserResponse>;

  async getById( id: string ) {
    return await this.repository.findOneOrFail({
      where: { id: id },
      relations: {
        additional_data: true,
        contacts: { contact: true },
      },

    })
  }
}

export { UserModel };
