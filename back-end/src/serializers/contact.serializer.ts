import * as yup from 'yup';
import { Schema } from 'yup';
import { iContactResponse } from '../interfaces/contact.interface';

const responseContactSerializer: Schema<iContactResponse> = yup.object().shape({
  id: yup.string().required(),
  contact_userId: yup.string().required(),
});

export { responseContactSerializer };
