import * as yup from 'yup';
import { Schema } from 'yup'
import { iAdditionaDataResponse } from '../interfaces/additional-data.interface';

const responseAdditionalDataSerialzier: Schema<iAdditionaDataResponse> = yup.object().shape({
    id: yup.string().required(),
    email: yup.string().email().required(),
    telephone: yup.number().min(11).max(11).required()
})

export { responseAdditionalDataSerialzier }
