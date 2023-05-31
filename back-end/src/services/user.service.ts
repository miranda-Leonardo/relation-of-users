import { AdditionalData } from '../entities/additional-data.entity';
import { Contact } from '../entities/contact.entity';
import { User } from '../entities/user.entity';
import { AppError } from '../errors/app.error';
import { iUserRequest, iUserUpdate } from '../interfaces/user.interface';
import { AdditionalDataModel } from '../models/additional-data.model';
import { ContactModel } from '../models/contact.model';
import { UserModel } from '../models/user.model';
import { responseUserSerializer } from '../serializers/user.serializer';

const user = new UserModel( User );

const userService = {
  create: async ( data: iUserRequest ) => {
    return await user
      .create( data )
      .then(( res ) => {
        return responseUserSerializer.validate({
          additional_data: null,
          contacts: [],
          ...res
        }, { stripUnknown: true });
      })
      .catch(( err ) => {
        throw new AppError( 'User already exist!', 409 );
      });
  },

  getById: async ( id: string ) => {
    return await user
      .getById( id )
      .then( res => res )
      .catch(( err ) => {
        throw new AppError( 'User not exists!', 404 );
      });
  },

  update: async ( id: string, data: iUserUpdate ) => {
    return await user
      .getById( id )
      .then( async ( res ) => {
        await user.update( id, data )

        if( data.additional_data ){
          res.additional_data = data.additional_data
        }

        return res
      })
      .catch(( err ) => {
        throw new AppError( 'User not exists!', 404 );
      });
  },

  delet: async ( id: string ) => {
    return await user.getById( id ).then( async res => {
      if( res.additional_data ){
        await new AdditionalDataModel( AdditionalData ).delet( res.additional_data.id )
      }

      if( res.contacts ){
        await res.contacts.forEach( async ({ id }) => {
          await new ContactModel( Contact ).delet( id )
        })
      }

      return await user.delet( id )
    }).catch(( err ) => {
      throw new AppError( 'User not exists!', 404 );
    });
  },
};

export { userService };
