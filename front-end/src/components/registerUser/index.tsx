import { iUserRequest } from "../../interfaces/user.interface"
import { Button } from "../Contacts/styled"
import { Container } from "./styled"
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import { instanceAxios } from "../../services"
import { useContext } from "react"
import { DataProvider } from "../../context"
import { iAxiosUserResponse } from "../../interfaces/axios-response.interface"

const registerSchema = yup.object().shape({
  full_name: yup.string().required(),
  email: yup.string().email().required(),
  telephone: yup.string().required()
})

interface iRegisterUser {
  title?: string
}

const RegisterUser = ({ title = "Criar usuário" }: iRegisterUser) => {
  const { register, handleSubmit } = useForm<iUserRequest>({
    mode: 'onSubmit',
    resolver: yupResolver(
      registerSchema,
      { stripUnknown: true }
    )
  })

  const { user, setUser, contacts, setContacts } = useContext( DataProvider )

  const registerUser = async (data: iUserRequest) => {
    await instanceAxios.post<null, iAxiosUserResponse>('/user', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then( ({ data }): string => {
      if( user ){
        contacts ? setContacts([ ...contacts, data ]) : setContacts([ data ])

        return 'Cadastro realizado com sucesso'
      }

      setUser( data )

      return 'Cadastro realizado com sucesso'
    })
    .catch( err => console.error( err ))
  }

  return(
    <Container>
        <p>{ title }</p>
        <form onSubmit={ handleSubmit( registerUser )}>
          <label htmlFor="full_name">Nome</label>
          <input
            type="text"
            id="full_name"
            { ...register('full_name')}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            { ...register('email')}
          />
          <label htmlFor="telephone">Telefone</label>
          <input
            type="text"
            id="telephone"
            { ...register('telephone')}
          />
          <Button type="submit">Enviar</Button>
        </form>
    </ Container>
  )
}

export default RegisterUser
