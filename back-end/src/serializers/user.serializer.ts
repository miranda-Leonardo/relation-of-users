import * as yup from 'yup';
import { Schema, AnySchema } from 'yup'
import { iUserRequest, iUserResponse } from '../interfaces/user.interface'
import { responseAdditionalDataSerialzier } from './additional-data.serializer';
import { responseContactSerializer } from './contact.serializer';

const createUserSerializer: Schema<iUserRequest> = yup.object().shape({
    full_name: yup.string().length(250).required(),
    email: yup.string().email().required(),
    telephone: yup.number().min(11).max(11).required()
})

const responseUserSerializer: AnySchema<iUserResponse> = createUserSerializer.concat(
    yup.object().shape({
        id: yup.string().required(),
        registerAt: yup.date().required(),
        additional_data: responseAdditionalDataSerialzier.clone(),
        contacts: yup.array().of(responseContactSerializer).required()
    })
)

export {
    createUserSerializer,
    responseUserSerializer
}
