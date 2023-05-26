import * as yup from 'yup';
import { Schema, AnySchema } from 'yup';
import { iUserRequest, iUserResponse } from '../interfaces/user.interface';

const createUserSerializer: Schema<iUserRequest> = yup.object().shape({
  full_name: yup.string().max( 250 ).required(),
  email: yup.string().email().required(),
  telephone: yup.string().min( 11 ).max( 11 ).required(),
});

const responseUserSerializer: AnySchema<iUserResponse> =
  createUserSerializer.concat(
    yup.object().shape({
      id: yup.string().required(),
      registerAt: yup.date().required(),
    })
  );

export { createUserSerializer, responseUserSerializer };
