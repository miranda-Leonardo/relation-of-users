import { IndexModel } from './index.model';
import { Repository } from 'typeorm';
import { iAdditionalDataResponse } from '../interfaces/additional-data.interface';

class AdditionalDataModel extends IndexModel {
  protected repository: Repository<iAdditionalDataResponse>;
}

export { AdditionalDataModel };
