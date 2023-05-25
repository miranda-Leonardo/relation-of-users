interface iAdditionaDataRequest {
    email: string
    telephone: string
}

interface iAdditionaDataResponse extends iAdditionaDataRequest {
    id: string
}

export {
    iAdditionaDataRequest,
    iAdditionaDataResponse
}