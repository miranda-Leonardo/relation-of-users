import * as yup from 'yup';
import { Schema } from 'yup';
import { iContactGetByIdResponse, iContactRequest, iContactResponse } from '../interfaces/contact.interface';
import { responseUserSerializer } from './user.serializer';
import { iUserResponse, iUserResponsePartial } from '../interfaces/user.interface';

const createContactSerializer: Schema<iContactRequest | object> = yup.object().shape({
  contact: yup.object<iUserResponse>( responseUserSerializer ).required({ contact: 'user is required' })
})

const responseContactSerializer: Schema<iContactResponse> = yup.object().shape({
  contact: yup.object().shape({
    id: yup.string().required(),
    full_name: yup.string().required(),
    email: yup.string().required()
  }),
  user: yup.object().shape({
    id: yup.string().required(),
    full_name: yup.string().required(),
    email: yup.string().required()
  }),
  id: yup.string().required(),
});

const responseContactGetByIdSerializer: Schema<iContactGetByIdResponse | object> = yup.object().shape({
  id: yup.string().required(),
  contact: yup.object().shape({
    id: yup.string().required(),
    full_name: yup.string().required(),
    email: yup.string().required(),
    telephone: yup.string().required(),
    registerAt: yup.string().required(),
  })
})

export {
  createContactSerializer,
  responseContactSerializer,
  responseContactGetByIdSerializer
};
