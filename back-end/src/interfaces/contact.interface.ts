import { iUserResponse, iUserResponsePartial } from './user.interface';

interface iContactRequest {
  contact: iUserResponse;
  user: iUserResponse
}

interface iContactResponse {
  contact?: iUserResponsePartial,
  user?: iUserResponsePartial,
  id?: string;
}

interface iContactGetByIdResponse {
  id: string
  contact: {
    id: string
    full_name: string
    email: string
    telephone: string
    registerAt: string
  }
}

export { iContactRequest, iContactResponse, iContactGetByIdResponse };
