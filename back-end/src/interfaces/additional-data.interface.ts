interface iAdditionalDataRequest {
  email: string;
  telephone: string;
}

type iAdditionalDataUpdate = iAdditionalDataRequest

interface iAdditionalDataResponse extends iAdditionalDataRequest {
  id: string;
}

export { iAdditionalDataRequest, iAdditionalDataUpdate, iAdditionalDataResponse };
