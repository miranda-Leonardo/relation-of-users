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
    },

    getById: async ( id: string ) => {
        return await additionalData.getById( id ).then( res => {
            return responseAdditionalDataSerialzier.validate( res, { stripUnknown: true })
        }).catch( err => { throw new AppError( 'Data already exists!', 409 )})
    },

    update: async ( id: string, data: iAdditionaDataRequest ) => {
        return await additionalData.getById( id ).then( async ( res ) => {
            await additionalData.update( id, data )

            return responseAdditionalDataSerialzier.validate( { ...res, ...data }, { stripUnknown: true })
        }).catch( err => { throw new AppError( 'Data already exists!', 409 )})
    },

    delet: async ( id: string ) => {
        return await additionalData.delet( id ).catch( err => {
            throw new AppError( 'Data already exists!', 409 )
        })
    }
}

export { AdditionalDataService }
