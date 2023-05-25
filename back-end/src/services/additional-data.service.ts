import { AdditionalData } from "../entities/additional-data.entity"
import { AppError } from "../errors/app.error"
import { iAdditionaDataRequest, iAdditionaDataResponse } from "../interfaces/additional-data.interface"
import { additionalDataModel } from "../models/additional-data.model"
import { responseAdditionalDataSerialzier } from "../serializers/additional-data.serializer"

const additionalData = new additionalDataModel( AdditionalData )

const AdditionalDataService = {
    create: async ( data: iAdditionaDataRequest ) => {
        return await additionalData.create( data ).then( res => {
            return responseAdditionalDataSerialzier.validate( res, { stripUnknown: true })
        }).catch( err => { throw new AppError( 'Data already exists!', 409 )})
    }
}

export { AdditionalDataService }
