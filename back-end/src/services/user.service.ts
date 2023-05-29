import { Contact } from '../entities/contact.entity';
import { User } from '../entities/user.entity';
import { AppError } from '../errors/app.error';
import { iUserRequest, iUserResponse, iUserUpdate } from '../interfaces/user.interface';
import { iContactResponse } from '../interfaces/contact.interface';
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

  update: async ( id: string, { contactId, ...data }: iUserUpdate ) => {
    return await user
      .getById( id )
      .then( async ( res ) => {
        await user.update( id, data )

        return { ...res, ...data }
      })
      .catch(( err ) => {
        throw new AppError( 'User not exists!', 404 );
      });
  },

  delet: async ( id: string ) => {
    return await user.delet( id ).catch(( err ) => {
      throw new AppError( 'User not exists!', 404 );
    });
  },
};

export { userService };
