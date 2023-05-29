import * as yup from 'yup';
import { Schema, AnySchema, ObjectSchema } from 'yup';
import { iUserRequest, iUserResponse } from '../interfaces/user.interface';
import { responseAdditionalDataSerialzier } from './additional-data.serializer';
import { responseContactSerializer } from './contact.serializer';
import { iAdditionalDataResponse } from '../interfaces/additional-data.interface'
import { iContactResponse } from '../interfaces/contact.interface';

const createUserSerializer: Schema<iUserRequest> = yup.object().shape({
  full_name: yup.string().max( 250 ).required({ full_name: 'is required'}),
  email: yup.string().email().required({ email: 'is required'}),
  telephone: yup.string().min( 11 ).max( 11 ).required({ telephone: 'is required'}),
});

const responseUserSerializer: AnySchema<iUserResponse> =
  createUserSerializer.concat(
    yup.object().shape({
      id: yup.string().required({ id: 'is required' }),
      registerAt: yup.date().required({ registerAt: 'is required' }),
      additional_data: yup.object<iAdditionalDataResponse>( responseAdditionalDataSerialzier ).notRequired(),
      contacts: yup.array<iContactResponse>().of( responseContactSerializer ).notRequired()
    })
  );

export { createUserSerializer, responseUserSerializer };
