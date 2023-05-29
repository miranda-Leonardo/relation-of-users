import { iAdditionalDataResponse } from './additional-data.interface';
import { iContactResponse } from './contact.interface';

interface iUserRequest {
  full_name: string;
  email: string;
  telephone: string;
}

interface iUserUpdate extends iUserRequest {
  additional_data: iAdditionalDataResponse;
  contactId: string;
}

interface iUserResponse extends iUserRequest {
  id: string;
  registerAt: Date;
  additional_data: iAdditionalDataResponse;
  contacts: iContactResponse[];
}

export { iUserRequest, iUserUpdate, iUserResponse };
