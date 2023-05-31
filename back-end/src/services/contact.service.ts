import { Contact } from '../entities/contact.entity';
import { User } from '../entities/user.entity';
import { AppError } from '../errors/app.error';
import { iContactRequest } from '../interfaces/contact.interface';
import { ContactModel } from '../models/contact.model';
import { UserModel } from '../models/user.model';
import { responseContactGetByIdSerializer, responseContactSerializer } from '../serializers/contact.serializer';

const contact = new ContactModel( Contact );

const contactService = {
  create: async ( data: iContactRequest ) => {
    return await contact
      .create( data )
      .then(( res ) => {
        return responseContactSerializer.validate( res, { stripUnknown: true });
      })
      .catch(( err ) => {
        throw new AppError( 'Contact already exist!', 409 );
      });
  },

  getById: async ( id: string ) => {
    return await contact.getById( id ).then( res => {
      return responseContactGetByIdSerializer.validate( res, { stripUnknown: true })
    }).catch( err => {
      throw new AppError( 'Contact not exist!', 404 );
    })
  },

  delet: async ( id: string ) => {
    return await contact.getById( id ).then( async res => {
      await contact.delet( id )

      await new UserModel( User ).delet( res.contact.id )

      return {}
    }).catch( err => {
      throw new AppError( 'Contact not exist!', 404 );
    })
  }
};

export { contactService };
