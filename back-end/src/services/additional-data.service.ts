import { AdditionalData } from '../entities/additional-data.entity';
import { AppError } from '../errors/app.error';
import { iAdditionalDataRequest } from '../interfaces/additional-data.interface';
import { AdditionalDataModel } from '../models/additional-data.model';
import { responseAdditionalDataSerialzier } from '../serializers/additional-data.serializer';

const additionalData = new AdditionalDataModel( AdditionalData );

const AdditionalDataService = {
  create: async ( data: iAdditionalDataRequest ) => {
    return await additionalData
      .create( data )
      .then(( res ) => {
        return responseAdditionalDataSerialzier.validate( res, {
          stripUnknown: true,
        });
      })
      .catch(( err ) => {
        throw new AppError( 'Data already exists!', 409 );
      });
  },

  getById: async ( id: string ) => {
    return await additionalData
      .getById( id )
      .then(( res ) => {
        return responseAdditionalDataSerialzier.validate( res, {
          stripUnknown: true,
        });
      })
      .catch(( err ) => {
        throw new AppError( 'Data not exist!', 404 );
      });
  },

  update: async ( id: string, data: iAdditionalDataRequest ) => {
    return await additionalData
      .getById( id )
      .then( async ( res ) => {
        await additionalData.update( id, data );

        return responseAdditionalDataSerialzier.validate(
          { ...res, ...data },
          { stripUnknown: true }
        );
      })
      .catch(( err ) => {
        throw new AppError( err.errors );
      });
  },

  delet: async ( id: string ) => {
    return await additionalData.delet( id ).catch(( err ) => {
      throw new AppError( err.errors );
    });
  },
};

export { AdditionalDataService };
