import * as yup from 'yup';
import { Schema } from 'yup';
import {
  iAdditionalDataRequest,
  iAdditionalDataResponse,
} from '../interfaces/additional-data.interface';

const createAdditionalDataSerialzier: Schema<iAdditionalDataRequest> = yup
  .object()
  .shape({
    email: yup.string().email().max( 250 ).required({ email: 'is required' }),
    telephone: yup.string().min( 11 ).max( 11 ).required({ telephone: 'is required' }),
  });

const responseAdditionalDataSerialzier: Schema<iAdditionalDataResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    email: yup.string().email().max( 250 ).required(),
    telephone: yup.string().min( 11 ).max( 11 ).required(),
  });

export { createAdditionalDataSerialzier, responseAdditionalDataSerialzier };
