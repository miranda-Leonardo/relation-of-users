import { IndexModel } from './index.model';
import { Repository } from 'typeorm';
import { Contact } from '../entities/contact.entity';

class ContactModel extends IndexModel {
  protected repository: Repository<Contact>;
}

export { ContactModel };
