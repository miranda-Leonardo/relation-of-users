import { IndexModel } from './index.model';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

class UserModel extends IndexModel {
  protected repository: Repository<User>;

  async getById( id: string ): Promise<User> {
    return await this.repository.findOneOrFail({
      where: { id: id },
      relations: {
        additional_data: true,
        contacts: true,
      },
    })
  }
}

export { UserModel };
