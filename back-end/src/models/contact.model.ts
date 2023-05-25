import { indexModel } from "./index.model";
import { Repository } from "typeorm";
import { Contact } from "../entities/contact.entity";

class contactModel extends indexModel {
    protected repository: Repository<Contact>
}

export { contactModel }
