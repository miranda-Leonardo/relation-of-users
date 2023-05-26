import * as yup from 'yup';
import { Schema } from 'yup';
import {
  iAdditionaDataRequest,
  iAdditionaDataResponse,
} from '../interfaces/additional-data.interface';

const createAdditionalDataSerialzier: Schema<iAdditionaDataRequest> = yup
  .object()
  .shape({
    email: yup.string().email().max( 250 ).required(),
    telephone: yup.string().min( 11 ).max( 11 ).required(),
  });

const responseAdditionalDataSerialzier: Schema<iAdditionaDataResponse> = yup
  .object()
  .shape({
    id: yup.string().required(),
    email: yup.string().email().max( 250 ).required(),
    telephone: yup.string().min( 11 ).max( 11 ).required(),
  });

export { createAdditionalDataSerialzier, responseAdditionalDataSerialzier };
