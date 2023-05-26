import { iAdditionaDataResponse } from './additional-data.interface';
import { iContactResponse } from './contact.interface';

interface iUserRequest {
  full_name: string;
  email: string;
  telephone: string;
}

type iUserUpdate = iUserRequest

interface iUserResponse extends iUserRequest {
  id: string;
  registerAt: Date;
  additional_data: iAdditionaDataResponse;
  contacts: iContactResponse[] | [];
}

export { iUserRequest, iUserUpdate, iUserResponse };
