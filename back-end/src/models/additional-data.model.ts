import { IndexModel } from './index.model';
import { Repository } from 'typeorm';
import { AdditionalData } from '../entities/additional-data.entity';

class AdditionalDataModel extends IndexModel {
  protected repository: Repository<AdditionalData>;
}

export { AdditionalDataModel };
