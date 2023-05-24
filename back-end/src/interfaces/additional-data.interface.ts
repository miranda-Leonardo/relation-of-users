interface iAdditionaDataRequest {
    email: string
    telephone: number
}

interface iAdditionaDataResponse extends iAdditionaDataRequest {
    id: string
}

export {
    iAdditionaDataRequest,
    iAdditionaDataResponse
}