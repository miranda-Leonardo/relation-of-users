import { iAdditionalDataResponse } from './additional-data.interface';
import { iContactResponse } from './contact.interface';

interface iUserRequest {
  full_name: string;
  email: string;
  telephone: string;
}

interface iUserUpdate extends iUserRequest {
  additional_data: iAdditionalDataResponse;
  contact: iContactResponse;
}

interface iUserResponse extends iUserRequest {
  id: string;
  registerAt: Date;
  additional_data: iAdditionalDataResponse;
  contacts: iContactResponse[];
}

interface iUserResponsePartial {
  id: string
  full_name: string,
  email: string
}

export { iUserRequest, iUserUpdate, iUserResponse, iUserResponsePartial };
