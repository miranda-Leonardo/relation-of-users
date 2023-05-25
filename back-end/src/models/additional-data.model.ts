import { indexModel } from "./index.model";
import { Repository } from "typeorm";
import { iAdditionaDataResponse } from "../interfaces/additional-data.interface";

class additionalDataModel extends indexModel {
    protected repository: Repository<iAdditionaDataResponse>;

    async getById( id: string ) {
        return await this.repository.findOneByOrFail({ id: id })
    }
}

export { additionalDataModel }
