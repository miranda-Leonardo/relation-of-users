import { iAdditionalDataResponse } from "./additional-data.interface"
import { iContact } from "./contac.interface"

export interface iUserRequest {
  full_name: string,
  email: string,
  telephone: string
}

export interface iUserResponse {
  id: string,
  full_name: string,
  email: string,
  telephone: string,
  registerAt: string,
  additional_data: iAdditionalDataResponse | null,
  contacts: iContact[] | null
}
