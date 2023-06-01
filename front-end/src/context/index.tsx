import { useState, createContext } from 'react'
import { iContact } from './interfaces/contac.interface'
import { iUser } from './interfaces/user.interface'

export interface iDataProvider {
  user: iUser | null,
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>,
  contacts: iContact[] | [],
  setContacts: React.Dispatch<React.SetStateAction<iContact[] | []>>
}

export const DataProvider = createContext<iDataProvider>({} as iDataProvider)

const Context = ({ children }: any) => {
  const [user, setUser] = useState<iUser | null>(null)

  const [contacts, setContacts] = useState<iContact[] | []>([])

  return(
    <DataProvider.Provider
      value={{
        user,
        setUser,
        contacts,
        setContacts
      }}
    >
      { children }
    </DataProvider.Provider>
  )
}

export default Context
