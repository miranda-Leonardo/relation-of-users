import * as yup from 'yup';
import { Schema } from 'yup';
import { iContactRequest, iContactResponse } from '../interfaces/contact.interface';
import { responseUserSerializer } from './user.serializer';
import { iUserResponse } from '../interfaces/user.interface';

const createContactSerializer: Schema<iContactRequest | object> = yup.object().shape({
  contact: yup.object<iUserResponse>( responseUserSerializer ).required({ contact: 'user is required' })
})

const responseContactSerializer: Schema<iContactResponse | object> = createContactSerializer.concat(
  yup.object().shape({
    id: yup.string().required({ id: 'is required' }),
  })
);

export {
  createContactSerializer,
  responseContactSerializer
};
