import { iUserResponse } from "./user.interface";

interface iContactRequest {
  contact: iUserResponse;
  user: iUserResponse
}

interface iContactResponse extends iContactRequest {
  id: string;
}

export { iContactRequest, iContactResponse };
