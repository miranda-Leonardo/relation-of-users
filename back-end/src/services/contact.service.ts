import { Contact } from '../entities/contact.entity';
import { AppError } from '../errors/app.error';
import { iContactRequest } from '../interfaces/contact.interface';
import { contactModel } from '../models/contact.model';
import { responseContactSerializer } from '../serializers/contact.serializer';

const contact = new contactModel( Contact );

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
};

export { contactService };
