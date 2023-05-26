interface iAdditionaDataRequest {
  email: string;
  telephone: string;
}

type iAdditionaDataUpdate = iAdditionaDataRequest

interface iAdditionaDataResponse extends iAdditionaDataRequest {
  id: string;
}

export { iAdditionaDataRequest, iAdditionaDataUpdate, iAdditionaDataResponse };
