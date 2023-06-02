import { useState, createContext } from 'react'
import { iContact } from '../interfaces/contac.interface'
import { iUserResponse } from '../interfaces/user.interface'

export interface iDataProvider {
  user: iUserResponse | undefined,
  setUser: React.Dispatch<React.SetStateAction<iUserResponse | undefined>>,
  contact: iUserResponse | undefined,
  setContact: React.Dispatch<React.SetStateAction<iUserResponse | undefined>>,
  contacts: iContact[],
  setContacts: React.Dispatch<React.SetStateAction<iContact[]>>
}

export const DataProvider = createContext<iDataProvider>({} as iDataProvider)

const Context = ({ children }: any) => {
  const [user, setUser] = useState<iUserResponse>()
  const [contact, setContact] = useState<iUserResponse>()
  const [contacts, setContacts] = useState<iContact[]>([])

  return(
    <DataProvider.Provider
      value={{
        user,
        setUser,
        contact,
        setContact,
        contacts,
        setContacts
      }}
    >
      { children }
    </DataProvider.Provider>
  )
}

export default Context
