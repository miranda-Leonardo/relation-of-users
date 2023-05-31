import { IndexModel } from './index.model';
import { Repository } from 'typeorm';
import { Contact } from '../entities/contact.entity';

class ContactModel extends IndexModel {
  protected repository: Repository<Contact>;

  async getById( id: string ) {
    return await this.repository.findOneOrFail({
      where: { id: id },
      relations: {
        contact: true
      }
    })
  }
}

export { ContactModel };
