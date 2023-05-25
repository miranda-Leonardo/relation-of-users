interface iAdditionaDataRequest {
    email: string
    telephone: string
}

interface iAdditionaDataUpdate extends iAdditionaDataRequest {}

interface iAdditionaDataResponse extends iAdditionaDataRequest {
    id: string
}

export {
    iAdditionaDataRequest,
    iAdditionaDataUpdate,
    iAdditionaDataResponse
}