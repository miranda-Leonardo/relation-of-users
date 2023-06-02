
export interface iAdditionalDataRequest {
  email: string;
  telephone: string;
}

export interface iAdditionalDataResponse extends iAdditionalDataRequest {
  id: string
}
